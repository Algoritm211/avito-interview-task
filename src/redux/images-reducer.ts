import {ImageType, PhotoDescriptionType} from "../types/types";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {ImagesAPI} from "../api/images-api";


const SET_IMAGES = 'frontend-interview-task/image-reducer/SET_IMAGES'


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
  }
}


export const loadImages = (): ThunkType => async (dispatch) => {
  const images = await ImagesAPI.getImages()
  dispatch(actions.setImages(images))
}

type ActionTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>