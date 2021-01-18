import React from 'react'
import {useFormik} from "formik";
import {commentImage} from "../../redux/images-reducer";
import classes from "./ModalWindow.module.css";
import {useDispatch} from "react-redux";


type CommentFormType = {
  firstName: string,
  comment: string
}

type Props = {
  id: string | undefined
}


const CommentForm: React.FC<Props> = (props) => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      comment: ''
    } as CommentFormType,
    onSubmit: (values: CommentFormType) => {
      //alert(JSON.stringify(values, null, 2));

      if (props.id) {
        dispatch(commentImage(props.id))
      }
    },
  });


  return (
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
  )
}
export default CommentForm