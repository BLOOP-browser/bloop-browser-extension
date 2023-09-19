import http from "./http";
import { CreateCollection, CollectionData } from "../models/collection";
// import { LinkData } from "../models/link"
// import axios from "axios";

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

const getCollectionById = (collectionId: number | null) => {
  return http.get<[CollectionData]>(`/collection/${collectionId}`, {  headers: {
    "Content-type": "application/json",
    "Accept": "/",
    "Authorization" : `Bearer ${localStorage.getItem("auth")}`
  },});
}

const getLinksForCollection = (collectionId: number, links: Array<number>) => {
  return http.get<CollectionData>(`/collection/${collectionId}/${links}`, {
    headers: {
      "Content-type": "application/json",
      "Accept": "/",
      "Authorization": `Bearer ${localStorage.getItem("auth")}`
    }
  });
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
  getLinksForCollection,
  addLinkToCollection,
  getCollectionById
}

export default CollectionService;
