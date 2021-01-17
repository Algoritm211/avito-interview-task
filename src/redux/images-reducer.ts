import {ImageType, PhotoDescriptionType} from "../types/types";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {ImagesAPI} from "../api/images-api";


const SET_IMAGES = 'frontend-interview-task/image-reducer/SET_IMAGES'
const SET_IMAGE_DATA = 'frontend-interview-task/image-reducer/SET_IMAGE_DATA'
const DELETE_IMAGE_DATA = 'frontend-interview-task/image-reducer/DELETE_IMAGE_DATA'


const initialState = {
  images: [] as Array<ImageType>,
  imgInfo: {} as PhotoDescriptionType
}

export const imagesReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.images]
      }
    case SET_IMAGE_DATA:
      return {
        ...state,
        imgInfo: {...action.imgData}
      }
    case DELETE_IMAGE_DATA:
      return {
        ...state,
        imgInfo: {} as PhotoDescriptionType
      }
    default:
      return state
  }
}


export const actions = {
  setImages(images: Array<ImageType>) {
    return {
      type: SET_IMAGES,
      images
    } as const
  },

  setImageData(imgData: PhotoDescriptionType) {
    return {
      type: SET_IMAGE_DATA,
      imgData: imgData
    } as const
  },

  removeImageData() {
    return {
      type: DELETE_IMAGE_DATA,
    } as const
  }
}


export const loadImages = (): ThunkType => async (dispatch) => {
  const images = await ImagesAPI.getImages()
  dispatch(actions.setImages(images))
}


export const loadImageInfo = (id: string): ThunkType => async (dispatch) => {
  const imgInfo = await ImagesAPI.getPhotoDescription(id)
  dispatch(actions.setImageData(imgInfo))
}

export const commentImage = (id: string): ThunkType => async (dispatch) => {
  const response = await ImagesAPI.commentImage(id)
}

type ActionTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>