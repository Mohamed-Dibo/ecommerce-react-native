import { Provider, useDispatch } from "react-redux";
import { store } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { useSelector } from "react-redux";
import { StyleSheet, Text } from "react-native";
import { useEffect } from "react";
import { loadAuth } from "./src/store/authSlice";
import { useAppDispatch, useAppSelector } from "./src/types/hooks";
import { requestNotificationPermissions} from "./src/utils/notifications";

const Root = () => {
  const dispatch = useAppDispatch();
  const { isHydrated, isLoggedIn } = useAppSelector((state) => state.auth);

//   useEffect(() => {
//   requestNotificationPermissions();
// }, []);

  useEffect(() => {
    dispatch(loadAuth());
  }, []);

  
  if (!isHydrated) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
