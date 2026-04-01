export interface Problem {
  id: number;
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  company_tags: string[];
  description: string;
  input_format: string;
  output_format: string;
  constraints: string;
  sample_input: string;
  sample_output: string;
  starter_code: {
    java: string;
  };
}

export const problems: Problem[] = [
  {
    "id": 1,
    "title": "Merge Intervals #1",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Flipkart"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 2,
    "title": "Two Sum #2",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Flipkart",
      "Google"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 3,
    "title": "Kth Largest Element #3",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Meta",
      "Uber",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 4,
    "title": "Merge Intervals #4",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Flipkart"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 5,
    "title": "Maximum Subarray #5",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Oracle",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 6,
    "title": "Longest Substring Without Repeating Characters #6",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Meta",
      "Oracle",
      "Intuit"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 7,
    "title": "Valid Parentheses #7",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 8,
    "title": "Top K Frequent Elements #8",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Intuit",
      "SAP"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 9,
    "title": "Minimum Window Substring #9",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Morgan Stanley",
      "Adobe",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 10,
    "title": "Word Ladder #10",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "SAP"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 11,
    "title": "Binary Tree Inorder Traversal #11",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Netflix",
      "Flipkart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 12,
    "title": "Product of Array Except Self #12",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Netflix",
      "Google",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 13,
    "title": "Valid Parentheses #13",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 14,
    "title": "Detect Cycle in Linked List #14",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 15,
    "title": "Container With Most Water #15",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Uber",
      "SAP",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 16,
    "title": "Container With Most Water #16",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 17,
    "title": "Binary Tree Inorder Traversal #17",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Goldman Sachs",
      "Walmart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 18,
    "title": "Binary Tree Inorder Traversal #18",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Adobe",
      "SAP",
      "Meta"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 19,
    "title": "Course Schedule #19",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 20,
    "title": "Climbing Stairs #20",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 21,
    "title": "Climbing Stairs #21",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Adobe",
      "Intuit",
      "Uber"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 22,
    "title": "Rotate Image #22",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 23,
    "title": "Minimum Window Substring #23",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Flipkart",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 24,
    "title": "Container With Most Water #24",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Flipkart",
      "Netflix",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 25,
    "title": "Binary Tree Inorder Traversal #25",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 26,
    "title": "Rotate Image #26",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Netflix",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 27,
    "title": "Reverse Linked List #27",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Netflix",
      "Microsoft",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 28,
    "title": "Merge Intervals #28",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Morgan Stanley"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 29,
    "title": "LRU Cache #29",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Adobe",
      "Google"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 30,
    "title": "Container With Most Water #30",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "SAP",
      "Adobe",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 31,
    "title": "Course Schedule #31",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 32,
    "title": "Coin Change #32",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Morgan Stanley",
      "Goldman Sachs"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 33,
    "title": "Coin Change #33",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "SAP",
      "Uber",
      "Netflix"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 34,
    "title": "Binary Tree Inorder Traversal #34",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Amazon"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 35,
    "title": "Container With Most Water #35",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Adobe",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 36,
    "title": "Rotate Image #36",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Amazon",
      "Meta",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 37,
    "title": "Kth Largest Element #37",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 38,
    "title": "Merge Intervals #38",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Intuit",
      "Microsoft"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 39,
    "title": "Maximum Subarray #39",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Meta",
      "Intuit",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 40,
    "title": "Number of Islands #40",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Morgan Stanley"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 41,
    "title": "Coin Change #41",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Oracle",
      "Walmart"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 42,
    "title": "Longest Substring Without Repeating Characters #42",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Walmart",
      "Flipkart",
      "Google"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 43,
    "title": "Longest Substring Without Repeating Characters #43",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Oracle"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 44,
    "title": "Word Ladder #44",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Goldman Sachs",
      "Intuit"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 45,
    "title": "Top K Frequent Elements #45",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Adobe",
      "Intuit",
      "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 46,
    "title": "LRU Cache #46",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 47,
    "title": "Climbing Stairs #47",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 48,
    "title": "Two Sum #48",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Oracle",
      "Google"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 49,
    "title": "Valid Parentheses #49",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 50,
    "title": "Word Ladder #50",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Intuit",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 51,
    "title": "LRU Cache #51",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Uber",
      "Goldman Sachs",
      "Amazon"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 52,
    "title": "Merge Intervals #52",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Amazon"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 53,
    "title": "Two Sum #53",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Microsoft",
      "SAP"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 54,
    "title": "LRU Cache #54",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Uber",
      "Apple"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 55,
    "title": "Top K Frequent Elements #55",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Flipkart"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 56,
    "title": "Climbing Stairs #56",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Netflix",
      "Morgan Stanley"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 57,
    "title": "LRU Cache #57",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Morgan Stanley",
      "Meta",
      "Microsoft"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 58,
    "title": "Detect Cycle in Linked List #58",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 59,
    "title": "Container With Most Water #59",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Netflix",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 60,
    "title": "Longest Substring Without Repeating Characters #60",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Morgan Stanley",
      "Oracle",
      "SAP"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 61,
    "title": "Valid Parentheses #61",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 62,
    "title": "Reverse Linked List #62",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Morgan Stanley",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 63,
    "title": "Valid Parentheses #63",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Flipkart",
      "Google",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 64,
    "title": "Word Ladder #64",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Walmart"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 65,
    "title": "Word Ladder #65",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "SAP",
      "Walmart"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 66,
    "title": "Two Sum #66",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "SAP",
      "Google",
      "Amazon"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 67,
    "title": "Number of Islands #67",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Google"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 68,
    "title": "Binary Tree Inorder Traversal #68",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Google",
      "Netflix"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 69,
    "title": "Two Sum #69",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Morgan Stanley",
      "Apple",
      "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 70,
    "title": "LRU Cache #70",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Walmart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 71,
    "title": "Reverse Linked List #71",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Meta",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 72,
    "title": "Minimum Window Substring #72",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Oracle",
      "Intuit",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 73,
    "title": "Word Ladder #73",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 74,
    "title": "LRU Cache #74",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Netflix",
      "Flipkart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 75,
    "title": "Valid Parentheses #75",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Intuit",
      "Flipkart",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 76,
    "title": "LRU Cache #76",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Apple"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 77,
    "title": "Binary Tree Inorder Traversal #77",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "SAP",
      "Morgan Stanley"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 78,
    "title": "Container With Most Water #78",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Microsoft",
      "Google",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 79,
    "title": "Rotate Image #79",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 80,
    "title": "Minimum Window Substring #80",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Apple",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 81,
    "title": "Kth Largest Element #81",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Adobe",
      "Intuit",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 82,
    "title": "Word Ladder #82",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Walmart"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 83,
    "title": "Kth Largest Element #83",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Netflix",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 84,
    "title": "Climbing Stairs #84",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Intuit",
      "Meta",
      "Apple"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 85,
    "title": "Climbing Stairs #85",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Flipkart"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 86,
    "title": "Word Ladder #86",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Goldman Sachs",
      "Flipkart"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 87,
    "title": "Maximum Subarray #87",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Adobe",
      "Microsoft",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 88,
    "title": "Binary Tree Inorder Traversal #88",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Morgan Stanley"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 89,
    "title": "Reverse Linked List #89",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Intuit",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 90,
    "title": "Minimum Window Substring #90",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Flipkart",
      "Goldman Sachs",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 91,
    "title": "Longest Substring Without Repeating Characters #91",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Oracle"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 92,
    "title": "Word Ladder #92",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Oracle",
      "SAP"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 93,
    "title": "Reverse Linked List #93",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Netflix",
      "Google",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 94,
    "title": "Reverse Linked List #94",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 95,
    "title": "Word Ladder #95",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "SAP",
      "Flipkart"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 96,
    "title": "Kth Largest Element #96",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Uber",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 97,
    "title": "Number of Islands #97",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Apple"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 98,
    "title": "LRU Cache #98",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "SAP",
      "Oracle"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 99,
    "title": "Two Sum #99",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Meta",
      "Amazon",
      "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 100,
    "title": "Rotate Image #100",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 101,
    "title": "Number of Islands #101",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Goldman Sachs",
      "Intuit"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 102,
    "title": "LRU Cache #102",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Walmart",
      "Uber",
      "SAP"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 103,
    "title": "Binary Tree Inorder Traversal #103",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Walmart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 104,
    "title": "Coin Change #104",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Netflix",
      "Apple"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 105,
    "title": "Minimum Window Substring #105",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Microsoft",
      "Apple",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 106,
    "title": "Rotate Image #106",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 107,
    "title": "Number of Islands #107",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Microsoft",
      "Morgan Stanley"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 108,
    "title": "Course Schedule #108",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Microsoft",
      "Intuit",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 109,
    "title": "Minimum Window Substring #109",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 110,
    "title": "Valid Parentheses #110",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Flipkart",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 111,
    "title": "LRU Cache #111",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Amazon",
      "Microsoft",
      "Flipkart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 112,
    "title": "Detect Cycle in Linked List #112",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 113,
    "title": "Top K Frequent Elements #113",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Intuit",
      "Google"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 114,
    "title": "Two Sum #114",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs",
      "Uber",
      "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 115,
    "title": "Number of Islands #115",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Goldman Sachs"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 116,
    "title": "Longest Substring Without Repeating Characters #116",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Google",
      "Morgan Stanley"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 117,
    "title": "Container With Most Water #117",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Netflix",
      "Flipkart",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 118,
    "title": "Reverse Linked List #118",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 119,
    "title": "Coin Change #119",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Oracle",
      "Morgan Stanley"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 120,
    "title": "Top K Frequent Elements #120",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Intuit",
      "Netflix",
      "Oracle"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 121,
    "title": "Product of Array Except Self #121",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 122,
    "title": "Climbing Stairs #122",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Apple",
      "Google"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 123,
    "title": "Coin Change #123",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "SAP",
      "Google",
      "Flipkart"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 124,
    "title": "Detect Cycle in Linked List #124",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 125,
    "title": "LRU Cache #125",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 126,
    "title": "Reverse Linked List #126",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Adobe",
      "Intuit",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 127,
    "title": "Coin Change #127",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Uber"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 128,
    "title": "Longest Substring Without Repeating Characters #128",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Adobe",
      "Netflix"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 129,
    "title": "Product of Array Except Self #129",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Intuit",
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 130,
    "title": "Climbing Stairs #130",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Adobe"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 131,
    "title": "Reverse Linked List #131",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Netflix",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 132,
    "title": "Container With Most Water #132",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Morgan Stanley",
      "Walmart",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 133,
    "title": "Rotate Image #133",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 134,
    "title": "Product of Array Except Self #134",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Uber",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 135,
    "title": "Rotate Image #135",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Apple",
      "Uber",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 136,
    "title": "Coin Change #136",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 137,
    "title": "Two Sum #137",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Microsoft",
      "Walmart"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 138,
    "title": "Word Ladder #138",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Goldman Sachs",
      "SAP",
      "Oracle"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 139,
    "title": "Course Schedule #139",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 140,
    "title": "Merge Intervals #140",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Adobe",
      "Meta"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 141,
    "title": "Two Sum #141",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Meta",
      "Microsoft",
      "Adobe"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 142,
    "title": "Two Sum #142",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Amazon"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 143,
    "title": "Binary Tree Inorder Traversal #143",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Amazon",
      "Meta"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 144,
    "title": "Climbing Stairs #144",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Walmart",
      "Morgan Stanley",
      "Adobe"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 145,
    "title": "Minimum Window Substring #145",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 146,
    "title": "Rotate Image #146",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Amazon",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 147,
    "title": "Rotate Image #147",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Uber",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 148,
    "title": "Kth Largest Element #148",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 149,
    "title": "Climbing Stairs #149",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Goldman Sachs",
      "Morgan Stanley"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 150,
    "title": "LRU Cache #150",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Meta",
      "Netflix",
      "Adobe"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 151,
    "title": "Top K Frequent Elements #151",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "SAP"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 152,
    "title": "Rotate Image #152",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Adobe",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 153,
    "title": "Merge Intervals #153",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Walmart",
      "Goldman Sachs",
      "Apple"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 154,
    "title": "Course Schedule #154",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 155,
    "title": "Container With Most Water #155",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Goldman Sachs",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 156,
    "title": "Coin Change #156",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Google",
      "Netflix",
      "Amazon"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 157,
    "title": "Binary Tree Inorder Traversal #157",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "SAP"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 158,
    "title": "Climbing Stairs #158",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Oracle",
      "Intuit"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 159,
    "title": "Climbing Stairs #159",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Oracle",
      "Apple"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 160,
    "title": "Two Sum #160",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Amazon"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 161,
    "title": "Minimum Window Substring #161",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Oracle",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 162,
    "title": "Word Ladder #162",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Intuit",
      "Walmart",
      "Apple"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 163,
    "title": "Product of Array Except Self #163",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 164,
    "title": "Top K Frequent Elements #164",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "SAP",
      "Google"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 165,
    "title": "Valid Parentheses #165",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Oracle",
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 166,
    "title": "Binary Tree Inorder Traversal #166",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Apple"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 167,
    "title": "Valid Parentheses #167",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Adobe",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 168,
    "title": "Longest Substring Without Repeating Characters #168",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Microsoft",
      "Adobe",
      "Goldman Sachs"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 169,
    "title": "Coin Change #169",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Google"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 170,
    "title": "Minimum Window Substring #170",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Google",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 171,
    "title": "Word Ladder #171",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Goldman Sachs",
      "Adobe",
      "SAP"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 172,
    "title": "Number of Islands #172",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Apple"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 173,
    "title": "Coin Change #173",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 174,
    "title": "Product of Array Except Self #174",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Apple",
      "Uber",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 175,
    "title": "Valid Parentheses #175",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 176,
    "title": "Minimum Window Substring #176",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Netflix",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 177,
    "title": "Top K Frequent Elements #177",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Flipkart",
      "Walmart",
      "Microsoft"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 178,
    "title": "Climbing Stairs #178",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Amazon"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 179,
    "title": "Coin Change #179",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 180,
    "title": "LRU Cache #180",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Uber",
      "Netflix",
      "Microsoft"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 181,
    "title": "Reverse Linked List #181",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 182,
    "title": "Product of Array Except Self #182",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Oracle",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 183,
    "title": "Container With Most Water #183",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "SAP",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 184,
    "title": "Product of Array Except Self #184",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 185,
    "title": "Merge Intervals #185",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Goldman Sachs"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 186,
    "title": "Binary Tree Inorder Traversal #186",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Morgan Stanley",
      "Google",
      "Walmart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 187,
    "title": "Container With Most Water #187",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 188,
    "title": "Valid Parentheses #188",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Apple",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 189,
    "title": "Longest Substring Without Repeating Characters #189",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Flipkart",
      "Goldman Sachs",
      "Adobe"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 190,
    "title": "Minimum Window Substring #190",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 191,
    "title": "Detect Cycle in Linked List #191",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Uber",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 192,
    "title": "Word Ladder #192",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Apple",
      "Morgan Stanley",
      "Google"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 193,
    "title": "Top K Frequent Elements #193",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Goldman Sachs"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 194,
    "title": "Course Schedule #194",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Uber",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 195,
    "title": "Coin Change #195",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Flipkart",
      "Intuit",
      "Adobe"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 196,
    "title": "Reverse Linked List #196",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 197,
    "title": "Reverse Linked List #197",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 198,
    "title": "Maximum Subarray #198",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "SAP",
      "Uber",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 199,
    "title": "Binary Tree Inorder Traversal #199",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Uber"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 200,
    "title": "Course Schedule #200",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Amazon",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 201,
    "title": "Number of Islands #201",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Morgan Stanley",
      "Goldman Sachs",
      "Adobe"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 202,
    "title": "Binary Tree Inorder Traversal #202",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "SAP"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 203,
    "title": "Reverse Linked List #203",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 204,
    "title": "Merge Intervals #204",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Uber",
      "Intuit",
      "Microsoft"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 205,
    "title": "Word Ladder #205",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Netflix"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 206,
    "title": "Minimum Window Substring #206",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Microsoft",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 207,
    "title": "Product of Array Except Self #207",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "SAP",
      "Intuit",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 208,
    "title": "Two Sum #208",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Uber"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 209,
    "title": "Valid Parentheses #209",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Flipkart",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 210,
    "title": "Valid Parentheses #210",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Netflix",
      "Meta",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 211,
    "title": "Top K Frequent Elements #211",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Adobe"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 212,
    "title": "LRU Cache #212",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Adobe",
      "Microsoft"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 213,
    "title": "LRU Cache #213",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Meta",
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 214,
    "title": "Valid Parentheses #214",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 215,
    "title": "Kth Largest Element #215",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Flipkart",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 216,
    "title": "Climbing Stairs #216",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Uber",
      "Intuit",
      "Adobe"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 217,
    "title": "Detect Cycle in Linked List #217",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 218,
    "title": "Kth Largest Element #218",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Google",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 219,
    "title": "Word Ladder #219",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Intuit",
      "Adobe",
      "Goldman Sachs"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 220,
    "title": "LRU Cache #220",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Adobe"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 221,
    "title": "Detect Cycle in Linked List #221",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 222,
    "title": "Maximum Subarray #222",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Walmart",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 223,
    "title": "Maximum Subarray #223",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 224,
    "title": "Merge Intervals #224",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Oracle",
      "Walmart"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 225,
    "title": "Merge Intervals #225",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Uber",
      "Google",
      "Walmart"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 226,
    "title": "Two Sum #226",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Goldman Sachs"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 227,
    "title": "Coin Change #227",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Amazon",
      "Netflix"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 228,
    "title": "Merge Intervals #228",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Morgan Stanley",
      "Apple",
      "Microsoft"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 229,
    "title": "Detect Cycle in Linked List #229",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 230,
    "title": "Valid Parentheses #230",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Netflix",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 231,
    "title": "Kth Largest Element #231",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Oracle",
      "Amazon",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 232,
    "title": "Course Schedule #232",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 233,
    "title": "Top K Frequent Elements #233",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Adobe",
      "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 234,
    "title": "Container With Most Water #234",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Netflix",
      "Apple",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 235,
    "title": "Kth Largest Element #235",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 236,
    "title": "Product of Array Except Self #236",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 237,
    "title": "Longest Substring Without Repeating Characters #237",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Meta",
      "SAP",
      "Morgan Stanley"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 238,
    "title": "Maximum Subarray #238",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 239,
    "title": "Maximum Subarray #239",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Adobe",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 240,
    "title": "Merge Intervals #240",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Netflix",
      "Morgan Stanley",
      "Goldman Sachs"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 241,
    "title": "Longest Substring Without Repeating Characters #241",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Meta"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 242,
    "title": "Top K Frequent Elements #242",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Google",
      "Oracle"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 243,
    "title": "LRU Cache #243",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Meta",
      "Uber",
      "SAP"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 244,
    "title": "Coin Change #244",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Walmart"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 245,
    "title": "Merge Intervals #245",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Meta",
      "Apple"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 246,
    "title": "Reverse Linked List #246",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Oracle",
      "Meta",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 247,
    "title": "Two Sum #247",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Flipkart"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 248,
    "title": "Word Ladder #248",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Goldman Sachs",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 249,
    "title": "Course Schedule #249",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Google",
      "Goldman Sachs",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 250,
    "title": "Merge Intervals #250",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Amazon"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 251,
    "title": "Coin Change #251",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Apple",
      "Oracle"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 252,
    "title": "Number of Islands #252",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Apple",
      "Amazon",
      "Google"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 253,
    "title": "Reverse Linked List #253",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 254,
    "title": "Two Sum #254",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Walmart",
      "Netflix"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 255,
    "title": "Merge Intervals #255",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Adobe",
      "Walmart",
      "Oracle"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 256,
    "title": "Container With Most Water #256",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 257,
    "title": "Word Ladder #257",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Walmart",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 258,
    "title": "Maximum Subarray #258",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "SAP",
      "Microsoft",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 259,
    "title": "Coin Change #259",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Adobe"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 260,
    "title": "LRU Cache #260",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Oracle",
      "Apple"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 261,
    "title": "Rotate Image #261",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Intuit",
      "Oracle",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 262,
    "title": "Rotate Image #262",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 263,
    "title": "Climbing Stairs #263",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Apple",
      "Meta"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 264,
    "title": "Climbing Stairs #264",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs",
      "Adobe",
      "Google"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 265,
    "title": "Maximum Subarray #265",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 266,
    "title": "Kth Largest Element #266",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Google",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 267,
    "title": "Kth Largest Element #267",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Microsoft",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 268,
    "title": "LRU Cache #268",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "SAP"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 269,
    "title": "Detect Cycle in Linked List #269",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Walmart",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 270,
    "title": "Word Ladder #270",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Uber",
      "Microsoft",
      "Intuit"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 271,
    "title": "Minimum Window Substring #271",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 272,
    "title": "Container With Most Water #272",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Amazon",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 273,
    "title": "Valid Parentheses #273",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Goldman Sachs",
      "Google",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 274,
    "title": "Longest Substring Without Repeating Characters #274",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Netflix"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 275,
    "title": "Coin Change #275",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Morgan Stanley",
      "Goldman Sachs"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 276,
    "title": "Rotate Image #276",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Meta",
      "Walmart",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 277,
    "title": "Climbing Stairs #277",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Morgan Stanley"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 278,
    "title": "Coin Change #278",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 279,
    "title": "Two Sum #279",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Microsoft",
      "Goldman Sachs",
      "Uber"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 280,
    "title": "Climbing Stairs #280",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Meta"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 281,
    "title": "Binary Tree Inorder Traversal #281",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Uber",
      "Microsoft"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 282,
    "title": "Word Ladder #282",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Netflix",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 283,
    "title": "Longest Substring Without Repeating Characters #283",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Apple"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 284,
    "title": "Reverse Linked List #284",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Oracle",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 285,
    "title": "Detect Cycle in Linked List #285",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Morgan Stanley",
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 286,
    "title": "LRU Cache #286",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Intuit"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 287,
    "title": "Rotate Image #287",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Google",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 288,
    "title": "Detect Cycle in Linked List #288",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Intuit",
      "SAP",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 289,
    "title": "Climbing Stairs #289",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Amazon"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 290,
    "title": "Top K Frequent Elements #290",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 291,
    "title": "Two Sum #291",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Amazon",
      "Oracle",
      "Uber"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 292,
    "title": "Merge Intervals #292",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Intuit"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 293,
    "title": "Detect Cycle in Linked List #293",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Uber",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 294,
    "title": "Binary Tree Inorder Traversal #294",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Netflix",
      "Google",
      "Oracle"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 295,
    "title": "Reverse Linked List #295",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 296,
    "title": "Binary Tree Inorder Traversal #296",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Meta",
      "Intuit"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 297,
    "title": "Course Schedule #297",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Oracle",
      "Meta",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 298,
    "title": "Maximum Subarray #298",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 299,
    "title": "Climbing Stairs #299",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Google",
      "Walmart"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 300,
    "title": "Product of Array Except Self #300",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Intuit",
      "Uber",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 301,
    "title": "Detect Cycle in Linked List #301",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 302,
    "title": "Climbing Stairs #302",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Oracle",
      "SAP"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 303,
    "title": "Kth Largest Element #303",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Netflix",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 304,
    "title": "Two Sum #304",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 305,
    "title": "Rotate Image #305",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Netflix",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 306,
    "title": "Merge Intervals #306",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Meta",
      "Google",
      "Amazon"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 307,
    "title": "Climbing Stairs #307",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Adobe"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 308,
    "title": "Reverse Linked List #308",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "SAP",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 309,
    "title": "Product of Array Except Self #309",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Google",
      "Amazon",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 310,
    "title": "Container With Most Water #310",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 311,
    "title": "Valid Parentheses #311",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "SAP",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 312,
    "title": "Detect Cycle in Linked List #312",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Flipkart",
      "Netflix",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 313,
    "title": "Merge Intervals #313",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Morgan Stanley"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 314,
    "title": "Merge Intervals #314",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Amazon",
      "Goldman Sachs"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 315,
    "title": "Course Schedule #315",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Walmart",
      "Flipkart",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 316,
    "title": "Longest Substring Without Repeating Characters #316",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 317,
    "title": "Climbing Stairs #317",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Apple",
      "Amazon"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 318,
    "title": "Coin Change #318",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Apple",
      "Amazon",
      "Microsoft"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 319,
    "title": "Number of Islands #319",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Intuit"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 320,
    "title": "Minimum Window Substring #320",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Meta",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 321,
    "title": "Two Sum #321",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Apple",
      "Uber",
      "Morgan Stanley"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 322,
    "title": "Reverse Linked List #322",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 323,
    "title": "Top K Frequent Elements #323",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 324,
    "title": "Reverse Linked List #324",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Goldman Sachs",
      "Intuit",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 325,
    "title": "Valid Parentheses #325",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 326,
    "title": "Valid Parentheses #326",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Meta",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 327,
    "title": "Climbing Stairs #327",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Meta",
      "Walmart",
      "Flipkart"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 328,
    "title": "Longest Substring Without Repeating Characters #328",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Intuit"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 329,
    "title": "LRU Cache #329",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Apple",
      "Microsoft"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 330,
    "title": "Course Schedule #330",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Walmart",
      "Microsoft",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 331,
    "title": "Word Ladder #331",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Adobe"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 332,
    "title": "Word Ladder #332",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Morgan Stanley",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 333,
    "title": "Two Sum #333",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Adobe",
      "Intuit",
      "Netflix"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 334,
    "title": "Detect Cycle in Linked List #334",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 335,
    "title": "Top K Frequent Elements #335",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Apple",
      "Adobe"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 336,
    "title": "Number of Islands #336",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "SAP",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 337,
    "title": "Detect Cycle in Linked List #337",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 338,
    "title": "Kth Largest Element #338",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Amazon",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 339,
    "title": "Valid Parentheses #339",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Goldman Sachs",
      "Flipkart",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 340,
    "title": "Kth Largest Element #340",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 341,
    "title": "Top K Frequent Elements #341",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Google",
      "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 342,
    "title": "Word Ladder #342",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 343,
    "title": "Detect Cycle in Linked List #343",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 344,
    "title": "Longest Substring Without Repeating Characters #344",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Uber",
      "Flipkart"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 345,
    "title": "Kth Largest Element #345",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Intuit",
      "Morgan Stanley",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 346,
    "title": "LRU Cache #346",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Goldman Sachs"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 347,
    "title": "Container With Most Water #347",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Microsoft",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 348,
    "title": "Detect Cycle in Linked List #348",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Google",
      "Oracle",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 349,
    "title": "Valid Parentheses #349",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 350,
    "title": "Course Schedule #350",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Flipkart",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 351,
    "title": "Valid Parentheses #351",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Google",
      "Walmart",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 352,
    "title": "Minimum Window Substring #352",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 353,
    "title": "Longest Substring Without Repeating Characters #353",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Netflix",
      "Uber"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 354,
    "title": "Detect Cycle in Linked List #354",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Microsoft",
      "Flipkart",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 355,
    "title": "Binary Tree Inorder Traversal #355",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 356,
    "title": "Product of Array Except Self #356",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Flipkart",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 357,
    "title": "Word Ladder #357",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Netflix",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 358,
    "title": "Valid Parentheses #358",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 359,
    "title": "Detect Cycle in Linked List #359",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Microsoft",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 360,
    "title": "Product of Array Except Self #360",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Meta",
      "Microsoft",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 361,
    "title": "Coin Change #361",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Adobe"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 362,
    "title": "Coin Change #362",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Oracle",
      "Intuit"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 363,
    "title": "Container With Most Water #363",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Walmart",
      "Amazon",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 364,
    "title": "Climbing Stairs #364",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Uber"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 365,
    "title": "Number of Islands #365",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Morgan Stanley",
      "Goldman Sachs"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 366,
    "title": "Binary Tree Inorder Traversal #366",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Intuit",
      "Google",
      "Amazon"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 367,
    "title": "Coin Change #367",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Apple"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 368,
    "title": "Product of Array Except Self #368",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Intuit",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 369,
    "title": "Detect Cycle in Linked List #369",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Goldman Sachs",
      "Flipkart",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 370,
    "title": "Word Ladder #370",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 371,
    "title": "Rotate Image #371",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Google",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 372,
    "title": "Detect Cycle in Linked List #372",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Goldman Sachs",
      "Microsoft",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 373,
    "title": "LRU Cache #373",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Google"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 374,
    "title": "Reverse Linked List #374",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "SAP",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 375,
    "title": "Product of Array Except Self #375",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Amazon",
      "Apple",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 376,
    "title": "Coin Change #376",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Google"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 377,
    "title": "Minimum Window Substring #377",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Goldman Sachs",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 378,
    "title": "LRU Cache #378",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Netflix",
      "Apple",
      "Uber"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 379,
    "title": "Product of Array Except Self #379",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 380,
    "title": "Minimum Window Substring #380",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Uber",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 381,
    "title": "Two Sum #381",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Walmart",
      "Flipkart",
      "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 382,
    "title": "Product of Array Except Self #382",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 383,
    "title": "Course Schedule #383",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Intuit",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 384,
    "title": "Detect Cycle in Linked List #384",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Google",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 385,
    "title": "Coin Change #385",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Microsoft"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 386,
    "title": "Valid Parentheses #386",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Flipkart",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 387,
    "title": "Longest Substring Without Repeating Characters #387",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Netflix",
      "Flipkart",
      "Microsoft"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 388,
    "title": "Number of Islands #388",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Walmart"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 389,
    "title": "Top K Frequent Elements #389",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Google",
      "Meta"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 390,
    "title": "Word Ladder #390",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Google",
      "Apple",
      "Amazon"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 391,
    "title": "LRU Cache #391",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Uber"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 392,
    "title": "Number of Islands #392",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Goldman Sachs",
      "Apple"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 393,
    "title": "Detect Cycle in Linked List #393",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Goldman Sachs",
      "Netflix",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 394,
    "title": "Course Schedule #394",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 395,
    "title": "Number of Islands #395",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Google",
      "Uber"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 396,
    "title": "Course Schedule #396",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Goldman Sachs",
      "Apple",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 397,
    "title": "LRU Cache #397",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Amazon"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 398,
    "title": "Coin Change #398",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Goldman Sachs",
      "Oracle"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 399,
    "title": "Kth Largest Element #399",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Microsoft",
      "Intuit",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 400,
    "title": "Rotate Image #400",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 401,
    "title": "Reverse Linked List #401",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Netflix",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 402,
    "title": "Minimum Window Substring #402",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Goldman Sachs",
      "Google",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 403,
    "title": "Word Ladder #403",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Google"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 404,
    "title": "Minimum Window Substring #404",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Walmart",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 405,
    "title": "Valid Parentheses #405",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Oracle",
      "Microsoft",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 406,
    "title": "Rotate Image #406",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 407,
    "title": "Two Sum #407",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Meta",
      "Netflix"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 408,
    "title": "Container With Most Water #408",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Google",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 409,
    "title": "Longest Substring Without Repeating Characters #409",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "SAP"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 410,
    "title": "Kth Largest Element #410",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Apple",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 411,
    "title": "Valid Parentheses #411",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "SAP",
      "Walmart",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 412,
    "title": "Word Ladder #412",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 413,
    "title": "Number of Islands #413",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Netflix"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 414,
    "title": "Course Schedule #414",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "SAP",
      "Meta",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 415,
    "title": "Course Schedule #415",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 416,
    "title": "Word Ladder #416",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Adobe",
      "Oracle"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 417,
    "title": "LRU Cache #417",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Amazon",
      "Microsoft",
      "Intuit"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 418,
    "title": "Rotate Image #418",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 419,
    "title": "Longest Substring Without Repeating Characters #419",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Uber",
      "Morgan Stanley"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 420,
    "title": "Rotate Image #420",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Meta",
      "Uber",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 421,
    "title": "Minimum Window Substring #421",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 422,
    "title": "Top K Frequent Elements #422",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Google",
      "Uber"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 423,
    "title": "Binary Tree Inorder Traversal #423",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Oracle",
      "Walmart",
      "SAP"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 424,
    "title": "Minimum Window Substring #424",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 425,
    "title": "Top K Frequent Elements #425",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Meta",
      "Walmart"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 426,
    "title": "Climbing Stairs #426",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Flipkart",
      "SAP",
      "Intuit"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 427,
    "title": "Rotate Image #427",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 428,
    "title": "Word Ladder #428",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Oracle",
      "Intuit"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 429,
    "title": "Container With Most Water #429",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Morgan Stanley",
      "Netflix",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 430,
    "title": "Climbing Stairs #430",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 431,
    "title": "Minimum Window Substring #431",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "SAP",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 432,
    "title": "Detect Cycle in Linked List #432",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Morgan Stanley",
      "Adobe",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 433,
    "title": "Rotate Image #433",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 434,
    "title": "Number of Islands #434",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 435,
    "title": "Detect Cycle in Linked List #435",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Flipkart",
      "Adobe",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 436,
    "title": "Minimum Window Substring #436",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 437,
    "title": "Word Ladder #437",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Walmart",
      "Oracle"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 438,
    "title": "Binary Tree Inorder Traversal #438",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Intuit",
      "SAP",
      "Flipkart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 439,
    "title": "Kth Largest Element #439",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 440,
    "title": "Course Schedule #440",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Amazon",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 441,
    "title": "Course Schedule #441",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Adobe",
      "Netflix",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 442,
    "title": "Coin Change #442",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Apple"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 443,
    "title": "Two Sum #443",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 444,
    "title": "Word Ladder #444",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Meta",
      "Adobe",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 445,
    "title": "Climbing Stairs #445",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Uber"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 446,
    "title": "Detect Cycle in Linked List #446",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Adobe",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 447,
    "title": "Rotate Image #447",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Google",
      "Netflix",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 448,
    "title": "LRU Cache #448",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Amazon"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 449,
    "title": "Detect Cycle in Linked List #449",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Uber",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 450,
    "title": "Reverse Linked List #450",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Flipkart",
      "Apple",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 451,
    "title": "Course Schedule #451",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 452,
    "title": "Word Ladder #452",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Apple",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 453,
    "title": "Container With Most Water #453",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Morgan Stanley",
      "Uber",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 454,
    "title": "Maximum Subarray #454",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 455,
    "title": "Course Schedule #455",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Google",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 456,
    "title": "Number of Islands #456",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Apple",
      "Intuit",
      "Netflix"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 457,
    "title": "Maximum Subarray #457",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 458,
    "title": "Product of Array Except Self #458",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Meta",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 459,
    "title": "Binary Tree Inorder Traversal #459",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Uber",
      "Oracle",
      "Google"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 460,
    "title": "Course Schedule #460",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 461,
    "title": "Product of Array Except Self #461",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Microsoft",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 462,
    "title": "Binary Tree Inorder Traversal #462",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Microsoft",
      "Adobe",
      "Google"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 463,
    "title": "Binary Tree Inorder Traversal #463",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 464,
    "title": "Product of Array Except Self #464",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Netflix",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 465,
    "title": "Climbing Stairs #465",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Uber",
      "Amazon",
      "Walmart"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 466,
    "title": "Climbing Stairs #466",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Netflix"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 467,
    "title": "LRU Cache #467",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Uber",
      "Netflix"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 468,
    "title": "Coin Change #468",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Oracle",
      "Netflix",
      "Flipkart"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 469,
    "title": "Kth Largest Element #469",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 470,
    "title": "Climbing Stairs #470",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Walmart",
      "Meta"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 471,
    "title": "Kth Largest Element #471",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Apple",
      "Morgan Stanley",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 472,
    "title": "Merge Intervals #472",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Uber"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 473,
    "title": "Course Schedule #473",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix",
      "Uber",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 474,
    "title": "Top K Frequent Elements #474",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Uber",
      "Flipkart",
      "Walmart"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 475,
    "title": "Longest Substring Without Repeating Characters #475",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Flipkart"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 476,
    "title": "Longest Substring Without Repeating Characters #476",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Apple",
      "Uber"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 477,
    "title": "LRU Cache #477",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Microsoft",
      "Google",
      "Goldman Sachs"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 478,
    "title": "Maximum Subarray #478",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 479,
    "title": "Climbing Stairs #479",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Meta",
      "Walmart"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 480,
    "title": "Product of Array Except Self #480",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Adobe",
      "Google",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 481,
    "title": "LRU Cache #481",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Oracle"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 482,
    "title": "Top K Frequent Elements #482",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 483,
    "title": "LRU Cache #483",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 484,
    "title": "Climbing Stairs #484",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Uber"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 485,
    "title": "Course Schedule #485",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Goldman Sachs",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 486,
    "title": "Merge Intervals #486",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Walmart",
      "Amazon",
      "Google"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 487,
    "title": "Climbing Stairs #487",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Amazon"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 488,
    "title": "Product of Array Except Self #488",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Flipkart",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 489,
    "title": "Top K Frequent Elements #489",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "SAP",
      "Google",
      "Adobe"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 490,
    "title": "Top K Frequent Elements #490",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Intuit"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 491,
    "title": "Course Schedule #491",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Microsoft",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 492,
    "title": "Top K Frequent Elements #492",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Google",
      "Walmart",
      "Oracle"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 493,
    "title": "Maximum Subarray #493",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 494,
    "title": "Top K Frequent Elements #494",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Amazon",
      "Intuit"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 495,
    "title": "Detect Cycle in Linked List #495",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Goldman Sachs",
      "Amazon",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 496,
    "title": "LRU Cache #496",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Google"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 497,
    "title": "Rotate Image #497",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Morgan Stanley",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 498,
    "title": "Binary Tree Inorder Traversal #498",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Intuit",
      "Amazon",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 499,
    "title": "Minimum Window Substring #499",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 500,
    "title": "Top K Frequent Elements #500",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Uber",
      "SAP"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 501,
    "title": "Detect Cycle in Linked List #501",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Walmart",
      "Flipkart",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 502,
    "title": "Word Ladder #502",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Intuit"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 503,
    "title": "Coin Change #503",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Amazon",
      "Apple"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 504,
    "title": "Product of Array Except Self #504",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Goldman Sachs",
      "Adobe",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 505,
    "title": "Product of Array Except Self #505",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 506,
    "title": "Minimum Window Substring #506",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Uber",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 507,
    "title": "Climbing Stairs #507",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Meta",
      "Microsoft",
      "Netflix"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 508,
    "title": "Binary Tree Inorder Traversal #508",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Apple"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 509,
    "title": "Merge Intervals #509",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "SAP",
      "Meta"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 510,
    "title": "Two Sum #510",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Google",
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 511,
    "title": "Valid Parentheses #511",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 512,
    "title": "Maximum Subarray #512",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Goldman Sachs",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 513,
    "title": "Rotate Image #513",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Walmart",
      "SAP",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 514,
    "title": "Climbing Stairs #514",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Goldman Sachs"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 515,
    "title": "Word Ladder #515",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Oracle",
      "Apple"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 516,
    "title": "Course Schedule #516",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Uber",
      "Meta",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 517,
    "title": "Valid Parentheses #517",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 518,
    "title": "Product of Array Except Self #518",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Google",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 519,
    "title": "Maximum Subarray #519",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Uber",
      "Google",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 520,
    "title": "LRU Cache #520",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Walmart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 521,
    "title": "Top K Frequent Elements #521",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Netflix",
      "Oracle"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 522,
    "title": "Rotate Image #522",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Flipkart",
      "SAP",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 523,
    "title": "Detect Cycle in Linked List #523",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 524,
    "title": "Reverse Linked List #524",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Walmart",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 525,
    "title": "Valid Parentheses #525",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Microsoft",
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 526,
    "title": "Detect Cycle in Linked List #526",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 527,
    "title": "Rotate Image #527",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Oracle",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 528,
    "title": "Rotate Image #528",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Adobe",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 529,
    "title": "Coin Change #529",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Meta"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 530,
    "title": "LRU Cache #530",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Oracle",
      "Google"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 531,
    "title": "Number of Islands #531",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Microsoft",
      "Google",
      "Flipkart"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 532,
    "title": "Product of Array Except Self #532",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 533,
    "title": "Container With Most Water #533",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Walmart",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 534,
    "title": "Kth Largest Element #534",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Intuit",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 535,
    "title": "Valid Parentheses #535",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 536,
    "title": "Coin Change #536",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 537,
    "title": "Longest Substring Without Repeating Characters #537",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 538,
    "title": "Product of Array Except Self #538",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 539,
    "title": "Valid Parentheses #539",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Adobe",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 540,
    "title": "Climbing Stairs #540",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Walmart",
      "Adobe",
      "Morgan Stanley"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 541,
    "title": "Container With Most Water #541",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 542,
    "title": "Minimum Window Substring #542",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Intuit",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 543,
    "title": "Climbing Stairs #543",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Flipkart",
      "Goldman Sachs",
      "Google"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 544,
    "title": "Longest Substring Without Repeating Characters #544",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Walmart"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 545,
    "title": "Climbing Stairs #545",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Microsoft",
      "Walmart"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 546,
    "title": "Container With Most Water #546",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Uber",
      "Netflix",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 547,
    "title": "Merge Intervals #547",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Oracle"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 548,
    "title": "LRU Cache #548",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "SAP",
      "Flipkart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 549,
    "title": "Longest Substring Without Repeating Characters #549",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Apple",
      "Walmart",
      "Oracle"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 550,
    "title": "Maximum Subarray #550",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 551,
    "title": "Minimum Window Substring #551",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Microsoft",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 552,
    "title": "LRU Cache #552",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Adobe",
      "Intuit"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 553,
    "title": "Valid Parentheses #553",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 554,
    "title": "Number of Islands #554",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Walmart",
      "Morgan Stanley"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 555,
    "title": "Merge Intervals #555",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Flipkart",
      "Adobe",
      "Apple"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 556,
    "title": "Course Schedule #556",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 557,
    "title": "Course Schedule #557",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Netflix",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 558,
    "title": "Kth Largest Element #558",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "SAP",
      "Uber",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 559,
    "title": "Valid Parentheses #559",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 560,
    "title": "Product of Array Except Self #560",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Intuit",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 561,
    "title": "Longest Substring Without Repeating Characters #561",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Oracle",
      "Apple",
      "Meta"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 562,
    "title": "Detect Cycle in Linked List #562",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 563,
    "title": "Product of Array Except Self #563",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 564,
    "title": "Container With Most Water #564",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Oracle",
      "Morgan Stanley",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 565,
    "title": "Product of Array Except Self #565",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 566,
    "title": "Valid Parentheses #566",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "SAP",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 567,
    "title": "Two Sum #567",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Meta",
      "Oracle",
      "Netflix"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 568,
    "title": "Longest Substring Without Repeating Characters #568",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "SAP"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 569,
    "title": "Reverse Linked List #569",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Oracle",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 570,
    "title": "Top K Frequent Elements #570",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Amazon",
      "Uber",
      "SAP"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 571,
    "title": "Product of Array Except Self #571",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 572,
    "title": "Word Ladder #572",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Meta",
      "Adobe"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 573,
    "title": "Top K Frequent Elements #573",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "SAP",
      "Google",
      "Flipkart"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 574,
    "title": "Product of Array Except Self #574",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 575,
    "title": "Minimum Window Substring #575",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Flipkart",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 576,
    "title": "Climbing Stairs #576",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Morgan Stanley",
      "Oracle",
      "Microsoft"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 577,
    "title": "Longest Substring Without Repeating Characters #577",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Walmart"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 578,
    "title": "Top K Frequent Elements #578",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Morgan Stanley",
      "Google"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 579,
    "title": "Course Schedule #579",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Oracle",
      "Meta",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 580,
    "title": "Rotate Image #580",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 581,
    "title": "Rotate Image #581",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Netflix",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 582,
    "title": "Word Ladder #582",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Adobe",
      "Amazon",
      "Goldman Sachs"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 583,
    "title": "Two Sum #583",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 584,
    "title": "Course Schedule #584",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Oracle",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 585,
    "title": "Course Schedule #585",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Goldman Sachs",
      "Netflix",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 586,
    "title": "Product of Array Except Self #586",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 587,
    "title": "Course Schedule #587",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Flipkart",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 588,
    "title": "Maximum Subarray #588",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Morgan Stanley",
      "Microsoft",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 589,
    "title": "Word Ladder #589",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Adobe"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 590,
    "title": "Detect Cycle in Linked List #590",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "SAP",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 591,
    "title": "Course Schedule #591",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Oracle",
      "Morgan Stanley",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 592,
    "title": "Kth Largest Element #592",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 593,
    "title": "Word Ladder #593",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Intuit",
      "Oracle"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 594,
    "title": "Minimum Window Substring #594",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Microsoft",
      "Apple",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 595,
    "title": "Merge Intervals #595",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "SAP"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 596,
    "title": "Course Schedule #596",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Amazon",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 597,
    "title": "Reverse Linked List #597",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Adobe",
      "Goldman Sachs",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 598,
    "title": "Reverse Linked List #598",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 599,
    "title": "Minimum Window Substring #599",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Morgan Stanley",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 600,
    "title": "Reverse Linked List #600",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Intuit",
      "Meta",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 601,
    "title": "Longest Substring Without Repeating Characters #601",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 602,
    "title": "Top K Frequent Elements #602",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Walmart",
      "Intuit"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 603,
    "title": "Detect Cycle in Linked List #603",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Oracle",
      "Amazon",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 604,
    "title": "Two Sum #604",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Amazon"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 605,
    "title": "Reverse Linked List #605",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Adobe",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 606,
    "title": "Merge Intervals #606",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Flipkart",
      "SAP",
      "Intuit"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 607,
    "title": "Course Schedule #607",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 608,
    "title": "Product of Array Except Self #608",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Meta",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 609,
    "title": "Binary Tree Inorder Traversal #609",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Apple",
      "Google",
      "SAP"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 610,
    "title": "Climbing Stairs #610",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Amazon"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 611,
    "title": "Container With Most Water #611",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 612,
    "title": "Minimum Window Substring #612",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Adobe",
      "Walmart",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 613,
    "title": "Binary Tree Inorder Traversal #613",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Apple"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 614,
    "title": "Detect Cycle in Linked List #614",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Oracle",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 615,
    "title": "Word Ladder #615",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Uber",
      "Microsoft",
      "SAP"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 616,
    "title": "Minimum Window Substring #616",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 617,
    "title": "Minimum Window Substring #617",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Apple",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 618,
    "title": "LRU Cache #618",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Intuit",
      "Goldman Sachs",
      "Morgan Stanley"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 619,
    "title": "Number of Islands #619",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Apple"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 620,
    "title": "Word Ladder #620",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Morgan Stanley",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 621,
    "title": "LRU Cache #621",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Netflix",
      "Apple",
      "Oracle"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 622,
    "title": "Longest Substring Without Repeating Characters #622",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Microsoft"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 623,
    "title": "Product of Array Except Self #623",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 624,
    "title": "Two Sum #624",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Flipkart",
      "Meta",
      "Apple"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 625,
    "title": "Rotate Image #625",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 626,
    "title": "Valid Parentheses #626",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Goldman Sachs",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 627,
    "title": "Rotate Image #627",
    "category": "Greedy",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Apple",
      "Morgan Stanley",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 628,
    "title": "Merge Intervals #628",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Oracle"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 629,
    "title": "Valid Parentheses #629",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Flipkart",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 630,
    "title": "Word Ladder #630",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Intuit",
      "Oracle",
      "Microsoft"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 631,
    "title": "Product of Array Except Self #631",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 632,
    "title": "Product of Array Except Self #632",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Adobe",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 633,
    "title": "Reverse Linked List #633",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Flipkart",
      "SAP",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 634,
    "title": "Valid Parentheses #634",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 635,
    "title": "Kth Largest Element #635",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Intuit",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 636,
    "title": "Detect Cycle in Linked List #636",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Meta",
      "Google",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 637,
    "title": "Two Sum #637",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Amazon"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 638,
    "title": "Reverse Linked List #638",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Intuit",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 639,
    "title": "Rotate Image #639",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Apple",
      "Oracle",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 640,
    "title": "Word Ladder #640",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Meta"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 641,
    "title": "Binary Tree Inorder Traversal #641",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Uber",
      "Amazon"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 642,
    "title": "Container With Most Water #642",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Walmart",
      "Microsoft",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 643,
    "title": "Detect Cycle in Linked List #643",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 644,
    "title": "Rotate Image #644",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Morgan Stanley",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 645,
    "title": "Minimum Window Substring #645",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Intuit",
      "Apple",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 646,
    "title": "Binary Tree Inorder Traversal #646",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Netflix"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 647,
    "title": "Valid Parentheses #647",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Amazon",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 648,
    "title": "Valid Parentheses #648",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Apple",
      "Morgan Stanley",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 649,
    "title": "Two Sum #649",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Google"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 650,
    "title": "Top K Frequent Elements #650",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Goldman Sachs",
      "Uber"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 651,
    "title": "Word Ladder #651",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Apple",
      "Meta",
      "SAP"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 652,
    "title": "Course Schedule #652",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 653,
    "title": "Course Schedule #653",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Meta",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 654,
    "title": "Product of Array Except Self #654",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Google",
      "SAP",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 655,
    "title": "Kth Largest Element #655",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 656,
    "title": "Top K Frequent Elements #656",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon",
      "Uber",
      "Goldman Sachs"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 657,
    "title": "Word Ladder #657",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Microsoft",
      "Meta",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 658,
    "title": "Coin Change #658",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Amazon"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 659,
    "title": "Climbing Stairs #659",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Adobe",
      "Netflix"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 660,
    "title": "LRU Cache #660",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Uber",
      "Amazon",
      "Netflix"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 661,
    "title": "Course Schedule #661",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 662,
    "title": "Minimum Window Substring #662",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Intuit",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 663,
    "title": "Minimum Window Substring #663",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Oracle",
      "Microsoft",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 664,
    "title": "Container With Most Water #664",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 665,
    "title": "Product of Array Except Self #665",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Netflix",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 666,
    "title": "Number of Islands #666",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Apple",
      "Oracle",
      "Uber"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 667,
    "title": "Number of Islands #667",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Walmart"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 668,
    "title": "Minimum Window Substring #668",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft",
      "Adobe",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 669,
    "title": "Number of Islands #669",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Netflix",
      "SAP",
      "Goldman Sachs"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 670,
    "title": "Rotate Image #670",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 671,
    "title": "Number of Islands #671",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Apple",
      "Google"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 672,
    "title": "Longest Substring Without Repeating Characters #672",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "SAP",
      "Amazon",
      "Apple"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 673,
    "title": "Rotate Image #673",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 674,
    "title": "Merge Intervals #674",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Flipkart",
      "Morgan Stanley"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 675,
    "title": "Longest Substring Without Repeating Characters #675",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs",
      "Adobe",
      "Morgan Stanley",
      "Meta"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 676,
    "title": "Merge Intervals #676",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Microsoft"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 677,
    "title": "Coin Change #677",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Apple",
      "Amazon"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 678,
    "title": "Maximum Subarray #678",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Netflix",
      "Uber",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 679,
    "title": "LRU Cache #679",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Apple"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 680,
    "title": "Climbing Stairs #680",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Intuit",
      "Oracle"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 681,
    "title": "Container With Most Water #681",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Google",
      "Amazon",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 682,
    "title": "Rotate Image #682",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 683,
    "title": "Reverse Linked List #683",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Flipkart",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 684,
    "title": "Merge Intervals #684",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Morgan Stanley",
      "Netflix",
      "Flipkart"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 685,
    "title": "Product of Array Except Self #685",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 686,
    "title": "Detect Cycle in Linked List #686",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Goldman Sachs",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 687,
    "title": "Detect Cycle in Linked List #687",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Google",
      "Flipkart",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 688,
    "title": "Maximum Subarray #688",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 689,
    "title": "Word Ladder #689",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Morgan Stanley",
      "Oracle"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 690,
    "title": "Container With Most Water #690",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Oracle",
      "Meta",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 691,
    "title": "Binary Tree Inorder Traversal #691",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 692,
    "title": "Container With Most Water #692",
    "category": "Strings",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "SAP",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 693,
    "title": "Minimum Window Substring #693",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Uber",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 694,
    "title": "Longest Substring Without Repeating Characters #694",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle",
      "Uber"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 695,
    "title": "Binary Tree Inorder Traversal #695",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Flipkart",
      "Meta"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 696,
    "title": "Two Sum #696",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Adobe",
      "Google",
      "Flipkart"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 697,
    "title": "Rotate Image #697",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 698,
    "title": "Detect Cycle in Linked List #698",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Meta",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 699,
    "title": "Container With Most Water #699",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Google",
      "SAP",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 700,
    "title": "Maximum Subarray #700",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 701,
    "title": "Valid Parentheses #701",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Flipkart",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 702,
    "title": "Rotate Image #702",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Uber",
      "Flipkart",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 703,
    "title": "Container With Most Water #703",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 704,
    "title": "Two Sum #704",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Walmart",
      "Apple"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 705,
    "title": "Binary Tree Inorder Traversal #705",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Flipkart",
      "Google",
      "Intuit"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 706,
    "title": "Maximum Subarray #706",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 707,
    "title": "Detect Cycle in Linked List #707",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 708,
    "title": "Detect Cycle in Linked List #708",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Amazon",
      "Oracle",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 709,
    "title": "Course Schedule #709",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 710,
    "title": "Two Sum #710",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Netflix",
      "Adobe"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 711,
    "title": "Binary Tree Inorder Traversal #711",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Morgan Stanley",
      "Netflix",
      "Intuit"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 712,
    "title": "Minimum Window Substring #712",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 713,
    "title": "Top K Frequent Elements #713",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Walmart",
      "SAP"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 714,
    "title": "Product of Array Except Self #714",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Walmart",
      "Morgan Stanley",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 715,
    "title": "Detect Cycle in Linked List #715",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 716,
    "title": "Coin Change #716",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Morgan Stanley",
      "SAP"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 717,
    "title": "Kth Largest Element #717",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Goldman Sachs",
      "Google",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 718,
    "title": "LRU Cache #718",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Walmart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 719,
    "title": "Coin Change #719",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Oracle",
      "Amazon"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 720,
    "title": "Valid Parentheses #720",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Intuit",
      "Morgan Stanley",
      "Adobe"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 721,
    "title": "Valid Parentheses #721",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 722,
    "title": "Merge Intervals #722",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Meta",
      "Google"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 723,
    "title": "Top K Frequent Elements #723",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe",
      "Meta",
      "Google",
      "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 724,
    "title": "Reverse Linked List #724",
    "category": "Binary Search",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 725,
    "title": "Minimum Window Substring #725",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Goldman Sachs",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 726,
    "title": "Detect Cycle in Linked List #726",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Apple",
      "Meta",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 727,
    "title": "Longest Substring Without Repeating Characters #727",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Morgan Stanley"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 728,
    "title": "Valid Parentheses #728",
    "category": "Greedy",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Netflix",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 729,
    "title": "Word Ladder #729",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Apple",
      "Flipkart",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 730,
    "title": "Product of Array Except Self #730",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 731,
    "title": "Top K Frequent Elements #731",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Google",
      "Meta",
      "Walmart"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 732,
    "title": "Number of Islands #732",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Flipkart",
      "Microsoft",
      "Meta"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 733,
    "title": "Binary Tree Inorder Traversal #733",
    "category": "Bit Manipulation",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Intuit"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 734,
    "title": "Coin Change #734",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Meta",
      "Google"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 735,
    "title": "Coin Change #735",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Meta",
      "Morgan Stanley",
      "Uber"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 736,
    "title": "Rotate Image #736",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 737,
    "title": "Reverse Linked List #737",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 738,
    "title": "Product of Array Except Self #738",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon",
      "Goldman Sachs",
      "Microsoft",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 739,
    "title": "Word Ladder #739",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Adobe"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 740,
    "title": "Product of Array Except Self #740",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Apple",
      "Uber"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 741,
    "title": "Reverse Linked List #741",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Walmart",
      "Oracle",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 742,
    "title": "Top K Frequent Elements #742",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Intuit"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 743,
    "title": "Container With Most Water #743",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Adobe",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 744,
    "title": "Binary Tree Inorder Traversal #744",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart",
      "Goldman Sachs",
      "Meta",
      "Adobe"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 745,
    "title": "Container With Most Water #745",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 746,
    "title": "LRU Cache #746",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Amazon",
      "Morgan Stanley"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 747,
    "title": "Minimum Window Substring #747",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Flipkart",
      "Intuit",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 748,
    "title": "Maximum Subarray #748",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft",
      "Morgan Stanley"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 749,
    "title": "LRU Cache #749",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "SAP",
      "Flipkart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 750,
    "title": "LRU Cache #750",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Amazon",
      "Morgan Stanley",
      "Meta"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 751,
    "title": "Minimum Window Substring #751",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 752,
    "title": "Maximum Subarray #752",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe",
      "Microsoft",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 753,
    "title": "Binary Tree Inorder Traversal #753",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Morgan Stanley",
      "Oracle",
      "Flipkart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 754,
    "title": "Word Ladder #754",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Adobe"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 755,
    "title": "Rotate Image #755",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley",
      "Apple",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 756,
    "title": "LRU Cache #756",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "SAP",
      "Adobe",
      "Google"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 757,
    "title": "Maximum Subarray #757",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 758,
    "title": "Climbing Stairs #758",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Google",
      "Netflix"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 759,
    "title": "Climbing Stairs #759",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Uber",
      "Microsoft",
      "Oracle",
      "Google"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 760,
    "title": "Container With Most Water #760",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 761,
    "title": "Maximum Subarray #761",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart",
      "Morgan Stanley",
      "SAP"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 762,
    "title": "Valid Parentheses #762",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Walmart",
      "Adobe",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 763,
    "title": "Climbing Stairs #763",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Apple"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 764,
    "title": "Maximum Subarray #764",
    "category": "Two Pointers",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Meta",
      "Microsoft"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 765,
    "title": "Merge Intervals #765",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Netflix",
      "Adobe",
      "Morgan Stanley"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 766,
    "title": "Merge Intervals #766",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs",
      "Oracle"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 767,
    "title": "Kth Largest Element #767",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Uber",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 768,
    "title": "Maximum Subarray #768",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Google",
      "Apple",
      "Netflix",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 769,
    "title": "Longest Substring Without Repeating Characters #769",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Flipkart"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 770,
    "title": "Course Schedule #770",
    "category": "Queues",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Adobe",
      "Oracle"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 771,
    "title": "Container With Most Water #771",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart",
      "Flipkart",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 772,
    "title": "Minimum Window Substring #772",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 773,
    "title": "Container With Most Water #773",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "SAP",
      "Apple",
      "Walmart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 774,
    "title": "Minimum Window Substring #774",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Meta",
      "Uber",
      "Google"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 775,
    "title": "Word Ladder #775",
    "category": "Binary Search",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit",
      "Uber"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 776,
    "title": "Rotate Image #776",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Meta",
      "Morgan Stanley",
      "Apple"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 777,
    "title": "Coin Change #777",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Goldman Sachs",
      "Microsoft",
      "Netflix"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 778,
    "title": "Top K Frequent Elements #778",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Amazon"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 779,
    "title": "Binary Tree Inorder Traversal #779",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Walmart",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 780,
    "title": "Merge Intervals #780",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Google",
      "Netflix",
      "Apple",
      "Adobe"
    ],
    "description": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 781,
    "title": "Course Schedule #781",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Flipkart"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 782,
    "title": "Minimum Window Substring #782",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Goldman Sachs",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 783,
    "title": "LRU Cache #783",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Meta",
      "Google",
      "Oracle",
      "Intuit"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 784,
    "title": "LRU Cache #784",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Flipkart"
    ],
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 785,
    "title": "Course Schedule #785",
    "category": "Backtracking",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Intuit",
      "Amazon"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 786,
    "title": "Rotate Image #786",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart",
      "Oracle",
      "Apple",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 787,
    "title": "Climbing Stairs #787",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley",
      "Oracle"
    ],
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 788,
    "title": "Container With Most Water #788",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Google",
      "Intuit"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 789,
    "title": "Number of Islands #789",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Apple",
      "Walmart",
      "Oracle",
      "Uber"
    ],
    "description": "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 790,
    "title": "Product of Array Except Self #790",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 791,
    "title": "Longest Substring Without Repeating Characters #791",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Netflix",
      "SAP"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 792,
    "title": "Word Ladder #792",
    "category": "Strings",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Netflix",
      "Amazon",
      "Goldman Sachs"
    ],
    "description": "Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 793,
    "title": "Minimum Window Substring #793",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "SAP",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 794,
    "title": "Coin Change #794",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Uber",
      "Netflix",
      "Oracle"
    ],
    "description": "Given coins of different denominations and a total amount, compute the fewest number of coins needed.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 795,
    "title": "Binary Tree Inorder Traversal #795",
    "category": "Backtracking",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Netflix",
      "Meta",
      "Adobe"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 796,
    "title": "Reverse Linked List #796",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Goldman Sachs"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 797,
    "title": "Longest Substring Without Repeating Characters #797",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft",
      "Amazon",
      "Netflix"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 798,
    "title": "Product of Array Except Self #798",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "Apple",
      "Flipkart",
      "Goldman Sachs",
      "Meta"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 799,
    "title": "Top K Frequent Elements #799",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon",
      "Microsoft"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input_format": "s = \\\"abcabcbb\\\"",
    "output_format": "3",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "s = \\\"abcabcbb\\\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 800,
    "title": "Detect Cycle in Linked List #800",
    "category": "Queues",
    "difficulty": "Hard",
    "company_tags": [
      "SAP",
      "Goldman Sachs",
      "Netflix"
    ],
    "description": "Solve the problem using efficient algorithms and data structures.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 801,
    "title": "Star Pyramid Pattern",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Apple",
      "Uber",
      "Microsoft",
      "Amazon"
    ],
    "description": "Print a pyramid star pattern for given n",
    "input_format": "n=4",
    "output_format": "   *\\n  ***\\n *****\\n*******",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=4",
    "sample_output": "   *\\n  ***\\n *****\\n*******",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 802,
    "title": "Inverted Star Pyramid",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Google"
    ],
    "description": "Print inverted pyramid star pattern",
    "input_format": "n=4",
    "output_format": "*******\\n *****\\n  ***\\n   *",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=4",
    "sample_output": "*******\\n *****\\n  ***\\n   *",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 803,
    "title": "Diamond Pattern",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Amazon",
      "Intuit"
    ],
    "description": "Print a diamond pattern using stars",
    "input_format": "n=3",
    "output_format": "  *\\n ***\\n*****\\n ***\\n  *",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=3",
    "sample_output": "  *\\n ***\\n*****\\n ***\\n  *",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 804,
    "title": "Floyd Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart",
      "Google",
      "Intuit",
      "Netflix"
    ],
    "description": "Print Floyd's triangle",
    "input_format": "n=4",
    "output_format": "1\\n2 3\\n4 5 6\\n7 8 9 10",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=4",
    "sample_output": "1\\n2 3\\n4 5 6\\n7 8 9 10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 805,
    "title": "Pascal Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Oracle"
    ],
    "description": "Generate Pascal triangle",
    "input_format": "n=5",
    "output_format": "1\\n1 1\\n1 2 1\\n1 3 3 1\\n1 4 6 4 1",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=5",
    "sample_output": "1\\n1 1\\n1 2 1\\n1 3 3 1\\n1 4 6 4 1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 806,
    "title": "Prime Number Check",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Intuit",
      "Oracle"
    ],
    "description": "Check whether a number is prime",
    "input_format": "n=7",
    "output_format": "Prime",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=7",
    "sample_output": "Prime",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 807,
    "title": "Armstrong Number",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle",
      "Microsoft",
      "Walmart",
      "Intuit"
    ],
    "description": "Check Armstrong number",
    "input_format": "n=153",
    "output_format": "Armstrong",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=153",
    "sample_output": "Armstrong",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 808,
    "title": "Palindrome Number",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley",
      "Adobe"
    ],
    "description": "Check if number is palindrome",
    "input_format": "n=121",
    "output_format": "Palindrome",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=121",
    "sample_output": "Palindrome",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 809,
    "title": "Fibonacci Series",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit",
      "Morgan Stanley",
      "Google"
    ],
    "description": "Generate Fibonacci sequence",
    "input_format": "n=6",
    "output_format": "0 1 1 2 3 5",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=6",
    "sample_output": "0 1 1 2 3 5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 810,
    "title": "Factorial of Number",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart",
      "Oracle",
      "Goldman Sachs",
      "Amazon"
    ],
    "description": "Compute factorial of n",
    "input_format": "n=5",
    "output_format": "120",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "n=5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 811,
    "title": "Two Sum",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Intuit"
    ],
    "description": "Find two numbers that add up to target",
    "input_format": "nums=[2,7,11,15], target=9",
    "output_format": "[0,1]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "nums=[2,7,11,15], target=9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 812,
    "title": "Reverse Linked List",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix",
      "Walmart",
      "SAP"
    ],
    "description": "Reverse a singly linked list",
    "input_format": "1->2->3->4",
    "output_format": "4->3->2->1",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "1->2->3->4",
    "sample_output": "4->3->2->1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 813,
    "title": "Maximum Subarray",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs",
      "Microsoft",
      "SAP",
      "Adobe"
    ],
    "description": "Find maximum subarray sum",
    "input_format": "[-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "[-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 814,
    "title": "Binary Tree Inorder Traversal",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Meta",
      "Goldman Sachs"
    ],
    "description": "Return inorder traversal",
    "input_format": "[1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "[1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  },
  {
    "id": 815,
    "title": "Number of Islands",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe",
      "Goldman Sachs",
      "SAP"
    ],
    "description": "Count islands in grid",
    "input_format": "grid=[['1','1'],['1','0']]",
    "output_format": "1",
    "constraints": "1 \\u2264 n \\u2264 10^5",
    "sample_input": "grid=[['1','1'],['1','0']]",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    }
  }
];

export const getCategories = () => [...new Set(problems.map(p => p.category))];
export const getCompanies = () => [...new Set(problems.flatMap(p => p.company_tags))].sort();
export const getProblemById = (id: number) => problems.find(p => p.id === id);
export const getDailyChallenge = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return problems[dayOfYear % problems.length];

};