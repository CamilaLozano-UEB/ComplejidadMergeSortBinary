class SortingAndSearching {
    // Método para realizar el Merge Sort
    mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
  
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);
  
      return this.merge(this.mergeSort(left), this.mergeSort(right));
    }
  
    merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
  
    // Método para realizar la búsqueda binaria
    binarySearch(sortedArray, target) {
      let left = 0;
      let right = sortedArray.length - 1;
  
      while (left <= right) {
        const middle = Math.floor((left + right) / 2);
  
        if (sortedArray[middle] === target) {
          return middle; // Se encontró el elemento, devuelve el índice
        } else if (sortedArray[middle] < target) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
  
      return -1; // El elemento no se encontró en el array
    }
  }
  
  // Ejemplo de uso
  const sorter = new SortingAndSearching();
  const unsortedArray = [8, 4, 1, 6, 7, 3, 2, 5];
  const sortedArray = sorter.mergeSort(unsortedArray);
  console.log("Array ordenado:", sortedArray);
  
  const targetNumber = 7;
  const index = sorter.binarySearch(sortedArray, targetNumber);
  
  if (index !== -1) {
    console.log(`El número ${targetNumber} fue encontrado en el índice ${index}.`);
  } else {
    console.log(`El número ${targetNumber} no fue encontrado en el array.`);
  }
  