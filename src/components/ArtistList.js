import React, {Component} from "react";
import ListView from "deprecated-react-native-listview";
import {
    Alert,
    TouchableOpacity,
} from "react-native";

import ArtistBox from "./ArtistBox";

export default class ArtistList extends Component {
    constructor(props) {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds
        };
    }

    componentDidMount() {
        this.updateDataSource(this.props.artists);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.artists !== this.props.artists) {
            this.updateDataSource(newProps.artists);
        }
    }

    updateDataSource = data => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        });
    }

    handlePress(artist) {
        // this.props.onPress(artist);
        Alert.alert(
            artist.name,
            `has ${artist.listeners} listeners and id ${artist.id}`,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={artist => {
                    return (
                        <TouchableOpacity onPress={() => this.handlePress(artist)}>
                            <ArtistBox artist={artist}/>
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }
}
