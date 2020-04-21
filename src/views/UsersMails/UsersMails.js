import React from "react";

import UserMail from "../../components/UserMail/UserMail";

const UsersMails = (props) => {
  const { deleteMessage } = [props];

  return (
    <>
      <ul>
        {props.usersMails.map((item) => {
          const { name, mail, desc, id } = item;
          return (
            <li key={id}>
              <UserMail
                name={name}
                mail={mail}
                desc={desc}
                id={id}
                deleteMessage={deleteMessage}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersMails;
