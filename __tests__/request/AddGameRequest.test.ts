import { AddGameRequest } from "../../src/request/AddGameRequest";
import { validate } from "class-validator";

describe("request/AddGameRequest", () => {
  let addGameRequest: AddGameRequest;
  const validatorOptions = {};

  beforeAll(() => {
    addGameRequest = new AddGameRequest();
  });

  test(`has the expected class properties`, async () => {
    const addGameRequest = new AddGameRequest();
    addGameRequest.name = "a game name here";

    expect(addGameRequest.name).toBeDefined();
  });

  describe(`'name' validation`, () => {
    it("is valid", async () => {
      for (let i = 1; i <= 20; i++) {
        addGameRequest.name = "x".repeat(i);
        console.log(await validate(addGameRequest, validatorOptions));
        expect(await validate(addGameRequest, validatorOptions)).toHaveLength(
          0
        );
      }
    });

    // it("must be a string",async()=>{
    //     addGameRequest.name = 123;
    //     expect(await validate(addGameRequest,validatorOptions)
    //     ).toHaveLength(1)
    // })

    it("must have length of 1 character or greater", async () => {
      addGameRequest.name = "";
      console.log(await validate(addGameRequest, validatorOptions));
      expect(await validate(addGameRequest, validatorOptions)).toHaveLength(1);
    });

    it("must have a length of 20 charaters or fewer", async () => {
      addGameRequest.name = "y".repeat(21);
      expect(await validate(addGameRequest, validatorOptions)).toHaveLength(1);
    });
  });
});
