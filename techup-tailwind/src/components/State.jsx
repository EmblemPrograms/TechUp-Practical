import { useState } from "react";
function LikeButton() {
    const [liked, setLiked] = useState(false);
    return (
        <button
            onClick={() => setLiked(!liked)}
            className={`px-6 py-3 rounded-full font-semibold transition ${liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
        >
            {liked ? "♥ Liked" : "♡ Like"}
        </button>
    );
}

function Tabs() {
    const [active, setActive] = useState("React");
    const tabs = ["HTML", "CSS", "React"];
    return (
        <div className="flex gap-2 mt-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`px-4 py-2 rounded-lg ${active === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}


const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white active:bg-emerald-400",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white active:bg-red-900",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
};
const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
};
function Button({ children, variant = "primary", size = "md", onClick, disabled = false }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${variants[variant]} ${sizes[size]} rounded-lg font-semibold transition duration-
200 disabled:opacity-50 disabled:cursor-not-allowed mt-5`}
        >
            {children}
        </button>
    );
}


function State() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">React State Example</h1>
            <LikeButton />
            <Tabs />
            <Button>Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger" size="sm">Delete</Button>
<Button variant="outline" size="lg">Learn More</Button>
<Button disabled>Loading...</Button>
        </div>
    );
}


export default State;