let firstNode = { name: "susie", next: "rkjasj" };
let secondNode = { name: "sam", next: "asnan" };
let thirdNode = { name: "assane", next: "sav"}
let lastNode = { name: "charlie", next: null };
let collection = { whana: firstNode, rkjasj: secondNode, asnan: thirdNode, sav: lastNode };
let linkedList = "whana"
let head = collection[linkedList];

function getName(node) {
  return node["name"]
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  let nextNode = head["next"]
  return collection[nextNode]
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  for (let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node 
}

function addressAt(index, linkedList, collection) {
  if (index > 0) {
    let node = nodeAt(--index, linkedList, collection)
    return node.next
  } else {
    return linkedList
  }
}

function indexAt(node, collection, linkedList) {
  let index = 0
  if (node !== headNode(linkedList, collection)) {
    node = nodeAt(index, linkedList, collection)
    index++
  } else {
    return index
  }
  return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previousNode = nodeAt(index-1, linkedList, collection)
  let currentNode = nodeAt(index, linkedList, collection);
  let currentNodeIndex = indexAt(currentNode, collection, linkedList)
  let currentNodeAdress = addressAt(currentNodeIndex, linkedList, collection)
  let newNode = collection[newNodeAddress]
  previousNode.next = newNodeAddress
  newNode.next = currentNodeAdress
 }


function deleteNodeAt(index, linkedList, collection) {
  let currentNode;
  let previousNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++){
    currentNode = next(previousNode, collection)
    previousNode.next = currentNode.next
  }
  return currentNode.next
}
















// function getName(node) {
//   return node.name
// }

// function next(node, collection) {
//   let nextNode = node["next"]
//   return collection[nextNode]
// }

// function headNode(linkedList, collection) {
//   return collection[linkedList];
// }

// function nodeAt(index, linkedList, collection ) {
//   let node = collection[linkedList]
//   for (let i = 0; i < index; ++i){
//     node = next(node, collection)
//   }
//   return node
// }

// function addressAt(index, linkedList, collection) {
//   if (index > 0) {
//     let node = nodeAt(--index, linkedList, collection)
//     return node.next
//   }
//   else {
//     return linkedList
//   }
// }

// function indexAt(node, collection, linkedList) {
//   let index = 0
//   if (node != headNode(linkedList, collection)) {
//     index++
//     node = next(node, collection)
//   }
//   else {
//     return index
//   }
//   return index
// }

// function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  // let previousNode = nodeAt(index-1, linkedList, collection)
  // let currentNode = nodeAt(index, linkedList, collection)  
  // let previousNodeIndex = indexAt(previousNode, collection, linkedList)
  // let currentNodeIndex = indexAt(currentNode, collection, linkedList)
  // let previousNodeAddress = addressAt(previousNodeIndex, linkedList, collection)
  // let nodeAddress = addressAt(currentNodeIndex, linkedList, collection);
  // previousNode.next = newNodeAddress; 
  // let newNode = collection[newNodeAddress]
  // newNode.next = nodeAddress
// }

// function deleteNodeAt(index, linkedList, collection) {
//   let currentNode;
//   let previousNode = headNode(linkedList, collection)
//   for (let i = 0; i < index; ++i){
//     currentNode = next(previousNode, collection)
//   }
//   return previousNode.next = currentNode.next
// }