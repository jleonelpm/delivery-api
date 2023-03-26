const Cliente = require("../models/Cliente");

exports.test = (req, res) => {
  const data = {
    result: 'successful'
  }
  res.send(data)
};

exports.findAll = (req, res) => {

  Cliente.find({})
    .then(data => {
      res.send(data);
    })
    .clientech(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clientes."
      });
    });
};

exports.status = (req, res) => {
  const data = {
    result: 'successful'
  }

  res.send(data)
}

exports.addCliente = (req, res) => {

  const data = req.body


  const cliente = new Cliente({
    ...data
  })

  result = cliente.save((err, doc) => {
    if (err) res.send(err)
    else res.send({ inserted: "true" })
  })

} 
