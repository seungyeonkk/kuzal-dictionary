import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
    AdMobBanner,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';



const footer = () => {

    useEffect(() => {
        setTestDeviceIDAsync('EMULATOR');
    }, []);

    const adUnitID = Platform.select({
        ios: 'ca-app-pub-4450487084115682/8644242127',
        android: 'ca-app-pub-4450487084115682/5217144767',
    });

    return(
        <View>
            <AdMobBanner 
                         adUnitID={adUnitID}
                         servePersonalizedAds
                         onDidFailToReceiveAdWithError={(e) => console.log(e)}
            />
        </View>
    )

};

const styles = StyleSheet.create({

});

export default footer;
