import React from 'react';
import { Row, Col } from 'reactstrap'

import Sidebar from './Sidebar';
import ContentList from './ContentList';

const MainContent = () => {
  return (
    <div>
      <Row>
        <Col xs="3">
          <Sidebar />
        </Col>
        <Col xs="9">
          <ContentList />
        </Col>
      </Row>
    </div>
  );
}

export default MainContent;