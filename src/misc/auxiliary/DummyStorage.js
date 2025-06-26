class DummyStorage {
  /**
   * @type {Record<string, any>}
   */
  _data;

  /**
   * @returns
   * @param {Record<string, any>} data
   */
  constructor(data) {
    this._data = data;
  }

  /**
   * @returns
   * @param {string} name
   * @param {any} value
   */
  setItem(name, value) {
    this._data[name] = value;
    return this;
  }

  /**
   * @param {string} name
   * @returns
   */
  getItem(name) {
    const value = this._data[name];
    if (typeof value === "undefined") {
      return null;
    }
    return value;
  }
}

/**
 * @param {any[]} data
 * @returns
 */
function dummyStorageOf(data) {
  return new DummyStorage(data);
}

export { DummyStorage, dummyStorageOf };
