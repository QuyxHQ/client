import Image from "next/image";

const CreatedTabView = () => {
    return (
      <div className="min-h-[50vh] bg-transparent border rounded-xl grid place-items-center mt-[4rem]">
        <div className="text-center space-y-6">
          <p className="text-white font-bold">Nothing here yet</p>
          <button className="sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
            Create new card
            <Image
              src={"/Images/Vector.svg"}
              width={20}
              height={20}
              alt="logo"
            />
          </button>
        </div>
      </div>
    );
}
 
export default CreatedTabView;