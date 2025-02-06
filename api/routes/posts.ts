import { request } from "@/api/request";

// types imports
import { PostItem, PostParams } from "@/api/types/posts";

// POST create user
export const getAllPosts = async (
    params?: PostParams
  ): Promise< PostItem[] > => {
    return request({
      url: "posts",
      method: "get",
      params,
    });
  };

export const getPostById = async (
    id: number | string
  ): Promise< PostItem > => {
    return request({
      url: `posts/${id}`,
      method: "get",
    });
  };
