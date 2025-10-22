import React, { useState } from "react";

//include images into your bundle

//const [ list, setList] = useState (	)
//create your first component
const Home = () => {


	const [inputValue, setInputValue] = useState("");
	const [Lista, setLista] = useState([
		"Make the bed",
		"Walk th dog",
		"Pay taxes",
		"Go on vacation"]);
	return (
		<div className="container">
			<h1>Mi Lista</h1>
			<ul>
				<li>
					<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyUp={
							(e) => {
								if (e.key === "Enter") {
									setLista(Lista.concat(inputValue)); setInputValue("")
								}
							}
						}
						placeholder="Escribir la lista?" />

				</li>
				{Lista.map((item, index) => (


					<li>
						{item}  {""}
						<i className="fa-solid fa-trash" onClick={() => setLista(Lista.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>

				))}


			</ul>
			<div>{Lista.length}taks</div>
		</div>
	);
};

export default Home;