const Card = () => {
  return (
    <div>
        <main>
          <h1 className="font-semibold ml-8 text-3xl pt-4 text-white">
            Cities to Travel <br />
            <span className="font-light text-base">Here's where your fellow travellers are headed</span>
          </h1>
          <div className=" items-center justify-center min-h-screen container mx-auto grid sm:grid-cols-4">
            <a
              href="#"
              className="flex flex-col rounded-lg overflow-hidden shadow-lg m-5"
            >
              <img src="../images/Hyderabad.jpeg" alt="" />
              <div className=" text-white font-semibold text-lg mt-3">
                Hyderabad
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col rounded-lg  overflow-hidden shadow-lg m-5"
            >
              <img src="../images/Hyderabad.jpeg" alt="" />
              <div className=" text-white font-semibold text-lg mt-3">
                Visakhapatnum
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col rounded-lg  overflow-hidden shadow-lg m-5"
            >
              <img src="../images/Hyderabad.jpeg" alt="" />
              <div className=" text-white font-semibold text-lg mt-3">
                Delhi
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col rounded-lg  overflow-hidden shadow-lg m-5"
            >
              <img src="../images/Hyderabad.jpeg" alt="" />
              <div className=" text-white font-semibold text-lg mt-3">
                Assam
              </div>
            </a>
          </div>
        </main>
    </div>
  )
}

export default Card