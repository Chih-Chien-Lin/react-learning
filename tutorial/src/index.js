import React from 'react'
import ReactDom from 'react-dom'


// function is component, return html
// function name should start with upper case to be recognized as component.
// Always have to return smth, even empty html tags
// function Greeting(){
//   return <h4>hello, test Justin first cmp</h4>;
// }

// React.createElement(element, props object, child)
const Greeting =() =>{
  return React.createElement('h1',{},'hello world')
}

ReactDom.render(<Greeting/>,document.getElementById('root'));


// function App(){
//   return(
//     <di>
//       <h3>hello world</h3>
//       <button>click</button>
//     </di>
//   )
// }

// export default App