export default new class {
    constructor() {
        this.weight = 10;
        this.listeners = [];
    }

    getWeight(){
        return this.weight
    }

    registerListener(nListener) {
        this.listeners.push(nListener)
    }

    removeListener(nListener) {
        this.listeners = this.listeners.filter(e => e !== nListener);
    }

    change(weight){
        console.log(weight)
        this.weight = weight
        this.listeners.forEach(item=>item())
    }
}()