
import React from 'react'
import { render } from 'react-dom'

class Navbar extends React.Component{
  render(){
    return (
          <header className="nav">
             <h1>Counter</h1>
          </header>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'state title',
      count: 0,
    }
    this.addCount = this.addCount.bind(this)
  }

  addCount(e){
    this.setState(state => {
      return {
        count: state.count + 1,
      }
    })

  }
  render(){
    return (
        <div>
        <Navbar  />
           <h6>Hello React Component {this.state.title}</h6>
           <p> Counter: {this.state.count} </p>
           <button onClick={this.addCount}>new count state : {this.state.count}</button>
        </div>
    )
  }
}
render(<App/>, document.getElementById('root'))
