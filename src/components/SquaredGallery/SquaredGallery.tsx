import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

import useStyles from './styles';

export type ISquaredGalleryElementData = {
  id: string,
  order: number,
  element: ReactElement,
  hidden?: boolean
}

interface IGalleryProps {
  columns: number,
  elements: ISquaredGalleryElementData[],
}

const SquaredGallery = ({ columns, elements }: IGalleryProps) => {
  const {
    galleryContainer,
    galleryItem,
    hidden
  } = useStyles();

  const containerSize = 600;
  const columnSize = containerSize / columns;

  return (
    <ul className={galleryContainer}>
      {
        elements.map((element) => (
          element &&
          <motion.li
            key={element.id}
            id={element.id}
            className={`${galleryItem} ${element.hidden ? hidden : ''}`}
            transition={{ duration: 0.02, }}
            animate={{
              width: columnSize,
              height: columnSize,
              top: (Math.floor(element.order / columns) * columnSize),
              left: (element.order % columns) * columnSize,
            }}
          >
            {
              element.element
            }
          </motion.li>
        ))
      }
    </ul>
  )
}

export default SquaredGallery;
