import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './schemas/product.schema';
import {Product} from './interfaces/product.interface'



@Module({
  
  imports: [
    // me permite definir un nuevo esquema
    MongooseModule.forFeature([
      {name: 'Product', schema: ProductSchema}
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
