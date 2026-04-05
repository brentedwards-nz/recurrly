import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text className="mt-t rounded-md bg-primary text-white p-4">Sign In</Text>
      <Link href="/(auth)/create-account" className="mt-t rounded-md bg-primary text-white p-4">Create Account</Link>
    </View>
  )
}

export default SignIn