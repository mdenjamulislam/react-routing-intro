import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="w-full h-full overflow-y-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-5">Users : {users.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;