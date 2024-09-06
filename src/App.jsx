import "./index.css";
import Slider from "./slider";

export default function App() {
  return (
    <>
      <section className="max-w-[1440px] h-[2222px] mx-auto bg-[#F7F7F7]">
        {/* Navigation  */}
        <nav className="relative z-40 w-11/12 h-[79px] mx-auto py-4 flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <img src="./icons/logo_piece.png" alt="logo piece" className="mr-2" />
            <img src="./icons/logo_text.png" alt="brand logo" />
          </div>

          {/* middle menu */}
          <div className="font-roboto-condensed text-base flex space-x-4">
            <a href="#">Galeria zdjęć</a>
            <a href="#">FAQ</a>
          </div>

          {/* right button */}
          <button className="w-[158px] h-[47px] rounded-lg font-roboto-condensed bg-[#0147FF] text-[#F7F7F7]">Zadzwoń do nas</button>
        </nav>

        {/* Hero One */}
        <section className="relative h-[825px] bg-[#F7F7F7] p-16">
          <div>
            {/* bg element */}
            <div className="absolute w-1/2 max-w-[668px] h-auto top-[-10%] right-[5%] xl:right-20">
              <img src="./img/HERO_Element.png" alt="cars" />
            </div>

            {/* info */}
            <div className="absolute z-40 w-11/12 h-[343px]">
              <div className="grid gap-6">
                <div className="font-bebas-neue leading-tight w-[650px] text-[76px]">{"Sprzedajemy samochody z europy".toUpperCase()}</div>
                <p className="my-10 font-roboto-condensed text-base w-[280px] text-[#282828]">
                  Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-6 font-roboto-condensed">
                  <button className="w-full sm:w-[158px] h-[47px] rounded-lg bg-[#0147FF] text-[#F7F7F7]">Zobacz zdjęcia</button>
                  <button className="w-full sm:w-[158px] h-[47px] rounded-lg bg-[#F7F7F7] text-[#0147FF] border-[#0147FF] border-[1px]">
                    Zadzwoń do nas
                  </button>
                </div>
              </div>
            </div>

            {/* cars */}
            {/* <div className="absolute w-[1064px] h-[auto] left-[376px] top-[328px]"> */}
            <div className="absolute w-3/4 max-w-[1064px] h-auto left-1/4 top-1/3 xl:left-[376px] xl:top-[328px]">
              <img src="./img/HERO_cars.png" alt="cars" />
            </div>
          </div>
        </section>

        {/* Headers Block */}
        <section className="h-[207px] bg-[#F7F7F7] pt-[80px]">
          <div className="container mx-auto w-[1264px] grid gap-6">
            <div className="w-[434px] h-[80px]">
              <span className="font-roboto-condensed text-[21.5px] text-[#0147FF] leading-[32.25px]">Prezentacja firmy</span>
              <h2 className="h-12 text-[#1D1D1B] font-bebas-neue text-[40px] font-bold gap-8">
                {"Zobacz naszą Galerię zdjęć".toLocaleUpperCase()}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-6 font-roboto-condensed">
              <button className="w-auto text-[15px] mr-12 text-[#0147FF] border-b-[1px] border-[#0147FF]">Samochody osobowe</button>
              <button className="w-auto text-[15px] text-black">Samochody dostawcze</button>
            </div>
          </div>
        </section>

        {/* GALLERY SLIDER  */}
        <section className="w-[1440px] h-[678px] p-12 bg-[#F7F7F7]">
          <Slider />
        </section>

        {/* SEO */}
        <section className="h-[600px] lg:h-[361px] bg-[#282828] py-[88px] font-roboto-condensed text-base text-white justify-around grid gap-4">
          <div className="h-auto lg:h-[185px] flex flex-col lg:flex-row justify-around">
            <div className=" lg:w-[576px] lg:h-[76px] px-4 lg:px-0 mb-5 lg:mb-0 font-bebas-neue text-[25px] leading-[37.5px] font-normal grid gap-4 lg:justify-around ">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
              <div className="h-auto lg:h-[93px] font-roboto-condensed  text-sm font-normal leading-[21px] grid gap-6">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
                <button className="w-[59px] h-[27px] font-roboto-condensed text-sm border-b-white border-b-[1px] flex">
                  Rozwiń
                  <img className="w-full pl-2" src="./icons/arrow_down.png" alt="arrow" />
                </button>
              </div>
            </div>
            <div className="lg:w-[576px] lg:h-[76px] px-4 lg:px-0 mb-5 lg:mb-0 font-bebas-neue text-[25px] leading-[37.5px] font-normal grid gap-4 justify-around">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
              <div className="h-[93px] font-roboto-condensed  text-sm font-normal leading-[21px] grid gap-6">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
                <button className="w-[59px] h-[27px] text-sm font-roboto-condensed border-b-white border-b-[1px] flex">
                  Rozwiń <img className="w-full pl-2" src="./icons/arrow_down.png" alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="font-roboto-condensed text-base text-center bg-[#282828] h-[72px] px-[120px] py-6 border-t-white border-t-[1px] flex justify-between items-center">
          <div className="w-[63px] h-6 font-bold grid gap-4 text-white">CarsSpot</div>
          <div className="w-[150px] h-6 grid gap-6 text-white">Polityka prywatności</div>
        </footer>
      </section>
    </>
  );
}
