// module.exports = ({ env }) => ({
//   upload: {
//     provider: "tp-minio",
//     providerOptions: {
//       accessKey: env("MINIO_ACCESS_KEY"),
//       secretKey: env("MINIO_SECRET_KEY"),
//       bucket: env("MINIO_BUCKET"),
//       endPoint: env("MINIO_ENDPOINT"),
//       port: parseInt(env("MINIO_PORT"), 10) || 9000,
//       useSSL: env("MINIO_USE_SSL") === "true",
//       folder: env("MINIO_FOLDER"),
//       host: env("MINIO_HOST"),
//     },
//   },
// });

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
});
