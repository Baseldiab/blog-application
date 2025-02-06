import { request } from "@/api/request";

// types imports
import { UserItem } from "@/api/types/users";



export const getUserById = async (
    id: number | string,
  ): Promise< UserItem> => {
    return request({
      url: `users/${id}`,
      method: "get",
    });
  };
