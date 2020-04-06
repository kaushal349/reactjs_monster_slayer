import React from 'react'

class NewGame extends React.Component {

    render(){
        return (
            <div className="container">
                <div className="row py-3 border">
                    <div className="col justify-content-center d-flex">
                        <button className="btn btn-primary btn-xl" onClick={this.props.startNewGame}>New Game</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewGame