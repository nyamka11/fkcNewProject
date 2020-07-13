    import * as React from 'react';
    import { StyleSheet } from 'react-native';

    import EditScreenInfo from '../components/EditScreenInfo';
    import { Text, View } from '../components/Themed';
    import DropDownPicker from 'react-native-dropdown-picker';


    class DropDownComponent extends React.Component  {
        constructor(props)  {
            super(props);
            this.state = {
                items: ["aaaa"]
            };
        }

        render()  {

            let items = [];
            for(let i=0; i<100; i++)  {
                items.push({label: 'Item '+i, value: 'item'+i})
            }

            return(
                <DropDownPicker
                    style={{ width:"90%", display: "flex" }}
                    items={items}
                    defaultIndex={ 5 }
                    // dropDownDisplay ={{ height:"100" }}
                    containerStyle={{display: "flex"}}
                    activeItemStyle={{ alignItems: 'center' }}
                    activeLabelStyle={{ color: 'red' }}
                    containerStyle={{ height: 40 }}
                    dropDownMaxHeight = { 400 }
                    dropDownStyle = {{ width:"90%" }}
                    itemStyle={{ backgroundColor: "green",  float:"left", alignItems: 'flex-start' }}
                    // onChangeItem={item => console.log(item.label, item.value)}
                />
            )
        }
    }

    export default function TabOneScreen() {
      return (
        <View style={styles.container}>
            <DropDownComponent/>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 20
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
