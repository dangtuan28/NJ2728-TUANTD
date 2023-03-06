var express = require("express");
var router = express.Router();
const { write } = require('../helpers/FileHelper');
let data = require('../data/customers.json');

const fileName = './data/customers.json';

// let data = [
//     { id: 1, name: 'Peter', email: 'peter@gmail.com', address: 'USA' },
//     { id: 2, name: 'John', email: 'john@gmail.com', address: 'ENGLAND' },
//     { id: 3, name: 'Yamaha', email: 'yamaha@gmail.com', address: 'JAPAN' },
//   ];
router.get("/", function (req, res, next) {
  res.send(data);
});

// Create new data
router.post("/", function (req, res, next) {
  const newItem = req.body;

  // Get max id
  let max = 0;
  data.forEach((item) => {
    if (max < item.id) {
      max = item.id;
    }
  });

  newItem.id = max + 1;

  data.push(newItem);
  write(fileName, data);
  res.send({ ok: true, message: "Created" });
});

// Delete data
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  data = data.filter((x) => x.id != id);
  write(fileName, data);
  res.send({ ok: true, message: "Deleted" });
});

router.patch("/:id", function (req, res, next) {
  const id = req.params.id;
  const patchData = req.body;

  let found = data.find((x) => x.id == id);

  if (found) {
    for (let propertyName in patchData) {
      found[propertyName] = patchData[propertyName];
    }
  }
  write(fileName, data);
  res.send({ ok: true, message: "Updated" });
});

module.exports = router;
