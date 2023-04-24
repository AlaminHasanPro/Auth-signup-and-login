import React, { useContext } from "react";
import { userContext } from "./Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(userContext);
  
  return (
    <div>
      <h2>This is home page</h2>
      <h2 className="text-center text-4xl border-2 shadow-lg mx-36 text-yellow-800 py-24 font-medium">
        {
          user ? <>{user.email}</> : <></>
        }
      </h2>
    </div>
  );
};

export default Home;
