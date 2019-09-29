import React from "react";
import {
    Text,
    View,
    Button,
    TextInput,
  } from 'react-native';
import styles from "../styles/style0";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: "",
        }
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.word}</Text>
            <TextInput
                placeholder="write here..." 
                value={this.state.text}
                onChangeText={(text) => this.setState({text: text})}
            />
            <Button
                 title="Button1"
                 // onPress={()=> this.props.onAddToDo(this.state.inputText)}
                // onPress={() => this.setState({text: ""})}
                 onPress={this.doAction.bind(this)}
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



