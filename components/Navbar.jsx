export default function Navbar() {
  return (
    <>
      <div
        id="fishated"
        className="ml-[5rem] mt-[5.5rem] font-[family-name:var(--font-luckiest-guy)] text-[5rem] font-medium max-[786px]:mx-auto max-[786px]:mt-[2rem]"
      >
        <p>FISHATED</p>
      </div>

      <ul className="z-[99] mt-0 flex w-full list-none flex-row justify-evenly pt-[70px] max-[786px]:flex-col max-[786px]:items-center max-[786px]:justify-start max-[786px]:gap-[10px] max-[786px]:pl-0 max-[786px]:pt-[30px]">
        <li key="Comics">
          <a className="nav-link" href="#line-3">
            Comics
          </a>
        </li>
        <li key="Home">
          <a className="nav-link max-[786px]:hidden" href="#line1">
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
