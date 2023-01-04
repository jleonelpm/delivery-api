const Productos = require("../models/Productos");

exports.findAll = (req, res) => {

  Productos.find({})
    .then(data => {
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

  Productos.find({categorias : category})
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