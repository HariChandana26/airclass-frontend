import './index.css';
import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import VideoSection from 'components/VideoSection';

function MasterclassPage() {
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const { selectedClassInfo } = global;

  return (
    <>
      <Header isHome />

      <VideoSection videoContent={selectedClassInfo} />
    </>
  );
}

export default MasterclassPage;
