import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user)
        {
            auth.signOut();
        }
    }

    return (
        <div className="header">

            <Link to="/">
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">
                <div onClick={handleAuthentication} className="header_option">
                    <Link className='link' to={!user && 'login'}>
                        <div className='header_option_line1'>
                            {user ? `${user.email}` : "Hello Guest"}
                        </div>
                        <div className='header_option_line2'>
                            {user ? "Sign Out" : "Sign In"}
                        </div>
                    </Link>
                </div>

                <div className="header_option">
                    <Link className='link' to='login'>
                        <div className='header_option_line1'>
                            Return
                        </div>
                        <div className='header_option_line2'>
                            & Orders
                        </div>
                    </Link>
                </div>

                <div className="header_option">
                    <Link className='link' to='login'>
                        <div className='header_option_line1'>
                            Your
                        </div>
                        <div className='header_option_line2'>
                            Prime
                        </div>
                    </Link>
                </div>

                <div className="header_optionBasket">
                    <Link className='basket_link' to="/checkout">
                        <ShoppingBasketIcon />
                        <div className="header_option_line2 header_basketcount">{basket?.length}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header