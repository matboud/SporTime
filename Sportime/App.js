/**
 *  AUTHOR : Matboud;
 *  DESCRIPTION: the container of main APP (Pronostics part) where all other components would be rendered;
 *  DATE: 22/01/2019;
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Games from './components/Games';
import GameDetails from './components/GameDetails';
import GuessGames from './components/GuessGames';

export default class App extends React.Component {
  render() {
    return <GuessGames />;
  }
}
const styles = StyleSheet.create({

});
