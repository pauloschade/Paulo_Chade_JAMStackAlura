import React from 'react';
// import styled from 'styled-components';
import Cabecalho from '../src/Components/Cabecalho';
import Capa from '../src/Components/Capa';
import Projetos from '../src/Components/Projetos';
import Footer from '../src/Components/Footer';

export default function Home() {
  return (
    <div>
      <Capa />
      <Cabecalho />
      <Projetos />
      <Footer />
    </div>

  );
}
