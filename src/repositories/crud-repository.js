const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const respose = await this.model.create(data);
      return respose;
    } catch (error) {
      Logger.error("Something went wrong in crud Repo: create");
      throw error;
    }
  }
  async destroy(data) {
    try {
      const respose = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return respose;
    } catch (error) {
      Logger.error("Something went wrong in crud Repo: destroy");
      throw error;
    }
  }
  async get(data) {
    try {
      const respose = await this.model.findByPk(data);
      return respose;
    } catch (error) {
      Logger.error("Something went wrong in crud Repo: get");
      throw error;
    }
  }
  async getAll() {
    try {
      const respose = await this.model.findAll();
      return respose;
    } catch (error) {
      Logger.error("Something went wrong in crud Repo: getAll");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const respose = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return respose;
    } catch (error) {
      Logger.error("Something went wrong in crud Repo: update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
