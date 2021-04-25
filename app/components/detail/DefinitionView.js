import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SynonymsView from './SynonymsView'


const DefinitionView = ({definitionInfo}) => {

    const [synonymsInfos, setSynonymsInfos] = useState([])

    useEffect(() => {
        if(definitionInfo.synonyms)
            setSynonymsInfos(definitionInfo.synonyms)
    }, []);

    console.log("definitionInfo  : ",definitionInfo)

    return(
        <View>
            <View style={styles.meaningView}>
                <Text style={styles.meaning}>{definitionInfo ? definitionInfo.definition : ''}</Text>
            </View>
            <View style={styles.exampleView}>
                <Text style={styles.example}>{definitionInfo ? definitionInfo.example : ''}</Text>
            </View>
            <View style={styles.synonymsView}>
                <Text>Synonyms : </Text>
                {synonymsInfos.map((synonymsInfo) => (
                    <SynonymsView synonymsInfo={synonymsInfo}/>
                ))}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    meaningView: {
        backgroundColor: '#fff',
    },

    meaning: {
        fontSize: 10,
        marginTop: 3,
        marginLeft: 10
    },

    exampleView: {
        backgroundColor: '#eee',
    },

    example: {
        fontSize: 10,
        color: '#665852',
        marginTop: 3,
        marginLeft: 10

    },

    synonymsView: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    },

    synonyms: {
        fontSize: 10,
        marginTop: 3,
        marginLeft: 10
    },
})



export default DefinitionView;
