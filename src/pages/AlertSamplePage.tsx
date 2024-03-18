import React from 'react';
import Alert from '../components/Alert';

function AlertSamplePage() {
	return (
		<div>
			<Alert
				type="warning"
				message="Dikkat"
				onClick={(message) => {
					// function callback yazım şekli
					// Alert OnClick eventi tanımladım ve bu eventi dinledim.
					window.alert(message);
				}}
			/>

			<Alert
				type="danger"
				message="Uyarı"
				onClick={(message) => {
					// Alert OnClick eventi tanımladım ve bu eventi dinledim.
					var result = window.confirm(message);
				}}
			>
				<span>Slogan</span>
				<p>Deneme</p>
				{/* tanımladığım component içinde html elementi children olarak gömdüm */}
			</Alert>
		</div>
	);
}

export default AlertSamplePage;
