import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function Details(props) {
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchDetails = async () => {
          setLoading(true);
          try {
            const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`);
            if(!response.ok) {
              throw new Error(response.statusText);
            }
            const user = await response.json();
            setUser(user);
          } catch(e){
              console.log(e);
            }finally{
                setLoading(false);
             }
        }
      
        fetchDetails();
    }, [props.info.id]);

   return(
       <>
        {isLoading && <p className="loading">Loading...</p>}
        {(Object.keys(user).length === 0) ? null :
        <div className="details">
         <img src={user.avatar} alt="avatar" />
         <p className="name">{user.name}</p>
         <p className="detail">City: {user.details.city}</p>
         <p className="detail">Company: {user.details.company}</p>
         <p className="detail">Position: {user.details.position}</p>
        </div>
        }
       </>
   );
}

Details.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
}
