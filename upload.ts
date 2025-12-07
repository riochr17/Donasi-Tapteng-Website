import Express, { Request, Response, Router } from "express";
import multer from 'multer';
import { v4 } from 'uuid';
import path from "path";
import fs from "fs";
import { cwd } from 'process';
import { getDonaturFromAuthHeader } from "./jwt";

function generateUrlUploadedImage(base_path: string, file_path: string): string {
  return `${base_path}${file_path}`;
}

export function getRouterUpload(image_url_endpoint: string = process.env.IMAGE_URL_ENDPOINT ?? '', static_folder_name: string = process.env.UPLOAD_FOLDER_NAME ?? 'uploads') {
  const router_upload = Router();
  const router = router_upload;

  const upload_fullpath = path.join(cwd(), `./${static_folder_name}`);
  if (!fs.existsSync(upload_fullpath)) {
    fs.mkdirSync(upload_fullpath);
  }

  router?.use(`/api/${static_folder_name}`, Express.static(upload_fullpath));
  router.post('/api/upload', multer().any(), async (req: Request, res: Response) => {
    const authorization = req.headers.authorization ?? '';

    try {
      await getDonaturFromAuthHeader(authorization as string);
    } catch {
      res.status(401).end(`This endpoint is restricted`);
    }

    try {
      if (!(req as any).files || (req as any).files?.length === 0) {
        res.status(400).end(`Bad request`);
        return;
      }
      const file = ((req as any).files as any)[0];
      const filename = await saveFile(file.buffer, file.originalname);

      res.json(generateUrlUploadedImage(image_url_endpoint, filename));
    } catch (err: any) {
      res.status(500).end(err.toString());
    }
  });

  async function saveFile(buffer: Buffer, original_name: string): Promise<string> {
    const FOLDER_NAME = process.env.UPLOAD_FOLDER_NAME ?? 'uploads';
    const extension = path.extname(original_name);
    return new Promise((resolve, reject) => {
      const relative_path = path.resolve(`./${FOLDER_NAME}`);
      const filename: string = `${v4()}`;
      const file_path: string = `${relative_path}/${filename}${extension}`;
      fs.writeFile(file_path, buffer, () => {
        resolve(`/api/${FOLDER_NAME}/${filename}${extension}`);
      });
    });
  }

  return router_upload;
}
