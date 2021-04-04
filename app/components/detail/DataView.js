import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const DataView = ({wordInfo}) => {

    //console.log('word : ',wordInfo[0].word);
    return(
        <View style={styles.dataView}>
            <ScrollView>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

                <View style={styles.dataSet}>
                    <View style={styles.wordClassView}>
                        <Text style={styles.wordClass}>noun</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaning}>An utternce of 'hello'; a greeting</Text>
                    </View>
                    <View style={styles.exampleView}>
                        <Text style={styles.example}>'she was greeting polite nods and hellos from people'</Text>
                    </View>
                    <View style={styles.synonymsView}>
                        <Text style={styles.synonyms}>Synonyms: </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )

};



const styles = StyleSheet.create({


    dataView: {
        flex: 6,
        backgroundColor: '#6ED4C8'
    },

    wordClassView: {
        backgroundColor: '#eee',

    },
    wordClass: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10
    },

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
    },

    synonyms: {
        fontSize: 10,
        marginTop: 3,
        marginLeft: 10
    },

    dataSet: {
        marginTop: 20
    },

});

export default DataView
