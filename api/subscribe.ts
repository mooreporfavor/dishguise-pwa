import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method not allowed' });
    }

    const { email } = request.body;

    if (!email) {
        return response.status(400).json({ message: 'Email is required' });
    }

    const API_SECRET = process.env.KIT_API_SECRET;
    const FORM_ID = process.env.KIT_FORM_ID;

    if (!API_SECRET || !FORM_ID) {
        console.error('Missing Kit.com configuration');
        return response.status(500).json({ message: 'Server configuration error' });
    }

    try {
        const kitResponse = await fetch(
            `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_secret: API_SECRET,
                    email: email,
                }),
            }
        );

        const data = await kitResponse.json();

        if (!kitResponse.ok) {
            throw new Error(data.message || 'Failed to subscribe');
        }

        return response.status(200).json(data);
    } catch (error: any) {
        console.error('Kit.com API Error:', error);
        return response.status(500).json({
            message: error.message || 'Failed to process subscription'
        });
    }
}
