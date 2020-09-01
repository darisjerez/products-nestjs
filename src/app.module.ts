import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CouponsModule } from './coupons/coupons.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/products'), ProductsModule, AuthModule, CouponsModule, ScheduleModule.forRoot() ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
