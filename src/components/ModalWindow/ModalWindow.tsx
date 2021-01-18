import React, {useEffect, useRef} from 'react'
import classes from './ModalWindow.module.css'
import classNames from 'classnames'
import {useHistory, useParams} from "react-router-dom";
import {useOutsideClick} from '../common/UseOutsideClick';
import {useDispatch, useSelector} from "react-redux";
import {actions, loadImageInfo} from '../../redux/images-reducer';
import {getComments, getIsLoading, getLargeImage} from '../../redux/image-selector';
import {CommentType} from '../../types/types';
import {convert} from '../common/TimeDataHelp';
import SendCommentForm from "./SendCommentForm";
import Loader from "../Loader/Loader";


type PropsModal = {
  setIsOpenModal: (isOpen: boolean) => void
}


const ModalWindow: React.FC<PropsModal> = (props) => {


  const dispatch = useDispatch()
  const comments = useSelector(getComments)
  const photo = useSelector(getLargeImage)
  const {id} = useParams<{ id: string | undefined }>()
  const isLoading = useSelector(getIsLoading)
  const history = useHistory()
  const backdrop = useRef<HTMLDivElement | null>(null);
  const width = window.innerWidth

  useEffect(() => {
    if (id) {
      dispatch(loadImageInfo(id))
    }
  }, [id, dispatch])

  const onClose = () => {
    if (id) {
      history.push({
        pathname: '/images/'
      })
    }
    props.setIsOpenModal(false)
    dispatch(actions.removeImageData())
  }

  useOutsideClick(backdrop as React.MutableRefObject<HTMLDivElement>, onClose);

  const commentBlock = comments?.map((comment, index) => {
    return <Comment comment={comment} key={index}/>
  })

  if (width < 700) {
    return (
      <div className={classNames(classes.modalWindowContainer, {[classes.open]: id})}>
        <div className={classes.modalWindow} ref={backdrop}>
          {
            isLoading
              ? <Loader/>
              : <React.Fragment>
                <div className={classes.photoInputs}>
                  <div>
                    {photo && <img src={photo} alt={'largeIMG'} className={classes.imageModal}/>}
                  </div>
                  <div className={classes.commentBlock}>
                    {!comments?.length &&
                    <div>
                      Комментариев еще нет. Вы можете быть первым)
                    </div>
                    }
                    {commentBlock}
                  </div>
                  <div className={classes.commentFormBlock}>
                    <SendCommentForm id={id}/>
                  </div>
                </div>
                <div className={classes.closeModal} onClick={onClose}>
                  <i className="fas fa-times"></i>
                </div>
              </React.Fragment>
          }
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(classes.modalWindowContainer, {[classes.open]: id})}>
      <div className={classes.modalWindow} ref={backdrop}>
        {
          isLoading
            ? <Loader/>
            : <React.Fragment>
              <div className={classes.photoInputs}>
                <div>
                  {photo && <img src={photo} alt={'largeIMG'} className={classes.imageModal}/>}
                </div>
                <div className={classes.commentFormBlock}>
                  <SendCommentForm id={id}/>
                </div>
              </div>
              <div className={classes.commentBlock}>
                {!comments?.length &&
                <div>
                  Комментариев еще нет. Вы можете быть первым)
                </div>
                }
                {commentBlock}
              </div>
              <div className={classes.closeModal} onClick={onClose}>
                <i className="fas fa-times"></i>
              </div>
            </React.Fragment>
        }
      </div>
    </div>
  )
}


type Props = {
  comment: CommentType
}

const Comment: React.FC<Props> = (props) => {

  const date = convert(props.comment.date)

  return (
    <div className={classes.comment}>
      <div className={classes.dateComment}>
        {date}
      </div>
      <div className={classes.commentText}>
        {props.comment.text}
      </div>
    </div>
  )
}

export default ModalWindow