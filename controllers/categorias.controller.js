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

  exports.status = (req, res) => {
    const data = {
      result: 'successful'
    }

    res.send(data)
  } 

  exports.addCat = (req, res) => {
    const cat = new Categorias({
      nombre: 'test', //req.body.title,
      imagen: 'imagen.png'//req.body.content,
    })
    cat.save()
    res.send(cat)
  } 
