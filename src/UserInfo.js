import React from "react";

function UserInfo({ user }) {
  return (
    <div>
      <h2>Informations utilisateur</h2>
      <p>Nom : {user.name}</p>
      <p>Âge : {user.ag}</p>
    </div>
  );
}

export default UserInfo;
