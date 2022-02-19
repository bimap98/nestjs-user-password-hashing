import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerCustomOptions, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
        transform: true
    }))

    const configSwagger = new DocumentBuilder()
        .setTitle("Username Password Hashing")
        .setDescription("Description Username Password Hashing")
        .setVersion("1.0")
        .build()

    const configCustomSwagger: SwaggerCustomOptions = {
        swaggerOptions: {docExpansion: "none"}
    }

    const doc = SwaggerModule.createDocument(app, configSwagger)
    SwaggerModule.setup("api", app, doc, configCustomSwagger)
    await app.listen(3000);
}

bootstrap();
