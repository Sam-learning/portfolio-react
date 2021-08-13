import React from 'react';
import './Menu.scss'

const Menu = ({open}) => {
    return (
        <div className={'menu ' + (open && 'active')}>
            <ul>
                <li>
                    <a href='#intro'>Home</a>
                </li>
                <li>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='#testi'>Testimonial</a>
                </li>
                <li>
                    <a href='#works'>Works</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;