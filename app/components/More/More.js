import React, {Component} from 'react';
import {Linking,Button,AppRegistry, Text, View, BackgroundImage,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import CustomButton2 from './CustomButton2';
export default class More extends Component{

    
    constructor(props){
        super(props);
       
    }
    static navigationOptions = {
        title: 'Find out More',
      };
      
    Back(user){
        navigate('Home')
  }
    render(){
        const { navigate } = this.props.navigation;
        return(
           
           <View style={styles.MainContainer}>  
           <Text style={styles.Header}> 
             About Us
             </Text>
                 <Text style={styles.T}>

            Mindwell is a mediation app designed by the Dhamma Nikethanaya Buddhist Academy based in
            Letchworth Garden City, UK and is a registered charity (Reg No 1116187)
             </Text>
             <Text style={styles.T}>
            More information on the courses can be found at
            </Text>
            <Text style={{color: 'blue'}}

    onPress={() => Linking.openURL('http://www.buddhistacademy.com')}>

http://www.buddhistacademy.com

</Text>
            
            
            
      
          
            <Text style={styles.T}>
            Dhamma Nikethanaya Buddhist Academy was set up in April 2004 by Venerable Akurala Samitha and located 
            in the beautiful town of Letchworth Garden City in Hertfordshire, UK.
            </Text>
            <Text style={styles.T} >
            Our vision is to create an atmosphere to experience what is beyond the horizon of "come and believe"
            as we want you to experience it for yourself.
            </Text>
            <Text style={styles.T}>
            Every being wishes to live happily and be at peace with oneself. We can help you with your search
            for this. Meditation is a key tool in order to develop mindfulness to bring you back in to the present moment.
            </Text>



    
            <View style={styles.MainContainer}>


             <CustomButton2
              onPress={()=>navigate('Home')}
                text="Go Back"
            />
            </View>
    </View>
      
        );
    }
}

const styles = StyleSheet.create(
    {
    
     
    Header:
    {
      fontSize:20,
      padding:5,
    },
    Text:
    {
      padding:10
    },
     MainContainer:
     {
        
        flex:1,
        margin: 20
      
     },
    
     TextStyle:
     {
        fontSize: 23,
        textAlign: 'center',
        color: '#000',
     },
     buttonContainer: {
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 10,
      margin:40,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25
    }
    
    });
AppRegistry.registerComponent('More', () => More);