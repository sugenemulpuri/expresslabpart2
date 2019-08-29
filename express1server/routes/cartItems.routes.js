const express = require("express");
const cartItemsRoutes = express.Router();
// const cartItems = require("./cartItems");
const pool = require("../connection/pg-connection-pool");




function selectWholeCart(req, res) {
  //select all animals, lists all animals from table using postgres code
  pool.query("select * from hiShoppingCart").then(result => {
      res.send(result.rows);
  });
}

cartItemsRoutes.get("/cart-items", (req, res) => {
  // res.send(cartItems);

  selectWholeCart(req, res);
});




cartItemsRoutes.post("/cart-items", (req, res) => {
  // cartItems.push(req.body);
  // res.send(cartItems);

  pool.query("insert into hiShoppingCart (product, id, price, quantity) values ($1::text, $2::int, $3::int, $4::int)", [req.body.product, req.body.id, req.body.price, req.body.quantity]).then(() => {
    selectWholeCart(req, res);

});
});

cartItemsRoutes.put("/cart-items/:id", (req, res) => {
  // const index = cartItems.findIndex(item => item.id === req.params.id);
  // cartItems.splice(index, 1, req.body);
  // res.send(cartItems);
  pool.query("update hiShoppingCart set product=$1::text, id=$2::int, price=$3::int, quantity=$4::int", [req.body.product, req.body.id, req.body.price, req.body.quantity]).then(() => {
    selectWholeCart(req, res);

});
});

cartItemsRoutes.delete("/cart-items/:id", (req, res) => {
  // const index = cartItems.findIndex(item => item.id === req.params.id);
  // cartItems.splice(index, 1);
  // res.send(cartItems);
  pool.query("delete from hiShoppingCart where id=$1::int", [req.params.id]).then(() => { 
      selectWholeCart(req, res);
});
});

module.exports = cartItemsRoutes;
