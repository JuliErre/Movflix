
import React,{createContext, useState} from 'react';

export const DataContext = createContext([]);

const DataContextProvider = ({children}) => {
    const [visible, setVisible] = useState()
    const [detail, setDetail] = useState(false)

  return (
  <DataContext.Provider
  value = {{
    visible,
    setVisible,
    detail,
    setDetail,
    }}    
  >
      {children}
  </DataContext.Provider>
  );
};

export default DataContextProvider;