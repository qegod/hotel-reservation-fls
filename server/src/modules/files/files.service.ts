import {BadRequestException, Injectable} from "@nestjs/common";
import * as fs from "node:fs/promises";
import path from "node:path";
import { v4 as uuidv4 } from 'uuid';
import {fileTypeFromBuffer} from 'file-type';


@Injectable()
export class FilesService {

    async createFile(image): Promise<string> {
        const fileType = await fileTypeFromBuffer(image.buffer);
        const fileName = `${uuidv4()}.${fileType?.ext}`
        const filePath = path.resolve(__dirname, '..', 'static')

        if (!fileType) {
            throw new BadRequestException("Не удалось определить тип файла");
        }

        await fs.mkdir(filePath, {recursive: true})

        await fs.writeFile(
            path.join(filePath, fileName),
            image.buffer,
        )

        return fileName;
    }
}
