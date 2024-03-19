import React, { useContext } from 'react';
import { IbanCopyContext } from './context/IBanCopyContext';
import { Link } from 'react-router-dom';

// componentler içierisinde useContext Hook ile işlem yapıyoruz.
function ContextAPISamplePage01() {
	const { copyIban } = useContext(IbanCopyContext);

	const copy = (event: any) => {
		console.log('event', event);
		// context içerisine değer kopyaladık.
		copyIban(event.target.value);
	};

	return (
		<div>
			<Link to="/pasteIban">Paste Iban Page</Link>
			<br></br>
			<input placeholder="IBAN" onBlur={copy} />
		</div>
	);
}

export default ContextAPISamplePage01;
