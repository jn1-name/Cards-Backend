const Player = require("../../cards/Player");

describe("Player tests", () => {
  let player;
  const id = "test";

  beforeEach(() => {
    player = new Player(id);
  });

  it("Player has correct ID", () => {
    expect(player.getId()).toBe(id);
  });

  it("Player has initial status 'playing'", () => {
    expect(player.getStatus()).toBe("playing");
  });

  it("Initial total is 0", () => {
    expect(player.getTotal()).toBe(0);
  });

  it("Set status updates status field", () => {
    player.setStatus("testing");
    expect(player.getStatus()).toBe("testing");
  });
});
