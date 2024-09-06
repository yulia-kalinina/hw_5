import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("testing add a new movie in cart", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      1007,
      "Мстители",
      NaN,
      2012,
      "США",
      "Avengers Assemble!",
      "фантастика",
      137 + "мин."
    )
  );

  let result = cart.items;

  expect(result).toEqual([
    {
      id: 1007,
      name: "Мстители",
      price: NaN,
      year: 2012,
      country: "США",
      slogan: "Avengers Assemble!",
      genre: "фантастика",
      time: 137 + "мин.",
    },
  ]);
});

test("testing caclculateTotal function", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  let result = cart.calculateTotalAmount();

  expect(result).toBe(2900);
});

test("testing caclculateBonus function", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  let result = cart.calculateBonusedTotalAmount(0.1);

  expect(result).toBe(2610);
});

test("testing delete function", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  let result = cart.delete(1001);

  expect(result).toEqual([
    { id: 1008, name: "Meteora", author: "Linkin Park", price: 900 },
  ]);
});
