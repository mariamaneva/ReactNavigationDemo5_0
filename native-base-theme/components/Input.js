// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null
    },
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: variables.inputFontSize,
    borderBottomWidth: 2,
    //full width by default
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginVertical: 10,
    borderColor: '#2e3e93',
    backgroundColor: 'rgba(255,255,255,.7)'
  };

  return inputTheme;
};
