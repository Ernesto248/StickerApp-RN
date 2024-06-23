import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imageSource, selectedImage }) {
  const src = selectedImage ? { uri: selectedImage } : imageSource;

  return <Image source={src} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
