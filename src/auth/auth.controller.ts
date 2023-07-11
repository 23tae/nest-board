import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { Auth } from 'typeorm';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) AuthCredentialsDto: AuthCredentialsDto) {
    return this.authService.singIn(AuthCredentialsDto);
  }
}
