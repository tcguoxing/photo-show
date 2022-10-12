export default class Store {
  static state = {
    name: '',
    from: ''
  }
  static recordState(name, from) {
    this.state.name = name;
    this.state.from = from;
  }
  static readState() {
    return this.state
  }
}
