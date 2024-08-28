import React from 'react';
import ReactDOM from 'react-dom';

export function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>PortalDemo</h1>,
    document.getElementById('portal-root') // Assuming a <div id="portal-root"> exists in the DOM
  )
}

export default PortalDemo;