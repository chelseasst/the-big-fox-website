import { environment } from '../../environments/environments';
export async function handleToken() {
    let token = localStorage.getItem('userToken');
    if (token) {
        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
            //  {id: '48292775f866e587', email: 'izana@gmail.com', iat: 1750239778, exp: 1750844578}
            const isExpired = decodedToken.exp * 1000 < Date.now(); // Check expiration

            if (isExpired) {
                token = await renewToken(token);
                if (!token) return
                localStorage.setItem('userToken', token);
            }
            return token
        } catch (error) {
            localStorage.removeItem('userToken');
            localStorage.removeItem('userName');
            window.location.href = '/login';
            return null
        }

    }
    return null
}
async function renewToken(token: string) {
    try {
        const response = await fetch(`${environment.apiUrl}/user/refresh-token`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }
        const data = await response.json();
        return data.newToken
    } catch (error) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        window.location.href = '/login';
        return null
    }
}