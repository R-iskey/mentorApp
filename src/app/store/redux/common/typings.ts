export interface IEmployee extends IUserMetadata {
}

export interface IUserMetadata {
    id: number;
    first_name: string;
    last_name: string;
    department: string;
    job_title: string;
    gender: string;
    email: string;
    country: string;
    city: string;
}

export interface IUserGroup {
    name: string;
    users: number[];
}

export interface ICurrentUser {
    metadata: IUserMetadata;
    groups: IUserGroup[];
}

export interface ICommonStore {
    // contains all information about logged in user
    currentUser: ICurrentUser;
    // authorization status
    isAuth: boolean;
    // contains global error object, which appeared as a top of main layout
    error: Object;
}
