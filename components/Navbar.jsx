export default function Navbar() {
  return (
    <>
      <div
        id="fishated"
        className=" pb-[1rem] ml-[5rem] mt-[3rem] font-[family-name:var(--font-luckiest-guy)] text-[5.5rem] font-medium max-[786px]:mx-auto max-[786px]:mt-[2rem]"
      >
        <p>FISHATED</p>
      </div>

      <ul className="z-[99] flex w-full list-none flex-row justify-evenly pt-[70px] max-[786px]:flex-col max-[786px]:items-center max-[786px]:justify-start max-[786px]:gap-[10px]  max-[786px]:py-[20px]">
        <li key="Comics">
          <a className="nav-link" href="#container-2">
            Comics
          </a>
        </li>
        <li key="Home">
          <a className="nav-link max-md:hidden" href="#line1">
            Home
          </a>
        </li>
        <li key="Aboutus">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
      </ul>
    </>
  );
}
