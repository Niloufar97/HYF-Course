import 
 { useContext } from "react";
import { UserContext } from "../App";

function Name() {
    const users = useContext(UserContext);
    return (
        <>
            <h3>List of users</h3>
            <div>  
                {users.map(user => (
                    <h1 key={user.id}>{user.name}</h1>
                ))}
            </div>
        </>
    );
}

export default Name;
