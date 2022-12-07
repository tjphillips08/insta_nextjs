import React from "react";
import Link from "next/link";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion } from "framer-motion";

const NavigationBar = (props) => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="flex lg:p-6 justify-between md:justify-around bg-teal-500 p-4 sticky top-0 shadow-lg">
      <div className="flex items-center text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight ml-2" href="/">
          InstaCats
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="font-semibold text-xl tracking-tight ml-2" href="/">
          <motion.div
            animate={{ rotate: [-5, 5, -5, 5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut", repeatDelay: 1 }}
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <FontAwesomeIcon
              className="text-slate-600 text-6xl pr-4 pl-4 "
              icon={faCat}
            />
          </motion.div>
        </Link>
        {user && (
          <div className="text-sm flex items-center">
            <Link
              className="visible sm:text-xs text-xl sm:invisible"
              href="/Upload"
            >
              <motion.div
                animate={{ rotate: [-5, 5, -5, 5, 0], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FontAwesomeIcon
                  className="text-slate-600 rotate-45  visible sm:invisible"
                  icon={faCameraRetro}
                />
              </motion.div>
            </Link>
          </div>
        )}
      </div>

      <div className="flex items-center">
        {user && (
          <div className="text-sm flex items-center">
            <Link
              className="invisible md:pr-6 text-xs sm:text-base sm:visible"
              href="/Upload"
            >
              Upload Photo
            </Link>
          </div>
        )}
        <Login></Login>
      </div>
    </nav>
  );
};

export default NavigationBar;