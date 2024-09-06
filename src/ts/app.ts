import Cart from "./service/Cart";
import Book from "./domain/Book";
import Movie from "./domain/Movie";
import MusicAlbum from "./domain/MusicAlbum";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(new Movie(1007, "Мстители", NaN, 2012, "США", "Avengers Assemble!", "фантастика", 137 + "мин."));

console.log(cart.items);
