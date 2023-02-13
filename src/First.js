import Img from "./Image/Capture.PNG";
import { NavLink } from "react-router-dom";
function First() {
  return (
    <body className="flex justify-center items-center min-h-screen bg-white">
      <div class="grid grid-cols-2 h-[550px] w-[900px] border-4 border-b-2 shadow-2xl rounded-3xl">
        <div class="flex flex-col pl-[110px] pr-[15px]">
          <h2 className="text-center mt-[50px] mb-[25px] font-bold text-2xl text-green-600">
            Let's Manage
          </h2>
          <p class="p2">Log in Page free trial</p>
          <span class="txtbx">
            <b>Name:</b>
          </span>
          <input
            type="text "
            placeholder="Enter Your Name"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px] border-l-2 border-t-2 border-green-400 outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12  border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)]  shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <span class="txtbx">
            <b>Email:</b>
          </span>
          <input
            type="text"
            placeholder="Enter your Email"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px] border-l-2 border-t-2 border-green-400 outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12  border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)] border-solid shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <span class="txtbx">
            <b>Password:</b>
          </span>
          <input
            type="password"
            placeholder="Create a password"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px] border-l-2 border-t-2 border-green-400 outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-solid border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)] border-solid shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <NavLink to="/4th">
          <button
            class="btn1"
            className="w-full h-[30px] mb-[10px] border-l-2 border-t-2 border-red-600 outline-none rounded-[10px] bg-[#111727] text-[#d1d1d1] shadow-2xl cursor-pointer hover:bg-sky-700 "
          >
            Log In
          </button></NavLink>
          
          <NavLink to="/4th">
          <button
            class="btn2"
            className="w-full
             h-[30px] mb-[10px] border-l-2 border-t-2 border-red-500 outline-none rounded-[10px] bg-[#096906] shadow-2xl cursor-pointer hover:bg-blue-700 text-slate-200"
          >
            {" "}
            Sign up with google
          </button>
          </NavLink>
          <p>
            Create an account?
            <NavLink to="/2nd">
              <b className="hover:text-green-600">Sign up</b>
            </NavLink>
          </p>
          <p>
            Forget Password?
            <NavLink to="/3rd">
              <b className="hover:text-green-600">Click Here</b>
            </NavLink>
          </p>
        </div>
        <div class="imgbox">
          <img src={Img} alt="" className="rounded-xl" />
        </div>
      </div>
    </body>
  );
}
export default First;
