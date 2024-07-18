import type { Component } from "vue";

export type BUttonType = "primary" | "danger" | "warning" | "success" | "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: BUttonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
}
