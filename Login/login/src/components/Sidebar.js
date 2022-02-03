import React from 'react';
import {Navbar} from 'react-bootstrap'
import {Sidebardata} from './Sidebardata';
import '../App.css'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return( 
    <div>
        <Navbar className="navbar" bg="primary" variant="dark">
            <div className="container-fluid">
                <Navbar.Brand href="#home">
                    Assignment
                </Navbar.Brand>
            </div>
            
        </Navbar>
        <div className="sidebar">
            <div className="menu">
                <ul className="menu-items">
                    {Sidebardata.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                   
                </ul>
            </div>
        </div>
        
    </div>
  );
}
