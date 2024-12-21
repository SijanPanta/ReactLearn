const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Geno's"),
    [
      React.createElement(Pizza, {
        name: "sasto",
        description: "ra varpardo",
      }),
      React.createElement(Pizza, {
        name: "thikai sasto",
        description: "halka mitho",
      }),
      React.createElement(Pizza, {
        name: "babbal mahango",
        description: "Babbal mitho",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
