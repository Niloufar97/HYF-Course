import express from "express";
import fs from "fs";

const port = process.env.PORT || 3000;
const data = JSON.parse(fs.readFileSync("./document.json"));
const app = express();

app.get("/", (req, res) => {
  res.send("This is a search engine");
});
// GET /search
app.get("/search", (req, res) => {
  const query = req.query.q;
  if (query) {
    const filteredData = data.filter((item) => {
      return Object.values(item).some(
        (value) => typeof value === "string" && value.includes(query)
      );
    });
    if (filteredData.length === 0) {
      return res.send("not found");
    }
    return res.json({ data: filteredData, message: "ok" });
  }
  res.json({ data: data, message: "ok" });
});

// GET /documents/:id
app.get("/search/:id" , (req, res) => {
  const dataId = +req.params.id;
  const myData = data.find(data => data.id === dataId);
  if(!myData){
    return res.status(404).json({data: null , message : "not found"});
  }
 res.json({data: myData , message : "ok"});
});

// POST /search
app.post("/search" , (req, res) => {
  const query = req.query.q;
  const fields = req.body.field;
  if(query && fields){
    res.status(400).send("can't provide both query and field")
  }
  if(query){
    const filteredData = data.filter(item => Object.values(item).some(value => typeof value === "string" && value.includes(query)));
    if(filteredData.length === 0) {
      return res.status(404).json({data : null , message : "not found"})
    }
    return res.json({data : filteredData , message : "ok"});
  }else if(fields){
    const dataWithField = data.filter(item => Object.keys(item).some(value => value === fields));
    if(dataWithField.length === 0){
      return res.status(404).json({data: null , message: "not found"})
    }
    return res.status(200).json({data : dataWithField , message: "ok"})
  }else{
    return res.json({data: data , message: "ok"})
  }
});


app.listen(port, () => console.log(`listening on port ${port}`));
