const showMadalBtn = document.querySelector('.Show-modal');
const bottonSheet = document.querySelector('.botton-sheet');
const sheetOverley = bottonSheet.querySelector('.sheet-overly');
const dargIcon = bottonSheet.querySelector('.darg-icon');
const sheetContent = bottonSheet.querySelector('.content');

let isDraggin = false, satarY, startHeight;

const showBittonSheet = () => {
    bottonSheet.classList.add('show');
    document.body.style.overflowY = 'hidden';
    updataSheetHeigth(50)
}

const hiddenbottonSheet = () => {
    bottonSheet.classList.remove('show');
    document.body.style.overflowY = 'auto';

}

const updataSheetHeigth = (heigth) => {
    sheetContent.style.height = `${heigth}vh`;
    bottonSheet.classList.toggle('fullscreen', heigth === 100);
}

const dragging = (e) => {
    if (!isDraggin) return;
    const delta = satarY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updataSheetHeigth(newHeight);

}

const dragtart = (e) => {
    isDraggin = true;
    console.log(e.touches?.[0].pageY);
    satarY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottonSheet.classList.add('draggin');
}

const dragStop = () => {
    isDraggin = false;
    bottonSheet.classList.remove('draggin');
    const sheetHeing = parseInt(sheetContent.style.height);
    sheetHeing < 25 ? hiddenbottonSheet() : sheetHeing > 75 ? updataSheetHeigth(100) : updataSheetHeigth(50);
}
document.addEventListener('mouseup', dragStop);
dargIcon.addEventListener('mousedown', dragtart);
document.addEventListener('mousemove', dragging);

document.addEventListener('touchend', dragStop);
dargIcon.addEventListener('touchstart', dragtart);
document.addEventListener('touchmove', dragging);

showMadalBtn.addEventListener('click', showBittonSheet)
sheetOverley.addEventListener('click', hiddenbottonSheet)
