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
      <Book title='random title' number={22} author='hello'/>

    </section>
  );
}


// if use props, need to make sure all the variables are defined, or it'll be undefined error.
const Book = (props) => {
  console.log(props);
  return <article className='book'>
    <img src={props.img} alt=""/>
    <h1>{props.title}</h1>
    <h4>{props.author.toUpperCase()}</h4>
    <p>{props.job}</p>
    <p>{props.title}</p>
  </article>
}


ReactDom.render(<BookList/>,document.getElementById('root'));


 