import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        try {
            const token = request.headers.authorization.split(' ');
            const type = token[0];
            const jwt = token[1];

            if(type !== "Bearer" || !jwt) {
                console.log(type)
                throw new Error("Unauthorized");
            }


            const result = await this.jwtService.verifyAsync(jwt);
            if(!result) {
                throw new Error("Unauthorized");
            }

            request.user = result;
            return true;
        } catch (e) {
            throw new UnauthorizedException('Пользователь не авторизован');
        }


    }
}
