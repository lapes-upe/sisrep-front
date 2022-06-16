import { Account } from "../../models/User/Acount";

export interface DataContextState {
    account: Account | null;
    auth: boolean;
    setAuth: (newValue: boolean) => void;
    loading: boolean;
    setLoading: (newValue: boolean) => void;
  }