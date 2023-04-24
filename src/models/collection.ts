import { LinkData } from "./link";

export type CreateCollection = {
  title: string;
  description: string;
  links?: Int32Array;
  accessType?: string;
  usersAccess?: Array<string>;
};

export type CollectionLinkData = {
  linkId: number,
  userId: number,
  addedDate: string,
}

export type CollectionData = {
  id: number;
  userId: number;
  title?: string;
  description?: string;
  linksList?: Array<LinkData>;
  links?: Array<CollectionLinkData>;
  comments?: Array<string>;
  updateHistory?: Array<UpdateHistory>;
  usersAccess?: Array<string>;
  createAt?: string;
  updateAt?: string;
  accessType?: string;
  tags?: Array<string>;
};

export type UpdateHistory = {
  userId: number;
  date: string;
};

export type CollectionByUserData = {
  username?: string;
  collection: CollectionData;
};

export type CollectionSearchData = {
  _id: string;
  _index: string;
  _score: number;
  _source: CollectionData;
}

