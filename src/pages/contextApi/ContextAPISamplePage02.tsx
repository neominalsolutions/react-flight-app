import React, { useContext } from 'react';
import { IbanCopyContext } from './context/IBanCopyContext';
import { Link } from 'react-router-dom';

// Adımlar
// 1. Context Create için yeni bir Context açalım.
// 2. ContextProvider'ı Index.tsx dosyasına tanımlayalım
// 3. Componentler içerisinde useContext Hook ile context deki state erişim sağlıyalım

function ContextAPISamplePage02() {
	const { iban } = useContext(IbanCopyContext);
	// güncel iban bilgisine ulaştık.
	return (
		<div>
			Son kopyalanan IBAN: {iban}
			<br></br>
			<Link to="/copyIban">Copy Iban Page</Link>
		</div>
	);
}

export default ContextAPISamplePage02;
