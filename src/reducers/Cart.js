export default function(state = { cart: [] }, action) {
	switch (action.type) {
		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, ...action.payload] };
		case "DELETE_ITEM_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(item => item._id !== action.payload)
			};
		case "UPDATE_ITEM_CART":
			return {
				...state,
				cart: state.cart.map(
					item =>
						item._id === action.payload.id
							? Object.assign({}, item, {
									quantity:
										item.quantity === 0 &&
										action.payload.qty < 0
											? 0
											: item.quantity + action.payload.qty
							  })
							: item
				)
			};
		default:
			return state;
	}
}
