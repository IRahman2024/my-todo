import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// Function to fetch topics
const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await res.json();
        return data; // Return the entire response object
    } catch (error) {
        console.log("Error loading: ", error);
        return { topics: [] }; // Return an object with an empty topics array in case of error
    }
};

// Card component
const Card = () => {
    const [topics, setTopics] = useState([]); // State to store topics
    const [loading, setLoading] = useState(true); // State to manage loading state

    // useEffect to fetch topics when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const data = await getTopics(); // Fetch topics
            console.log("Fetched data:", data); // Log fetched data for debugging
            setTopics(data.topics); // Set topics in state from the nested topics array
            setLoading(false); // Set loading to false
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array means this runs once when the component mounts

    // While loading, show a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if topics is an array before mapping
    if (!Array.isArray(topics)) {
        return <div>Error: Topics data is not an array</div>;
    }

    // Render the topics
    return (
        <>
            {topics.map((t) => (
                <div key={t._id} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{t.title || "No Title"}</h2>
                        <p>{t.description || "No Description"}</p>
                        <div className="card-actions justify-start">
                            <Link
                                href={`/editTopic/${t._id}`}
                                className="text-green-400"
                                size={24}>
                                <HiPencilAlt />
                            </Link>
                            <RemoveBtn />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;