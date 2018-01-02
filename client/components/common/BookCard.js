import React from 'react';
import { Link } from 'react-router-dom';

import leanstart from '../../media/lean start.jpg';

const BookCard = (props) => {
  const { book } = props
  return (
    <div className="book col s12 m3 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img  src={book.image}/>
        </div>
        <div className="card-content">
          <p><Link to={'/book/' + book.id} className="btn">Borrow</Link></p>
        </div>
      </div>
      <div className="book-info center-align">
        <div className="book-title"><span>{book.title} </span></div>
        <div className="book-author">by <span>{book.author}</span></div>
        <div className="book-rating"> 
          <span><i className="material-icons ">star</i></span> 
          <span><i className="material-icons ">star</i></span>
          <span><i className="material-icons ">star</i></span>
          <span><i className="material-icons ">star</i></span>
          <span><i className="material-icons ">star_half</i></span>
        </div>
      </div>
    </div>
    
  );
}

export default BookCard;