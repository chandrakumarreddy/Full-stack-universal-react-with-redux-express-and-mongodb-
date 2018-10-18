export function addTodo(todo) {
	return {
		type: "ADD_TODO",
		payload: todo
	};
}

export function deleteTodo(id) {
	return { type: "REMOVE_TODO", payload: id };
}

export function updateTodo(todo) {
	return {
		type: "UPDATE_TODO",
		payload: todo
	};
}
