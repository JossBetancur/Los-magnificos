import React, { useState } from "react";

import TodoList from "./TodoList";
import FormTodo from "./FormTodo";

const Container = () => {
	const [list, setList] = useState([]);

    const handleAddItem = addItem => {
		setList([...list, addItem]);
	};
	return (
		<div>
			<FormTodo handleAddItem={handleAddItem} />
			<TodoList list={list} setList={setList} />
		</div>
	);
};

export default Container;