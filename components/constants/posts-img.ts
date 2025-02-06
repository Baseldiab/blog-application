// assets
import PostImg1 from "@/public/images/posts/post-1.webp";
import PostImg2 from "@/public/images/posts/post-2.webp";
import PostImg3 from "@/public/images/posts/post-3.webp";
import PostImg4 from "@/public/images/posts/post-4.webp";
import PostImg5 from "@/public/images/posts/post-5.webp";
import PostImg6 from "@/public/images/posts/post-6.webp";
import PostImg7 from "@/public/images/posts/post-7.webp";
import PostImg8 from "@/public/images/posts/post-8.webp";


interface PostImgItem {
    id: string;
    img: string;
}   

export const postsImg: PostImgItem[] = [
    {
      id: "post-1",
      img: PostImg1.src,
    },
    {
      id: "post-2",
      img: PostImg2.src,
    },
    {
      id: "post-3",
      img: PostImg3.src,
    },
    {
      id: "post-4",
      img: PostImg4.src,
    },
    {
      id: "post-5",
      img: PostImg5.src,
    },
    {
      id: "post-6",
      img: PostImg6.src,
    },
    {
      id: "post-7",
      img: PostImg7.src,
    },
    {
      id: "post-8",
      img: PostImg8.src,
    },

  ];
