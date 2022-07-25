import { createStore } from 'state-pool';
import { ReactSession } from 'react-client-session';

var axios = require('axios');
export default function StudentTable() {

    const loadData = () => {
        const URL = "http://localhost:8765/REGISTRATION-SERVICE/test";
        //const URL = "http://localhost:8081/students";
        let token = ReactSession.get("token");
        console.log("token:\n" + token);
        /*
        const instance = axios.create({
            baseURL: URL,
            timeout: 6000,
            headers: {
                'Authorization': "Bearer "+token,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Max-Age': '1800',
                'Access-Control-Allow-Headers': 'content-type',
                'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'

        }
          });
        //  instance.defaults.headers.common['Authorization'] = "Bearer "+token;
        let res = instance.get("/")
                    .then(response=> {
                        console.log(response.data);
                        return response.data;
                    })
                    .catch(function(error){
                        //alert(error)
                        console.log(error);
                    }
                    
                );
        
         return res;       
         */
        const headers = {
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Max-Age': '1800',
                'Access-Control-Allow-Headers': 'content-type',
                'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
            }
        }
        var config = {
            method: 'get',
            url: 'http://localhost:8765/REGISTRATION-SERVICE/test',
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true',
              'Access-Control-Max-Age': '1800',
              'Access-Control-Allow-Headers': 'content-type',
              'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
            },
            Authorization: `Bearer ${token}`
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div>
            Table
            <div>{console.log('data' + loadData())}</div>
        </div>
    );
}