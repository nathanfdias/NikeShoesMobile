import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../../assets/banner.png')} style={styles.image}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})