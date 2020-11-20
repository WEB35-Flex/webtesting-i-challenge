const enhancer = require("./enhancer.js");
// test away!

describe("enhancer module", () => {
  describe("repair function", () => {
    it("exists", () => {
      expect(enhancer.repair).toBeDefined();
    });
    it("returns an object", () => {
      expect(enhancer.repair).toBeInstanceOf(Object);
    });
    it("restores durability to 100", () => {
      expect(
        enhancer.repair({ name: "Sword", durability: 80, enhancement: 20 })
          .durability
      ).toBe(100);
    });
  });
  describe("success function", () => {
    it("exists", () => {
      expect(enhancer.success).toBeDefined();
    });
    it("returns an object", () => {
      expect(enhancer.success).toBeInstanceOf(Object);
    });
    it("enhancement increases by 1", () => {
      expect(enhancer.success({ enhancement: 15 })).toMatchObject({
        enhancement: 16,
      });
    });
    it("enhancement level is not changed if equal to 20", () => {
      expect(enhancer.success({ enhancement: 20 })).toMatchObject({
        enhancement: 20,
      });
    });
  });
  describe("fail function", () => {
    it("exists", () => {
      expect(enhancer.fail).toBeDefined();
    });
    it("returns an object", () => {
      expect(enhancer.fail).toBeInstanceOf(Object);
    });
    it("decreases durability by 5 if enhancement level less than 15", () => {
      expect(enhancer.fail({ durability: 100, enhancement: 14 })).toMatchObject(
        {
          durability: 95,
          enhancement: 14,
        }
      );
    });
    it("decreases durability by 10 if enhancement level equal to or greater than 15", () => {
      expect(enhancer.fail({ durability: 100, enhancement: 15 })).toMatchObject(
        {
          durability: 90,
          enhancement: 15,
        }
      );
    });
    it("decreases enhancement by 1 if enhancement level greater than 16", () => {
      expect(enhancer.fail({ durability: 100, enhancement: 17 })).toMatchObject(
        {
          durability: 100,
          enhancement: 16,
        }
      );
    });
  });
});
