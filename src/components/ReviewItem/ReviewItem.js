import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css' ;
import { faShoppingCart,faTrash} from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product,handleRemoveItem}) => {
    const {id, name, price, quantity, shipping, img} = product ;
    return (
        <div className='review-item'>
           <div>
             <img src={img} alt="" />
           </div>
           <div className="review-details-container">
                  <p>{name}</p>
                  <p> Price:<small className='doller'> ${price}</small></p>
                  <p> Shipping : <small  className='doller'> ${shipping}</small></p>
                  <p><small>Quantity: {quantity}</small></p>
                  
           </div>
           <div className="delete-container">
             <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
             </button>
           </div>
        </div>
    );
};

export default ReviewItem;