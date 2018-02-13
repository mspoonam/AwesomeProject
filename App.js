import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default class App extends React.Component {

  state = {
    profile:[],
    loading:true 
  }

  componentDidMount() {
      this.getUsers()
  }

  async getUsers(){
    this.setState({loading:true})
    const apiData = await axios.get(`https://randomuser.me/api?results=5`)
    this.setState({profile: apiData.data.results,loading:false})
    
  }

  

  render() {
    // const name = this.state.profile[0].login.username

    const {profile, loading ,name ,friend } = this.state

    
   

    if (loading){
      return (
        <View style={styles.container}>
          <Text>Coming soon</Text>
        </View>
      );
    }


     return (
    <View style={styles.container}>
        <Text>{profile[0].login.username}</Text>
    </View>
    )

    // else if (profile.length>0){

    // return (
    //   <View style={styles.container}>
    //     <Text>{profile[0].login.username}</Text>
    //   </View>
    // );

    // } else {

    //   return (
    //     <View style={styles.container}>
    //       <Text>{'poonam'}</Text>
    //     </View>
    //   );
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
