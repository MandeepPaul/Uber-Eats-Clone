import React from "react";

const SectionCollapse: React.FC<{
  children: React.ReactNode;
  title: string;
}> = (props) => {
  return (
    <>
      <div className="pb-5">
        <button className="flex items-center w-full justify-between font-medium py-1">
          <span>{props.title}</span>
          <svg
            className="w-3 h-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </button>
        <div className="flex flex-col gap-2 text-sm">{props.children}</div>
      </div>
    </>
  );
};

export default SectionCollapse;
