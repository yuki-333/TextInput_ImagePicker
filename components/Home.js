import React from "react";
import {
    Text,
    View,
    Button,
    TextInput,
    Image,
  } from 'react-native';
import styles from "../styles/style0";

import ImagePicker from 'react-native-image-picker';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: "",
          image: null,
        }
    }

    showPicker = () => {
      // import ImagePicker from 'react-native-image-picker';
  
      let options = {
        title: '画像を選択',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      }
  
      ImagePicker.showImagePicker(options, (response)  => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          console.log(response.uri)
          this.setState({image: response.uri})
        }
      });
    }


    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.word}</Text>
            <View>
            {this.state.image && <Image style={{width: 300, height: 300}} source={{uri: this.state.image}} />}
            </View>
            <TextInput
                placeholder="write here..." 
                value={this.state.text}
                onChangeText={(text) => this.setState({text: text})}
            />
            <Button
                 title="TextInput"
                 // onPress={()=> this.props.onAddToDo(this.state.inputText)}
                // onPress={() => this.setState({text: ""})}
                 onPress={this.doAction.bind(this)}
            />
            <Button
              title="ImagePicker"
              onPress={this.showPicker} 
            />
        </View>
      );
    }
    doAction = () => {
      this.setState({text: ''});
      this.props.onAddWord(this.state.text)
    }
  }

export default Home;



