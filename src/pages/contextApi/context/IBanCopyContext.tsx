// IbanCopyContext 2 farklı sayfa componenti arasında servis görevi görecek.

import { createContext, useState } from 'react';

export const IbanCopyContext = createContext<any>(null); // veri context'de tutuluyor.

// IbanContext ile diğer Componentlerin haberleşmesi için Provider denilen ara wrapper component oluşturuluyor.
// <A><span></span><B></B></A>
const IbanContextProvider = ({ children }: any) => {
	const [iban, setIban] = useState<string>('');
	// getter iban
	// setIban setter

	const copyIban = (iban: string): void => {
		// daha karmaşık bir algoritmada olabilir.
		setIban(iban);
	};

	const values = {
		iban,
		copyIban,
	};

	return (
		<IbanCopyContext.Provider value={values}>
			{children}
		</IbanCopyContext.Provider>
	);
};

export default IbanContextProvider;
