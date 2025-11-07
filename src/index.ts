import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type PromoCardProps = {
  title: string;
  imageUrl: string;
  className?: string;
};

export type ProductCardProps = {
  className?: string;
  badge?: string;
  imageUrl: string;
  vendorName: string;
  basePrice: number;
  dcPrice: number;
  category: string;
  productTitle: string;
  rating: number;
  variant?: "default" | "compact";
};

export type ProductFeatureCardProps = {
  className?: string;
  imageUrl: string;
  vendorName: string;
  basePrice: number;
  dcPrice: number;
  title: string;
  rating: number;
};
