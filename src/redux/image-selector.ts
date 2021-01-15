import { AppStateType } from "./redux-store";


export const getImages = (state: AppStateType) => {
  return state.imagesReducer.images

}