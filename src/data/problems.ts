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
];

export const getCategories = () => [...new Set(problems.map(p => p.category))];
export const getCompanies = () => [...new Set(problems.flatMap(p => p.company_tags))].sort();
export const getProblemById = (id: number) => problems.find(p => p.id === id);
export const getDailyChallenge = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return problems[dayOfYear % problems.length];

};