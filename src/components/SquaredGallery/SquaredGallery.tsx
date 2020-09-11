import React, { ReactElement, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash'

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
  const containerElement = useRef<HTMLUListElement>(null);
  const [containerSize, setContainerSize] = useState<number>(0)

  const {
    galleryContainer,
    galleryItem,
    hidden
  } = useStyles();

  const throttledUpdate = useCallback(throttle(() => {
    updateSize()
  }, 200), [])

  useLayoutEffect(() => {
    updateSize();

    const handleResize = () => {
      throttledUpdate()
    }

    window.addEventListener('resize', handleResize)
  }, [])

  const updateSize = () => {
    setContainerSize(containerElement.current?.offsetWidth || 0);
  }

  const columnSize = containerSize / columns;

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
