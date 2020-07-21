import { storage } from '../../../providers/storage';
import { FieldData } from "rc-field-form/lib/interface";
import { fetch } from '../../../providers/fetch';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEmployee } from "@store/common/typings";

const REG_WIZARD_ID = 'WizardRegInfo';

const setWizardData = (fieldData: FieldData[]) => {
    const data = fieldData.map(field => ({
        name: field.name,
        value: field.value || ''
    }));
    storage.set(REG_WIZARD_ID, data);
};

const getWizardData = () => {
    return storage.get(REG_WIZARD_ID);
}

const resetWizardData = () => {
    storage.remove(REG_WIZARD_ID);
};

const fetchLogin = createAsyncThunk(
    'common/fetchLogin',
    async () => {
        const token = await new Promise((resolve) => resolve('AUTH_TOKEN'))
        return true;
    }
)

const fetchCurrentUser = createAsyncThunk(
    'common/fetchCurrentUser',
    async () => {
        const {data} = await fetch({url: '/api/v1/user.json'});
        return data;
    }
)

const fetchEmployees = createAsyncThunk<IEmployee[]>(
    'common/fetchEmployees',
    async () => {
        const {data} = await fetch({url: '/api/v1/employee.json'});
        return data;
    }
)

export default {
    setWizardData,
    getWizardData,
    resetWizardData,
    fetchLogin,
    fetchCurrentUser,
    fetchEmployees,
}
