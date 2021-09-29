import Config from "../config";

export class AdminTestRepository {
  web3 = null;
  contractInstance = null;
  account = "";
  gas = 4476768;

  constructor() {
    this.gas = Config.GAS_AMOUNT;
  }

  setWeb3(web3) {
    this.web3 = web3;
    this.contractInstance = new this.web3.eth.Contract(
      Config.ADMIN_TEST_ABI,
      Config.ADMIN_TEST_ADDRESS
    );
  }

  getWeb3() {
    return this.web3;
  }

  setAccount(account) {
    this.account = account;
  }

  async getBalanceOfRomm(storeName, roomNumber) {
    // await window.ethereum.request({ method: "eth_requestAccounts" });
    return new Promise(async (resolve, reject) => {
      try {
        var result = await this.contractInstance.methods
          .getBalanceOfRomm(storeName, roomNumber)
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async createRoom(storeName) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods.createRoom(storeName).send(
          { from: accounts[0], gas: 4476768 },

          (err, transaction) => {
            if (!err) resolve(transaction);
            reject(err);
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  async registerChickenHouse(
    storeName,
    latitude,
    longitude,
    chickenNames,
    prices,
    sunsals
  ) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log("passs");
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .registerChickenHouse(
            storeName,
            latitude,
            longitude,
            chickenNames,
            prices,
            sunsals
          )
          .send(
            { from: accounts[0], gas: 4476768 },

            (err, transaction) => {
              if (!err) resolve(transaction);
              reject(err);
            }
          );
      } catch (e) {
        reject(e);
      }
    });
  }

  async getChickenHouse(storeName) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getChickenHouse(storeName)
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async getChickenHouseByIndex(idx) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getChickenHouse2(idx)
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  // 스토어 개수 반환
  // getStoreCount() {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const result = await this.contractInstance.methods
  //         .getStoreCount() // 솔리디티 컨트랙트의 메소드 이름
  //         .call(); // Gas 소모가 없는 함수를 호출 하는 방식 vs send
  //       resolve(result); // 2
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // }

  async getStoreCount() {
    try {
      const result = await this.contractInstance.methods
        .getStoreCount() // 솔리디티 컨트랙트의 메소드 이름
        .call(); // Gas 소모가 없는 함수를 호출 하는 방식 vs send
      return result; // 2
    } catch (e) {
      throw e;
    }
  }

  async getStoreMenu(storeName) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getStoreMenu(storeName)
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async createRoom(storeName, price, finishTime, chicken) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log("passs");
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .createRoom(storeName, price, finishTime, chicken)
          .send(
            { from: accounts[0], gas: 4476768 },

            (err, transaction) => {
              if (!err) resolve(transaction);
              reject(err);
            }
          );
      } catch (e) {
        reject(e);
      }
    });
  }

  async getRoomInfo(storeName, roomIdx) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getRoomInfo(storeName, roomIdx)
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async getRoomsCount(storeName) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getRoomsCount(storeName)
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  getCurrentBlock() {
    return new Promise((resolve, reject) => {
      this.web3.eth.getBlockNumber((err, blocknumber) => {
        if (!err) resolve(blocknumber);
        reject(err);
      });
    });
  }
}
