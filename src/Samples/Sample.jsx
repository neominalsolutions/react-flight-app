import React from 'react';
import PropTypes from 'prop-types';



function Sample(props) {
	return <div>{props.name}</div>;
}

Sample.propTypes = {
	name: PropTypes.string,
};

Sample.defaultProps = {
	name: '',
};

export default Sample;
