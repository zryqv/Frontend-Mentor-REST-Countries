import React from "react";

function Card({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      {...props}
      className={`dark:bg-[#2B3945] bg-[#FFFFFF] border-[6px] rounded-lg border-opacity-10 dark:border-opacity-20 border-gray-400 dark:border-black ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
