// require("dotenv").config();

const server = require("./server");

const port = process.env.PORT || 4001;

server.listen(port, () => {
  console.log(`Server reporting for duty from port ${port}!`);
});
