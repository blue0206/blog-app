import { InputHTMLAttributes, ReactNode, RefCallback, SelectHTMLAttributes } from "react";

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
export interface InputParameters extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    className?: string;
    ref: RefCallback<HTMLInputElement>;
}

// Select Component
export interface SelectParameters extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    selectedValue?: string;
    className?: string;
    label?: string;
    ref: RefCallback<HTMLSelectElement>;
}

// Post Card Component
export interface PostCardProps {
    $id: string;
    title: string;
    featuredImage: string;
}

// Auth Layout (Protected) Component
export interface AuthLayoutParameters {
    children: ReactNode;
    authentication?: boolean;
}