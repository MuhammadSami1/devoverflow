import Image from "next/image";

const Search = () => {
  return (
    <div className="bg-secondary-dark p-5 block sm:hidden">
      <div className="bg-fourth-dark px-3 py-3 rounded-lg">
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
            className="font-light placeholder:text-fifth-light w-lvh focus:outline-none text-fifth-light"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
