const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {

    return this.rootNode
  }

  add(data) {
    let node = new Node(data)

    function addNode(tempNode, newNode) {
      let direction = newNode.data < tempNode.data ? 'left' : 'right'

      if (tempNode[direction]) {
        addNode(tempNode[direction], newNode)
      } else {
        tempNode[direction] = newNode
      }

    }
    if (this.root()) {
      addNode(this.root(), node)

    } else {
      this.rootNode = node
    }

  }
  has(data) {
    let parent = this.root()
    if (parent == null) return false
    let direction = data > parent.data ? 'right' : 'left'
    if (parent.data == data) return true
    while (parent[direction]) {
      parent = parent[direction]
      if (parent.data == data) return true
      direction = data > parent.data ? 'right' : 'left'
    }
    return false;
  }

  find(data) {
    let node = this.root()
    if(!node) return null
    let direction = data > node.data ? 'right' : 'left'
    
    if (node.data == data) return node
    while (node[direction]) {
      node = node[direction]
      if (node.data == data) return node
      direction = data > node.data ? 'right' : 'left'
    }

    return null
  }
  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let parent = this.root()
    let direction = 'left'
    while (parent[direction]) {
      parent = parent[direction]
    }
    return parent.data;
  }

  max() {
    let parent = this.root()
    while (parent.right) {
      parent = parent.right
    }
    return parent.data;
  }
}

module.exports = {
  BinarySearchTree
};