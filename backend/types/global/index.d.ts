import '@fastify/jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { sub: string }; // payload type is used for signing and verifying
    user: {
      sub: string;
    }; // user type is return type of `request.user` object
  }
}
