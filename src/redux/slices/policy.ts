import { PolicyType } from 'src/sections/@dashboard/policies/PoliciedEditPostForm';
import { dataList } from 'src/sections/@dashboard/policies/datalist';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  policyList: PolicyType[];
  isLoading: boolean;
}

const initialState: InitialState = {
  policyList: dataList,
  isLoading: false,
};

const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    createPolicy: (state, action: PayloadAction<PolicyType>) => {
      const newPolicy = action.payload;
      state.policyList = [...state.policyList, newPolicy];
      //   state.policyList.push(newPolicy);
      console.log('new', state.policyList);
    },
    editPolicy: (state, action: PayloadAction<PolicyType>) => {
      //   const index = action.payload.id - 1;
      //   state.policyList.splice(index, 1, action.payload);
      state.policyList = state.policyList.map((policy: PolicyType) =>
        policy.id === action.payload.id ? action.payload : policy
      );

      console.log('update', state.policyList);
    },
    // filterPolicy: (state, action: PayloadAction<string>) => {
    //   const value = action.payload === 'published' ? true : false;
    //   state.policyList = state.policyList.filter((e) => e.publish === value);
    //   console.log('data', state.policyList);
    // },
  },
});

export const { createPolicy, editPolicy } = policySlice.actions;
export const policyList = (state: RootState) => state.policy.policyList;

export default policySlice.reducer;
