import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar .js'; // Asegúrate de ajustar la ruta según la ubicación de tu Sidebar

const Dashboard = ({ title, subtitle, children }) => (
  <Container className="mt-4">
    <Row>
      <Col md={2}>
        <Card className="h-100">
          <Card.Body>
            <Sidebar />
          </Card.Body>
        </Card>
      </Col>
      <Col md={10}>
        <Card>
          <Card.Header>
            <Row>
              <Col><h5>{title}</h5></Col>
              <Col>
                <h6>{subtitle}</h6>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {children}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
