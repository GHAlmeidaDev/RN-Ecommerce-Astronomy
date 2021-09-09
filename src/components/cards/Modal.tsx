import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import Button from '../../components/forms/form_elements/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import NetInfo from '@react-native-community/netinfo';


const ModalComponent: React.FC = () => {

    const [visible, setVisible] = useState(false)


    const verify = () => {
        NetInfo.fetch().then((res) => {
            if(res.isConnected === false) {
                setVisible(true)
            } else {
                setVisible(false)
            }
    })

    }
    useEffect(() => {
      verify();
    }, [])

    return (
    <Modal visible={visible} style={styles.modal}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Erro !!</Text>
            <Text style={styles.modalText}>
                Oops! Parece que você está sem conexão com internet
            </Text>
            
            <Text style={{fontSize: 50}}>📡</Text>
            
            <Button 
                onPress={verify}
                title="Tentar Novamente"
                variant='PRIMARY'
            />
            
        </View>
  </Modal>
    )
}


  const styles = StyleSheet.create({
    // ...
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 40,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: '600',
    },
    modalText: {
      fontSize: 18,
      color: '#555',
      marginTop: 14,
      textAlign: 'center',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#000',
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
  });

 export default ModalComponent