import { useSession, signIn, signOut } from "next-auth/react"

const Welcome = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Welcome to my Todo
                    </p>
                    <button className="btn btn-primary"
                    onClick={() => signIn("github")}
                    >Login!</button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;