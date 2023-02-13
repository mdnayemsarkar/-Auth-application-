import { NavLink } from "react-router-dom";




function Secound() {
  return (
    <body className="flex justify-center items-center min-h-screen bg-white">
      <div class="flex  h-[550px] w-[600px] border-l-2 border-r-2 border-t-2 border-green-400 border-b-2 shadow-2xl rounded-3xl">
        <div class="flex flex-col pl-[130px] w-full pr-[130px] mb-[10px]">
          <h2 className="text-center mt-[30px] mb-[25px] font-bold text-2xl text-green-600">
            Let's Manage
          </h2>
          <p class="p2">Create Account trial</p>
          <span class="txtbx">
            <b> User Name:</b>
          </span>
          <input
            type="text "
            placeholder="User Name"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px] border-l-2 border-t-2 border-green-400 outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12  border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)] shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <span class="txtbx">
            <b>Email Address:</b>
          </span>
          <input
            type="text"
            placeholder="Enter your Email"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px]  outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-l-2 border-t-2 border-green-400 border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)]  shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <span class="txtbx">
            <b>Password:</b>
          </span>
          <input
            type="password"
            placeholder="Create a password"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px]  outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-l-2 border-t-2 border-green-400 border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)]  shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <span class="txtbx">
            <b>Confirm Password:</b>
          </span>
          <input
            type="password"
            placeholder="Re-Enter Your password"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px]  outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-l-2 border-t-2 border-green-400 border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)]  shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <button
            class="btn1"
            className="w-full
 mb-[10px] outline-none border-l-2 border-t-2 border-red-600 rounded-[10px] bg-[#111727] text-[#d1d1d1] shadow-2xl cursor-pointer hover:bg-sky-700 h-[40px]"
          >
           <NavLink to="/3rd
           "> Create Account</NavLink>
          </button>

          <p>
            Already have an account?
            <NavLink to="/1st">
              <b className="hover:bg-green-700">Log in</b>
            </NavLink>
          </p>
        </div>
      </div>
    </body>
  );
}
export default Secound;
