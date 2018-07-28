import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signup } from '../state/signup/actions';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signupFinished) {
      console.log('Signup finished!');
    }
  }

  onPress = () => {
    const { actions } = this.props;
    actions.signup('dinotrnka@gmail.com', 'password');
  }

  render() {
    return (
      <View style={s.background}>
        <TouchableOpacity
          onPress={this.onPress}
          style={s.button}
        >
          <Text style={s.text}>
            Click me
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Landing.propTypes = {
  signupFinished: PropTypes.bool,
};

Landing.defaultProps = {
  signupFinished: false,
};

function mapStateToProps(state) {
  return {
    signupLoading: state.signup.loading,
    signupFinished: state.signup.finished,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      signup,
    }, dispatch),
  };
}

const s = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
