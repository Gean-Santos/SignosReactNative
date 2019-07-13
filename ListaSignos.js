import React, { Component } from 'react'
import { View, Button, Image } from 'react-native'
import signos from './signo.json'
import { styles } from './Styles'


export default class ListaSignos extends Component {
    onPress = (idSigno) => {
        this.history.push(`/${idSigno}`)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imagem}
                    source={require("./images.jpeg")} />
                {signos.map((signo, key) => (
                    <Button
                        style={styles.button}
                        key={key}
                        title={signo.nome}
                        onPress={() => this.props.history.push('/' + key)} />
                ))}

            </View>
        )
    }
}


