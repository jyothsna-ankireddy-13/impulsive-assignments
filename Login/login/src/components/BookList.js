import React from 'react';
import './BookList.css';
import Sidebar from './Sidebar';

function BookList() {
  return <div >
      <Sidebar/>
      <div className="container">
        <h2>Book List</h2>
            <div className="item">
                <div className="book-item">
                    <div className="book-img"><img src="./harry.jpg" alt=""/></div>
                    <div className="bookname">
                        <h5>Harry Potter</h5>
                        <p>By J.K rolling</p>
                        <p>created at-2021-07-23 16:24:04</p>
                    </div>
                </div>
                <div className="edit">
                    <button className="btn btn-primary">Edit</button>
                </div>
                
            </div>
            <div className="divider"></div>
            
            <div className="item">
                <div className="book-item">
                    <div className="book-img"><img src="./harry.jpg" alt=""/></div>
                    <div className="bookname">
                        <h5>Harry Potter</h5>
                        <p>By J.K rolling</p>
                        <p>created at-2021-07-23 16:24:04</p>
                    </div>
                </div>
                <div className="edit">
                    <button className="btn btn-primary">Edit</button>
                </div>
                
            </div>
            <div className="divider"></div>
            
            <div className="item">
                <div className="book-item">
                    <div className="book-img"><img src="./harry.jpg" alt=""/></div>
                    <div className="bookname">
                        <h5>Harry Potter</h5>
                        <p>By J.K rolling</p>
                        <p>created at-2021-07-23 16:24:04</p>
                    </div>
                </div>
                <div className="edit">
                    <button className="btn btn-primary">Edit</button>
                </div>
                
            </div>
            <div className="divider"></div>
           
            <div className="item">
                <div className="book-item">
                    <div className="book-img"><img src="./harry.jpg" alt=""/></div>
                    <div className="bookname">
                        <h5>Harry Potter</h5>
                        <p>By J.K rolling</p>
                        <p>created at-2021-07-23 16:24:04</p>
                    </div>
                </div>
                <div className="edit">
                    <button className="btn btn-primary">Edit</button>
                </div>
                
            </div>
            
            
      </div>
  </div>;
}

export default BookList;
