const express = require("express");
const app = express();
const port = 7000;
const cartItemsRoutes = require("./routes/cartItems.routes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/", cartItemsRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));
