import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoDetails({ navigation, route }) {
  const { todo, setTodos } = route.params;

  const handleDone = () => {
    todo.completed = true;
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? todo : t))
    );
    navigation.goBack();
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Task: {todo.title}</Text>
        <Text style={styles.description}>Description: {todo.description}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.deleteBtn}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDone}>
            <Text style={styles.doneBtn}>Done</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>Date: {todo.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    backgroundColor: "#D6F2EE",
    alignItems: "center",
    height: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    padding: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  contentContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 60,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  doneBtn: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
    marginBottom: 20,
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
    marginBottom: 20,
  },
  date: {
    marginTop: 20,
    marginBottom: 0,
  },
});
