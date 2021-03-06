import { PButton, PIcon, PLinkPure } from '@porsche-design-system/components-react';
import React from 'react';
import Header from '../components/header';
import Head from 'next/head';
import { applyPolyfills, defineCustomElements as definePorscheNavigation } from '@porschehn/navigation/loader';

applyPolyfills().then(() => {
  if (typeof window !== 'undefined') {
    definePorscheNavigation(window);
  }
});

const PhnHeaderPage = (): JSX.Element => (
  <div className="pageLayout">
    <Head>
      <title>NextJS sample project - PHN Header</title>
    </Head>
    <phn-header env="preview" style={{ position: 'absolute', left: 0, right: 0 }} />
    <div style={{ paddingTop: 180 }}>
      <Header />
      <div>
        <PButton>Some PButton</PButton>
      </div>
      <div>
        <PLinkPure>Some PLinkPure</PLinkPure>
      </div>
      <div>
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </div>
  </div>
);

export default PhnHeaderPage;
