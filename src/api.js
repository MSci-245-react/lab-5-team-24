import axios from 'axios';
const client = axios.create({
    baseURL: 'https://api.outsidein.dev/Azve6Pef8WAjlG6s0Tg5DspvW9NHEITv',
});
const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};
export default api;