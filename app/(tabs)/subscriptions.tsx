import { View, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);
  console.log("Cap Subscription ID:", capitalizedId);
  return (
    <View>
      <Text>Cap Subscription Details: {capitalizedId}</Text>
      <Link href="/">Go back...</Link>
    </View>
  );
};

export default SubscriptionDetails;
