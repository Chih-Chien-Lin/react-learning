import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function BookList(){
  return(
    <section className='booklist'>
      <Book />

    </section>
  );
}


const author = 'Elin Hilderbrand'
const Book = () => {
  const title = 'Golden Girl'
  return <article className='book'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/81a5IRbOR4L._AC_UL200_SR200,200_.jpg" alt=""/>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
  </article>
}


ReactDom.render(<BookList/>,document.getElementById('root'));


