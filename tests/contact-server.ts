import { createServer } from "node:http";
import handler from "../api/contact";

const port = Number(process.env.PORT || 4180);
const server = createServer((req, res) => {
  void handler(req, res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`MGM contact test server listening on http://127.0.0.1:${port}`);
});
