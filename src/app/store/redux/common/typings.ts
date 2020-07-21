export interface IEmployee extends ICurrentUser {

}

export interface ICurrentUser {
    first_name: string;
    last_name: string;
    department: string;
    job_title: string;
    gender: string;
    email: string;
    country: string;
    city: string;
}

export interface ICommonStore {
    currentUser: ICurrentUser;
    isAuth: boolean;
    error: Object;
}
