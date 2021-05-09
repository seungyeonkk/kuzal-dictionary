import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DefinitionView from './DefinitionView';
import {theme} from "../../style/theme";


const MeaningView = ({meainingInfo, search}) => {

    const [definitionInfos, setDefinitionInfos] = useState([]);

    useEffect(() => {
        setDefinitionInfos(meainingInfo.definitions);
    }, []);

    return(
        <View style={styles.dataSet}>
            <View style={styles.wordClassView}>
                <Text style={styles.wordClass}>{meainingInfo ? "* " + meainingInfo.partOfSpeech : ''}</Text>
            </View>

            {meainingInfo.definitions.map((definitionInfo, index) => (

                <DefinitionView definitionInfo={definitionInfo} key={index} search={search}/>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({


    wordClassView: {

    },

    wordClass: {
        fontSize: 20,
        color: theme.white,
        fontWeight: 'bold'
    },

    dataSet: {
        marginTop: 20
    },

});

export default MeaningView;
