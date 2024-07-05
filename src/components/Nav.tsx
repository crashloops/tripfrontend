import Search from "../constants/Search";
const Nav = () => {
  return (
    <div className=" text-white p-4 flex items-center">
      <div className="flex-1 text-center">
        <li className="{menu} list-none inline-block px-5 font-semibold">
          <a href="#">Home</a>
        </li>
        <li className="list-none inline-block px-5 font-semibold">
          <a href="#">Trip</a>
        </li>
        <li className="list-none inline-block px-5 font-semibold">
          <a href="#">Discover</a>
        </li>
        <li className="list-none inline-block px-5 font-semibold">
          <a href="#">More</a>
        </li>

      </div>
        <li className="list-none inline-block font-semibold">
          <Search></Search>
        </li>
      <li className="list-none bg-yellow-500 hover:bg-transparent hover:border px-5 p-1 rounded-3xl  text font-semibold">
        <a href="#">Login</a>
      </li>
    </div>
  );
};

export default Nav;
