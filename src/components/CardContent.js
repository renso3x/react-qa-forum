import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  Badge,
  CardLink,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Button,
  CardHeader
} from 'reactstrap';
import Answer from './Answer';

const CardContent = ({
  content
}) => {
  return (
    <div className="content__list_cards">
      <Card>
        <CardHeader>
          <ListGroup horizontal className="tags__lists">
            {content.tags.map((tag, k) => {
              return (
                <ListGroupItem key={k}><Badge>{tag}</Badge></ListGroupItem>
              )
            })}
          </ListGroup>
        </CardHeader>
        <CardBody>
          <CardLink href="#"><b>{content.question}</b></CardLink>
          {
            content.answers.length > 0 && <Answer profile={content.answers[0]} />
          }
        </CardBody>
        <CardFooter className="text-muted">
          <Button color="link">{content.answers.length} Answers</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardContent;