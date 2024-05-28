import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen({ navigation, todos, setTodos }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const toggleDone = (todo) => {
    todo.completed = !todo.completed;
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? todo : t))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome to your Todo app!</Text>
        <Text style={styles.pText}>Let's get things done! 🔥 </Text>
      </View>

      <View style={styles.activeTasksContainer}>
        <Text style={styles.headerText}>Active tasks</Text>
        <FlatList
          data={activeTodos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  navigation.navigate("TodoDetails", { todo: item, setTodos })
                }
              >
                <View>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
                <TouchableOpacity onPress={() => toggleDone(item)}>
                  <Text>☑️</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </>
          )}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.completedText}>Completed tasks</Text>
        <SectionList
          styles={styles.sectionContainer2}
          sections={[{ title: "Completed", data: completedTodos }]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.completedTaskContainer}>
              <Text style={styles.completedTitle}>
                <View>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
              </Text>
              <TouchableOpacity onPress={() => toggleDone(item)}>
                <Text style={styles.greenCheck}>✅</Text>
              </TouchableOpacity>
            </View>
          )}
        ></SectionList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#D6F2EE",
    alignItems: "center",
    height: "100%",
  },
  welcomeTextContainer: {
    paddingBottom: 50,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  pText: {
    fontSize: 15,
    padding: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    marginBottom: 10,
  },
  completedText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "white",
  },
  activeTasksContainer: {
    width: "100%",
  },
  itemText: {
    fontWeight: "bold",
  },
  completedTitle: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6CFFBD",
    marginTop: 10,
  },
  sectionContainer: {
    width: "100%",
    paddingTop: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  itemText: {
    fontWeight: "bold",
  },
  greenCheck: {
    justifyContent: "center",
    alignContent: "center",
  },
  completedTaskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6CFFBD",
    height: 80,
  },
});
