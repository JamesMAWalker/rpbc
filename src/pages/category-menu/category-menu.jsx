import React from 'react'
import { BtnTextArrow } from '../../components/buttons/btn__text-arrow'
import { Container } from '../../components/container/container'
import { GlutenIcon } from '../../components/svg/note-icons/gluten'
import { NutIcon } from '../../components/svg/note-icons/nut'
import { ProbioticIcon } from '../../components/svg/note-icons/probiotic'
import { RawIcon } from '../../components/svg/note-icons/raw'

import './category-menu.scss'
import { MenuItem } from './menu-item/menu-item'

const foodNotes = {
  NUT: {
    text: 'Contains Nuts',
    icon: <NutIcon />,
  },
  PRO: {
    text: 'Probiotic',
    icon: <ProbioticIcon />,
  },
  GLT: {
    text: 'Gluten Free',
    icon: <GlutenIcon />,
  },
  RAW: {
    text: 'Raw Ingredients',
    icon: <RawIcon />,
  },
}

export const CategoryMenu = ({ items, info }) => {
  //
  // const { items: menuItems, info } = props;
  const { id, title, blurb, imgUrlFrag, notesList } = info

  const notesContent = notesList.map(
    (note) => foodNotes[note]
  )

  return (
    <div className='menu'>
      <Container classes='column'>
        <div className='menu__img-wrap'>
          <div className='darkening-shade' />
          <img
            src={`https://res.cloudinary.com/jameswalker-work/image/upload/v1634895951/Roots/feature-image/${imgUrlFrag}.png`}
            alt={id}
            className='menu__img'
          />
          <div className='menu__notes'>
            {notesContent.map(({ text, icon }) => (
              <figure className='note' key={text}>
                <span className='note-svg'>{icon}</span>
                <figcaption>{text}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className='menu__title'>{title}</div>
        <p className='menu__blurb'>{blurb}</p>
        <div className='menu__items-grid'>
          {items.map(
            ({
              name,
              imgUrlFrag,
              ingredients,
              notes,
              price,
              category,
            }) => {
              const noteContent = notes.map(
                (note) => foodNotes[note].icon
              )

              return (
                <div className='menu__item-wrap' key={name}>
                  <MenuItem
                    name={name}
                    imgUrlFrag={imgUrlFrag}
                    ingredients={ingredients}
                    notes={noteContent}
                    price={price}
                    category={category}
                  />
                </div>
              )
            }
          )}
        </div>
        <div className='menu__nav-btns'>
          <button className='prev'>
            <BtnTextArrow direction='left' />
            {/* <ShortArrow filled /> */}
            &nbsp; breakfast
          </button>
          <button className='next'>
            buddha bowls &nbsp;
            <BtnTextArrow />
            {/* <ShortArrow filled direction='right' /> */}
          </button>
        </div>
      </Container>
    </div>
  )
}
