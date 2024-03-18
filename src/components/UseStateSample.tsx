// Model Binding
// Event Binding
// Fragment yapıları arayüze bir element olarak yansımaz sadece componentin içindeki elemeleri wrapper sarmallamak için kullanılır. stil verilemez.

import React from 'react';
import { Fragment } from 'react/jsx-runtime';

type UseStateSampleProps = {
	title: string;
	style?: React.CSSProperties; // optional demek
};
// props:UseStateSampleProps
// <UseStateSample title='A Title' style={{color:'black'}} />
// <UseStateSample title='B Title' style={{color:'blue'}} />
// <UseStateSample title='B Title'  />
// dışarıdan component init olurken geçilen değerler.
function UseStateSample(props: UseStateSampleProps) {
	// Fragment JSX dosyamız // props
	const { title } = props; // deconstruction
	// function
	const click = () => {
		// arrow function standartı ile açıyoruz.
		window.alert('Merhaba');
	};
	// function  click2() {} // default function
	return (
		<>
			{/* inline style */}
			<div className="" style={props.style}>
				{/* model binding */}
				<p>{title}</p>
				{/* event binding */}
				<button style={{ background: 'black', color: 'white' }} onClick={click}>
					Click Me
				</button>
			</div>
		</>
	);
}

export default UseStateSample;
// componentleri başka sayfalarda kullanmak için export ediyoruz.
// default keyword ile component ismini dışarıya aynı isimde çıkardık.
