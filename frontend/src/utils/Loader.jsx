import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div style={styles.loader}>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}

const styles = {
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default Loader;
