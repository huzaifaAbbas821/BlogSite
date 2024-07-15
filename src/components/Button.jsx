import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 text-[1vw] border py-2 rounded-lg ${bgColor ? bgColor : '#323232'} ${textColor ? textColor : 'white'} ${className}`} {...props}>
            {children}
        </button>
    );
}
