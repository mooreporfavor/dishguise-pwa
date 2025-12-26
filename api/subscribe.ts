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
                    api_key: API_SECRET,
                    email: email,
                }),
            }
        );

        const responseText = await kitResponse.text();
        console.log('Kit.com Status:', kitResponse.status);
        console.log('Kit.com Response:', responseText);

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            console.error('Failed to parse Kit response:', responseText);
            return response.status(502).json({
                message: `Received invalid response from ConvertKit: ${kitResponse.status} - ${responseText.slice(0, 100)}`
            });
        }

        if (!kitResponse.ok) {
            throw new Error(data.message || `Kit API Error: ${kitResponse.status}`);
        }

        return response.status(200).json(data);
    } catch (error: any) {
        console.error('Server/Kit Error:', error);
        return response.status(500).json({
            message: error.message || 'Failed to process subscription'
        });
    }
    return response.status(500).json({
        message: error.message || 'Failed to process subscription'
    });
}
}
