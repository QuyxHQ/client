import React from "react";
import Image from "next/image";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import { cardData } from "@/lib/mock/dashcard";

type Coin = "ETH" | "JPY"; // add more...

type Card = {
  username: string;
  profile: string;
  owner: string;
  ownerprofile: string;
  cardamount: number;
  totalPrice: number;
  coinType: Coin;
  description: string;
  price: number;
  amount: number;
};

const price = 1;
const followers = 30000;

const AllTabView = () => {
  if (price || price !== 0 || price > 40) {
    // show this
  }

  if (price && price > 30000) {
    //
  }

  // console.log(`Price: ${price}, Followers: ${followers}`); // string literal
  // console.log("Price: " + price + ", " + "Followers: " + followers); // concatenation

  // (price || price !== 0) ? 'show omething' : 'do ssomething else'

  // (price && verified) && 'this person is trying to sell and and the same time is a verified user.'

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {cardData.map((card, id) => (
          <div
            key={id}
            className="bg-gradient-to-bg relative from-[#150b04] via-[#0b030c] border text-white  to-[#0b030c] p-4  rounded-md duration-200"
            //  ${
            //   !card.price && ""
            // }`
          >
            <div className="">
              <div className="absolute top-2 right-2 z-[99]">
                {card.saleTag && (
                  <Image
                    src={card.saleTag}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="md:h-[15rem] h-[10rem] rounded-lg relative overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 py-3 px-1">
                <p
                  className={`${montserratAlternatesMedium.className} text-xl`}
                >
                  {card.title}
                </p>
                <p className="whitespace-pre-line text-xs text-zinc-400 select-none">
                  {card.description}
                </p>

                <>
                  {card.price ? (
                    <div className="flex items-center gap-1 py-1">
                      <p className="text-4xl text-[#ffd599]">${card.price}</p>
                      <div className="flex text-zinc-500 items-center gap-1 text-lg">
                        <p>~</p>
                        <p>{card.amount}</p>
                        <p>{card.coinType}</p>
                      </div>
                    </div>
                  ) : null}
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTabView;
