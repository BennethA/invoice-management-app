function SectionTwo () {
  return (
    <div className="bg-white flex gap-3 flex-wrap px-[80px] py-[50px] max-md:px-5">
      <div className="w-1/2 max-lg:w-full flex flex-col gap-2">
        <h2 className="font-bold text-2xl">
          All-in-One Invoice Platform
        </h2>
        <p className="text-gray-400 font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in rem fuga pariatur similique sequi asperiores officiis.
        </p>
        <div>
          <button className="bg-[#018d63] px-2 py-1 rounded-full text-white text-sm hover:opacity-70">
            View All Features
          </button>
        </div>
      </div>
      <div className="flex max-lg:w-full items-center justify-between flex-wrap w-1/2 gap-5">
        <div className="w-[200px]">
          <h4 className="font-bold">Effortless Invoicing</h4>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, libero.
          </p>
        </div>
        <div className="w-[200px]">
          <h4 className="font-bold">
            Automating At It's Best
          </h4>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, libero.
          </p>
        </div>
        <div className="w-[200px]">
          <h4 className="font-bold">Save With Cloud</h4>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, libero.
          </p>
        </div>
        <div className="w-[200px]">
          <h4 className="font-bold">3M+ Subscribers</h4>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, libero.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo;