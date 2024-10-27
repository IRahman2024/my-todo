import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useSession } from "next-auth/react";


const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error loading: ", error);
        return { topics: [] };
    }
};

// Card component
const Card = () => {
    const [topics, setTopics] = useState([]); 
    const [loading, setLoading] = useState(true); 

    const { data: userEmail } = useSession();
    
    
    const specificEmail = userEmail?.user?.email; 
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getTopics(); 
            console.log("Fetched data:", data);
            
            const filteredTopics = data.topics.filter(topic => topic.email === specificEmail);
            setTopics(filteredTopics); // Set filtered topics in state
            setLoading(false); // Set loading to false
        };

        fetchData(); 
    }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(topics)) {
        return <div>Error: Topics data is not an array</div>;
    }

    // Render the topics
    return (
        <>
            {topics.length > 0 ? (
                topics.map((t) => (
                    <div key={t._id} className="card bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{t?.title || "No Title"}</h2>
                            <p>{t.description || "No Description"}</p>
                            <div className="card-actions justify-start">
                                <Link
                                    href={`/editTopic/${t?._id}`}
                                    className="text-green-400"
                                    size={24}>
                                    <HiPencilAlt />
                                </Link>
                                <RemoveBtn id={t._id} />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No topics found for the specified email.</div>
            )}
        </>
    );
};

export default Card;