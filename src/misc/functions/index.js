import { twJoin, twMerge, ClassNameValue } from "tailwind-merge";

/**
 * @param  {...ClassNameValue} classNames
 * @returns
 */
export function twClsx(...classNames) {
  return twMerge(twJoin(classNames));
}
