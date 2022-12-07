import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
        <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 pb-8 h-screen md:h-full">
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
            <div className="flex justify-center">
              <div class="max-w-lg rounded-lg shadow-md shadow-blue-600/50">
                <form action="" class="w-full p-4">
                  <div class="mb-2">
                    <label for="comment" class="text-lg">
                      Add a comment
                    </label>
                    <textarea
                      class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 border-size-2focus:ring-1"
                      name="comment"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="flex">
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <button class="px-3 py-2 text-sm  bg-teal-600 border-solid border-2 border-slate-900 rounded">
                        Comment
                      </button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <button class="px-3 py-2 text-sm ml-6 bg-teal-600 border-solid border-2 border-slate-900 rounded">
                        Cancel
                      </button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col  mt-6 self-center bg-teal-600 md:text-base text-xs rounded-lg w-40 md:w-80 border-solid border-2 border-slate-900">
              <button onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? `View ${data.comments.length} Comments` : "Hide"}
              </button>
              {!isCollapsed &&
                comments.map((comment) => (
                  <div
                    key={comment.pk}
                    className="flex justify-center self-center "
                  >
                    <p className="md:text-base text-xs break-all p-2 self-center bg-teal-500 rounded-lg m-2">
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