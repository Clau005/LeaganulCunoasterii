var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { getClient, createScreener, getScalarFieldValueGenerator, normalizeResolver, normalizeList, getSequenceCounter, } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
var modelFieldDefinitions = [{
        name: "User",
        fields: []
    }, {
        name: "Product",
        fields: []
    }];
function autoGenerateUserScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        email: getScalarFieldValueGenerator().String({ modelName: "User", fieldName: "email", isId: false, isUnique: false, seq: seq }),
        firstName: getScalarFieldValueGenerator().String({ modelName: "User", fieldName: "firstName", isId: false, isUnique: false, seq: seq }),
        lastName: getScalarFieldValueGenerator().String({ modelName: "User", fieldName: "lastName", isId: false, isUnique: false, seq: seq })
    };
}
function defineUserFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("User", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateUserScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().user.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "User",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link User} model.
 *
 * @param options
 * @returns factory {@link UserFactoryInterface}
 */
export function defineUserFactory(options) {
    if (options === void 0) { options = {}; }
    return defineUserFactoryInternal(options);
}
function autoGenerateProductScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        price: getScalarFieldValueGenerator().Int({ modelName: "Product", fieldName: "price", isId: false, isUnique: false, seq: seq }),
        name: getScalarFieldValueGenerator().String({ modelName: "Product", fieldName: "name", isId: false, isUnique: false, seq: seq }),
        description: getScalarFieldValueGenerator().String({ modelName: "Product", fieldName: "description", isId: false, isUnique: false, seq: seq })
    };
}
function defineProductFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Product", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateProductScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().product.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Product",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Product} model.
 *
 * @param options
 * @returns factory {@link ProductFactoryInterface}
 */
export function defineProductFactory(options) {
    if (options === void 0) { options = {}; }
    return defineProductFactoryInternal(options);
}
