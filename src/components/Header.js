/** @format */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsMoon, BsSun } from 'react-icons/bs';
import gitimg from '../assets/images/profileimg.jpg';

export const Header = ({
    setPage,
    setOpen,
    open,
    isDarkMode,
    toggleDarkMode,
}) => {
    return (
        <header className='header'>
            <div className='inner'>
                <nav className='nav'>
                    <span className='header-logo' onClick={() => setPage(0)}>
                        <img src={gitimg} alt='' />
                        <span className='dark' onClick={() => toggleDarkMode()}>
                        {isDarkMode ? <BsMoon /> : <BsSun />}
                    </span>
                    </span>
                    
                    <ul className='gnb'>
                        <li onClick={() => setPage(0)}>
                            <span>Home</span>
                        </li>
                        <li onClick={() => setPage(1)}>
                            <span>Profile</span>
                        </li>
                        <li onClick={() => setPage(2)}>
                            <span>Skill</span>
                        </li>
                        <li onClick={() => setPage(3)}>
                            <span>Portfolio</span>
                        </li>
                        <li onClick={() => setPage(4)}>
                            <span>Education</span>
                        </li>
                        <li onClick={() => setPage(5)}>
                            <span>Vision</span>
                        </li>
                    </ul>
                    
                    <span
                        className='mobile-bt'
                        onClick={() => {
                            open ? setOpen(false) : setOpen(true);
                        }}
                    >
                        {open ? (
                            <FontAwesomeIcon icon={faXmark} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header;
