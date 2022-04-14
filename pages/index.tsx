import { Box } from "@chakra-ui/layout";
import { ReservationIncoming } from "../components/Home/ReservationIncoming/ReservationIncoming";

const Home = () => {
  return (
    <Box padding="10px" width="90vw" margin="10px auto">
      <ReservationIncoming />
    </Box>
  );
};

export default Home;
