import React from 'react';
import Lottie from 'react-lottie';
import { Text } from '../Text';

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
    usuario: 'omariosouto1002',
    nome: 'Mario Souto',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
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

            throw new Error('Não foi possível cadastrar o usuário agora :(');
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

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <input
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <input
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Text
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Text>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <div>
          <Lottie
            width="150px"
            height="150px"
            // config={{ animationData: , loop: false, autoplay: true }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </div>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <div
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            // sconfig={{ animationData:, loop: false, autoplay: true }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </div>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <div {...propsDoModal}>
      <FormContent />
    </div>
  );
}
