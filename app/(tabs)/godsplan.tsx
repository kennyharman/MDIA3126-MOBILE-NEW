import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View>
        <Text>How do you feel about GOD'S PLAN?</Text>
        <Pressable>
            <Link href="/">
                Return to the beginning of God's Plan
            </Link>
        </Pressable>
    </View>
  )
}