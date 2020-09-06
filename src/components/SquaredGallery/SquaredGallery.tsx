import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

import useStyles from './styles';


type puzzleProps = {
  columns: number,
  children: React.ReactNode[],
}

const SquaredGallery = ({ columns, children }: puzzleProps) => {
  const {
    galleryContainer,
    galleryItem
  } = useStyles();

  const containerSize = 600;
  const columnSize = containerSize / columns;

  const getItemDynamicStyles = (index: number): React.CSSProperties => {
    return {
    }
  }

  return (
    <ul className={galleryContainer}>
      {
        children.map((element, index) => (
          element &&
          <motion.li
            key={index}
            className={galleryItem}
            id={`element${}`}
            animate={{
              width: columnSize,
              height: columnSize,
              top: (Math.floor(index / columns) * columnSize),
              left: (index % columns) * columnSize
            }}
          >
            {
              element
            }
          </motion.li>
        ))
      }
    </ul>
  )
}

export default SquaredGallery;
