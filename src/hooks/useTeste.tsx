import { useApiTeste } from "../services/useApiTeste";
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

export const UsersKeyQuery = 'usuarios';
export const UserKeyQuery = 'usuario';


export function useTeste(quantidade?: string) {
    const { getAllUsers, getUsersById } = useApiTeste();

    const options = {
        staleTime: 1000 * 60 * 60 * 4,
        retry: 2,
        refetchOnWindowFocus: false,
    };

    const useTesteQuery = () =>
        useQuery(
            [UsersKeyQuery],
            () =>
                getAllUsers(),
            options,
        );

    const useTesteQuery2 = (id: string) =>
        useQuery(
            [UserKeyQuery],
            () =>
                getUsersById(id),
            options,
        );


    return {
        useTesteQuery,
        useTesteQuery2
    };
}