const express = require("express");
const userRouter = require("./src/routes/users");
const app = express();

const port = 4000;

app.use("/api/users/", userRouter);

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
