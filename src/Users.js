import React, { useEffect, useState } from 'react';
import { Details } from './Details';
import { List } from './List';

export function Users(){
    const [list, setList] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
      const fetchList = async () => {
        try {
          const response = await fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
          if (!response.ok){
             throw new Error(response.statusText);
          }
          const list = await response.json();
          setList(list);
          } catch(e){
             console.log(e);
          }
      }

      fetchList();
    }, []);
 
    const handleClick = (o) => {
      setInfo(o);
    }
    return(
        <div className="users">
          <List list={list} handleClick={handleClick} info={info.id} />
          <Details info={info} />
        </div>
    );
}
