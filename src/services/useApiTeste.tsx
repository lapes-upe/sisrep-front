import { useCallback } from "react";
import { api } from "./api";

const basePath = '/todos';

export function useApiTeste() {
    const url = useCallback((basePath: string) => `${basePath}`, []);

  
    const getAllUsers = useCallback(
      () => {
        return api.get<any>(url(basePath));
      },
      [url],
    );

    const getUsersById = useCallback(
        (id: string) => {
          return api.get<any>(url(`${basePath}/${id}`));
        },
        [url],
      );
  
  
    return {
        getAllUsers,
        getUsersById
    };
  }