import { NavLink } from "react-router-dom";




function Three() {
  return (
    <body className="flex justify-center items-center min-h-screen bg-white">
      <div class="flex  h-[550px] w-[600px] border-b-2 border-t-2 border-r-2 border-l-2 border-green-700 shadow-2xl rounded-3xl">
        <div class="flex flex-col pl-[130px] w-full pr-[130px] mb-[10px]">
          <h2 className="text-center mt-[30px] mb-[25px] font-bold text-2xl text-green-600">
            Let's Manage
          </h2>
          <p class="p2">Create New Password trial</p>
          <span class="txtbx">
            <b> Old Password:</b>
          </span>
          <input
            type="password"
            placeholder="Enter Your old Password"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px]  outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-l-2 border-t-2 border-green-400 border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)] shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <span class="txtbx">
            <b>Create a New Password:</b>
          </span>
          <input
            type="password"
            placeholder="Enter your New Password"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px]  outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-l-2 border-t-2 border-green-400 border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)] shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          
          <span class="txtbx">
            <b>Confirm Your New Password:</b>
          </span>
          <input
            type="password"
            placeholder="Re-Enter Your New password"
            required
            className="
            w-full h-[35px] mt-[10px] mb-[20px]  outline-none bg-[rgba(149,161,167,0.2)] rounded-[10px] pl-12 border-l-2 border-t-2 border-green-400 border-[rgba((6, 236, 110, 0.884)] border-r[rgba(255, 255, 255, 0.3)] shadow-lg text-base bg-slate-200 placeholder:text-gray-400 hover:bg-sky-700 h-[40px]"
          />
          <NavLink to="/1st">
          <button
            class="btn1"
            className="w-full
             h-[30px] mb-[10px] outline-none border-l-2 border-t-2 border-red-400 rounded-[10px] bg-[#111727] text-[#d1d1d1] shadow-2xl cursor-pointer hover:bg-sky-700"
          >
            Confirm
          </button></NavLink>

          <p>
            Previous Page?
            <NavLink to="/1st">
              <b className="text-gray-900 hover:text-green-700">Click Here</b>
            </NavLink>
          </p>
        </div>
      </div>
    </body>
  );
}
export default Three;
