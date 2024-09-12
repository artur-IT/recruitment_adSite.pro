import "./styles/index.css";
import ExpandText from "./components/ExpandText";
import Slider from "./components/Slider";

export default function App() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] bg-[#F7F7F7] lg:h-[2222px]">
        {/* Navigation  */}
        <nav className="relative z-40 mx-auto grid h-[79px] items-center py-4 lg:grid-cols-3 lg:px-24">
          {/* logo */}
          <div className="flex justify-start pl-5 lg:pl-0">
            <img src="./icons/logo.png" alt="logo piece" className="mr-2" />
            <img src="./icons/logo_text.png" alt="brand text logo" />
          </div>

          {/* middle menu */}
          <div className="absolute right-5 top-4 flex space-x-4 font-roboto-condensed text-base lg:static lg:right-0 lg:justify-center">
            <a href="#gallery">Galeria zdjęć</a>
            <a href="#">FAQ</a>
          </div>

          {/* right button */}
          <div className="relative lg:static lg:flex lg:justify-end">
            <button className="delay-900 invisible h-[47px] w-[135px] rounded-lg bg-[#0147FF] font-roboto-condensed text-[#F7F7F7] transition-all hover:border-[1px] hover:border-[#0147FF] hover:bg-white hover:text-[#0147FF] lg:visible lg:w-[158px]">
              <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
            </button>
          </div>
        </nav>

        {/* Hero One */}
        <section className="relative h-[600px] bg-[#F7F7F7] p-5 lg:mt-0 lg:h-[825px] lg:p-24">
          <div>
            {/* bg element */}
            <div className="invisible absolute right-[5%] top-[-15%] w-1/2 max-w-[668px] lg:visible xl:right-20">
              <img
                className="h-[670px]"
                src="./img/HERO_Element.png"
                alt="cars"
              />
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
                <div className="flex flex-col gap-2 font-roboto-condensed sm:flex-row sm:gap-6">
                  <button className="h-[47px] w-[135px] rounded-lg bg-[#0147FF] text-[#F7F7F7] md:w-[158px]">
                    <a href="#gallery">Zobacz zdjęcia</a>
                  </button>
                  <button className="delay-900 h-[47px] w-[135px] rounded-lg border-[1px] border-[#0147FF] bg-[#F7F7F7] text-[#0147FF] transition-all hover:border-2 hover:border-[#0147FF] hover:bg-[#0147FF] hover:text-[#F7F7F7] md:w-[158px]">
                    <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
                  </button>
                </div>
              </div>
            </div>

            {/* cars */}
            <div className="absolute bottom-24 right-0 h-auto w-full max-w-[1064px] pl-5 lg:top-[400px] xl:top-[328px]">
              <img src="./img/HERO_cars.webp" alt="cars" />
            </div>
          </div>
        </section>

        {/* Headers Block */}
        <section className="bg-[#F7F7F7] lg:h-[207px] lg:px-24 lg:pt-16">
          <div className="mx-4 grid lg:mx-auto lg:w-[1264px] lg:gap-6">
            <div className="lg:h-[80px] lg:w-[434px]">
              <span className="font-roboto-condensed text-[21.5px] leading-[32.25px] text-[#0147FF]">
                Prezentacja firmy
              </span>
              <h2
                id="gallery"
                className="font-bebas-neue text-[30px] font-bold text-[#1D1D1B] md:text-[40px] lg:h-12"
              >
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
        <section className="h-max-[450px] container mx-auto bg-[#F7F7F7] lg:h-[678px] lg:w-[1440px] lg:p-14">
          <Slider />
        </section>

        {/* SEO */}
        <section className="grid h-auto gap-4 bg-[#282828] py-[88px] font-roboto-condensed text-base text-white lg:h-[361px]">
          <div className="flex h-auto flex-col justify-center gap-12 px-4 lg:h-[185px] lg:flex-row">
            <div className="mb-5 grid gap-4 px-4 font-bebas-neue text-[25px] font-normal leading-[37.5px] lg:mb-0 lg:h-[76px] lg:justify-around lg:px-0 xl:w-[576px]">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
              <ExpandText />
            </div>
            <div className="mb-5 grid justify-around gap-4 px-4 font-bebas-neue text-[25px] font-normal leading-[37.5px] lg:mb-0 lg:h-[76px] lg:px-0 xl:w-[576px]">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
              <ExpandText />
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
