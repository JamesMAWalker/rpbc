import { useState, useCallback } from 'react'
import { BtnTextArrow } from '../../components/buttons/btn__text-arrow'
import { Container } from '../../components/container/container'
import { Arrow } from '../../components/svg/arrow'
import { ShortArrow } from '../../components/svg/arrow--short'
import { GlutenIcon } from '../../components/svg/note-icons/gluten'
import { NutIcon } from '../../components/svg/note-icons/NUT'
import { ProbioticIocn } from '../../components/svg/note-icons/probiotic'
import { RawIcon } from '../../components/svg/note-icons/RAW'

import './category-menu.scss'
import { MenuItem } from './menu-item/menu-item'

const categories = [
  {
    id: 'smoothie-bowls',
    title: (
      <h2>
        Smoothie <br /> Bowls
      </h2>
    ),
    imgUrlFrag: 'smoothie_jmlvoa.png',
    blurb:
      'vibrant blends of raw vegan superfoods. Delicious at any time of day.',
    notesList: ['RAW', 'NUT'],
    items: [
      {
        name: 'Back to the Roots',
        imgUrlFrag: 'mango-edit_gqvxgk',
        ingredients:
          'Turmeric, mango, ginger, banana, passionfruit, raw dehydrated granola, chia seeds, shredded coconut.',
        notes: ['RAW', 'NUT'],
        price: '65',
      },
      {
        name: 'Tropical Pitaya',
        imgUrlFrag: 'pitaya-edit_nsxvzb',
        ingredients:
          'Red dragonfruit, mango, banana, coconut milk, raw dehydrated granola, chia seeds, shredded coconut.',
        notes: ['RAW', 'NUT'],
        price: '65',
      },
      {
        name: 'Cacao Dream',
        imgUrlFrag: 'cocoa-edit_ios4e3',
        ingredients:
          'Organic cacao, orange, cashew milk, peanutbutter, cashews, shredded coconuts, raw dehydrated granola',
        notes: ['NUT'],
        price: '65',
      },
      {
        name: 'My Khe Beach',
        imgUrlFrag: 'spirulina-edit_bp4bzx',
        ingredients:
          'Organic spirulina, lime, vanilla, cashewbutter, banana, raw dehyrdrated granola, chia seeds, coconut',
        notes: ['NUT'],
        price: '75',
      },
      {
        name: 'Super AÇAI Berry',
        imgUrlFrag: 'acai-edit_rjajs7',
        ingredients:
          'Organic açai berry, apple, cavendish banana, organic almond, raw dehydrated granola, shredded coconut',
        notes: ['RAW', 'NUT'],
        price: '110',
      },
    ],
  },
]

const foodNotes = {
  NUT: {
    text: 'Contains Nuts',
    icon: <NutIcon />,
  },
  PRO: {
    text: 'Probiotic',
    icon: <ProbioticIocn />,
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

export const CategoryMenu = () => {
  const { id, title, blurb, imgUrlFrag, notesList, items } =
    categories[0]

  const notesContent = notesList.map(
    (note) => foodNotes[note]
  )

  return (
    <div className='menu'>
      <Container classes='column'>
        <div className='menu__img-wrap'>
          <div className='darkening-shade' />
          <img
            src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_80/v1635080999/Roots/menu-image/${imgUrlFrag}`}
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
                  />
                </div>
              )
            }
          )}
        </div>
        <div className='menu__nav-btns'>
          <button>
            <BtnTextArrow direction='left' />
            {/* <ShortArrow filled /> */}
            &nbsp; breakfast
          </button>
          <button>
            buddha bowls &nbsp;
            <BtnTextArrow />
            {/* <ShortArrow filled direction='right' /> */}
          </button>
        </div>
      </Container>
    </div>
  )
}
