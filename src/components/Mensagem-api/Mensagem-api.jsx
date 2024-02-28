import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/dados')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }, []);
    
    
    return (
      <div>
      <h5>Texto da API:</h5>
      <p>{dados}</p>

    </div>
  );
}




export default Api;
