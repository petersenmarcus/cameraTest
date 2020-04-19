const fileInput = document.getElementById('file-input');

  fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));

  const output = document.getElementById('output');

    function doSomethingWithFiles(fileList) {
      let file = null;

      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type.match(/^image\//)) {
          file = fileList[i];
          break;
        }
      }

      if (file !== null) {
        output.src = URL.createObjectURL(file);
      }
    }
