var express = require("express");
var router = express.Router();

const { write } = require('../helpers/FileHelper');
let data = require('../data/categories.json');

const fileName = './data/categories.json';

// let  data = [
//   { id: 1, name: "Mobile Phone", description: "Điện thoại" },
//   { id: 2, name: "Fashion", description: "Thời trang" },
//   { id: 3, name: "Toys", description: "Đồ chơi cho trẻ em" },
// ];
router.get("/", function (req, res, next) {
  res.send(data);
});
//create
router.post("/", function (req, res, next) {
  const newItem = req.body;

  //get Max id
  let max = 0;
  data.forEach((item) => {
    if (max < item.id) {
      max = item.id;
    }
  });
  newItem.id = max + 1;
  data.push(newItem);
  write(fileName, data);
  res.send({ ok: true, massage: "Create" });
});
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  data = data.filter((x) => x.id != id);
  write(fileName,data);
  res.send({ ok: true, massage: "Delete" });
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
