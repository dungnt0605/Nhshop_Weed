import React from "react";

const page = () => {
    return (
        <>
            {/* ********* */}
            {/* MAIN */}
            <div className="w-full lg:py-10 py-4 border pb-[199px]">
                <div className="lg:container lg:mx-auto lg:w-[1315px] mb:w-full grid lg:grid-cols-[304px_978px] mb:grid-cols-[100%] *:w-full justify-between">
                    {/* filter */}
                    <div className="lg:block hidden py-3 mt-0.5">
                        <span className="lg:text-xl tracking-[-0.4px]">
                            Filters
                        </span>
                        {/* category */}
                        <section className="flex flex-col pt-[47px] pb-6">
                            <span className="text-[#717378] text-xs tracking-[1px]">
                                PRODUCT CATEGORY
                            </span>
                            <ul className="*:gap-y-3 *:gap-x-3.5 *:tracking-[1px] pt-2.5 pb-1.5 *:flex *:items-center *:my-[9px] border-b">
                                <li className="">
                                    <input
                                        id="sale1"
                                        className="w-5 h-5 invisible"
                                        type="radio"
                                    />
                                    <label
                                        htmlFor="sale1"
                                        className="relative sale2 before:w-5 before:h-5 before:border active:before:border-[6px] before:top-[10%] before:left-[-90%] active:before:border-[#17AF26] before:rounded-[50%] before:absolute"
                                    >
                                        Sale
                                    </label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                                <li>
                                    <input
                                        id="sale"
                                        className="w-[20px] h-[20px] accent-[#17AF26]"
                                        type="radio"
                                    />
                                    <label htmlFor="sale">Sale</label>
                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                            </ul>
                        </section>
                        {/* price */}
                        <section className="flex flex-col pr-7 pb-6 border-b">
                            <span className="text-[#717378] text-xs tracking-[1px]">
                                FILTER BY PRICE
                            </span>
                            <div className="flex justify-between *:px-2.5 my-5 *:py-1 *:bg-[#F4F4F4] *:rounded-[100px] *:text-xs">
                                <div>$0</div>
                                <div>$50.000.00</div>
                            </div>
                            <input type="range" className="h-[2px] bg-black" />
                            <button className="w-[103px] mt-6 h-[40px] rounded-[1000px] bg-[#17AF26] text-white">
                                Apply
                            </button>
                        </section>
                        {/* order */}
                        <section className="flex flex-col py-6">
                            <span className="text-[#717378] text-xs tracking-[1px]">
                                ORDER BY
                            </span>
                            <ul className="*:gap-3 py-2 *:flex *:items-center *:my-[9px] border-b">
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="radio"
                                    />{" "}
                                    Sale
                                </li>
                            </ul>
                        </section>
                        {/* review */}
                        <section className="flex flex-col">
                            <span className="text-[#717378] text-xs tracking-[1px]">
                                FILTER BY REVIEWS
                            </span>
                            <ul className="*:gap-3 pb-2 *:flex *:items-center *:my-[18px] border-b">
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="checkbox"
                                    />
                                    <div className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="checkbox"
                                    />
                                    <div className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="checkbox"
                                    />
                                    <div className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="checkbox"
                                    />
                                    <div className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    {" "}
                                    <input
                                        className="w-[20px] h-[20px]"
                                        type="checkbox"
                                    />
                                    <div className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        {/* clear filters */}
                        <button className="bg-[#F3FBF4] rounded-[100px] text-[14px] leading-[21px] text-[#17AF26] mt-5 h-10 px-8">
                            Clear Filters
                        </button>
                    </div>
                    {/* product */}
                    <div className="w-full flex flex-col mb:items-center lg:items-start">
                        <div className="mb:w-[342px] lg:w-full flex justify-between items-center border-b lg:pb-6 mb:pb-4">
                            <strong className="lg:text-2xl mb:text-base font-normal">
                                Shop
                            </strong>
                            <div className="flex gap-x-[10px]">
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
                                        <li className="hover:text-[#17AF26]">
                                            John Mayer
                                        </li>
                                        <li className="hover:text-[#17AF26]">
                                            John Mayer
                                        </li>
                                        <li className="hover:text-[#17AF26]">
                                            John Mayer
                                        </li>
                                        <li className="hover:text-[#17AF26]">
                                            John Mayer
                                        </li>
                                        <li className="hover:text-[#17AF26]">
                                            John Mayer
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative group flex lg:gap-x-3 gap-x-1.5 place-items-center py-2 border rounded-[100px] px-[14px] cursor-pointer border-gray-300 text-gray-700 lg:text-sm text-xs">
                                    Short By Lates{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-down group-hover:rotate-180 duration-300 lg:w-[22px] lg:h-[22px] w-[14px] h-[14px]"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <ul className="absolute hidden group-hover:block top-full right-0 bg-white shadow-xl py-2 px-3 *:my-2 *:whitespace-nowrap w-[50vw]">
                                        <li>John Mayer</li>
                                        <li>John Mayer</li>
                                        <li>John Mayer</li>
                                        <li>John Mayer</li>
                                        <li>John Mayer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* text */}
                        <div className="lg:w-[864px] mb:w-[342px] lg:mt-9 lg:pb-8 mb:pb-6 mb:mt-6">
                            <span className="lg:text-xl mb:text-base text-[#17AF26]">
                                Cannabis
                            </span>
                            <p className="text-[#717378] mt-4 lg:text-base mb:text-[14px]">
                                Here at WestCoastSupply’s “ cannabis section, we
                                showcase the best Indica, Hybrid, and Sativa
                                medical cannabis strain selections at the best
                                prices online. You can be assured that all our
                                strains go through a strict screening process to
                                ensure that all your cannabis needs are
                                top-quality. All of our flowers are sourced from
                                reputable growers, based in British Columbia,
                                Canada. We have hige grade selection comes from
                                growers that produce AAAA+ quality cannabis
                                flowers and have many years of experience in the
                                cannabis industry. You are guaranteed to be
                                receiving high-quality flowers at the best
                                prices online with our unbeatable sales!
                            </p>
                        </div>
                        {/* top best selling */}
                        <div className="bg-[#F2F6F4] w-full lg:rounded-2xl lg:pt-[25px] lg:pb-6 lg:px-8 pt-[22px] pb-4">
                            <strong className="lg:text-2xl mb:text-lg lg:tracking-[-0.5px] mb:mx-11 lg:mx-0 font-medium">
                                Top Selling
                            </strong>
                            <div className="lg:w-auto mb:w-full mx-auto overflow-x-auto snap-x scroll_dragging duration-300 scroll-smooth hidden_scroll_x grid grid-flow-col *:lg:w-[282.67px] *:mb:w-[240px] lg:pt-[27px] mb:pt-6 lg:gap-x-[32px] gap-x-6">
                                {/* item 1 */}
                                <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                                    {/* img */}
                                    <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                                        <img
                                            className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                            src="../Images/product_5.png"
                                            alt=""
                                        />
                                        <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                            Out Of Stock
                                        </button>
                                        <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                            $60 ounce
                                        </section>
                                    </div>
                                    {/* about */}
                                    <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                        <div className="flex flex-col gap-y-2 items-center">
                                            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                                FLOWER
                                            </strong>
                                            <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                                2 Oz Deal Watermelon Zkittles +
                                                Purple Gushers
                                            </strong>
                                            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                                <div className="flex items-start">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-star"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </svg>
                                                    <strong>4.6/5</strong>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <strong>135</strong>
                                                    <span className="text-[#C8C9CB]">
                                                        Reviews
                                                    </span>
                                                </div>
                                            </section>
                                            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                                Sativa 100%
                                            </section>
                                        </div>
                                        <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                                <span className=" text-[#EB2606]">
                                                    $ 80.00
                                                </span>
                                                <span>/ gram</span>
                                            </div>
                                            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                                <button>28g</button>
                                                <button>1/2lb</button>
                                                <button>1/4lb</button>
                                            </div>
                                            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* item 1 */}
                                <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                                    {/* img */}
                                    <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                                        <img
                                            className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                            src="../Images/product_5.png"
                                            alt=""
                                        />
                                        <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                            Out Of Stock
                                        </button>
                                        <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                            $60 ounce
                                        </section>
                                    </div>
                                    {/* about */}
                                    <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                        <div className="flex flex-col gap-y-2 items-center">
                                            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                                FLOWER
                                            </strong>
                                            <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                                2 Oz Deal Watermelon Zkittles +
                                                Purple Gushers
                                            </strong>
                                            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                                <div className="flex items-start">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-star"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </svg>
                                                    <strong>4.6/5</strong>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <strong>135</strong>
                                                    <span className="text-[#C8C9CB]">
                                                        Reviews
                                                    </span>
                                                </div>
                                            </section>
                                            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                                Sativa 100%
                                            </section>
                                        </div>
                                        <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                                <span className=" text-[#EB2606]">
                                                    $ 80.00
                                                </span>
                                                <span>/ gram</span>
                                            </div>
                                            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                                <button>28g</button>
                                                <button>1/2lb</button>
                                                <button>1/4lb</button>
                                            </div>
                                            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* item 1 */}
                                <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                                    {/* img */}
                                    <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                                        <img
                                            className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                            src="../Images/product_5.png"
                                            alt=""
                                        />
                                        <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                            Out Of Stock
                                        </button>
                                        <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                            $60 ounce
                                        </section>
                                    </div>
                                    {/* about */}
                                    <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                        <div className="flex flex-col gap-y-2 items-center">
                                            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                                FLOWER
                                            </strong>
                                            <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                                2 Oz Deal Watermelon Zkittles +
                                                Purple Gushers
                                            </strong>
                                            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                                <div className="flex items-start">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-star"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </svg>
                                                    <strong>4.6/5</strong>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <strong>135</strong>
                                                    <span className="text-[#C8C9CB]">
                                                        Reviews
                                                    </span>
                                                </div>
                                            </section>
                                            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                                Sativa 100%
                                            </section>
                                        </div>
                                        <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                                <span className=" text-[#EB2606]">
                                                    $ 80.00
                                                </span>
                                                <span>/ gram</span>
                                            </div>
                                            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                                <button>28g</button>
                                                <button>1/2lb</button>
                                                <button>1/4lb</button>
                                            </div>
                                            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* item 1 */}
                                <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                                    {/* img */}
                                    <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                                        <img
                                            className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                            src="../Images/product_5.png"
                                            alt=""
                                        />
                                        <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                            Out Of Stock
                                        </button>
                                        <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                            $60 ounce
                                        </section>
                                    </div>
                                    {/* about */}
                                    <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                        <div className="flex flex-col gap-y-2 items-center">
                                            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                                FLOWER
                                            </strong>
                                            <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                                2 Oz Deal Watermelon Zkittles +
                                                Purple Gushers
                                            </strong>
                                            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                                <div className="flex items-start">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-star"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </svg>
                                                    <strong>4.6/5</strong>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <strong>135</strong>
                                                    <span className="text-[#C8C9CB]">
                                                        Reviews
                                                    </span>
                                                </div>
                                            </section>
                                            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                                Sativa 100%
                                            </section>
                                        </div>
                                        <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                                <span className=" text-[#EB2606]">
                                                    $ 80.00
                                                </span>
                                                <span>/ gram</span>
                                            </div>
                                            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                                <button>28g</button>
                                                <button>1/2lb</button>
                                                <button>1/4lb</button>
                                            </div>
                                            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* item 1 */}
                                <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                                    {/* img */}
                                    <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                                        <img
                                            className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                            src="../Images/product_5.png"
                                            alt=""
                                        />
                                        <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                            Out Of Stock
                                        </button>
                                        <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                            $60 ounce
                                        </section>
                                    </div>
                                    {/* about */}
                                    <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                        <div className="flex flex-col gap-y-2 items-center">
                                            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                                FLOWER
                                            </strong>
                                            <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                                2 Oz Deal Watermelon Zkittles +
                                                Purple Gushers
                                            </strong>
                                            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                                <div className="flex items-start">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-star"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </svg>
                                                    <strong>4.6/5</strong>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <strong>135</strong>
                                                    <span className="text-[#C8C9CB]">
                                                        Reviews
                                                    </span>
                                                </div>
                                            </section>
                                            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                                Sativa 100%
                                            </section>
                                        </div>
                                        <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                                <span className=" text-[#EB2606]">
                                                    $ 80.00
                                                </span>
                                                <span>/ gram</span>
                                            </div>
                                            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                                <button>28g</button>
                                                <button>1/2lb</button>
                                                <button>1/4lb</button>
                                            </div>
                                            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* render products */}
                        <div className="lg:w-full mb:w-[342px] md:w-[95vw] grid lg:my-[33px] my-[29px] lg:grid-cols-[304px_304px_304px] mb:grid-cols-[159px_159px] lg:gap-y-8 gap-y-[29px] text-center justify-between">
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* contentratest */}
                        <div className="lg:w-full mb:w-full lg:rounded-3xl lg:my-8 mb:my-2 lg:h-[460px] mb:h-[671px] bg-gradient-to-r from-[#05422C] lg:pl-[56px] lg:pr-[88px] to-[#648A7C] mb:py-6 flex lg:flex-row mb:flex-col items-center justify-between">
                            {/* left */}
                            <div className="lg:w-[341px] lg:h-[348px] mb:h-[239px] w-[342px] text-white flex flex-col justify-between">
                                <span className="lg:text-sm mb:text-xs opacity-30 lg:tracking-[4px] mb:tracking-[2px]">
                                    CONCENTRATES
                                </span>
                                <strong className="lg:text-[32px] lg:leading-[38px] mb:text-[24px] lg:font-semibold lg:tracking-[-1.4px] lg:-mt-1 mt-1.5 font-medium tracking-[-0.5px]">
                                    Mix And Match Shatter/
                                    <br className="lg:hidden" />
                                    Budder 28g{" "}
                                    <br className="hidden lg:block" /> (4 X 7G)
                                </strong>
                                <section className="w-[163px] h-[21px] lg:translate-y-2.5 *:text-sm flex justify-between items-center lg:mt-0 mt-2.5">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    |
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <div className="flex *:text-xs *:py-[7px] *:px-[10px] gap-x-2 my-3 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button className="bg-[#17AF26] lg:w-[172px] lg:h-[56px] lg:px-0 px-[19px] mb:h-[40px] grid place-items-center rounded-[100px] lg:text-base text-sm text-white">
                                        Add to Cart
                                    </button>
                                    <span className="font-normal lg:text-xl mb:text-lg text-[#F2BC1B]">
                                        $102.00{" "}
                                        <del className="lg:text-sm mb:text-mb text-white">
                                            $200.00
                                        </del>
                                    </span>
                                </div>
                            </div>
                            {/* right */}
                            <div className="relative lg:w-[373px] mb:w-[342px] h-[344px] flex flex-col items-center justify-between">
                                <div className="w-full h-[322px] bg-[#ffffff12] grid place-items-center rounded-2xl">
                                    <img
                                        src="../Images/img_product.png"
                                        alt=""
                                    />
                                </div>
                                {/* *****  */}
                                <div className="*:relative flex *:w-1.5 *:h-1.5 *:rounded-[50%] gap-x-2 *:after:content-[''] *:after:absolute *:after:-top-1/2 *:after:-left-1/2 *:after:rounded-[50%] *:after:bg-[#ffffff20]">
                                    <button className="bg-[#ffffff] after:w-3 after:h-3" />
                                    <button className="bg-[#ffffff20] hover:after:w-3 hover:after:h-3 hover:bg-white" />
                                    <button className="bg-[#ffffff20] hover:after:w-3 hover:after:h-3 hover:bg-white" />
                                    <button className="bg-[#ffffff20] hover:after:w-3 hover:after:h-3 hover:bg-white" />
                                </div>
                                {/* back and next */}
                                <div className="absolute top-1/2 -translate-y-full w-full flex justify-between *:w-7 *:h-7 *:rounded-[50%] *:bg-white *:grid *:place-items-center">
                                    <button className="-translate-x-1/2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-left"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button className="translate-x-1/2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-right"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* products */}
                        <div className="lg:w-full mb:w-[342px] md:w-[95vw] grid mt-8 lg:mb-8 mb-[30px] lg:grid-cols-[304px_304px_304px] mb:grid-cols-[159px_159px] lg:gap-y-8 gap-y-[29px] text-center justify-between">
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* item 1 */}
                            <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                                {/* img */}
                                <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#f4f4f4] rounded-xl grid place-items-center">
                                    <img
                                        className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                        src="../Images/product_5.png"
                                        alt=""
                                    />
                                    <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                        Out Of Stock
                                    </button>
                                    <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                        $60 ounce
                                    </section>
                                </div>
                                {/* about */}
                                <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                                    <div className="flex flex-col gap-y-2 items-center">
                                        <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                            FLOWER
                                        </strong>
                                        <strong className="lg:text-lg text-center lg:line-clamp-2 mb:line-clamp-3 mb:text-base font-normal text-[#1A1E26]">
                                            2 Oz Deal Watermelon Zkittles +
                                            Purple Gushers
                                        </strong>
                                        <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                            <div className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                <strong>4.6/5</strong>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <strong>135</strong>
                                                <span className="text-[#C8C9CB]">
                                                    Reviews
                                                </span>
                                            </div>
                                        </section>
                                        <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                            Sativa 100%
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                        <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                            <span className=" text-[#EB2606]">
                                                $ 80.00
                                            </span>
                                            <span>/ gram</span>
                                        </div>
                                        <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                            <button>28g</button>
                                            <button>1/2lb</button>
                                            <button>1/4lb</button>
                                        </div>
                                        <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* list page */}
                        <div className="lg:w-full flex lg:flex-row mb:flex-col justify-between items-center lg:pt-6 pt-[18px] mb:gap-y-5 lg:gap-y-0">
                            {/* show page */}
                            <span className="lg:w-auto  mb:w-full text-[#717378] lg:text-sm mb:text-xs">
                                Showing 1-30 of 393 results
                            </span>
                            {/* list page */}
                            <div className="lg:w-auto mb:w-[342px] flex items-center justify-left *:w-9 *:h-9 *:rounded-[50%] *:grid *:place-items-center lg:gap-x-[9.5px] gap-x-1 text-xs lg:text-sm">
                                <button className="border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-left"
                                    >
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                </button>
                                {/* **** */}
                                <button className="bg-[#F2F6F4]">1</button>
                                <button className="hover:bg-[#f2f6f4]">
                                    2
                                </button>
                                <button className="hover:bg-[#f2f6f4]">
                                    3
                                </button>
                                <button className="hover:bg-[#f2f6f4]">
                                    4
                                </button>
                                <span className="hover:bg-[#f2f6f4]">...</span>
                                <button className="hover:bg-[#f2f6f4]">
                                    55
                                </button>
                                {/* **** */}
                                <button className="border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-right"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MAIN */}
            {/* ********* */}
        </>
    );
};

export default page;
