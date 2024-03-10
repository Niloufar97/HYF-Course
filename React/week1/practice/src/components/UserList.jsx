/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import UserItem from "./UserItem";
import "./userList.css";
const UserList = (props) => {
  return (
    <div className="userCard">
      {props.users.map((user) => (
        <UserItem
          name={user.fullname}
          age={user.age}
          address={user.address}
          height={user.height}
          languages={user.languages}
          key={user.id}
        />
      ))}
    </div>
  );
};
export default UserList;
