import * as React from 'react';
import { StyleSheet, TextInput, Text, ScrollView  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

const dataArr = [
    { jpKanji: "健やか", jpHiragana: "すこやか", mgl: "Тэнхлүүн, чийрэг, эрүүл саруул" },
    { jpKanji: "健康", jpHiragana: "けんこう", mgl: "Эрүүл мэнд, эрүүл энх" },
    { jpKanji: "禁止", jpHiragana: "きんし", mgl: "Хорио, хориг" },
    { jpKanji: "条件", jpHiragana: "すこやか", mgl: "Болзол, нөхцөл" },
    { jpKanji: "鏡", jpHiragana: "かがみ", mgl: "Толь" },
    { jpKanji: "はっきり", jpHiragana: "はっきり", mgl: "Тов тодорхой" },
    { jpKanji: "生きる", jpHiragana: "いきる", mgl: "Амьдрах, амьд байх" },
    { jpKanji: "いや", jpHiragana: "いや", mgl: "дургүй, муухай, аягүй" },
    { jpKanji: "弱い", jpHiragana: "よわい", mgl: "Сул доройd" }
];

class TextInputComponent extends React.Component  {
    constructor(props)  {
        super(props);
        this.state = {
            filteredWord : []
        };
    }

    onChange(value)  {
        let cnt = 0;
        let word = [];
        this.props.data.map((item) => {


            if(item.jpKanji.includes(value) || item.jpHiragana.includes(value) || item.mgl.includes(value))  {
                word.push(item);
                this.setState({filteredWord: word });
            }
            else cnt++;
        });

        if(cnt == this.props.data.length)  {
            this.setState({filteredWord: [] });
        }
    }

    render()  {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Search"
                    onChangeText={(value) => {this.onChange(value)}}
                />
                <ScrollView style={styles.ScrollView}>
                    {
                        this.state.filteredWord.map((item) => {
                            return (
                                <Text style={styles.Text}>
                                    { item.jpKanji }
                                    - <Text style={{fontSize:13}}>
                                        { item.jpHiragana }
                                    </Text>
                                    - <Text style={{fontSize:13}}>
                                        { item.mgl }
                                    </Text>
                                </Text>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

export default function TabOneScreen() {
    return (
        <TextInputComponent data = { dataArr } />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    TextInput:  {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width:"90%",
        padding:8,
        borderRadius:5,
        marginVertical: 20
    },
    ScrollView: {
        // backgroundColor: "red",
        width: "90%"
    },
    Text:  {
        backgroundColor: "green",
        marginVertical: 2,
        padding: 10,
        fontSize: 18
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
