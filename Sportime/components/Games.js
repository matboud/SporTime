import React, { Component } from 'react';
import {
    Text, StyleSheet, View, Image, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftFlesh from './svg/LeftFlesh';
import GameCard from './GameCards';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
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
                <View style={styles.ContSwitcher}>
                    <View style={styles.viewButtSwitch}>
                        <Text style={styles.textButtSwitch}>BROWSE</Text>
                        {
                            <LinearGradient
                                colors={['#576be4', '#42c3d9', '#51d3e3', '#6ad1f3']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={{ height: 4, alignItems: 'center', justifyContent: 'center', width: '100%' }}
                            >
                            </LinearGradient>
                        }
                    </View>

                    <View style={styles.viewButtSwitch}>
                        <Text style={styles.textButtSwitch}>MY GAMES</Text>
                        {
                            // <LinearGradient
                            //     colors={['#576be4', '#42c3d9', '#51d3e3', '#6ad1f3']}
                            //     start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            //     style={{ height: 4, alignItems: 'center', justifyContent: 'center', width: '100%' }}
                            // >
                            // </LinearGradient>
                        }
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <GameCard imageRef={require('./img/ball.jpg')} />
                    <GameCard imageRef={require('./img/football.jpg')} />
                    <GameCard imageRef={require('./img/sant.jpg')} />
                    <GameCard imageRef={require('./img/ronaldinho.jpg')} />
                    <GameCard imageRef={require('./img/fifa.jpg')} />
                    {
                        // !!!!!! [IMPORTANT] DO not take this View Below off, 
                        // else the last card would be hidden :/ 
                        <View style={{ height: 100 }} />
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // top Header style
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
    // _________ END TOP HEADER;
    // switcher
    ContSwitcher: {
        height: 58,
        backgroundColor: '#25303b',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewButtSwitch: {
        width: '50%',
        paddingTop: 15,
    },
    textButtSwitch: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 17
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        marginLeft: 1,
        marginRight: 1,
        width: 198
    }
});

export default Games;