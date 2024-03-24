import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Employee } from '../../types/types';
import { initialState } from '../../initialData/initialData';

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    sortByField(state, action: PayloadAction<{ field: keyof Employee; direction: 'asc' | 'desc' }>) {
      const { field, direction } = action.payload;
      state.sort((a, b) => {
        if (a[field] === b[field]) return 0;
        if (direction === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else {
          return a[field] < b[field] ? 1 : -1;
        }
      });
    },
    createEmployee(state, action:PayloadAction<Omit<Employee, 'id'>>) {
      const maxId = state.reduce((max, employee) => Math.max(max, employee.id), 0);
      const newEmployee = { id: maxId + 1, ...action.payload };
      return [...state, newEmployee];
    },
    deleteEmployee(state, action:PayloadAction<number>) {
      return state = state.filter((employee) => employee.id !== action.payload);
    },
    updateEmployee(state, action: PayloadAction<Partial<Employee>>) {
      return state.map((employee) =>
      employee.id === action.payload.id ? { ...employee, ...action.payload } : employee
    );
    },
  },
});

export const { sortByField, deleteEmployee, updateEmployee,createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
