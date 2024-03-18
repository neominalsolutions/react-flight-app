import React from 'react';
import UseStateSample from '../components/UseStateSample';


function UseStateSamplePage() {
	return (
		<div>
			{/* ui-kit components */}
			<UseStateSample title="Title-1" />
			<UseStateSample title="Title-2" style={{ color: 'red' }} />
			<UseStateSample title="Title-3" style={{ color: 'black' }} />
		</div>
	);
}

export default UseStateSamplePage;
