import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const coefficient = windowWidth / 360;
const size = {};

for (let i = 0; i < 600; i++) {
  size[i] = i * coefficient;
}

export default size;
