import React from "react";
import GarageItem from "../GarageItem/GarageItem";

const GarageItemList = props => {
  return (
    <ul className="">
      <h1 className="title is-4 has-text-centered">Promoted Items</h1>
      {props.garageItems.map(item => {
        return (
          <li key={item.id} className="">
            <GarageItem
              title={item.title}
              desc={item.desc}
              img={item.image}
              price={item.price}
              id={item.id}
              deleteItem={props.deleteItem}
              toggleModal={props.toggleModal}
              counter={props.counter}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default GarageItemList;
