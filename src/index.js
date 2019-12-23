class Node {
    constructor (prim = null, parents = [], children = []) {
        this.prim = prim;
        this.children = children;
        this.parents = parents;
    }

    toString () {
        if(this.prim)
            return this.prim;
        
        const prims = [];

        // TODO: Paralelize.
        this.children.map(child =>
            prims.push(child.toString())
        );
    }

    equals (otherNode) {
        if (this.prim ^ otherNode.prim)
            return false;// If only one is prim, they are not equal
        else if (this.children.length != otherNode.children.length)
            return false;// If children count is not equal, nodes are not equal.
        else if (this.prim)
            return this.prim == otherNode.prim;// If this is a prim, compare with other prim.
        else
            return this == otherNode; // TODO: Compare all children. (tipa sve u prvom mora da postoji u drugom ili obrnuto)
    }
}

class Context {
    constructor () {
        this.primMap = {};
        this.timeTrack = [];
    }

    query (query) {
        const prims = query.split(/,| /).map(prim => prim.trim());
        const primNodes = [];

        prims.map(prim => {
            const primNode = this.primMap[prim];

            if (!primNode)// If this node does not exist in the map, create a new one and add it to the map.
                this.primMap[prim] = primNode = new Node(prim = prim);

            primNodes.push(primNode);
        });
        
        // TODO: Now match with all that contain this prim nodes and return as the part of the query.
    }
}

console.log(true ^ false);