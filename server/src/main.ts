import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


const startServer = async () => {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:5173', // URL вашего фронта
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept',
        ],
    });

    app.setGlobalPrefix('api');
    await app.listen(PORT);
}

startServer();
