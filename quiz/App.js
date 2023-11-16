import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const perguntas = [
    { pergunta: 'Qual é a soma de 2 + 2?', opcoes: ['3', '4'], respostaCorreta: '4' },
    { pergunta: 'Quanto é 5 multiplicado por 3?', opcoes: ['12', '15'], respostaCorreta: '15' },
    { pergunta: 'Qual é o resultado de 10 - 7?', opcoes: ['2', '3'], respostaCorreta: '3' },
    { pergunta: 'Quanto é 8 dividido por 2?', opcoes: ['3', '4'], respostaCorreta: '4' },
  ];

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(1);

  const handleResposta = (respostaSelecionada) => {
    const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;

    if (respostaSelecionada === respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = perguntaAtual + 1;
    if (perguntas[proximaPergunta]) {
      setPerguntaAtual(proximaPergunta);
    } else {
      alert(`Pontuação: ${pontuacao}/4`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{perguntas[perguntaAtual].pergunta}</Text>
      <View style={styles.botoesContainer}>
        {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
          <Button
            key={index}
            title={opcao}
            color="#ff69b4" 
            onPress={() => handleResposta(opcao)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pergunta: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
