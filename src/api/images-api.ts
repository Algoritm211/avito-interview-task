import axios from 'axios'
import {ImageType, PhotoDescriptionType} from '../types/types'


export const instanceAxios = axios.create({
  baseURL: 'https://boiling-refuge-66454.herokuapp.com/images/'
})

export const ImagesAPI = {
  async getImages() {
    const images = await instanceAxios.get<Array<ImageType>>('')
    return images.data
  },
  async getPhotoDescription(id: string) {
    const photoDescr = await instanceAxios.get<PhotoDescriptionType>(id).then(data => data)
    return photoDescr.data
  },
  async commentImage(id: string) {
    const response = await instanceAxios.post(`${id}/comments`).then(data => data)
    return response.data
  }
}
