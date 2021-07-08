import React, {useContext} from 'react';
import { AreaContext } from '../AreaContext/AreaContext';
import './Navigation.css';
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'


function Navigation() {

    const [cart, setCart] = useContext(AreaContext);

    return (
        <nav className="Navigation">
            <ul>
                <Link to="/" className="Link">Home</Link>
                <Link to="/About" className="Link">About</Link>
                <Link to="/Products" className="Link">Products</Link>
                <Link to="/cart" className="Items"><Icon name='cart' />{cart.length}</Link>
            </ul>
          </nav>  
    )
       
}

export default Navigation;
