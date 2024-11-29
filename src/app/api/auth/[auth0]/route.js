// app/api/auth/[auth0]/route.js



import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

// import { handleAuth } from '@auth0/nextjs-auth0';

// export const GET = async (req, res) => {
//   try {
//     return await handleAuth(req, res);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// };