import { assert } from "chai";
import { findByUser, findByEmail, insert } from "./user";

describe("service user", () => {
  before(async () => {
    await insert({
      user: { S: "user1" },
      email: { S: "test" },
    });
  });

  describe("find by user", () => {
    it("user found", async () => {
      const params = {
        user: { S: "user1" },
      };
      const result = await findByUser(params);

      assert.deepEqual(result.Items[0].user, params.user);
    });

    it("user not found", async () => {
      const params = {
        user: { S: "user2" },
      };
      const result = await findByUser(params);

      assert.equal(result.Items.length, 0);
    });
  });

  describe("find by email", () => {
    it("user found", async () => {
      const params = {
        email: { S: "test" },
      };
      const result = await findByEmail(params);

      assert.deepEqual(result.Items[0].email, params.email);
    });

    it("user not found", async () => {
      const params = {
        email: { S: "test2" },
      };
      const result = await findByEmail(params);

      assert.equal(result.Items.length, 0);
    });
  });

  describe("insert usert", () => {
    it("success", async () => {
      const params = {
        user: { S: "user1" },
        email: { S: "test" },
      };
      const result = await insert(params);

      assert.deepEqual(result.$metadata.httpStatusCode, 200);
    });
  });
});
