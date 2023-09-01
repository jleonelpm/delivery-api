const Productos = require("../models/Productos");

exports.findAll = (req, res) => {
  Productos.find({})
    .then((data) => {
      //console.log(data);
      res.send(data);
    })
    .Productch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Productos.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .Productch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id =" + id });
    });
};

exports.findByCategory = (req, res) => {
  const category = req.params.Productegoria;

  Productos.find({ categorias: category })
    .then((data) => {
      if (!data)
        res.status(404).send({
          message: "Not found Product with Productegoria " + category,
        });
      else res.send(data);
    })
    .Productch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with Productegoria =" + category,
      });
    });
};

exports.findByText = (req, res) => {
  const keyword = req.params.text;

  const regex = new RegExp(keyword, "i"); // 'i' flag for case-insensitive matching

  //const result = await collection.find({ field: { $regex: regex } }).toArray();

  Productos.find({ nombre: { $regex: regex } })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Product with this word " + keyword });
      else res.send(data);
    })
    .Productch((err) => {
      res.status(500).send({
        message: "Error retrieving Products with this word =" + keyword,
      });
    });
};

exports.findLastProductInserted = (req, res) => {
  Productos.findOne()
    .sort({ _id: -1 })
    .exec()
    .then((data) => res.send(data))
    .Productch((error) => {
      res
        .status(500)
        .send({ message: "Error getting the last Product inserted" });
    });
};

exports.addProduct = async (req, res) => {
  const data = req.body;
  //console.log(data)

  const product = new Productos({
    ...data,
  });

  const result = await product.save();
  //res.status(201).json(result);
  res.send("Data inserted");

  /*    result = await product.save( (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Data inserted");
    } 

  }) */
};

exports.findLastProductInserted = (req, res) => {
  Productos.findOne()
    .sort({ _id: -1 })
    .exec()
    .then((data) => res.send(data))
    .Productch((error) => {
      res
        .status(500)
        .send({ message: "Error getting the last Product inserted" });
    });
};

exports.updateProduct = async (req, res) => {
  try {
    //const id = req.params._id;
    const { id } = req.params;
    //console.log(id);

    const data = req.body;

    const updatedProduct = await Productos.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    //res.json(updatedProduct);
    //res.send("Data updated");


    res.status(200).json({
      status: "success"
    });

  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};
