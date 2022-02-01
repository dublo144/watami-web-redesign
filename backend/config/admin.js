module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac704b77cd3c6f409ba637faad5babb2'),
  },
});
