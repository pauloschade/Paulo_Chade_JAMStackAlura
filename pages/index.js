import React from 'react';
import Cabecalho from '../src/Components/Cabecalho';
import Capa from '../src/Components/Capa';
import Projetos from '../src/Components/Projetos';

export default function Home() {
  return (
    <div>
      <Capa />
      <Cabecalho />
      <Projetos />
    </div>

  );
}

