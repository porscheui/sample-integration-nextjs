import React from 'react';
import { color, text } from '@porsche-design-system/utilities';
import './utilities.module.scss';
import Head from 'next/head';
import Header from '../components/header';

const UtilitiesPage = (): JSX.Element => {
  return (
    <div className="pageLayout">
      <Head>
        <title>NextJS sample project - Utilities</title>
      </Head>
      <Header />
      <div style={text.medium}>JS utilities</div>
      <div style={{ width: 50, height: 50, background: color.brand }} />
      <div className="textSizeMedium">Scss utilities</div>
      <div style={{ width: 50, height: 50 }} className="backgroundColorPds" />
    </div>
  );
};

export default UtilitiesPage;
