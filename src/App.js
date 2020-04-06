import React from 'react';
import Header from './components/header'
import ProgressBar from './components/ProgressBar'
import NewGame from './components/NewGame'
import GameArea from './components/GameArea.js'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isGameRunning: false,
      playerHealth: 100,
      monsterHealth: 100
    }

    this.startNewGame = this.startNewGame.bind(this)
    this.attack = this.attack.bind(this)
    this.specialAttack = this.specialAttack.bind(this)
    this.heal = this.heal.bind(this)
    this.giveUp = this.giveUp.bind(this)
    this.monsterAttack = this.monsterAttack.bind(this)
  };

  startNewGame(){
    this.setState(function(prevState){
      return {
        isGameRunning: !prevState.isGameRunning,
        monsterHealth: 100,
        playerHealth: 100
      }
    })
  }

  attack(){
    this.setState(function(prevState){
      let damage = Math.max(Math.floor(Math.random() * 10) + 1, 3)
      if((prevState.monsterHealth - damage)<=0){
        alert('You won!')
        return{
          isGameRunning : false
        }
      }
      return {
        monsterHealth: prevState.monsterHealth - damage,
      }
    },function(){
      this.monsterAttack()
    })


  }

  specialAttack(){
    this.setState(function(prevState){
      let damage = Math.max(Math.floor(Math.random() * 20) + 1, 10)
      if((prevState.monsterHealth - damage)<=0){
        alert('You won!')
        return{
          isGameRunning : false
        }
      }
      return {
        monsterHealth: prevState.monsterHealth - damage,
      }
    },function(){
      this.monsterAttack()
    })

  }

  heal(){
    this.setState(function(prevState){
      let newHealth = 100
      if(prevState.playerHealth<90){
        newHealth = prevState.playerHealth + 10
      }
      else{
        newHealth = 100
      }
      return {
        playerHealth: newHealth
      }
      
    },function(){
      this.monsterAttack()
    })
  }

  giveUp(){
    this.setState(function(prevState){
      return {
        isGameRunning: false
      }
    })
  }

  monsterAttack(){
    this.setState(function(prevState){
      let damage2 = Math.max(Math.floor(Math.random() * 15) + 1, 5)
      if((prevState.playerHealth - damage2)<=0){
        alert('You Lose!')
        return{
          isGameRunning : false
        }
      }
      return{
        playerHealth: prevState.playerHealth - damage2
      }
    })
  }


  render(){
    return (
      <div>
          <Header />
          <ProgressBar playerHealth={this.state.playerHealth} monsterHealth={this.state.monsterHealth}/>
          {!this.state.isGameRunning &&<NewGame startNewGame={this.startNewGame} />}
          {this.state.isGameRunning &&<GameArea attack={this.attack} specialAttack={this.specialAttack} heal={this.heal} giveUp={this.giveUp}/>}
      </div>
    );
  }
}

export default App;
