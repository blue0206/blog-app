import { ReactElement, useId } from "react";
import { SelectParameters } from "../../types/component-types.ts";

export default function Select({

    options,
    selectedValue = "",
    className = "",
    label,
    ref,
    ...props

}: SelectParameters): ReactElement {
    const id = useId();
    return (
        <div className="w-full">
            {
                label && 
                <label className="" htmlFor={id}>
                    {label}
                </label>
            }
            <select 
                id={id} 
                className={`${className}`} 
                ref={ref} 
                {...props}
            >
                {options?.map((option: string) => (
                    option === selectedValue ? (
                        <option key={option} value={option} selected>
                            {option}
                        </option>
                    ) : (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    )
                ))}
            </select>
        </div>
    );
};