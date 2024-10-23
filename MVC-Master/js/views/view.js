
class View {

  constructor(){

    this.div = document.createElement('div');

    //this.div.appendChild();

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
