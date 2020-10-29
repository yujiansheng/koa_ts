import { Context } from "koa";
import Router from "koa-router";
import { validate } from "class-validator";
import { AddGameRequest } from "../request/AddGameRequest";
import { redisStorage as storage } from "../storage/redis";

const router = new Router();

router.post(`/codereviewvideos`, async (ctx: Context) => {
  try {
    // DONE: validate the incoming request

    // DONE:  - return early if invalid

    // save the new game to storage

    // get all the games we know about

    const validatorOptions = {};
    const game = new AddGameRequest();
    game.name = ctx.request.body.name || "";

    const errors = await validate(game, validatorOptions);

    if (errors.length > 0) {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        data: errors
      };

      return ctx;
    }

    ctx.status = 201;
    ctx.body = {
      games: await storage().get("game_list")
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;
