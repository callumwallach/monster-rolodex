const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React IS rendered"),
    React.createElement(
      Person,
      { name: "Callum", occupation: "instructor" },
      null
    ),
    React.createElement(
      Person,
      { name: "Jeff", occupation: "lead instructor" },
      null
    ),
    React.createElement(Person, { name: "Sarah", occupation: "tutor" }, null),
  ]);
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));

// React v18.x
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
