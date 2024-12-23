import { useState } from "react";
import Pizza from "./pizza";

export default function Order() {
//  const pizzaType="pepperoni";
 const pizzaSize="M";
const [pizzaType,setPizzaSize]=useState("pepperoni");

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
            onChange={e=>setPizzaSize(e.target.value)}
              name="pizza-type"
              value={pizzaType}
              >
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Type</label>
            <div>
              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        <div className="order-pizza">
          <Pizza
            name="Pepperoni"
            description="Mozzarella Cheese, Pepperoni"
            img="/public/pizzas/pepperoni.webp"
          />
          <p>$13.37</p>
        </div>
        </div>
      </form>
    </div>
  );
}