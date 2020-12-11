import React from 'react';
import {
  View, FlatList, Text, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import filter from 'lodash.filter';
import styles from './styles';
import AllMoviesListItem from '../AllMoviesListItem';
import contains from '../../helpers/containsSubstring';

class AllMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      modifiedData: props.movies,
    };
  }

  handleSearch(text) {
    const {
      movies,
    } = this.props;
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(movies, (movie) => contains(
      movie.name.toLowerCase(), formattedQuery,
    ));
    this.updateModifiedData(filteredData);
    this.setQuery(text);
  }

  setQuery(queryText) {
    this.setState({ query: queryText });
  }

  updateModifiedData(filteredData) {
    this.setState({ modifiedData: filteredData });
  }

  renderHeader() {
    const {
      query,
    } = this.state;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => this.handleSearch(queryText)}
          placeholder="Search"
          placeholderTextColor="dimgray"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  render() {
    const {
      modifiedData,
    } = this.state;
    const {
      onPress,
    } = this.props;
    return (
      <View style={styles.listContainer}>
        <FlatList
          ListHeaderComponent={this.renderHeader()}
          ListEmptyComponent={() => (
            <View style={{
              alignItems: 'center', marginTop: 30, justifyContent: 'center', width: 183,
            }}
            >
              <Text style={{ fontSize: 18, marginBottom: 400 }}>Engin mynd fannst.</Text>
            </View>
          )}
          numColumns={2}
          data={modifiedData}
          renderItem={({
            item: {
              id, name, image, plot, duration, releaseYear, genres, rating,
              ageLimit, otherTitles, actors, directors, trailers,
            },
          }) => (
            <View>
              <AllMoviesListItem
                id={id}
                name={name}
                image={image}
                plot={plot}
                duration={duration}
                releaseYear={releaseYear}
                genres={genres}
                rating={rating}
                ageLimit={ageLimit}
                otherTitles={otherTitles}
                actors={actors}
                directors={directors}
                trailers={trailers}
                onPress={onPress}
              />
            </View>
          )}
          keyExtractor={(movie) => movie.id.toString()}
        />
      </View>
    );
  }
}

AllMoviesList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AllMoviesList;
