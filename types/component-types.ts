import { ReactNode, RefObject } from "react";

// Header Component
interface NavItem {
  name: string;
  slug: string;
  active: boolean;
}

export type NavItems = NavItem[];

// Button Component
export interface ButtonParameters {
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
    bgColor?: string;
    textColor?: string;
    className?: string;
}

// Input Component
export interface InputParameters {
    label?: string;
    type?: string;
    className?: string;
    ref: RefObject<HTMLInputElement>;
}