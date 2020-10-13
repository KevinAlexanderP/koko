import { Controller , Get , Post , Put , Delete,Res, HttpStatus, Body} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import {ProductService } from "./product.service"

@Controller('product')
export class ProductController {

    constructor(private productService : ProductService){}

    @Post('/create')
    // decorador y su name 
    // body , su nombre y el tipo de 
   async createPost(@Res() res,  @Body() createProductDTO:CreateProductDTO){
       const product = await this.productService.createProduct(createProductDTO)
        console.log(createProductDTO)
       return res.status(HttpStatus.OK).json({
            message: 'received',
            product: product 
        });
    }
}
