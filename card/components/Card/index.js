export default class Avatar extends HTMLElement {

  connectedCallback() {
    this.data = {
      type: this.type,
      number: this.number,
      owner: this.owner,
      expire: this.expire
    }
    this.innerHTML = `
            <div class="card">
                <div class="card__bank_name">Сбербанк</div>
                <div class="card__number">${this.data.number}</div>
                <div class="card__date">Expire date <span>${this.data.expire}</span></div>
                <div class="card__owner_name">${this.data.owner.toUpperCase()}</div>
                </div>
            </div>
        `;
  }

  get type(){
    return this.getAttribute("type");
  }

  get owner(){
    return this.getAttribute("owner")
  }

  get expire(){
    return this.getAttribute("expire")
  }

  get number(){
    let num = this.getAttribute("number")
    return num.replace(/[^\dA-Z]/g, '')
              .replace(/(.{4})/g, '$1 ').trim();
  }
}