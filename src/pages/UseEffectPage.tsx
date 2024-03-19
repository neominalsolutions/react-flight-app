import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UseEffectPage() {
	// useEffect Hook ile sayfanın ilk açılısın yakalayıp apiden veri çekmek şlemi yapabiliriz.
	// sayfadan ayrılırken ara işlem yapma
	// sayfada bir state değiştiriğinde değişine state takibi gibi işlemleri yönetebiliriz.
	const [number, setNumber] = useState<number>(0);
	useEffect(() => {
		// ilk tetiklenme
		// callback kod
		// apidan veri çekme fetch, get işlemleri ve state aktarma işlemi
		console.log('load işlemi');

		// then => Promise Resolved State dinler
		// catch => Promise Rejected State dinler
		fetch('https://jsonplaceholder.typicode.com/users') // fetch yada axios tercih ediyoruz.
			.then((response) => {
				console.log('response', response); // Resolved
				return response.json(); // json parse
			})
			.then((data) => {
				console.log('data', data);
				setNumber(data.length);
			})
			.catch((err) => {
				console.log('err', err); // Rejected
				// 401 authentication required, 404 resource not found, 500 Internal server error, 400 bad request
			});

		return () => {
			// clean up function (opsiyonel)
			console.log('domdan çıkış');
		};
	}, []); // [] deps kısmı, [] deps olduğunda sadece sayfa açılışında 1 kez çalışır [state1,state2,state3] gibi değerler ile çalıştırığında [] tanımlanan statelerden herhangi birinin değişiminde ve ilk sayfa load edildiğinde çalışır. Component içinde birden fazla UseEffect tanımlanabilir.
	useEffect(() => {
		// ikinci tetikleme
		console.log('number state değişimde çalışır');
	}, [number]); // number state değişiminde ve cmponent load da 1 kez çalışır

	return (
		<div>
			Number: {number}
			<button onClick={() => setNumber(Math.random() * 100)}>Set Number</button>
			<br></br>
			<Link to="/">Anasayfa Link</Link>
			<br></br>
			<a href="/">Anasayfa Href</a>
			{/* react router yönlendirmesi, a href kullanırsa sayfa refleshlenerek yönlenir. */}
		</div>
	);
}

export default UseEffectPage;
