export default interface UserData {
    id: number,
    username?: string,
    discordId?: string,
    email: string,
  }
  
  
  export type CreateUser = {
    email: string;
  };
  
  export type CurrentUser = {
    id: number;
    email: string;
    username: string;
    discordId?: string;
    updateAt?: string;
  };

  export type FollowUser = {
    following: number,
    followers: number,
    follow: boolean,
    followDate?: string,
  }

  export type FollowData = {
    id: number,
    createAt: string,
  }

  export type LoginHistory = {
    id: number;
    userId: number;
    loginDate: string;
  }

  export type LoginUser = {
    accessToken: string;
  }