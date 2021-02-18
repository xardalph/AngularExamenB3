export class Product {
  constructor(data?: any) {
    if(data){
      if (data.hasOwnProperty('id')){
        this.id = data.id;
      }
      if (data.hasOwnProperty('name')){
        this.name = data.name;
      }
      if (data.hasOwnProperty('texture')){
        this.texture = data.texture;
      }
      if (data.hasOwnProperty('grammage')){
        this.grammage = data.grammage;
      }
      if (data.hasOwnProperty('color')){
        this.color = data.color;
      }
    }

  }

  public id = 0;
  public name = '';
  public texture = '';
  public grammage = 0;
  public color = '';
}
