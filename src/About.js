import { NavLink } from "react-router-dom";
import image from "./Image/Nayeem.png"
function About() {
  return (
    <div className="bg-gray-200 min-h-screen p-10">
      <header className="flex items-center justify-between mb-10">
        <a className="text-3xl font-medium" href="#">
          Home
        </a>
        <nav className="flex items-center">
          <a
            className="px-3 py-2 rounded-lg bg-indigo-500 text-white mr-4 hover:bg-indigo-600"
            href="#"
          >
            About
          </a>
          <NavLink
            className="px-3 py-2 rounded-lg bg-indigo-500 text-white mr-4 hover:bg-indigo-600"
            to="/6th"
          >
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="flex items-center justify-center h-64 mt-[150px]">
        <div className="grid grid-cols-2 w-3/4">
          <div className=" w-2/3 text-center">
            <h2 className="text-3xl font-medium mb-4">About Us</h2>
            <p className="text-lg">
              I am <b>Nayem Sarkar</b> working as an web designer with Let's
              Make Company for 5 month. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur at lacinia ex. Nulla non dolor velit.
              Nullam non mauris euismod, congue risus ut, blandit velit.
            </p>
            <p className="text-lg">
              Sed euismod, lacus vel aliquam fringilla, magna lectus tristique
              libero, sit amet commodo sem diam sit amet est.
            </p>
          </div>
          <div><img src={image} alt="" className="w-[350px] h-[350px] rounded-2xl hover:w-[360px]" /></div>
        </div>
      </main>

      <footer className=" text-center text-sm mt-[100px]">
        &copy; 2022 Tailwind CSS Example
      </footer>
    </div>
  );
}
export default About;
