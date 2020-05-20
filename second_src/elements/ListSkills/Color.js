import React, {useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../assets/color';
import ColorBox from './ColorBox';


const Colors = () => {
    const [colorPallet, setColorPallet] = useState([]);
    const [isRefrashing, setRefreshing] = useState(false);

    const fetchColorPalet = useCallback(
       async () => {
        const resolt =  await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
            if(resolt.ok){
                const paletts = await resolt.json();
                setColorPallet(paletts);
            }
        },
        [],
    );
    useEffect(()=>{
        fetchColorPalet(); 
    }, [])


    const _refresh = useCallback( async ()=> {
        setRefreshing(true);
        await fetchColorPalet();


        setTimeout(()=> {
            setRefreshing(false);
        }, 1000)
    }, []);



return (
    <SafeAreaView>
    <FlatList
            style={styles.container}
            data={COLORS}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
            <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
            )}
            ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
        />
    </SafeAreaView>
)
            }

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
        paddingBottom: 10,
      },
      heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      }
  })

  
export default Colors;
