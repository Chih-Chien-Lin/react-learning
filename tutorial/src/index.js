import React from 'react'
import ReactDom from 'react-dom'

// Nested Components, React Tools

function BookList(){
  return(
    <section>
      <Book />
      <Image />
      <Title></Title>
      <Author></Author>

    </section>
  );
}



const Book = () => {
  return <article>
    this is a book
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


