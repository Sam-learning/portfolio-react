import React from 'react';
import './Topbar.scss'
import MailIcon from '@material-ui/icons/Mail';

const Topbar = ({open, setOpen}) => {

    return (
        // 記得topbar後面要留一個空格
        <div className={'topbar ' + (open && 'active')}>
            <div className="wrapper">

                {/* 連到要去的component #裡面放id */}
                <a href='#intro' className='logo'>Intro</a>
                <div className="mail">
                    <MailIcon className='mail-icon' />
                    <span>dingchiun@gmail.com</span>
                </div>
                
                <div className="rightbox" onClick={()=>setOpen(!open)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;