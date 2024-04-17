import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import { Container, Form } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';

const Nav = () => {
    return (
        <div>
                <Navbar bg="" className='' variant="">
                    <NavLink style={{color:'black'}} to={SHOP_ROUTE}>OptiTredeHub</NavLink>
                    <div className='header_input_div'>
                    <Form.Control
                        className='header_input'
                        placeholder='Поиск...'
                    />
                </div>
                </Navbar>
        </div>
    )
}

export default Nav