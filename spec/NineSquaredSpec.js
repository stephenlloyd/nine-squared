describe("NineSquared", function() {
  var game;

  beforeEach(function() {
    game = new NineSquared();
  });

  it("should know if a game is over", function() {
    game.grid = ['O','O','O','O','O','O','O','O','O'];
    expect(game.isOver()).toEqual(true);
  });

  it("has an empty grid when we first play", function() {
    game.play();
    expect(game.grid).toEqual(['X','X','X','X','X','X','X','X','X']);
  });

  it("plots the top left", function() {
    game.play();
    game.move(0)
    expect(game.grid).toEqual(['O','O','X','O','X','X','X','X','X']);
  });

  it("unplots the top left", function() {
    game.play();
    game.move(0)
    game.move(0)
    expect(game.grid).toEqual(['X','X','X','X','X','X','X','X','X']);
  });

  it("plots the top middle", function() {
    game.play();
    game.move(1)
    expect(game.grid).toEqual(['O','O','O','X','O','X','X','X','X']);
  });

  it("plots the top right", function() {
    game.play();
    game.move(2)
    expect(game.grid).toEqual(['X','O','O','X','X','O','X','X','X']);
  });

  it("plots the middle left", function() {
    game.play();
    game.move(3)
    expect(game.grid).toEqual(['X','X','X','O','O','X','X','X','X']);
  });

  it("plots the middle middle", function() {
    game.play();
    game.move(4)
    expect(game.grid).toEqual(['X','O','X','X','O','X','X','O','X']);
  });

  it("plots the middle right", function() {
    game.play();
    game.move(5)
    expect(game.grid).toEqual(['X','X','X','X','O','O','X','X','X']);
  });

  it("plots the bottom left", function() {
    game.play();
    game.move(6)
    expect(game.grid).toEqual(['X','X','X','O','X','X','O','O','X']);
  });

  it("plots the bottom middle", function() {
    game.play();
    game.move(7)
    expect(game.grid).toEqual(['X','X','X','X','O','X','O','O','O']);
  });

  it("plots the bottom right", function() {
    game.play();
    game.move(8)
    expect(game.grid).toEqual(['X','X','X','X','X','O','X','O','O']);
  });


});
