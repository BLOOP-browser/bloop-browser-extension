import http from "./http";
import {
  AddLink,
  LinkData,
  LinkSearchData,
  DuckduckgoLinkData,
} from "../models/link";
import { CreateCollection, CollectionData, CollectionSearchData } from "../models/collection";

const addLink = (addLink: AddLink) => {
  // console.log(addLink);
  return http.post<LinkData>(
    `/link`,
    { url: addLink.url, mainDescription: addLink.mainDescription },
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

const editLinkMainDescription = (linkId: number, mainDescription: string) => {
  return http.put<LinkData>(
    `/link/${linkId}`,
    {
      mainDescription: mainDescription,
    },
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

const getLink = (linkId: string) => {
  return http.get<LinkData>(`/link/${linkId}`, {
    headers: {
      "Content-type": "application/json",
      Accept: "/",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });
};

const getLinks = () => {
  return http.get<[LinkData]>(`/link/my`, {
    headers: {
      "Content-type": "application/json",
      Accept: "/",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });
};

const getLinksByCollectionId = (collectionId: number) => {
  return http.get<Array<LinkData>>(`/collection/${collectionId}/link`, {
    headers: {
      "Content-type": "application/json",
      Accept: "/",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });
};

const removeLink = (linkId: number) => {
  return http.delete<LinkData>(`/link/${linkId}`, {
    headers: {
      "Content-type": "application/json",
      Accept: "/",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });
};

const searchLinks = (
  searchKey: string,
  searchType: string,
  page: number,
  perPage: number
) => {
  return http.get<[LinkSearchData]>(
    `/link/search/${searchKey}?searchType=${searchType}&page=${page}&perPage=${perPage}`,
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

const searchPublicLinks = (searchKey: string) => {
  return http.get<[DuckduckgoLinkData]>(`/link/search/public/${searchKey}`, {
    headers: {
      "Content-type": "application/json",
      Accept: "/",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });
};

const LinkService = {
  addLink,
  editLinkMainDescription,
  getLink,
  getLinks,
  getLinksByCollectionId,
  removeLink,
  searchLinks,
  searchPublicLinks,
};

export default LinkService;
