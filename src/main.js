
import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div>
           <h1>Hello React</h1>
           <p> Try to improve </p>
        </div>
    )
  }
}
render(<App/>, document.getElementById('root'))
