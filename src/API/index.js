import { API } from '../config/index'


export const GetDepartments_API = async() => {
    return await API.get("departments");
}

export const GetEmployess_API = async() => {
    return await API.get("employees");
}

export const GetStudies_API = async() => {
    return await API.get("studies");
}