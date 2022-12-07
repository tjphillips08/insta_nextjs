import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import { css } from "@emotion/core";

const Posts = (props) => {
  const posts = props.posts;
  console.log(posts);
  return (
    <main className="flex justify-center bg-gradient-to-b from-slate-500 via-purple-500 to-slate-500 pt-6">
      <div>
        <AnimatePresence >
          <div>
            {posts.map((post, index) => {
              {
                return (
                  <motion.div
                    style={{
                      y: ["-100%", "-200%"],
                      x: ["-100%", "-200%"],
                      transition: { duration: 2 },
                    }}
                    key={index}
                    className="self-center  text-sky-100 p-6 m-6 rounded-lg bg-teal-500"
                  >
                    <Link
                      href={{
                        pathname: `/posts/${post.pk}`,
                        query: {
                          data: [post.comments, post.image, post.name],
                        },
                      }}
                    >
                      <div className="flex justify-center">
                        <Image
                          className="rounded-lg"
                          alt="hello"
                          width="600"
                          height="80"
                          src={`http://catstagram.lofty.codes/media/${post.image}`}
                        ></Image>
                      </div>
                      <p>{post.timestamp_updated}</p>
                    </Link>
                  </motion.div>
                );
              }
            })}
          </div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Posts;