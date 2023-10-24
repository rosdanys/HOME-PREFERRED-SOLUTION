export function CarouselItem({ item }) {
  return (
    <>
      <section  className="w-full isolate overflow-hidden py-24 sm:py-32 md:h-[calc(100vh-104px)] lg:h-[calc(100vh-104px)]">      
        <div className="inset-0 -z-10 bg-image">
          <img
            className="mx-auto object-cover"
            src={item.img}
            alt={item.title}
          />
        <div className="mask opacity-30 bg-primary-950 "></div>
        </div>
        
        {/* <div className="mx-auto max-w-2xl lg:max-w-4xl ">
          <figure className="lg:mt-10 md:mt-5 mt-2">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p>{item.subtitle}</p>
            </blockquote>
            <figcaption className="lg:mt-10 md:mt-5 mt-2">
              <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                <div className="text-white italic">{item.sign}</div>
              </div>
            </figcaption>
          </figure>
        </div>  */}      
      </section>
    </>
  );
}
