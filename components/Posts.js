import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Posts = (props) => {
    const posts = props.posts
  return (
    <main className="flex justify-center">
      <div className="flex flex-col ">
        {posts.map((post, index) => {
          {
            return (
              <div
                key={index}
                className="self-center text-sky-100 p-4 m-4 rounded-lg bg-teal-500"
              >
                <Link
                  href={{
                    pathname: `/posts/${post.pk}`,
                    query: {
                      data: [post.comments, post.image, post.name],
                    },
                  }}
                >
                  <p>{post.name}</p>
                  <div className="flex justify-center">
                    <Image
                      className="te"
                      alt="hello"
                      width="600"
                      height="80"
                      src={`http://catstagram.lofty.codes/media/${post.image}`}
                    ></Image>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}

export default Posts