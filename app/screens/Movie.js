import React from "react";
import styled from "styled-components";

const Movie = ({ navigation }) => {
  const { movie } = navigation.state.params;

  return (
    <Container>
      <Image source={{ uri: movie.Poster }} />
      <Title>
        {movie.Title} ({movie.Year})
      </Title>
    </Container>
  );
};

Movie.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.movie.Title
});

const Container = styled.View`
  flex: 1;
  padding: 5px;
`;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
`;

const Image = styled.Image`
  height: 75%;
`;

export default Movie;
