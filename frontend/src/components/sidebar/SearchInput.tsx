import { FaSearch } from "react-icons/fa"

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full font-semibold outline-none " />
        <button type="submit" className="bg-sky-500 text-white w-10 h-10 flex items-center justify-center rounded-full border-2 border-sky-500 hover:bg-white hover:text-sky-500 transition-all ease-in-out duration-300">
            <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput