import { useEffect, useState } from 'react';

function useAsyncInitialize<T>(func: () => Promise<T>, deps: any[] = []) {
    const [state, setState] = useState<T | undefined>();

    useEffect(function () {
        (async () => setState(await func()))();
    }, deps);

    return state;
}

export default useAsyncInitialize;
