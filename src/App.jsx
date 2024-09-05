import "./index.css";

export default function App() {
  return (
    <>
      <section className="max-w-[1440px] h-[2222px] mx-auto bg-[#F7F7F7]">
        {/* Navigation  */}
        <nav className="w-11/12 h-[79px] mx-auto py-4 flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <img src="src/assets/icons/logo_piece.png" alt="logo piece" className="mr-2" />
            <img src="src/assets/icons/logo_text.png" alt="brand logo" />
          </div>

          {/* middle menu */}
          <div className="font-roboto-condensed text-base flex space-x-4">
            <span>Galeria zdjęć</span>
            <span>FAQ</span>
          </div>

          {/* right button */}
          <button className="w-[158px] h-[47px] rounded-lg font-roboto-condensed bg-[#0147FF] text-[#F7F7F7]">Zadzwoń do nas</button>
        </nav>

        {/* Hero One */}
        <section className="relative h-[825px] bg-[#F7F7F7] p-16">
          <div className="  ">
            {/* bg element */}
            <div className="absolute w-[668px] h-[659px] top-[-90px] right-20 ">
              <img src="src/assets/img/HERO_Element.png" alt="cars" />
            </div>

            {/* info */}
            <div className="absolute w-11/12 h-[343px] ">
              <div className="">
                <div className="font-bebas-neue leading-tight w-[650px] text-[76px]">{"Sprzedajemy samochody z europy".toUpperCase()}</div>
                <p className="font-roboto-condensed text-base w-[280px] text-[#282828]">
                  Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
                </p>
              </div>
              <div className="gap-6">
                <button className="w-[158px] h-[47px] rounded-lg font-roboto-condensed bg-[#0147FF] text-[#F7F7F7]">Zobacz zdjęcia</button>
                <button className="w-[158px] h-[47px] rounded-lg font-roboto-condensed bg-[#F7F7F7] text-[#0147FF] border-[#0147FF]-1">
                  Zadzwoń do nas
                </button>
              </div>
            </div>

            {/* cars */}
            <div className="absolute w-[1064px] h-[405px] left-[376px] top-[328px]">
              <img src="src/assets/img/HERO_cars.png" alt="cars" />
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

            <div className="grid gap-12 grid-cols-6 font-roboto-condensed">
              <span className="text-[15px] text-[#0147FF]">Samochody osobowe</span>
              <span>Samochody dostawcze</span>
            </div>
          </div>
        </section>

        {/* Gallery Block  */}
        <section className="w-[1440px] h-[678px] p-12 bg-[#F7F7F7]">
          <div className="grid grid-cols-2 gap-x-16 justify-center">
            {/* car 1 */}
            <div className="relative">
              <img className="w-full h-full object-cover" src="src/assets/img/car_1.jpg" alt="car 1" />
              {/* play */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[82px] h-[82px] bg-slate-400"></div>
              </div> */}
              {/* caption */}
              {/* <div className="absolute bottom-0 left-0">
                <div className="w-[366px] h-[112px] bg-red-400"></div>
              </div> */}
            </div>

            {/* car 2 */}
            <div className="relative">
              <img className="w-full h-full object-cover" src="src/assets/img/car_2.jpg" alt="car 2" />
              {/* play */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[82px] h-[82px] bg-slate-400"></div>
              </div> */}
              {/* caption */}
              {/* <div className="absolute bottom-0 left-0">
                <div className="w-[366px] h-[112px] bg-red-400"></div>
              </div> */}
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className="h-[361px] bg-[#282828] py-[88px] font-roboto-condensed text-base text-white justify-around grid gap-4">
          <div className="h-[185px] flex justify-around">
            <div className="w-[576px] h-[76px] font-bebas-neue text-[25px] leading-[37.5px] font-normal grid gap-4 justify-around">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
              <div className="h-[93px] font-roboto-condensed  text-sm font-normal leading-[21px] grid gap-6">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
                <button className="w-[59px] h-[27px] font-roboto-condensed text-sm border-b-white border-b-[1px] flex">
                  Rozwiń
                  <img className="pl-2" src="src/assets/arrow_down.png" alt="arrow" />
                </button>
              </div>
            </div>
            <div className="w-[576px] h-[76px] font-bebas-neue text-[25px] leading-[37.5px] font-normal grid gap-4 justify-around">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
              <div className="h-[93px] font-roboto-condensed  text-sm font-normal leading-[21px] grid gap-6">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
                <button className="w-[59px] h-[27px] text-sm font-roboto-condensed border-b-white border-b-[1px] flex">
                  Rozwiń <img className="pl-2" src="src/assets/arrow_down.png" alt="arrow" />
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
