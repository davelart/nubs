
export default async function GRequest(props: any) {
    try {
        // console.log('GRequest', props)
        const { baseURL = process.env.BACKEND_ENDPOINT, query, url, method = 'GET', body, refresh, access, basicToken, headers } = props;
        
        let queryParams = query ? `?${query}` : ``
        
        const url_query = `${baseURL}${url}${queryParams}`
        // console.log(`url_query: ${url_query}, method: ${method}`)
        // console.log(`body: ${body}`)
        
        let d_headers: any = {};
        if(headers){
            d_headers = headers
        } else if (access) {
            // console.log('access', access)
            d_headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + access }
            // console.log('d_headers', d_headers)
        } else if (basicToken) {
            d_headers = { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + basicToken }
        } else {
            d_headers = { 'Content-Type': 'application/json' }
        }

        try {
            const response = await fetch(`${url_query}`, { method: method, headers: d_headers, body: body, signal: AbortSignal.timeout(120000)});
            // console.log(`grequest: ${await JSON.stringify(await response)}`)
            return await response
            // console.log(`grequest: ${await JSON.stringify(await response)}`)
            if(await response.ok){
                return await response
            } 
            else if (await response.status === 401) {
                // 401 unauthorized
            }else{
                // console.log(`grequest 2: ${await JSON.stringify(await response)}`)
                return await response
            }
        } catch (e: any) {
            return null
        }

    } catch (e) {
        return null
    }
}

