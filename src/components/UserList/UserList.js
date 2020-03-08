import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import Loading from "./octocat-spinner-128.gif";
import InfiniteScroll from 'react-infinite-scroller';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(true);
  const [isMore, setIsMore] = useState(true)

  // useEffect(() => {
  //   // fetchDateCard();
  // }, []);

  const fetchDateCard = () => {
    fetch("https://api.randomuser.me/")
      .then(res => res.json())
      .then(res => {
        setUsers([...users, res.results[0]])
        setStatus(false);
      })

    if (users.length === 9)
              setIsMore(false)
  }

  const fetchDataClickedNew = (indUser) => {
    fetch("https://api.randomuser.me/")
      .then(res => res.json())
      .then(res => {
        let newUsers = [];
        newUsers = users.map((user, ind) => {
          if (ind === indUser) {
            return Object.assign({}, res.results[0])
          }
          return user
        });

        setUsers(newUsers);
      })
  }

  const handelNewUsers = (ind) => {
    fetchDataClickedNew(ind);
  }


  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchDateCard}
      hasMore={isMore}
      loader={<div className="loading" key={Math.floor(Math.random * 1000)}><img src={Loading} alt=""/></div>}>

      <div>
          <UserCard myuser={users} newUser={handelNewUsers} />
      </div>

    </InfiniteScroll>

  );
};

export default UserList;