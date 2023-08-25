import React from "react";
import TodoItems from "./TodoItems";

const TodoList = props => {
	const { list } = props;

	const task = list.map(item => (
		<TodoItems key={item.id} data={item} />
	));

	return (task)
};

export default TodoList;