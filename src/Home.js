
import { NavLink } from "react-router-dom";



function Fourth(){
    return(
<div class="bg-gray-200 min-h-screen p-10">
  <header className="flex items-center justify-between mb-10">
    <h1 classNames="text-3xl font-medium">Welcome!</h1>
    <nav className="flex items-center">
      <a className="px-3 py-2 border-l-2 border-t-2 border-red-400 rounded-lg bg-indigo-500 text-white mr-4 hover:bg-indigo-600" href="#">Home</a>
      <NavLink className="px-3 py-2 rounded-lg bg-indigo-500 text-white mr-4 hover:bg-indigo-600" to="/5th">About</NavLink>
      <NavLink className="px-3 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600" to="/6th">Contact</NavLink>
    </nav>
  </header>

  <main className="flex items-center justify-center h-64">

    <div><p className="mt-[100px] ">
    আমি কৃতজ্ঞ  মা বাবা আপনাদের প্রতি।আমা জীবনের প্রথম এ্যাপ। আপনারা এতোটা সাপোর্ট না দিলে হয়তো আজ এখানে আসতে পারতাম না।অনেক ভালোবাসি মা বাবা। <br /><br />

আজমিন বন্ধু তোর কাছে আজীবন ঋণী থাকবো, শুরু থেকে যে সাপোর্টটা দিয়ে আসছিস তার জন্য। পাশাপাশি অনেক অনেক ধন্যবাদ রোকেয়া আপু,সুমন ভাই আপনাদের সাপোর্টের জন্য।
</p></div>
  </main>

  <footer className="mt-10 text-center text-sm">
    &copy; 2022 Tailwind CSS Example
  </footer>
</div>

    )
}
export default Fourth;