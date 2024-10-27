import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Card from "./Card";

const Cards = () => {
    return (
        <div className="grid grid-cols-2 space-x-4 space-y-4">
            <Card></Card>
        </div>
    );
};

export default Cards;