import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconGetPoint, IconGetSaldo } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'
const BottonIcon = ({ title }) => {
   const Icon = () => {
      if (title === 'Add Saldo') return <IconGetSaldo />;
      if (title === 'Get Point') return <IconGetPoint />;

      return <IconGetSaldo />
   }


   return (
      <TouchableOpacity style={styles.container}>
         <View style={styles.icon}>
            <Icon />
         </View>
         <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}

export default BottonIcon

const styles = StyleSheet.create({
  
   icon: {
      backgroundColor: WARNA_SEKUNDER,
      padding: 7,
      borderRadius: 10,
   },
   text:{
      fontSize: 10,
      fontFamily: 'TitilliumWeb-Regular',
      textAlign: 'center'
   }
})
