import type { User } from "@prisma/client";
import type { Product } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { Resolver } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
type BuildDataOptions = {
    readonly seq: number;
};
type UserFactoryDefineInput = {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    metadata?: Prisma.NullableJsonNullValueInput | Prisma.InputJsonValue;
};
type UserFactoryDefineOptions = {
    defaultData?: Resolver<UserFactoryDefineInput, BuildDataOptions>;
};
export interface UserFactoryInterface {
    readonly _factoryFor: "User";
    build(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<Prisma.UserCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<Prisma.UserCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.UserCreateInput>[]): PromiseLike<Prisma.UserCreateInput[]>;
    pickForConnect(inputData: User): Pick<User, "id">;
    create(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<User>;
    createList(inputData: number | readonly Partial<Prisma.UserCreateInput>[]): PromiseLike<User[]>;
    createForConnect(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<Pick<User, "id">>;
}
/**
 * Define factory for {@link User} model.
 *
 * @param options
 * @returns factory {@link UserFactoryInterface}
 */
export declare function defineUserFactory(options?: UserFactoryDefineOptions): UserFactoryInterface;
type ProductFactoryDefineInput = {
    id?: string;
    price?: number;
    name?: string;
    description?: string;
};
type ProductFactoryDefineOptions = {
    defaultData?: Resolver<ProductFactoryDefineInput, BuildDataOptions>;
};
export interface ProductFactoryInterface {
    readonly _factoryFor: "Product";
    build(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Prisma.ProductCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Prisma.ProductCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ProductCreateInput>[]): PromiseLike<Prisma.ProductCreateInput[]>;
    pickForConnect(inputData: Product): Pick<Product, "id">;
    create(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Product>;
    createList(inputData: number | readonly Partial<Prisma.ProductCreateInput>[]): PromiseLike<Product[]>;
    createForConnect(inputData?: Partial<Prisma.ProductCreateInput>): PromiseLike<Pick<Product, "id">>;
}
/**
 * Define factory for {@link Product} model.
 *
 * @param options
 * @returns factory {@link ProductFactoryInterface}
 */
export declare function defineProductFactory(options?: ProductFactoryDefineOptions): ProductFactoryInterface;
