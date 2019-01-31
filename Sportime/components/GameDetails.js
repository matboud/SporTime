import React, { Component } from 'react';
import {
    Text, StyleSheet, View, Image, ScrollView, ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftFlesh from './svg/LeftFlesh';
import GameCards from './GameCards';
import FootIcon from './svg/FootIcon';
import MatchCard from './MatchCard'


class GameDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: false
        };
    }
    render() {
        return (
            <View style={styles.contCard}>
                <ScrollView
                    stickyHeaderIndices={[2]}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{ paddingBottom: 10 }}
                >
                    <GameCards imageRef={require('./img/sant.jpg')} gameDetails={true} />
                    <View style={styles.underText}>
                        <Text style={{ color: '#fff', flex: 3, paddingRight: 30, paddingTop: 11 }}>
                            Lorem ipsum dolor sit amet, conse adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                      </Text>
                        <View style={styles.regles}>
                            <Text style={styles.textJoin}>Règles</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.menu}>
                            <View style={styles.menuItems}>
                                <FootIcon />
                                <LinearGradient
                                    colors={['#576be4', '#42c3d9', '#51d3e3', '#6ad1f3']}
                                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                    style={{ height: 3, alignItems: 'center', width: '100%', marginTop: 11 }}
                                >
                                </LinearGradient>

                            </View>
                            <View style={styles.menuItems}>
                                <FootIcon />
                            </View>
                            <View style={styles.menuItems}>
                                <FootIcon />
                            </View>
                            <View style={styles.menuItems}>
                                <FootIcon />
                            </View>
                            <View style={styles.menuItems}>
                                <FootIcon />
                            </View>
                        </View>
                    </View>
                    <View style={styles.contMatchCard}>
                        <Text style={styles.MatchTitle}>Future matchs</Text>
                        <MatchCard barColor={'#b8e986'} />
                        <MatchCard barColor={'#b8e986'} />
                    </View>

                    <View style={styles.contMatchCard}>
                        <Text style={styles.MatchTitle}>Future matchs</Text>
                        <MatchCard barColor={'aqua'} />
                        <MatchCard barColor={'aqua'} />
                    </View>

                    <View style={styles.contMatchCard}>
                        <Text style={styles.MatchTitle}>Future matchs</Text>
                        <MatchCard barColor={'#ff5d5d'} />
                        <MatchCard barColor={'#ff5d5d'} />
                        <MatchCard barColor={'#ff5d5d'} />
                    </View>
                </ScrollView>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    underText: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: '#24313d',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    regles: {
        paddingHorizontal: 15,
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#2082eb',
        borderRadius: 20,
        marginTop: 8,
        height: 34,
    },
    textJoin: {
        textAlign: 'center',
        color: '#fff',
        flex: 1
    },
    menu: {
        backgroundColor: '#1d2730',
        paddingTop: 12,
        paddingBottom: 13,
        flexDirection: 'row',
    },
    menuItems: {
        flex: 1,
        alignItems: 'center',
        height: 26
    },
    contMatchCard: {
        backgroundColor: '#171e25',
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    MatchTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        paddingBottom: 8
    }
});

export default GameDetails;