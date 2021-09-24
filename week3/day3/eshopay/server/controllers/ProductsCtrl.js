import formidable from "formidable";
import fs from "fs";
import path from "path";

const findAllProducts = async (req, res) => {
  try {
    const result = await req.context.models.products.findAll();
    return res.send(result);
  } catch (error) {
    return res.sendStatus(404).send("no data found");
  }
};

const createProduct = async (req, res) => {
  try {
    const uploadDir = process.cwd() + "/storages/";

    const options = {
      multiples: true,
      keepExtensions: true,
      uploadDir: uploadDir,
      maxFileSize: 50 * 1024 * 1024,
    };
    const form = formidable(options);

    form.onPart = function (part) {
      if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
        this.handlePart(part);
      } else {
        form._error(new Error("file type is not supported"));
      }
    };

    form.parse(req, async (error, fields, files) => {
      if (error) {
        return res.status(400).json({
          status: "error",
          message: error.message,
          error: error.stack,
        });
      }
      if (files.uploadFile.length > 1) {
        return res.status(400).json({
          status: "error",
          message: "only one allowed",
          error: null,
        });
      }

      const uploadFile = files.uploadFile.path;
      const seq = path.sep;
      const urlImage = uploadFile
        .substr(uploadFile.lastIndexOf(seq), uploadFile.length)
        .replace(seq, "");

      try {
        const result = await req.context.models.products.create({
          prod_cate_id: parseInt(fields.prod_cate_id),
          prod_desc: fields.prod_desc,
          prod_name: fields.prod_name,
          prod_price: fields.prod_price,
          prod_rating: parseInt(fields.prod_rating),
          prod_stock: parseInt(fields.prod_stock),
          prod_user_id: parseInt(fields.prod_user_id),
          prod_view_count: parseInt(fields.prod_view_count),
          prod_url_image: urlImage,
        });

        return res.send(result);
      } catch (error) {
        return res.status(200).json({
          status: "success",
          message: "",
          error: null,
        });
      }
    });
  } catch (error) {
    return res.sendStatus(404).send("no data found");
  }
};

const showProductImage = async (req, res) => {
  const filename = req.params.fileName;
  const url = `${process.cwd()}/${process.env.UPLOAD_DIR}/${filename}`;
  fs.createReadStream(url)
    .on("error", () => responseNotFound(req, res))
    .pipe(res);
};

function responseNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
}

export default {
  findAllProducts,
  createProduct,
  showProductImage,
};
