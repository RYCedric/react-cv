import React from "react";
import { BiCalendarEvent, BiHome, BiMailSend, BiPhone } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import "./User.css";

const User = () => {
  return (
    <div className="user">
      <img className="user__avatar" src="./img/avatar.jpg" alt="user-pic" />
      <h1 className="user__name">Yves Cédric</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <BiHome />
          Lot I-142 Manarintsoa Lohanosy Ambohijanaka
        </p>
        <p className="user__info">
          <BiPhone />
          <a href="tel:+261342819100">034 28 191 00</a>{" "}
        </p>
        <p className="user__info">
          <BiMailSend />
          <a href="mailto:ryc.devweb@gmail.com">ryc.devweb@gmail.com</a>
        </p>
        <p className="user__info">
          <BiCalendarEvent />
          Date de naissance : 31 Janvier 1994
        </p>
        <p className="user__info">
          <IoLocationOutline />
          Lieu de naissance : Antananarivo
        </p>
      </div>
    </div>
  );
};

export default User;
