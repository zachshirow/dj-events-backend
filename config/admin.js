module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f6b6dfda0bcec2e90839e6fb5dcf7ca'),
  },
});
