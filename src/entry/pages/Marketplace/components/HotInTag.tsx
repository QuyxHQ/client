import { AnchorLink, Card } from "../../..";

type Props = { tag?: string; cards?: QuyxCard[] };

const HotInTag = ({ tag, cards }: Props) => {
  return cards?.length == 0 ? null : (
    <section className="marketplace-section py-4">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <h2 className="title">
          Hot in <span>{tag || "----"} 🔥</span>
        </h2>

        <AnchorLink to={`/tag/${tag}`}>
          <button className="d-flex align-items-center">
            <span>See more</span>
            <i className="h h-chevron-right" />
          </button>
        </AnchorLink>
      </div>

      <div className="col-12">
        <div className="row g-4">
          {cards?.map((card, index) => (
            <div key={`hot-cards-in-tag-${tag}-${index}`} className="col-12 col-md-6 col-lg-4">
              <Card data={card} displayOwner />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotInTag;
