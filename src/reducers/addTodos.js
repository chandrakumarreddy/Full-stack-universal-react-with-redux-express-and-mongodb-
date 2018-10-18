export default function(state = { books: [] }, action) {
	switch (action.type) {
		case "ADD_TODO":
			return { ...state, books: [...state.books, ...action.payload] };
		case "REMOVE_TODO":
			// let arrayIndex = state.books.forEach((book, index) => {
			// 	if (book._id === action.payload) return index;
			// });
			// return {
			// 	...state,
			// 	books: [
			// 		...state.books.slice(0, arrayIndex),
			// 		...state.books.slice(arrayIndex + 1)
			// 	]
			// };
			return {
				...state,
				books: state.books.filter(item => item._id !== action.payload)
			};
		case "UPDATE_TODO":
			return {
				...state,
				books: state.books.map(
					item =>
						item._id === action.payload._id
							? Object.assign({}, item, {
									name: action.payload.name
							  })
							: item
				)
			};
		default:
			return state;
	}
}
