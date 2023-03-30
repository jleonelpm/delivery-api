const Categorias = require("../models/Categorias");

exports.findAll = async (req, res) => {

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

  const data = req.body
  //console.log(data)

     const cat = new Categorias({
      ...data
    }) 

  result = cat.save(async (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Data inserted");
    }

  })

}

