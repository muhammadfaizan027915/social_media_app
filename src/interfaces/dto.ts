export interface Response<T = {}> {
    errors?: any | null;
    message?: string | null;
    data?: T | null;
    success: boolean;
}
