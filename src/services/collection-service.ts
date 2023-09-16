import http from "./http";
import { CreateCollection, CollectionData, CollectionSearchData } from "../models/collection";
import axios from "axios";

const createCollection = (collectionDTO: CreateCollection) => {
  // console.log(collectionDTO);
  var headers = {
    headers: { 
      "Content-type": "application/json",
      "Accept": "/",
      "Authorization" : `Bearer ${localStorage.getItem("auth")}` 
    }
  }
  var data = { 
    'title': collectionDTO.title,
    'description':  collectionDTO.description,
    'accessType': collectionDTO.accessType,
    'usersAccess': []
  }
  return http.post<CollectionData>(
    `/collection`, 
    data,
    headers
  )
}

const getCollections = () => {
  return http.get<[CollectionData]>(`/collection/my`, {  headers: {
    "Content-type": "application/json",
    "Accept": "/",
    "Authorization" : `Bearer ${localStorage.getItem("auth")}`
  },});
}


const addLinkToCollection = (collectionId: number, links: Array<number>) => {
  return http.post<CollectionData>(`/collection/${collectionId}/link`, {
    links: links
  },{  headers: {
    "Content-type": "application/json",
    "Accept": "/",
    "Authorization" : `Bearer ${localStorage.getItem("auth")}`
  },})
}


const CollectionService = {
  createCollection,
  getCollections,
  addLinkToCollection,
}

export default CollectionService;
