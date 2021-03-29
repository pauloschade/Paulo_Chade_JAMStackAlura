import React from 'react';
// import styled from 'styled-components';
import Cabecalho from '../src/Components/Cabecalho';
import Capa from '../src/Components/Capa';
import Projetos from '../src/Components/Projetos';
import Footer from '../src/Components/Footer';
import Modal from '../src/Components/Modal';
import FormCadastro from '../src/Components/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <div>
      <Capa setOpen={() => {
        setModalState(true);
      }}
      />
      <Projetos />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro
            propsDoModal={propsDoModal}
          />
        )}
      </Modal>
    </div>

  );
}
