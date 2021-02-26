import { app } from "./app";

const port = 3003;

app
  .listen(port, () => {
    console.log(`Server is listening on ${port}`);
  })
  .on("error", () => console.log("error"));
