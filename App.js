import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Avatar
          containerStyle={styles.avatar}
          rounded
          size={150}
          source={{
            uri: 'https://s5.static.brasilescola.uol.com.br/be/2021/10/lobo.jpg',
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Input
          label={'E-mail'}
          style={styles.paddingInput}
          placeholder="Digite seu e-mail"
          leftIcon={{ type: 'font-awesome', name: 'at' }}
        />
        <Input
          label={'Senha'}
          style={styles.paddingInput}
          placeholder="Digite sua senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
        />
        <Button title={'Entrar'} />
        <Button
          title={'Criar conta'}
          type={'clear'}
          titleStyle={{ color: 'red' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '20px',
    justifyContent: 'center',
  },
  avatar: {
    alignSelf: 'center',
  },
  paddingInput: {
    padding: '10px',
  },
});

export default Flex;
