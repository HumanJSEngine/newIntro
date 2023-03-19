import React from 'react';
import Anime from '../assets/Anime';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Gotop = () => {
    const bt = useRef(null);

    const scrollFn = () => {
        const scY = window.document.documentElement.scrollTop;
        if (scY > 300) {
            bt.current.classList.add('active');
        } else {
            bt.current.classList.remove('active');
        }
        console.log('gototop 버튼', scY);
    };  

    useEffect(() => {
        scrollFn();
        window.addEventListener('scroll', scrollFn);
        return () => {
            window.addEventListener('scroll', scrollFn);
        };
    }, []);

    return (
        <div
            className='gotop'
            ref={bt}
            onClick={() => {
                new Anime(window, { prop: 'scroll', value: 0, duration: 500 });
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
};

export default Gotop;
