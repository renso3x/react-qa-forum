import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CardContent from './CardContent';

const ContentList = ({
  questions,
  selectedTopic
}) => {
  const [state, setState] = useState({
    selectedTab: 'recent'
  })

  const onSelectTab = (selectedTab) => {
    setState({
      ...state,
      selectedTab
    })
  }

  let filteredQuestions = questions.map(q => q);
  if (state.selectedTab === 'unanswered') {
    filteredQuestions = questions.filter(q => q.answers.length === 0 && q);
  } else if (state.selectedTab === 'trending') {
    filteredQuestions = questions.sort((a, b) => a.viewed > b.viewed);
  }

  return (
    <div>
      <div className="content__list_navbar">
        <ListGroup horizontal>
          <ListGroupItem
            tag="a"
            href="#"
            className={state.selectedTab ===  'recent' && 'content__list_navbar_active'}
            onClick={() => onSelectTab('recent')}>Recent Activity</ListGroupItem>
          <ListGroupItem
            tag="a"
            href="#"
            className={state.selectedTab ===  'unanswered' && 'content__list_navbar_active'}
            onClick={() => onSelectTab('unanswered')}>Unanswered</ListGroupItem>
          <ListGroupItem
            tag="a"
            href="#"
            className={state.selectedTab ===  'trending' && 'content__list_navbar_active'}
            onClick={() => onSelectTab('trending')}>Trending</ListGroupItem>
        </ListGroup>
      </div>

      {
        filteredQuestions.map((question, k) => (
          <CardContent key={k} content={question} />
        ))
      }
    </div>

  );
}

ContentList.propTypes = {
  questions: PropTypes.array,
  selectedTopic: PropTypes.string
};

const mapStateToProps = ({ questions }) => ({
  questions: questions.questions.reverse(),
  selectedTopic: questions.selectedTopic
})

export default connect(mapStateToProps)(ContentList);