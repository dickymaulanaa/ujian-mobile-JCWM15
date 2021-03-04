import React, { useState } from 'react'
import { View} from 'react-native'
import styles from '../style/authStyle'
import {useDispatch, useSelector} from 'react-redux';
import { loginAction } from '../redux/action';
import {Button, Input, Item, Text} from 'native-base';



const LoginScreen = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.authReducer);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <View>
          <Item style={styles.itemStyle}>
            <Input
              placeholder="Username"
              onChangeText={(e) => setUsername(e)}
              style={styles.inputStyle}
              placeholderTextColor="gray"
            />
          </Item>
          <Item style={styles.itemStyle}>
            <Input
              placeholder="Password"
              onChangeText={(e) => setPassword(e)}
              secureTextEntry
              style={styles.inputStyle}
              placeholderTextColor="gray"
            />
          </Item>
        </View>
        <View>
          <Button
            disabled={loading}
            full
            onPress={() => dispatch(loginAction({username, password}))}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextColor}>LOGIN</Text>
          </Button>
        </View>

        </View>
    )
}

export default LoginScreen
