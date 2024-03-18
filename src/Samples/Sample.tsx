import React, { useState } from 'react';

type SampleProps = {
	name?: string;
};

function Sample(props: SampleProps) {
	let [number, setNumber] = useState<number>(0);

	// number = 'ali';

	return <div>{props.name}</div>;
}

export default Sample;
