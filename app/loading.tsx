import Image from "next/image";
import loadImg from "@/public/images/loading.gif";

export default async function Loading() {
  return (
    <main className="flex justify-center items-center h-screen bg-white z-50">
      <Image
        className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
        src={loadImg}
        alt="loading..."
        width={50}
      />
    </main>
  );
}
