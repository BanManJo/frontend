import Config from "../config";

export class ChickenHouseRepository {
  web3 = null;
  contractInstance = null;
  account = null;
  gas = 4476768;

  constructor() {
    this.gas = Config.GAS_AMOUNT;
  }

  setWeb3(web3, contract_address) {
    this.web3 = web3;
    this.contractInstance = new this.web3.eth.Contract(
      Config.CHICKEN_HOUSE_ABI,
      contract_address
    );
  }

  getWeb3() {
    return this.web3;
  }

  setAccount(account) {
    this.account = account;
  }

  async _checkAccountAvailable() {
    if (this.account === null) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      this.account = accounts[0];
    }
  }

  async findOrderRoom(roomIndex) {
    try {
      const result = await this.contractInstance.methods
        .findOrderRoom(roomIndex)
        .call();
      return result;
    } catch (e) {
      throw e;
    }
  }

  async createRoom(storeName, price, finishTime, chicken, menuState, ethPaid) {
    try {
      await this._checkAccountAvailable();
      const tx = await this.contractInstance.methods
        .createRoom(storeName, chicken, price, finishTime, menuState)
        .send({
          from: this.account,
          gas: this.gas,
          value: this.web3.utils.toWei(ethPaid)
        });
      // .on("transactionHash", function(hash) {
      // return hash;
      // })
      // .on('receipt', function(receipt){
      //     ...
      // })
      // .on('confirmation', function(confirmationNumber, receipt){
      //     ...
      // })
      // .on("error", function(error, receipt) {
      //   throw error;
      // });
      return tx;
    } catch (e) {
      throw e;
    }
  }

  async matchRoom(roomIndex, ethPaid) {
    try {
      await this._checkAccountAvailable();
      let tx;
      await this.contractInstance.methods
        .matchRoom(roomIndex)
        .send({
          from: this.account,
          gas: this.gas,
          value: this.web3.utils.toWei(ethPaid)
        })
        .on("transactionHash", function(hash) {
          tx = hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
      return tx;
    } catch (e) {
      throw e;
    }
  }

  async approveOrder(storeName, roomIndex) {
    try {
      await this._checkAccountAvailable();
      let _hash;
      await this.contractInstance.methods
        .approveOrder(storeName, roomIndex)
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          _hash = hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
      return _hash;
    } catch (e) {
      throw e;
    }
  }

  async refundToBothUsers(roomIndex) {
    try {
      await this._checkAccountAvailable();
      let _hash;
      await this.contractInstance.methods
        .refundToBothUsers(roomIndex)
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          _hash = hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
      return _hash;
    } catch (e) {
      throw e;
    }
  }

  async finishCook(roomIndex) {
    try {
      console.log("pass1");
      await this._checkAccountAvailable();
      await this.contractInstance.methods
        .finishCook(roomIndex)
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          return hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  }

  async changeOnOff() {
    try {
      await this._checkAccountAvailable();
      await this.contractInstance.methods
        .changeOnOff()
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          return hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  }

  async setMenu(index, chickenName, price, menuState) {
    try {
      await this._checkAccountAvailable();
      await this.contractInstance.methods
        .setMenu(index, chickenName, price, menuState)
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          return hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  }

  async addOneMenu(chickenName, price, menuState) {
    try {
      await this._checkAccountAvailable();
      await this.contractInstance.methods
        .addOneMenu(chickenName, price, menuState)
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          return hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  }

  async getChickenHouse() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getChickenHouse()
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async getStoreMenu() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.contractInstance.methods
          .getStoreMenu()
          .call();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async deleteMenu(index) {
    try {
      await this._checkAccountAvailable();
      await this.contractInstance.methods
        .deleteMenu(index)
        .send({ from: this.account, gas: this.gas })
        .on("transactionHash", function(hash) {
          return hash;
        })
        .on("error", function(error, receipt) {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  }

  async getRoomsCount() {
    try {
      const result = await this.contractInstance.methods.getRoomsCount().call();
      return result;
    } catch (e) {
      throw e;
    }
  }
  //대영 roomCreated event
  async getUserHistory() {
    await this._checkAccountAvailable();
    let history = [];
    const result1 = await this.contractInstance.getPastEvents("roomCreated", {
      filter: { _Ownedby: [this.account] },
      fromBlock: 0,
      toBlock: "latest"
    });
    const result2 = await this.contractInstance.getPastEvents("matchFinish", {
      filter: { _matchedby: [this.account] },
      fromBlock: 0,
      toBlock: "latest"
    });
    return history.concat(result1, result2);
  }

  async roomCreated(cb) {
    await this._checkAccountAvailable();
    this.contractInstance.getPastEvents(
      "roomCreated",
      {
        filter: { _Ownedby: [this.account] },
        fromBlock: 0,
        toBlock: "latest"
      },
      cb
    );
  }

  async matchFinish(cb) {
    await this._checkAccountAvailable();
    this.contractInstance.getPastEvents(
      "matchFinish",
      {
        filter: { _matchedby: [this.account] },
        fromBlock: 0,
        toBlock: "latest"
      },
      cb
    );
  }

  watchIfCreated(cb) {
    const emitter = this.contractInstance.events
      .roomCreated(
        {
          fromBlock: "latest",
          ToBlock: "latest"
        },
        cb
      )
      .on("data", console.log);

    return emitter;
  }

  getCurrentBlock() {
    return new Promise((resolve, reject) => {
      this.web3.eth.getBlockNumber((err, blocknumber) => {
        if (!err) resolve(blocknumber);
        reject(err);
      });
    });
  }

  watchIfMatched(cb) {
    const emitter = this.contractInstance.events
      .matchFinish(
        {
          fromBlock: "latest",
          ToBlock: "latest"
        },
        cb
      )
      .on("data", console.log);
    return emitter;
  }

  watchIfOn(cb) {
    const emitter = this.contractInstance.events
      .onOffAlert(
        {
          fromBlock: "latest",
          ToBlock: "latest"
        },
        cb
      )
      .on("data", console.log);
    return emitter;
  }

  async watchIfApproved(cb) {
    await this._checkAccountAvailable();
    const emitter = this.contractInstance.events
      .roomApproved(
        {
          fromBlock: "latest",
          ToBlock: "latest"
        },
        cb
      )
      .on("data", console.log);
    return emitter;
  }

  async watchIfRejected(cb) {
    await this._checkAccountAvailable();
    const emitter = this.contractInstance.events
      .roomRejected(
        {
          fromBlock: "latest",
          ToBlock: "latest"
        },
        cb
      )
      .on("data", console.log);
    return emitter;
  }
}
