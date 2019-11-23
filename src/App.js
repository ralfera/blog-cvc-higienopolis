import React from 'react';
import Layout from './Layout'
import OfertaHero from './pages/Index';

export default function App(props) {
  console.log(props)
  return (
      <Layout>
        <OfertaHero />
      </Layout>
  );
}
