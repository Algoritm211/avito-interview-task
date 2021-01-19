import React from 'react'
import classes from './ImagesElement.module.css'

type Props = {
  imageUrl: string
  onOpenModal: () => void
}

export const ImageElement: React.FC<Props> = (props) => {

  return (
    <React.Fragment>
      <img src={props.imageUrl} alt={'GalleryPhoto'} className={classes.image} onClick={props.onOpenModal}/>
    </React.Fragment>
  )
}