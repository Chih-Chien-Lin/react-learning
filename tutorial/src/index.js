import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// Variables
const books = [
  {
    id:1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5IRbOR4L._AC_UL200_SR200,200_.jpg",
    title: 'Golden Girls',
    author: 'Elin Hilderbrand '
  },
  {
    id:2,
    img: "https://images-na.ssl-images-amazon.com/images/I/916I7ZLbwPL._AC_UL200_SR200,200_.jpg",
    title: 'After the Fall: Being American in the World We\'ve Made',
    author: 'Mr. Ben Rhodes'
  }
]
// to render a list, you need to render it to html tags before using it

function BookList(){
  return(
    <section className='booklist'>{books.map((book)=>{
      const {img, title,author} = book;
      // return (
      //   <div>
      //     <h3>{title}</h3>
      //     <h6>{author}</h6>
      //   </div>
      // );
      return(
        // {...book}functional Component - Spread Operator: means all the properties from book objects will be passed to the prop, no longer an object variable
        <Book key={book.id} {...book}></Book>
      )
    })}</section> 
  );
}


const Book = (props) => {
  const {img, title, author} = props
  console.log(props.children)
  return <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>

    </article>
  }


ReactDom.render(<BookList/>,document.getElementById('root'));


 