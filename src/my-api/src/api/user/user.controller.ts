import {
  ClassSerializerInterceptor,
  Controller,
  Req,
  UseGuards,
  UseInterceptors,
  Put,
  Body,
  Inject,
  Get,
  Param,
} from '@nestjs/common';
import { UpdateNameDto } from './user.dto';
import { UserFromApi } from './user.entity';
import { UserService } from './user.service';
import { Post } from '@nestjs/common/decorators';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { auth } from 'google-auth-library';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Post('login')
  private async loginCustomer(@Body() body, @Req() req: Request): Promise<any> {
    return await this.service.loginCustomer(body);
  }
  @Get('get-customer')
  private async getCustomer(@Req() req: Request) {
    return await this.service.getUserbyToken(
      req.headers.authorization.toString().substring(6),
    );
  }

  @Post('update-profile/:email')
  private async updateProfile(
    @Param() param,
    @Body() body,
    @Req() req: Request,
  ) {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.updateProfile(param, body, auth);
  }

  @Get('get-cate')
  private async getCate() {
    return await this.service.getCate();
  }
  @Get('get-brand')
  private async getBrand() {
    return await this.service.getBrand();
  }
  @Get('get-color')
  private async getColor() {
    return await this.service.getColor();
  }
  @Get('get-size')
  private async getSize() {
    return await this.service.getSize();
  }
  @Get('get-detail-product/:id')
  private async getDetailProduct(
    @Param() id_product: any,
    @Req() req: Request,
  ) {
    return await this.service.getDetailProduct(id_product.id);
  }

  @Get('get-product/:id')
  private async getMainPage(@Param() id_page: any) {
    console.log(id_page);
    return this.service.getMainPage(id_page.id);
  }
  @Get('get-product/apply/:id')
  private async getMainPageApply(@Param() id_page: any) {
    console.log(id_page);
    return this.service.getMainPageApply(id_page.id);
  }

  @Get('get-user')
  private async getUser(): Promise<UserFromApi[]> {
    return await this.service.getUser();
  }

  @Get('cart-list/:id_api')
  // @UseGuards()
  private async getCart(@Param() id, @Req() req: Request): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.getCart(id.id_api, auth);
  }

  @Get('delete-cart/:id_api/:id_item')
  // @UseGuards()
  private async deleteCart(@Param() constr, @Req() req: Request): Promise<any> {
    let authen = req.headers.authorization.toString().substring(6);
    return await this.service.deleteCart(constr, authen);
  }

  @Post('cart/update-cart/:id_api/:id_item')
  // @UseGuards()
  private async updateCart(
    @Param() constr,
    @Body() body: any,
    @Req() req: Request,
  ): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    console.log(constr);
    return await this.service.updateCart(
      constr.id_api,
      constr.id_item,
      body,
      auth,
    );
  }

  @Post('add-cart/:id_api')
  // @UseGuards()
  private async addToCart(
    @Param() constr,
    @Body() body: any,
    @Req() req: Request,
  ): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.addToCart(constr.id_api, body, auth);
  }

  @Post('cart/buy-product/:id_user/:list_id')
  private async buyProduct(
    @Param() list_id,
    @Body() body,
    @Req() req: Request,
  ) {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.buyProduct(
      list_id.id_user,
      list_id.list_id,
      body,
      auth,
    );
  }

  @Get('voucher-list/:id_api')
  // @UseGuards()
  private async getVoucher(@Param() id, @Req() req: Request): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.getVoucher(id.id_api, auth);
  }

  @Get('order-list/:id_api/:tab')
  // @UseGuards()
  private async getOrder(@Param() id, @Req() req: Request): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.getOrder(id.id_api, id.tab, auth);
  }
  @Get('del-order/:id_api/:id_order')
  // @UseGuards()
  private async removeOrder(@Param() id, @Req() req: Request): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.removeOrder(id.id_api, id.id_order, auth);
  }
  @Get('buy-again-order/:id_api/:id_order')
  // @UseGuards()
  private async BuyAgainOrder(@Param() id, @Req() req: Request): Promise<any> {
    let auth = req.headers.authorization.toString().substring(6);
    return await this.service.BuyAgainOrder(id.id_api, id.id_order, auth);
  }
}
