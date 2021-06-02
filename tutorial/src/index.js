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
  return <h4>Elin Hilderbrand</h4>
}

ReactDom.render(<BookList/>,document.getElementById('root'));


