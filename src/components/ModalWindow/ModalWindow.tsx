import {useFormik} from 'formik';
import React, {useEffect, useRef} from 'react'
import classes from './ModalWindow.module.css'
import classNames from 'classnames'
import {useHistory, useParams} from "react-router-dom";
import {useOutsideClick} from '../common/UseOutsideClick';
import {useDispatch, useSelector} from "react-redux";
import {actions, commentImage, loadImageInfo} from '../../redux/images-reducer';
import {getComments, getLargeImage} from '../../redux/image-selector';
import {CommentType} from '../../types/types';
import {convert} from '../common/TimeDataHelp';


type CommentFormType = {
  firstName: string,
  comment: string
}

type PropsModal = {
  setIsOpenModal: (isOpen: boolean) => void
}


const ModalWindow: React.FC<PropsModal> = (props) => {


  const dispatch = useDispatch()
  const comments = useSelector(getComments)
  let photo = useSelector(getLargeImage)
  const {id} = useParams<{ id: string | undefined }>()
  const history = useHistory()
  const backdrop = useRef<HTMLDivElement | null>(null);
  const width = window.innerWidth

  useEffect(() => {
    if (id) {
      dispatch(loadImageInfo(id))
    }
  }, [id])

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

  const formik = useFormik({
    initialValues: {
      firstName: '',
      comment: ''
    } as CommentFormType,
    onSubmit: (values: CommentFormType) => {
      //alert(JSON.stringify(values, null, 2));

      if (id) {
        dispatch(commentImage(id))
      }
    },
  });

  const commentBlock = comments?.map((comment) => {
    return <Comment comment={comment}/>
  })

  if (width < 700) {
    return (
      <div className={classNames(classes.modalWindowContainer, {[classes.open]: id})}>
        <div className={classes.modalWindow} ref={backdrop}>
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
              <form onSubmit={formik.handleSubmit} className={classes.commentForm}>
                <div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className={classes.customInput}
                    placeholder={'Ваше имя'}
                  />
                </div>
                <div>
                  <input
                    id="comment"
                    name="comment"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    className={classes.customInput}
                    placeholder={'Ваша фамилия'}
                  />
                </div>
                <div>
                  <button type={"submit"} className={classes.commentButton}>
                    Оставить комментарий
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={classes.closeModal} onClick={onClose}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(classes.modalWindowContainer, {[classes.open]: id})}>
      <div className={classes.modalWindow} ref={backdrop}>
        <div className={classes.photoInputs}>
          <div>
            {photo && <img src={photo} alt={'largeIMG'} className={classes.imageModal}/>}
          </div>
          <div className={classes.commentFormBlock}>
            <form onSubmit={formik.handleSubmit} className={classes.commentForm}>
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  className={classes.customInput}
                  placeholder={'Ваше имя'}
                />
              </div>
              <div>
                <input
                  id="comment"
                  name="comment"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  className={classes.customInput}
                  placeholder={'Ваша фамилия'}
                />
              </div>
              <div>
                <button type={"submit"} className={classes.commentButton}>
                  Оставить комментарий
                </button>
              </div>
            </form>
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