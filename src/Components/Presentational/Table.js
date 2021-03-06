import React, { Component } from 'react';
import { connect } from 'react-redux';
import HandName from './HandName';
import { setCurrentHand } from '../../Actions/handActions';
import { InfoButton } from "./styles";
import styles from "styled-components";

const Div = styles.div` 
    background: #000000;
    color: #0d7c57;
    display: inline-block;
    padding: 1%;
    margin: 5%;
    margin-bottom: 1%;
    border-style: inset;
`;

const innerDiv = styles.div`
    display: inline-block;
`

export class Table extends Component {

  handleClick = event => {
    event.preventDefault();
    let hand = {};
    hand.id= event.target.id;
    this.props.setCurrentHand(hand);
  }
    
  render() {
    
    const hands = this.props.hands != undefined ? this.props.hands.map((hand, index) => {
      return <innerDiv><HandName Id={hand.id} potSize={hand.potSize} 
      moneyInvested={hand.money_invested} tags={hand.hands_tags}
      status={hand.status ? "won" : "lost"} key={index}/>
      <InfoButton id={hand.id} onClick={this.handleClick}>View Hand Details</InfoButton></innerDiv>}) : <p>No Hands Yet</p>;
    
      return (
        <Div>
          <h2>Table Stats</h2>
          <h3>Hand Count: {this.props.handCount}</h3>
          <h3>Buy-in: {this.props.buyin}</h3>
          <h3>Capacity:{this.props.capacity}</h3>
          <h3>Size: {this.props.size}</h3>
          <h3>Amount: ${this.props.amount}</h3>
          <h2>Hand Stats</h2>
          <div>
          {hands}
        </div>
        </Div>
      )
     }
  }

  export default connect(null, { setCurrentHand })(Table);