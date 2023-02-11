import React, { Component } from "react";
import { app, getDatabase, ref, set } from "../config/firebase";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Inputs extends Component {
  state = {
    username: "",
    email: "",
    text: "",
  };

  handleusername = (text) => {
    this.setState({ username: text });
  };
  handleName = (text) => {
    this.setState({ name: text });
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  Username = (username, email, name) => {
    alert("username: " + username + " email: " + email + " name: " + name);
};
login = (username,email,name) => {
   // alert("usuario: " + username + " email: " + email+ " name: " + name);
    const database = getDatabase(app);
    const id = crypto.randomUUID().toString();
    set(ref(database, `users/${id}`), {
      username: username,
      email: email,
      name: name
    });                
    alert("Guardado Correctamente");  
    //this.setState(username: '', email: '',name: '')
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Ingresa Usuario:</Text>
        <TextInput
        id="txtUsername"
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="usuario"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handleusername}
        />
        <Text style={styles.label}>Ingresa el Correo Electronico:</Text>
        <TextInput
        id="txtEmail"
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="email"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <Text style={styles.label}>Ingresa el Nombre:</Text>
        <TextInput
        id="txtName"
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="nombre"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handleName}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.login(this.state.username, this.state.email, this.state.name)
            
          }
        >
          <Text style={styles.submitButtonText}> Enviar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#881518",
    borderWidth: 2,
    borderRadius: 4
  },
  submitButton: {
    backgroundColor: "#881518",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 18
  },
  submitButtonText: {
    color: "white",
    bold:   true,
    textAlign: "center",
    fontWeight: "bold"
    
  },
  label:{
    color:"#881518",
    fontWeight: "bold"

  }
});