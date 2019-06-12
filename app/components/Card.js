import React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components";

const Card = ({ movie, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Movie", { movie })}>
      <Container>
        <Image source={{ uri: movie.Poster }} />
      </Container>
    </TouchableOpacity>
  );
};

const Container = styled.View`
  height: 180px;
  width: 120px;
  margin: 5px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  elevation: 15;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export default withNavigation(Card);
