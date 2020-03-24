import React from 'react';
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BigJumbotron = ({
  onShowModalForm,
  selectedTopic
}) => {
  return (
    <Row>
      <Col xs="12">
        <div>
          <Jumbotron className="lead">
            <h1>{selectedTopic}</h1>
            <p>
              <Button color="primary" onClick={onShowModalForm}>Ask a Question</Button>
            </p>
          </Jumbotron>
        </div>
      </Col>
    </Row>
  );
}

BigJumbotron.propTypes = {
  onShowModalForm: PropTypes.func,
  selectedTopic: PropTypes.string
};

const mapStateToProps = ({ questions }) => {
  return {
    selectedTopic: questions.selectedTopic === 'all' ? `Let's Talk Finance` : questions.selectedTopic
  }
}

export default connect(mapStateToProps)(BigJumbotron);