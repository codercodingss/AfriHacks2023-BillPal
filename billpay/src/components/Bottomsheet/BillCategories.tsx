import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BottomsheetStyles} from './BottomsheetStyles';
import {Arrow} from '../../icons';
import {Search} from '../../icons/Search';
import {CableTv} from '../../icons/CableTv';
import {Taxes} from '../../icons/Taxes';
import {Education} from '../../icons/Education';
import {Smartphone} from '../../icons/Smartphone';
import {ArrowUp} from '../../icons/ArrowUp';

const BillCategories = ({
  selectCatgeory,
}: {
  selectCatgeory: (p: string) => void;
}) => {
  return (
    <View>
      <Text style={[BottomsheetStyles.title, styles.title]}>
        Select Biller Category
      </Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholderTextColor={'#9ca3af'}
          style={styles.input}
          placeholder="Search"
        />
        <Search />
      </View>
      {categories.map((d, i) => (
        <TouchableOpacity
          onPress={() => selectCatgeory(d.title)}
          style={[BottomsheetStyles.btn, styles.row]}
          key={i}>
          <View style={styles.icon}>{d.icon}</View>
          <View>
            <Text style={[BottomsheetStyles.btnText, {marginBottom: 'auto'}]}>
              {d.title}
            </Text>
            <Text style={styles.desc}>{d.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BillCategories;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#E3F0F5',
    width: 38,
    height: 38,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderColor: '#d1d5db',
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 25,
    marginHorizontal: 19,
    shadowColor: '#1018280D',
    shadowOpacity: 0.05000000074505806,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    color: '#000',
    fontSize: 14,
    marginRight: 4,
    flex: 1,
    padding: 0,
  },
  title: {
    paddingBottom: 10,
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
    marginHorizontal: 18,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
    paddingBottom: 10,
    borderBottomColor: '#f3f4f6',
    borderBottomWidth: 1,
  },
});

const categories = [
  {
    icon: <CableTv />,
    title: 'Cable TV',
    description: 'Pay for your TV subscription',
  },
  {
    icon: <Taxes />,
    title: 'Taxes and Levies',
    description: 'Pay for your tax as a responsible citizen ',
  },
  {
    icon: <Education />,
    title: 'Education',
    description: 'Pay for your school fees or accomodation',
  },
  {
    icon: <Smartphone />,
    title: 'Utility',
    description: 'Pay for electricity and other things',
  },
  {
    icon: <ArrowUp />,
    title: 'Lottery and Betting',
    description: 'Pay for your sporty bet or betnaija here',
  },
  {
    icon: <Taxes />,
    title: 'Taxes and Levies',
    description: 'Pay for your tax as a responsible citizen ',
  },
  {
    icon: <Education />,
    title: 'Education',
    description: 'Pay for your school fees or accomodation',
  },
  {
    icon: <Education />,
    title: 'Create custom bill',
    description: 'customise your own expenditure ',
  },
];
