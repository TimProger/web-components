export default class Range extends HTMLElement {
    constructor(){
        super()
        this.days = []
        this.selected = ''
    }

    static get observedAttributes() {
        return ["values"];
    }

    connectedCallback() {

        this.days = this.getAttribute("values").split(' ').map((el, index)=>{
            console.log(el, index)
            return {
                title: el,
                index: index
            }
        })// Получаю строку с данными, преобразовываю в массив и задаю каждому элементу индекс для отслеживания позиции
        this.selected = this.days[0] // по умолчанию выбран первый элемент
        this.days = this.days.filter((el)=> el.title !== this.selected.title) // удаляю выбранный элемент из массива

        this.innerHTML = `
            <div class="new-select">
                <div class="new-select-selected">${this.selected.title}</div>
                <div" class="new-select-options">
                </div>
            </div>
        `; // вёрстка

        this.days.forEach((el)=>{ // Создаю блоки с днями
            const optionsBlock = document.querySelector('.new-select-options') // Получаю блок блоков
            const optionBlock = document.createElement('div') // Создаю блок
            optionBlock.className = 'new-select-options-option' // Добавляю класс
            optionBlock.innerHTML = el.title // Записываю в блок текст
            optionBlock.addEventListener('click', this.chooseOption) // Добавляю обработчик события нажатия
            optionsBlock.appendChild(optionBlock) // Добавляю блок в документ
        })

        const selectedBlock = document.querySelector('.new-select-selected') // Нахожу блок с выбранным днём
        selectedBlock.addEventListener('click', this.showOptions) // Присваиваю ему обработчик события нажатия
    }

    showOptions = (e) => {
        const optionsBlock = document.querySelector('.new-select-options')
        if(!optionsBlock.classList?.contains('open')){ // проверяю наличие класса
            console.log(0, optionsBlock.classList)
            optionsBlock.classList.add('open') // если нет -- добавляю
        }else{
            console.log(1, optionsBlock.classList)
            optionsBlock.classList.remove('open') // если есть -- удаляю
        }
    }

    chooseOption = (e) => {
        const option = e.target // получаю блок с текстом
        const optionsBlock = document.querySelector('.new-select-options') // блок блоков
        optionsBlock.innerHTML = '' // очищаю его от старых блоков
        const selectedBlock = document.querySelector('.new-select-selected') // получаю блок с выбранным днём
        this.days.splice(this.selected.index, 0, this.selected) // возвращаю день на его место
        this.selected = this.days.find(el => el.title === option.innerText) // нахожу объект с выбранным днём и заношу в this.selected
        this.days = this.days.filter((el)=> el.title !== this.selected.title) // удаляю выбранный объект из общего массива
        selectedBlock.innerText = this.selected.title // меняю текст у блока с выбранным днём
        this.days.forEach((el)=>{ // заполняю блок с днями по той же схеме, что и выше (в connectedCallback)
            const optionsBlock = document.querySelector('.new-select-options')
            const optionBlock = document.createElement('div')
            optionBlock.className = 'new-select-options-option'
            optionBlock.innerHTML = el.title
            optionBlock.addEventListener('click', this.chooseOption)
            optionsBlock.appendChild(optionBlock)
        })
        optionsBlock.classList.remove('open') // скрываю дни
    }
}