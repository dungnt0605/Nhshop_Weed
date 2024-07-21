import React from "react";

const Filter = () => {
    return (
        <>
            <div className="relative lg:hidden group w-[78px] flex place-items-center gap-x-2 h-[34px] border rounded-[100px] px-3 cursor-pointer border-gray-300 text-gray-700 text-xs tracking-[-0.5px]">
                Filter{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down group-hover:rotate-180 duration-300"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
                <ul className="absolute hidden group-hover:block top-full bg-white shadow-xl p-3 *:mb-3 *:mx-2 *:whitespace-nowrap left-0 columns-2 *:duration-300">
                    <li className="hover:text-[#17AF26]">John Mayer</li>
                    <li className="hover:text-[#17AF26]">John Mayer</li>
                    <li className="hover:text-[#17AF26]">John Mayer</li>
                    <li className="hover:text-[#17AF26]">John Mayer</li>
                    <li className="hover:text-[#17AF26]">John Mayer</li>
                </ul>
            </div>
        </>
    );
};

export default Filter;
