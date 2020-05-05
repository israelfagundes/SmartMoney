import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const Container = ({
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  children,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Icon
                name="insert-chart"
                size={13}
                style={styles.actionButtonIcon}
              />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    margin: 5,
    paddingTop: 10,
    paddingHorizontal: 25,
    paddingBottom: 10,
    maxHeight: '100%'
  },
  title: {
    fontSize: 13,
    fontFamily: 'Lato Bold',
    color: Colors.white,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionLabel: {
    fontSize: 12,
    fontFamily: 'Lato Regular',
    color: Colors.metal,
  },
  actionButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonIcon: {
    color: Colors.metal,
    marginRight: 3,
    marginTop: 2,
  },
  actionButtonText: {
    fontSize: 12,
    fontFamily: 'Lato Regular',
    color: Colors.metal,
  },
});

export default Container;
