import React, { Component } from 'react';
import {
    Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftFlesh from './svg/LeftFlesh';
import GameCards from './GameCards';
import FootIcon from './svg/FootIcon';


class MatchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: false
        };
    }
    render() {
        return (
            <View style={styles.contMatchCard}>
                <View style={[styles.cardLeftLine, {
                    backgroundColor: this.props.barColor,
                }]}>
                </View>
                <View style={styles.contOutLine}>
                    <View style={styles.contTName}>
                        <Text style={styles.teamName}>FC Barcelona</Text>
                    </View>
                    <View style={styles.contTeamlogo}>
                        <Image
                            style={styles.teamlogo}
                            source={require('./img/barca.png.png')}
                        />
                    </View>
                    <View>
                        <View style={styles.contScore}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>-</Text>
                            <View style={styles.scoreBetween}></View>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>-</Text>
                        </View>
                        <View style={styles.contScoreMin}>
                            <Text style={{ color: '#fff' }}>- | -</Text>
                        </View>
                    </View>
                    <View style={styles.contTeamlogo}>
                        <Image
                            style={styles.teamlogo}
                            source={require('./img/realMadrid.png')}
                        />
                    </View>
                    <View style={styles.contTNameR}>
                        <Text style={styles.teamName}>Real Madrid</Text>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    contMatchCard: {
        paddingRight: 15,
        backgroundColor: '#24313d',
        flexDirection: 'row',
        borderRadius: 9,
        paddingTop: 6,
        paddingBottom: 4,
        marginBottom: 5,
    },
    cardLeftLine: {
        width: 2,
        height: '100%',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    contOutLine: {
        paddingTop: 15,
        paddingBottom: 7,
        paddingLeft: 5,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%'
    },
    contTName: {
        left: 5,
        paddingRight: 21,
        textAlign: 'left',
        paddingTop: 15
    },
    contTNameR: {
        paddingLeft: 21,
        textAlign: 'right',
        paddingTop: 15
    },
    teamName: {
        color: '#fff',
        fontSize: 15,
    },
    contTeamlogo: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 13
    },
    teamlogo: {
        width: 26,
        height: 28,
    },
    contScore: {
        backgroundColor: '#3b454e',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 5
    },
    scoreBetween: {
        width: 1,
        backgroundColor: '#fff',
        height: 17,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    contScoreMin: {
        borderColor: '#fff',
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingTop: 1,
        paddingBottom: 2,
        paddingHorizontal: 5,
        marginTop: 3,
        borderRadius: 4
    }

});

export default MatchCard;