import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Recurrly!
      </Text>
      <Link href="/onboarding" className="mt-t rounded-md bg-primary text-white p-4">Go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-t rounded-md bg-primary text-white p-4">Go to Sign In</Link>
      <Link href="/(auth)/create-account" className="mt-t rounded-md bg-primary text-white p-4">Go to Create Account</Link>
      <Link href="/(tabs)/subscriptions/spotify" className="mt-t rounded-md bg-primary text-white p-4">Spotify Subscription</Link>
      <Link href={{
        pathname: "/(tabs)/subscriptions/[id]",
        params: { id: "claude" }
      }} className="mt-t rounded-md bg-primary text-white p-4">Claude Subscription</Link>
    </View>
  );
}