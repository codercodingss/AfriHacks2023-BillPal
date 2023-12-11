import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#FCFFFA',
    paddingTop: 18,
    paddingBottom: 8,
    minHeight: Dimensions.get('screen').height,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#111827',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Averta Demo PE',
    marginBottom: 15,
    marginHorizontal: 25,
  },
  label: {
    color: '#353f50',
    fontSize: 12,
    fontFamily: 'Averta Demo PE',
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft: 25,
    marginTop: 10,
  },
  check: {
    width: 20,
    height: 20,
    borderColor: '#d1d5db',
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 12,
  },
  rememberMeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 24,
    marginTop: 25,
  },
  secondaryText: {
    color: '#6b7280',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    fontFamily: 'Averta Demo PE',
  },
  submit: {
    alignItems: 'center',
    backgroundColor: '#74b3ce',
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 28,
    marginHorizontal: 24,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Averta Demo PE',
  },
  signUp: {
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 173,
    marginLeft: 88,
  },
  input: {
    backgroundColor: '#f3f5f6',
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginHorizontal: 24,
    color: '#000',
  },
  errorText: {
    color: '#DC1F21',
    marginHorizontal: 24,
  },
  highlighted: {
    borderColor: '#DC1F21',
    borderWidth: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    zIndex: 44,
    backgroundColor: 'red',
  },
});

export default styles;
