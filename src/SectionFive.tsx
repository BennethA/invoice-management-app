import { FaCheck } from "react-icons/fa6";

function SectionFive() {
  return (
    <div className="flex bg-[#dafff4] flex-col gap-8 px-[80px] py-[50px] max-md:px-5">
      <h3 className="font-bold text-2xl text-center">
        Choose Your Plan
      </h3>
      <div className="flex justify-center -mt-3">
        <p className="w-[80%] leading-none text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, libero at? Dicta architecto.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="bg-white p-2 rounded-lg w-[200px] flex flex-col gap-3">
          <div>
            <p className="font-bold">Enterprise</p>
            <p className="text-[#006849] font-bold text-2xl">29$</p>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
          </div>
          <div>
            <button className="bg-[#006849] py-1 px-2 rounded-full text-white font-semibold">
              Lorem ipsum dolor
            </button>
          </div>
        </div>
        <div className="bg-[#32d4a4] p-2 rounded-lg w-[200px] flex flex-col gap-3">
          <div>
            <p className="font-bold">Enterprise</p>
            <p className="text-white font-bold text-2xl">14$</p>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
          </div>
          <div>
            <button className="bg-white py-1 px-2 rounded-full text-[#006849] font-semibold">
              Lorem ipsum dolor
            </button>
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg w-[200px] flex flex-col gap-3">
          <div>
            <p className="font-bold">Enterprise</p>
            <p className="text-[#006849] font-bold text-2xl">0$</p>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaCheck className="text-[#006849]"/> Lorem ipsum dolor. 
            </p>
          </div>
          <div>
            <button className="bg-black py-1 px-2 rounded-full text-white font-semibold">
              Lorem ipsum dolor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFive;