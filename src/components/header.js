import React from 'react'

class Header extends React.Component {
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <section id="header">
                <div className="container py-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1><strong>Welcome to Monster Slayer</strong></h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
