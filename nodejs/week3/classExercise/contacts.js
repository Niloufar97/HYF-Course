import express from "express"
const router = express.Router();

const contacts = [
    {
        id: 1,
        firstName : "Niloufar",
        lastName : "Khaefi"
    },
    {
        id: 2,
        firstName : "Hadis",
        lastName : "Jamali"
    },
    {
        id: 3,
        firstName : "Katy",
        lastName : "YousefZadeh"
    }
]

router.get("/" , (req, res) => {
    res.status(200).json({data: contacts , message: "ok"});
});

router.post("/" , (req, res) => {
    const newContact = req.body;
    contacts.push(newContact);
    res.status(201).json({data: contacts , message : "ok"})
})

export default router;