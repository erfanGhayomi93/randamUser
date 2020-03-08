import React, { useState, useEffect } from "react";
import styles from "./UserSelfCard.module.scss";
import { MdInbox } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from "react-icons/fi";
import { FiLock } from "react-icons/fi"

const UserSelfCard = (props) => {
  const [textStatus, setTextStatus] = useState("name");
  const [textContent, setTextContent] = useState({
    header: "Hi, My name is",
    content: `${props.users.name.first} ${props.users.name.last}`
  });
  const [image, setImage] = useState(props.users.picture.large)

  useEffect(() => {
    handleHover(textStatus);
  }, [props])

  const handleHover = (status) => {
    setTextStatus(status);
      setImage(props.users.picture.large);


    switch (status) {
      case "name":
        setTextContent({
          header: "Hi, My name is",
          content: `${props.users.name.first} ${props.users.name.last}`
        });
        break;

      case "email":
        setTextContent({
          header: "Hi, My email is",
          content: `${props.users.email}`
        });
        break;

      case "address":
        setTextContent({
          header: "Hi, My address is",
          content: `${props.users.location.street.number} ${props.users.location.street.name}`
        });
        break;

      case "phone":
        setTextContent({
          header: "My phone number is",
          content: `${props.users.phone}`
        });
        break;

      case "password":
        setTextContent({
          header: "My phone password is",
          content: `${props.users.login.password}`
        });
        break;

      default:
        return null
    }

  }

  const handleNewUsers = () => {
    props.newUser()
  }


  return (
    <div className={styles.baseCard}>
      <div className={styles.card}>

        <div className={styles.images}>
          <img className={styles.image} src={image} alt="" />
          <span
            onClick={handleNewUsers}
            className={styles.buttonNew}>new</span>
        </div>

        <div className={styles.detail}>
          <p className={styles.header}>{textContent.header}</p>
          <p className={styles.content}>{textContent.content}</p>
        </div>


        <div className={styles.mouseEnter}>
          <div
            className={`${styles.item}  ${textStatus === "name" ? "active" : ""} `}
            onMouseEnter={() => handleHover("name")}>
            <span><MdInbox /></span>
            <span className={styles.moveTop}><i></i><MdInbox /></span>
          </div>

          <div
            className={`${styles.item}  ${textStatus === "email" ? "active" : ""} `}
            onMouseEnter={handleHover.bind(null, "email")}>
            <span>
              <AiOutlineMail />
            </span>
            <span className={styles.moveTop}>
              <i></i>
              <AiOutlineMail />
            </span>
          </div>

          <div
            className={`${styles.item}  ${textStatus === "address" ? "active" : ""} `}
            onMouseEnter={handleHover.bind(null, "address")}>
            <span>
              <GoLocation />
            </span>
            <span className={styles.moveTop}>
              <i></i>
              <GoLocation />
            </span>
          </div>

          <div
            className={`${styles.item}  ${textStatus === "phone" ? "active" : ""} `}
            onMouseEnter={handleHover.bind(null, "phone")}>
            <span>
              <FiPhoneCall />
            </span>
            <span className={styles.moveTop}>
              <i></i>
              <FiPhoneCall />
            </span>
          </div>

          <div
            className={`${styles.item}  ${textStatus === "password" ? "active" : ""} `}
            onMouseEnter={handleHover.bind(null, "password")}>
            <span>
              <FiLock />
            </span>
            <span className={styles.moveTop}>
              <i></i>
              <FiLock />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelfCard;