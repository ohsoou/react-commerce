import React from 'react';
import Icon from "@/components/common/Icon";
import {CiSearch} from "react-icons/ci";

export default function SearchBar() {
    return (
        <div className='w-2/3 mx-auto'>
            <div className="relative flex w-full flex-wrap items-stretch border rounded-full">
                <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1"/>

                <button className="relative z-[2] flex items-center"
                        type="button" id="button-addon1">
                    <Icon Icon={CiSearch} linkAddress={"/"}/>
                </button>
            </div>
        </div>
    );
}