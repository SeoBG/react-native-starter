
import { StyleSheet, Text, View, Alert, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, Item, Form, Input, Button, Label, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signIn} from '../API/firebaseMethods';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    signIn(email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Container style={styles.container}>

        <View style={styles.formViewContainer}>
            <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', }}>
                <Image
                    style={{ width: 100, height: 100, }}
                    source={require('../assets/make-money-logo.png')}
                />
            </View>
            <Form>

                <Item floatingLabel style={{ marginLeft: 10, marginRight: 10 }}>
                    <Label>Email</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </Item>

                <Item floatingLabel style={{ marginLeft: 10, marginRight: 10 }}>
                    <Label>Password</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}

                    />
                </Item>

            </Form>
            <Button
                style={{ marginTop: 30, backgroundColor: 'green', borderRadius:5 }}
                full
                rounded
                primary
                onPress={handlePress}
            >
                <Text style={{ color: 'white' }}> Login </Text>

            </Button>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 12, textDecorationLine: 'underline' }}>
                        Forgoten password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={{ fontSize: 12 }}>
                        New user? <Text style={{ fontWeight: 'bold' }}>SIGN UP</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footer}>

            <Text style={{ textAlign: 'center', marginTop: 50 }}> Or login with </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                <Button
                    style={{ marginTop: 10, marginRight: 10, borderRadius:5 }}
                    full
                    rounded
                    primary
                    onPress={handlePress}
                >
                    <Icon type='FontAwesome' name='facebook-official' />
                </Button>

                <Button
                    style={{ marginTop: 10, marginLeft: 10,borderRadius:5 }}
                    full
                    rounded
                    danger
                    onPress={handlePress}
                >
                    <Icon type='FontAwesome' name='google' fontSize={20} />
                </Button>
            </View>
        </View>
    </Container>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
},
formViewContainer:{
    flex:2,
    justifyContent:'flex-end'
},
footer: {
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1
}
});
