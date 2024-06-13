import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

function Signup() {

  const [input, setInput] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleCheckboxChange = (gender:any) => {
    setInput({...input, gender})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-extrabold text-center text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Sign Up
          <span className="text-blue-500"></span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              <span>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="rounded-md p-2 px-6 outline-none font-semibold"
              value={input.fullName}
              onChange={(e) => setInput({...input, fullName: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="rounded-md p-2 px-6 outline-none font-semibold"
              value={input.userName}
              onChange={(e) => setInput({...input, userName: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="rounded-md p-2 px-6 outline-none font-semibold"
              value={input.password}
              onChange={(e) => setInput({...input, password: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-md p-2 px-6 outline-none font-semibold"
              value={input.confirmPassword}
              onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
            />
          </div>
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={input.gender} />
          <Link
            to="/login"
            className="text-gray-600 font-semibold text-sm hover:text-blue-500 transition-all ease-in-out duration-300"
          >
          have an account already?
          </Link>
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-md font-bold text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in-out tracking-wide"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
