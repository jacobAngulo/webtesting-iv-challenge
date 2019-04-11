const db = require("../data/dbConfig");
const Users = require("./usersModel");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("addUser", () => {
    it("should add and remove users as expected", async () => {
      await Users.addUser({ name: "gaffer" });

      expect(await db("users")).toHaveLength(1);

      await Users.removeUser(1);

      expect(await db("users")).toHaveLength(0);
    });

    it("should insert the expected data", async () => {
      const user = await Users.addUser({ name: "frodo" });

      expect(user.name).toBe("frodo");
    });
  });
});
