import React from 'react';
import '../styles/menu.scss';
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Inbox } from '../images/index.svg';
import { ReactComponent as Explore } from '../images/explore.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';
import image from '../images/Icons-Ivan-IG.png';
import { ProfileIcon } from './ProfileIcon';

function Menu(props) {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon" />
            <Notifications className="icon" />
            <ProfileIcon iconSize="small" image={image} />
        </div>
    );
}

export { Menu };