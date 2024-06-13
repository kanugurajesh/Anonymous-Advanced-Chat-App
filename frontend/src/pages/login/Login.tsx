import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-extrabold text-center text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Login
          <span className="text-blue-500"></span>
        </h1>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              <span>Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="rounded-md p-2 px-6 outline-none font-semibold" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              <span>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="rounded-md p-2 px-6 outline-none font-semibold" />
          </div>
          <Link to="/signup" className="text-gray-600 font-semibold text-sm hover:text-blue-500 transition-all ease-in-out duration-300">
            {"Don't"} have an account ?
          </Link>
          <button type="submit" className="bg-blue-500 p-2 rounded-md font-bold text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in-out tracking-wide" >Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
