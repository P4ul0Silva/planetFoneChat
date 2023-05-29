import { useEffect, useState } from "react";
import { socket } from "../../services/api";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global/GlobalContext";


export const Dashboard = ()  => {
    const [isConnected, setIsConnected] =  useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([])

    const {logout} = useContext(GlobalContext)

  useEffect(()  => {

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onFooEvent(value: any) {
    //   setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () =>  {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    }
  })

    return (
        <div>
            <p>Client ID: { `${socket.id}`}</p>
            <p>Connected: {`${socket.connected}`}</p>
            <textarea name="" id="">
            </textarea>
            <button onClick={() => socket.connect()}>Connect</button>
            <button onClick={() => socket.disconnect()}>Disconnect</button>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}