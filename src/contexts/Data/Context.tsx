import { createContext, ReactNode, useState } from 'react'
import { DataContextState } from './interface'
import Loading from '../../components/Loading/Loading';

type ContextPros = {
    children: ReactNode;
}

const INITIAL_STATE: DataContextState = {
    account: null,
    auth: false,
    setAuth: () => { },
    loading: true,
    setLoading: () => { },
}

const DataContext = createContext<DataContextState>(INITIAL_STATE);

const DataProvider: React.FC<any> = ({ children }: ContextPros) => {

    const account = INITIAL_STATE.account;
    const [auth, setAuth] = useState(INITIAL_STATE.auth);
    const [loading, setLoading] = useState(INITIAL_STATE.loading);

    function greet() {
        setLoading(false);
    }

    setTimeout(greet, 1000);


    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <DataContext.Provider value={
            { account, auth, setAuth, loading, setLoading }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };