import React from "react";
import getSession from "next-auth/next";

const Profile = async () => {
  const session = await getSession({ req: context.req }); // Pass request object from context
  console.log(session);

  return <div>Hey this is my profile</div>; // Use optional chaining
};

export default Profile;
