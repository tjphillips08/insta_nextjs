import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Details() {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();
  const pid = router.query;

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `http://catstagram.lofty.codes/api/posts/${pid.pk}`
      );
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const loaded = () => {
    const comments = data.comments;
    if (comments != undefined) {
      return (
        <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 pb-8 h-max">
          <NavigationBar />
          <div className="flex flex-col justify-center  h-max m-20">
            <div className="flex self-center justify-center w-full m-4">
              <Image
                className="rounded-lg shadow-lg border-solid border-2 border-slate-900"
                alt="hello"
                width="600"
                height="80"
                src={`http://catstagram.lofty.codes/media/${data.image}`}
              ></Image>
            </div>
            <div className="flex flex-col  mt-6 self-center bg-teal-600 rounded-lg w-80 border-solid border-2 border-slate-900">
              <button onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? `View ${data.comments.length} Comments` : "Hide"}
              </button>
              {!isCollapsed &&
                comments.map((comment) => (
                  <div
                    key={comment.pk}
                    className="flex justify-center self-center "
                  >
                    <p className="text-lg break-all p-2 self-center bg-teal-500 rounded-lg m-2">
                      {comment.text}
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex justify-center invisible">An Empty Div</div>
          </div>
        </div>
      );
    }
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return data ? loaded() : loading();
}