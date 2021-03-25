/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from 'react-lottie';
import styled, { css } from 'styled-components';
import { Text } from '../Text';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import successAnimation from './anim/sus.json';
import errorAnimation from './anim/error.json';

const Input = styled.input`
  border : 1px solid #E4C068;
  height: 45px ;
  width:100%;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-content: center;
`;

const InputBig = styled.input`
  border : 1px solid #E4C068;
  height: 130px ;
  width:100%;
  padding: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center
  border-radius: 3px;
  padding: 5px;
  width: 11rem;
  background: #E4C068;
  color: white;
  border: 2px solid white;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #FFFFFF;
  padding: 20px;
  ${breakpointsMedia({
    xs: css`
    width: 350px;
  `,
    md: css`
    width: 900px;
  `,
  })}
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    email: 'seu email',
    nome: 'seu nome',
    message: 'mensagem...',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  // eslint-disable-next-line max-len
  const isFormInvalid = userInfo.email.length === 0 || userInfo.nome.length === 0 || userInfo.message.length === 0;

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          email: userInfo.email,
          name: userInfo.nome,
          message: userInfo.message,
        };

        fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível enviar a mensagem');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <div>
        <Input
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <Input
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <InputBig
          placeholder="Mensagem..."
          name="message"
          value={userInfo.message}
          onChange={handleChange}
        />
      </div>

      <Container>
        <Button
          disabled={isFormInvalid}
        >
          <Text maxWidth="50%" variant="description">
            enviar
          </Text>
        </Button>

        {isFormSubmited && submissionStatus === formStates.DONE && (
        <Lottie
          width="70px"
          height="70px"
          options={{ animationData: successAnimation, loop: false }}
        />
        )}

        {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Lottie
          width="70px"
          height="70px"
          options={{ animationData: errorAnimation, loop: false }}
        />
        )}
      </Container>
    </Form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...propsDoModal}>
      <FormContent ghost />
    </div>
  );
}
