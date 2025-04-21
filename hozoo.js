// Contoh API call untuk mendapatkan daftar nomor banned
async function getBannedNumbers() {
    try {
        const response = await fetch('/api/banned-numbers');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching banned numbers:', error);
        return [];
    }
}
