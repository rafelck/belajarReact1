import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Home, HomeActive, Akun, AkunActive, Pesanan, PesananActive } from "../../assets";
import { WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant'

const Tabitem = ({ isFocused, onPress, onLongPress, label }) => {

   const Icon = () => {
      if (label === "Home") return isFocused ? <HomeActive /> : <Home />

      if (label === "Akun") return isFocused ? <AkunActive /> : <Akun />

      if (label === "Pesanan") return isFocused ? <PesananActive /> : <Pesanan />

      return <Home />
   }

   return (
      <TouchableOpacity
         onPress={onPress}
         onLongPress={onLongPress}
         style={ styles.container}
      ><Icon />
         <Text style={ styles.text(isFocused)}>
            {label}
         </Text>
      </TouchableOpacity>
   )
}

export default Tabitem

const styles = StyleSheet.create({
   container:{
      alignItems: "center",
   },
   text:(isFocused) =>({
      fontSize: 13,
      color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
      marginTop: 1
   })
})
