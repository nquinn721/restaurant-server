"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var restaurant_module_1 = require("./restaurant/restaurant.module");
var category_entity_1 = require("./restaurant/models/category.entity");
var item_entity_1 = require("./restaurant/models/item.entity");
var modification_entity_1 = require("./restaurant/models/modification.entity");
var side_entitity_1 = require("./restaurant/models/side.entitity");
var location_enitity_1 = require("./restaurant/models/location.enitity");
var auth_module_1 = require("./auth/auth.module");
var user_module_1 = require("./user/user.module");
var user_entity_1 = require("./user/models/user.entity");
var typeormOptions = {
    type: 'mysql',
    host: '35.237.213.78',
    port: 3306,
    username: 'root',
    password: 'Restaurant1234',
    database: 'restaurant',
    entities: [category_entity_1.Category, item_entity_1.Item, location_enitity_1.Location, modification_entity_1.Modification, side_entitity_1.Side, user_entity_1.User],
    logging: false,
    synchronize: true,
    extra: {
        socketPath: '/cloudsql/elevated-column-284822:us-east1:restaurant'
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(typeormOptions),
                restaurant_module_1.RestaurantModule,
                auth_module_1.AuthModule,
                user_module_1.UserModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
