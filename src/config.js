const DemoRepository = require("./contracts/Demo");
const AdminRepository = require("./contracts/Admin");
const ChickenHouseRepository = require("./contracts/ChickenHouse");
const OrderRoomRepository = require("./contracts/OrderRoom");

//상일
//Admin: 0x13c97ecd59d2fd674858C7396F900f2761C1A784 / 0x3fB752462A3E1B258065D6ccA050c29dcA4d89A7 (mac / window)
//Demo: 0x13c97ecd59d2fd674858C7396F900f2761C1A784 / 0x0C0989bdC8c053598BCBfeD5c0A1D597f649008A (mac / window)
//대영
//address:   0xF1e056e1C62691419F77a592EbeD21B01C4d87Ac
//demo address :  0x0FB5516C550bfCE1e19cE1F912bCaeB94aAa3fde
// 성구
//Address: 0x313FBdf4A59accfB75D2de26947c0D446BD3BB73
//Demo : 0x201Dc9e68c6Dd6D3eF7D2F6Fb41B5d7EDc93BD44
//현수
//Demo : 0x6E4ec6dF29686F84298f1304B4e4723E28e7693E
//Admin: 0xD6f163b0334E02Ea37fe5c9Bd53b610524a569AE
//OrderRoom:
module.exports = {
  DEMO_ADDRESS: "0x0FB5516C550bfCE1e19cE1F912bCaeB94aAa3fde",
  DEMO_ABI: DemoRepository.abi,
  ADMIN_ADDRESS: "0x3fB752462A3E1B258065D6ccA050c29dcA4d89A7",
  ADMIN_ABI: AdminRepository.abi,
  CHICKEN_HOUSE_ABI: ChickenHouseRepository.abi,
  ORDER_ROOM_ABI: OrderRoomRepository.abi,
  GAS_AMOUNT: 4476768
};
