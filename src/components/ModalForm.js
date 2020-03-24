import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Badge,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const ModalForm = (props) => {
  const {
    className,
    isOpenModal,
    onSave,
    onToggle
  } = props;

  const [state, setState] = useState({
    question: '',
    content: '',
    tagInput: '',
    tags: [],
  });

  const onSubmit = () => {
    onSave(state);
  }

  const onChangeField = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onAddTags = () => {
    setState({
      ...state,
      tagInput: '',
      tags: [...state.tags, state.tagInput]
    })
  }

  const removeTags = (tag) => {
    setState({
      ...state,
      tags: state.tags.filter(t => t !== tag)
    })
  }

  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        className={className}
      >
        <ModalHeader toggle={onToggle}>Ask a Question</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input type="text" name="question" placeholder="What question do you have?" onChange={onChangeField} />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="content"
              placeholder="Tell us more about your questions"
              rows={5}
              onChange={onChangeField}
            />
          </FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="tagInput"
              placeholder="Tag relevant topics so that your questions will be directed to the right people!"
              onChange={onChangeField}
            />
            <InputGroupAddon addonType="append" >
              <Button color="secondary" onClick={onAddTags}>Add Tags</Button>
            </InputGroupAddon>
          </InputGroup>
          <ListGroup horizontal className="tags__lists">
            {state.tags.map((tag, i) =>
              <ListGroupItem><Badge key={i} onClick={() => removeTags(tag)}>{tag}</Badge></ListGroupItem>
            )}
          </ListGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>Save</Button>{' '}
          <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;