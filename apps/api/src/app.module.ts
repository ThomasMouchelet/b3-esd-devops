import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { ConfigDatabaseModule } from './config-database/config-database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MessageModule, 
    ConfigDatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
