import { FaDotCircle } from "react-icons/fa";

function SectionThree () {
  return (
    <div className="px-[80px] py-[50px] max-md:px-5 flex flex-col gap-5 bg-[#dafff4] flex-wrap">
      <div className="flex gap-2 flex-wrap">
        <div className="w-[58%] flex gap-1 max-md:w-full">
          <div className="w-[40%] flex flex-wrap gap-2">
            <div className="bg-black flex flex-col gap-3 rounded p-2">
              <h3 className="text-white font-bold text-xl">
                Lorem ipsum dolor sit.
              </h3>
              <p className="leading-none text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, nesciunt!
              </p>
              <button className="bg-white p-2 rounded hover:bg-slate-500 font-bold">Lorem, ipsum dolor.</button>
            </div>
            <div className="bg-white rounded p-2 w-full">
              <p className="font-bold text-xl">$22,365</p>
              <p className="text-sm">Lorem, ipsum.</p>
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-2">
            <div className="bg-white rounded p-2">
              <h3 className="font-bold">
                Lorem, ipsum.
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="bg-[#259473] items-center gap-2 rounded p-2 flex">
              <p className="font-bold text-3xl text-white">40%</p>
              <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-white rounded p-2 flex items-center gap-2">
              <img src="https://raw.githubusercontent.com/BennethA/invoice-management-app/main/src/assets/profile1.jpg" className="h-9 w-9 rounded-full" alt="" />
              <div className="flex flex-col">
                <p className="font-bold">
                  Lorem
                </p>
                <p className="text-gray text-sm">Lorem.</p>
                <div>
                  <button className="p-[2px] font-semibold bg-yellow-500 rounded">
                    Lorem.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] max-md:w-full flex flex-col gap-1 max-lg:w-full">
          <h3 className="text-2xl font-bold">
            Invoicing Solution For All
          </h3>
          <div className="border-l-2 border-black px-2">
            <p className="font-bold">
              Lorem ipsum dolor sit.
            </p>
            <p className="leading-none">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae illo sapiente perspiciatis doloremque esse? Nam aliquam beatae dolores. Deserunt, facere.
            </p>
          </div>
          <p className="font-bold">Lorem, ipsum dolor.</p>
          <p className="font-bold">Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-1/2 flex flex-col gap-4 max-lg:w-full">
          <h3 className="font-bold text-2xl">An Online Invoicing Software</h3>
          <p className="leading-none text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci.
          </p>
          <div className="flex items-center justify-center gap-4">
            <FaDotCircle className="text-[#259473] text-[15px]"/>
            <div>
              <p className="font-bold flex items-center gap-1"> Lorem, ipsum dolor.</p>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quae!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaDotCircle className="text-[#259473] text-[15px]"/>
            <div>
              <p className="font-bold flex items-center gap-1"> Lorem, ipsum dolor.</p>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree;