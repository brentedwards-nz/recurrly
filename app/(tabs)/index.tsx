import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Recurrly!
      </Text>
      <Link
        href="/onboarding"
        className="mt-t rounded-md bg-primary text-white p-4"
      >
        Go to onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-t rounded-md bg-primary text-white p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/create-account"
        className="mt-t rounded-md bg-primary text-white p-4"
      >
        Go to Create Account
      </Link>
      <Link
        href="/(tabs)/subscriptions/spotify"
        className="mt-t rounded-md bg-primary text-white p-4"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-t rounded-md bg-primary text-white p-4"
      >
        Claude Subscription
      </Link>
    </SafeAreaView>
  );
}
