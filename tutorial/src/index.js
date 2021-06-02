import React from 'react'
import ReactDom from 'react-dom'


// function is component, return html
// function name should start with upper case to be recognized as component.
// Always have to return smth, even empty html tags
// function Greeting(){
//   return <h4>hello, test Justin first cmp</h4>;
// }

// JSX Rules
// return single element( wrap everything in a div / section / article)
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting
function Greeting(){
  return(
    // <div>
    // if not use too many <div>, we can use React.Fragment as replacement.
    <React.Fragment>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href='#'>hello world</a>
        </li>
      </ul>
    </React.Fragment>
    // </div>
  )
}
// function Greeting(){
//   return(
//     <div>
//       <h1>hello World!!</h1>
//     </div>
//   )
// }

// React.createElement(element, props object, child)
// const Greeting =() =>{
//   return React.createElement('h1',{},'hello world')
// }

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