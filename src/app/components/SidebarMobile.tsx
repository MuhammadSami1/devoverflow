import Image from "next/image";

type TSidebarMobile = {
  openSidebar: boolean;
};

const SidebarMobile = ({ openSidebar }: TSidebarMobile) => {
  return (
    <>
      {openSidebar && (
        <div
          className={
            "text-white bg-secondary-dark w-3xs md:hidden py-10 flex flex-col min-h-screen fixed bottom-0"
          }
        >
          <div className="flex flex-col gap-y-9">
            <div className="bg-accent-gradient w-48 rounded-lg py-3 ml-10 px-3">
              <div className="flex gap-3 items-center">
                <Image
                  src="/sidebarSvgs/Home.svg"
                  alt="home"
                  className="h-5 w-5"
                  width={1000}
                  height={1000}
                />
                <div className="text-primary-light font-semibold text-base">
                  Home
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center ml-10">
              <Image
                src="/sidebarSvgs/fluent_people-community-48-regular.svg"
                alt="Community"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="text-primary-light font-medium text-base">
                Community
              </div>
            </div>
            <div className="flex gap-3 items-center ml-10">
              <Image
                src="/sidebarSvgs/tabler_star.svg"
                alt="Collections"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="text-primary-light font-medium text-base">
                Collections
              </div>
            </div>
            <div className="flex gap-3 items-center ml-10">
              <Image
                src="/sidebarSvgs/octicon_briefcase-24.svg"
                alt="jobs"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="text-primary-light font-medium text-base">
                Find Jobs
              </div>
            </div>
            <div className="flex gap-3 items-center ml-10">
              <Image
                src="/sidebarSvgs/lucide_tag.svg"
                alt="Tags"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="text-primary-light font-medium text-base">
                Tags
              </div>
            </div>
            <div className="flex gap-3 items-center ml-10">
              <Image
                src="/sidebarSvgs/Users Group Two Rounded.svg"
                alt="Communities"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="text-primary-light font-medium text-base">
                Communities
              </div>
            </div>
            <div className="flex gap-3 items-center ml-10">
              <Image
                src="/sidebarSvgs/question.svg"
                alt="Question"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="text-primary-light font-medium text-base">
                Ask a Question
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 mt-auto">
            <div className="flex justify-center">
              <button className="bg-fourth-dark py-2 w-52 rounded-lg font-semibold text-base text-accent">
                login
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-tertiary-dark w-52 py-2 rounded-lg font-semibold text-base">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarMobile;
