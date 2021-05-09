import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SynonymsView from './SynonymsView';
import {theme} from "../../style/theme";

const DefinitionView = ({definitionInfo, search}) => {

    const [synonymsInfos, setSynonymsInfos] = useState([])

    useEffect(() => {
        if(definitionInfo.synonyms)
            setSynonymsInfos(definitionInfo.synonyms)
    }, []);

    return(
        <View>
            <View style={styles.meaningView}>
                <Text style={styles.meaning}>{definitionInfo ? definitionInfo.definition : ''}</Text>
            </View>
            <View style={styles.exampleView}>
                <Text style={styles.example}>{definitionInfo.example ? "\""+ definitionInfo.example + "\"": ''}</Text>
            </View>
            <View style={styles.synonymsView}>
                <Text style={styles.synonymsLabel}>{synonymsInfos.length > 0 ? 'Synonyms: ' : ''}</Text>

           {/*     {synonymsInfos.map((synonymsInfo, index) => (
                    <SynonymsView synonymsInfo={synonymsInfo} key={index}/>
                ))}*/}

                <SynonymsView synonymsInfo={synonymsInfos} search={search}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    meaningView: {
        marginTop: 10
    },

    meaning: {
        fontSize: 18,
        color: theme.white,
        fontWeight: '400'
    },

    exampleView: {
        marginTop: 13
    },

    example: {
        fontSize: 17,
        color: theme.grey
    },

    synonymsView: {
        marginTop: 10,
    },
    synonymsLabel: {
        color: theme.white,
        fontSize:16
    }
})



export default DefinitionView;
