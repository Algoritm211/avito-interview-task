import React from 'react'
import classes from './ImagesElement.module.css'

type Props = {
  imageUrl: string
}

export const ImageElement: React.FC<Props> = (props) => {

  return (
    <div className={classes.image}>
      <img src={props.imageUrl} alt={'GalleryPhoto'}/>
    </div>
  )
}