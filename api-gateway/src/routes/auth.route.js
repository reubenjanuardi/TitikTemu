const express = require('express');
const { buildProxy } = require('../proxy/service.proxy');
const { verifyToken } = require('../middleware/auth.middleware');

const router = express.Router();

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

/* =========================
   PUBLIC ROUTES
========================= */
router.post(
  '/register',
  buildProxy('/api/auth', `${AUTH_SERVICE_URL}/auth`)
);

router.post(
  '/login',
  buildProxy('/api/auth', `${AUTH_SERVICE_URL}/auth`)
);

/* =========================
   PROTECTED ROUTES
========================= */
router.use(verifyToken);
router.use(
  buildProxy('/api/auth', `${AUTH_SERVICE_URL}/auth`)
);

module.exports = router;
