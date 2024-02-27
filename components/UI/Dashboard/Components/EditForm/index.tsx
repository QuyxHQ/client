import React from "react";
import "./EditForm.css";

const index = () => {
  return (
    <>
      <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
        <div className="h-full">
          <div
            className="bg_NFT h-[60vh] md:h-full flex-grow  w-full bg-transparent border rounded-xl grid place-items-center "
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
              }}
              className="flex items-center justify-center rounded-xl"
            >
              <div className="text-center space-y-3">
                <p className="">Drag and drop media</p>
                <h3 className="font-bold text-purple-300 text-3xl cursor-pointer">
                  Browse files
                </h3>
                <p className="text-[#D9D9D9]">max size 50mb</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form action="" className="space-y-2">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className=" min-w-[40vw] outline-none block w-full bg-transparent border py-3 rounded-md px-3 text-sm"
            />
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Info about this card"
              className="min-w-[40vw] h-40 px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
            />
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Description <span className="text-[#cc99ff]">(Optional)</span>
            </label>
            <textarea
              id="bio"
              placeholder="Info about this card"
              className="min-w-[40vw] h-20 px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
