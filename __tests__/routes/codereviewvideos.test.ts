import server from "../../src/server";
import request from "supertest";

afterEach(done => {
  server.close();
  done();
});

describe("router/codereviewvideos", () => {
  const games = ["World of Warships", "Battlefield"];

  games.forEach((game: string) => {
    it(`should allow adding a game to the list - ${game}`, async () => {
      const response = await request(server)
        .post("/codereviewvideos")
        .send({ game });

      expect(response.status).toEqual(201);
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual({
        games: [game]
      });
    });
  });

  it(`should keep track of all added to the list`, async () => {
    const data1 = { game: "Half Life 3" };
    const response1 = await request(server)
      .post("/codereviewvideos")
      .send(data1);

    expect(response1.status).toEqual(201);
    expect(response1.type).toEqual("application/json");
    expect(response1.body).toEqual({
      games: [data1.game]
    });

    const data2 = { game: "FSX 2020" };
    const response2 = await request(server)
      .post("/codereviewvideos")
      .send(data2);

    expect(response2.status).toEqual(201);
    expect(response2.type).toEqual("application/json");
    expect(response2.body).toEqual({
      games: [data1.game, data2.game]
    });
  });

  it.only("should return a validation failure if the game data is incorrect", async () => {
    const response = await request(server)
      .post("/codereviewvideos")
      .send({ game: "" });
    console.log(response.body);
    expect(response.status).toEqual(400);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      status: "error",
      data: [
        {
          target: {
            name: ""
          },
          value: "",
          property: "name",
          children: [],
          constraints: {
            length: "name must be longer than or equal to 1 characters"
          }
        }
      ]
    });
  });
});
