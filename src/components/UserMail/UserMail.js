import React from "react";

const UserMail = (props) => {
  const { deleteMessage, name, mail, desc } = props;
  return (
    <>
      <div className="section is-danger">
        <a class="delete is-pulled-right" onClick={deleteMessage}></a>
        <h2>{name}</h2>
        <h3>{mail}</h3>
        <p>{desc} </p>
      </div>
    </>
  );
};

export default UserMail;
