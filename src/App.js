import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';

import {
  fetchAllQuestions,
  createQuestion
} from './actions/questions';
import { fetchAllTopics } from './actions/topics';

import Header from './components/Header';
import ModalForm from './components/ModalForm';
import BigJumbotron from './components/BigJumbotron';
import MainContent from './components/MainContent';

function App({
  fetchAllQuestions,
  fetchAllTopics,
  createQuestion
}) {
  const [state, setState] = useState({
    showModalForm: false,
  });

  useEffect(() => {
    fetchAllQuestions();
    fetchAllTopics();
  }, [state]);

  const onShowModalForm = () => {
    setState({
      ...state,
      showModalForm: !state.showModalForm
    })
  };

  const submitForm = (payload) => {
    onShowModalForm();
    createQuestion({
      ...payload,
      answers: []
    })
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <BigJumbotron onShowModalForm={onShowModalForm} />
        <MainContent />
      </Container>

      <ModalForm
        isOpenModal={state.showModalForm}
        onSave={submitForm}
        onToggle={onShowModalForm}
      />
    </div>
  );
}

export default connect(null, {
  fetchAllQuestions,
  fetchAllTopics,
  createQuestion,
})(App);
