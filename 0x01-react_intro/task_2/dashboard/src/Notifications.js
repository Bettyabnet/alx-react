import React from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
