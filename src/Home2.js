import { NavLink } from "react-router-dom";
import Prjct from "./Image/premium_photo-1663100946222-7f14702bbda3.webp"
import Prjct1 from "./Image/original-87fb48ee09e7e017bf027fce8fc41f1c.webp"
function Home2(){
    return(

        <div class="bg-gray-200 min-h-screen p-10">
  <header className="flex items-center justify-between mb-10">
    <h1 classNames="text-3xl font-medium">Welcome!</h1>
    <nav className="flex items-center">
      <a className="px-3 py-2 border-l-2 border-t-2 border-red-400 rounded-lg bg-indigo-500 text-white mr-4 hover:bg-indigo-600" href="#">Home</a>
      <NavLink className="px-3 py-2 rounded-lg bg-indigo-500 text-white mr-4 border-t-2 border-l-2 border-red-400 hover:bg-indigo-600" to="/5th">About</NavLink>
      <NavLink className="px-3 py-2 rounded-lg bg-indigo-500 text-white border-t-2 border-l-2 border-red-400 hover:bg-indigo-600" to="/6th">Contact</NavLink>
    </nav>
  </header>

  <main className="grid grid-cols-2 items-center justify-center h-64 pl-9">
<div>
<img src={Prjct} alt=""  className="w-[400px] h-[260px] pl-9 "/>
</div> 

<div>
<img src={Prjct1} alt=""  className="w-[400px] h-[350px] "/>
</div>
  </main>

  <footer className="mt-[200px] text-center text-sm">
    &copy; 2022 Tailwind CSS Example
  </footer>
</div>

    )
    
}
export default Home2;