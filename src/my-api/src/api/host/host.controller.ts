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
  Param,
  Delete,
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
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 10, { storage: memoryStorage() }))
  private async uploadProduct(
    @Req() req: Request,
    @UploadedFiles() files: Express.Multer.File,
  ): Promise<any> {
    console.log(req.body);
    // console.log(files);
    return this.service.uploadDb(req.body, <User>req.user, files);
  }

  @Delete('delete-product/:id_product/:size/:color')
  // @UseGuards(JwtAuthGuard)
  private async deleteProduct(@Req() req: Request, @Param() param) {
    console.log(param);
    return this.service.deleteProduct(param);
  }

  @Post('update-product/:id_product/:size/:color')
  @UseGuards(JwtAuthGuard)
  private async updateProduct(
    @Req() req: Request,
    @Body() body,
    @Param() param,
  ) {
    console.log(req.body);
    return await this.service.updateProduct(param, body);
  }
  @Post('confirm-order')
  @UseGuards(JwtAuthGuard)
  private async setConfirm(@Req() req: Request, @Body() body) {
    return await this.service.setConfirm(body);
  }

  @Get('get-product/all')
  private async getProduct() {
    return await this.service.getProduct();
  }

  @Get('get-customer/all')
  @UseGuards(JwtAuthGuard)
  private async getCustomer() {
    return this.service.getCustomer();
  }
  @Get('get-order/all')
  @UseGuards(JwtAuthGuard)
  private async getOrder() {
    return this.service.getOrder();
  }
  @Get('get-revenue/:year')
  @UseGuards(JwtAuthGuard)
  private async getRevenue(@Param() year: any) {
    return this.service.getRevenue(year);
  }
}
