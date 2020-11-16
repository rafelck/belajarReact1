import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import { ImageHeader, Logo } from '../../assets/images'
import { Saldo } from '../../components'

const Home = () => {
   return (
      <View>
         <ImageBackground source={ImageHeader} style={styles.header}>
            <Image source={Logo} style={styles.logo}></Image>
            <View style={styles.hello}>
               <Text style={styles.selamat}>Selamat Datang,</Text>
               <Text style={styles.username}>Rafelino</Text>
            </View>
         </ImageBackground>

         <Saldo />

      </View>
   )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
   page: {
      flex: 1,
      backgroundColor: 'white',
   },
   header: {
      width: windowWidth,
      height: windowHeight * 0.3,
      paddingHorizontal: 30,
      paddingTop: 10,
   },
   logo: {
      width: windowWidth * 0.25,
      height: windowHeight * 0.06,
   },
   hello: {
      marginTop: windowHeight * 0.03,
   },
   selamat: {
      fontSize: 24,
      fontFamily: 'TitilliumWeb-Regular',
   },
   username: {
      fontSize: 22,
      fontFamily: 'TitilliumWeb-Bold',
   },
})
