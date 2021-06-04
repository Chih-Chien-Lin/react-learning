import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// Variables
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81a5IRbOR4L._AC_UL200_SR200,200_.jpg",
  title: 'Golden Girl',
  author: 'Elin Hilderbrand'
}
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/916I7ZLbwPL._AC_UL200_SR200,200_.jpg",
  title: 'After the Fall: Being American in the World We\'ve Made',
  author: 'Ben Rhodes'
}

function BookList(){
  return(
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>In laboris enim aliqua consectetur.</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
 
    </section> 
  );
}


const Book = ({img, title, author, children}) => {
  return <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  }


ReactDom.render(<BookList/>,document.getElementById('root'));


 