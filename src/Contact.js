import { NavLink } from "react-router-dom";

function Contact(){
    return(
        <div className="bg-gray-200 min-h-screen p-10">
  <header className="flex items-center justify-between mb-10">
    <a className="text-3xl font-medium" href="#">Home</a>
    <nav className="flex items-center">
      <NavLink className="px-3 py-2 rounded-lg bg-indigo-500 text-white mr-4 hover:bg-indigo-600" to="/5th">About</NavLink>
      <a className="px-3 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600" href="#">Contact</a>
    </nav>
  </header>

  <main className="flex items-center justify-center h-64">
    <div className="w-2/3">
      <h2 className="text-3xl font-medium mb-4 text-center">Contact Us</h2>
      <form className="bg-white p-10 rounded-lg">
        <div className="mb-4">
          <label className="block font-medium mb-2" for="name">Name</label>
          <input className="border p-2 w-full" type="text" id="name" name="name"/>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" for="email">Email</label>
          <input className="border p-2 w-full" type="email" id="email" name="email"/>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" for="message">Message</label>
          <textarea className="border p-2 w-full" id="message" name="message"></textarea>
        </div>
        <NavLink to="/4th"><button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600" type="submit">Submit</button></NavLink>
      </form>
    </div>
  </main>

  <footer className="mt-10 text-center text-sm">
    &copy; 2022 Tailwind CSS Example
  </footer>
</div>

    )
}
export default Contact;