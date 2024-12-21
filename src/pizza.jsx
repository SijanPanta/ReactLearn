

export const Pizza = (props) => {
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

const App = (props) => {
    return (
        <div>
            <h1>Padre Gino's</h1>
           
            <Pizza
                name="sasto"
                description="kaam chalau"
            />
            <Pizza
                name="thikai"
                description="better than sasto"
            />
            <Pizza
                name="mahango"
                description="babbal mitho"
            />
        </div>
    );
};
export default App;