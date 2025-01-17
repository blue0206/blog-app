import { ReactElement } from "react";
import { ButtonParameters } from "../../types/component-types.ts";

export default function Button({

    children,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props

}: ButtonParameters): ReactElement {
    return (
        <button 
            className={`px-4 py-2 rounded-md ${className} ${bgColor} ${textColor}`} 
            {...props} 
            type={type}
        >
            {children}
        </button>
    );
};