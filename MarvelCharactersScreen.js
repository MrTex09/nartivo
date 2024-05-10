import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Button, Linking } from 'react-native';
import axios from 'axios';
import md5 from 'md5';
import { moderateScale } from 'react-native-size-matters';

const publicKey = '6a0b1ca7ed770776ae2faa4000bdc5f9';
const privateKey = 'c999346c10201352829367f07c7089bd74b03a30';

function MarvelCharactersScreen({ navigation }) {  // Asegúrate de que navigation sea pasado como prop
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timestamp = new Date().getTime();
        const hash = md5(timestamp + privateKey + publicKey);
        // Generar un número aleatorio para empezar la paginación
        const offset = Math.floor(Math.random() * 1500); // Asumiendo que hay más de 1500 personajes disponibles
        const url = `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        axios.get(url)
            .then(response => {
                setCharacters(response.data.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching Marvel characters:', error);
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image
                source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>
                    {item.description || `Available in ${item.series.available} series. Check out more on Marvel.com!`}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <FlatList
                        data={characters}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                    <Button
                        title="Ve a la pantalla principal"
                        onPress={() => navigation.navigate('Home')}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(10)
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: moderateScale(10),
        marginBottom: moderateScale(10),
        borderRadius: moderateScale(5)
    },
    image: {
        width: moderateScale(100),
        height: moderateScale(100),
        marginRight: moderateScale(10),
        borderColor: "red" ,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color : "red",
        marginBottom: moderateScale(5)
    },
    description: {
        fontSize: moderateScale(14),
        color: 'grey'
    }
});

export default MarvelCharactersScreen;