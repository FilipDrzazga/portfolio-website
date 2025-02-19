const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-16 z-1 pt-8 px-8 ">
      <ul className="flex justify-between items-center w-full h-full">
        <li className="w-auto h-full">
          <a className="w-full h-full text-tiny text-black">BIO</a>
        </li>
        <li className="w-auto h-full">
          <a className="w-full h-full text-tiny text-black">PLAYGROUND</a>
        </li>
        <li className="w-auto h-full">
          <a className="w-full h-full text-tiny text-black">WORK</a>
        </li>
        <li className="flex justify-center items-center w-auto h-6 bg-black px-3">
          <a className="text-tiny text-white">LET&apos;S TALK</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
