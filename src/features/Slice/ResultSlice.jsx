import { createSlice, nanoid } from '@reduxjs/toolkit';

const Resultslice = createSlice({
  name: 'result',
  initialState: [],
  reducers: {
    studentDetails(state, action) {
      const details = {
        id: nanoid(),
        firstName: action.payload.firstName,
        middleName: action.payload.middleName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        session: action.payload.session,
        faculty: action.payload.faculty,
        department: action.payload.department,
        matricNumber: action.payload.matricNumber,
        scores: action.payload.scores,
        agree: action.payload.agree,
      };
      state.push(details);
    },
    clearStore(state) {
      return (state = []);
    },
  },
});

export const { studentDetails, clearStore } = Resultslice.actions;
export default Resultslice.reducer;
