import React from 'react'
import ReactDom from 'react-dom'


// function is component, return html
// function name should start with upper case to be recognized as component.
function Greeting(){
  return <h4>hello, test Justin first cmp</h4>;
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