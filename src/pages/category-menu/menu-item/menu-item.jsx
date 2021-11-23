import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { BtnTextArrow } from '../../../components/buttons/btn__text-arrow'

import { OrderContext } from '../../../contexts/order-context'

import './menu-item.scss'

export const MenuItem = ({
  name,
  imgUrlFrag,
  ingredients,
  notes,
  price,
  category,
}) => {
  const { checkout, addItemToCheckout, adjustItemQty } =
    useContext(OrderContext)

  const handleAddItem = () => {
    // if checkout includes item, increment qty instead of adding
    const alreadyInCheckout = checkout.some(
      (item) => item.name === name
    )
    const itemToAdd = {
      name: name,
      price: price,
      qty: 1,
    }

    if (alreadyInCheckout) {
      adjustItemQty(name, 1)
    } else {
      addItemToCheckout(itemToAdd)
    }
  }

  return (
    <div className='menu-item'>
      <img
        src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:best/v1635174836/Roots/menu-image/${category}/${imgUrlFrag}.png`}
        alt={name}
        className='item-img'
      />
      <h4 className='item-title'>{name}</h4>
      <p className='item-ingredients'>{ingredients}</p>
      <div className='item-notes'>
        {notes.map((note) => (
          <span className='note-icon' key={uuid()}>
            {note}
          </span>
        ))}
      </div>
      <div className='item-buy'>
        <p className='price'>{price}K₫</p>
        <button className='add' onClick={handleAddItem}>
          add to order <BtnTextArrow />
        </button>
      </div>
    </div>
  )
}
