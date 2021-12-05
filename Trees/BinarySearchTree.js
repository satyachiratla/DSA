class Node {
    constructor(value) {
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        var current = this.root;
        found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BredthFirstSearch() {
        var node = this.root;
        var data = [];
        var queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        var data = [];
        
        function traverse(node) {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        var data = [];
        
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node);
        }
        traverse(this.root);
        return data;
    }

    DFSINOrder() {
        var data = [];
        
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(12);
tree.insert(7);
tree.insert(16)

tree.find(15); // true
tree.find(1); // false