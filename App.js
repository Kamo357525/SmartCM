import Main from './src/main'
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';

const App = () => {
    return (

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Main/>
            </PersistGate>
        </Provider>
    );
};

export default App;

