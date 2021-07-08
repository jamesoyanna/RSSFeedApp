import React from 'react';
import { Row, Col } from 'components/FlexBox/FlexBox';
import StoryListCard from "../../components/StoryListCard/StoryListCard"
import FeedPage from '../FeedPage/FeedPage';
const Dashboard = () => {
  return (
    <>
      <Row>
        <Col lg={6}>
             <FeedPage />
                </Col>
                  <Col lg={4}>
                   <StoryListCard /> 
                  </Col>
                </Row>
       </>
  );
};

export default Dashboard;
