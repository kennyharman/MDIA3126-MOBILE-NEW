import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={styles.gods_section}>
        <Text className='border-red-700 border-2 px-5' style={styles.gods_text}>How do you feel about GODS PLAn</Text>
            <Link href="/">
              <Text>
                Return to the beginning of God's Plan
              </Text>
            </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  gods_text: {
    fontSize: 20
  },
  gods_span: {
    fontWeight: "bold",
  },
  gods_section: {
    borderStyle: "solid",
    borderColor: "cyan",
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
})