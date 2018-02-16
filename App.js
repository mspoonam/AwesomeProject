import React from 'react';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';
import axios from 'axios'

const Profile = props => {
  return(  
    <Text backgroundColor="cyan">
    {
      `${props.profile.login.username}`
    }
    </Text>)
}

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
    // const apiLogin = await axios.get('')
    const apiData = await axios.get(`https://randomuser.me/api?results=100`)
    this.setState({profile: apiData.data.results,loading:false})
    
  }

  

  render() {
    const {profile, loading ,name ,friend } = this.state

    if (loading){
      return (
        <View style={styles.container}>
          <Text>Coming soon</Text>
        </View>
      );
    }

     return (

      // This Works 
      // <View style={styles.container}>
      //   <Profile profile={profile[0]}/>
      // </View>
      // But this doesnot work
      <ScrollView>
       <View style={styles.container}>
         <Profile profile={profile[0]}/>
       </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
