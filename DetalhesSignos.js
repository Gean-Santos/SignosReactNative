import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import signos from './signo.json'
import { styles } from './Styles'

export default class DetalheSignos extends Component {

    constructor() {
        super()
        this.state = {
            signo: undefined
        }

    }

    componentDidMount() {
        const idSigno = parseInt(this.props.match.params.idSigno, 10)
        this.setState({
            signo: signos
                .filter((signo, key) => idSigno === key)
                .shift()
        })
    }

    render() {
        const { signo } = this.state

        if (!signo) {
            return (
                <View />
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{signo.nome}</Text>
                <Text style={styles.text}>{signo.caracteristica}</Text>
                <Text style={styles.date}>{signo.periodo.join(' até ')}</Text>
                <Button style={styles.button} title='Voltar' onPress={() => this.props.history.push('/')} />
            </View>
        )
    }

}


