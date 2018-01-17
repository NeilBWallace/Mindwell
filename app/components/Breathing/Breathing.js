

import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,Button
} from 'react-native';

import Video from 'react-native-video';

export default class Breathing extends Component {
  static navigationOptions = {
    title: 'Breathing Meditation',
  };
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: false,
  };

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }
  Back(user){
    this.setState({ paused: true })
    this.video.seek(0)
  navigate('Home')
}
  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    const { navigate } = this.props.navigation;
    return (

      <ImageBackground source={require('./bell.jpg')}
      style={{flex:1,width:null,height:null}}> 
        
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
      
   
          <Video
            ref={(ref: Video) => { this.video = ref }}
            /* For ExoPlayer */
            /* source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }} */
            source={require('./breathing.mp3')}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
            playInBackground={true}
            playWhenInactive={true}
            ignoreSilentSwitch={"ignore"}
          />
     <View style={styles.inputsContainer1}>
 
<Button 
       style={styles.fullWidthButton} 
         onPress={() => this.setState({ paused: !this.state.paused })}
         title="Pause"
     /> 

     </View>
   <View style={styles.inputsContainer1}>
   <Button 
       style={styles.fullWidthButton} 
       onPress={()=>{navigate('Home')           
       this.setState({ paused: true })
       this.video.seek(0)
}}
            title="Back"
     /> 
     </View>

        </TouchableOpacity>
      
        <View style={styles.controls}>
          <View style={styles.generalControls}>
          

          <View
      style={styles.inputsContainer1}>
      

</View>

           
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
          </View>
        </View>
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({

  inputsContainer1: {
    margin:20,
    padding:20      },



      fullWidthButton: {
        
        backgroundColor: 'blue',
        height:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
  welcome: {
    fontSize: 40,
    textAlign: 'right',
    margin: 20,
    
   color:'white'
  },
inputsContainer: {
padding:10      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  fullScreen: {
    position: 'absolute',
    top: 20,
    left: 0,
    bottom: 0,
    right: 0,
  },
  fullScreen2: {
    position: 'absolute',
    top: 50,
    left: 0,
    bottom: 50,
    right: 0,
    
  },

  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  t: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center'
    
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});

AppRegistry.registerComponent('Introduction', () => Introduction);
