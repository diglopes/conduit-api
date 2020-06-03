const server = require("./server");

const runningServer = server.listen(process.env.PORT || 3000, () => {
  console.log(`>> Listening on port ${runningServer.address().port}`);
});
