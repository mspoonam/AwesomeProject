
import axios from 'axios'

 async function getUsers(){
    const apiData = await axios.get(`https://randomuser.me/api?results=5`);
    // console.log(apiData.data.results);
    const friend = apiData.data.results[0]
    console.log(friend)
    console.log(friend.login.username)
}


getUsers()
