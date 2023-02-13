const Orden = require("../models/Ordenes");

exports.test = (req, res) => {
  const data = {
    result: 'successful'
  }

  res.send(data)
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

  result = order.save((err,doc) => {
    if (err) res.send(err)
    else res.send({inserted:"true"})
  })
  //console.log(order);
  //res.send(result)

} 
