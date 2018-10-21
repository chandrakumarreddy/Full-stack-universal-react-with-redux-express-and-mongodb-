export default function(state = { cart: [] }, action) {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, ...action.payload],
				totalPrice: totalCart([
					...state.cart,
					...action.payload
				]).totalCartPrice.toFixed(2)
			};
		case "DELETE_ITEM_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(item => item._id !== action.payload),
				totalPrice: totalCart(
					state.cart.filter(item => item._id !== action.payload)
				).totalCartPrice.toFixed(2)
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
				),
				totalPrice: totalCart(
					state.cart.map(
						item =>
							item._id === action.payload.id
								? Object.assign({}, item, {
										quantity:
											item.quantity === 0 &&
											action.payload.qty < 0
												? 0
												: item.quantity +
												  action.payload.qty
								  })
								: item
					)
				).totalCartPrice.toFixed(2)
			};
		default:
			return state;
	}
}

export function totalCart(cart) {
	const totalAmount =
		cart.length > 0
			? cart
					.map(item => item.quantity * item.price)
					.reduce((a, b) => a + b)
			: 0;
	return { totalCartPrice: totalAmount };
}
