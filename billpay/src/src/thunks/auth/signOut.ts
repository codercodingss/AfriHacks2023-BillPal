import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export interface ICredentials {
  email: string;
  password: string;
}

const signOut = createAsyncThunk('auth/signOut', async () => {
  try {
    new Promise(resolve => {
      resolve('signed');
    });
  } catch (err: any) {
    console.log(err);
    Alert.alert('Error', err.response.data.message);
    if (err?.response) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
});

export {signOut};
