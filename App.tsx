import 'react-native-gesture-handler';
import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';

import { Platform } from 'react-native';
import { Provider } from 'react-redux';

//Third parties
import FlashMessage from 'react-native-flash-message';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import RootNavigator from './src/navigation';
import { PaperProvider } from 'react-native-paper';
import { PermissionsAndroid } from 'react-native';
import { useLoadResources } from 'hooks/useLoadResources';
import ErrorBoundaryFallback, {
  handleJSErrorForErrorBoundary,
} from 'components/ErrorBoundaryFallback';

if (Platform.OS === 'android') {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
}

const App = () => {
  const { loading } = useLoadResources();

  if (loading) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <ErrorBoundary
            onError={handleJSErrorForErrorBoundary}
            FallbackComponent={ErrorBoundaryFallback}
          >
            <RootNavigator />
            <FlashMessage position="top" statusBarHeight={40} floating />
          </ErrorBoundary>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
