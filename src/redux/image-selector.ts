import { AppStateType } from "./redux-store";


export const getImages = (state: AppStateType) => {
  return state.imagesReducer.images

}

export const getComments = (state: AppStateType) => {
  return state.imagesReducer.imgInfo.comments
}

export const getLargeImage = (state: AppStateType) => {
  return state.imagesReducer.imgInfo.url
}