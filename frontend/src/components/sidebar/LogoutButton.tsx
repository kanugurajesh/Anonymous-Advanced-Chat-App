import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  // The below one's are used for testing
  // const { logout } = useLogout();
  // let loading = true;

  return (
    <>
      {loading ? (
        <div className="mt-auto bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out">
          <img
            src="/spinner.svg"
            width={35}
            height={35}
            className="rounded-full"
          />
        </div>
      ) : (
        <div
          className="mt-auto bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out"
          onClick={logout}
        >
          <BiLogOutCircle className="w-6 h-6 cursor-pointer" />
        </div>
      )}
    </>
  );
};

export default LogoutButton;
