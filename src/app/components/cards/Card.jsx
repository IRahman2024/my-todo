import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const Card = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Title!</h2>
                <p>Description</p>
                <div className="card-actions justify-start">
                    <Link 
                    href={'/editTopic'}
                    className="text-green-400"
                    size={24}
                    href={'/editTopic/123'}><HiPencilAlt/></Link>
                    <RemoveBtn></RemoveBtn>
                </div>
            </div>
        </div>
    );
};

export default Card;