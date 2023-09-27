document.addEventListener("DOMContentLoaded", ()=>{

    const matrixField = document.getElementById("matrix"),
        submitButton = document.getElementById("checkButton");

    submitButton.addEventListener("click", ()=>{
        let matrix = readMatrix(matrixField.value);

        if(isMatrixValid(matrix)) {
            if (isMatrixDiagonal(matrix) === true) {
                alert("Your matrix is diagonal!");
            } else {
                alert("Your matrix is not diagonal!");
            }
        }else{
            alert("Your matrix is not valid!");
        }
    });
    function readMatrix(matrix){
        let matrixArray = matrix.trim().replace(/\n/g, "-").split("-");

        for(let i = 0; i < matrixArray.length; i++){
            matrixArray[i] = matrixArray[i].split(" ");
        }
        return matrixArray;
    }
    function isMatrixValid(matrix){
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i].length !== matrix[0].length){
                return false;
            }
        }
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(isNaN(matrix[i][j])){
                    return false;
                }
            }
        }
        return true;
    }
    function isMatrixDiagonal(matrix){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(+matrix[i][j] !== 0){
                    if(i != j){
                        return false;
                    }
                }
            }
        }
        return true;
    }
});