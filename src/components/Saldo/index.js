import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import BottonIcon from '../BottonIcon'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'
import Gap from '../Gap'
const Saldo = () => {
   return (
      <View style={styles.container}>
         <View style={styles.informasiSaldo}>
            <View style={styles.text}>
               <Text style={styles.labelSaldo}>Saldo :</Text>
               <Text style={styles.valueSaldo}>Rp. 100.000</Text>
            </View>
            <View style={styles.text}>
               <Text style={styles.labelPoint}>Antar Point :</Text>
               <Text style={styles.valuePoint}>100 Point</Text>
            </View>
         </View>

         <View style={styles.buttonAksi}>
             <BottonIcon title="Add Saldo"/>
             <Gap width={10}/>
             <BottonIcon title="Get Point"/>
         </View>
      </View>
   )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      padding: 17,
      marginHorizontal: 30,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      marginTop: -windowHeight * 0.05,
      flexDirection: 'row'
   },
   text: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   informasiSaldo: {
      width: '60%',
   },
   labelSaldo: {
      fontSize: 20,
      fontFamily: 'TitilliumWeb-Regular',
   },
   valueSaldo: {
      fontSize: 20,
      fontFamily: 'TitilliumWeb-Bold',
   },
   labelPoint: {
      fontSize: 12,
      fontFamily: 'TitilliumWeb-Regular',
   },
   valuePoint: {
      fontSize: 12,
      fontFamily: 'TitilliumWeb-Bold',
      color: WARNA_UTAMA,
   },
   buttonAksi: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
})
