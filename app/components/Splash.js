import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingText: {
    color: '#fff',
    fontSize: 20
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

class Splash extends Component {

  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('Timeline');
      }, 2000 );
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./../images/splash.png')} style={styles.image}/>
        <ActivityIndicator size={'small'} />   
        <Text style={styles.loadingText}>جاري التحميل ..</Text>
      </View>
    );
  }
}

export default Splash;
