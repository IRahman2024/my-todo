'use client'
import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";
const RemoveBtn = ({ id }) => {
    const router = useRouter();
    const removeTopic = async () => {
        const action = confirm("Are you sure?");
        if (action) {
            const res = await fetch(`https://my-todo-murex-rho.vercel.app/api/topics?id=${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                alert("Topic deleted successfully");
                router.refresh();
            }
        }
    }

    return (
        <button
            size={24}
            onClick={removeTopic}
            className="text-red-600"><FaRegTrashAlt /></button>
    );
};

export default RemoveBtn;