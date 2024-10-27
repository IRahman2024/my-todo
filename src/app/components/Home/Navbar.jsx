import { useSession, signOut } from "next-auth/react"
const Navbar = () => {
    const { data } = useSession();
    // console.log(data);
    console.log(data.user.name);
    console.log(data.user.image);
    

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">My-Todos</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={data.user.image} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                {data.user.name}
                            </a>
                        </li>
                        <li><button onClick={() => signOut()}>Sign out</button></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;