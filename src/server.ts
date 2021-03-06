import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import healthcheckRoutes from "./routes/healthcheck";
import codeReviewVideosRoutes from "./routes/codereviewvideos";
import { config } from "./config";

const app = new Koa();
const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(logger());
app.use(async (ctx, next) => {
  // 忽略图标请求
  if (ctx.path === "/favicon.ico") return;
  await next();
});

app.use(healthcheckRoutes.routes());
app.use(codeReviewVideosRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port:${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
