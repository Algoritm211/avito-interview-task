export type ImageType = {
  id: number,
  url: string
}

export type CommentType = {
  id: number,
  text: string,
  date: number
}

export type PhotoDescriptionType = {
  id: number,
  url: string,
  comments: Array<CommentType>
}
