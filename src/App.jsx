import "./index.css";
import Slider from "./slider";

export default function App() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] bg-[#F7F7F7] lg:h-[2222px]">
        {/* Navigation  */}
        <nav className="relative z-40 mx-auto grid h-[79px] items-center px-4 py-4 lg:grid-cols-3 lg:px-24">
          {/* logo */}
          <div className="flex justify-start">
            <img
              src="./icons/logo_piece.png"
              alt="logo piece"
              className="mr-2"
            />
            <img src="./icons/logo_text.png" alt="brand logo" />
          </div>

          {/* middle menu */}
          <div className="absolute right-4 flex space-x-4 font-roboto-condensed text-base lg:static lg:justify-center">
            <a href="#">Galeria zdjęć</a>
            <a href="#">FAQ</a>
          </div>

          {/* right button */}
          <div className="relative mt-4 lg:static lg:mt-0 lg:flex lg:justify-end">
            <button className="h-[47px] w-[158px] rounded-lg bg-[#0147FF] font-roboto-condensed text-[#F7F7F7]">
              Zadzwoń do nas
            </button>
          </div>
        </nav>

        {/* Hero One */}
        <section className="relative mt-16 h-[600px] bg-[#F7F7F7] p-5 lg:mt-0 lg:h-[825px] lg:p-24">
          <div>
            {/* bg element */}
            <div className="invisible absolute right-[5%] top-[-10%] w-1/2 max-w-[668px] lg:visible xl:right-20">
              <img className="" src="./img/HERO_Element.png" alt="cars" />
            </div>

            {/* info */}
            <div className="absolute z-40 h-[343px] w-11/12">
              <div className="grid lg:gap-6">
                <div className="font-bebas-neue text-5xl leading-tight lg:w-[650px] lg:text-[76px]">
                  {"Sprzedajemy samochody z europy".toUpperCase()}
                </div>
                <p className="my-10 w-[280px] font-roboto-condensed text-base text-[#282828]">
                  Kup komfortowy pojazd, aby każda podróż była wyjątkowym
                  przeżyciem.
                </p>
                <div className="flex flex-col gap-6 font-roboto-condensed sm:flex-row sm:gap-6">
                  <button className="h-[47px] w-[158px] rounded-lg bg-[#0147FF] text-[#F7F7F7]">
                    Zobacz zdjęcia
                  </button>
                  <button className="h-[47px] w-[158px] rounded-lg border-[1px] border-[#0147FF] bg-[#F7F7F7] text-[#0147FF]">
                    Zadzwoń do nas
                  </button>
                </div>
              </div>
            </div>

            {/* cars */}
            <div className="absolute bottom-24 left-1/4 h-auto w-3/4 max-w-[1064px] lg:top-1/3 xl:left-[376px] xl:top-[328px]">
              <img src="./img/HERO_cars.png" alt="cars" />
            </div>
          </div>
        </section>

        {/* Headers Block */}
        <section className="h-auto bg-[#F7F7F7] lg:h-[207px] lg:pt-16">
          <div className="mx-4 grid lg:mx-auto lg:w-[1264px] lg:gap-6">
            <div className="lg:h-[80px] lg:w-[434px]">
              <span className="font-roboto-condensed text-[21.5px] leading-[32.25px] text-[#0147FF]">
                Prezentacja firmy
              </span>
              <h2 className="font-bebas-neue text-[40px] font-bold text-[#1D1D1B] lg:h-12">
                {"Zobacz naszą Galerię zdjęć".toLocaleUpperCase()}
              </h2>
            </div>

            <div className="flex flex-row pt-6 font-roboto-condensed lg:pt-4">
              <button className="mr-12 w-auto border-b-[1px] border-[#0147FF] text-[15px] text-[#0147FF]">
                Samochody osobowe
              </button>
              <button className="w-auto text-[15px] text-black">
                Samochody dostawcze
              </button>
            </div>
          </div>
        </section>

        {/* GALLERY SLIDER  */}
        <section className="bg-[#F7F7F7] lg:h-[678px] lg:w-[1440px] lg:p-14">
          <Slider />
        </section>

        {/* SEO */}
        <section className="grid h-[600px] gap-4 bg-[#282828] py-[88px] font-roboto-condensed text-base text-white lg:h-[361px]">
          <div className="flex h-auto flex-col justify-center gap-12 lg:h-[185px] lg:flex-row">
            <div className="mb-5 grid gap-4 px-4 font-bebas-neue text-[25px] font-normal leading-[37.5px] lg:mb-0 lg:h-[76px] lg:w-[576px] lg:justify-around lg:px-0">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
              <div className="grid h-auto gap-6 font-roboto-condensed text-sm font-normal leading-[21px] lg:h-[93px]">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                [...]
                <button className="flex h-[27px] w-[59px] border-b-[1px] border-b-white font-roboto-condensed text-sm">
                  Rozwiń
                  <img
                    className="w-full pl-2"
                    src="./icons/arrow_down.png"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
            <div className="mb-5 grid justify-around gap-4 px-4 font-bebas-neue text-[25px] font-normal leading-[37.5px] lg:mb-0 lg:h-[76px] lg:w-[576px] lg:px-0">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
              <div className="grid h-[93px] gap-6 font-roboto-condensed text-sm font-normal leading-[21px]">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                [...]
                <button className="flex h-[27px] w-[59px] border-b-[1px] border-b-white font-roboto-condensed text-sm">
                  Rozwiń{" "}
                  <img
                    className="w-full pl-2"
                    src="./icons/arrow_down.png"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex h-[72px] items-center justify-around border-t-[1px] border-t-white bg-[#282828] py-6 text-center font-roboto-condensed text-base lg:justify-between lg:px-[120px]">
          <div className="grid h-6 w-auto gap-4 font-bold text-white">
            CarsSpot
          </div>
          <div className="grid h-6 w-auto gap-6 text-white">
            Polityka prywatności
          </div>
        </footer>
      </section>
    </>
  );
}
