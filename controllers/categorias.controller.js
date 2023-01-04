const Categorias = require("../models/Categorias");

exports.findAll = (req, res) => {
  
    Categorias.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories."
        });
      });
  };
