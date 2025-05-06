import { Button } from '@repo/components'
import TestModule from '@repo/test-expo-module'
import { greeting } from '@repo/utils'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{greeting}</Text>
      <Text>PACKAGE TestModule</Text>
      <Text>{TestModule.hello()}</Text>
      <Button text="Click me" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
