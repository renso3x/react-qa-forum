import React from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';

import { setTopic } from '../actions/topics';

const Sidebar = ({
  topics,
  selectedTopic,
  setTopic
}) => {
  const onSelectTopic = (topic) => {
    setTopic(topic);
  }

  return (
    <div>
      <ListGroup className="aside__container">
        <ListGroupItem
          tag="a"
          href="#"
          className={selectedTopic === 'all' && "aside__active"}
          onClick={() => onSelectTopic('all')}
        >
          All Questions
        </ListGroupItem>
      </ListGroup>

      <ListGroup className="aside__container">
        <ListGroupItem tag="b">Featured Topics</ListGroupItem>
        {
          topics.map((topic, id) => {
            return (
              <ListGroupItem
                key={id}
                tag="a"
                href="#"
                className={selectedTopic === `${topic}` && "aside__active"}
                onClick={() => onSelectTopic(topic)}
              >{topic}</ListGroupItem>
            )
          })
        }
      </ListGroup>
    </div>
  );
}

Sidebar.propTypes = {
  topics: PropTypes.array,
  selectedTopic: PropTypes.string,
  setTopic: PropTypes.func
};

const mapStateToProps = ({ questions }) => ({
  topics: questions.topics,
  selectedTopic: questions.selectedTopic
})

export default connect(mapStateToProps, {
  setTopic
})(Sidebar);