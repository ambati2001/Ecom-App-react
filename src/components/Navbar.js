import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../logo.svg';
import phoneLogo from '../img/iconfinder_Phone_3336937.svg';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


export default class Navbar extends Component{
    render(){
        return(
            // <div>
            //      <h3>Hello from Navbar </h3>
            // </div>
            
            <NavWrraper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*
                https://cdn0.iconfinder.com/data/icons/3-colors-outline/500/Phone-128.png
                */}
                <Link to='/'>
                    <img src={phoneLogo} alt="img" className="navbar-brand phoneLogo" />
                
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>

            </NavWrraper>
        );
    }
}

const NavWrraper=styled.nav`
background:var(--mainBlue);
&:hover{
    color: var(--lightBlue)!important;
}
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    //1rem=16px
    text-transform:Captalize;
    
}
`;