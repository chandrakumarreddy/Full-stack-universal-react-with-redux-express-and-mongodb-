export default function(
	state = {
		books: [
			{
				_id: 1,
				title: "The man who knows infinity",
				desc:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi mollitia quod nostrum, vel, neque vero odio in autem velit, distinctio, error. Provident, odio ea quod enim atque a tenetur mollitia.",
				price: 33.33
			},
			{
				_id: 2,
				title: "Brief answers to big questions",
				desc:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, velit, quos. Praesentium minima nostrum, facilis aspernatur sint harum id consequatur molestiae eaque a numquam modi quam libero dicta, quae, et.",
				price: 55.5
			}
		]
	},
	action
) {
	switch (action.type) {
		case "GET_BOOKS":
			return { ...state, books: [...state.books] };
		case "ADD_BOOK":
			return { ...state, books: [...state.books, ...action.payload] };
		case "REMOVE_BOOK":
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
				books: state.books.filter(
					item => item._id !== Number(action.payload)
				)
			};
		case "UPDATE_BOOK":
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
