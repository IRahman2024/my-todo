'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try { // Add try block here
            const res = await fetch(`https://my-todo-murex-rho.vercel.app/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update");
            }

            // Optionally, you might want to handle the response here
            console.log("Update successful");
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='h-screen'>
            <form onSubmit={handleSubmit} className='m-7 grid gap-y-3'>
                <p className="text-4xl">Edit</p>
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle} // Use newTitle state
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <input
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription} // Use newDescription state
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <button type="submit" className='btn btn-sm btn-success w-16'>Update</button>
            </form>
        </div>
    );
};

export default EditTopicForm;