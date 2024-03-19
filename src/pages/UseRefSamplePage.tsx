import React, { useRef, useState } from 'react';

function UseRefSamplePage() {
	// useRef hook amacı sayfa render olurken elimizdeki değişken değerlerini kaybetmemek için kendimize bir referans tutmak.
	// useRef de value current değerde saklanır
	let counter = useRef<number>(0);

	const [visible, setVisible] = useState<boolean>(false);
	let visibleBefore = useRef<boolean>(false);

	const increase = () => {
		counter.current = counter.current + 1;
		visibleBefore.current = visible;
		setVisible(!visible); // visible true ise false false ise true
		console.log('counter', counter);
	};

	// if (visible) {
	// 	return (
	// 		<div>
	// 			visibleBefore : {visibleBefore.current ? 'true' : 'false'}
	// 			<br></br>
	// 			visibleCurrent: {visible ? 'true' : 'false'}
	// 			<br></br>
	// 			<p>Sayac : {counter.current}</p>
	// 			<button onClick={increase}>(+)</button>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<>
	// 			visibleBefore : {visibleBefore.current ? 'true' : 'false'}
	// 			<br></br>
	// 			visibleCurrent: {visible ? 'true' : 'false'}
	// 			<br></br>
	// 			<button onClick={increase}>(+)</button>
	// 		</>
	// 	);
	// }
	return (
		<div>
            {/* && not null veya true bakar */}
			{visible && <p>Sayac : {counter.current}</p>}
			{/* sadece visible olduğu anda p divi doma ekle */}
			<button onClick={increase}>(+)</button>
		</div>
	);
}

export default UseRefSamplePage;
