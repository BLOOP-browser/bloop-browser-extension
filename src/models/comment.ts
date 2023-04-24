export type Comment = {
  id: number;
  userId: number;
  sourceId: number;
  text: string;
  createAt: string;
  updateAt: Date;
};

export type CommentLinkDTO = {
  userId: number;
  sourceId: number;
  text: string;
};

export type EditCommentLinkDTO = {
  id: number;
  sourceId: number;
  text: string;
};

export type DeleteCommentLinkDTO = {
  id: number;
  sourceId: number;
};

export type CommentCollectionDTO = {
  userId: number;
  sourceId: number;
  text: string;
};
