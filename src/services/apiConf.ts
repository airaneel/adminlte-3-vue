// apiConfig.ts
import { Configuration } from "@/api";
// Создаем экземпляр конфигурации
const config = new Configuration({
    basePath: import.meta.env.VITE_BASE_URL,
    fetchApi: fetch,

});
export default config;


