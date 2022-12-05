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
  @Get('get-file-product')
  // @UseGuards(JwtAuthGuard)
  private async getProduct(@Req() req: Request) {
    // return this.service.getProduct();
  }
  @Post('delete-file-product')
  // @UseGuards(JwtAuthGuard)
  private async deleteProduct(@Req() req: Request) {
    // return this.service.deleteProduct(req.body.key);
  }
  @Post('update-product/:id/by-name')
  @UseGuards(JwtAuthGuard)
  private async updateNameProduct() {}

  @Post('update-product/:id/by-price')
  @UseGuards(JwtAuthGuard)
  private async updatePriceProduct() {}

  @Post('update-product/:id/sale-off')
  @UseGuards(JwtAuthGuard)
  private async updateSaleOffProduct() {}

  @Post('update-product/:id/quantity')
  @UseGuards(JwtAuthGuard)
  private async updateQuantityProduct() {}

  @Post('update-product/:id/id-cate')
  @UseGuards(JwtAuthGuard)
  private async updateCateProduct() {}
}
