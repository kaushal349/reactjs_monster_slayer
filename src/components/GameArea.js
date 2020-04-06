import React from 'react'

class GameArea extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row py-3 border">
                    <div className="col">
                        <button className = "btn btn-success btn-block" onClick={this.props.attack}>
                            Attack
                        </button>
                    </div>
                    <div className="col">
                        <button className = "btn btn-danger btn-block" onClick={this.props.specialAttack}>
                            Special Attack
                        </button>
                    </div>
                    <div className="col">
                        <button className = "btn btn-info btn-block" onClick={this.props.heal}>
                            Heal
                        </button>
                    </div>
                    <div className="col">
                        <button className = "btn btn-warning btn-block" onClick={this.props.giveUp}>
                            Giveup
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameArea