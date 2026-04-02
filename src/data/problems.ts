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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
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
        System.out.println("  ");
    }
}`
    }
  },
// ADD THESE ENTRIES INSIDE THE problems array in problems.ts
// Paste them before the closing ]; of the problems array

  {
    "id": 816,
    "title": "Find HCF of 36 and 48",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the Highest Common Factor (HCF) of two given numbers 36 and 48.",
    "input_format": "Two integers: 36 and 48",
    "output_format": "HCF of the two numbers",
    "constraints": "Numbers are positive integers less than 10^6",
    "sample_input": "36 48",
    "sample_output": "12",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 817,
    "title": "Find LCM of 12 and 18",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find the Least Common Multiple (LCM) of two given numbers.",
    "input_format": "Two integers: 12 and 18",
    "output_format": "LCM of the two numbers",
    "constraints": "Numbers are positive integers less than 10^4",
    "sample_input": "12 18",
    "sample_output": "36",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 818,
    "title": "Is the number prime?",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Given a number N, determine whether it is prime or not.",
    "input_format": "A single integer N",
    "output_format": "YES if prime, NO otherwise",
    "constraints": "2 <= N <= 10^6",
    "sample_input": "17",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 819,
    "title": "Sum of digits",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Wipro"],
    "description": "Find the sum of all digits of a given number.",
    "input_format": "A single integer N",
    "output_format": "Sum of its digits",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "1234",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 820,
    "title": "Reverse a number",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Accenture"],
    "description": "Reverse the digits of a given integer.",
    "input_format": "A single integer N",
    "output_format": "The reversed number",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "12345",
    "sample_output": "54321",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 821,
    "title": "Count digits",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Count the number of digits in a given integer.",
    "input_format": "A single integer N",
    "output_format": "Number of digits",
    "constraints": "1 <= N <= 10^18",
    "sample_input": "987654",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 822,
    "title": "Power of two check",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "TCS"],
    "description": "Check if a given number is a power of 2.",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "16",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 823,
    "title": "Factorial of N",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "Infosys"],
    "description": "Compute the factorial of a given number N.",
    "input_format": "A single integer N",
    "output_format": "N! (factorial of N)",
    "constraints": "0 <= N <= 20",
    "sample_input": "5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 824,
    "title": "Fibonacci Nth term",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "CTS"],
    "description": "Find the Nth term in the Fibonacci sequence (0-indexed).",
    "input_format": "A single integer N",
    "output_format": "Nth Fibonacci number",
    "constraints": "0 <= N <= 30",
    "sample_input": "7",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 825,
    "title": "Armstrong number check",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "HCL"],
    "description": "Check if a number is an Armstrong number (sum of cubes of digits equals number).",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^4",
    "sample_input": "153",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 826,
    "title": "Perfect number check",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "TCS"],
    "description": "A perfect number equals the sum of its proper divisors. Check if given number is perfect.",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^5",
    "sample_input": "28",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 827,
    "title": "Palindrome number",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Accenture", "CTS"],
    "description": "Check if a given number reads the same forwards and backwards.",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "121",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 828,
    "title": "GCD of array",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the GCD of all elements in an array.",
    "input_format": "First line: N (size). Second line: N integers",
    "output_format": "GCD of all elements",
    "constraints": "1 <= N <= 100, elements <= 10^6",
    "sample_input": "4\n12 18 24 36",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 829,
    "title": "LCM of array",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "HCL"],
    "description": "Find the LCM of all elements in an array.",
    "input_format": "First line: N. Second line: N integers",
    "output_format": "LCM of all elements",
    "constraints": "1 <= N <= 15, elements <= 100",
    "sample_input": "3\n4 6 8",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 830,
    "title": "Count primes up to N",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "TCS"],
    "description": "Count the number of prime numbers less than or equal to N.",
    "input_format": "A single integer N",
    "output_format": "Count of primes <= N",
    "constraints": "1 <= N <= 10^6",
    "sample_input": "20",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 831,
    "title": "Nth prime number",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "CTS"],
    "description": "Find the Nth prime number (1-indexed).",
    "input_format": "A single integer N",
    "output_format": "Nth prime",
    "constraints": "1 <= N <= 1000",
    "sample_input": "5",
    "sample_output": "11",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 832,
    "title": "Sum of primes up to N",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "TCS"],
    "description": "Find the sum of all prime numbers up to N.",
    "input_format": "A single integer N",
    "output_format": "Sum of primes",
    "constraints": "1 <= N <= 10^5",
    "sample_input": "10",
    "sample_output": "17",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 833,
    "title": "Digital root",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["HCL", "Accenture"],
    "description": "Repeatedly sum digits until single digit (digital root).",
    "input_format": "A single integer N",
    "output_format": "Digital root of N",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "9875",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 834,
    "title": "Smallest prime factor",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the smallest prime factor of a given number.",
    "input_format": "A single integer N",
    "output_format": "Smallest prime factor",
    "constraints": "2 <= N <= 10^6",
    "sample_input": "36",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 835,
    "title": "Number of divisors",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Count the total number of divisors of N.",
    "input_format": "A single integer N",
    "output_format": "Total divisors of N",
    "constraints": "1 <= N <= 10^6",
    "sample_input": "12",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 836,
    "title": "Simple percentage",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find what percentage X is of Y.",
    "input_format": "Two integers X and Y",
    "output_format": "Percentage (integer, floor)",
    "constraints": "1 <= X <= Y <= 10^6",
    "sample_input": "25 200",
    "sample_output": "12",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 837,
    "title": "Percentage increase",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "HCL"],
    "description": "Find the percentage increase from old value to new value.",
    "input_format": "Two integers: old new",
    "output_format": "Percentage increase (integer)",
    "constraints": "1 <= old < new <= 10^6",
    "sample_input": "80 100",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 838,
    "title": "Percentage decrease",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "Accenture"],
    "description": "Find the percentage decrease from old value to new value.",
    "input_format": "Two integers: old new",
    "output_format": "Percentage decrease (integer)",
    "constraints": "1 <= new < old <= 10^6",
    "sample_input": "100 80",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 839,
    "title": "Value after percentage increase",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Given original value and percentage, find value after increase.",
    "input_format": "Two integers: value percent",
    "output_format": "Result after increase",
    "constraints": "1 <= value <= 10^5, 1 <= percent <= 100",
    "sample_input": "200 25",
    "sample_output": "250",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 840,
    "title": "Value after percentage decrease",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "HCL"],
    "description": "Given original value and percentage, find value after decrease.",
    "input_format": "Two integers: value percent",
    "output_format": "Result after decrease",
    "constraints": "1 <= value <= 10^5, 1 <= percent <= 100",
    "sample_input": "200 25",
    "sample_output": "150",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 841,
    "title": "Successive percentage",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Amazon"],
    "description": "Two successive discounts of p% and q% are applied. Find effective single discount percentage.",
    "input_format": "Two integers p q",
    "output_format": "Effective discount percentage (integer floor)",
    "constraints": "1 <= p,q <= 99",
    "sample_input": "20 10",
    "sample_output": "28",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 842,
    "title": "Profit and Loss percentage",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find profit or loss percentage given cost price and selling price.",
    "input_format": "Two integers: CP SP",
    "output_format": "PROFIT X or LOSS X where X is percentage",
    "constraints": "1 <= CP,SP <= 10^6",
    "sample_input": "100 120",
    "sample_output": "PROFIT 20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 843,
    "title": "Selling price from profit%",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given cost price and profit percentage, find selling price.",
    "input_format": "Two integers: CP profit_percent",
    "output_format": "Selling Price",
    "constraints": "1 <= CP <= 10^5, 1 <= profit_percent <= 500",
    "sample_input": "100 20",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 844,
    "title": "Cost price from loss%",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["HCL", "Accenture"],
    "description": "Given selling price and loss percentage, find cost price.",
    "input_format": "Two integers: SP loss_percent",
    "output_format": "Cost Price",
    "constraints": "1 <= SP <= 10^5, 1 <= loss_percent <= 99",
    "sample_input": "90 10",
    "sample_output": "100",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 845,
    "title": "Marked price discount",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Given marked price and discount percentage, find selling price.",
    "input_format": "Two integers: MP discount_percent",
    "output_format": "Selling Price",
    "constraints": "1 <= MP <= 10^5, 1 <= discount_percent <= 99",
    "sample_input": "500 20",
    "sample_output": "400",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 846,
    "title": "Simplify ratio",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Simplify a given ratio A:B to its lowest terms.",
    "input_format": "Two integers A and B",
    "output_format": "Simplified ratio as 'X:Y'",
    "constraints": "1 <= A,B <= 10^6",
    "sample_input": "24 36",
    "sample_output": "2:3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 847,
    "title": "Fourth proportional",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find the fourth proportional to A, B, C (A:B = C:?)",
    "input_format": "Three integers A B C",
    "output_format": "Fourth proportional",
    "constraints": "1 <= A,B,C <= 10^4",
    "sample_input": "2 3 4",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 848,
    "title": "Mean proportional",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Find the mean proportional between A and B (sqrt(A*B)).",
    "input_format": "Two integers A B",
    "output_format": "Mean proportional (integer)",
    "constraints": "1 <= A,B <= 10^4, A*B is perfect square",
    "sample_input": "4 16",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 849,
    "title": "Ratio division",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Divide a total amount in ratio A:B. Print A's share.",
    "input_format": "Three integers: total A B",
    "output_format": "A's share (integer)",
    "constraints": "A+B divides total evenly",
    "sample_input": "100 2 3",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 850,
    "title": "Three-way ratio division",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Divide total in ratio A:B:C. Print all three shares.",
    "input_format": "Four integers: total A B C",
    "output_format": "Three shares space separated",
    "constraints": "Sum divides total evenly",
    "sample_input": "120 1 2 3",
    "sample_output": "20 40 60",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 851,
    "title": "Compare ratios",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Compare two ratios A:B and C:D. Print GREATER, LESS, or EQUAL.",
    "input_format": "Four integers A B C D",
    "output_format": "GREATER LESS or EQUAL (first ratio vs second)",
    "constraints": "1 <= A,B,C,D <= 10^4",
    "sample_input": "3 4 5 7",
    "sample_output": "GREATER",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 852,
    "title": "Partnership profit share",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Two partners invest P1 for T1 months and P2 for T2 months. Total profit is P. Find first partner's share.",
    "input_format": "Five integers: P1 T1 P2 T2 P",
    "output_format": "First partner's profit share",
    "constraints": "All values >= 1",
    "sample_input": "3000 12 4000 10 7000",
    "sample_output": "3000",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 853,
    "title": "Mixture ratio",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "Amazon"],
    "description": "A mixture contains milk and water in ratio A:B. How much water to add to C litres to make ratio A:D?",
    "input_format": "Four integers A B C D",
    "output_format": "Litres of water to add",
    "constraints": "Valid ratio inputs",
    "sample_input": "3 1 40 3",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 854,
    "title": "Speed Distance Time",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given distance D km and speed S km/h, find time taken in hours.",
    "input_format": "Two integers D S",
    "output_format": "Time in hours (integer)",
    "constraints": "D is divisible by S",
    "sample_input": "120 60",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 855,
    "title": "Relative speed same direction",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Two trains move in same direction at speeds A and B. Find relative speed.",
    "input_format": "Two integers A B",
    "output_format": "Relative speed (absolute difference)",
    "constraints": "1 <= A,B <= 500",
    "sample_input": "60 40",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 856,
    "title": "Relative speed opposite direction",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Two trains move in opposite directions at speeds A and B. Find relative speed.",
    "input_format": "Two integers A B",
    "output_format": "Sum of speeds",
    "constraints": "1 <= A,B <= 500",
    "sample_input": "60 40",
    "sample_output": "100",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 857,
    "title": "Train crossing pole",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "A train of length L metres runs at S km/h. Find time to cross a pole in seconds.",
    "input_format": "Two integers L S",
    "output_format": "Time in seconds (integer)",
    "constraints": "L and S give integer result",
    "sample_input": "100 36",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 858,
    "title": "Train crossing platform",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Train length L1, platform length L2, speed S km/h. Find time to cross in seconds.",
    "input_format": "Three integers L1 L2 S",
    "output_format": "Time in seconds (integer)",
    "constraints": "Result is integer",
    "sample_input": "200 300 90",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 859,
    "title": "Average speed",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "CTS"],
    "description": "A person travels D1 km at S1 km/h and D2 km at S2 km/h. Find average speed.",
    "input_format": "Four integers D1 S1 D2 S2",
    "output_format": "Average speed (integer km/h)",
    "constraints": "Result is integer",
    "sample_input": "60 30 60 60",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 860,
    "title": "Boats and streams downstream",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "HCL"],
    "description": "Boat speed in still water is B km/h, stream speed is S km/h. Find downstream speed.",
    "input_format": "Two integers B S",
    "output_format": "Downstream speed",
    "constraints": "1 <= S < B <= 100",
    "sample_input": "10 3",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 861,
    "title": "Boats and streams upstream",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Boat speed in still water is B km/h, stream speed is S km/h. Find upstream speed.",
    "input_format": "Two integers B S",
    "output_format": "Upstream speed",
    "constraints": "1 <= S < B <= 100",
    "sample_input": "10 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 862,
    "title": "Time to meet",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Accenture"],
    "description": "Two people start from same point in opposite directions at speeds A and B km/h. Total distance D. When do they meet?",
    "input_format": "Three integers A B D",
    "output_format": "Time in hours (integer)",
    "constraints": "D divisible by (A+B)",
    "sample_input": "60 40 200",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 863,
    "title": "Circular track meeting",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "Amazon"],
    "description": "Two runners on circular track of length L. Speeds A and B. Same direction. Time to meet again?",
    "input_format": "Three integers L A B",
    "output_format": "Time in seconds (integer)",
    "constraints": "L divisible by |A-B|",
    "sample_input": "300 10 4",
    "sample_output": "50",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 864,
    "title": "Work done in days",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "A can do work in A days, B in B days. Together in how many days?",
    "input_format": "Two integers A B",
    "output_format": "Days (integer, floor)",
    "constraints": "Result is integer",
    "sample_input": "6 12",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 865,
    "title": "Work with efficiency",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "A is twice as efficient as B. Together they finish in D days. How long does A alone take?",
    "input_format": "One integer D",
    "output_format": "Days A alone takes",
    "constraints": "1 <= D <= 100",
    "sample_input": "10",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 866,
    "title": "Pipes filling tank",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Pipe A fills tank in A hours, pipe B in B hours. Together in how many hours?",
    "input_format": "Two integers A B",
    "output_format": "Hours (integer)",
    "constraints": "Result is integer",
    "sample_input": "4 12",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 867,
    "title": "Pipe filling and emptying",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Inlet fills in A hours, outlet empties in B hours (B > A). Both open — in how many hours does tank fill?",
    "input_format": "Two integers A B",
    "output_format": "Hours to fill (integer)",
    "constraints": "B > A, result is integer",
    "sample_input": "3 6",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 868,
    "title": "Work left after N days",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "A does work in X days, B in Y days. A works alone for D days then B joins. Total days to finish?",
    "input_format": "Three integers X Y D",
    "output_format": "Total days (integer)",
    "constraints": "Valid integer result",
    "sample_input": "12 6 4",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 869,
    "title": "Wages distribution",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["CTS", "HCL"],
    "description": "A and B together earn W rupees in D days. A alone earns E per day. Find B's daily earning.",
    "input_format": "Three integers W D E",
    "output_format": "B's daily earning",
    "constraints": "Valid integer result",
    "sample_input": "400 10 30",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 870,
    "title": "Three workers",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "A, B, C can do work in X, Y, Z days. Working together, how many days to finish?",
    "input_format": "Three integers X Y Z",
    "output_format": "Days (integer, floor)",
    "constraints": "Valid integer result",
    "sample_input": "2 3 6",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 871,
    "title": "Alternate day work",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "TCS"],
    "description": "A and B work alternately, A starting first. A finishes in X days, B in Y days. Total days to finish?",
    "input_format": "Two integers X Y",
    "output_format": "Total days",
    "constraints": "1 <= X,Y <= 50",
    "sample_input": "6 12",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 872,
    "title": "Simple interest",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Calculate simple interest given Principal P, Rate R%, Time T years.",
    "input_format": "Three integers P R T",
    "output_format": "Simple Interest amount",
    "constraints": "1 <= P <= 10^6, 1<=R<=100, 1<=T<=50",
    "sample_input": "1000 5 2",
    "sample_output": "100",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 873,
    "title": "Amount after SI",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find total amount after simple interest.",
    "input_format": "Three integers P R T",
    "output_format": "Total Amount (P + SI)",
    "constraints": "1 <= P <= 10^6",
    "sample_input": "1000 5 2",
    "sample_output": "1100",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 874,
    "title": "Compound interest annual",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Calculate compound interest compounded annually. CI = P*(1+R/100)^T - P.",
    "input_format": "Three integers P R T",
    "output_format": "CI (integer, floor)",
    "constraints": "P<=10^5, R<=20, T<=5",
    "sample_input": "1000 10 2",
    "sample_output": "210",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 875,
    "title": "Amount after CI",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Amazon"],
    "description": "Find total amount after compound interest (annually).",
    "input_format": "Three integers P R T",
    "output_format": "Amount (integer, floor)",
    "constraints": "P<=10^5, R<=20, T<=5",
    "sample_input": "1000 10 2",
    "sample_output": "1210",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 876,
    "title": "SI find rate",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "TCS"],
    "description": "Given P, SI, and T, find the rate of interest per annum.",
    "input_format": "Three integers P SI T",
    "output_format": "Rate (integer %)",
    "constraints": "Values give integer rate",
    "sample_input": "1000 200 4",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 877,
    "title": "SI find time",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["CTS", "HCL"],
    "description": "Given P, SI, and R, find the time in years.",
    "input_format": "Three integers P SI R",
    "output_format": "Time in years (integer)",
    "constraints": "Values give integer time",
    "sample_input": "1000 200 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 878,
    "title": "Difference CI and SI",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the difference between CI and SI for 2 years with principal P and rate R%.",
    "input_format": "Two integers P R",
    "output_format": "CI - SI (integer, floor)",
    "constraints": "P<=10^5, R<=20",
    "sample_input": "1000 10",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 879,
    "title": "CI half yearly",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Wipro"],
    "description": "CI compounded half-yearly. Rate R% per annum, principal P, time T years.",
    "input_format": "Three integers P R T",
    "output_format": "Amount (integer, floor)",
    "constraints": "T<=4, R even",
    "sample_input": "1000 10 1",
    "sample_output": "1102",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 880,
    "title": "Average of N numbers",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the average of N numbers.",
    "input_format": "First line N, second line N integers",
    "output_format": "Average (integer, floor)",
    "constraints": "1<=N<=100",
    "sample_input": "5\n10 20 30 40 50",
    "sample_output": "30",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 881,
    "title": "Weighted average",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find weighted average given values and their weights.",
    "input_format": "First line N. Then N pairs: value weight",
    "output_format": "Weighted average (integer, floor)",
    "constraints": "1<=N<=20",
    "sample_input": "3\n10 2 20 3 30 5",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 882,
    "title": "Average after removing element",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Average of N numbers is A. If one element X is removed, find new average.",
    "input_format": "Three integers N A X",
    "output_format": "New average (integer, floor)",
    "constraints": "N>=2, N*A-X divisible by N-1",
    "sample_input": "5 20 30",
    "sample_output": "17",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 883,
    "title": "New average after adding",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Average of N numbers is A. A new number X is added. Find new average.",
    "input_format": "Three integers N A X",
    "output_format": "New average (integer, floor)",
    "constraints": "N>=1",
    "sample_input": "4 20 40",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 884,
    "title": "Average speed problem",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "A person travels from A to B at speed S1 and returns at S2. Find average speed.",
    "input_format": "Two integers S1 S2",
    "output_format": "Average speed (integer, floor)",
    "constraints": "S1,S2>=1",
    "sample_input": "60 40",
    "sample_output": "48",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 885,
    "title": "Average marks",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Class of N students has average marks M. If top scorer T is excluded, average drops by D. Find T's marks.",
    "input_format": "Three integers N M D",
    "output_format": "Top scorer's marks",
    "constraints": "Valid integer result",
    "sample_input": "10 75 5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 886,
    "title": "Moving average",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given N numbers, output average of every consecutive 3 numbers (floor).",
    "input_format": "First line N, second line N integers",
    "output_format": "Space-separated floor averages",
    "constraints": "N>=3",
    "sample_input": "6\n1 2 3 4 5 6",
    "sample_output": "2 3 4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 887,
    "title": "nCr calculation",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Amazon"],
    "description": "Calculate nCr (combinations).",
    "input_format": "Two integers n r",
    "output_format": "nCr value",
    "constraints": "0<=r<=n<=20",
    "sample_input": "5 2",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 888,
    "title": "nPr calculation",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "Infosys"],
    "description": "Calculate nPr (permutations).",
    "input_format": "Two integers n r",
    "output_format": "nPr value",
    "constraints": "0<=r<=n<=12",
    "sample_input": "5 2",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 889,
    "title": "Arrangements in a row",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "CTS"],
    "description": "In how many ways can N distinct people sit in a row?",
    "input_format": "One integer N",
    "output_format": "N! (factorial)",
    "constraints": "1<=N<=12",
    "sample_input": "5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 890,
    "title": "Circular arrangements",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["HCL", "Infosys"],
    "description": "In how many ways can N distinct people sit around a circular table?",
    "input_format": "One integer N",
    "output_format": "(N-1)!",
    "constraints": "2<=N<=12",
    "sample_input": "5",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 891,
    "title": "Arrangements with constraint",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["TCS", "Amazon"],
    "description": "N people, M must always sit together. Arrangements in a row?",
    "input_format": "Two integers N M",
    "output_format": "Number of arrangements",
    "constraints": "2<=M<=N<=10",
    "sample_input": "5 2",
    "sample_output": "48",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 892,
    "title": "Selecting committee",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "TCS"],
    "description": "From N men and M women, select a committee of P people with at least 1 woman.",
    "input_format": "Three integers N M P",
    "output_format": "Number of ways",
    "constraints": "N,M>=1, P<=N+M",
    "sample_input": "3 2 3",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 893,
    "title": "Dice outcomes",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Two dice thrown. How many outcomes have sum equal to S?",
    "input_format": "One integer S",
    "output_format": "Count of outcomes",
    "constraints": "2<=S<=12",
    "sample_input": "7",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 894,
    "title": "Coin toss probability",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "N fair coins tossed. Probability of exactly K heads? Output as fraction P/Q in lowest terms.",
    "input_format": "Two integers N K",
    "output_format": "Fraction P/Q",
    "constraints": "0<=K<=N<=10",
    "sample_input": "3 2",
    "sample_output": "3/8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 895,
    "title": "Cards probability",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "From a deck of 52 cards, find probability of drawing a card of given suit. Output as fraction.",
    "input_format": "One string: HEART/DIAMOND/CLUB/SPADE",
    "output_format": "Fraction P/Q in lowest terms",
    "constraints": "Valid suit name",
    "sample_input": "HEART",
    "sample_output": "1/4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 896,
    "title": "Word arrangements",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "TCS"],
    "description": "How many distinct arrangements of the letters of a given word are possible?",
    "input_format": "One word (uppercase, no spaces)",
    "output_format": "Count of distinct arrangements",
    "constraints": "Length <= 10",
    "sample_input": "MISSISSIPPI",
    "sample_output": "34650",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 897,
    "title": "Age after N years",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Present age of A is X. Find A's age after N years.",
    "input_format": "Two integers X N",
    "output_format": "Age after N years",
    "constraints": "X,N>=0",
    "sample_input": "25 5",
    "sample_output": "30",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 898,
    "title": "Age ratio problem",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Ratio of A's age to B's age is P:Q. After N years ratio becomes R:S. Find present ages.",
    "input_format": "Six integers P Q R S N",
    "output_format": "A's age and B's age space-separated",
    "constraints": "Valid integer solution",
    "sample_input": "3 4 5 6 8",
    "sample_output": "16 20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 899,
    "title": "Father son age",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Father is F years old, son is S years old. After how many years will father be twice son's age?",
    "input_format": "Two integers F S",
    "output_format": "Years (integer)",
    "constraints": "F > 2*S initially may vary",
    "sample_input": "40 10",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 900,
    "title": "Average age change",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Average age of N people is A. One person of age X leaves and person of age Y joins. New average?",
    "input_format": "Four integers N A X Y",
    "output_format": "New average (integer, floor)",
    "constraints": "Valid inputs",
    "sample_input": "10 30 50 20",
    "sample_output": "29",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 901,
    "title": "Age before N years",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Present age is A. What was the age N years ago?",
    "input_format": "Two integers A N",
    "output_format": "Age N years ago",
    "constraints": "A>N",
    "sample_input": "30 5",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 902,
    "title": "Angle between hands",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the angle between the hour and minute hand at given time H:M.",
    "input_format": "Two integers H M",
    "output_format": "Angle in degrees (smaller angle, integer)",
    "constraints": "0<=H<=11, 0<=M<=59",
    "sample_input": "3 30",
    "sample_output": "75",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 903,
    "title": "Times hands coincide",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "How many times do clock hands coincide between 12:00 and 12:00 (24 hours)?",
    "input_format": "No input (use 24)",
    "output_format": "Count",
    "constraints": "Always 22",
    "sample_input": "0",
    "sample_output": "22",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 904,
    "title": "Clock gains time",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "A clock gains G minutes every H hours. If set correctly at 12:00 noon, what time does it show after T hours?",
    "input_format": "Three integers G H T",
    "output_format": "Time in HH:MM format",
    "constraints": "Valid integer result",
    "sample_input": "2 24 48",
    "sample_output": "12:04",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 905,
    "title": "Minutes to next coincidence",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "TCS"],
    "description": "At 3:00, after how many minutes will the hands be together?",
    "input_format": "No input",
    "output_format": "Minutes (as fraction M/11, output numerator)",
    "constraints": "Always 180/11",
    "sample_input": "0",
    "sample_output": "180",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 906,
    "title": "Day of week",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given a date D/M/Y, find what day of the week it is.",
    "input_format": "Three integers D M Y",
    "output_format": "Day name (MONDAY etc.)",
    "constraints": "1<=D<=31, valid date, Y>=1900",
    "sample_input": "1 1 2024",
    "sample_output": "MONDAY",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 907,
    "title": "Odd days in century",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "How many odd days in N complete years? (Use standard odd-days method)",
    "input_format": "One integer N (0,100,200,400 only for this problem)",
    "output_format": "Odd days",
    "constraints": "N in {0,100,200,400}",
    "sample_input": "100",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 908,
    "title": "Leap year check",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Check if a given year is a leap year.",
    "input_format": "One integer Y",
    "output_format": "YES or NO",
    "constraints": "1<=Y<=9999",
    "sample_input": "2000",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 909,
    "title": "Days between dates",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Find number of days between two dates D1/M1/Y1 and D2/M2/Y2.",
    "input_format": "Six integers D1 M1 Y1 D2 M2 Y2",
    "output_format": "Number of days",
    "constraints": "Valid dates, same year for simplicity",
    "sample_input": "1 1 2024 31 12 2024",
    "sample_output": "365",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 910,
    "title": "Area of rectangle",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Find area of rectangle with length L and breadth B.",
    "input_format": "Two integers L B",
    "output_format": "Area",
    "constraints": "1<=L,B<=10^4",
    "sample_input": "12 5",
    "sample_output": "60",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 911,
    "title": "Perimeter of rectangle",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "CTS"],
    "description": "Find perimeter of rectangle with length L and breadth B.",
    "input_format": "Two integers L B",
    "output_format": "Perimeter",
    "constraints": "1<=L,B<=10^4",
    "sample_input": "12 5",
    "sample_output": "34",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 912,
    "title": "Area of circle",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Find area of circle with radius R. Use pi=22/7. Output integer floor.",
    "input_format": "One integer R",
    "output_format": "Area (integer, floor)",
    "constraints": "1<=R<=1000",
    "sample_input": "7",
    "sample_output": "154",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 913,
    "title": "Circumference of circle",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "Accenture"],
    "description": "Find circumference of circle with radius R. Use pi=22/7. Output integer floor.",
    "input_format": "One integer R",
    "output_format": "Circumference (integer, floor)",
    "constraints": "1<=R<=1000",
    "sample_input": "7",
    "sample_output": "44",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 914,
    "title": "Area of triangle",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find area of triangle with base B and height H.",
    "input_format": "Two integers B H",
    "output_format": "Area (integer, floor if odd)",
    "constraints": "1<=B,H<=10^4",
    "sample_input": "10 6",
    "sample_output": "30",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 915,
    "title": "Volume of cuboid",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Find volume of cuboid with L, B, H.",
    "input_format": "Three integers L B H",
    "output_format": "Volume",
    "constraints": "1<=L,B,H<=100",
    "sample_input": "4 5 6",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 916,
    "title": "Volume of cylinder",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Find volume of cylinder with radius R and height H. Use pi=22/7, floor result.",
    "input_format": "Two integers R H",
    "output_format": "Volume (integer, floor)",
    "constraints": "1<=R,H<=100",
    "sample_input": "7 10",
    "sample_output": "1540",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 917,
    "title": "Surface area of cube",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Amazon"],
    "description": "Find total surface area of cube with side S.",
    "input_format": "One integer S",
    "output_format": "Surface area",
    "constraints": "1<=S<=100",
    "sample_input": "5",
    "sample_output": "150",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 918,
    "title": "Diagonal of rectangle",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "CTS"],
    "description": "Find diagonal of rectangle with L and B. Output integer if perfect square, else floor.",
    "input_format": "Two integers L B",
    "output_format": "Diagonal (integer, floor)",
    "constraints": "1<=L,B<=100",
    "sample_input": "3 4",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 919,
    "title": "Area of trapezium",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "HCL"],
    "description": "Find area of trapezium: 0.5*(a+b)*h where a,b are parallel sides.",
    "input_format": "Three integers a b h",
    "output_format": "Area (integer, floor)",
    "constraints": "1<=a,b,h<=100",
    "sample_input": "6 4 5",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 920,
    "title": "Alligation rule",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find ratio to mix two ingredients at prices P1 and P2 to get mean price M.",
    "input_format": "Three integers P1 P2 M",
    "output_format": "Ratio as X:Y (P2-M : M-P1)",
    "constraints": "P1<M<P2",
    "sample_input": "20 30 25",
    "sample_output": "1:1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 921,
    "title": "Mixture replacement",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Vessel has M litres of liquid. X litres removed and replaced with water, done N times. Final amount of original liquid?",
    "input_format": "Three integers M X N",
    "output_format": "Final quantity (integer, floor)",
    "constraints": "Valid inputs",
    "sample_input": "100 10 3",
    "sample_output": "72",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 922,
    "title": "Milk water ratio after mixing",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Container A has a:b milk:water. Container B has c:d milk:water. Equal volumes mixed. Final milk:water ratio?",
    "input_format": "Four integers a b c d",
    "output_format": "Ratio as X:Y simplified",
    "constraints": "Valid inputs",
    "sample_input": "3 1 1 1",
    "sample_output": "1:1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 923,
    "title": "Number to words",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Convert a single digit number to its English word.",
    "input_format": "One integer N (0-9)",
    "output_format": "Word in uppercase",
    "constraints": "0<=N<=9",
    "sample_input": "5",
    "sample_output": "FIVE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 924,
    "title": "Binary to decimal",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Convert a binary number (given as string) to decimal.",
    "input_format": "A binary string",
    "output_format": "Decimal value",
    "constraints": "Length <= 20",
    "sample_input": "1010",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 925,
    "title": "Decimal to binary",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Convert a decimal number to binary string.",
    "input_format": "One integer N",
    "output_format": "Binary string",
    "constraints": "1<=N<=10^6",
    "sample_input": "10",
    "sample_output": "1010",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 926,
    "title": "Octal to decimal",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Convert an octal number to decimal.",
    "input_format": "One integer (octal)",
    "output_format": "Decimal value",
    "constraints": "Valid octal <= 10^6",
    "sample_input": "17",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 927,
    "title": "Hexadecimal to decimal",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Convert a hexadecimal string to decimal.",
    "input_format": "One hex string (uppercase)",
    "output_format": "Decimal value",
    "constraints": "Valid hex",
    "sample_input": "1F",
    "sample_output": "31",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 928,
    "title": "Next in AP",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given first three terms of an AP, find the next term.",
    "input_format": "Three integers",
    "output_format": "Next term",
    "constraints": "Valid AP",
    "sample_input": "2 5 8",
    "sample_output": "11",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 929,
    "title": "Next in GP",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Given first three terms of a GP, find the next term.",
    "input_format": "Three integers",
    "output_format": "Next term",
    "constraints": "Valid GP",
    "sample_input": "2 6 18",
    "sample_output": "54",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 930,
    "title": "Sum of AP",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Sum of AP with first term A, common difference D, N terms.",
    "input_format": "Three integers A D N",
    "output_format": "Sum of N terms",
    "constraints": "1<=N<=100",
    "sample_input": "1 2 5",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 931,
    "title": "Sum of GP",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Amazon"],
    "description": "Sum of GP with first term A, ratio R, N terms.",
    "input_format": "Three integers A R N",
    "output_format": "Sum (integer)",
    "constraints": "1<=N<=10, R<=5",
    "sample_input": "1 2 5",
    "sample_output": "31",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 932,
    "title": "Missing number in series",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Find the missing number: given N-1 numbers from 1 to N, find the missing one.",
    "input_format": "First line N. Second line N-1 integers",
    "output_format": "Missing number",
    "constraints": "1<=N<=10^6",
    "sample_input": "5\n1 2 4 5",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 933,
    "title": "Odd one out in series",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["CTS", "HCL"],
    "description": "Given a series of 5 numbers where 4 follow a pattern and 1 is wrong, find the wrong one.",
    "input_format": "Five integers",
    "output_format": "The wrong number",
    "constraints": "Series has one outlier",
    "sample_input": "2 4 8 15 32",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 934,
    "title": "Linear equation solve",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Solve Ax + B = C for x.",
    "input_format": "Three integers A B C",
    "output_format": "Value of x (integer)",
    "constraints": "A!=0, (C-B) divisible by A",
    "sample_input": "3 2 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 935,
    "title": "Quadratic roots",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Given Ax^2 + Bx + C = 0, find roots. Print REAL or COMPLEX.",
    "input_format": "Three integers A B C",
    "output_format": "REAL or COMPLEX",
    "constraints": "A!=0",
    "sample_input": "1 -5 6",
    "sample_output": "REAL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 936,
    "title": "Two equations",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Solve: A1x+B1y=C1 and A2x+B2y=C2. Find x and y.",
    "input_format": "Six integers A1 B1 C1 A2 B2 C2",
    "output_format": "x and y space-separated (integers)",
    "constraints": "Unique integer solution",
    "sample_input": "1 1 5 2 -1 1",
    "sample_output": "2 3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 937,
    "title": "Inequality solve",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Solve Ax + B > C. Find smallest integer x satisfying this.",
    "input_format": "Three integers A B C",
    "output_format": "Smallest integer x",
    "constraints": "A>0",
    "sample_input": "2 3 7",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 938,
    "title": "Pipes A B C",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Pipes A, B, C can fill tank in X, Y, Z hours. All open together, tank fills in?",
    "input_format": "Three integers X Y Z",
    "output_format": "Hours (integer, floor)",
    "constraints": "Valid integer result",
    "sample_input": "6 8 24",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 939,
    "title": "Boats meet middle",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "TCS"],
    "description": "Two boats start from opposite ends of river D km wide. Speeds A and B km/h. Where do they first meet from side A?",
    "input_format": "Three integers D A B",
    "output_format": "Distance from A (integer, floor)",
    "constraints": "Valid integer",
    "sample_input": "100 20 30",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 940,
    "title": "Number of handshakes",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "CTS"],
    "description": "N people in a room each shake hands with everyone else exactly once. Total handshakes?",
    "input_format": "One integer N",
    "output_format": "Total handshakes = N*(N-1)/2",
    "constraints": "2<=N<=1000",
    "sample_input": "5",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 941,
    "title": "Staircase steps",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "A person can climb 1 or 2 stairs at a time. Ways to reach Nth stair?",
    "input_format": "One integer N",
    "output_format": "Number of ways",
    "constraints": "1<=N<=30",
    "sample_input": "5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 942,
    "title": "Probability of drawing ball",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "Infosys"],
    "description": "Bag has R red, G green, B blue balls. Probability of picking red? Output as fraction.",
    "input_format": "Three integers R G B",
    "output_format": "Fraction P/Q in lowest terms",
    "constraints": "R+G+B>0",
    "sample_input": "3 4 3",
    "sample_output": "3/10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 943,
    "title": "Compound ratio",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "CTS"],
    "description": "Find compound ratio of A:B and C:D (= AC:BD simplified).",
    "input_format": "Four integers A B C D",
    "output_format": "Simplified ratio X:Y",
    "constraints": "Valid integers",
    "sample_input": "2 3 4 5",
    "sample_output": "8:15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 944,
    "title": "Population growth",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "HCL"],
    "description": "Population P grows at R% per year. Population after T years?",
    "input_format": "Three integers P R T",
    "output_format": "Population (integer, floor)",
    "constraints": "P<=10^6, R<=10, T<=10",
    "sample_input": "1000 10 2",
    "sample_output": "1210",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 945,
    "title": "Depreciation",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Value V depreciates at R% per year. Value after T years?",
    "input_format": "Three integers V R T",
    "output_format": "Value (integer, floor)",
    "constraints": "V<=10^6, R<=20, T<=5",
    "sample_input": "10000 10 2",
    "sample_output": "8100",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 946,
    "title": "Ratio to percentage",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["CTS", "Accenture"],
    "description": "Convert ratio A:B to percentage share of A (floor).",
    "input_format": "Two integers A B",
    "output_format": "Percentage of A (integer, floor)",
    "constraints": "A+B>0",
    "sample_input": "1 4",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 947,
    "title": "Tax calculation",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Income I, Tax rate R%. Find tax payable.",
    "input_format": "Two integers I R",
    "output_format": "Tax amount (integer, floor)",
    "constraints": "I,R>=1",
    "sample_input": "50000 20",
    "sample_output": "10000",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 948,
    "title": "Letter series next",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the next letter in the series: A C E G ?",
    "input_format": "A single letter series as space-separated letters",
    "output_format": "Next letter",
    "constraints": "Valid series",
    "sample_input": "A C E G",
    "sample_output": "I",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 949,
    "title": "Number series next",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find next number: 1 4 9 16 25 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Valid series",
    "sample_input": "1 4 9 16 25",
    "sample_output": "36",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 950,
    "title": "Alphanumeric series",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Find next: A1 B2 C3 D4 ?",
    "input_format": "Space-separated alphanumeric terms",
    "output_format": "Next term",
    "constraints": "Valid series",
    "sample_input": "A1 B2 C3 D4",
    "sample_output": "E5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 951,
    "title": "Missing in series",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Find the missing number: 2 4 _ 16 32",
    "input_format": "Five terms with one blank as 0",
    "output_format": "Missing number",
    "constraints": "Valid series",
    "sample_input": "2 4 0 16 32",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 952,
    "title": "Alternate series",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Two series interleaved: 1 2 3 4 5 6 7 8 _ What comes next?",
    "input_format": "Space-separated series",
    "output_format": "Next number",
    "constraints": "Interleaved pattern",
    "sample_input": "1 2 3 4 5 6 7 8",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 953,
    "title": "Difference series",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Differences: 1 2 4 7 11 16 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Differences increase by 1",
    "sample_input": "1 2 4 7 11 16",
    "sample_output": "22",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 954,
    "title": "Multiply series",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Series: 3 6 12 24 48 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Each term doubled",
    "sample_input": "3 6 12 24 48",
    "sample_output": "96",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 955,
    "title": "Square series",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Series: 1 4 9 16 25 36 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Squares",
    "sample_input": "1 4 9 16 25 36",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 956,
    "title": "Cube series",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Series: 1 8 27 64 125 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Cubes",
    "sample_input": "1 8 27 64 125",
    "sample_output": "216",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 957,
    "title": "Mixed operation series",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Amazon"],
    "description": "Series: 2 3 5 9 17 33 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Double previous minus something",
    "sample_input": "2 3 5 9 17 33",
    "sample_output": "65",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 958,
    "title": "Caesar cipher decode",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "If APPLE is coded as DSSOH (shift+3), decode given word.",
    "input_format": "A coded word (uppercase)",
    "output_format": "Decoded word (uppercase)",
    "constraints": "Shift is always 3",
    "sample_input": "KHOOR",
    "sample_output": "HELLO",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 959,
    "title": "Reverse word code",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "If coding reverses each word, decode: OLLEH DLROW",
    "input_format": "Space-separated coded words",
    "output_format": "Original words space-separated",
    "constraints": "Each word reversed",
    "sample_input": "OLLEH DLROW",
    "sample_output": "HELLO WORLD",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 960,
    "title": "Letter shift by position",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Each letter shifted by its 1-indexed position. A(+1)=B, P(+2)=R... Encode given word.",
    "input_format": "A word (uppercase)",
    "output_format": "Encoded word",
    "constraints": "Standard alphabet shift",
    "sample_input": "ACE",
    "sample_output": "BEI",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 961,
    "title": "Number to letter code",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "A=1, B=2...Z=26. Decode space-separated numbers to word.",
    "input_format": "Space-separated integers",
    "output_format": "Decoded word (uppercase)",
    "constraints": "1<=each<=26",
    "sample_input": "8 5 12 12 15",
    "sample_output": "HELLO",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 962,
    "title": "Letter to number code",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Encode a word: replace each letter with its position (A=1, B=2...). Space-separated.",
    "input_format": "A word (uppercase)",
    "output_format": "Space-separated numbers",
    "constraints": "Valid word",
    "sample_input": "JAVA",
    "sample_output": "10 1 22 1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 963,
    "title": "Mirror alphabet",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Mirror alphabet: A=Z, B=Y... Encode given word.",
    "input_format": "A word (uppercase)",
    "output_format": "Encoded word",
    "constraints": "A<->Z, B<->Y etc.",
    "sample_input": "HELLO",
    "sample_output": "SVOOL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 964,
    "title": "Even letters only",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Extract only letters at even positions (1-indexed: 2,4,6...) from word.",
    "input_format": "A word (uppercase)",
    "output_format": "Even-position letters",
    "constraints": "Length>=2",
    "sample_input": "ABCDEF",
    "sample_output": "BDF",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 965,
    "title": "Skip one letter",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "If A is coded as C (skip one), B as D... encode given word.",
    "input_format": "A word (uppercase)",
    "output_format": "Encoded word",
    "constraints": "Skip 2 letters",
    "sample_input": "HELLO",
    "sample_output": "JGNNQ",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 966,
    "title": "Interleave two words",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Interleave letters of two words: AB + CD = ACBD. Given result, find original two words of equal length.",
    "input_format": "One interleaved word (uppercase, even length)",
    "output_format": "Two words space-separated",
    "constraints": "Equal length halves",
    "sample_input": "ACBD",
    "sample_output": "AB CD",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 967,
    "title": "Number code pattern",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Amazon"],
    "description": "If 123 = 6 (sum of digits), 456 = 15... what is 789?",
    "input_format": "One 3-digit number",
    "output_format": "Sum of its digits",
    "constraints": "Digit sum pattern",
    "sample_input": "789",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 968,
    "title": "Parent child",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "A is B's father. B is C's son. What is A to C?",
    "input_format": "Index 1",
    "output_format": "GRANDFATHER",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "GRANDFATHER",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 969,
    "title": "Sibling relation",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "A is B's brother. B is C's sister. What is A to C?",
    "input_format": "Index 1",
    "output_format": "BROTHER",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "BROTHER",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 970,
    "title": "Mother's brother",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "What do you call your mother's brother?",
    "input_format": "Index 1",
    "output_format": "UNCLE",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "UNCLE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 971,
    "title": "Father's sister's son",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "What is your father's sister's son to you?",
    "input_format": "Index 1",
    "output_format": "COUSIN",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "COUSIN",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 972,
    "title": "Grandmother relation",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "A's mother is B's grandmother. What is A to B?",
    "input_format": "Index 1",
    "output_format": "PARENT",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "PARENT",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 973,
    "title": "Son's wife",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "What do you call your son's wife?",
    "input_format": "Index 1",
    "output_format": "DAUGHTER-IN-LAW",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "DAUGHTER-IN-LAW",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 974,
    "title": "Pointing relation",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "A says pointing to B: He is the son of my father's only son. Who is B to A?",
    "input_format": "Index 1",
    "output_format": "SON",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "SON",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 975,
    "title": "Sister's husband",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "What do you call your sister's husband?",
    "input_format": "Index 1",
    "output_format": "BROTHER-IN-LAW",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "BROTHER-IN-LAW",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 976,
    "title": "Final direction",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Person walks North 5km, turns right 3km, turns right 5km. Which direction facing?",
    "input_format": "Index 1",
    "output_format": "WEST",
    "constraints": "Fixed problem",
    "sample_input": "1",
    "sample_output": "WEST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 977,
    "title": "Distance from start",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Person walks East 3km, North 4km. Straight line distance from start?",
    "input_format": "Index 1",
    "output_format": "5 km",
    "constraints": "Pythagorean triple",
    "sample_input": "1",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 978,
    "title": "Opposite direction",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Facing South, turn left 90 degrees. Now facing?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 979,
    "title": "Shadow direction",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Morning (sun in East). Person faces North. Shadow falls in which direction?",
    "input_format": "Index 1",
    "output_format": "WEST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "WEST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 980,
    "title": "Sunset shadow",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Evening (sun in West). Person faces South. Shadow falls in which direction?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 981,
    "title": "Four turns",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["CTS", "HCL"],
    "description": "Start facing North. Turn right, right, left. Final direction?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 982,
    "title": "Compass bearing",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Which direction is opposite to North-West?",
    "input_format": "Index 1",
    "output_format": "SOUTH-EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "SOUTH-EAST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 983,
    "title": "Return direction",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Walked West to reach B from A. To return from B to A, walk in which direction?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 984,
    "title": "Rank from top",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "In a class of N students, A ranks R from top. What is A's rank from bottom?",
    "input_format": "Two integers N R",
    "output_format": "Rank from bottom = N-R+1",
    "constraints": "N>=R>=1",
    "sample_input": "40 10",
    "sample_output": "31",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 985,
    "title": "Rank from bottom",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Total N students. Rank from bottom is B. Rank from top?",
    "input_format": "Two integers N B",
    "output_format": "Rank from top = N-B+1",
    "constraints": "N>=B>=1",
    "sample_input": "50 15",
    "sample_output": "36",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 986,
    "title": "Position between two",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "A is R1 from top, B is R2 from bottom in a row of N. How many are between them?",
    "input_format": "Three integers N R1 R2",
    "output_format": "People between them",
    "constraints": "Valid positions",
    "sample_input": "10 3 4",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 987,
    "title": "Tallest in row",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Given N heights, output rank (from tallest) of each person.",
    "input_format": "First line N, second line N heights",
    "output_format": "Space-separated ranks",
    "constraints": "N<=20",
    "sample_input": "5\n170 165 180 175 160",
    "sample_output": "3 4 1 2 5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 988,
    "title": "Minimum rank",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Given N scores, find minimum possible rank if ties share the same rank.",
    "input_format": "First line N, second line N scores, third line target score X",
    "output_format": "Minimum rank of person with score X",
    "constraints": "N<=20",
    "sample_input": "5\n85 90 85 70 90\n85",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 989,
    "title": "All A are B",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Premises: All cats are animals. All animals are living. Conclusion: All cats are living?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Valid syllogism",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 990,
    "title": "Some A are B",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Premises: Some dogs are pets. All pets are friendly. Conclusion: Some dogs are friendly?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Valid syllogism",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 991,
    "title": "No A are B",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Premises: No cat is a dog. All dogs bark. Conclusion: No cat barks?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Invalid conclusion",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 992,
    "title": "Some not",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Premises: Some students are smart. Some smart people are rich. Conclusion: Some students are rich?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Not necessarily true",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 993,
    "title": "Universal affirmative",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "All roses are flowers. Some flowers fade. Some roses fade?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Not necessarily true",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 994,
    "title": "Seating arrangement circle",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "5 people A B C D E sit in circle. A is between B and C. D is to immediate right of C. Who is to immediate right of A?",
    "input_format": "Index 1",
    "output_format": "B",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "B",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 995,
    "title": "Who is tallest",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "A>B, C>A, D<B, E>C. Who is tallest?",
    "input_format": "Index 1",
    "output_format": "E",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "E",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 996,
    "title": "Who is shortest",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "A>B, C>A, D<B, E>C. Who is shortest?",
    "input_format": "Index 1",
    "output_format": "D",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "D",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 997,
    "title": "Box stacking",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Box A on top of B. B on top of C. D is below C. Which box is at bottom?",
    "input_format": "Index 1",
    "output_format": "D",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "D",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 998,
    "title": "Floor puzzle",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "6-floor building. A lives above B. B lives above C. C is on floor 2. A is on floor?",
    "input_format": "Index 1",
    "output_format": "4",
    "constraints": "Variable — use 4",
    "sample_input": "1",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 999,
    "title": "Age ordering",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Ram is older than Shyam. Shyam is older than Mohan. Who is youngest?",
    "input_format": "Index 1",
    "output_format": "MOHAN",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "MOHAN",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1000,
    "title": "Weight ordering",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "P > Q > R. Q > S. Who is heaviest?",
    "input_format": "Index 1",
    "output_format": "P",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "P",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1001,
    "title": "Between in order",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "A B C D E stand in line. C is between A and E. B is between A and C. Who is second from left?",
    "input_format": "Index 1",
    "output_format": "B",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "B",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1002,
    "title": "Odd number out",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Find the odd one out: 2 3 5 7 9 11",
    "input_format": "Space-separated numbers",
    "output_format": "The odd one out",
    "constraints": "One not prime",
    "sample_input": "2 3 5 7 9 11",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1003,
    "title": "Odd shape out",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Odd one out: CIRCLE SQUARE TRIANGLE CUBE RECTANGLE",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "3D vs 2D",
    "sample_input": "CIRCLE SQUARE TRIANGLE CUBE RECTANGLE",
    "sample_output": "CUBE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1004,
    "title": "Odd fruit out",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Odd one out: APPLE MANGO CARROT BANANA GRAPE",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Vegetable among fruits",
    "sample_input": "APPLE MANGO CARROT BANANA GRAPE",
    "sample_output": "CARROT",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1005,
    "title": "Odd mammal out",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Odd one out: DOG CAT SNAKE LION TIGER",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Reptile among mammals",
    "sample_input": "DOG CAT SNAKE LION TIGER",
    "sample_output": "SNAKE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1006,
    "title": "Odd number pattern",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Odd one out: 6 10 15 21 28",
    "input_format": "Space-separated numbers",
    "output_format": "The odd one out",
    "constraints": "One not triangular",
    "sample_input": "6 10 15 21 28",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1007,
    "title": "Odd instrument out",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Odd one out: GUITAR VIOLIN FLUTE DRUMS SITAR",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Wind instrument",
    "sample_input": "GUITAR VIOLIN FLUTE DRUMS SITAR",
    "sample_output": "FLUTE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1008,
    "title": "Odd planet out",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Odd one out: MARS VENUS MOON EARTH SATURN",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Not a planet",
    "sample_input": "MARS VENUS MOON EARTH SATURN",
    "sample_output": "MOON",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1009,
    "title": "Word analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Doctor : Hospital :: Teacher : ?",
    "input_format": "Index 1",
    "output_format": "SCHOOL",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "SCHOOL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1010,
    "title": "Tool analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Pen : Write :: Knife : ?",
    "input_format": "Index 1",
    "output_format": "CUT",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "CUT",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1011,
    "title": "Animal sound analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Dog : Bark :: Cat : ?",
    "input_format": "Index 1",
    "output_format": "MEOW",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "MEOW",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1012,
    "title": "Young one analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Cow : Calf :: Horse : ?",
    "input_format": "Index 1",
    "output_format": "FOAL",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "FOAL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1013,
    "title": "Capital analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "India : Delhi :: Japan : ?",
    "input_format": "Index 1",
    "output_format": "TOKYO",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "TOKYO",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1014,
    "title": "Number analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "4 : 16 :: 5 : ?",
    "input_format": "Index 1",
    "output_format": "25",
    "constraints": "Squares",
    "sample_input": "1",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1015,
    "title": "Cube analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "2 : 8 :: 3 : ?",
    "input_format": "Index 1",
    "output_format": "27",
    "constraints": "Cubes",
    "sample_input": "1",
    "sample_output": "27",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1016,
    "title": "Opposite analogy",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Hot : Cold :: Day : ?",
    "input_format": "Index 1",
    "output_format": "NIGHT",
    "constraints": "Opposites",
    "sample_input": "1",
    "sample_output": "NIGHT",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1017,
    "title": "Part to whole",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Page : Book :: Brick : ?",
    "input_format": "Index 1",
    "output_format": "WALL",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "WALL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1018,
    "title": "Worker place",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Amazon"],
    "description": "Farmer : Field :: Soldier : ?",
    "input_format": "Index 1",
    "output_format": "BATTLEFIELD",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "BATTLEFIELD",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1019,
    "title": "2x2 matrix pattern",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Matrix: 1 2 / 3 ? Pattern: each row sum equals 5. Find ?.",
    "input_format": "Index 1",
    "output_format": "2",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1020,
    "title": "3x3 magic square check",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Given a 3x3 matrix, check if it is a magic square (all rows, cols, diagonals equal sum).",
    "input_format": "9 integers (row by row)",
    "output_format": "YES or NO",
    "constraints": "Valid 3x3 matrix",
    "sample_input": "2 7 6 9 5 1 4 3 8",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1021,
    "title": "Row sum pattern",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Each row of matrix sums to same value. Row1: 3 5 7, Row2: 4 ? 8. Find ?.",
    "input_format": "Index 1",
    "output_format": "3",
    "constraints": "Sum pattern",
    "sample_input": "1",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1022,
    "title": "Diagonal sum",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Find sum of primary diagonal of NxN matrix.",
    "input_format": "First line N, then N*N integers row by row",
    "output_format": "Sum of primary diagonal",
    "constraints": "1<=N<=10",
    "sample_input": "3\n1 2 3 4 5 6 7 8 9",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1023,
    "title": "Rotate matrix 90",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Rotate a 2x2 matrix 90 degrees clockwise. Print result row by row.",
    "input_format": "4 integers (2x2 row by row)",
    "output_format": "4 integers (rotated, row by row)",
    "constraints": "2x2 only",
    "sample_input": "1 2 3 4",
    "sample_output": "3 1 4 2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1024,
    "title": "Time forward",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Current time is H:M. What time is it after X minutes?",
    "input_format": "Three integers H M X",
    "output_format": "Time as HH:MM",
    "constraints": "0<=H<=23, 0<=M<=59, X>=0",
    "sample_input": "10 45 30",
    "sample_output": "11:15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1025,
    "title": "Time backward",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Current time is H:M. What was the time X minutes ago?",
    "input_format": "Three integers H M X",
    "output_format": "Time as HH:MM",
    "constraints": "0<=H<=23, 0<=M<=59",
    "sample_input": "10 15 30",
    "sample_output": "9:45",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1026,
    "title": "Hours between times",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "From H1:M1 to H2:M2, how many minutes?",
    "input_format": "Four integers H1 M1 H2 M2",
    "output_format": "Minutes difference",
    "constraints": "H2>H1 or same hour M2>M1",
    "sample_input": "9 30 11 00",
    "sample_output": "90",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1027,
    "title": "Fast clock",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Clock shows 10:00 but is 15 minutes fast. Actual time?",
    "input_format": "Index 1",
    "output_format": "9:45",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "9:45",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1028,
    "title": "Slow clock",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Clock shows 3:00 but is 20 minutes slow. Actual time?",
    "input_format": "Index 1",
    "output_format": "3:20",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "3:20",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1029,
    "title": "Day after N days",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "If today is MONDAY and N=10, what day is it after N days?",
    "input_format": "Two inputs: day name and N",
    "output_format": "Day name",
    "constraints": "Valid day and N>=0",
    "sample_input": "MONDAY 10",
    "sample_output": "THURSDAY",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1030,
    "title": "Day before N days",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "If today is FRIDAY and N=3, what day was it N days ago?",
    "input_format": "Two inputs: day name and N",
    "output_format": "Day name",
    "constraints": "Valid",
    "sample_input": "FRIDAY 3",
    "sample_output": "TUESDAY",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1031,
    "title": "Day of week for date",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "Given 1 Jan 2024 is Monday, what day is 1 Feb 2024? (2024 is leap year)",
    "input_format": "Index 1",
    "output_format": "THURSDAY",
    "constraints": "Jan has 31 days, 31 mod 7 = 3",
    "sample_input": "1",
    "sample_output": "THURSDAY",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1032,
    "title": "Week number",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Day D of a month falls on Wednesday. What day is D+7?",
    "input_format": "Index 1",
    "output_format": "WEDNESDAY",
    "constraints": "Same day +7",
    "sample_input": "1",
    "sample_output": "WEDNESDAY",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1033,
    "title": "Months with 31 days",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "How many months in a year have exactly 31 days?",
    "input_format": "Index 1",
    "output_format": "7",
    "constraints": "Fixed fact",
    "sample_input": "1",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1034,
    "title": "Leap year days",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "How many days are in a leap year?",
    "input_format": "Index 1",
    "output_format": "366",
    "constraints": "Fixed fact",
    "sample_input": "1",
    "sample_output": "366",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1035,
    "title": "Century leap year",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Is the year 1900 a leap year?",
    "input_format": "Index 1",
    "output_format": "NO",
    "constraints": "Divisible by 100 but not 400",
    "sample_input": "1",
    "sample_output": "NO",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1036,
    "title": "If-then logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "If all cats are black and Tom is a cat, is Tom black?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Modus ponens",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1037,
    "title": "Negation logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "If it rains, the ground is wet. The ground is not wet. Did it rain?",
    "input_format": "Index 1",
    "output_format": "NO",
    "constraints": "Modus tollens",
    "sample_input": "1",
    "sample_output": "NO",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1038,
    "title": "Contrapositive",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "If P then Q is true. Q is false. What about P?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Contrapositive",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1039,
    "title": "And logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "A=TRUE, B=FALSE. A AND B?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Boolean AND",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1040,
    "title": "Or logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "A=TRUE, B=FALSE. A OR B?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Boolean OR",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1041,
    "title": "XOR logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "A=TRUE, B=TRUE. A XOR B?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Boolean XOR",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1042,
    "title": "NOT logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "A=FALSE. NOT A?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Boolean NOT",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1043,
    "title": "NAND logic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "A=TRUE, B=TRUE. A NAND B?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "NAND gate",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1044,
    "title": "Odd or even",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given N, output ODD or EVEN.",
    "input_format": "One integer N",
    "output_format": "ODD or EVEN",
    "constraints": "Any integer",
    "sample_input": "7",
    "sample_output": "ODD",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1045,
    "title": "Positive negative zero",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Given N, output POSITIVE, NEGATIVE, or ZERO.",
    "input_format": "One integer N",
    "output_format": "Result",
    "constraints": "Any integer",
    "sample_input": "-5",
    "sample_output": "NEGATIVE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1046,
    "title": "Divisible by 3",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Is N divisible by 3?",
    "input_format": "One integer N",
    "output_format": "YES or NO",
    "constraints": "1<=N<=10^9",
    "sample_input": "123",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1047,
    "title": "Divisible by both 3 and 5",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Is N divisible by both 3 and 5?",
    "input_format": "One integer N",
    "output_format": "YES or NO",
    "constraints": "1<=N<=10^9",
    "sample_input": "15",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1048,
    "title": "Multiple of 7",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Is N a multiple of 7?",
    "input_format": "One integer N",
    "output_format": "YES or NO",
    "constraints": "1<=N<=10^6",
    "sample_input": "49",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1049,
    "title": "Sum odd or even",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Sum of first N natural numbers — is it odd or even?",
    "input_format": "One integer N",
    "output_format": "ODD or EVEN",
    "constraints": "1<=N<=10^6",
    "sample_input": "3",
    "sample_output": "ODD",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1050,
    "title": "Product sign",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Given N integers, is their product positive, negative, or zero?",
    "input_format": "First line N, second line N integers",
    "output_format": "POSITIVE, NEGATIVE, or ZERO",
    "constraints": "N<=20",
    "sample_input": "4\n2 -3 4 -1",
    "sample_output": "POSITIVE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1051,
    "title": "Largest of three",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Find the largest of three given integers.",
    "input_format": "Three integers",
    "output_format": "Largest integer",
    "constraints": "Any integers",
    "sample_input": "5 3 8",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1052,
    "title": "Middle of three",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Find the middle value of three distinct integers.",
    "input_format": "Three integers",
    "output_format": "Middle value",
    "constraints": "Distinct integers",
    "sample_input": "5 3 8",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1053,
    "title": "Count positives",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Amazon"],
    "description": "Count positive numbers in an array.",
    "input_format": "First line N, second line N integers",
    "output_format": "Count of positives",
    "constraints": "N<=100",
    "sample_input": "5\n-1 2 -3 4 5",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1054,
    "title": "Synonym",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Synonym of HAPPY?",
    "input_format": "Index 1",
    "output_format": "JOYFUL",
    "constraints": "Vocabulary",
    "sample_input": "1",
    "sample_output": "JOYFUL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1055,
    "title": "Antonym",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Antonym of BRAVE?",
    "input_format": "Index 1",
    "output_format": "COWARDLY",
    "constraints": "Vocabulary",
    "sample_input": "1",
    "sample_output": "COWARDLY",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1056,
    "title": "Odd word out meaning",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Odd one out by meaning: JOY HAPPINESS SORROW DELIGHT",
    "input_format": "Space-separated words",
    "output_format": "The odd word",
    "constraints": "Negative emotion",
    "sample_input": "JOY HAPPINESS SORROW DELIGHT",
    "sample_output": "SORROW",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1057,
    "title": "Complete the proverb",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Complete: All that glitters is not _",
    "input_format": "Index 1",
    "output_format": "GOLD",
    "constraints": "Famous proverb",
    "sample_input": "1",
    "sample_output": "GOLD",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1058,
    "title": "Fill in blank",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "A __ of lions is called a pride.",
    "input_format": "Index 1",
    "output_format": "GROUP",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "GROUP",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1059,
    "title": "Collective noun",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Collective noun for fish?",
    "input_format": "Index 1",
    "output_format": "SCHOOL",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "SCHOOL",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1060,
    "title": "Plural of mouse",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Plural of MOUSE?",
    "input_format": "Index 1",
    "output_format": "MICE",
    "constraints": "Irregular plural",
    "sample_input": "1",
    "sample_output": "MICE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1061,
    "title": "Feminine of actor",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Feminine of ACTOR?",
    "input_format": "Index 1",
    "output_format": "ACTRESS",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "ACTRESS",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1062,
    "title": "Implicit assumption",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Statement: Please do not use lift in case of fire. Assumption: Lift is available in building. Valid?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Implicit",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1063,
    "title": "Cause and effect",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "CTS"],
    "description": "There was heavy rain. Streets were flooded. Which is cause?",
    "input_format": "Index 1",
    "output_format": "HEAVY RAIN",
    "constraints": "Cause-effect",
    "sample_input": "1",
    "sample_output": "HEAVY RAIN",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1064,
    "title": "Conclusion valid",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "HCL"],
    "description": "Statement: Most students passed. Conclusion: Some students failed. Valid?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Most implies some failed",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1065,
    "title": "Strong argument",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Should voting age be 18? Argument: Young people are responsible citizens. Strong?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Reasonable argument",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1066,
    "title": "Course of action",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Problem: Roads are damaged. Action: Repair roads immediately. Appropriate?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Direct solution",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1067,
    "title": "Handshake formula",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "N people meet and each shakes hands with all others once. Total handshakes?",
    "input_format": "One integer N",
    "output_format": "N*(N-1)/2",
    "constraints": "N>=2",
    "sample_input": "6",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1068,
    "title": "Matches in knockout",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "In a knockout tournament with N teams, how many matches?",
    "input_format": "One integer N",
    "output_format": "N-1",
    "constraints": "N>=2",
    "sample_input": "16",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1069,
    "title": "Diagonals of polygon",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Number of diagonals of an N-sided polygon = N*(N-3)/2.",
    "input_format": "One integer N",
    "output_format": "Number of diagonals",
    "constraints": "N>=4",
    "sample_input": "6",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1070,
    "title": "Regions in circle",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Accenture"],
    "description": "N chords divide circle into max how many regions? Formula: (N^2+N+2)/2",
    "input_format": "One integer N",
    "output_format": "Max regions",
    "constraints": "N>=0",
    "sample_input": "4",
    "sample_output": "11",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1071,
    "title": "Handshake in circle",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "N people sit in circle, each shakes with immediate neighbours only. Total handshakes?",
    "input_format": "One integer N",
    "output_format": "N handshakes",
    "constraints": "N>=3",
    "sample_input": "5",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1072,
    "title": "Squares on chessboard",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["CTS", "HCL"],
    "description": "How many squares of all sizes on 8x8 chessboard?",
    "input_format": "Index 1",
    "output_format": "204",
    "constraints": "Sum 1^2+2^2+...+8^2",
    "sample_input": "1",
    "sample_output": "204",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1073,
    "title": "Rectangles on chessboard",
    "category": "Logical Reasoning",
    "difficulty": "Hard",
    "company_tags": ["TCS", "Amazon"],
    "description": "How many rectangles of all sizes on 8x8 chessboard?",
    "input_format": "Index 1",
    "output_format": "1296",
    "constraints": "C(9,2)*C(9,2)",
    "sample_input": "1",
    "sample_output": "1296",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1074,
    "title": "Triangles in figure",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "Infosys"],
    "description": "How many triangles in a figure with N=3 triangles pointing up and down in a row?",
    "input_format": "One integer N",
    "output_format": "Count (N=3 gives 13)",
    "constraints": "N=3",
    "sample_input": "3",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1075,
    "title": "Coin puzzle",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "CTS"],
    "description": "Make 5 rows with 4 coins each. Minimum coins needed?",
    "input_format": "Index 1",
    "output_format": "10",
    "constraints": "Star arrangement",
    "sample_input": "1",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1076,
    "title": "Water jug problem",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": ["HCL", "Infosys"],
    "description": "You have 3L and 5L jugs. Measure exactly 4L. How many steps minimum?",
    "input_format": "Index 1",
    "output_format": "6",
    "constraints": "Classic puzzle",
    "sample_input": "1",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1077,
    "title": "Double and add one",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Machine rule: output = 2*input + 1. Input is 7. Output?",
    "input_format": "One integer input",
    "output_format": "Output",
    "constraints": "Any integer",
    "sample_input": "7",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1078,
    "title": "Square and subtract",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Machine rule: output = input^2 - 1. Input is 5. Output?",
    "input_format": "One integer input",
    "output_format": "Output",
    "constraints": "Any integer",
    "sample_input": "5",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1079,
    "title": "Reverse and add",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Machine rule: reverse the number then add original. Input=12. Output?",
    "input_format": "One integer input",
    "output_format": "Output",
    "constraints": "1<=input<=999",
    "sample_input": "12",
    "sample_output": "33",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1080,
    "title": "Sum of squares",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Machine: sum of squares of digits. Input=13. Output?",
    "input_format": "One integer input",
    "output_format": "Sum of squares of digits",
    "constraints": "1<=input<=999",
    "sample_input": "13",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1081,
    "title": "Digit product",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Machine: product of digits. Input=234. Output?",
    "input_format": "One integer input",
    "output_format": "Product of digits",
    "constraints": "1<=input<=9999",
    "sample_input": "234",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1082,
    "title": "True false basic",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "All squares are rectangles. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Geometry fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1083,
    "title": "Triangle angles",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "Sum of angles of a triangle is 180 degrees. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Geometry fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1084,
    "title": "Prime definition",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "1 is a prime number. True or False?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "1 is not prime",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1085,
    "title": "Even prime",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "2 is the only even prime number. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Math fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1086,
    "title": "Zero is even",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Zero is an even number. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Math fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1087,
    "title": "Negative prime",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["CTS", "HCL"],
    "description": "Negative numbers can be prime. True or False?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Primes are positive",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1088,
    "title": "Square root 2",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Square root of 2 is rational. True or False?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Irrational number",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1089,
    "title": "Divisibility rule 9",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "CTS"],
    "description": "A number is divisible by 9 if sum of its digits is divisible by 9. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Divisibility rule",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  // ============================================================
// PASTE THIS BLOCK inside your problems array in problems.ts
// Add a comma after the last existing problem (id: 1089),
// then paste everything below until the closing comment.
// IDs start from 1090.
// ============================================================

  // ─── OOP (20 questions) ────────────────────────────────────
  {
    "id": 1090,
    "title": "Class and Object Basics",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Wipro"],
    "description": "Create a class 'Rectangle' with private fields 'length' and 'breadth'. Add a constructor to initialise them, and a method 'area()' that returns the area. In main(), create an object with length=5, breadth=3 and print the area.",
    "input_format": "No input required. Values are hardcoded.",
    "output_format": "A single integer: the area of the rectangle.",
    "constraints": "length, breadth > 0",
    "sample_input": "",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main {
    // Define Rectangle class here

    public static void main(String[] args) {
        // Create object and print area
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1091,
    "title": "Inheritance – Animal & Dog",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["Accenture", "CTS", "HCL"],
    "description": "Create a base class 'Animal' with a method sound() that prints 'Some sound'. Create a derived class 'Dog' that overrides sound() to print 'Woof'. In main(), create a Dog object and call sound().",
    "input_format": "No input required.",
    "output_format": "Woof",
    "constraints": "Use single inheritance.",
    "sample_input": "",
    "sample_output": "Woof",
    "starter_code": {
      "java": `public class Main {
    // Define Animal and Dog classes here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1092,
    "title": "Polymorphism – Method Overloading",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Create a class 'Calculator' with three overloaded methods named 'add': one that adds two ints, one that adds three ints, and one that adds two doubles. In main(), call all three and print the results on separate lines.",
    "input_format": "No input required. Use: add(2,3), add(1,2,3), add(1.5,2.5).",
    "output_format": "5\n6\n4.0",
    "constraints": "Use method overloading, not conditionals.",
    "sample_input": "",
    "sample_output": "5\n6\n4.0",
    "starter_code": {
      "java": `public class Main {
    // Define Calculator class with overloaded add() here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1093,
    "title": "Encapsulation – Bank Account",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["Goldman Sachs", "Morgan Stanley", "Infosys"],
    "description": "Create a class 'BankAccount' with a private field 'balance'. Provide a constructor to set the initial balance, a deposit(amount) method, a withdraw(amount) method (reject if insufficient funds), and a getBalance() method. Simulate: start with 1000, deposit 500, withdraw 300, print balance.",
    "input_format": "No input required.",
    "output_format": "1200",
    "constraints": "Balance must never go negative.",
    "sample_input": "",
    "sample_output": "1200",
    "starter_code": {
      "java": `public class Main {
    // Define BankAccount class here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1094,
    "title": "Abstract Class – Shape Area",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Adobe"],
    "description": "Define an abstract class 'Shape' with an abstract method area(). Create two concrete subclasses: 'Circle' (radius=7) and 'Triangle' (base=6, height=4). In main(), create one object of each and print their areas. Use Math.PI for circle, round to 2 decimal places.",
    "input_format": "No input required.",
    "output_format": "153.94\n12.0",
    "constraints": "Use abstract class, not interface.",
    "sample_input": "",
    "sample_output": "153.94\n12.0",
    "starter_code": {
      "java": `public class Main {
    // Define abstract Shape, Circle, Triangle here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1095,
    "title": "Interface – Flyable and Swimmable",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Accenture", "CTS"],
    "description": "Create two interfaces: 'Flyable' with method fly() and 'Swimmable' with method swim(). Create a class 'Duck' that implements both. fly() should print 'Duck is flying' and swim() should print 'Duck is swimming'. In main(), create a Duck and call both methods.",
    "input_format": "No input required.",
    "output_format": "Duck is flying\nDuck is swimming",
    "constraints": "A class can implement multiple interfaces in Java.",
    "sample_input": "",
    "sample_output": "Duck is flying\nDuck is swimming",
    "starter_code": {
      "java": `public class Main {
    // Define interfaces and Duck class here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1096,
    "title": "Constructor Chaining",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Wipro", "HCL", "Infosys"],
    "description": "Create a class 'Employee' with fields name, age, and salary. Use constructor chaining: a 1-arg constructor (name only, age defaults to 25, salary defaults to 30000), a 2-arg constructor (name, age, salary defaults to 30000), and a 3-arg constructor. In main(), create one object using each constructor and print all fields.",
    "input_format": "No input required.",
    "output_format": "Alice 25 30000\nBob 30 30000\nCharlie 28 50000",
    "constraints": "Use this() for chaining.",
    "sample_input": "",
    "sample_output": "Alice 25 30000\nBob 30 30000\nCharlie 28 50000",
    "starter_code": {
      "java": `public class Main {
    // Define Employee class with chained constructors here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1097,
    "title": "Static Members – Counter",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Cognizant"],
    "description": "Create a class 'Student' with a static field 'count' that tracks how many Student objects have been created. Increment count in the constructor. Create 4 Student objects in main() and print the count.",
    "input_format": "No input required.",
    "output_format": "4",
    "constraints": "count must be static, not an instance variable.",
    "sample_input": "",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main {
    // Define Student class with static count here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1098,
    "title": "Runtime Polymorphism – Upcasting",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft"],
    "description": "Create a base class 'Vehicle' with method move() printing 'Vehicle moves'. Subclasses 'Car' and 'Bike' override move() to print 'Car drives' and 'Bike rides' respectively. In main(), create an array of Vehicle references holding a Car and Bike object. Call move() on each using the loop.",
    "input_format": "No input required.",
    "output_format": "Car drives\nBike rides",
    "constraints": "Use runtime polymorphism (upcasting), not instanceof checks.",
    "sample_input": "",
    "sample_output": "Car drives\nBike rides",
    "starter_code": {
      "java": `public class Main {
    // Define Vehicle, Car, Bike here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1099,
    "title": "Exception Handling in OOP",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Infosys", "Wipro", "Accenture"],
    "description": "Create a class 'Divider' with a method divide(int a, int b) that throws an ArithmeticException with message 'Cannot divide by zero' if b is 0, otherwise returns a/b. In main(), call divide(10, 0) inside a try-catch and print the exception message.",
    "input_format": "No input required.",
    "output_format": "Cannot divide by zero",
    "constraints": "Use try-catch, not if-else to suppress the exception.",
    "sample_input": "",
    "sample_output": "Cannot divide by zero",
    "starter_code": {
      "java": `public class Main {
    // Define Divider class here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1100,
    "title": "Final Keyword – Immutable Class",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["TCS", "HCL"],
    "description": "Create a final class 'Circle' with a final field 'PI = 3.14159' and a field 'radius'. Provide a constructor and a method circumference() returning 2 * PI * radius. In main(), create a Circle with radius 5 and print circumference rounded to 2 decimal places.",
    "input_format": "No input required.",
    "output_format": "31.42",
    "constraints": "Class and PI must be final.",
    "sample_input": "",
    "sample_output": "31.42",
    "starter_code": {
      "java": `public class Main {
    // Define final Circle class here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1101,
    "title": "toString() Override",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["Cognizant", "Wipro"],
    "description": "Create a class 'Book' with fields title, author, and price. Override the toString() method to return the format: 'Title: <title>, Author: <author>, Price: <price>'. In main(), create a Book and print the object directly.",
    "input_format": "No input required. Use: title='Clean Code', author='Robert Martin', price=499.",
    "output_format": "Title: Clean Code, Author: Robert Martin, Price: 499",
    "constraints": "Must use toString() override, not a custom print method.",
    "sample_input": "",
    "sample_output": "Title: Clean Code, Author: Robert Martin, Price: 499",
    "starter_code": {
      "java": `public class Main {
    // Define Book class with toString() here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1102,
    "title": "equals() and hashCode()",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Google"],
    "description": "Create a class 'Point' with fields x and y. Override equals() to return true if both x and y are equal, and hashCode() accordingly. In main(), create two Point objects with the same x,y and print whether they are equal using .equals().",
    "input_format": "No input required. Use Point(3,4) and Point(3,4).",
    "output_format": "true",
    "constraints": "Must override both equals() and hashCode().",
    "sample_input": "",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main {
    // Define Point class here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1103,
    "title": "Composition vs Inheritance",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Microsoft", "Adobe", "SAP"],
    "description": "Create a class 'Engine' with a method start() that prints 'Engine started'. Create a class 'Car' that uses composition (has-a Engine) not inheritance. Car's startCar() method calls engine.start() then prints 'Car is running'. In main(), start the car.",
    "input_format": "No input required.",
    "output_format": "Engine started\nCar is running",
    "constraints": "Use composition (field of type Engine), not extends.",
    "sample_input": "",
    "sample_output": "Engine started\nCar is running",
    "starter_code": {
      "java": `public class Main {
    // Define Engine and Car (composition) here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1104,
    "title": "Singleton Design Pattern",
    "category": "OOP",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Implement the Singleton design pattern for a class 'Config'. It should have a private static instance, a private constructor, and a public static getInstance() method. Add a field appName='MyApp'. In main(), get two instances and verify they are the same object (use == check) and print the appName.",
    "input_format": "No input required.",
    "output_format": "true\nMyApp",
    "constraints": "Constructor must be private. Only one instance must ever exist.",
    "sample_input": "",
    "sample_output": "true\nMyApp",
    "starter_code": {
      "java": `public class Main {
    // Define Config singleton here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1105,
    "title": "Inner Class – Iterator Pattern",
    "category": "OOP",
    "difficulty": "Hard",
    "company_tags": ["Google", "Amazon"],
    "description": "Create a class 'NumberBox' that stores an array of 5 integers {1,2,3,4,5}. Inside it, create a non-static inner class 'BoxIterator' with a method next() that returns the next element and hasNext() that returns true if elements remain. In main(), iterate and print all elements.",
    "input_format": "No input required.",
    "output_format": "1\n2\n3\n4\n5",
    "constraints": "Must use a non-static inner class.",
    "sample_input": "",
    "sample_output": "1\n2\n3\n4\n5",
    "starter_code": {
      "java": `public class Main {
    // Define NumberBox with inner BoxIterator here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1106,
    "title": "Generics – Typed Box",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro", "Infosys"],
    "description": "Create a generic class 'Box<T>' with a private field value of type T. Provide getValue() and setValue() methods. In main(), create a Box<Integer> storing 42 and a Box<String> storing 'Hello'. Print both values.",
    "input_format": "No input required.",
    "output_format": "42\nHello",
    "constraints": "Must use Java generics (<T>).",
    "sample_input": "",
    "sample_output": "42\nHello",
    "starter_code": {
      "java": `public class Main {
    // Define generic Box<T> here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1107,
    "title": "Comparable Interface – Sort Students",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Flipkart"],
    "description": "Create a class 'Student' implementing Comparable<Student> with fields name and marks. compareTo() should sort by marks in ascending order. In main(), create a list of 3 students, sort with Collections.sort(), and print their names in sorted order.",
    "input_format": "No input required. Use: Alice-85, Bob-72, Charlie-90.",
    "output_format": "Bob\nAlice\nCharlie",
    "constraints": "Must implement Comparable<Student>, not use a custom Comparator.",
    "sample_input": "",
    "sample_output": "Bob\nAlice\nCharlie",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    // Define Student implementing Comparable here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1108,
    "title": "Anonymous Class – Runnable",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Cognizant", "HCL"],
    "description": "Create a Runnable using an anonymous class that prints 'Task running'. Pass it to a Thread and start it. Print 'Main thread done' after joining the thread.",
    "input_format": "No input required.",
    "output_format": "Task running\nMain thread done",
    "constraints": "Use an anonymous class (not lambda) to implement Runnable.",
    "sample_input": "",
    "sample_output": "Task running\nMain thread done",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Create anonymous Runnable and Thread here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1109,
    "title": "Multi-level Inheritance",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": ["Accenture", "Wipro", "CTS"],
    "description": "Create class 'A' with method hello() printing 'Hello from A'. Class 'B' extends A and overrides hello() printing 'Hello from B'. Class 'C' extends B. In main(), create object of C, call hello(), then use super chain to call A's hello() from B.",
    "input_format": "No input required.",
    "output_format": "Hello from B",
    "constraints": "Three levels: A -> B -> C. C does not override hello().",
    "sample_input": "",
    "sample_output": "Hello from B",
    "starter_code": {
      "java": `public class Main {
    // Define A, B, C classes here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },

  // ─── DBMS (20 questions) ───────────────────────────────────
  {
    "id": 1110,
    "title": "Write a SELECT with WHERE clause",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Wipro"],
    "description": "Given a table 'Employees(EmpID, Name, Salary, Department)', write a Java program that prints the SQL query to fetch all employees from the 'HR' department with salary greater than 50000. Then simulate the result by printing two hardcoded matching rows.",
    "input_format": "No input required.",
    "output_format": "SELECT * FROM Employees WHERE Department='HR' AND Salary>50000;\n101 Alice 60000 HR\n103 Carol 75000 HR",
    "constraints": "Print the SQL query first, then the simulated result.",
    "sample_input": "",
    "sample_output": "SELECT * FROM Employees WHERE Department='HR' AND Salary>50000;\n101 Alice 60000 HR\n103 Carol 75000 HR",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        // Print SQL query and simulated result
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1111,
    "title": "INNER JOIN Query",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "Accenture", "CTS"],
    "description": "You have tables 'Orders(OrderID, CustomerID, Amount)' and 'Customers(CustomerID, Name)'. Write a Java program that prints the SQL query to get each customer's name along with their order amount using INNER JOIN. Then simulate 3 result rows.",
    "input_format": "No input required.",
    "output_format": "SELECT Customers.Name, Orders.Amount FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;\nAlice 2500\nBob 1800\nCarol 3200",
    "constraints": "Use INNER JOIN syntax.",
    "sample_input": "",
    "sample_output": "SELECT Customers.Name, Orders.Amount FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;\nAlice 2500\nBob 1800\nCarol 3200",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1112,
    "title": "GROUP BY and HAVING",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["Goldman Sachs", "Morgan Stanley", "Oracle"],
    "description": "Given table 'Sales(SalesID, Region, Amount)', write a Java program that prints the SQL to find all regions where total sales exceed 100000, grouped by region. Then simulate 2 result rows.",
    "input_format": "No input required.",
    "output_format": "SELECT Region, SUM(Amount) FROM Sales GROUP BY Region HAVING SUM(Amount)>100000;\nNorth 150000\nSouth 120000",
    "constraints": "Must use GROUP BY and HAVING, not WHERE.",
    "sample_input": "",
    "sample_output": "SELECT Region, SUM(Amount) FROM Sales GROUP BY Region HAVING SUM(Amount)>100000;\nNorth 150000\nSouth 120000",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1113,
    "title": "Find Second Highest Salary",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "TCS", "Infosys"],
    "description": "Given table 'Employees(EmpID, Name, Salary)', print the SQL query to find the second highest salary without using LIMIT/TOP, then print the simulated answer.",
    "input_format": "No input required.",
    "output_format": "SELECT MAX(Salary) FROM Employees WHERE Salary < (SELECT MAX(Salary) FROM Employees);\n85000",
    "constraints": "Use a correlated subquery. No LIMIT or OFFSET.",
    "sample_input": "",
    "sample_output": "SELECT MAX(Salary) FROM Employees WHERE Salary < (SELECT MAX(Salary) FROM Employees);\n85000",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1114,
    "title": "Normalization – 1NF Check",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "HCL"],
    "description": "A table 'Student(RollNo, Name, Subjects)' stores subjects as a comma-separated string (e.g., 'Math,Science'). This violates 1NF. Write a Java program that prints the violation reason and then prints the corrected 1NF table design.",
    "input_format": "No input required.",
    "output_format": "Violation: Multi-valued attribute in Subjects column.\n1NF Table: Student(RollNo, Name, Subject) - one row per subject.",
    "constraints": "Explain the violation and the fix.",
    "sample_input": "",
    "sample_output": "Violation: Multi-valued attribute in Subjects column.\n1NF Table: Student(RollNo, Name, Subject) - one row per subject.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1115,
    "title": "Primary Key vs Foreign Key",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture", "Cognizant"],
    "description": "Print the SQL CREATE TABLE statements for 'Department(DeptID PRIMARY KEY, DeptName)' and 'Employee(EmpID PRIMARY KEY, Name, DeptID FOREIGN KEY referencing Department)'. Then print one INSERT for each table.",
    "input_format": "No input required.",
    "output_format": "CREATE TABLE Department(DeptID INT PRIMARY KEY, DeptName VARCHAR(50));\nCREATE TABLE Employee(EmpID INT PRIMARY KEY, Name VARCHAR(50), DeptID INT, FOREIGN KEY(DeptID) REFERENCES Department(DeptID));\nINSERT INTO Department VALUES(1,'Engineering');\nINSERT INTO Employee VALUES(101,'Alice',1);",
    "constraints": "Must define both PRIMARY KEY and FOREIGN KEY.",
    "sample_input": "",
    "sample_output": "CREATE TABLE Department(DeptID INT PRIMARY KEY, DeptName VARCHAR(50));\nCREATE TABLE Employee(EmpID INT PRIMARY KEY, Name VARCHAR(50), DeptID INT, FOREIGN KEY(DeptID) REFERENCES Department(DeptID));\nINSERT INTO Department VALUES(1,'Engineering');\nINSERT INTO Employee VALUES(101,'Alice',1);",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1116,
    "title": "ACID Properties Explanation",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Goldman Sachs", "Oracle"],
    "description": "Write a Java program that prints the full form and one-line meaning of each ACID property (Atomicity, Consistency, Isolation, Durability).",
    "input_format": "No input required.",
    "output_format": "Atomicity: All operations in a transaction succeed or all are rolled back.\nConsistency: Database remains in a valid state before and after transaction.\nIsolation: Concurrent transactions do not interfere with each other.\nDurability: Committed transactions are permanently saved even after failure.",
    "constraints": "Print exactly 4 lines, one per property.",
    "sample_input": "",
    "sample_output": "Atomicity: All operations in a transaction succeed or all are rolled back.\nConsistency: Database remains in a valid state before and after transaction.\nIsolation: Concurrent transactions do not interfere with each other.\nDurability: Committed transactions are permanently saved even after failure.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1117,
    "title": "DELETE vs TRUNCATE vs DROP",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "HCL", "Infosys"],
    "description": "Write a Java program that prints the key difference between DELETE, TRUNCATE, and DROP commands in a table format: Command | Rollback Possible | Removes Structure | Speed.",
    "input_format": "No input required.",
    "output_format": "DELETE | Yes | No | Slow\nTRUNCATE | No | No | Fast\nDROP | No | Yes | Fast",
    "constraints": "Print exactly 3 rows of comparison.",
    "sample_input": "",
    "sample_output": "DELETE | Yes | No | Slow\nTRUNCATE | No | No | Fast\nDROP | No | Yes | Fast",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1118,
    "title": "Index and Query Optimisation",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Oracle", "SAP"],
    "description": "Print the SQL to create an index on the 'Email' column of an 'Users' table. Then print the query that benefits from this index. Then explain in one line why the index speeds up the query.",
    "input_format": "No input required.",
    "output_format": "CREATE INDEX idx_email ON Users(Email);\nSELECT * FROM Users WHERE Email='alice@example.com';\nReason: Index allows B-tree lookup instead of full table scan.",
    "constraints": "Print exactly 3 lines.",
    "sample_input": "",
    "sample_output": "CREATE INDEX idx_email ON Users(Email);\nSELECT * FROM Users WHERE Email='alice@example.com';\nReason: Index allows B-tree lookup instead of full table scan.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1119,
    "title": "LEFT JOIN vs INNER JOIN",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Accenture", "Cognizant"],
    "description": "Tables: 'Students(SID, Name)' and 'Results(SID, Marks)'. Some students have no results. Print both the INNER JOIN and LEFT JOIN queries, then simulate what the LEFT JOIN returns including a student with NULL marks.",
    "input_format": "No input required.",
    "output_format": "INNER JOIN: SELECT S.Name, R.Marks FROM Students S INNER JOIN Results R ON S.SID=R.SID;\nLEFT JOIN: SELECT S.Name, R.Marks FROM Students S LEFT JOIN Results R ON S.SID=R.SID;\nAlice 85\nBob 90\nCarol null",
    "constraints": "Print both queries and 3 simulated rows.",
    "sample_input": "",
    "sample_output": "INNER JOIN: SELECT S.Name, R.Marks FROM Students S INNER JOIN Results R ON S.SID=R.SID;\nLEFT JOIN: SELECT S.Name, R.Marks FROM Students S LEFT JOIN Results R ON S.SID=R.SID;\nAlice 85\nBob 90\nCarol null",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1120,
    "title": "Stored Procedure – Salary Hike",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["Oracle", "SAP", "Goldman Sachs"],
    "description": "Print the SQL to create a stored procedure 'GiveSalaryHike' that accepts EmpID and HikePercent and updates the salary of that employee. Then print the CALL statement with EmpID=101, HikePercent=10.",
    "input_format": "No input required.",
    "output_format": "CREATE PROCEDURE GiveSalaryHike(IN empId INT, IN hikePercent DECIMAL) BEGIN UPDATE Employees SET Salary=Salary+(Salary*hikePercent/100) WHERE EmpID=empId; END;\nCALL GiveSalaryHike(101, 10);",
    "constraints": "Print the full procedure and the call on separate lines.",
    "sample_input": "",
    "sample_output": "CREATE PROCEDURE GiveSalaryHike(IN empId INT, IN hikePercent DECIMAL) BEGIN UPDATE Employees SET Salary=Salary+(Salary*hikePercent/100) WHERE EmpID=empId; END;\nCALL GiveSalaryHike(101, 10);",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1121,
    "title": "ER Diagram – Identify Entities",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Infosys"],
    "description": "Given a Library Management System, print all entities, their key attributes, and one relationship between them.",
    "input_format": "No input required.",
    "output_format": "Entities: Book, Member, Librarian, Loan\nBook: BookID(PK), Title, Author, ISBN\nMember: MemberID(PK), Name, Email\nLoan: LoanID(PK), BookID(FK), MemberID(FK), IssueDate, ReturnDate\nRelationship: Member borrows Book through Loan",
    "constraints": "At least 4 entities. At least one relationship.",
    "sample_input": "",
    "sample_output": "Entities: Book, Member, Librarian, Loan\nBook: BookID(PK), Title, Author, ISBN\nMember: MemberID(PK), Name, Email\nLoan: LoanID(PK), BookID(FK), MemberID(FK), IssueDate, ReturnDate\nRelationship: Member borrows Book through Loan",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1122,
    "title": "View Creation and Usage",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["Oracle", "Amazon", "Microsoft"],
    "description": "Print the SQL to create a view 'HighEarners' showing employees with salary > 80000 from the Employees table. Then print a SELECT query on that view, and one simulated result row.",
    "input_format": "No input required.",
    "output_format": "CREATE VIEW HighEarners AS SELECT * FROM Employees WHERE Salary>80000;\nSELECT * FROM HighEarners;\n102 Bob 95000 Engineering",
    "constraints": "Print CREATE VIEW, SELECT, and one result row.",
    "sample_input": "",
    "sample_output": "CREATE VIEW HighEarners AS SELECT * FROM Employees WHERE Salary>80000;\nSELECT * FROM HighEarners;\n102 Bob 95000 Engineering",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1123,
    "title": "Transaction – COMMIT and ROLLBACK",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": ["Goldman Sachs", "Morgan Stanley", "Oracle"],
    "description": "Print the SQL for a transaction that transfers 5000 from Account A (AccID=1) to Account B (AccID=2). Use BEGIN, UPDATE, COMMIT. Then print the ROLLBACK version in case of failure.",
    "input_format": "No input required.",
    "output_format": "BEGIN;\nUPDATE Accounts SET Balance=Balance-5000 WHERE AccID=1;\nUPDATE Accounts SET Balance=Balance+5000 WHERE AccID=2;\nCOMMIT;\nROLLBACK version: Replace COMMIT with ROLLBACK on error.",
    "constraints": "Must show both COMMIT and ROLLBACK scenarios.",
    "sample_input": "",
    "sample_output": "BEGIN;\nUPDATE Accounts SET Balance=Balance-5000 WHERE AccID=1;\nUPDATE Accounts SET Balance=Balance+5000 WHERE AccID=2;\nCOMMIT;\nROLLBACK version: Replace COMMIT with ROLLBACK on error.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1124,
    "title": "3NF Normalisation",
    "category": "DBMS",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Table: StudentCourse(StudentID, StudentName, CourseID, CourseName, InstructorID, InstructorName). Identify all functional dependencies, explain the 2NF and 3NF violations, and print the decomposed 3NF tables.",
    "input_format": "No input required.",
    "output_format": "2NF violation: StudentName depends only on StudentID (partial dependency).\n3NF violation: InstructorName depends on InstructorID (transitive dependency).\n3NF Tables: Student(StudentID,StudentName), Course(CourseID,CourseName,InstructorID), Instructor(InstructorID,InstructorName), Enrollment(StudentID,CourseID)",
    "constraints": "Must name 2NF and 3NF violations separately before giving solution.",
    "sample_input": "",
    "sample_output": "2NF violation: StudentName depends only on StudentID (partial dependency).\n3NF violation: InstructorName depends on InstructorID (transitive dependency).\n3NF Tables: Student(StudentID,StudentName), Course(CourseID,CourseName,InstructorID), Instructor(InstructorID,InstructorName), Enrollment(StudentID,CourseID)",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1125,
    "title": "Deadlock in DBMS",
    "category": "DBMS",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Oracle", "SAP"],
    "description": "Print a scenario description of a deadlock between two transactions T1 and T2, then list two common deadlock prevention strategies.",
    "input_format": "No input required.",
    "output_format": "T1 holds lock on A, waits for B.\nT2 holds lock on B, waits for A.\nDeadlock: circular wait.\nPrevention 1: Wait-Die scheme - older transaction waits, younger rolls back.\nPrevention 2: Wound-Wait scheme - older transaction wounds (aborts) younger.",
    "constraints": "Print exactly 5 lines.",
    "sample_input": "",
    "sample_output": "T1 holds lock on A, waits for B.\nT2 holds lock on B, waits for A.\nDeadlock: circular wait.\nPrevention 1: Wait-Die scheme - older transaction waits, younger rolls back.\nPrevention 2: Wound-Wait scheme - older transaction wounds (aborts) younger.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1126,
    "title": "Trigger – Auto Audit Log",
    "category": "DBMS",
    "difficulty": "Hard",
    "company_tags": ["Oracle", "Goldman Sachs", "SAP"],
    "description": "Print the SQL to create an AFTER UPDATE trigger on the 'Employees' table that inserts a row into 'AuditLog(EmpID, OldSalary, NewSalary, ChangedAt)' whenever a salary is updated.",
    "input_format": "No input required.",
    "output_format": "CREATE TRIGGER SalaryAudit AFTER UPDATE ON Employees FOR EACH ROW BEGIN INSERT INTO AuditLog(EmpID,OldSalary,NewSalary,ChangedAt) VALUES(OLD.EmpID,OLD.Salary,NEW.Salary,NOW()); END;",
    "constraints": "Use OLD and NEW keywords. Single-line output.",
    "sample_input": "",
    "sample_output": "CREATE TRIGGER SalaryAudit AFTER UPDATE ON Employees FOR EACH ROW BEGIN INSERT INTO AuditLog(EmpID,OldSalary,NewSalary,ChangedAt) VALUES(OLD.EmpID,OLD.Salary,NEW.Salary,NOW()); END;",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1127,
    "title": "Candidate Key vs Super Key",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Wipro"],
    "description": "Given table 'Employee(EmpID, Email, Phone, Name)', print all super keys, identify candidate keys, and state which one is the primary key and why.",
    "input_format": "No input required.",
    "output_format": "Super keys: {EmpID}, {Email}, {Phone}, {EmpID,Email}, {EmpID,Phone}, {Email,Phone}, etc.\nCandidate keys: {EmpID}, {Email}, {Phone}\nPrimary key: EmpID (chosen because it is numeric, shorter, and auto-incrementable)",
    "constraints": "List at least 5 super keys and all 3 candidate keys.",
    "sample_input": "",
    "sample_output": "Super keys: {EmpID}, {Email}, {Phone}, {EmpID,Email}, {EmpID,Phone}, {Email,Phone}, etc.\nCandidate keys: {EmpID}, {Email}, {Phone}\nPrimary key: EmpID (chosen because it is numeric, shorter, and auto-incrementable)",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1128,
    "title": "NoSQL vs SQL – When to Use",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Print a comparison of SQL and NoSQL across 4 parameters: Schema, Scalability, Transactions, and Best Use Case.",
    "input_format": "No input required.",
    "output_format": "Schema: SQL=Fixed, NoSQL=Dynamic\nScalability: SQL=Vertical, NoSQL=Horizontal\nTransactions: SQL=ACID compliant, NoSQL=Eventual consistency\nBest Use Case: SQL=Banking/ERP, NoSQL=Social media/IoT",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "Schema: SQL=Fixed, NoSQL=Dynamic\nScalability: SQL=Vertical, NoSQL=Horizontal\nTransactions: SQL=ACID compliant, NoSQL=Eventual consistency\nBest Use Case: SQL=Banking/ERP, NoSQL=Social media/IoT",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1129,
    "title": "Aggregate Functions",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Cognizant"],
    "description": "Given table 'Sales(SaleID, Product, Amount)', print SQL queries using COUNT, SUM, AVG, MIN, MAX on the Amount column. Then print one simulated result per query.",
    "input_format": "No input required.",
    "output_format": "SELECT COUNT(Amount) FROM Sales; => 5\nSELECT SUM(Amount) FROM Sales; => 47500\nSELECT AVG(Amount) FROM Sales; => 9500\nSELECT MIN(Amount) FROM Sales; => 3000\nSELECT MAX(Amount) FROM Sales; => 18000",
    "constraints": "Print all 5 queries with simulated results.",
    "sample_input": "",
    "sample_output": "SELECT COUNT(Amount) FROM Sales; => 5\nSELECT SUM(Amount) FROM Sales; => 47500\nSELECT AVG(Amount) FROM Sales; => 9500\nSELECT MIN(Amount) FROM Sales; => 3000\nSELECT MAX(Amount) FROM Sales; => 18000",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },

  // ─── Operating Systems (20 questions) ─────────────────────
  {
    "id": 1130,
    "title": "Process vs Thread",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Amazon"],
    "description": "Print the key differences between a Process and a Thread across 4 parameters: Memory, Creation time, Communication, and Crash impact.",
    "input_format": "No input required.",
    "output_format": "Memory: Process=Separate, Thread=Shared within process\nCreation time: Process=Slower, Thread=Faster\nCommunication: Process=IPC needed, Thread=Direct shared memory\nCrash impact: Process=Isolated, Thread=Can crash whole process",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "Memory: Process=Separate, Thread=Shared within process\nCreation time: Process=Slower, Thread=Faster\nCommunication: Process=IPC needed, Thread=Direct shared memory\nCrash impact: Process=Isolated, Thread=Can crash whole process",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1131,
    "title": "FCFS CPU Scheduling",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "HCL"],
    "description": "Given 3 processes: P1(burst=4), P2(burst=3), P3(burst=5), all arriving at time 0, simulate FCFS scheduling. Print the order, completion time, waiting time, and turnaround time for each process.",
    "input_format": "No input required.",
    "output_format": "Order: P1 P2 P3\nP1: CT=4, WT=0, TAT=4\nP2: CT=7, WT=4, TAT=7\nP3: CT=12, WT=7, TAT=12\nAvg WT: 3.67\nAvg TAT: 7.67",
    "constraints": "All arrive at time 0. Non-preemptive.",
    "sample_input": "",
    "sample_output": "Order: P1 P2 P3\nP1: CT=4, WT=0, TAT=4\nP2: CT=7, WT=4, TAT=7\nP3: CT=12, WT=7, TAT=12\nAvg WT: 3.67\nAvg TAT: 7.67",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1132,
    "title": "SJF Scheduling – Non-Preemptive",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Accenture", "CTS"],
    "description": "Given processes P1(burst=6), P2(burst=2), P3(burst=8), P4(burst=3), all arriving at time 0, simulate non-preemptive SJF. Print the execution order, waiting time, and average waiting time.",
    "input_format": "No input required.",
    "output_format": "Order: P2 P4 P1 P3\nP2: WT=0\nP4: WT=2\nP1: WT=5\nP3: WT=11\nAvg WT: 4.5",
    "constraints": "Shortest job first. No preemption.",
    "sample_input": "",
    "sample_output": "Order: P2 P4 P1 P3\nP2: WT=0\nP4: WT=2\nP1: WT=5\nP3: WT=11\nAvg WT: 4.5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1133,
    "title": "Round Robin Scheduling",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys", "Oracle"],
    "description": "Given P1(burst=5), P2(burst=3), P3(burst=4) with time quantum=2, simulate Round Robin. Print the Gantt chart and average waiting time.",
    "input_format": "No input required.",
    "output_format": "Gantt: P1(0-2) P2(2-4) P3(4-6) P1(6-8) P3(8-9) P1(9-10)\nP1: WT=5\nP2: WT=2\nP3: WT=5\nAvg WT: 4.0",
    "constraints": "Time quantum=2. Preemptive round robin.",
    "sample_input": "",
    "sample_output": "Gantt: P1(0-2) P2(2-4) P3(4-6) P1(6-8) P3(8-9) P1(9-10)\nP1: WT=5\nP2: WT=2\nP3: WT=5\nAvg WT: 4.0",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1134,
    "title": "Deadlock – Banker's Algorithm",
    "category": "Operating Systems",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "3 processes, 1 resource type. Max=[7,5,9], Allocated=[2,3,2], Available=3. Using Banker's Algorithm, find the safe sequence or declare deadlock.",
    "input_format": "No input required.",
    "output_format": "Need=[5,2,7]\nAvailable=3\nP1 needs 2 <= 3: Run P1, Available=5\nP0 needs 5 <= 5: Run P0, Available=7\nP2 needs 7 <= 7: Run P2\nSafe sequence: P1 -> P0 -> P2",
    "constraints": "Show step-by-step execution of the safety algorithm.",
    "sample_input": "",
    "sample_output": "Need=[5,2,7]\nAvailable=3\nP1 needs 2 <= 3: Run P1, Available=5\nP0 needs 5 <= 5: Run P0, Available=7\nP2 needs 7 <= 7: Run P2\nSafe sequence: P1 -> P0 -> P2",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1135,
    "title": "Page Replacement – FIFO",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro", "HCL"],
    "description": "Reference string: 1,3,0,3,5,6,3. Frames=3. Simulate FIFO page replacement. Print frame state after each reference and total page faults.",
    "input_format": "No input required.",
    "output_format": "1: [1] FAULT\n3: [1,3] FAULT\n0: [1,3,0] FAULT\n3: [1,3,0] HIT\n5: [5,3,0] FAULT\n6: [5,6,0] FAULT\n3: [5,6,3] FAULT\nTotal Page Faults: 6",
    "constraints": "3 frames. FIFO eviction.",
    "sample_input": "",
    "sample_output": "1: [1] FAULT\n3: [1,3] FAULT\n0: [1,3,0] FAULT\n3: [1,3,0] HIT\n5: [5,3,0] FAULT\n6: [5,6,0] FAULT\n3: [5,6,3] FAULT\nTotal Page Faults: 6",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1136,
    "title": "LRU Page Replacement",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Oracle"],
    "description": "Reference string: 7,0,1,2,0,3,0,4,2,3. Frames=3. Simulate LRU page replacement. Print total page faults.",
    "input_format": "No input required.",
    "output_format": "7: [7] FAULT\n0: [7,0] FAULT\n1: [7,0,1] FAULT\n2: [2,0,1] FAULT\n0: [2,0,1] HIT\n3: [2,0,3] FAULT\n0: [2,0,3] HIT\n4: [4,0,3] FAULT\n2: [4,0,2] FAULT\n3: [4,3,2] FAULT\nTotal Page Faults: 8",
    "constraints": "3 frames. LRU eviction.",
    "sample_input": "",
    "sample_output": "7: [7] FAULT\n0: [7,0] FAULT\n1: [7,0,1] FAULT\n2: [2,0,1] FAULT\n0: [2,0,1] HIT\n3: [2,0,3] FAULT\n0: [2,0,3] HIT\n4: [4,0,3] FAULT\n2: [4,0,2] FAULT\n3: [4,3,2] FAULT\nTotal Page Faults: 8",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1137,
    "title": "Semaphore – Producer Consumer",
    "category": "Operating Systems",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Write a Java program simulating the Producer-Consumer problem using a semaphore (or synchronized block). Producer adds 3 items, consumer removes them. Print each produce and consume action.",
    "input_format": "No input required.",
    "output_format": "Produced: 1\nProduced: 2\nProduced: 3\nConsumed: 1\nConsumed: 2\nConsumed: 3",
    "constraints": "Use synchronized or Semaphore. Buffer size=3.",
    "sample_input": "",
    "sample_output": "Produced: 1\nProduced: 2\nProduced: 3\nConsumed: 1\nConsumed: 2\nConsumed: 3",
    "starter_code": {
      "java": `import java.util.concurrent.Semaphore;
import java.util.*;
public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Implement Producer-Consumer here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1138,
    "title": "Memory Allocation – First Fit",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys", "HCL"],
    "description": "Memory blocks: [100, 500, 200, 300, 600] KB. Processes requesting: [212, 417, 112, 426] KB. Use First Fit algorithm. Print which block each process is allocated to (1-indexed), or 'Not Allocated'.",
    "input_format": "No input required.",
    "output_format": "Process 1 (212KB) -> Block 2 (500KB)\nProcess 2 (417KB) -> Block 5 (600KB)\nProcess 3 (112KB) -> Block 2 (288KB remaining)\nProcess 4 (426KB) -> Not Allocated",
    "constraints": "First fit: allocate to first block that fits.",
    "sample_input": "",
    "sample_output": "Process 1 (212KB) -> Block 2 (500KB)\nProcess 2 (417KB) -> Block 5 (600KB)\nProcess 3 (112KB) -> Block 2 (288KB remaining)\nProcess 4 (426KB) -> Not Allocated",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1139,
    "title": "Disk Scheduling – SSTF",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Oracle", "SAP"],
    "description": "Disk request queue: [98, 183, 37, 122, 14, 124, 65, 67]. Head starts at 53. Use SSTF (Shortest Seek Time First). Print the order of servicing and total head movement.",
    "input_format": "No input required.",
    "output_format": "Order: 65 67 37 14 98 122 124 183\nTotal head movement: 236",
    "constraints": "Always service the request closest to current head position.",
    "sample_input": "",
    "sample_output": "Order: 65 67 37 14 98 122 124 183\nTotal head movement: 236",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1140,
    "title": "Mutex vs Semaphore",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Accenture"],
    "description": "Print the key differences between Mutex and Semaphore across 4 parameters: Ownership, Count, Use case, and Release by.",
    "input_format": "No input required.",
    "output_format": "Ownership: Mutex=Owned by thread, Semaphore=No ownership\nCount: Mutex=Binary(0/1), Semaphore=Any non-negative integer\nUse case: Mutex=Mutual exclusion, Semaphore=Signaling/resource counting\nRelease by: Mutex=Same thread only, Semaphore=Any thread",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "Ownership: Mutex=Owned by thread, Semaphore=No ownership\nCount: Mutex=Binary(0/1), Semaphore=Any non-negative integer\nUse case: Mutex=Mutual exclusion, Semaphore=Signaling/resource counting\nRelease by: Mutex=Same thread only, Semaphore=Any thread",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1141,
    "title": "Virtual Memory and Paging",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Page size = 1KB. Logical address = 5120 bytes. Calculate: page number, offset, physical address if page 5 maps to frame 3.",
    "input_format": "No input required.",
    "output_format": "Page size: 1024 bytes\nLogical address: 5120\nPage number: 5\nOffset: 0\nFrame number: 3\nPhysical address: 3072",
    "constraints": "Show all calculation steps.",
    "sample_input": "",
    "sample_output": "Page size: 1024 bytes\nLogical address: 5120\nPage number: 5\nOffset: 0\nFrame number: 3\nPhysical address: 3072",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1142,
    "title": "Critical Section Problem",
    "category": "Operating Systems",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Microsoft", "Oracle"],
    "description": "Write a Java program where two threads increment a shared counter 1000 times each without synchronization, then again with synchronization. Print both final counter values to show the race condition vs correct result.",
    "input_format": "No input required.",
    "output_format": "Without sync: <some value less than 2000 usually>\nWith sync: 2000",
    "constraints": "Use Thread class. Use synchronized keyword for the correct version.",
    "sample_input": "",
    "sample_output": "Without sync: 1873\nWith sync: 2000",
    "starter_code": {
      "java": `public class Main {
    static int counter = 0;

    public static void main(String[] args) throws InterruptedException {
        // Demonstrate race condition and fix here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1143,
    "title": "System Calls – Types",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Wipro"],
    "description": "Print the 5 types of system calls with one example each: Process Control, File Management, Device Management, Information Maintenance, Communication.",
    "input_format": "No input required.",
    "output_format": "Process Control: fork(), exit()\nFile Management: open(), read(), write()\nDevice Management: ioctl(), read()\nInformation Maintenance: getpid(), alarm()\nCommunication: pipe(), shmget()",
    "constraints": "One line per type with examples.",
    "sample_input": "",
    "sample_output": "Process Control: fork(), exit()\nFile Management: open(), read(), write()\nDevice Management: ioctl(), read()\nInformation Maintenance: getpid(), alarm()\nCommunication: pipe(), shmget()",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1144,
    "title": "Paging vs Segmentation",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Accenture", "CTS"],
    "description": "Compare Paging and Segmentation across 4 parameters: Division, Size, Fragmentation type, and User visibility.",
    "input_format": "No input required.",
    "output_format": "Division: Paging=Fixed-size pages, Segmentation=Variable-size segments\nSize: Paging=Fixed, Segmentation=Variable\nFragmentation: Paging=Internal, Segmentation=External\nUser visibility: Paging=Transparent, Segmentation=Visible to programmer",
    "constraints": "Exactly 4 lines.",
    "sample_input": "",
    "sample_output": "Division: Paging=Fixed-size pages, Segmentation=Variable-size segments\nSize: Paging=Fixed, Segmentation=Variable\nFragmentation: Paging=Internal, Segmentation=External\nUser visibility: Paging=Transparent, Segmentation=Visible to programmer",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1145,
    "title": "Context Switching",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Infosys"],
    "description": "Print the step-by-step sequence of events that happen during a context switch between Process P1 and Process P2.",
    "input_format": "No input required.",
    "output_format": "1. CPU saves P1 state (PC, registers) into P1's PCB\n2. Scheduler selects P2\n3. CPU loads P2 state from P2's PCB\n4. P2 resumes execution from where it left off\n5. P1 state is safely stored for later resumption",
    "constraints": "At least 5 steps.",
    "sample_input": "",
    "sample_output": "1. CPU saves P1 state (PC, registers) into P1's PCB\n2. Scheduler selects P2\n3. CPU loads P2 state from P2's PCB\n4. P2 resumes execution from where it left off\n5. P1 state is safely stored for later resumption",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1146,
    "title": "Thrashing in OS",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Oracle"],
    "description": "Explain thrashing: what causes it, its effect, and two solutions. Print as structured output.",
    "input_format": "No input required.",
    "output_format": "Thrashing: CPU spends more time swapping pages than executing processes.\nCause: Too many processes competing for limited frames.\nEffect: CPU utilisation drops drastically despite high activity.\nSolution 1: Working Set Model - allocate frames based on working set size.\nSolution 2: Page Fault Frequency - reduce multiprogramming when PFF is high.",
    "constraints": "Print exactly 5 lines.",
    "sample_input": "",
    "sample_output": "Thrashing: CPU spends more time swapping pages than executing processes.\nCause: Too many processes competing for limited frames.\nEffect: CPU utilisation drops drastically despite high activity.\nSolution 1: Working Set Model - allocate frames based on working set size.\nSolution 2: Page Fault Frequency - reduce multiprogramming when PFF is high.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1147,
    "title": "File System – Inode Structure",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": ["Google", "Amazon", "Microsoft"],
    "description": "Print the structure of a Unix inode with at least 8 fields and explain what each field stores.",
    "input_format": "No input required.",
    "output_format": "inode fields:\n1. File type (regular, directory, symlink)\n2. Permissions (rwxrwxrwx)\n3. Link count (hard links)\n4. Owner UID and GID\n5. File size in bytes\n6. Timestamps (access, modify, change)\n7. Direct block pointers (12)\n8. Indirect, double-indirect, triple-indirect pointers",
    "constraints": "At least 8 inode fields.",
    "sample_input": "",
    "sample_output": "inode fields:\n1. File type (regular, directory, symlink)\n2. Permissions (rwxrwxrwx)\n3. Link count (hard links)\n4. Owner UID and GID\n5. File size in bytes\n6. Timestamps (access, modify, change)\n7. Direct block pointers (12)\n8. Indirect, double-indirect, triple-indirect pointers",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1148,
    "title": "Monolithic vs Microkernel",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Cognizant"],
    "description": "Compare Monolithic and Microkernel architectures across 4 parameters and give one OS example each.",
    "input_format": "No input required.",
    "output_format": "Size: Monolithic=Large kernel, Microkernel=Small kernel\nServices in kernel: Monolithic=All (FS, drivers, IPC), Microkernel=Minimal (IPC, scheduling)\nPerformance: Monolithic=Faster (no context switch), Microkernel=Slower (message passing)\nReliability: Monolithic=Less (crash affects all), Microkernel=More (isolated)\nExamples: Monolithic=Linux, Microkernel=Minix/QNX",
    "constraints": "Exactly 5 lines.",
    "sample_input": "",
    "sample_output": "Size: Monolithic=Large kernel, Microkernel=Small kernel\nServices in kernel: Monolithic=All (FS, drivers, IPC), Microkernel=Minimal (IPC, scheduling)\nPerformance: Monolithic=Faster (no context switch), Microkernel=Slower (message passing)\nReliability: Monolithic=Less (crash affects all), Microkernel=More (isolated)\nExamples: Monolithic=Linux, Microkernel=Minix/QNX",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1149,
    "title": "Starvation and Aging",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Accenture"],
    "description": "Explain starvation in OS scheduling, give a real scenario where it happens, and explain how aging solves it.",
    "input_format": "No input required.",
    "output_format": "Starvation: A low-priority process never gets CPU because high-priority processes keep arriving.\nScenario: In priority scheduling, P_low(priority=10) waits while P_high(priority=1) processes keep entering.\nAging fix: Gradually increase the priority of waiting processes over time.\nExample: After waiting 5 units, priority 10 becomes 9, then 8, eventually gets scheduled.",
    "constraints": "Print exactly 4 lines.",
    "sample_input": "",
    "sample_output": "Starvation: A low-priority process never gets CPU because high-priority processes keep arriving.\nScenario: In priority scheduling, P_low(priority=10) waits while P_high(priority=1) processes keep entering.\nAging fix: Gradually increase the priority of waiting processes over time.\nExample: After waiting 5 units, priority 10 becomes 9, then 8, eventually gets scheduled.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },

  // ─── Computer Networks (20 questions) ─────────────────────
  {
    "id": 1150,
    "title": "OSI Model – 7 Layers",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Wipro"],
    "description": "Print all 7 layers of the OSI model from Physical to Application, with the primary function and one protocol example for each layer.",
    "input_format": "No input required.",
    "output_format": "1. Physical: Bit transmission – Ethernet cable\n2. Data Link: Frame delivery, MAC – Ethernet, PPP\n3. Network: Routing, IP addressing – IP, ICMP\n4. Transport: End-to-end delivery – TCP, UDP\n5. Session: Session management – NetBIOS\n6. Presentation: Data translation/encryption – SSL, JPEG\n7. Application: User interface – HTTP, FTP, DNS",
    "constraints": "All 7 layers with function and protocol.",
    "sample_input": "",
    "sample_output": "1. Physical: Bit transmission – Ethernet cable\n2. Data Link: Frame delivery, MAC – Ethernet, PPP\n3. Network: Routing, IP addressing – IP, ICMP\n4. Transport: End-to-end delivery – TCP, UDP\n5. Session: Session management – NetBIOS\n6. Presentation: Data translation/encryption – SSL, JPEG\n7. Application: User interface – HTTP, FTP, DNS",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1151,
    "title": "TCP vs UDP",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "Google", "TCS"],
    "description": "Compare TCP and UDP across 5 parameters: Connection, Reliability, Speed, Order, and Use case.",
    "input_format": "No input required.",
    "output_format": "Connection: TCP=Connection-oriented, UDP=Connectionless\nReliability: TCP=Reliable (ACK), UDP=Unreliable\nSpeed: TCP=Slower, UDP=Faster\nOrder: TCP=In-order delivery, UDP=No ordering\nUse case: TCP=HTTP/Email/FTP, UDP=Video streaming/DNS/Gaming",
    "constraints": "Exactly 5 comparison lines.",
    "sample_input": "",
    "sample_output": "Connection: TCP=Connection-oriented, UDP=Connectionless\nReliability: TCP=Reliable (ACK), UDP=Unreliable\nSpeed: TCP=Slower, UDP=Faster\nOrder: TCP=In-order delivery, UDP=No ordering\nUse case: TCP=HTTP/Email/FTP, UDP=Video streaming/DNS/Gaming",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1152,
    "title": "IP Subnetting – CIDR",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Oracle", "Cisco"],
    "description": "Given IP 192.168.1.0/26, calculate: subnet mask, number of hosts, first usable IP, last usable IP, and broadcast address.",
    "input_format": "No input required.",
    "output_format": "Subnet mask: 255.255.255.192\nSubnet bits: 26\nHost bits: 6\nTotal hosts: 64\nUsable hosts: 62\nFirst usable: 192.168.1.1\nLast usable: 192.168.1.62\nBroadcast: 192.168.1.63",
    "constraints": "Show all 8 derived values.",
    "sample_input": "",
    "sample_output": "Subnet mask: 255.255.255.192\nSubnet bits: 26\nHost bits: 6\nTotal hosts: 64\nUsable hosts: 62\nFirst usable: 192.168.1.1\nLast usable: 192.168.1.62\nBroadcast: 192.168.1.63",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1153,
    "title": "TCP Three-Way Handshake",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Amazon", "Infosys"],
    "description": "Print the step-by-step TCP three-way handshake process between a client and server with flags used at each step.",
    "input_format": "No input required.",
    "output_format": "Step 1: Client -> Server: SYN (seq=x)\nStep 2: Server -> Client: SYN-ACK (seq=y, ack=x+1)\nStep 3: Client -> Server: ACK (ack=y+1)\nConnection Established.",
    "constraints": "Exactly 4 lines including connection established.",
    "sample_input": "",
    "sample_output": "Step 1: Client -> Server: SYN (seq=x)\nStep 2: Server -> Client: SYN-ACK (seq=y, ack=x+1)\nStep 3: Client -> Server: ACK (ack=y+1)\nConnection Established.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1154,
    "title": "DNS Resolution Process",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["Google", "Amazon", "Cloudflare"],
    "description": "Print the step-by-step process of how www.example.com is resolved to an IP address by DNS.",
    "input_format": "No input required.",
    "output_format": "1. Browser checks local cache.\n2. OS checks hosts file.\n3. Query sent to Recursive Resolver (ISP).\n4. Resolver queries Root DNS server -> .com TLD server.\n5. TLD server returns authoritative NS for example.com.\n6. Authoritative NS returns IP: 93.184.216.34.\n7. Resolver caches and returns IP to browser.\n8. Browser connects to 93.184.216.34.",
    "constraints": "At least 8 steps.",
    "sample_input": "",
    "sample_output": "1. Browser checks local cache.\n2. OS checks hosts file.\n3. Query sent to Recursive Resolver (ISP).\n4. Resolver queries Root DNS server -> .com TLD server.\n5. TLD server returns authoritative NS for example.com.\n6. Authoritative NS returns IP: 93.184.216.34.\n7. Resolver caches and returns IP to browser.\n8. Browser connects to 93.184.216.34.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1155,
    "title": "HTTP Methods",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Wipro"],
    "description": "Print the 5 most common HTTP methods with their purpose and one real-world example each.",
    "input_format": "No input required.",
    "output_format": "GET: Retrieve resource – GET /users/1\nPOST: Create resource – POST /users\nPUT: Replace resource – PUT /users/1\nPATCH: Partial update – PATCH /users/1\nDELETE: Remove resource – DELETE /users/1",
    "constraints": "Exactly 5 lines.",
    "sample_input": "",
    "sample_output": "GET: Retrieve resource – GET /users/1\nPOST: Create resource – POST /users\nPUT: Replace resource – PUT /users/1\nPATCH: Partial update – PATCH /users/1\nDELETE: Remove resource – DELETE /users/1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1156,
    "title": "IPv4 vs IPv6",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Accenture", "Oracle"],
    "description": "Compare IPv4 and IPv6 across 5 parameters: Address length, Total addresses, Header size, NAT needed, and Example address.",
    "input_format": "No input required.",
    "output_format": "Address length: IPv4=32-bit, IPv6=128-bit\nTotal addresses: IPv4=~4.3 billion, IPv6=~340 undecillion\nHeader size: IPv4=20 bytes min, IPv6=40 bytes fixed\nNAT needed: IPv4=Yes, IPv6=No\nExample: IPv4=192.168.1.1, IPv6=2001:0db8::1",
    "constraints": "Exactly 5 lines.",
    "sample_input": "",
    "sample_output": "Address length: IPv4=32-bit, IPv6=128-bit\nTotal addresses: IPv4=~4.3 billion, IPv6=~340 undecillion\nHeader size: IPv4=20 bytes min, IPv6=40 bytes fixed\nNAT needed: IPv4=Yes, IPv6=No\nExample: IPv4=192.168.1.1, IPv6=2001:0db8::1",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1157,
    "title": "Routing – Dijkstra's Algorithm",
    "category": "Computer Networks",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Given a network graph with 5 nodes (A,B,C,D,E) and weighted edges: A-B=4, A-C=2, C-B=1, B-D=5, C-D=8, B-E=6, D-E=2. Find shortest path from A to E using Dijkstra's algorithm.",
    "input_format": "No input required.",
    "output_format": "Start: A\nA=0, B=3(via C), C=2, D=8(via C-B), E=10(via C-B-D)\nShortest path A->E: A->C->B->D->E\nDistance: 10",
    "constraints": "Show the relaxation steps and final shortest path.",
    "sample_input": "",
    "sample_output": "Start: A\nA=0, B=3(via C), C=2, D=8(via C-B), E=10(via C-B-D)\nShortest path A->E: A->C->B->D->E\nDistance: 10",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    public static void main(String[] args) {
        // Implement Dijkstra here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1158,
    "title": "ARP – Address Resolution Protocol",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Cisco"],
    "description": "Print the step-by-step process of how ARP resolves an IP address (192.168.1.10) to a MAC address in a LAN.",
    "input_format": "No input required.",
    "output_format": "1. Host A wants to send to 192.168.1.10 but doesn't know MAC.\n2. A broadcasts ARP request: Who has 192.168.1.10?\n3. All devices receive; only 192.168.1.10 (Host B) replies.\n4. B sends ARP reply with its MAC: AA:BB:CC:DD:EE:FF.\n5. A caches IP-MAC mapping in ARP table.\n6. A sends data frame directly to MAC AA:BB:CC:DD:EE:FF.",
    "constraints": "Exactly 6 steps.",
    "sample_input": "",
    "sample_output": "1. Host A wants to send to 192.168.1.10 but doesn't know MAC.\n2. A broadcasts ARP request: Who has 192.168.1.10?\n3. All devices receive; only 192.168.1.10 (Host B) replies.\n4. B sends ARP reply with its MAC: AA:BB:CC:DD:EE:FF.\n5. A caches IP-MAC mapping in ARP table.\n6. A sends data frame directly to MAC AA:BB:CC:DD:EE:FF.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1159,
    "title": "Sliding Window Protocol",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Oracle", "TCS"],
    "description": "Simulate Go-Back-N with window size=3, frames 0-5. Frame 2 is lost. Print the transmission sequence showing which frames are sent, the NAK, and retransmission.",
    "input_format": "No input required.",
    "output_format": "Send: 0 1 2\nACK: 0 1\nFrame 2 lost -> NAK 2\nRetransmit from 2: 2 3 4\nACK: 2 3 4\nSend: 5\nACK: 5\nAll frames delivered.",
    "constraints": "Go-Back-N. Window size=3.",
    "sample_input": "",
    "sample_output": "Send: 0 1 2\nACK: 0 1\nFrame 2 lost -> NAK 2\nRetransmit from 2: 2 3 4\nACK: 2 3 4\nSend: 5\nACK: 5\nAll frames delivered.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1160,
    "title": "HTTPS and SSL/TLS Handshake",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": ["Google", "Amazon", "Microsoft"],
    "description": "Print the simplified TLS 1.3 handshake steps between a browser and a web server establishing an HTTPS connection.",
    "input_format": "No input required.",
    "output_format": "1. Client Hello: TLS version, cipher suites, random value.\n2. Server Hello: Chosen cipher, server certificate, random value.\n3. Client verifies certificate with CA.\n4. Key exchange: Client and server derive session key.\n5. Client Finished: Encrypted with session key.\n6. Server Finished: Encrypted with session key.\n7. Secure channel established for HTTP data.",
    "constraints": "Exactly 7 steps.",
    "sample_input": "",
    "sample_output": "1. Client Hello: TLS version, cipher suites, random value.\n2. Server Hello: Chosen cipher, server certificate, random value.\n3. Client verifies certificate with CA.\n4. Key exchange: Client and server derive session key.\n5. Client Finished: Encrypted with session key.\n6. Server Finished: Encrypted with session key.\n7. Secure channel established for HTTP data.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1161,
    "title": "NAT – Network Address Translation",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Cisco"],
    "description": "Explain how NAT works when a private IP (192.168.1.5) sends a request to a public server (8.8.8.8), step by step.",
    "input_format": "No input required.",
    "output_format": "1. Device 192.168.1.5 sends packet to 8.8.8.8.\n2. Router (public IP: 203.0.113.1) intercepts packet.\n3. Router replaces source 192.168.1.5 with 203.0.113.1 in NAT table.\n4. Packet sent to 8.8.8.8 with source 203.0.113.1.\n5. Reply arrives at 203.0.113.1.\n6. Router looks up NAT table, forwards to 192.168.1.5.",
    "constraints": "Exactly 6 steps.",
    "sample_input": "",
    "sample_output": "1. Device 192.168.1.5 sends packet to 8.8.8.8.\n2. Router (public IP: 203.0.113.1) intercepts packet.\n3. Router replaces source 192.168.1.5 with 203.0.113.1 in NAT table.\n4. Packet sent to 8.8.8.8 with source 203.0.113.1.\n5. Reply arrives at 203.0.113.1.\n6. Router looks up NAT table, forwards to 192.168.1.5.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1162,
    "title": "Error Detection – CRC",
    "category": "Computer Networks",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Oracle", "TCS"],
    "description": "Given data bits 1101011011 and divisor 10011, compute the CRC remainder using binary division. Print the appended message and remainder.",
    "input_format": "No input required.",
    "output_format": "Data: 1101011011\nDivisor: 10011 (degree 4)\nAppend 4 zeros: 11010110110000\nXOR division steps yield remainder: 1110\nTransmitted: 11010110111110",
    "constraints": "Show the appended message and final CRC.",
    "sample_input": "",
    "sample_output": "Data: 1101011011\nDivisor: 10011 (degree 4)\nAppend 4 zeros: 11010110110000\nXOR division steps yield remainder: 1110\nTransmitted: 11010110111110",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1163,
    "title": "DHCP Process",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Cisco"],
    "description": "Print the 4-step DORA process of DHCP IP assignment.",
    "input_format": "No input required.",
    "output_format": "1. Discover: Client broadcasts DHCPDISCOVER on 255.255.255.255.\n2. Offer: Server responds with DHCPOFFER (IP: 192.168.1.100, lease 24h).\n3. Request: Client broadcasts DHCPREQUEST to accept the offer.\n4. Acknowledge: Server sends DHCPACK confirming the IP assignment.",
    "constraints": "Exactly 4 steps using DORA naming.",
    "sample_input": "",
    "sample_output": "1. Discover: Client broadcasts DHCPDISCOVER on 255.255.255.255.\n2. Offer: Server responds with DHCPOFFER (IP: 192.168.1.100, lease 24h).\n3. Request: Client broadcasts DHCPREQUEST to accept the offer.\n4. Acknowledge: Server sends DHCPACK confirming the IP assignment.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1164,
    "title": "Congestion Control – TCP",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Google", "Oracle"],
    "description": "Explain TCP congestion control phases: Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery. Print one line per phase with behaviour.",
    "input_format": "No input required.",
    "output_format": "Slow Start: cwnd doubles every RTT from 1 MSS until ssthresh.\nCongestion Avoidance: cwnd increases by 1 MSS per RTT after ssthresh.\nFast Retransmit: Retransmit lost segment on 3 duplicate ACKs without waiting for timeout.\nFast Recovery: Set ssthresh=cwnd/2, cwnd=ssthresh, skip slow start.",
    "constraints": "Exactly 4 lines.",
    "sample_input": "",
    "sample_output": "Slow Start: cwnd doubles every RTT from 1 MSS until ssthresh.\nCongestion Avoidance: cwnd increases by 1 MSS per RTT after ssthresh.\nFast Retransmit: Retransmit lost segment on 3 duplicate ACKs without waiting for timeout.\nFast Recovery: Set ssthresh=cwnd/2, cwnd=ssthresh, skip slow start.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1165,
    "title": "Hub vs Switch vs Router",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Infosys"],
    "description": "Compare Hub, Switch, and Router across 4 parameters: OSI Layer, Addressing, Collision Domain, and Use case.",
    "input_format": "No input required.",
    "output_format": "OSI Layer: Hub=Layer 1, Switch=Layer 2, Router=Layer 3\nAddressing: Hub=None, Switch=MAC, Router=IP\nCollision Domain: Hub=One shared, Switch=Per port, Router=Per interface\nUse case: Hub=Legacy LAN, Switch=LAN segmentation, Router=Inter-network routing",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "OSI Layer: Hub=Layer 1, Switch=Layer 2, Router=Layer 3\nAddressing: Hub=None, Switch=MAC, Router=IP\nCollision Domain: Hub=One shared, Switch=Per port, Router=Per interface\nUse case: Hub=Legacy LAN, Switch=LAN segmentation, Router=Inter-network routing",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1166,
    "title": "Firewall Types",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "Oracle", "Cisco"],
    "description": "Print 4 types of firewalls with how they work and one advantage each.",
    "input_format": "No input required.",
    "output_format": "1. Packet Filter: Checks IP/port headers. Fast but no state tracking.\n2. Stateful Inspection: Tracks connection state. Better security.\n3. Application Layer (Proxy): Deep packet inspection. Understands app protocols.\n4. Next-Gen (NGFW): IDS/IPS + DPI + identity awareness. Most comprehensive.",
    "constraints": "Exactly 4 firewall types.",
    "sample_input": "",
    "sample_output": "1. Packet Filter: Checks IP/port headers. Fast but no state tracking.\n2. Stateful Inspection: Tracks connection state. Better security.\n3. Application Layer (Proxy): Deep packet inspection. Understands app protocols.\n4. Next-Gen (NGFW): IDS/IPS + DPI + identity awareness. Most comprehensive.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1167,
    "title": "RSA Encryption – Key Generation",
    "category": "Computer Networks",
    "difficulty": "Hard",
    "company_tags": ["Google", "Amazon", "Microsoft"],
    "description": "Using small primes p=3, q=11, demonstrate RSA key generation: compute n, φ(n), choose e, compute d. Then encrypt message M=4 and decrypt.",
    "input_format": "No input required.",
    "output_format": "p=3, q=11\nn=33\nφ(n)=20\ne=3 (gcd(3,20)=1)\nd=7 (3*7 mod 20=1)\nPublic key: (3,33), Private key: (7,33)\nEncrypt M=4: C=4^3 mod 33=31\nDecrypt C=31: M=31^7 mod 33=4",
    "constraints": "Show all steps clearly.",
    "sample_input": "",
    "sample_output": "p=3, q=11\nn=33\nφ(n)=20\ne=3 (gcd(3,20)=1)\nd=7 (3*7 mod 20=1)\nPublic key: (3,33), Private key: (7,33)\nEncrypt M=4: C=4^3 mod 33=31\nDecrypt C=31: M=31^7 mod 33=4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1168,
    "title": "Network Topologies",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "HCL"],
    "description": "Print 5 network topologies with their advantage and disadvantage.",
    "input_format": "No input required.",
    "output_format": "Bus: Simple+cheap | Single cable failure breaks network\nStar: Easy fault isolation | Central hub failure breaks all\nRing: Predictable performance | One node failure breaks ring\nMesh: High redundancy | Expensive cabling\nHybrid: Flexible | Complex to manage",
    "constraints": "Exactly 5 topologies.",
    "sample_input": "",
    "sample_output": "Bus: Simple+cheap | Single cable failure breaks network\nStar: Easy fault isolation | Central hub failure breaks all\nRing: Predictable performance | One node failure breaks ring\nMesh: High redundancy | Expensive cabling\nHybrid: Flexible | Complex to manage",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1169,
    "title": "SMTP Email Flow",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Google", "Microsoft"],
    "description": "Print the step-by-step flow of sending an email from alice@gmail.com to bob@yahoo.com using SMTP, DNS, and POP3/IMAP.",
    "input_format": "No input required.",
    "output_format": "1. Alice's email client sends email to Gmail SMTP server (port 587).\n2. Gmail SMTP queries DNS MX record for yahoo.com -> mail.yahoo.com.\n3. Gmail SMTP connects to Yahoo SMTP (port 25) and transfers email.\n4. Yahoo stores email in Bob's mailbox.\n5. Bob's client connects via IMAP/POP3 to retrieve email.\n6. Bob reads the email.",
    "constraints": "Exactly 6 steps.",
    "sample_input": "",
    "sample_output": "1. Alice's email client sends email to Gmail SMTP server (port 587).\n2. Gmail SMTP queries DNS MX record for yahoo.com -> mail.yahoo.com.\n3. Gmail SMTP connects to Yahoo SMTP (port 25) and transfers email.\n4. Yahoo stores email in Bob's mailbox.\n5. Bob's client connects via IMAP/POP3 to retrieve email.\n6. Bob reads the email.",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },

  // ─── Technical (20 questions) ──────────────────────────────
  {
    "id": 1170,
    "title": "Time Complexity – Big O Identification",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Amazon"],
    "description": "Given 5 code snippets (described), identify the time complexity of each: (1) single loop 0 to n, (2) nested loop 0 to n twice, (3) binary search, (4) recursive Fibonacci, (5) merge sort.",
    "input_format": "No input required.",
    "output_format": "Single loop: O(n)\nNested loop: O(n^2)\nBinary search: O(log n)\nRecursive Fibonacci: O(2^n)\nMerge sort: O(n log n)",
    "constraints": "Exactly 5 answers.",
    "sample_input": "",
    "sample_output": "Single loop: O(n)\nNested loop: O(n^2)\nBinary search: O(log n)\nRecursive Fibonacci: O(2^n)\nMerge sort: O(n log n)",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1171,
    "title": "Stack Implementation Using Array",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro", "Accenture"],
    "description": "Implement a stack using an array with push(), pop(), peek(), and isEmpty(). Push 5,10,15. Pop once. Print peek() and isEmpty().",
    "input_format": "No input required.",
    "output_format": "Pushed: 5\nPushed: 10\nPushed: 15\nPopped: 15\nPeek: 10\nisEmpty: false",
    "constraints": "Max size=10. No java.util.Stack allowed.",
    "sample_input": "",
    "sample_output": "Pushed: 5\nPushed: 10\nPushed: 15\nPopped: 15\nPeek: 10\nisEmpty: false",
    "starter_code": {
      "java": `public class Main {
    static int[] stack = new int[10];
    static int top = -1;

    // Implement push, pop, peek, isEmpty here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1172,
    "title": "Queue Using Two Stacks",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Google"],
    "description": "Implement a Queue using two stacks. Enqueue 1, 2, 3. Dequeue twice and print the values. Then print front().",
    "input_format": "No input required.",
    "output_format": "Enqueued: 1\nEnqueued: 2\nEnqueued: 3\nDequeued: 1\nDequeued: 2\nFront: 3",
    "constraints": "Use two java.util.Stack objects. O(1) amortized.",
    "sample_input": "",
    "sample_output": "Enqueued: 1\nEnqueued: 2\nEnqueued: 3\nDequeued: 1\nDequeued: 2\nFront: 3",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    // Implement Queue using two Stacks here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1173,
    "title": "Binary Search – Iterative",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys", "Flipkart"],
    "description": "Given sorted array [2,5,8,12,16,23,38,56,72,91], search for 23 using iterative binary search. Print each mid checked and the result index.",
    "input_format": "No input required.",
    "output_format": "Checking mid=16\nChecking mid=38\nChecking mid=23\nFound at index 5",
    "constraints": "Iterative, not recursive.",
    "sample_input": "",
    "sample_output": "Checking mid=16\nChecking mid=38\nChecking mid=23\nFound at index 5",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int[] arr = {2,5,8,12,16,23,38,56,72,91};
        // Iterative binary search here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1174,
    "title": "Merge Sort Implementation",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Adobe"],
    "description": "Implement merge sort on array [38,27,43,3,9,82,10]. Print the array after each merge step and the final sorted array.",
    "input_format": "No input required.",
    "output_format": "Merging: [27,38] [3,43] [9,82] [10]\nMerging: [3,27,38,43] [9,10,82]\nFinal: [3,9,10,27,38,43,82]",
    "constraints": "Implement full merge sort recursively.",
    "sample_input": "",
    "sample_output": "Merging: [27,38] [3,43] [9,82] [10]\nMerging: [3,27,38,43] [9,10,82]\nFinal: [3,9,10,27,38,43,82]",
    "starter_code": {
      "java": `public class Main {
    // Implement merge sort here

    public static void main(String[] args) {
        int[] arr = {38,27,43,3,9,82,10};
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1175,
    "title": "Linked List – Detect Cycle",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Google", "Flipkart"],
    "description": "Implement Floyd's Cycle Detection algorithm. Create a linked list 1->2->3->4->5 with node 5 pointing back to node 3 (cycle). Detect and print whether a cycle exists.",
    "input_format": "No input required.",
    "output_format": "Cycle detected: true\nCycle starts at node: 3",
    "constraints": "Use slow and fast pointer (Floyd's algorithm). O(1) space.",
    "sample_input": "",
    "sample_output": "Cycle detected: true\nCycle starts at node: 3",
    "starter_code": {
      "java": `public class Main {
    static class Node { int val; Node next; Node(int v){val=v;} }

    public static void main(String[] args) {
        // Build list and detect cycle here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1176,
    "title": "HashMap – Frequency Count",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Amazon", "Flipkart"],
    "description": "Given array [1,2,2,3,3,3,4,4,4,4], use a HashMap to count the frequency of each element. Print each element with its count in sorted order.",
    "input_format": "No input required.",
    "output_format": "1: 1\n2: 2\n3: 3\n4: 4",
    "constraints": "Use java.util.HashMap. Print in ascending key order.",
    "sample_input": "",
    "sample_output": "1: 1\n2: 2\n3: 3\n4: 4",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1,2,2,3,3,3,4,4,4,4};
        // Frequency count using HashMap
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1177,
    "title": "Tree – Level Order Traversal",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Google"],
    "description": "Build a binary tree: root=1, left=2, right=3, 2.left=4, 2.right=5, 3.right=6. Print level-order traversal (BFS).",
    "input_format": "No input required.",
    "output_format": "Level 1: 1\nLevel 2: 2 3\nLevel 3: 4 5 6",
    "constraints": "Use a Queue for BFS. Print level-by-level.",
    "sample_input": "",
    "sample_output": "Level 1: 1\nLevel 2: 2 3\nLevel 3: 4 5 6",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    static class Node { int val; Node left, right; Node(int v){val=v;} }

    public static void main(String[] args) {
        // Build tree and BFS here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1178,
    "title": "Dynamic Programming – 0/1 Knapsack",
    "category": "Technical",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Items: weights=[1,2,3,5], values=[1,6,10,16], capacity=7. Solve 0/1 Knapsack using DP. Print the DP table and the maximum value.",
    "input_format": "No input required.",
    "output_format": "DP table computed.\nMax value: 22\nSelected items: weight=2(value=6) + weight=5(value=16)",
    "constraints": "Bottom-up DP. Print max value and selected items.",
    "sample_input": "",
    "sample_output": "DP table computed.\nMax value: 22\nSelected items: weight=2(value=6) + weight=5(value=16)",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int[] weights = {1,2,3,5};
        int[] values  = {1,6,10,16};
        int capacity  = 7;
        // DP solution here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1179,
    "title": "Graph – BFS and DFS",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Flipkart"],
    "description": "Given undirected graph: 0-1, 0-2, 1-3, 2-4. Starting from node 0, print BFS traversal and DFS traversal.",
    "input_format": "No input required.",
    "output_format": "BFS: 0 1 2 3 4\nDFS: 0 1 3 2 4",
    "constraints": "Adjacency list representation. Visited array to avoid revisiting.",
    "sample_input": "",
    "sample_output": "BFS: 0 1 2 3 4\nDFS: 0 1 3 2 4",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    static List<List<Integer>> graph = new ArrayList<>();
    static boolean[] visited;

    public static void main(String[] args) {
        // Build graph and run BFS, DFS
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1180,
    "title": "Recursion – Tower of Hanoi",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys", "Accenture"],
    "description": "Solve Tower of Hanoi for n=3 disks. Print each move in the format 'Move disk X from A to C'.",
    "input_format": "No input required.",
    "output_format": "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C",
    "constraints": "Recursive solution. Pegs named A, B, C.",
    "sample_input": "",
    "sample_output": "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C",
    "starter_code": {
      "java": `public class Main {
    static void hanoi(int n, char from, char to, char aux) {
        // Implement here
    }
    public static void main(String[] args) {
        hanoi(3, 'A', 'C', 'B');
    }
}`
    }
  },
  {
    "id": 1181,
    "title": "String – Longest Common Subsequence",
    "category": "Technical",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Adobe"],
    "description": "Find the LCS of strings 'ABCBDAB' and 'BDCAB'. Print the LCS length and the actual LCS string.",
    "input_format": "No input required.",
    "output_format": "LCS Length: 4\nLCS: BCAB",
    "constraints": "DP approach. Print both length and string.",
    "sample_input": "",
    "sample_output": "LCS Length: 4\nLCS: BCAB",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        String s1 = "ABCBDAB";
        String s2 = "BDCAB";
        // LCS DP here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1182,
    "title": "Bit Manipulation – Count Set Bits",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "TCS", "Microsoft"],
    "description": "Count the number of 1-bits (set bits) in the binary representation of n=29. Print the binary form and count. Use Brian Kernighan's algorithm.",
    "input_format": "No input required.",
    "output_format": "n=29\nBinary: 11101\nSet bits: 4",
    "constraints": "Use Brian Kernighan's algorithm: n = n & (n-1).",
    "sample_input": "",
    "sample_output": "n=29\nBinary: 11101\nSet bits: 4",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 29;
        // Count set bits using Brian Kernighan's here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1183,
    "title": "Heap – Kth Largest Element",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Flipkart", "Adobe"],
    "description": "Given array [3,2,1,5,6,4], find the 2nd largest element using a min-heap of size k=2. Print the answer.",
    "input_format": "No input required.",
    "output_format": "Array: [3,2,1,5,6,4]\nk=2\n2nd largest element: 5",
    "constraints": "Use PriorityQueue (min-heap). O(n log k).",
    "sample_input": "",
    "sample_output": "Array: [3,2,1,5,6,4]\nk=2\n2nd largest element: 5",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {3,2,1,5,6,4};
        int k = 2;
        // Min-heap approach here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1184,
    "title": "Trie – Insert and Search",
    "category": "Technical",
    "difficulty": "Hard",
    "company_tags": ["Google", "Amazon", "Microsoft"],
    "description": "Implement a Trie. Insert words: 'apple', 'app', 'application'. Then search for 'app' (exists), 'apply' (doesn't exist), and startsWith 'appl' (true).",
    "input_format": "No input required.",
    "output_format": "Inserted: apple, app, application\nSearch 'app': true\nSearch 'apply': false\nstartsWith 'appl': true",
    "constraints": "Implement TrieNode class with children array of size 26.",
    "sample_input": "",
    "sample_output": "Inserted: apple, app, application\nSearch 'app': true\nSearch 'apply': false\nstartsWith 'appl': true",
    "starter_code": {
      "java": `public class Main {
    // Implement TrieNode and Trie here

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1185,
    "title": "Two Pointer – 3Sum",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Google", "Adobe"],
    "description": "Given array [-1,0,1,2,-1,-4], find all unique triplets that sum to zero using two-pointer technique. Print each triplet.",
    "input_format": "No input required.",
    "output_format": "Triplets that sum to 0:\n[-1,-1,2]\n[-1,0,1]",
    "constraints": "Sort first. Use two pointers. No duplicate triplets.",
    "sample_input": "",
    "sample_output": "Triplets that sum to 0:\n[-1,-1,2]\n[-1,0,1]",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {-1,0,1,2,-1,-4};
        // Sort and two-pointer here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1186,
    "title": "Greedy – Activity Selection",
    "category": "Technical",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Microsoft", "Flipkart"],
    "description": "Activities with start and end times: (1,4),(3,5),(0,6),(5,7),(3,8),(5,9),(6,10),(8,11),(8,12),(2,13),(12,14). Select max non-overlapping activities greedily.",
    "input_format": "No input required.",
    "output_format": "Sorted by end time.\nSelected: (1,4) (5,7) (8,11) (12,14)\nMax activities: 4",
    "constraints": "Sort by finish time. Greedy selection.",
    "sample_input": "",
    "sample_output": "Sorted by end time.\nSelected: (1,4) (5,7) (8,11) (12,14)\nMax activities: 4",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] start = {1,3,0,5,3,5,6,8,8,2,12};
        int[] end   = {4,5,6,7,8,9,10,11,12,13,14};
        // Greedy activity selection here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1187,
    "title": "Sliding Window – Max Sum Subarray",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": ["Amazon", "TCS", "Infosys"],
    "description": "Given array [2,1,5,1,3,2] and k=3, find the maximum sum of any subarray of size k using sliding window. Print each window sum and the maximum.",
    "input_format": "No input required.",
    "output_format": "Window [2,1,5]=8\nWindow [1,5,1]=7\nWindow [5,1,3]=9\nWindow [1,3,2]=6\nMax sum: 9",
    "constraints": "Sliding window technique. O(n) time.",
    "sample_input": "",
    "sample_output": "Window [2,1,5]=8\nWindow [1,5,1]=7\nWindow [5,1,3]=9\nWindow [1,3,2]=6\nMax sum: 9",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int[] arr = {2,1,5,1,3,2};
        int k = 3;
        // Sliding window here
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1188,
    "title": "Backtracking – N-Queens",
    "category": "Technical",
    "difficulty": "Hard",
    "company_tags": ["Google", "Amazon", "Microsoft"],
    "description": "Solve N-Queens for n=4. Print the first valid board configuration using '.' for empty and 'Q' for queen.",
    "input_format": "No input required.",
    "output_format": ".Q..\n...Q\nQ...\n..Q.",
    "constraints": "Backtracking approach. Print only the first valid solution.",
    "sample_input": "",
    "sample_output": ".Q..\n...Q\nQ...\n..Q.",
    "starter_code": {
      "java": `public class Main {
    static int N = 4;
    static char[][] board = new char[N][N];

    // Implement isSafe and solve here

    public static void main(String[] args) {
        for(char[] row : board) java.util.Arrays.fill(row, '.');
        solve(0);
    }
}`
    }
  },
  {
    "id": 1189,
    "title": "Design Pattern – Observer",
    "category": "Technical",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Implement the Observer design pattern. Create a 'NewsAgency' (Subject) and two observers 'NewsChannel' and 'NewsApp'. When the agency publishes news, both observers get notified and print the news.",
    "input_format": "No input required.",
    "output_format": "NewsChannel received: Stock market hits all-time high\nNewsApp received: Stock market hits all-time high",
    "constraints": "Use Observer/Subject interfaces. Decouple subject from concrete observers.",
    "sample_input": "",
    "sample_output": "NewsChannel received: Stock market hits all-time high\nNewsApp received: Stock market hits all-time high",
    "starter_code": {
      "java": `import java.util.*;
public class Main {
    // Define Observer interface, Subject, NewsAgency, NewsChannel, NewsApp

    public static void main(String[] args) {
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1190,
    "title": "Alphabet Pattern – Right Triangle (A B C…)",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Print a right-angled triangle of alphabets where each row i contains alphabets A through the i-th letter.",
    "input_format": "n=5",
    "output_format": "A\nAB\nABC\nABCD\nABCDE",
    "constraints": "5 rows. Use nested loops.",
    "sample_input": "n=5",
    "sample_output": "A\nAB\nABC\nABCD\nABCDE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: print letters A to (char)('A'+i-1)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1191,
    "title": "Alphabet Pattern – Repeated Letter Per Row",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Print a pattern where each row i contains the i-th letter repeated i times: row 1 has A, row 2 has BB, row 3 has CCC, and so on for 5 rows.",
    "input_format": "n=5",
    "output_format": "A\nBB\nCCC\nDDDD\nEEEEE",
    "constraints": "5 rows.",
    "sample_input": "n=5",
    "sample_output": "A\nBB\nCCC\nDDDD\nEEEEE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: print letter (char)('A'+i-1) repeated i times
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1192,
    "title": "Alphabet Pattern – Pyramid of Letters",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Cognizant"],
    "description": "Print a centred pyramid using alphabets. Row 1 has A at the tip, each row uses the next letter and is centred with leading spaces. 5 rows total.",
    "input_format": "n=5",
    "output_format": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE",
    "constraints": "5 rows. Centre-align using spaces.",
    "sample_input": "n=5",
    "sample_output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: print (n-i) spaces, then (2*i-1) copies of (char)('A'+i-1)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1193,
    "title": "Alphabet Pattern – Diamond of Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Amazon"],
    "description": "Print a diamond shape made of alphabets. Upper half is a pyramid expanding from A to E; lower half mirrors it back to A.",
    "input_format": "n=5",
    "output_format": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A",
    "constraints": "n=5. 9 rows total.",
    "sample_input": "n=5",
    "sample_output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Print upper pyramid then lower inverted pyramid
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1194,
    "title": "Alphabet Pattern – Hollow Rectangle Border",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Wipro"],
    "description": "Print a hollow rectangle of size 4 rows x 8 columns. The top and bottom rows are filled with letters A-H; left and right borders use the row letter; inside is spaces.",
    "input_format": "rows=4, cols=8",
    "output_format": "ABCDEFGH\nA      H\nA      H\nABCDEFGH",
    "constraints": "4 rows, 8 columns. Border only.",
    "sample_input": "rows=4, cols=8",
    "sample_output": "ABCDEFGH\nA      H\nA      H\nABCDEFGH",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int rows = 4, cols = 8;
        // Top/bottom: print letters A to (char)('A'+cols-1)
        // Middle rows: first letter, spaces, last letter
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1195,
    "title": "Alphabet Pattern – Zigzag Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Google", "Microsoft"],
    "description": "Print 3 rows x 9 columns of a zigzag wave using letters A-I. Row 0 fills positions 0,2,4,6,8; row 1 fills 1,3,5,7; row 2 fills 2,4,6. Empty positions are spaces.",
    "input_format": "No input required.",
    "output_format": "A * * * * * * * I\n* B * D * F * H *\n* * C * E * G * *",
    "constraints": "3 rows, 9 cols.",
    "sample_input": "",
    "sample_output": "A * * * * * * * I\n* B * D * F * H *\n* * C * E * G * *",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        char[][] grid = new char[3][9];
        // Fill spaces first, then place letters on zigzag diagonals
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1196,
    "title": "Alphabet Pattern – Reverse Right Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Accenture"],
    "description": "Print a right triangle of alphabets in reverse: row 1 has ABCDE, row 2 has ABCD, down to row 5 with just A.",
    "input_format": "n=5",
    "output_format": "ABCDE\nABCD\nABC\nAB\nA",
    "constraints": "5 rows decreasing.",
    "sample_input": "n=5",
    "sample_output": "ABCDE\nABCD\nABC\nAB\nA",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i (1 to n): print letters A to (char)('A'+(n-i))
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1197,
    "title": "Alphabet Pattern – Diagonal Letter Staircase",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "Cognizant"],
    "description": "Print a staircase where row i has (i-1) leading spaces followed by the i-th letter (A, B, C...) for 6 rows.",
    "input_format": "n=6",
    "output_format": "A\n B\n  C\n   D\n    E\n     F",
    "constraints": "6 rows. One letter per row, shifted right by one each row.",
    "sample_input": "n=6",
    "sample_output": "A\n B\n  C\n   D\n    E\n     F",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 6;
        // Row i: print (i-1) spaces then (char)('A'+i-1)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1198,
    "title": "Alphabet Pattern – Sandglass of Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Flipkart"],
    "description": "Print a sandglass (inverted pyramid on top, pyramid on bottom) using alphabets. Top row starts with EEEEEEEEE and shrinks to A, then expands back to EEEEEEEEE.",
    "input_format": "n=5",
    "output_format": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE",
    "constraints": "n=5. 9 rows total.",
    "sample_input": "n=5",
    "sample_output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Inverted pyramid (row i: i spaces, 2*(n-i)-1 letters) then pyramid
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1199,
    "title": "Alphabet Pattern – Continuous Letters Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Infosys"],
    "description": "Print a triangle where letters are filled continuously row by row: row 1 gets A, row 2 gets BC, row 3 gets DEF, row 4 gets GHIJ, row 5 gets KLMNO.",
    "input_format": "n=5",
    "output_format": "A\nBC\nDEF\nGHIJ\nKLMNO",
    "constraints": "5 rows. Letters are continuous A through O.",
    "sample_input": "n=5",
    "sample_output": "A\nBC\nDEF\nGHIJ\nKLMNO",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        char ch = 'A';
        int n = 5;
        // For each row i print i letters sequentially, incrementing ch each time
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1200,
    "title": "Alphabet Pattern – Right-Aligned Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "HCL"],
    "description": "Print a right-aligned triangle of alphabets. Row 1 has 4 leading spaces then A, row 5 has no leading spaces and prints ABCDE.",
    "input_format": "n=5",
    "output_format": "    A\n   AB\n  ABC\n ABCD\nABCDE",
    "constraints": "5 rows. Right-align using leading spaces.",
    "sample_input": "n=5",
    "sample_output": "    A\n   AB\n  ABC\n ABCD\nABCDE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: print (n-i) spaces then letters A to (char)('A'+i-1)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1201,
    "title": "Alphabet Pattern – V Shape Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Google"],
    "description": "Print a V-shape pattern using 5 rows. Each row has two letters at symmetric positions converging toward the centre bottom. Last row has only one letter at the tip.",
    "input_format": "n=5",
    "output_format": "A       A\n B     B\n  C   C\n   D D\n    E",
    "constraints": "n=5. Two letters per row except the last.",
    "sample_input": "n=5",
    "sample_output": "A       A\n B     B\n  C   C\n   D D\n    E",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: (i-1) leading spaces, letter, inner gap of 2*(n-i)-1 spaces, letter (skip second letter on last row)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1202,
    "title": "Alphabet Pattern – X Shape Letters",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": ["Google", "Microsoft"],
    "description": "Print an X pattern in a 5x5 grid. Only positions on the main diagonal (j==i) and anti-diagonal (j==n-1-i) are filled with the row's letter; all other positions are spaces.",
    "input_format": "n=5",
    "output_format": "A   E\n B C \n  C  \n D B \nE   A",
    "constraints": "5x5 grid. Main diagonal + anti-diagonal only.",
    "sample_input": "n=5",
    "sample_output": "A   E\n B C \n  C  \n D B \nE   A",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // For cell (i,j): print (char)('A'+i) if j==i or j==n-1-i, else space
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1203,
    "title": "Alphabet Pattern – Butterfly Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Infosys"],
    "description": "Print a butterfly pattern using alphabets. Upper half: row i prints i letters (A to i-th), inner spaces, then i letters again. Lower half mirrors it. n=5, 9 rows total.",
    "input_format": "n=5",
    "output_format": "A        A\nAB      AB\nABC    ABC\nABCD  ABCD\nABCDEABCDE\nABCD  ABCD\nABC    ABC\nAB      AB\nA        A",
    "constraints": "n=5. 9 rows total.",
    "sample_input": "n=5",
    "sample_output": "A        A\nAB      AB\nABC    ABC\nABCD  ABCD\nABCDEABCDE\nABCD  ABCD\nABC    ABC\nAB      AB\nA        A",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Upper half (i=1 to n): i letters, 2*(n-i) spaces, i letters
        // Lower half mirrors upper half
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1204,
    "title": "Alphabet Pattern – Square Border Letters",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "Cognizant"],
    "description": "Print a 4x4 hollow square where corners are A, top/bottom edge letters are B, left/right edge letters are C, and inside is spaces.",
    "input_format": "n=4",
    "output_format": "ABBA\nC  C\nC  C\nABBA",
    "constraints": "4x4 grid. A corners, B top/bottom, C sides.",
    "sample_input": "n=4",
    "sample_output": "ABBA\nC  C\nC  C\nABBA",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 4;
        // Corners (0,0),(0,n-1),(n-1,0),(n-1,n-1) = A
        // Top/bottom non-corner = B, left/right non-corner = C, inside = space
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1205,
    "title": "Alphabet Pattern – Inverted V (Caret) Shape",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Adobe"],
    "description": "Print an inverted V (caret) using alphabets. Row 1 has 4 spaces then A at the tip; each subsequent row places the next letter one step left and one step right symmetrically until row 5.",
    "input_format": "n=5",
    "output_format": "    A\n   B B\n  C   C\n D     D\nE       E",
    "constraints": "5 rows. Symmetric spread.",
    "sample_input": "n=5",
    "sample_output": "    A\n   B B\n  C   C\n D     D\nE       E",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: (n-i) spaces, letter, (2*i-3) inner spaces, letter (skip second for row 1)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1206,
    "title": "Alphabet Pattern – Spiral Letters",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": ["Google", "Amazon", "Microsoft"],
    "description": "Fill a 4x4 matrix with letters A-P in spiral order (clockwise from top-left) and print the matrix row by row with spaces between letters.",
    "input_format": "No input required.",
    "output_format": "A B C D\nL M N E\nK P O F\nJ I H G",
    "constraints": "4x4 matrix. Spiral clockwise from (0,0).",
    "sample_input": "",
    "sample_output": "A B C D\nL M N E\nK P O F\nJ I H G",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 4;
        char[][] mat = new char[n][n];
        char ch = 'A';
        // Fill mat in spiral order using top, right, bottom, left boundaries
        // Then print each row
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1207,
    "title": "Alphabet Pattern – Palindrome Rows",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Flipkart"],
    "description": "Print 5 rows where each row is a palindrome. Row 1: A, Row 2: ABA, Row 3: ABCBA, Row 4: ABCDCBA, Row 5: ABCDEDCBA.",
    "input_format": "n=5",
    "output_format": "A\nABA\nABCBA\nABCDCBA\nABCDEDCBA",
    "constraints": "5 rows. Each row is a palindrome of length 2*i-1.",
    "sample_input": "n=5",
    "sample_output": "A\nABA\nABCBA\nABCDCBA\nABCDEDCBA",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: print A to (char)('A'+i-1) then back to A (mirror)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1208,
    "title": "Alphabet Pattern – Column-wise Letters",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "HCL"],
    "description": "Print a 5x5 grid where each column j contains the letter at position j (A in col 0, B in col 1, …, E in col 4) repeated in every row.",
    "input_format": "n=5",
    "output_format": "ABCDE\nABCDE\nABCDE\nABCDE\nABCDE",
    "constraints": "5x5. Letter depends only on column index.",
    "sample_input": "n=5",
    "sample_output": "ABCDE\nABCDE\nABCDE\nABCDE\nABCDE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // For cell (i,j): print (char)('A'+j)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1209,
    "title": "Alphabet Pattern – Checkerboard AB",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Wipro", "TCS"],
    "description": "Print a 5x5 checkerboard alternating A and B. If (i+j) is even print A, else print B.",
    "input_format": "n=5",
    "output_format": "ABABA\nBABAB\nABABA\nBABAB\nABABA",
    "constraints": "5x5. Alternate A and B based on (i+j)%2.",
    "sample_input": "n=5",
    "sample_output": "ABABA\nBABAB\nABABA\nBABAB\nABABA",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Cell (i,j): (i+j)%2==0 ? 'A' : 'B'
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1210,
    "title": "Alphabet Pattern – Row Letter Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Accenture", "TCS"],
    "description": "Print a right triangle where all characters in row i are the i-th letter: row 1 prints A once, row 2 prints BB, row 3 prints CCC, up to row 5.",
    "input_format": "n=5",
    "output_format": "A\nBB\nCCC\nDDDD\nEEEEE",
    "constraints": "5 rows.",
    "sample_input": "n=5",
    "sample_output": "A\nBB\nCCC\nDDDD\nEEEEE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            // print (char)('A'+i-1) repeated i times, then newline
            System.out.println("  ");
        }
    }
}`
    }
  },
  {
    "id": 1211,
    "title": "Alphabet Pattern – K Shape Letters",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": ["Google", "Morgan Stanley"],
    "description": "Print the letter K shape in a 7-row grid. Column 0 of every row is always filled. The two diagonal arms branch from the middle row (row 3) outward.",
    "input_format": "No input required.",
    "output_format": "A   E\nA  D\nA C\nAB\nA C\nA  D\nA   E",
    "constraints": "7 rows. Column 0 always A; diagonal arm letter depends on distance from middle.",
    "sample_input": "",
    "sample_output": "A   E\nA  D\nA C\nAB\nA C\nA  D\nA   E",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int rows = 7;
        int mid = rows / 2;
        // For each row: print 'A', then spaces, then arm letter at position |i-mid|
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1212,
    "title": "Alphabet Pattern – Decreasing Letter Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["TCS", "Wipro"],
    "description": "Print a right triangle where row i contains letters from the i-th letter down to A: row 1 prints A, row 2 prints BA, row 3 prints CBA, and so on for 5 rows.",
    "input_format": "n=5",
    "output_format": "A\nBA\nCBA\nDCBA\nEDCBA",
    "constraints": "5 rows. Each row prints letters in reverse from (A+i-1) down to A.",
    "sample_input": "n=5",
    "sample_output": "A\nBA\nCBA\nDCBA\nEDCBA",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: print from (char)('A'+i-1) down to 'A'
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1213,
    "title": "Alphabet Pattern – Wave Pattern",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Amazon", "Infosys"],
    "description": "Print a 3-column wave pattern with 5 rows. Column 0 and 2 go A-B-C-D-E (forward); column 1 goes E-D-C-B-A (backward). Separate columns with a space.",
    "input_format": "n=5",
    "output_format": "A E A\nB D B\nC C C\nD B D\nE A E",
    "constraints": "5 rows, 3 columns. Col 0 and 2 forward, col 1 backward.",
    "sample_input": "n=5",
    "sample_output": "A E A\nB D B\nC C C\nD B D\nE A E",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: col0=(char)('A'+i), col1=(char)('A'+(n-1-i)), col2=(char)('A'+i)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1214,
    "title": "Alphabet Pattern – Cross (+) Shape",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Google", "Adobe"],
    "description": "Print a cross (+) shape in a 5x5 grid. The middle row (row 2) is filled with letters A-E; the middle column (col 2) is filled with letters A-E. All other positions are spaces.",
    "input_format": "n=5",
    "output_format": "  C  \n  C  \nABCDE\n  C  \n  C  ",
    "constraints": "5x5. Middle row index = n/2, middle col index = n/2.",
    "sample_input": "n=5",
    "sample_output": "  C  \n  C  \nABCDE\n  C  \n  C  ",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        int mid = n / 2;
        // Cell (i,j): if i==mid print (char)('A'+j), else if j==mid print (char)('A'+i), else space
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1215,
    "title": "Alphabet Pattern – Snake (Boustrophedon)",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Microsoft", "Amazon"],
    "description": "Fill a 4x4 matrix with letters A-P in boustrophedon (snake) order: left-to-right on even rows, right-to-left on odd rows. Print the matrix with spaces between letters.",
    "input_format": "No input required.",
    "output_format": "A B C D\nH G F E\nI J K L\nP O N M",
    "constraints": "4x4. Even rows L to R, odd rows R to L.",
    "sample_input": "",
    "sample_output": "A B C D\nH G F E\nI J K L\nP O N M",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 4;
        char[][] mat = new char[n][n];
        char ch = 'A';
        // Even rows fill left to right, odd rows fill right to left, then print
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1216,
    "title": "Alphabet Pattern – Z Shape Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Morgan Stanley"],
    "description": "Print the letter Z in a 5x5 grid. Top row and bottom row are fully filled with letters A-E. The diagonal from top-right to bottom-left has one letter per row.",
    "input_format": "n=5",
    "output_format": "ABCDE\n   D \n  C  \n B   \nABCDE",
    "constraints": "5x5 grid. Z outline only.",
    "sample_input": "n=5",
    "sample_output": "ABCDE\n   D \n  C  \n B   \nABCDE",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row 0, Row n-1: print all letters A to E
        // Middle rows i: only position (n-1-i) gets letter (char)('A'+(n-1-i))
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1217,
    "title": "Alphabet Pattern – Mirrored Decreasing Triangle",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": ["Infosys", "Accenture"],
    "description": "Print a right triangle where row i contains i letters starting from the i-th letter down to A in reverse. Row 1: A, Row 2: BA, Row 3: CBA, Row 4: DCBA, Row 5: EDCBA.",
    "input_format": "n=5",
    "output_format": "A\nBA\nCBA\nDCBA\nEDCBA",
    "constraints": "5 rows.",
    "sample_input": "n=5",
    "sample_output": "A\nBA\nCBA\nDCBA\nEDCBA",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Row i: loop j from i down to 1, print (char)('A'+j-1)
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1218,
    "title": "Alphabet Pattern – Hollow Diamond Letters",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": ["Amazon", "Google", "Microsoft"],
    "description": "Print a hollow diamond of alphabets with n=5. Only the outline of the diamond is printed using the row's letter; the interior is filled with spaces.",
    "input_format": "n=5",
    "output_format": "    A\n   B B\n  C   C\n D     D\nE       E\n D     D\n  C   C\n   B B\n    A",
    "constraints": "n=5. Hollow outline only. 9 rows.",
    "sample_input": "n=5",
    "sample_output": "    A\n   B B\n  C   C\n D     D\nE       E\n D     D\n  C   C\n   B B\n    A",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Upper half row i (1 to n): (n-i) spaces, letter, (2*i-3) spaces, letter (omit second for i==1)
        // Lower half mirrors upper half
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1219,
    "title": "Alphabet Pattern – Number-Letter Combo Triangle",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["TCS", "Wipro"],
    "description": "Print a triangle where each cell shows the row number followed by the column letter. Row 1: 1A. Row 2: 2A 2B. Row 3: 3A 3B 3C. Row 4: 4A 4B 4C 4D.",
    "input_format": "n=4",
    "output_format": "1A\n2A 2B\n3A 3B 3C\n4A 4B 4C 4D",
    "constraints": "4 rows. Format per cell: rowNumber + colLetter.",
    "sample_input": "n=4",
    "sample_output": "1A\n2A 2B\n3A 3B 3C\n4A 4B 4C 4D",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 4;
        // Row i, col j: print i + "" + (char)('A'+j-1), separated by spaces
        System.out.println("  ");
    }
}`
    }
  },
  {
    "id": 1220,
    "title": "Alphabet Pattern – Left Arrow Letters",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": ["Adobe", "Flipkart"],
    "description": "Print a left-pointing arrow shape using 9 rows. The middle row (row 5) is longest: ABCDE. Rows above and below shrink by one letter each time, right-aligned.",
    "input_format": "n=5",
    "output_format": "    E\n   DE\n  CDE\n BCDE\nABCDE\n BCDE\n  CDE\n   DE\n    E",
    "constraints": "n=5. 9 rows total. Symmetric above and below middle.",
    "sample_input": "n=5",
    "sample_output": "    E\n   DE\n  CDE\n BCDE\nABCDE\n BCDE\n  CDE\n   DE\n    E",
    "starter_code": {
      "java": `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Distance from middle d = |row - (n-1)|
        // Row at distance d: print d spaces then letters from (char)('A'+d) to (char)('A'+n-1)
        System.out.println("  ");
    }
}`
    }
  },
];

export const getCategories = () => [...new Set(problems.map(p => p.category))];
export const getCompanies = () => [...new Set(problems.flatMap(p => p.company_tags))].sort();
export const getProblemById = (id: number) => problems.find(p => p.id === id);
export const getDailyChallenge = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return problems[dayOfYear % problems.length];

};