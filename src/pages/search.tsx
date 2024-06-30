import React, { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState<string>();
    return <div className="flex w-72 relative rounded-xl border-2 overflow-hidden px-2 py-1">
        <input className="focus:outline-none" placeholder="Search products here"/>
        <div className="bg-[red] flex justify-center items-center w-1/5 p-2 h-full absolute top-0 right-0 text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
};
export default Search;
