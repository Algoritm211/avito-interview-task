import {FieldProps, useFormik} from 'formik';
import React from 'react'
import classes from './ModalWindow.module.css'


type CommentType = {
  firstName: string,
  comment: string
}

const ModalWindow: React.FC = () => {
//"https://picsum.photos/id/237/600/400"

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
    <div className={classes.modalWindowContainer}>
      <div className={classes.modalWindow}>
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

export default ModalWindow