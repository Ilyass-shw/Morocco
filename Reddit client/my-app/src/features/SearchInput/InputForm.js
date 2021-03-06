import React, { useState } from "react";
import './InputForm.css'

export const InputForm = () => {
	const [term, setTerm] = useState("");

	const handleChange = ({ target }) => {
		setTerm(target.value);
	};
	return (
		<div className='input'>
			<input type="text" name="search" value={term} onChange={handleChange} />
		</div>
	);
};
