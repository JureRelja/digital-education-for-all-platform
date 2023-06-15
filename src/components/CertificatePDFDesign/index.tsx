import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    height: "100vh",
    width: "80%",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  title: { fontSize: 24, textAlign: "center", marginBottom: "20" },
  image: {
    width: "300px",
    height: "200px",
  },

  downloadLink: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#1E3A8A",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
});

type Course = {
  title: string;
  firstName: string;
  lastName: string;
};

function index(props: Course) {
  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>Certification</Text>
          <Text style={styles.title}>
            {props.firstName} {props.lastName} passed the course {props.title}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pulvinar tellus id metus lobortis, iaculis consectetur sem
            consequat. Sed et ipsum sit amet quam pharetra efficitur. Quisque
            lobortis massa nibh, vel sodales leo ullamcorper eu. In id mollis
            sapien,
          </Text>
          <Link src="https://example.com">Click Me</Link>
        </View>
      </Page>
    </Document>
  );
}

export default index;
