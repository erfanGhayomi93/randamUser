import React from "react";
import UserSelfCard from "./UserSelfCard";
// import Loading from "./../UserList/octocat-spinner-128.gif";



const UserCard = props => {
  return (
    <>
      {
        props.myuser.map((card, ind) => <UserSelfCard
          users={card}
          key={ind}
        newUser={() => props.newUser(ind)}
        />)
      }
    </>
  )
};

export default UserCard;
