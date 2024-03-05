import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useAppStore } from "../../context/AppProvider";
import { NFTs } from "..";

const UploadMedia = (props: { pfp: string; setPfp: Dispatch<SetStateAction<string>> }) => {
  const { openModal, setModalBody } = useAppStore();
  const fileRef = useRef<any>();

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => props.setPfp(e.target.result);
    reader.readAsDataURL(file);
  }

  const [tab, setTab] = useState<"one" | "two">("one");

  return (
    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
      <div className="tab">
        <p className={tab == "one" ? "active" : ""} onClick={() => setTab("one")}>
          Upload media
        </p>

        <p className={tab == "two" ? "active" : ""} onClick={() => setTab("two")}>
          nfts collection
        </p>
      </div>

      <div className="tab-content-container">
        {tab == "one" ? (
          <>
            <div className="media">
              <RenderSelectedImage pfp={props.pfp} setPfp={props.setPfp}>
                <>
                  <p>Drag and drop media</p>
                  <h4>Browse files</h4>
                  <span>max size 20mb</span>
                </>
              </RenderSelectedImage>
            </div>

            <input
              className="d-none"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              ref={fileRef}
            />

            <button onClick={() => fileRef.current.click()}>
              <span>Choose from device</span>
              <i className="h h-smartphone" />
            </button>
          </>
        ) : (
          <>
            <div className="nft">
              <RenderSelectedImage pfp={props.pfp} setPfp={props.setPfp}>
                <>
                  <p>no nft selected yet!</p>
                  <h4>Choose nft</h4>
                  <span>max: 1 nft</span>
                </>
              </RenderSelectedImage>
            </div>

            <button
              onClick={() => {
                setModalBody(<NFTs pfp={props.pfp} setPfp={props.setPfp} />);
                openModal();
              }}
            >
              <span>Choose from collection</span>
              <i className="h h-refresh-acw" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const RenderSelectedImage = (props: {
  pfp: string;
  children: React.JSX.Element;
  setPfp: (value: string) => void;
}) => {
  return props.pfp ? (
    <div className="image">
      <img src={props.pfp} className="w-100" />

      <div onClick={() => props.setPfp("")}>
        <i className="h h-trash-2" />
      </div>
    </div>
  ) : (
    props.children
  );
};

export default UploadMedia;
