import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const CreateAccount = () => {
  return (
    <View>
      <Text className="mt-t rounded-md bg-primary text-white p-4">Go to Sign In</Text>
      <Link href="/(auth)/sign-in" className="mt-t rounded-md bg-primary text-white p-4">Sign In</Link>
    </View>
  )
}

export default CreateAccount