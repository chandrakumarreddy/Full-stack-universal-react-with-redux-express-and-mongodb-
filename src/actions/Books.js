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

export function deleteBook(id) {
	return { type: "REMOVE_BOOK", payload: id };
}

export function updateBook(book) {
	return {
		type: "UPDATE_BOOK",
		payload: book
	};
}
