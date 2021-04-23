import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {Input, Menu} from 'antd'

const AppLayout = ({children}) => {
 return (
     <div>
         <Menu mode="horizontal">
             <Menu.Item>
                <Link href="/"><a>nodebird</a></Link>
             </Menu.Item>
             <Menu.Item>
                <Link href="/profile"><a>profile</a></Link>
             </Menu.Item>
             <Menu.Item>
                 <Input.Search/>
             </Menu.Item>
             <Menu.Item>
                <Link href="/signup"><a>signup</a></Link>
             </Menu.Item>
         </Menu>
         {children}
     </div>
 );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout;