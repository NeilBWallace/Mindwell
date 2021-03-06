import React, {Component} from 'react';
import {TouchableOpacity,Button,AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight,ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import CustomButton2 from './CustomButton2';
export default class Home extends Component{

    static navigationOptions = ({
        navigation})=>({
        title: 'Mindwell Meditation',
        headerRight:
        <TouchableOpacity style={{backgroundColor:'orange',margin:10,padding:10}} onPress={()=>navigation.navigate("More")}><Text style={{color:'#ffffff'}}>More</Text>
       </TouchableOpacity>
  
      

      });
    

    constructor(){
        super();
    }

   
    More(user){
     navigate('More');
    }
    

    Introduction(user){
      navigate('Introduction');
    }

    Guided(user){
        
           navigate('Guided');
        
    }

    Breathing(user){
      navigate('Breathing');
        
    }




    
    render(){
        const { navigate } = this.props.navigation;
        return(
            <ImageBackground source={require('./bell.jpg')}
            style={{flex:1,width:null,height:null}}> 
          
          
          
          <View style={{flex:1}}>
          

         <View style={styles.inputsContainer} >
             </View>


           <View
        style={styles.inputsContainer}>
         <CustomButton 
		text="5 min Introduction"
		onPress={()=>navigate('Introduction')}
		/>
     
     </View>
     <View
   style={styles.inputsContainer}>
   
   <CustomButton 
		text="10 min Breathing"
		onPress={()=>navigate('Breathing')}
		/> 
</View>
<View
      style={styles.inputsContainer}>
        <CustomButton 
		text="20 min Guided Meditation"
		onPress={()=>navigate('Guided')}
		/>

</View>



    </View>


<View>
<Text style={styles.welcome2}></Text>
            <Text style={styles.welcome2}>Dhamma Nikethanaya Buddhist Academy 2018</Text>
          
          </View>

    </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 20,
        
       color:'#5e2838'
      },
    inputsContainer: {
padding:10      },

welcome2: {
    fontSize: 15,
    textAlign: 'center',
    
    margin: 5,
    position: 'absolute', left: 0, right: 0, bottom: 5,
   color:'#5e2838'
  },
  welcome3: {
    fontSize: 15,
    textAlign: 'center',
    
    color:'#5e2838'
  },




inputsContainer: {
    padding:20      },
inputsContainer2: {
    padding:70      },


      fullWidthButton: {
        backgroundColor: 'blue',
        height:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

      fullWidthButton2: {
        backgroundColor: 'green',
        height:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

      
      fullWidthButtonText: {
        fontSize:24,
        color: 'white'
       
      },
    
    
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('Home', () => Home);