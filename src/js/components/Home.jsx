import React, { useState } from "react";

//include images into your bundle

//const [ list, setList] = useState (	)
//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>My Todos{inputValue}</h1>
			<ul>
				<li>
					<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={
							(e) => {
								if (e.key === "Enter") {
									setTodos(todos.concat(inputValue));
								}
							}
						}
						placeholder="What do you need to do?" />
				</li>
				{todos.map((item, index) => (

					<li>
						{item} <i className="fa-solid fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>

				))}
				<li>Make the bed <i className="fa-solid fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				<li>Walk the dog <i className="fa-solid fa-trash"  onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				<li>Pay taxes <i className="fa-solid fa-trash"  onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				<li>Go on vacation <i className="fa-solid fa-trash"  onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>

			</ul>
			<div>23 taks</div>
		</div>
	);
};

export default Home;