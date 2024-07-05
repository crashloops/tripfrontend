import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <main className="container min-h-screen flex-col bg-[url('images/3.jpg')]">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <div className=" grid min-h-[100px] m-10 rounded mix-blend-hard-light flex-col bg-slate-500">
          {" "}
          <h1 className="font-semibold ml-5 text-6xl -40 text-white p-6">
            Build a Trip <br />
            <span>in minutes</span>{" "}
          </h1>
          <p className="text-white text-3xl ml-10 ">
            Get a personalised itinerary just for <br /> you, guided by
            traveller tips and <br /> reviews.
          </p>
          <div className="p-4">
            <a
              href="#"
              className="bg-yellow-500 hover:bg-transparent hover:border text-white p-2 ml-5 rounded-3xl px-5 py-1.5 font-medium"
            >
              Build with AI
            </a>
          </div>
        </div>
        <Card></Card>
      </main>
    </div>
  );
}

export default App;
