import { Provider } from 'react-redux';
import Body from './component/Body';
import appStore from './reduxStore/appStore';


function App() {
 

  return (
    <Provider store={appStore} >
      <div className="flex flex-col min-h-screen">
        <Body className="flex-grow" />
        
      </div>
    </Provider>
    
       
  )
}

export default App
