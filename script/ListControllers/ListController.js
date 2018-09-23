class ListController {

	constructor(){
        this.addAtivEl = document.querySelector('.add-ativ');
        this.listEl = document.querySelector('.list');
        this.btnAdd = document.querySelector('.btn-add');
        this.onBtnAdd();
    }

    btnDel(item){

        item.querySelector('.btn-del').addEventListener('click', ev=>{

            item.remove();

        })

    }// End onBtnDel

    onBtnAdd(){

        this.btnAdd.addEventListener('click', ev=>{
            let ativ = this.addAtivEl.value;
            if(ativ != ''){
                this.addAtivEl.value = '';
                this.addAtiv(ativ)  
            }
        });

    }// End onBtnAdd

    addAtiv(ativ){

        let item = document.createElement('div');
        item.classList.add('item')

        item.innerHTML = `
            <p>${ativ}</p>
            <button class="btn-del">Excluir</button>
        `;

        this.listEl.appendChild(item);

        this.btnDel(item);

    }// End addAtiv

}