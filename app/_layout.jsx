import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{title:"Home",headerShown:false}} />
    <Stack.Screen name="AddTodo" options={{title:"Add task"}}/>
  </Stack>;
}
