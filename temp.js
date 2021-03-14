import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView} from 'react-native';

export default function app() {

    const [text, onChangeText] = React.useState("searching~~~");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputView}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <View style={styles.listIcon}>
                    <Icon name="document-text-outline" size={30}/>
                </View>
            </View>

            <View style={styles.textView}>
                <View style={styles.wordView}>
                    <Text style={styles.word}>HELLO</Text>
                    <Icon name="bookmark-outline" size={20}/>
                </View>
                <View style={styles.pronunciationView}>
                    <Text>pronunciation</Text>
                    <Icon style={styles.pronunciationIcon} name="caret-forward-circle-outline" size={20}/>
                </View>
            </View>

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

            <View style={styles.footer}>
                <Text>advertisement</Text>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 10
    },

    textInputView: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#6ED4C8'
    },

    textView: {
        flex: 1,
        backgroundColor: '#eee',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    wordView: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    pronunciationView: {
        flex: 1,
        margin: 10,
        flexDirection: 'row'
    },

    dataView: {
        flex: 6,
        backgroundColor: '#6ED4C8'
    },

    input: {
        borderWidth: 1,
        margin: 20,
        flex:5
    },

    listIcon:{
        marginTop:23,
        flex:1
    },

    word: {
        fontSize: 20,
        fontWeight: "bold"
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

    footer:{
        flex:1,
        backgroundColor: '#fff'
    },

    pronunciationIcon:{
        marginLeft: 2
    }
});
