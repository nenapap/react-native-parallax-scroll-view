import {Dimensions, Platform} from 'react-native'
const StyleSheet = require('react-native').StyleSheet;
import {isIphoneX} from '../../../src/utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  parallaxHeaderContainer: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  parallaxHeader: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    top: 0
  },
  stickyHeader: {
    backgroundColor: 'transparent',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0
  },
  scrollView: {
    backgroundColor: 'transparent',
    marginTop: isIphoneX(Dimensions.get("window").width,Dimensions.get("window").height) ? -45: 0
  }
});

module.exports = styles;
