import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import HomeScreen from "./components/HomeScreen";
import AddTodoScreen from "./components/AddTodoScreen";
import TodoDetails from "./components/TodoDetails";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo App"
          options={({ navigation }) => ({
            title: "Start",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Add new todo", { setTodos })}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            ),
          })}
        >
          {(props) => <HomeScreen {...props} todos={todos} setTodos={setTodos}/>}
        </Stack.Screen>
        <Stack.Screen
          name="Add new todo"
          component={AddTodoScreen}
          options={{ presentation: "modal", title: "Add new todo" }}
        />
        <Stack.Screen
          name="TodoDetails"
          component={TodoDetails}
          options={{ title: "Todo Details" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
