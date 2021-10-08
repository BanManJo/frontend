const DemoRepository = require("./contracts/Demo");
const AdminRepository = require("./contracts/Admin");
const ChickenHouseRepository = require("./contracts/ChickenHouse");
const OrderRoomRepository = require("./contracts/OrderRoom");

//상일
//Admin: 0x13c97ecd59d2fd674858C7396F900f2761C1A784 / 0xBd028346396441C472d29bd5Ed89e39cA468ba2E (mac / window)
//Demo: 0x13c97ecd59d2fd674858C7396F900f2761C1A784 / 0x0C0989bdC8c053598BCBfeD5c0A1D597f649008A (mac / window)
//대영
//address:   0xC2DDfB9CFccD3715Eb6cf5624E52F5C419872bEA
//demo address :  0x6AEd0DBc11146532AFd698D348f5E32Ce37E6c4C
// 성구
//Address: 0x313FBdf4A59accfB75D2de26947c0D446BD3BB73
//Demo : 0x201Dc9e68c6Dd6D3eF7D2F6Fb41B5d7EDc93BD44
//현수
//Demo : 0x608B1f9A771C99fF27Ea945a1BE88f496C81Cc99
//Admin: 0x60B9Bb344a656F63b5317e7802d435b92e8Cd445
//OrderRoom:
module.exports = {
  DEMO_ADDRESS: " 0x6AEd0DBc11146532AFd698D348f5E32Ce37E6c4C",
  DEMO_ABI: DemoRepository.abi,
  ADMIN_ADDRESS: "0xC2DDfB9CFccD3715Eb6cf5624E52F5C419872bEA",
  ADMIN_ABI: AdminRepository.abi,
  CHICKEN_HOUSE_ABI: ChickenHouseRepository.abi,
  ORDER_ROOM_ABI: OrderRoomRepository.abi,
  GAS_AMOUNT: 4476768
};
