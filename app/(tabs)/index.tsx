import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 gap-4">
      <Text className="text-5xl font-sans-extrabold text-primary">Home</Text>
      <Link
        href="/onboarding"
        className="mt-t rounded-md bg-primary text-white p-4 font-sans-bold"
      >
        Go to onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-t rounded-md bg-primary text-white p-4 font-sans-bold"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/create-account"
        className="mt-t rounded-md bg-primary text-white p-4 font-sans-bold"
      >
        Go to Create Account
      </Link>
    </SafeAreaView>
  );
}
