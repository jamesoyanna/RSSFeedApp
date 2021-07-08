import React from 'react';
import FeedList from '../../components/FeedList/FeedList';

import { styled } from 'baseui';

const Wrapper = styled('div', () => ({
  display: 'flex',
  backgroundColor: '#fff',
  padding: '35px 20px',
  height: '100%',
}));


const ContentBox = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default function SettingsCard() {
  return (
    <Wrapper>
      <ContentBox>
        <FeedList />
      </ContentBox>
    </Wrapper>
  );
}
