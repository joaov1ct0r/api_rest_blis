import { AuthService } from '@auth/services/auth-service';
import { AuthController } from '@auth/controllers/auth-controller';
import { findUserByEmailRepository } from '@src/common/factories/repositories/index';
import { CreateJWTTokenService } from '@auth/services/create-jwt-token-service';

const authService = new AuthService(findUserByEmailRepository);
const createJwtTokenService = new CreateJWTTokenService();

const authController = new AuthController(authService, createJwtTokenService);

export { authController };
