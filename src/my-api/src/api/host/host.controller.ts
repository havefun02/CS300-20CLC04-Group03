import {
  ClassSerializerInterceptor,
  Controller,
  Req,
  UseGuards,
  UseInterceptors,
  Put,
  Body,
  Inject,
  Post,
  UploadedFiles,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '@/api/host/auth/auth.guard';
import { HostService } from './host.service';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { extname } from 'path';
import { User } from './host.entity';
@Controller('host')
export class HostController {
  @Inject(HostService)
  private readonly service: HostService;
  @Post('upload-new-product')
  // @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 10, { storage: memoryStorage() }))
  private async uploadProduct(
    @Req() req: Request,
    @UploadedFiles() files: Express.Multer.File,
  ): Promise<any> {
    console.log(req.body);
    return 'ok';
    // return this.service.uploadDb(req.body, <User>req.user, file.buffer);
  }

  @Post('delete-product')
  // @UseGuards(JwtAuthGuard)
  private async deleteProduct(@Req() req: Request) {
    console.log(req.body);
    // return this.service.deleteProduct(req.body.key);
  }

  @Post('update-product')
  // @UseGuards(JwtAuthGuard)
  private async updateNameProduct(@Req() req: Request) {
    console.log(req.body);
  }

  @Get('get-product/all')
  private async getProduct() {
    return 'ok';
  }

  @Get('get-customer/all')
  private async getCustomer() {
    return 'customer';
  }
}
