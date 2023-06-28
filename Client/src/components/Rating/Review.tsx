const Review = () => {
    return (
      <section className="h-screen flex justify-center items-center gap-x-16 text-white">
        <div className="w-[420px] h-[300px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 flex items-center justify-center p-2">
              <img src="https://source.unsplash.com/80x80?face" className="rounded-full" />
  
              <div className="ml-4">
                <p className="text-gray-800 flex items-center">
                  <i className="fa-solid fa-star text-argentina mr-2 "></i>total rating - fecha de la review
                </p>
                <p className="text-gray-800 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam delectus est
                  aut eligendi accusamus, nesciunt quis assumenda perferendis, inventore voluptate
                  iste odio ullam mollitia ratione! Sequi ipsum eligendi pariatur hic. - Nombre del Usuario
                </p>
              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center text-gray-800 px-2 pb-2">
                <p className="my-2">Rating por servicio</p>
                <p>
                  Aca tienen que aparecer el detalle de estrellas
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque assumenda
                  saepe animi maxime libero non quasi, odit natus veritatis enim culpa nam inventore
                  doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Review;