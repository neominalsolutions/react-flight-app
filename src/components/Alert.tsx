import React from 'react';
import './Alert.css';
type AlertTypes = 'warning' | 'danger' | 'success'; // Union Literal Types

type AlertProps = {
	message: string;
	type: AlertTypes;
	onClick: (message: string) => void; // Action Prop, mesaja tıklandığında yapılacak eylem.
	children?: React.ReactNode; // bir element içine gönderilen çocuk element.
};

function Alert(props: AlertProps) {
	return (
		<div
			className={
				props.type === 'warning'
					? 'warning'
					: props.type === 'success'
					? 'success'
					: 'danger'
			}
		>
			{props.message}
			<br></br>
			{props.children}
			<button
				onClick={() => {
					props.onClick('Etikete tıklandı');
				}}
			>
				Tıkla
				{/* buraya bir html elementi component içinden gönderilebilir. */}
			</button>
		</div>
	);
}

export default Alert;
