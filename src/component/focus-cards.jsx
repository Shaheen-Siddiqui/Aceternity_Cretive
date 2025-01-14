import React, { useState } from "react";
import { cn } from "../lib/utils";
import { cards } from "../data";

export const Card = React.memo(({
    card,
    index,
    hovered,
    setHovered
}) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "max-w-sm rounded-lg relative bg-half-white overflow-hidden md:h-96 w-full transition-all duration-300 ease-out cursor-pointer shadow-lg hover:shadow-2xl",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
    >
        <p className="absolute inset-0 m-9 text-lg font-medium text-blue opacity-80 transition-all duration-300 transform group-hover:opacity-100">
            {card.text}
        </p>

        <div
            className={cn(
                "absolute inset-0 bg-black/50 flex items-center justify-center px-4 py-8 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            <div
                className="text-xl text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-110 transition-all duration-300"
            >
                {card.name}
                <div className="mt-2 text-yellow-400">⭐⭐⭐</div>
            </div>
        </div>
    </div>

    // <div
    //     onMouseEnter={() => setHovered(index)}
    //     onMouseLeave={() => setHovered(null)}
    //     className={cn(
    //         "max-w-sm rounded-lg relative bg-half-white overflow-hidden md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
    //         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    //     )}>
    //     <p className="absolute inset-0 m-9"> {card.text}</p>

    //     <div
    //         className={cn(
    //             "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
    //             hovered === index ? "opacity-100" : "opacity-0"
    //         )}>
    //         <div
    //             className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
    //             {card.name}
    //             <span>⭐⭐⭐</span>
    //         </div>
    //     </div>

    // </div>
));

Card.displayName = "Card";

export function FocusCards() {
    const [hovered, setHovered] = useState(null);

    return (
        <>
            <u>
                <h2 className=" m-10 text-left text-white text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]" style={{ textShadow: "2px 2px 4px rgba(95, 73, 73, 0.7), 0px 0px 10px rgba(255, 255, 255, 0.6)" }}>
                    We have worked with hundreds
                    of amazing people
                </h2>
            </u>
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-9xl md:px-8 w-full mt-7">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        keys={card.title}
                        card={card}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered} />
                ))}
            </div>
        </>
    );
}
