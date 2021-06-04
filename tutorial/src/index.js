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


function BookList(){
  return(
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book />

    </section>
  );
}



const Book = (props) => {
  console.log(props);
  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <p>{props.job}</p>
    <p>{props.title}</p>
  </article>
}


ReactDom.render(<BookList/>,document.getElementById('root'));


 