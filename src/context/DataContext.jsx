
import React,{createContext, useState} from 'react';

export const DataContext = createContext([]);

const DataContextProvider = ({children}) => {
    const [visible, setVisible] = useState()
    const [onDetail, setOnDetail] = useState(false)

  return (
  <DataContext.Provider
  value = {{
    visible,
    setVisible,
    onDetail,
    setOnDetail
    }}    
  >
      {children}
  </DataContext.Provider>
  );
};

export default DataContextProvider;