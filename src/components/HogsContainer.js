import React from 'react'
import Hog from './Hog'

class HogsContainer extends React.Component {
    state ={
        toggleGreased : true,
        hogs: this.props.hogs
    };

    render() {
        
        return (
        <div>
            <select onChange={this.sortPigs}>
                <option></option>
                <option name="name" value="name">Name</option>
                <option name="weight" value="weight">Weight</option>
            </select>
            <button onClick={this.renderGreasedHogs}>{this.state.toggleGreased ? "See Only Greased" : "See All Pigs"} </button><div className='ui link cards'>
            {this.state.hogs.map((hog,i)=>{return<Hog key={i} hog={hog}/>})}
            </div>
        </div>
        )
    }

    sortPigs = (e) => {
        let hogs
        switch(e.target.value){
            case "name":
            hogs = this.state.hogs.sort((a, b)=>(a.name > b.name) ? 1 : -1)  
            console.log(hogs)
            break
            case "weight":
            hogs = this.state.hogs.sort((a, b)=>(a.weight > b.weight) ? 1 : -1)  
            break
            default:
            hogs = this.state.hogs;
            break  
        }
        this.setState({hogs})
    }

    renderGreasedHogs = () => {
        if (this.state.toggleGreased) {
            const greasedHogs = this.state.hogs.filter(hog => hog.greased)
            this.setState({
                hogs: greasedHogs,
                toggleGreased:false
            })
        } else {
            this.setState({hogs:this.props.hogs,
                toggleGreased:true})
        }
    }
}


export default HogsContainer