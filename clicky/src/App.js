import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import FriendCard from "./components/FriendCard/FriendCard";
import Footer from "./components/Footer/Footer";
import croc from "./croc.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    croc,
    clickedCroc: [],
    score: 0
  };

//when you click on a card ... the image is taken out of the array
  imageClick = event => {
    const currentCroc = event.target.alt;
    const CrocAlreadyClicked =
      this.state.clickedCroc.indexOf(currentCroc) > -1;

//if you click on a card that has already been selected, the game is reset and cards reordered
    if (CrocAlreadyClicked) {
      this.setState({
        croc: this.state.croc.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCroc: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available image, your score is increased and cards reordered
    } else {
      this.setState(
        {
          croc: this.state.croc.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCroc: this.state.clickedCroc.concat(
            currentCroc
          ),
          score: this.state.score + 1
        },
//if you get all 12 images corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              fish: this.state.croc.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCroc: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.croc.map(croc => (
            <FriendCard
              imageClick={this.imageClick}
              id={croc.id}
              key={croc.id}
              image={croc.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;