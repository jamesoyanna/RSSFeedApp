import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  SidebarWrapper,
  NavLink,
  MenuWrapper,
  Svg,
} from './Sidebar.style';
import {
  DASHBOARD
} from 'settings/constants';

import { DashboardIcon } from 'assets/icons/DashboardIcon';

const sidebarMenus = [
  {
    name: 'Dashboard',
    path: DASHBOARD,
    exact: true,
    icon: <DashboardIcon />,
  },
 
];

export default withRouter(function Sidebar({
  refs,
  style,
  onMenuItemClick,
}: any) {
  return (
    <SidebarWrapper ref={refs} style={style}>
      <MenuWrapper>
        {sidebarMenus.map((menu: any, index: number) => (
          <NavLink
            to={menu.path}
            key={index}
            exact={menu.exact}
            activeStyle={{
              color: '#00C58D',
              backgroundColor: '#f7f7f7',
              borderRadius: '50px 0 0 50px',
            }}
            onClick={onMenuItemClick}
          >
            {menu.icon ? <Svg>{menu.icon}</Svg> : ''}
            {menu.name}
          </NavLink>
        ))}
      </MenuWrapper>
    </SidebarWrapper>
  );
});
