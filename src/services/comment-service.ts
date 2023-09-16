import http from "./http";
import {Comment} from "../models/comment"

const createLinkComment = (linkId: number, comment: string) => {
  // console.log(comment);
  return http.post<any>(`/link/${linkId}/comment`, {
    comment: comment, 
  },{  headers: {
    "Content-type": "application/json",
    "Accept": "/",
    "Authorization" : `Bearer ${localStorage.getItem("auth")}`
  },})
}

const getLinkComments = (linkId: number) => {
  return http.get<[Comment]>(`/link/${linkId}/comment`,{  headers: {
    "Content-type": "application/json",
    "Accept": "/",
    "Authorization" : `Bearer ${localStorage.getItem("auth")}`
  },});
}

const CommentService = {
    createLinkComment,
    getLinkComments
}

export default CommentService;
