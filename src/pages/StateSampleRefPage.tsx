import React, { useState } from 'react';

// Apidan gelen bilgileri karşılamak için açılır.
// Apidan gelen Dto değerlerin client tarafındaki karşılığı Interface oluyor.
interface Person {
	firstName: string;
	lastName: string;
	companyName: string;
	person?: Person[];
}

// Kişi Kaydı gireceğimiz bir ekran tasarlıyoruz.
function StateSampleRefPage() {
	const personInit = {
		firstName: '',
		lastName: '',
		companyName: '',
	};

	const [person, setPerson] = useState<Person>(personInit); // UnionType tanımlaması
	const [persons, setPersons] = useState<Array<Person>>([]);

	const addPerson = () => {
		// listeye Person ekleme yapacağız.

		// JS de dizilerde bir referans type olarak kullanılır
		// aşağıdaki örnek de persons dizisinin referansı güncellenmemeiştir.
		// persons.push(person); // yeni bir item ekleyip state güncelledik.
		// setPersons(persons);
		// dizinin referansını kopar ve yeni referans üzerine person nesnesini append et.
		// setPersons([...persons, person]);
		setPersons([person, ...persons]); // prepend
	};
	const onFirstNameInputChange = (event: any) => {
		if (event.target.value) {
			// Spread Operator yazım şekli.
			// firstName propertysinin güncleleyecek şekilde person state son halini alıp setState ile state güncelle.
			setPerson({ ...person, firstName: event.target.value });
		}
	};

	const onLastNameInputChange = (event: any) => {
		if (event.target.value) {
			// Spread Operator yazım şekli.
			// firstName propertysinin güncleleyecek şekilde person state son halini alıp setState ile state güncelle.
			// person.lastName = event.target.value;
			// setPerson(person); // aynı referans gönderildiğinde dolayı virtaul dom yeniden render almıyor.

			setPerson({ ...person, lastName: event.target.value });
		}
	};

	const onCompanyInputChange = (event: any) => {
		if (event.target.value) {
			// Spread Operator yazım şekli.
			// firstName propertysinin güncleleyecek şekilde person state son halini alıp setState ile state güncelle.
			setPerson({ ...person, companyName: event.target.value });
		}
	};

	return (
		<div>
			<p>
				{person?.firstName}- {person?.lastName} - {person?.companyName}
			</p>
			{/* person?.firstName varsa ekrana değeri yazdır. */}
			<hr></hr>
			<input
				type="text"
				placeholder="first Name"
				onChange={onFirstNameInputChange}
			/>
			<br></br>
			<input
				type="text"
				placeholder="last Name"
				onChange={onLastNameInputChange}
			/>
			<br></br>
			<input
				type="text"
				placeholder="company Name"
				onChange={onCompanyInputChange}
			/>
			<button onClick={addPerson}>Ekle</button>

			<hr></hr>

			<div>
				{/* elimizdeki listedeki bilgi alıp bunu bir görüntü haline getirdik. */}
				{/* map ile çalışırken key unutmuyoruz. */}
				{persons.map((item: Person, index: number) => {
					return (
						<div key={index}>
							{item.firstName} {item.lastName.toUpperCase()} /{' '}
							{item.companyName}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default StateSampleRefPage;
