import React from "react";
import styles from "./GarageItem.module.scss";
import { connect } from "react-redux";
import { setModalOpen as setModalOpenAction } from "../../actions";
import { setBuyCounter as setBuyCounterAction } from "../../actions";

import PropTypes from "prop-types";

const GarageItem = (props) => {
  const { img, title, price, desc, setBuyCounter, setModalOpen } = props;
  return (
    <div className="box section">
      <article class="media">
        <div className="media-content ">
          <div className="columns">
            <div class=" column is-one-quarter">
              <figure class="image is-128x128 is-flex">
                <img src={img} alt={`Authenthic Pictures ${title}`} />
              </figure>
            </div>
            <div className="section coulumn is-one-half">
              <h2 className="title is-4 ">{title}</h2>
              <h3 className="title is-6 ">Price:{price}</h3>
            </div>
          </div>

          {/* <p>{id}</p> */}
          <div className="">
            <p className="has-text-grey  column ">{desc}</p>
          </div>

          <div className="columns">
            <div className="column">
              <button
                className="button is-primary is-outlined"
                onClick={setBuyCounter}
              >
                Buy Now
              </button>
            </div>
            <div className="column">
              <button
                className="button is-info is-outlined"
                onClick={setModalOpen}
              >
                Ask Question
              </button>
            </div>
            <div className="column">
              <button
                className="button is-danger is-outlined "
                // onClick={() => props.deleteItem(props.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

GarageItem.propTypes = {
  setModalOpen: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setModalOpen: () => dispatch(setModalOpenAction()),
  setBuyCounter: () => dispatch(setBuyCounterAction()),
});

export default connect(null, mapDispatchToProps)(GarageItem);
