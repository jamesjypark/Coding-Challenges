/**
 * Question provided from HackerRank
 * BFS: Shortest Reach in a Graph
 * https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem
 *
 * Using BFS to find distance of all nodes from a start node on a graph
 */

function processData(input) {
  //Enter your code here
  let lines = input.split("\n");
  let lineStart = 0;
  let commandLength = JSON.parse(lines[0]);
  lineStart++;
  for (let i = 0; i < commandLength; i++) {
    let numNodes = JSON.parse(lines[lineStart].split(" ")[0]);
    let numEdges = JSON.parse(lines[lineStart].split(" ")[1]);
    let nodes = [];
    lineStart += 1;
    // Create nodes for command
    for (let i = 0; i < numNodes; i++) {
      nodes[i] = new Node(i + 1);
    }
    // Connect edges of nodes
    for (let i = 0; i < numEdges; i++) {
      let firstNode = JSON.parse(lines[lineStart].split(" ")[0]);
      let secondNode = JSON.parse(lines[lineStart].split(" ")[1]);
      lineStart += 1;
      nodes[firstNode - 1].neighbors.push(nodes[secondNode - 1]);
      nodes[secondNode - 1].neighbors.push(nodes[firstNode - 1]);
    }
    let startNode = nodes[JSON.parse(lines[lineStart]) - 1];
    startNode.distance = 0;
    computeDistance(nodes, startNode);
    let returnArray = nodes
      .filter(node => node !== startNode)
      .map(node => node.distance);
    console.log(returnArray.join(" "));
    lineStart += 1;
  }
}

function computeDistance(nodes, startNode) {
  let queue = [];
  queue.push(startNode);
  while (queue.length !== 0) {
    let node = queue.shift();
    node.neighbors.forEach(neighborNode => {
      if (neighborNode.distance === -1) {
        neighborNode.distance = node.distance + 6;
        queue.push(neighborNode);
      }
    });
  }
}
function Node(id) {
  this.id = id;
  this.distance = -1;
  this.neighbors = [];
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
