import express from "express";
const router = express.Router();

const contacts = [
  {
    id: 1,
    firstName: "Niloufar",
    lastName: "Khaefi",
  },
  {
    id: 2,
    firstName: "Hadis",
    lastName: "Jamali",
  },
  {
    id: 3,
    firstName: "Katy",
    lastName: "YousefZadeh",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ data: contacts, message: "ok" });
});

router.post("/", (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  res.status(201).json({ data: contacts, message: "ok" });
});

router.get("/:id", (req, res) => {
  const contactId = +req.params.id;
  const contact = contacts.find((c) => c.id === contactId);
  res.json({ data: contact, message: "ok" });
});

router.put("/", (req, res) => {
  const contactId = +req.body.id;
  const updatedContact = contacts.find((c) => c.id === contactId);
  if (!updatedContact) {
    return res.status(400).send("Contact with this id doesn't exsist");
  }
  updatedContact.firstName = req.body.firstName;
  updatedContact.lastName = req.body.lastName;

  res.json({ data: updatedContact, message: "ok" });
});

router.delete("/", (req, res) => {
  const contactId = +req.body.id;
  const constactIndex = contacts.findIndex(c => c.id === contactId);
  console.log(contactId, contacts, contacts[constactIndex]);
  if (constactIndex === -1) {
    return res.send(" no contact with this id");
  }

  contacts.splice(constactIndex, 1);
  res.json({ data: contacts, message: "contact deleted successfully" });
});

export default router;
