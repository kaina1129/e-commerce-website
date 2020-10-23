import React from 'react';

import './button.styles.scss';

const Button = ({ children, ...otherProps }) => {
	return (
		<div>
			<button className='custom-button' {...otherProps}>
				{children}
			</button>
		</div>
	);
};

export default Button;
