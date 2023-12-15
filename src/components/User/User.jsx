import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, username, email, phone, website } = user;
    return (
        <div className="p-3 border border-gray-400 rounded-xl">
            <div className="flex gap-4">
                <div class="avatar">
                    <div class="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">{name}</h4>
                    <p className="italic text-sm">{username}</p>
                    <p className="text-lg pt-3 lowercase">{email}</p>
                    <p className="text-md lowercase">{phone}</p>
                </div>
            </div>
            <button className="btn btn-primary w-full mt-5 hover:bg-success text-white"><Link to={`/user/${id}`}>See Details</Link></button>
        </div>
    );
};

export default User;