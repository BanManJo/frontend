const DemoRepository = require("./contracts/Demo");
const AdminTestRepository = require("./contracts/AdminTest");
const ChickenHouseRepository = require("./contracts/ChickenHouseTest");
const OrderRoomRepository = require("./contracts/OrderRoomTest");

//상일
//Admin: 0x13c97ecd59d2fd674858C7396F900f2761C1A784 / 0x032aDCB9b8953c3e30756d153185999728224Ee3 (mac / window)
//Demo: 0x13c97ecd59d2fd674858C7396F900f2761C1A784 / 0x6164462D5999e5e3483Ac5ac4826a83967A75F72 (mac / window)
//대영
//address: 0xdA30f5B13De3f653e5FFC9c7C000692C5668328C
//demo address : 0x9021Abc37CfA4AA4e533f5d5c1B2Bc8673aF2229
// 성구
//address: 0xba9be9d17Bc8FC3097F134Cf4F06ca8810621f0b
//현수
//Admin: 0xb480fFA7CAE23D224986920C74290003A25DD4b3
//Demo : 0x6fa5604AfE6BE30f5435797D2bB860Ba476A8F6D
module.exports = {
  DEMO_ADDRESS: "0x6164462D5999e5e3483Ac5ac4826a83967A75F72",
  DEMO_ABI: DemoRepository.abi,
  ADMIN_TEST_ADDRESS: "0x032aDCB9b8953c3e30756d153185999728224Ee3",
  ADMIN_TEST_ABI: AdminTestRepository.abi,
  CHICKEN_HOUSE_ABI: ChickenHouseRepository.abi,
  ORDER_ROOM_ABI: OrderRoomRepository.abi,
  GAS_AMOUNT: 4476768
};
