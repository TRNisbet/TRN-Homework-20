import React, {useState} from 'react';
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link as ReactLink } from "react-router-dom";
export default function Header() {
    
    return (
        <div className="header-area">
            <div className="container mt-60">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-12 px-0">
                        <div className="menu-area">
                            <Navbar collapseOnSelect expand="lg" className="p-0">
                                <div className="logo-area">
                                    <ReactLink to="/" className="nav-link">
                                        <p class="text-white">TRN</p>
                                    </ReactLink>
                                </div>
                                
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto align-items-center">
                                        <ReactLink to="/" className="nav-link">Home</ReactLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        
    )
}