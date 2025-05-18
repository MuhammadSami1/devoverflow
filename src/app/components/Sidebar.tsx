import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-secondary-dark hidden py-14 md:flex flex-col min-h-screen self-start min-w-[245px]">
      <div className="flex flex-col gap-y-14">
        <div className="bg-accent-gradient w-48 rounded-lg py-3 ml-8 px-3">
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

        <div className="flex gap-3 items-center ml-8">
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
        <div className="flex gap-3 items-center ml-8">
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
        <div className="flex gap-3 items-center ml-8">
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
        <div className="flex gap-3 items-center ml-8">
          <Image
            src="/sidebarSvgs/lucide_tag.svg"
            alt="Tags"
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
          <div className="text-primary-light font-medium text-base">Tags</div>
        </div>
        <div className="flex gap-3 items-center ml-8">
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
        <div className="flex gap-3 items-center ml-8">
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
      <div className="space-y-3 mt-96">
        <div className="flex ml-8 items-center gap-x-4">
          <Image
            src="/sidebarSvgs/Logout 3.svg"
            alt="logout"
            className="h-6 w-6"
            width={1000}
            height={1000}
          />
          <button className="font-medium text-lg text-primary-light">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
