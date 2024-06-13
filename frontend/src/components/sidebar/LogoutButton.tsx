import { BiLogOutCircle } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out">
        <BiLogOutCircle className="w-6 h-6 cursor-pointer" />
    </div>
  )
}

export default LogoutButton;