import {Comment} from './comment';
import { CurrentUser } from './user';

export type AddLink = {
  url: string;
  mainDescription: string;
};
  
export type LinkData = {
  id: number;
  userId: number;
  url: string;
  title?: string;
  image?: string;
  mainDescription?: string;
  description?: string;
  createAt?: string;
  updateAt?: string;
  tags?: Array<string>;
  comments?: Array<Comment>;
  user?: CurrentUser; 
};

export type LinkSearchData = {
  _id: string;
  _index: string;
  _score: number;
  _source: LinkData;
}

export type DuckduckgoLinkData = {
  position: number;
  title: string;
  link: string;
  snippet: string;
  favicon: string;
}
