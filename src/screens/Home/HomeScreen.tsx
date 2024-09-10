import AsyncStorage from "@react-native-async-storage/async-storage";
import {Input} from "@rneui/themed";
import {Icon, Text} from "@src/components/Atoms";
import {Layout} from "@src/components/Layouts";

import {COLORS} from "@src/constants/theme";
import {StackProps} from "@src/navigation/types";
import React, {useEffect, useState} from "react";
import {Alert, FlatList, StyleSheet, View} from "react-native";

const HomeScreen: React.FC<StackProps<"HomeScreen">> = ({
  navigation,
}): JSX.Element => {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "First Todo",
      completed: true,
    },
    {
      id: 2,
      task: "Second Todo",
      completed: false,
    },
  ]);

  const addTodo = () => {
    if (textInput == "") {
      Alert.alert("Error", "Please input todo");
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput("");
    }
  };

  const markTodoCompleted = (todoId: number) => {
    console.log(todoId);
    const newTodos = todos?.map((item) => {
      if (item?.id === todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todoId: number) => {
    const newTodos = todos?.filter((item) => item?.id != todoId);
    setTodos(newTodos);
  };

  const saveTodoToUserDevices = async (todos: any) => {
    try {
      const jsonValue = JSON.stringify(todos);
      await AsyncStorage.setItem("todos", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  useEffect(() => {
    saveTodoToUserDevices(todos);
  }, [todos]);

  return (
    <Layout>
      <FlatList
        contentContainerStyle={{
          padding: 10,
          gap: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.cardTodo}>
            <Text fontsize={16} fontWeight="bold" color={COLORS.white}>
              {item?.task}
            </Text>

            <View style={{flexDirection: "row", gap: 10}}>
              {!item?.completed && (
                <Icon
                  color="green"
                  name="checkcircle"
                  type="AntDesign"
                  onPress={() => markTodoCompleted(item?.id)}
                />
              )}
              <Icon
                color="red"
                name="delete"
                type="AntDesign"
                onPress={() => deleteTodo(item?.id)}
              />
            </View>
          </View>
        )}
      />

      <View
        style={{flexDirection: "row", alignItems: "center", paddingRight: 10}}
      >
        <Input
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          placeholder="Tambahkan Todo Baru"
          onChangeText={(e) => setTextInput(e)}
          value={textInput}
        />

        <Icon onPress={addTodo} name="add-circle" size={35} type="Ionicons" />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  inputStyle: {paddingVertical: 10, paddingLeft: 10},
  containerStyle: {
    paddingHorizontal: 0,
    height: 40,
    flex: 1,
  },
  cardTodo: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
