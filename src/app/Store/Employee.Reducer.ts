import { createReducer, on } from "@ngrx/store";
import { employeeState } from "./Employee.State";
import { deleteEmployeeSuc, loadEmployeeFail, loadEmployeeSuc } from "./Employee.Action";

const _employeeReducer = createReducer(employeeState,
    on(loadEmployeeSuc, (state, action) => {
        return {
            ...state,
            list: action.list,
            errormessage: ''
        }
    }),
    on(loadEmployeeFail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errMsg
        }
    }),
    on(deleteEmployeeSuc, (state, action) => {
        const _newdata=state.list.filter(o=>o.id!=action.empId)
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    })
);

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);
}