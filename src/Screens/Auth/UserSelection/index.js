import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../../../assets';

const UserSelectionScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image source={Images.User} style={{width: 150, height: 150}} />
        </View>
        <View style={styles.heading}>
            <Text style={styles.headingText}>Select Registration Type</Text>
        </View>
        <View style={styles.selectionBox}>
        <TouchableOpacity>
            <Text style={styles.headingText}>Company</Text>
        </TouchableOpacity>
        </View>
       <View style={styles.selectionBox}>
       <TouchableOpacity>
            <Text style={styles.headingText}>Employee</Text>
       </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserSelectionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 20,
    height: '100%',
  },
  heading:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:15
  },
  headingText:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
  },
  selectionBox:{
    marginTop:20,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 35,
    paddingHorizontal: 15,
    marginVertical: 10,
    ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowOpacity: 0.5,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 2,
        },
        android: {
            elevation: 5,
            shadowColor: '#000000',
        },
      }),
      display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }

});
