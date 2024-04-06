import React from "react";

interface Users {
  params: { userId: string };
}

const Users: React.FC<Users> = (props) => {
  return <div>Users{props.params.userId}</div>;
};

export default Users;
