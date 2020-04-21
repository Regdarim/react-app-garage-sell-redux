import React from "react";

const RecentlyAdded = (props) => {
  const { deleteItem } = props;
  return (
    <>
      {props.recentlyAddedItems.map((item) => {
        const { image, title, price, desc, id } = item;
        return (
          <div className="box section">
            <article class="media">
              <div className="media-content ">
                <div className="columns">
                  <div class=" column is-one-quarter">
                    <figure class="image is-128x128 is-flex">
                      <img src={image} alt={`Authenthic Pictures ${title}`} />
                    </figure>
                  </div>
                  <div className="section coulumn is-one-half">
                    <h2 className="title is-4 ">{title}</h2>
                    <h3 className="title is-6 ">Price:{price}</h3>
                  </div>
                </div>

                {/* <p>{props.id}</p> */}
                <div className="">
                  <p className="has-text-grey  column ">{desc}</p>
                </div>

                <div className="columns">
                  <div className="column">
                    <button className="button is-primary  ">Buy Now</button>
                  </div>
                  <div className="column">
                    <button className="button is-info  ">Ask Question</button>
                  </div>
                  <div className="column">
                    <button
                      className="button is-danger  "
                      onClick={() => deleteItem(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default RecentlyAdded;
