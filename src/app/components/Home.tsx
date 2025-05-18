import Image from "next/image";

const Home = () => {
  return (
    <section className="p-10 md:p-5 lg:p-16">
      {/* first profile */}
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 justify-center items-center">
            <Image
              src="/MainSvgs/avatar.svg"
              alt="avatar"
              className="h-6 w-6"
              width={1000}
              height={1000}
            />
            <div className="font-semibold text-base text-fourth-light">
              Satheesh
            </div>
          </div>
          <div className="flex gap-x-2.5 justify-center items-center">
            <div className="flex gap-x-1 justify-center items-center">
              <Image
                src="/MainSvgs/up.svg"
                alt="up"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="bg-fourth-dark px-1 text-[12px] text-primary-light">
                12
              </div>
            </div>

            <div className="flex gap-x-1 justify-center items-center">
              <Image
                src="/MainSvgs/down.svg"
                alt="down"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="bg-fourth-dark px-1 text-[12px] text-primary-light">
                -4
              </div>
            </div>

            <Image
              src="/MainSvgs/tabler_star.svg"
              alt="star"
              className="h-5 w-5 ml-1"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <h2 className="font-semibold text-2xl py-5 text-primary-light">
          How to refresh all the data inside the Datatable and move the data
          into original place after closing the modal popup close button
        </h2>

        <div className="flex gap-x-4 text-fourth-light">
          <div className="flex gap-x-1 justify-center items-center">
            <Image
              src="/MainSvgs/time.svg"
              alt="time"
              className="h-3.5 w-3.5"
              width={1000}
              height={1000}
            />
            <div className="font-normal text-[12px]">Asked 2 days ago</div>
          </div>
          <div className="flex gap-x-1 justify-center items-center">
            <Image
              src="/MainSvgs/answers.svg"
              alt="answers"
              className="h-3.5 w-3.5"
              width={1000}
              height={1000}
            />
            <div className="font-medium text-[12px]">900 Answers</div>
          </div>
          <div className="flex gap-x-1 justify-center items-center">
            <Image
              src="/MainSvgs/view.svg"
              alt="view"
              className="h-3.5 w-3.5"
              width={1000}
              height={1000}
            />
            <div className="font-medium text-[12px]">5.2k views</div>
          </div>
        </div>

        <div className="font-normal leading-6 space-y-5 py-8 text-fourth-light text-[15px]">
          <p>
            When the user clicks a button for the first time, a spinner is
            displayed, the &quot;close&quot; button is disabled, and a modal
            popup is shown. When the user clicks on a table displayed within the
            modal popup, the table loads data.
          </p>
          <p>
            When the user closes the popup by clicking the &quot;close&quot;
            button, and then clicks the same button again without refreshing the
            page, the data in the table should be the same as it was before.
          </p>
          <p>
            I need it so that when the user clicks the button, any changes made
            stay in place even after closing and reopening the popup.
          </p>
        </div>

        <div className="bg-sixth-dark rounded-lg">
          <Image
            src="/MainSvgs/Frame 13.svg"
            alt="up"
            className="lg:h-96 lg:w-[850px]"
            width={1000}
            height={1000}
          />
        </div>

        <div className="flex gap-x-2 text-fifth-light font-medium text-[7px] md:text-[10px] py-8">
          <div className="bg-tertiary-dark px-2 md:px-4 py-2 rounded-md">
            JAVASCRIPT
          </div>
          <div className="bg-tertiary-dark px-2 md:px-4 py-2 rounded-md">
            REACT.JS
          </div>
          <div className="bg-tertiary-dark px-2 md:px-4 py-2 rounded-md">
            INVALID FIELDS
          </div>
          <div className="bg-tertiary-dark px-2 md:px-4 py-2 rounded-md">
            DEPLOYMENT
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-accent">138 Answers</div>
          <div className="bg-tertiary-dark flex items-center rounded-md px-5 py-2 gap-x-1">
            <Image
              src="/MainSvgs/bi_filter.svg"
              alt="filter"
              className="h-3.5 w-3.5"
              width={1000}
              height={1000}
            />
            <div className="font-normal text-[12px] text-primary-light">
              Highest Upvotes{" "}
            </div>
            <Image
              src="/MainSvgs/mingcute_down-line.svg"
              alt="mingcute_down-line"
              className="h-3.5 w-3.5"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* second profile */}

      <div className="py-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 justify-center items-center">
            <Image
              src="/secondProfile/avatar.svg"
              alt="avatar"
              className="h-6 w-6"
              width={1000}
              height={1000}
            />
            <div className="font-semibold text-[7px] md:text-base text-fourth-light">
              Philip Martin
            </div>
            <div className="text-fifth-light font-normal text-[7px] md:text-[12px]">
              • answered Aug 6, 2022 at 21:01
            </div>
          </div>
          <div className="flex gap-x-2.5 justify-center items-center">
            <div className="flex gap-x-1 justify-center items-center">
              <Image
                src="/secondProfile/up.svg"
                alt="up"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="bg-fourth-dark px-1 text-[12px] text-primary-light">
                12
              </div>
            </div>

            <div className="flex gap-x-1 justify-center items-center">
              <Image
                src="/secondProfile/down.svg"
                alt="down"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="bg-fourth-dark px-1 text-[12px] text-primary-light">
                -4
              </div>
            </div>
          </div>
        </div>

        <div className="font-normal leading-6 space-y-5 py-8 text-fourth-light text-[15px]">
          <p>
            I think what you want to do is probably not to attach the foreach
            function to only the one array you have here, but to make it work
            for all arrays.
          </p>
          <p>
            To do that, you must edit the Array prototype (something that some
            people have very strong opinions about, because you can not protect
            against potential future namespace collisions - but other people
            find extremely useful).
          </p>
        </div>

        <div className="bg-sixth-dark rounded-lg">
          <Image
            src="/secondProfile/carbon 1.svg"
            alt="up"
            className="lg:h-[155px] lg:w-[850px] rounded-lg"
            width={1000}
            height={1000}
          />
        </div>

        <div className="py-7">
          <p className="text-secondary-light font-normal text-[12px] md:text-[14px]">
            *N.B. to avoid conflict with existing forEach functions
            (https://developer.mozilla.org/en-JavaScript/Reference/Global_Objects/Array/forEach)
            I have named the function myForEach which I expect to be safe from
            conflict.
          </p>
        </div>

        <div className="border border-tertiary-dark"></div>
      </div>

      {/* third profile */}
      <div className="py-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 justify-center items-center">
            <Image
              src="/secondProfile/avatar.svg"
              alt="avatar"
              className="h-6 w-6"
              width={1000}
              height={1000}
            />
            <div className="font-semibold text-[7px] md:text-base text-fourth-light">
              Taylor Hernandez
            </div>
            <div className="text-fifth-light font-normal text-[7px] md:text-[12px]">
              • answered Aug 6, 2022 at 21:01
            </div>
          </div>
          <div className="flex gap-x-2.5 justify-center items-center">
            <div className="flex gap-x-1 justify-center items-center">
              <Image
                src="/secondProfile/up.svg"
                alt="up"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="bg-fourth-dark px-1 text-[12px] text-primary-light">
                12
              </div>
            </div>

            <div className="flex gap-x-1 justify-center items-center">
              <Image
                src="/secondProfile/down.svg"
                alt="down"
                className="h-5 w-5"
                width={1000}
                height={1000}
              />
              <div className="bg-fourth-dark px-1 text-[12px] text-primary-light">
                -4
              </div>
            </div>
          </div>
        </div>

        <div className="font-normal leading-6 space-y-5 py-8 text-fourth-light text-[15px]">
          <p>You need to add the forEach method to the prototype of Arrays :</p>
        </div>

        <div className="bg-sixth-dark rounded-lg">
          <Image
            src="/thirdProfile/carbon 1.svg"
            alt="up"
            className="ld:h-[155px] lg:w-[850px] rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
