const Productos = require("../models/Productos");

exports.findAll = (req, res) => {

  Productos.find({})
    .then(data => {
      //console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Productos.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id =" + id });
    });
};

exports.findByCategory = (req, res) => {
  const category = req.params.categoria;

  Productos.find({ categorias: category })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with categoria " + category });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with categoria =" + category });
    });
};

exports.findByText = (req, res) => {
  const keyword = req.params.text;

  const regex = new RegExp(keyword, 'i'); // 'i' flag for case-insensitive matching
  
  //const result = await collection.find({ field: { $regex: regex } }).toArray();

  Productos.find({ nombre: { $regex: regex } })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with this word " + keyword });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Products with this word =" + keyword });
    });
};

exports.findLastProductInserted = (req, res) => {

  Productos.findOne().sort({ _id: -1 }).exec()
    .then(data => res.send(data))
    .catch(error => {
      res
        .status(500)
        .send({ message: "Error getting the last Product inserted" });
    });

};

