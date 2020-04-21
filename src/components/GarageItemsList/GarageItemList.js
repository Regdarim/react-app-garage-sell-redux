import React from "react";
import GarageItem from "../GarageItem/GarageItem";
import { connect } from "react-redux";

const GarageItemList = (props) => {
  return (
    <ul>
      <h1 className="title is-4 has-text-centered">Promoted Items</h1>
      {props.garageItems.map((item) => {
        const { id, title, desc, image, price } = item;
        return (
          <li key={id}>
            <GarageItem
              title={title}
              desc={desc}
              img={image}
              price={price}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    garageItems: state.garageItems,
  };
};

export default connect(mapStateToProps)(GarageItemList);
