import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => (
  <div>
    <ListGroup>
      <ListGroup.Item>My Dashboards</ListGroup.Item>
      <ListGroup.Item>1</ListGroup.Item>
      <ListGroup.Item>2</ListGroup.Item>
      <ListGroup.Item>3</ListGroup.Item>
      <ListGroup.Item>4</ListGroup.Item>
    </ListGroup>
    <div style={{ margin: '50px 0', textAlign: 'center' }}>
      <p>Account Settings</p>
    </div>
  </div>
);

export default Sidebar;
