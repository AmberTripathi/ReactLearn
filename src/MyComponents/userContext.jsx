import React from 'react';

const UserContext = React.createContext('Guest');//what you pass as arguement in this will be default value
//if provider doesnt exist, default value is provided to the consumer
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export { UserProvider, UserConsumer };



