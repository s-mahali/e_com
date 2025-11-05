import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
    title: string;
    className?: string;
    icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type PromoCardProps = {
  title: string;
  imageUrl: string;
  bgColor: string; 
  className?: string;
};