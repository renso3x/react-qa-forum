
import React from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';

const Answer  = ({
  profile
}) => {
  return (
    <Media className="answer__container">
      <Media body>
        <Media heading>
        {profile.answer}
        </Media>
        {profile.name} - {profile.group}
      </Media>
    </Media>
  );
};

Answer.propTypes = {
  profile: PropTypes.object,
}

export default Answer;