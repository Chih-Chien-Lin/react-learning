import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function BookList(){
  return(
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      

    </section>
  );
}



const Book = () => {
  return <article className='book'>
    <Image />
    <Title></Title>
    <Author></Author>
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/81a5IRbOR4L._AC_UL200_SR200,200_.jpg" alt=""/>
}

const Title = () => {
  return <h1>Golden Girl</h1>
}

const Author = () => {
  // if we type style={}, everything inside of {} will be considered as JS
  // if we type style={{}}, everything inside will be considered as object(css object)
  return <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.5rem'}}>Elin Hilderbrand</h4>
}

ReactDom.render(<BookList/>,document.getElementById('root'));


