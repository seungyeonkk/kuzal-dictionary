import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DefinitionView from './DefinitionView'

const MeaningView = ({meainingInfo}) => {
    console.log("meaningInfo  : ",meainingInfo);

    const [definitionInfos, setDefinitionInfos] = useState([]);

    useEffect(() => {
        setDefinitionInfos(meainingInfo.definitions);
    }, []);

    return(
        <View style={styles.dataSet}>
            <View style={styles.wordClassView}>
                <Text style={styles.wordClass}>{meainingInfo ? meainingInfo.partOfSpeech : ''}</Text>
            </View>

            {definitionInfos.map((definitionInfo) => (

                <DefinitionView definitionInfo={definitionInfo}/>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({


    wordClassView: {
        backgroundColor: '#eee',

    },
    wordClass: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10
    },

    dataSet: {
        marginTop: 20
    },

});

export default MeaningView;
