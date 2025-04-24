let { people } = require("../data");

//* **`` Adds a person to the people array
function addPerson(req, res) {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }

  people.push({ id: people.length + 1, name: req.body.name });

  res.status(201).json({ success: true, name: req.body.name });
}

//* **`` Returns the people array from the data.js file
function getPeople(req, res) {
  res.status(200).json({ success: true, data: people });
}

//* **`` Finds a person in the people array based off the id passed in the path parameters
function findPerson(req, res) {
  const person = people.find((person) => person.id === Number(req.params.id));

  person
    ? res.status(200).json({ success: true, data: person })
    : res.status(404).json({ success: false, message: "User not found" });
}

//* **`` Removes a person in the people array based off the id passed in the path parameters
function deletePerson(req, res) {
  const personToDelete = people.find(
    (person) => person.id === Number(req.params.id)
  );

  if (!personToDelete) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  people = people.filter((person) => person.id !== Number(req.params.id));

  res.status(200).json({ success: true, removed: personToDelete });
}

module.exports = { addPerson, getPeople, findPerson, deletePerson };
