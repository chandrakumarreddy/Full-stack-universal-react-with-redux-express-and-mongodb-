export function getBooks() {
	return {
		type: "GET_BOOKS"
	};
}

export function addBook(book) {
	return {
		type: "ADD_BOOK",
		payload: book
	};
}

export function addToCart(book) {
	return {
		type: "ADD_TO_CART",
		payload: book
	};
}

export function deleteFromCart(id) {
	return { type: "DELETE_ITEM_FROM_CART", payload: id };
}

export function updateCart(data) {
	return { type: "UPDATE_ITEM_CART", payload: data };
}

export function deleteBook(id) {
	return { type: "REMOVE_BOOK", payload: id };
}

export function updateBook(book) {
	return {
		type: "UPDATE_BOOK",
		payload: book
	};
}
