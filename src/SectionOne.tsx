import { FaCheck } from "react-icons/fa6"

function SectionOne () {
  return (
    <div className="bg-[#259473] pb-4 text-white pt-[100px] px-[80px] flex flex-col gap-4 max-md:px-5">
      <h1 className="font-bold text-4xl text-center">
        Powerful Invoicing Platform <br />
        Your Business Your Clients
      </h1>
      <p className="border-l-[1px] px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt aliquid architecto, sed vel commodi porro minus aperiam expedita et. Dolore vel voluptates nisi enim?
      </p>
      <div className="flex flex-col gap-1 w-1/2 max-md:w-full">
        <p className="flex items-center gap-2">
          <FaCheck/> 
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="flex items-center gap-2">
          <FaCheck/> 
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="flex items-center gap-2">
          <FaCheck/> 
          Lorem ipsum dolor sit amet consectetur
        </p>
        <div className="flex flex-col gap-2 mt-5">
          <h3 className="font-bold text-3xl">
            29,378+
          </h3>
          <p className="text-sm">
            Selected Users
          </p>
          <div className="flex gap-[-5px]">
            <img src="https://raw.githubusercontent.com/BennethA/invoice-management-app/main/src/assets/profile1.jpg" className="w-9 h-9 rounded-full border-2" alt="" />
            <img src="https://raw.githubusercontent.com/BennethA/invoice-management-app/main/src/assets/profile2.jpg" className="relative left-[-10px] w-9 h-9 rounded-full border-2" alt="" />
            <img src="https://raw.githubusercontent.com/BennethA/invoice-management-app/main/src/assets/profile3.jpg" className="relative left-[-20px] w-9 h-9 rounded-full border-2" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne