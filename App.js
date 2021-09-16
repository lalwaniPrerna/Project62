import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import db from './config';
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      present: 0,
      absent: 0,
    };
  }
  presentNo() {
    var presents = db.ref('Count/' + '/');
    presents.update({
      presentNo: 1,
    });
  }
  absentNo() {
    var absents = db.ref('Count/' + '/');
    absents.update({
      absentNo: 1,
    });
  }
  presentCount = () => {
    this.setState({ present: this.state.present + 1 });
  };
  absentCount = () => {
    this.setState({ absent: this.state.absent + 1 });
  };

  render() {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>School Attendence App</Text>
        </View>
        <TouchableOpacity style={[styles.read, { backgroundColor: 'pink' }]}>
          <Text style={styles.buttonText}>Anjali</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.read,
            { backgroundColor: 'red', marginTop: -50, marginLeft: 100 },
          ]}
          onPress={this.absentCount}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.read,
            { backgroundColor: 'green', marginTop: -50, marginLeft: 200 },
          ]}
          onPress={this.presentCount}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.read, { backgroundColor: 'lavender' }]}>
          <Text style={styles.buttonText}>Rupin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.read,
            { backgroundColor: 'red', marginTop: -50, marginLeft: 100 },
          ]}
          onPress={this.absentCount}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.read,
            { backgroundColor: 'green', marginTop: -50, marginLeft: 200 },
          ]}
          onPress={this.presentCount}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.read, { backgroundColor: 'lightblue' }]}>
          <Text style={styles.buttonText}>Aish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.read,
            { backgroundColor: 'red', marginTop: -50, marginLeft: 100 },
          ]}
          onPress={this.absentCount}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.read,
            { backgroundColor: 'green', marginTop: -50, marginLeft: 200 },
          ]}
          onPress={this.presentCount}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text>Present count:{this.state.present}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text>Absent count:{this.state.absent}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  read: {
    justifyContent: 'center',

    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 70,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
  textContainer: {
    backgroundColor: 'lightgreen',
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
