import React from 'react';
import { useForm } from 'react-hook-form';
//import { gql } from '@apollo/client';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import DrawerBox from 'components/DrawerBox/DrawerBox';
import { Row, Col } from 'components/FlexBox/FlexBox';
import {
  Form
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from 'components/FormFields/FormFields';

//  const GET_FEEDS = gql`
//   query getFeeds($title: String) {
//    feeds(title: $tile) {
//       id
//       title
     
//     }
//   }
// `;

type Props = any;
const FeedPage: React.FC<Props> = () => {
  const {handleSubmit } = useForm();
 

  const onSubmit = () => {
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
          <Row>
            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Add Feed</FormLabel>
                  <Input
                    placeholder="title"
                    name="title"
                  />
                </FormFields>
                <FormFields>
                  <Input
                    name="url"
                     placeholder="Enter url"
                  />
                </FormFields>
              </DrawerBox>
            </Col>
            
          </Row>
          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: () => ({
                  width: '30%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Subscribe
          </Button>
          
      </Form>           
    </>
  );
};
export default FeedPage;
