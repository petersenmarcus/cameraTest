//
//
// const canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')
//
function chooseFile() {
    document.getElementById('input').click()
}
// // e.target.files
//
// const fileInput = document.getElementById('file-input');
// // fileInput.addEventListener('change', (e) => context.drawImage(e.target.files[0].name, 0, 0, canvas.width, canvas.height));
// // fileInput.addEventListener('change', (e) => console.log(e.target.files[0].name));
//
//
// fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));
//
// const output = document.getElementById('output');
//
// function doSomethingWithFiles(fileList) {
//   let file = null;
//
//   for (let i = 0; i < fileList.length; i++) {
//     if (fileList[i].type.match(/^image\//)) {
//       file = fileList[i];
//       break;
//     }
//   }
//
//   if (file !== null) {
//     // output.src = URL.createObjectURL(file);
//     let canImg = URL.createObjectURL(file)
//     canvas.renderImage(canImg)
//     console.log(output.src);
//     context.drawImage(canImg, 0, 0, canvas.width, canvas.height)
//   }
// }



var canvas = document.getElementById('canvas');
var input = document.getElementById('input');


function picToBlob() {
    canvas.renderImage(input.files[0]);
}

HTMLCanvasElement.prototype.renderImage = function(blob) {

    var ctx = this.getContext('2d');
    var img = new Image();

    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    img.src = URL.createObjectURL(blob);
};

input.addEventListener('change', picToBlob, false);
