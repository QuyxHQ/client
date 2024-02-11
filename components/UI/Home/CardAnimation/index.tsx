import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import Image from "next/image";

type BiddingCard = {
  profileImage: string;
  username: string;
  image: string;
  title: string;
  description: string;
  additionalClass?: string;
};

const data: BiddingCard[] = [
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "Design Maverick",
    additionalClass:
      "lg:group-hover:-ml-[40rem] md:group-hover:-ml-[30rem] mt-32 md:group-hover:mt-48 skew-x-[20deg] mr-20 md:group-hover:mr-28 group-hover:mt-[50rem]",
  },
  {
    username: "shortgirlintech",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/codeforge.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "Codeforge",
    additionalClass:
      "mt-16 md:group-hover:mt-16 mr-10 lg:group-hover:mr-28 md:group-hover:mr-16 skew-x-[20deg] group-hover:mt-[25rem]",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/maestro.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "Blockchain Maester",
    additionalClass:
      "lg:group-hover:-mr-[33rem] md:group-hover:-mr-[28rem] md:group-hover:mb-8 skew-x-[20deg]",
  },
];

const CardAnimationScetion = () => {
  return (
    <>
      <div className="sm:min-h-[10rem] md:min-h-[10rem]"></div>

      <div className="min-h-[100vh] relative text-white group">
        {data.map((card, id) => (
          <div
            key={id}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <div
              className={`lg:w-[20rem] md:w-[18rem] w-[60vw] min-h-[28rem] space-y-4 p-4 z-10 bg-gradient-to-b from-[#150b04] duration-300 relative via-[#0b030c] to-[#0b030c] border rounded-md md:skew-x-12 ${card?.additionalClass}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={card.profileImage}
                    alt=""
                    width={35}
                    height={35}
                  />
                  <span className="text-sm">{card.username}</span>
                  <Image
                    alt="verified"
                    src={"/Images/verified.svg"}
                    width={20}
                    height={20}
                  />
                </div>
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
              <div className="space-y-3">
                <p
                  className={`${montserratAlternatesMedium.className} text-lg`}
                >
                  {card.title}
                </p>
                <p className="text-sm"> {card.description}</p>
                <div className="flex items-center justify-between md:text-sm text-xs">
                  <button className="gradient-btn flex-shrink-0">
                    Place a bid
                  </button>
                  <button className="relative bg-black rounded-lg gradient-btn-outline">
                    Auction
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="h-[30rem] bg-[#010101]"></div> */}
    </>
  );
};

export default CardAnimationScetion;
