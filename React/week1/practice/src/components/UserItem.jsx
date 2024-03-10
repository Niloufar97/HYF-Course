/* eslint-disable react/prop-types */
import './userList.css'
const UserItem = (props) => {
    return (
        <ul className="userItem">
            <li>Name : {props.name}</li>
            <li>Age : {props.age}</li>
            <li>Address : {props.address}</li>
            <li>Height : {props.height}</li>
            <li>Languages : {props.languages.join(", ")}</li>
        </ul>
    );
  }

export default UserItem;