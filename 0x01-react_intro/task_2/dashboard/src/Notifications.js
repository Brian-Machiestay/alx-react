import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";
import icon from "../src/close-icon.png";

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{marginLeft: 'auto', float: 'right', marginTop: 0}}  aria-label='Close' onClick={console.log('Close button has been clicked')}>
                <img src={icon} alt="close" width={10} height={10} />
            </button>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}

export default Notifications;