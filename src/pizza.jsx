

const Pizza = (props) => {
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.img} alt={props.name} />
        </div>
    );
};

export  const App = () => {
    return (
        <div>
            <h1 className="logo">Padre Gino's Pizza</h1>
      <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        img={"public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        img={"public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        img={"public/pizzas/big_meat.webp"}
      />
        </div>
    );
};
export default Pizza;
