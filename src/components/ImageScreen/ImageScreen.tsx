import React, {useEffect, useState} from 'react'
import classes from './ImageScreen.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../../redux/image-selector";
import {ImageElement} from "./ImagesElement/ImagesElement";
import {loadImages} from '../../redux/images-reducer';
import ModalWindow from "../ModalWindow/ModalWindow";
import {useHistory} from 'react-router-dom';

const ImageScreen: React.FC = () => {

  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false)

  let history = useHistory();

  const onOpenModal = (id: number) => {
    setIsOpenModalWindow(true)
    history.push(id.toString())
  }

  const dispatch = useDispatch()

  const images = useSelector(getImages)

  const onLoadImages = () => {
    dispatch(loadImages())
  }

  useEffect(onLoadImages, [dispatch])

  const imagesComponent = images.map((image) => {
    return (
      <ImageElement imageUrl={image.url} key={image.id} onOpenModal={() => onOpenModal(image.id)}/>
    )
  })

  return (
    <div className={classes.desktopContainer}>
      <div className={classes.photoContainer}>
        {imagesComponent}
        {isOpenModalWindow && <ModalWindow setIsOpenModal={setIsOpenModalWindow}/>}
      </div>
    </div>
  )
}
export default ImageScreen