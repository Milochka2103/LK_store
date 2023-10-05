import React, { useContext, useState } from "react";
import { Jacket } from "./Jacket/Jacket";
import "./Jackets.css";
import { AddForm } from "../AddForm/AddForm";
import { ShopContext } from "../../context/shop-context";

export const Jackets = () => {
  const { addToCart, blazers, setBlazers, cartItems } = useContext(ShopContext);

  const [condition, setCondition] = useState("default");
  const [showAddForm, setShowAddForm] = useState(false);

  const onSortbyPrice = () => {
    let newJackets = [...blazers];

    if (condition === "to high") {
      return newJackets.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (condition === "to low") {
      return newJackets.sort((a, b) => (b.price > a.price ? 1 : -1));
    } else {
      return blazers;
    }
  };

  const sortedJackets = onSortbyPrice();

  return (
    <div className="layout">
      <div className="filters">Filters</div>
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by price
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() => setCondition("to high")}
                className="dropdown-item"
              >
                From low to high
              </button>
            </li>
            <li>
              <button
                onClick={() => setCondition("to low")}
                className="dropdown-item"
              >
                From high to low
              </button>
            </li>
            <li>
              <button
                onClick={() => setCondition("default")}
                className="dropdown-item"
              >
                Default
              </button>
            </li>
          </ul>
        </div>
        <div className="addBtn">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setShowAddForm(true)}
          >
            Add blazer
          </button>
        </div>
        <div className="jackets">
          {sortedJackets.map((blazer) => {
            return (
              <Jacket
                id={blazer.id}
                title={blazer.title}
                price={blazer.price}
                currency={blazer.currency}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            );
          })}
        </div>
      </div>
      {showAddForm && (
        <AddForm
          setShowAddForm={setShowAddForm}
          setBlazers={setBlazers}
          blazers={blazers}
        />
      )}
    </div>
  );
};
