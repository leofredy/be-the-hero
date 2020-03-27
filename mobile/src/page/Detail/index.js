/*Instalado pacote de msg automatica, expo install expo-mail-composer*/
//import * as MailComposer from 'expo-mail-composer';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text , Linking} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';
import logoImg from '../../assets/logo.png';
 

export default function Detail()
{
    const navigation = useNavigation();
    const route = useRoute();
    const incidents = route.params.incident;
    const message = `Olá ${incidents.name}, estou entrando em contato pois gostaria de ajudar no caso ${incidents.title} com o valor de ${incidents.value}`;
    function navigateBack()
    {
        navigation.goBack();
    }

    function sendMail()
    {
        /*MailComposer.composeAsync({
            subject: `Herói do caso: ${incidents.description}`,
            recipients: [incidents.email],
            body: message,
        })*/
    }

    function sendWhatsapp()
    {
        Linking.openURL(`whatsapp://send?phone=${incidents.whatsapp}&text=${message}`);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incidents.name} de {incidents.city}/{incidents.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incidents.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{incidents.value}</Text>

            </View>


            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}