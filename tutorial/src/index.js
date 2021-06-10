import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// Variables
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5IRbOR4L._AC_UL200_SR200,200_.jpg",
    title: 'Golden Girl',
    author: 'Elin Hilderbrand asd'
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/916I7ZLbwPL._AC_UL200_SR200,200_.jpg",
    title: 'After the Fall: Being American in the World We\'ve Made',
    author: 'Mr. Ben Rhodes'
  }
]
// to render a list, you need to render it to html tags before using it
const names = ['john','peter','jack']
const newNames = names.map((name)=>{
  return<h1>{name}</h1>
  console.log(name);
})
console.log(newNames)
function BookList(){
  return(
    <section className='booklist'>
      {newNames}
    </section> 
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


 