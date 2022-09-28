import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

// import { Component } from "react";
// import Card from "../card/card.component";
// import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     // only 1 parent level component returned in render()
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
