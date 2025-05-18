import Image from "next/image";

type TNavber = {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const Navbar = ({ openSidebar, setOpenSidebar }: TNavber) => {
  const handleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <div className="bg-secondary-dark p-4 md:p-5">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/navbarSvgs/Logo.svg"
            alt="logo"
            className="h-5 w-28 md:h-9 md:w-48"
            width={1000}
            height={1000}
          />
        </div>
        <div className="hidden sm:block bg-fourth-dark px-3 py-3 rounded-lg w-md md:w-lg">
          <div className="flex gap-x-3">
            <Image
              src="/navbarSvgs/Magnifer.svg"
              alt="theme"
              className="h-6 w-6"
              width={1000}
              height={1000}
            />
            <input
              type="text"
              name="text"
              placeholder="Search for Questions Here..."
              className="font-light placeholder:text-fifth-light focus:outline-none text-fifth-light"
            />
          </div>
        </div>
        <div className="flex gap-x-1 items-center">
          <div>
            <Image
              src="/navbarSvgs/Icons.svg"
              alt="icon"
              className="h-6 w-6 md:h-8 md:w-8"
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <Image
              src="/navbarSvgs/Avatar-Profile-Pic.svg"
              alt="profile-pic"
              className="h-6 w-6 md:h-11 md:w-11"
              width={1000}
              height={1000}
            />
          </div>
          <div className="block md:hidden" onClick={handleSidebar}>
            {openSidebar ? (
              <Image
                src="/navbarSvgs/radix-icons_cross-2.svg"
                alt="cross"
                className="h-6 w-6"
                width={1000}
                height={1000}
              />
            ) : (
              <Image
                src="/navbarSvgs/ci_menu-duo-md.svg"
                alt="menu"
                className="h-6 w-6"
                width={1000}
                height={1000}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
