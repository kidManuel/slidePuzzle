import React, { ReactElement, useRef, useState, useEffect } from 'react';

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
  containerSize?: number,
}

const SquaredGallery = ({ columns, elements, containerSize }: IGalleryProps) => {
  const containerElement = useRef<HTMLUListElement>(null);
  const [columnSize, setColumnSize] = useState<number>(0) 

  const {
    galleryContainer,
    galleryItem,
    hidden
  } = useStyles();

  
  useEffect(()=>{
    if(containerSize && containerElement.current) {
      setColumnSize(containerSize / columns)
    } else {
      if (containerElement.current) setColumnSize(containerElement.current.offsetWidth)
    };
  }, [containerSize, columns])

  return (
    <ul
      className={galleryContainer}
      ref={containerElement}
    >
      {
        elements.map((element) => (
          element &&
          <motion.li
            key={element.id}
            id={element.id}
            className={`${galleryItem} ${element.hidden ? hidden : ''}`}
            transition={{
              duration: 0.2,
            }}
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
