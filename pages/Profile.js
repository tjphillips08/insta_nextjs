import React, { use } from 'react'
import NavigationBar from '../components/NavigationBar'
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from 'next/image';
const Profile = () => {
    const { user, isLoading } = useUser();
    console.log(user)
    if(user != undefined){
  return (
    <div>
      <NavigationBar />
      <div className="flex bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 pb-8 h-screen">
        <div className="grid self-center justify-center w-full">
          <h1 className="flex justify-center text-4xl pb-4">Hello,</h1>
          <Image
            src={user.picture}
            alt="Profile"
            className="nav-user-profile rounded-lg shadow-lg"
            width="200"
            height="50"
            decode="async"
            data-testid="navbar-picture-desktop"
          ></Image>
          <h1 className="flex justify-center text-4xl pt-4">{user.given_name}</h1>
        </div>
      </div>
    </div>
  );
}}

export default Profile