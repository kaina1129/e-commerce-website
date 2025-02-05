import React from 'react';
import './collection-item.styles.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name} </span>
				<span className='price'>{price} </span>
			</div>
			<Button onClick={() => addItem(item)} inverted>
				Add to Cart
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
