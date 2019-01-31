import React, { Component } from 'react';
import {
    Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground, TextInput, ToastAndroid, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftFlesh from './svg/LeftFlesh';
import GameCards from './GameCards';
import FootIcon from './svg/FootIcon';


class GuessGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guessing1: '-',
            guessing2: '-',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    stickyHeaderIndices={[0]}

                >
                    <View>
                        <View style={styles.ContHeader}>
                            <View style={styles.headerElement} >
                                <LeftFlesh />
                            </View>
                            <View style={styles.headerElement} >
                                <Text style={styles.headerTitle}>Games</Text>
                            </View>
                            <View style={styles.headerElement} >
                                <Image
                                    style={styles.headerAvatar}
                                    source={require('./img/profile.jpg')}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.playingGame}>
                            <View style={styles.headerPG}>
                                <Text style={styles.gameDate}>28 TH JAN, 2018</Text>
                            </View>
                            <View style={styles.contWillingGame}>
                                <View style={styles.first}>
                                    <Text style={styles.textTeam}>Barcalona</Text>
                                </View>
                                <View style={styles.nullResult}>
                                    <View style={[styles.contTeamLogo, { marginRight: 5, marginTop: 3 }]}>
                                        <Image
                                            style={styles.teamLogo}
                                            source={require('./img/barca.png.png')}
                                        />
                                    </View>
                                    <View style={styles.scoreNull}>
                                        <View>
                                            <Text style={styles.textScoreNull}>0 | 0</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.contTeamLogo, { marginLeft: 5, marginTop: 3 }]}>
                                        <Image
                                            style={styles.teamLogo}
                                            source={require('./img/barca.png.png')}
                                        />
                                    </View>
                                </View>
                                <View style={styles.second}>
                                    <Text style={styles.textTeam}>Real Madrid</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.matchResultTitle}>
                            <Text style={styles.textMatchRT}>Quel sera le resultat du match?</Text>
                        </View>
                        <View style={styles.chooseScore}>
                            <View style={styles.propoFirstCase}>
                                <Text style={styles.textTeam}>Barcalona</Text>
                            </View>
                            <View style={styles.propoMiddleCase}>

                                <View style={[styles.contTeamLogo, { marginLeft: 5, marginTop: 3, alignItems: 'center', paddingTop: 5 }]}>
                                    <Image
                                        style={styles.teamLogo}
                                        source={require('./img/barca.png.png')}
                                    />
                                </View>

                                <View style={styles.contInput}>
                                    <View>
                                        <TextInput
                                            keyboardType='numeric'
                                            onChangeText={(guessing1) => {
                                                // check if the input is a number or not
                                                if (isNaN(guessing1)) {
                                                    ToastAndroid.showWithGravityAndOffset(
                                                        'Please enter a valid NUMBER!',
                                                        ToastAndroid.LONG,
                                                        ToastAndroid.BOTTOM,
                                                        25,
                                                        50,
                                                    );
                                                    this.setState({
                                                        guessing1: '',
                                                    })
                                                } else {
                                                    this.setState({
                                                        guessing1: guessing1,
                                                    })
                                                }
                                            }}
                                            maxLength={1}
                                            placeholder={this.state.guessing1}
                                            placeholderTextColor={'#fff'}
                                            style={[styles.GuessInput, styles.leftGuessScore]}
                                        />
                                    </View>
                                    <View style={styles.betweenGuessInput}>
                                    </View>
                                    <View>
                                        <TextInput
                                            keyboardType='numeric'
                                            onChangeText={(guessing2) => {
                                                // check if the input is a number or not
                                                if (isNaN(guessing2)) {
                                                    ToastAndroid.showWithGravityAndOffset(
                                                        'Please enter a valid NUMBER!',
                                                        ToastAndroid.LONG,
                                                        ToastAndroid.BOTTOM,
                                                        25,
                                                        50,
                                                    );
                                                    this.setState({
                                                        guessing2: '',
                                                    })
                                                } else {
                                                    this.setState({
                                                        guessing2: guessing2,
                                                    })
                                                }
                                            }}
                                            placeholder={this.state.guessing2}
                                            placeholderTextColor={'#fff'}
                                            maxLength={1}
                                            style={[styles.GuessInput, styles.rightGuessScore]}
                                        />
                                    </View>
                                </View>

                                <View style={[styles.contTeamLogo, { marginLeft: 5, marginTop: 3, alignItems: 'center', paddingTop: 5 }]}>
                                    <Image
                                        style={styles.teamLogo}
                                        source={require('./img/barca.png.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.propoLastCase}>
                                <Text style={styles.textTeam}>RealMadrid</Text>
                            </View>
                        </View>
                        <View style={styles.contBonus}>
                            <Text style={styles.textMatchRT}>Bonus</Text>
                        </View>

                        <View style={styles.matchResultTitle}>
                            <Text style={styles.textMatchRT}>Qui va marquer en premier ?</Text>
                        </View>
                        <View style={styles.chooseScore}>
                            <View style={styles.teamOne}>
                                <View style={styles.teamOneLogo}>
                                    <Image
                                        style={styles.teamLogo}
                                        source={require('./img/barca.png.png')}
                                    />
                                </View>
                                <View style={styles.teamOneText}>
                                    <Text style={styles.TextTeamOne}>FC Barcelona</Text>
                                </View>
                            </View>
                            <View style={styles.teamTwo}>
                                <View style={styles.teamOneLogo}>
                                    <Image
                                        style={styles.teamLogo}
                                        source={require('./img/barca.png.png')}
                                    />
                                </View>
                                <View style={styles.teamOneText}>
                                    <Text style={[styles.TextTeamOne, { color: '#fff' }]}>FC Barcelona</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.matchResultTitle}>
                            <Text style={styles.textMatchRT}>Quand va avoir lieu le premier but ?</Text>
                        </View>
                        <View style={styles.chooseScore}>
                            <View style={styles.teamOne}>
                                <View style={styles.teamOneText}>
                                    <Text style={[styles.TextTeamOne, { paddingTop: 15, paddingBottom: 15 }]}>1ère mi-temps</Text>
                                </View>
                            </View>
                            <View style={styles.teamTwo}>
                                <View style={styles.teamOneText}>
                                    <Text style={[styles.TextTeamOne, { color: '#fff' }]}>2ème mi-temps</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.contFJokers}>
                            <View style={[styles.contJokers, styles.constJoker1]}>
                                <View style={styles.joker1Logo}></View>
                                <Text style={styles.textJoker}>Joker 1</Text>
                            </View>
                            <View style={[styles.contJokers, styles.constJoker2]}>
                                <View style={styles.joker2Logo}></View>
                                <Text style={styles.textJoker}>Joker 2</Text>
                            </View>
                            <View style={[styles.contJokers, styles.constJoker3]}>
                                <View style={styles.joker3Logo}></View>
                                <Text style={styles.textJoker}>Joker 3</Text>
                                <View style={styles.jokerInfo}>
                                    <Text>i</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.contBonus}>
                            <LinearGradient
                                colors={['#663ced', '#6d6ef2', '#739ff8', '#79d0fd']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={{ paddingTop: 15, paddingBottom: 15, alignItems: 'center', width: 320, marginTop: 11, borderRadius: 10 }}
                            >
                                <Text style={styles.textButtSubmit}>Submit</Text>
                            </LinearGradient>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // N.B : whenever you see *cont..* it means container
    // Header
    ContHeader: {
        backgroundColor: '#25303b',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 2
    },
    headerElement: {
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    headerAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#fff'
    },
    // end header
    // _____________________________________
    // corp
    body: {
        backgroundColor: '#171e25',
    },
    playingGame: {
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#25303b',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 15
    },
    headerPG: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    gameDate: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
    },
    contWillingGame: {
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    first: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    nullResult: {
        flex: 1,
        flexDirection: 'row',
    },
    second: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 15
    },
    textTeam: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff'
    },
    contTeamLogo: {
        width: 35,
        height: 35,
        flex: 1,
    },
    scoreNull: {
        flex: 1.5,
        backgroundColor: '#3b454e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 3,
        paddingHorizontal: 3
    },
    teamLogo: {
        width: 30,
        height: 30,
    },
    textScoreNull: {
        textAlign: 'center',
        fontSize: 19,
        color: '#fff'
    },
    // end corp
    // ____________________________________
    // match result title (quelle sera le resultat du match)
    matchResultTitle: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#25303b'
    },
    textMatchRT: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    chooseScore: {
        backgroundColor: '#3d4a57',
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    propoFirstCase: {
        flex: 1,
        alignItems: 'flex-start',

    },
    propoMiddleCase: {
        flex: 2,
        flexDirection: 'row',
    },
    propoLastCase: {
        flex: 1,
        alignItems: 'flex-end',
    },
    contInput: {
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    betweenGuessInput: {
        width: 1,
        backgroundColor: '#fff'
    },
    GuessInput: {
        backgroundColor: '#505c68',
        paddingTop: 6,
        paddingBottom: 6,
        paddingHorizontal: 5,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    leftGuessScore: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    rightGuessScore: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    // end corp
    // ____________________________________
    // Bonus
    contBonus: {
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    teamOne: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'aqua',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        marginRight: 4,
    },
    teamTwo: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        marginLeft: 4,
    },
    teamOneLogo: {
        width: 40,
        height: 45,
        borderRadius: 28,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    teamOneText: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    TextTeamOne: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    teamTwoLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    teamTwoText: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    TextTeamTwo: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    // end Bonus
    // ____________________________________
    // jokers
    contFJokers: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#25303b',
        flexDirection: 'row',
        flex: 1,
    },
    contJokers: {
        alignItems: 'center',
        backgroundColor: '#25303b',
        flexDirection: 'row',
        flex: 1,
    },
    joker1Logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#2081e9',
    },
    joker2Logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ff3957',
    },
    joker3Logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fcb848',
    },
    textJoker: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 4,
    },
    jokerInfo: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'gray',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // end jokers
    // ______________________________
    // button Submit
    textButtSubmit: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
    // end BUtton Submit
});

export default GuessGames;