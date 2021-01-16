import {FieldProps, useFormik} from 'formik';
import React, {useEffect, useRef} from 'react'
import classes from './ModalWindow.module.css'
import classNames from 'classnames'
import {useHistory, useParams} from "react-router-dom";


type CommentType = {
  firstName: string,
  comment: string
}


const ModalWindow: React.FC = (props) => {

  const { id } = useParams<{id: string | undefined}>()
  const history = useHistory()
  const backdrop = useRef<HTMLDivElement | null>(null);

  const onClose = () => {
    if (id) {
      history.push({
        pathname: '/images/'
      })
    }
  }

  useOutsideClick(backdrop as React.MutableRefObject<HTMLDivElement>, onClose);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      comment: ''
    } as CommentType,
    onSubmit: (values: CommentType) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classNames(classes.modalWindowContainer, {[classes.open]: id}) }>
      <div className={classes.modalWindow} ref={backdrop}>
        <div className={classes.photoInputs}>
          <div>
            <img src={"https://picsum.photos/id/237/600/400"} alt={'landscape'} className={classes.imageModal}/>
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
          <div className={classes.comment}>
            <div className={classes.dateComment}>
              29.29.29
            </div>
            <div className={classes.commentText}>
              Тут должен быть комментарий
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const useOutsideClick = (ref: React.MutableRefObject<HTMLDivElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default ModalWindow