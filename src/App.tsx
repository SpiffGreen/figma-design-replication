import Nav from "./components/Nav";
import ManIllustration from "./assets/images/man-illustration.svg";
import { CircledArrowDownIcon } from "./components/icons";
function App() {
  return (
    <div
      className="dark:bg-[#1D1D1D] bg-white min-h-screen  dark:text-[#EEEEEE] text-[#2E2E2E]"
      id="dark"
    >
      <Nav />

      {/* Hero section */}
      <section className="relative">
        <div className="md:bg-[url(/blob.svg)] bg-left-bottom bg-no-repeat h-[700px] dark:bg-[#1d1d1d] opacity-95 bg-white relative top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-12 flex gap-4 justify-between items-center relative">
            <div className="text">
              <h1 className="text-2xl md:text-5xl font-medium">Mutual Investment</h1>
              <p className="my-5 font-light dark:text-[#A9A9A9] text-[#767676] leading-7 text-lg">
                At Finance we care about your future. We help you invest the way
                you want. So you can relax, have fun and let your fund grow.
              </p>
              <a href="#">
                <p className="text-nowrap text-white text-center px-10 py-2 rounded-3xl text-base font-light bg-[#27AE60] w-fit">
                  Learn More
                  <hr className="mx-auto border-[#27AE60] w-[70px] relative top-4" />
                </p>
              </a>
            </div>
            <img
              src={ManIllustration}
              alt="man illustration"
              className="md:max-w-xl max-w-full"
            />
          </div>

          <CircledArrowDownIcon className="cursor-pointer absolute bottom-3 left-0 right-0 mx-auto" />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[url(/dark-blob.svg)] bg-no-repeat bg-left opacity-80"></div>
      </section>
    </div>
  );
}

export default App;
