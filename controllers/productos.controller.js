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
