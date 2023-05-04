import React from 'react';
import './AppFooter.css';
import {Typography} from 'antd';

function AppFooter(){
    return(
        <div className='AppFooter'>
    <Typography.Link href='tel:+234 8101120394'>+234 8101120394</Typography.Link>
    <Typography.Link href='https://www.google.com' target={'_blank'}>Privacy policy</Typography.Link>
    <Typography.Link href='https://www.google.com' target={'_blank'}>Terms of use</Typography.Link>

        </div>
    )
}

export default AppFooter;