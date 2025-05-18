import Image from "next/image";

const HotNews = () => {
  return (
    <div className="bg-secondary-dark hidden py-0 xl:py-12 lg:flex flex-col min-h-screen self-start min-w-[245px] max-w-[300px]">
      <div className="text-primary-light font-bold text-[20px] py-4 ml-7">
        Hot Network
      </div>
      <div className="flex flex-col gap-y-9">
        <div className="flex gap-3 mx-7">
          <Image
            src="/hotNews/question.svg"
            alt="question"
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
          <div className="text-fourth-light font-medium text-[10px] lg:text-base">
            Would it be appropriate to point out an error in another paper
            during a referee report?
          </div>
        </div>
        <div className="flex gap-3 mx-7">
          <Image
            src="/hotNews/blueQuestion.svg"
            alt="question"
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
          <div className="text-fourth-light font-medium text-[10px] lg:text-base">
            How can an airconditioning machine exist?
          </div>
        </div>
        <div className="flex gap-3 mx-7">
          <Image
            src="/hotNews/question.svg"
            alt="question"
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
          <div className="text-fourth-light font-medium text-[10px] lg:text-base">
            Interrogated every time crossing UK Border as citizen
          </div>
        </div>
        <div className="flex gap-3 mx-7">
          <Image
            src="/hotNews/blueQuestion.svg"
            alt="question"
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
          <div className="text-fourth-light font-medium text-[10px] lg:text-base">
            Low digit addition generator
          </div>
        </div>
        <div className="flex gap-3 mx-7">
          <Image
            src="/hotNews/question.svg"
            alt="question"
            className="h-5 w-5"
            width={1000}
            height={1000}
          />
          <div className="text-fourth-light font-medium text-[10px] lg:text-base">
            What is an example of 3 numbers that do not make up a vector?
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="ml-7 lg:py-0 xl:py-8">
        <h3 className="font-bold text-[20px] text-primary-light">
          Popular Tags
        </h3>

        <div className="space-y-5 py-10">
          <div className="flex justify-between items-center">
            <div className="flex bg-tertiary-dark px-4 py-1.5 rounded-md justify-between items-center gap-x-2">
              <Image
                src="/hotNews/image 2137.svg"
                alt="javascript"
                className="h-3.5 w-3.5"
                width={1000}
                height={1000}
              />
              <div className="font-medium text-[10px] text-sixth-light ">
                JAVASCRIPT
              </div>
            </div>
            <div className="text-fourth-light mr-7 font-medium text-[12px]">
              20152+
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex bg-tertiary-dark px-4 py-1.5 rounded-md justify-between items-center gap-x-2">
              <Image
                src="/hotNews/ts.svg"
                alt="typescript"
                className="h-3.5 w-3.5"
                width={1000}
                height={1000}
              />
              <div className="font-medium text-[10px] text-sixth-light">
                TYPESCRIPT
              </div>
            </div>
            <div className="text-fourth-light mr-7 font-medium text-[12px]">
              18493+
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex bg-tertiary-dark px-4 py-1.5 rounded-md justify-between items-center gap-x-2">
              <Image
                src="/hotNews/Threejs-logo 2.svg"
                alt="threejs"
                className="h-3.5 w-3.5"
                width={1000}
                height={1000}
              />
              <div className="font-medium text-[10px] text-sixth-light">
                THREEJS
              </div>
            </div>
            <div className="text-fourth-light mr-7 font-medium text-[12px]">
              18493+
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex bg-tertiary-dark px-4 py-1.5 rounded-md justify-between items-center gap-x-2">
              <Image
                src="/hotNews/Frame.svg"
                alt="tailwind"
                className="h-3.5 w-3.5"
                width={1000}
                height={1000}
              />
              <div className="font-medium text-[10px] text-sixth-light">
                TAILWIND CSS
              </div>
            </div>
            <div className="text-fourth-light mr-7 font-medium text-[12px]">
              18493+
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex bg-tertiary-dark px-4 py-1.5 rounded-md justify-between items-center gap-x-2">
              <Image
                src="/hotNews/Frame 18.svg"
                alt="reactjs"
                className="h-3.5 w-3.5"
                width={1000}
                height={1000}
              />
              <div className="font-medium text-[10px] text-sixth-light">
                REACTJS
              </div>
            </div>
            <div className="text-fourth-light mr-7 font-medium text-[12px]">
              18493+
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex bg-tertiary-dark px-4 py-1.5 rounded-md justify-between items-center gap-x-2">
              <Image
                src="/hotNews/Frame (1).svg"
                alt="git & github"
                className="h-3.5 w-3.5"
                width={1000}
                height={1000}
              />
              <div className="font-medium text-[10px] text-sixth-light">
                GIT & GITHUB
              </div>
            </div>
            <div className="text-fourth-light mr-7 font-medium text-[12px]">
              18493+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNews;
