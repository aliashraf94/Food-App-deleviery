import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import colors from '../../../Assets/Colors/colors';
import {hp} from '../../../Utills/CommonMethods/CommonMethods';
import styles from './styles';

const Loader = props => {
  const [isloading, setIsLoading] = useState(props.isloading);
  useEffect(() => {
    setIsLoading(props.isloading);
  }, [props.isloading]);
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Modal
        visible={isloading}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => {
          setIsLoading(false);
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.modalContainer}>
            <ActivityIndicator color={colors.BLACK} size={'large'} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Loader;

StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.WHITE,
    height: hp(22),
    width: hp(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(2),
    borderWidth: 1,
  },
});
