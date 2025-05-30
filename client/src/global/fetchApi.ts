


export const fetchApi = async (endpoint :string, options : RequestInit) => {
    const response  = await fetch(`${endpoint}`, {
        headers : {
            'Content-Type' : 'application/json',
            ...options.headers,
        },
        ...options
    })

    if(!response.ok) {
        throw new Error(`API error : ${response.status}`);
    }
    return response.json();
}