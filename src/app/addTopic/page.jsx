"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const addTopic = () => {
    const { data } = useSession();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const email = data?.user?.email;

    const router = useRouter();

    const handelSubmit = async(e) =>{
        e.preventDefault();

        // console.log(email);
        

        if(!title || !description){
            alert("need title and description");
            return;
        }

        try{
            const res = await fetch("http://localhost:3000/api/topics",{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description, email}),
            });
            if(res.ok){
                router.push('/');
            }
            else {
                throw new Error("failed to creaate topic");
            }
        }
        catch(error){
            console.log(error);
            
        }
    }

    return (
        <div className='h-screen'>
            <form onSubmit={handelSubmit} className='m-7 grid gap-y-3'>
                <p className="text-4xl">Add New Here</p>
                <input
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <input
                onChange={(e)=> setDescription(e.target.value)}
                value={description}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <button 
                type="submit"
                className='btn btn-sm btn-success w-16'>Add</button>
            </form>
        </div>
    );
};

export default addTopic;