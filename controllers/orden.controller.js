const Orden = require("../models/Ordenes");

exports.findAll = (req, res) => {

  Orden.find({})
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

exports.add = (req, res) => {

  const data = req.body
  //console.log(req.body.direccion)

  /*   console.log(req.body)
    res.send(typeof (data));
   */

  const order = new Orden({
    fecha: Date.now(),
    ...data,
  });


  //res.send(data)

  result = order.save((err, doc) => {
    if (err) res.send(err)
    else res.send({ inserted: "true" })
  })
  //console.log(order);
  //res.send(result)

} 

exports.findOne = (req, res) => {
  const id = req.params.id;

  Orden.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Order with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Order with id =" + id });
    });
};

exports.findLastOrderInserted = (req, res) => {

  Orden.findOne().sort({ _id: -1 }).exec()
    .then(data => res.send(data))
    .catch(error => {
      res
        .status(500)
        .send({ message: "Error getting the last Order inserted" });
    });

};

exports.findAll = (req, res) => {

  Orden.find({})
    .then(data => {
      //console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Orders."
      });
    });
};