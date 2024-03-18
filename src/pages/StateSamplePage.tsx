import React, { useState } from 'react';

type StateSampleProps = {
	value?: number;
};

function StateSamplePage({ value = 10 }: StateSampleProps) {
	// hooklar function içinde tanımlanmalıdır
	// random getter, setRandom setter
	// set'li yapılar stat değişikliği yapmamızı sağlar
	// random değişkeni güncel state bilgisine erişmemiz ve ekran bind etmemizi sağlar.
	// useState Hook ile arayüzde kullanıcı etkileşimi sonucunda değişecek olan değerin virtual doma yansıtılmasını sağlayan bir özel fonksşyondur.
	// Propstandan gelen initial değerleri state'in inital değerini bağlayabiliriz.
	// Fakat props state gibi güncelllenemez.
	const [random, setRandom] = useState<number>(value); // 0 state initial value
	// state numeric bir değer olucak
	// functionları her zaman const yapalım. aynı isimde aynı referansa sahip bir function aynı component içinde olmamalıdır. const bu referansı aynı olmasını engeller.
	const generateRandom = () => {
		const _random = Math.round(Math.random() * 100);
		// const _random = random + 1; // set işlemleri başka bir değişken üzerinden yapılmalıdır.
		// random = _random;
		// console.log('random', random);
		setRandom(_random); // state güncelleme işlemi
		// state güncellemesi sonucunda virtual dom dirty oluyor ve component tekrar re-render ediliyor.
	};

	// let nm1 = 5;
	// nm1 = 6;

	console.log('...rendering');

	return (
		<div>
			Rastgele Numara : {random}
			<br></br>
			<button onClick={generateRandom}>Generate Random</button>
		</div>
	);
}

export default StateSamplePage;
