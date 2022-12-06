import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import Image from "next/image";
const Login = () => {
  const { user, isLoading } = useUser();
  return (
    <div className="flex flex-col justify-center pl-2 pr-2">
      {!isLoading && !user && (
        <Link href="/api/auth/login" className="btn btn-primary btn-margin">
          Sign in
        </Link>
      )}
      {user && (
        <div>
          <div>
            <Menu>
              <Menu.Button className="text-slate-700 pl-6 relative">
                <Image
                  src={user.picture}
                  alt="Profile"
                  className="nav-user-profile rounded-full shadow-lg"
                  width="50"
                  height="50"
                  decode="async"
                  data-testid="navbar-picture-desktop"
                />
              </Menu.Button>
              <Menu.Items className="text-neutral-200 rounded-lg flex flex-col bg-slate-900 absolute">
                <Menu.Item>{({ active }) => <p> {user.name}</p>}</Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      icon="user"
                      testId="navbar-profile-desktop"
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  <Link
                    href="/api/auth/logout"
                    icon="power-off"
                    testId="navbar-logout-desktop"
                  >
                    Log out
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;