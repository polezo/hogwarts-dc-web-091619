import React from 'react'

class Hog extends React.Component {
    state ={
        toggleDetail:false,
        toggleHidden:true
    };
    
    toggleHidden = () => {
        let toggleHidden = !this.state.toggleHidden
        this.setState({toggleHidden})
    }

    render() {
        const {name,specialty,greased,weight} = this.props.hog;
        let img = require(`../hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`);

        return (<div><div className='ui card' onClick={this.toggle}><button onClick={this.toggleHidden}>{name}</button>{this.state.toggleHidden && <div>
                    <img src={img} alt={`${name}`} />
                    {this.state.toggleDetail && (<div>
                        <h2>Specialty: {specialty}</h2>
                        <h2>Greased: {`${greased}`}</h2>
                        <h2>Weight: {weight}</h2>
                        <h2>Highest medal achieved: {this.props.hog['highest medal achieved']}</h2>
                    </div>)}
                    </div>}</div></div>
                )
        
    }

    toggle = () => {
        this.setState(pre => {return {
            toggleDetail: !pre.toggleDetail
        }})
    }
}

export default Hog