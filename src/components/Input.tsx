import { ReactElement, useId } from "react";
import { InputParameters } from "../../types/component-types.ts";

export default function Input({

    label,
    type = "text",
    className = "",
    ref,
    ...props

}: InputParameters): ReactElement {
    const id = useId();
    return (
        <div>
            {label && 
                <label
                    htmlFor={id} 
                    className=""
                >
                    {label}
                </label>}
            <input 
                type={type} 
                className={`${className} px-4 py-2 rounded-md`}
                {...props} 
                id={id} 
                ref={ref}
            />
        </div>  
    );
};