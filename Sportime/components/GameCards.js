import React, { Component } from 'react';
import {
    Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftFlesh from './svg/LeftFlesh';
import FootIcon from './svg/FootIcon';

class GameCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: false
        };
    }
    render() {
        return (
            <View>
                <View style={styles.contCard}>
                    <ImageBackground
                        source={this.props.imageRef}
                        style={styles.contTextPart}
                    >
                        {
                            this.props.gameDetails
                                ? <View style={styles.fleshIfProps}>
                                    <LeftFlesh style={{ zIndex: 20 }} />
                                </View>
                                : <View />
                        }
                        <LinearGradient
                            style={styles.gradientIn}
                            colors={['#00000000', '#00000070', '#000000b0']}
                        >
                            <View style={styles.contShadowLeft}>
                                <Text
                                    style={styles.cardTextDate}
                                >
                                    WED, 18 MAI.
                            </Text>
                                <Text
                                    style={styles.gameTitle}
                                    numberOfLines={1}
                                >
                                    Oh! you said Game title.
                            </Text>
                                <View style={styles.abtFriends}>
                                    <Image
                                        style={[styles.headerAvatar, { zIndex: 10 }]}
                                        source={require('./img/profile.jpg')}
                                    />
                                    <Image
                                        style={[styles.headerAvatar, { marginLeft: -13 }]}
                                        source={require('./img/man2.jpg')}
                                    />
                                    <Text style={styles.nbrFriends}>
                                        Saad, Adam & 20 other friends.
                                </Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', height: 18, }}>
                                        <LinearGradient
                                            colors={['#576be4', '#6ad1f3']}
                                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                            style={styles.linearRightShadow}
                                        >
                                            <TouchableOpacity style={styles.buttonContainer}>
                                                <Text style={styles.buttonText}>
                                                    34
                                    </Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>
                                    <Text style={{ color: '#fff', paddingLeft: 5 }}>
                                        / 107
                            </Text>
                                </View>

                                <View style={styles.joinContIfProps}>
                                    {
                                        // this.props.gameDetails
                                        //     ? <Text style={styles.textJoinIfProps}>Joined</Text>
                                        //     : <Text style={styles.textJoin}>+  join</Text>
                                    }
                                    <Text style={styles.textJoinIfProps}>Joined</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contCard: {
        height: 180,
        // backgroundColor: 'aqua',
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        borderTopWidth: 3,
        borderTopColor: '#000'
    },
    contTextPart: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    gradientIn: {
        height: 95,
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    cardTextDate: {
        color: '#ecf0f1',
        fontSize: 14
    },
    gameTitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 3,
    },
    abtFriends: {
        flexDirection: 'row',
    },
    nbrFriends: {
        color: '#ecf0f1',
        fontSize: 13,
    },
    headerAvatar: {
        width: 24,
        height: 24,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#fff',
        marginRight: 5,
    },
    contShadowLeft: {
        width: '83%',
    },
    contShadowRight: {
        width: '17%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        padding: 2,
        fontSize: 13,
    },
    linearRightShadow: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 8,
    },
    joinCont: {
        paddingHorizontal: 15,
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#2082eb',
        borderRadius: 20,
        marginTop: 8,
    },
    joinContIfProps: {
        paddingHorizontal: 15,
        paddingTop: 6,
        paddingBottom: 6,
        borderColor: '#4acdaf',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 8,

    },
    textJoin: {
        textAlign: 'center',
        color: '#fff',
        flex: 1
    },
    textJoinIfProps: {
        textAlign: 'center',
        color: '#3ed5d6'
    },
    fleshIfProps: {
        paddingLeft: 15,
        marginBottom: 44,
    },

});

export default GameCards;