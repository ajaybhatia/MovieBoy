import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import styled from "styled-components";
import Card from "../components/Card";

const keywords = ["Action", "Adventure", "Game", "All"];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=1545392e&s=all")
      .then(response =>
        response.json().then(data => {
          setMovies(data.Search);
          setLoading(false);
        })
      )
      .catch(error => console.log(error));
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
      style={{ marginTop: 20 }}
    >
      {loading ? (
        <ActivityIndicator size={48} color="green" />
      ) : (
        <>
          {/*
          {keywords.map((keyword, index) => (
            <Tag key={index}>{keyword}</Tag>
          ))}
          */}
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

Home.navigationOptions = {
  title: "Movie Boy"
};

const Loading = styled.Text`
  font-size: 32px;
  font-weight: 600;
`;

const Tag = styled.Text`
  font-size: 18px;
`;

export default Home;
