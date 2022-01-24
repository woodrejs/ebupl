import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { theme } from "../../utils/theme";

export default React.memo(function Loader() {
  return (
    <Container>
      <Box>
        <ClipLoader
          color={theme.colors.primary[700]}
          loading={true}
          size={50}
          speedMultiplier={0.5}
        />
      </Box>
    </Container>
  );
});

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.section``;
