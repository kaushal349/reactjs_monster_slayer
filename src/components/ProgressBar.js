import React from 'react'

class ProgressBar extends React.Component{


    render(){

        let heightBar = {
            height: '30px'
        };
        let playerHealthProgressBar = {
            width: this.props.playerHealth + "%",

          };
        let monsterHealthProgressBar = {
            width: this.props.monsterHealth + "%",

          };
        
        console.log(this.props)

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h3 className = "py-3 text-center"><strong>Player</strong></h3>
                        <div className="progress bg-secondary" style={heightBar}>
                            <div className="progress-bar bg-success" style ={playerHealthProgressBar} >
                                <strong>{this.props.playerHealth}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className = "py-3 text-center"><strong>Monster</strong></h3>
                        <div className="progress bg-secondary" style={heightBar}>
                            <div className="progress-bar bg-success" style ={monsterHealthProgressBar} >
                                <strong>{this.props.monsterHealth}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar