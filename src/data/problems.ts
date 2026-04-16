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
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Flipkart"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 2,
    "title": "Two Sum #2",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Flipkart", "Google"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 3,
    "title": "Kth Largest Element in an Array #3",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Meta", "Uber", "Intuit"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 4,
    "title": "Merge Intervals – Adjacent #4",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Flipkart"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 5,
    "title": "Maximum Subarray #5",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Oracle", "Netflix"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 6,
    "title": "Longest Substring Without Repeating Characters #6",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Meta", "Oracle", "Intuit"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 7,
    "title": "Valid Parentheses #7",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Goldman Sachs"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 8,
    "title": "Top K Frequent Elements #8",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Intuit", "SAP"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 9,
    "title": "Minimum Window Substring #9",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Morgan Stanley", "Adobe", "Flipkart"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 10,
    "title": "Word Ladder #10",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "SAP"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 11,
    "title": "Binary Tree Inorder Traversal #11",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Netflix", "Flipkart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 12,
    "title": "Product of Array Except Self #12",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Netflix", "Google", "Amazon"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 13,
    "title": "Valid Parentheses – Nested #13",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Amazon"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 14,
    "title": "Detect Cycle in Linked List #14",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Goldman Sachs", "Google"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 15,
    "title": "Container With Most Water #15",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Uber", "SAP", "Oracle"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 16,
    "title": "Maximum Water Container – Two Pointer #16",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Intuit"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 17,
    "title": "Inorder Traversal – Iterative #17",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Goldman Sachs", "Walmart"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 18,
    "title": "Inorder Traversal – Morris #18",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Adobe", "SAP", "Meta"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 19,
    "title": "Course Schedule #19",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "SAP"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 20,
    "title": "Climbing Stairs #20",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Morgan Stanley", "Netflix"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 21,
    "title": "Climbing Stairs – 3 Steps #21",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Adobe", "Intuit", "Uber"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 22,
    "title": "Rotate Image #22",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Google"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 23,
    "title": "Minimum Window – Repeating Chars #23",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Flipkart", "Intuit"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 24,
    "title": "Container Water – Brute Force vs Optimal #24",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Flipkart", "Netflix", "Walmart"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 25,
    "title": "Inorder Traversal – Empty Tree #25",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Goldman Sachs"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 26,
    "title": "Rotate Matrix 180° #26",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Netflix", "SAP"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 27,
    "title": "Reverse Linked List #27",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Netflix", "Microsoft", "Intuit"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 28,
    "title": "Merge Overlapping Intervals #28",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Morgan Stanley"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 29,
    "title": "LRU Cache #29",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Adobe", "Google"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 30,
    "title": "Water Container – Increasing Heights #30",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "SAP", "Adobe", "Flipkart"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 31,
    "title": "Course Schedule – Cycle Detected #31",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Adobe"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 32,
    "title": "Coin Change #32",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Morgan Stanley", "Goldman Sachs"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 33,
    "title": "Coin Change – No Solution #33",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "SAP", "Uber", "Netflix"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 34,
    "title": "Binary Tree Inorder Traversal #34",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Amazon"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 35,
    "title": "Container With Most Water #35",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Adobe", "SAP"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 36,
    "title": "Rotate Image – Counter-Clockwise #36",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Amazon", "Meta", "Adobe"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 37,
    "title": "Kth Largest – QuickSelect #37",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Uber"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 38,
    "title": "Insert and Merge Interval #38",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Intuit", "Microsoft"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 39,
    "title": "Maximum Subarray – All Negative #39",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Meta", "Intuit", "Morgan Stanley"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 40,
    "title": "Number of Islands #40",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Morgan Stanley"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 41,
    "title": "Coin Change – Unlimited Supply #41",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Oracle", "Walmart"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 42,
    "title": "Longest Unique Substring – All Unique #42",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Walmart", "Flipkart", "Google"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 43,
    "title": "Longest No-Repeat Substring – Sliding Window #43",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Oracle"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 44,
    "title": "Word Ladder – No Path #44",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Goldman Sachs", "Intuit"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 45,
    "title": "Top K Frequent – Bucket Sort #45",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Adobe", "Intuit", "Netflix"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 46,
    "title": "LRU Cache – HashMap + Doubly Linked List #46",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Goldman Sachs"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 47,
    "title": "Climbing Stairs – Fibonacci Pattern #47",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Oracle", "Goldman Sachs"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 48,
    "title": "Two Sum – Negative Values #48",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Intuit", "Oracle", "Google"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 49,
    "title": "Valid Parentheses – Invalid Case #49",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Google"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 50,
    "title": "Word Ladder – BFS Approach #50",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Intuit", "Meta"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 51,
    "title": "LRU Cache – Eviction Policy #51",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Uber", "Goldman Sachs", "Amazon"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 52,
    "title": "Merge Intervals #52",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Amazon"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 53,
    "title": "Two Sum – Unsorted Array #53",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Microsoft", "SAP"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 54,
    "title": "LRU Cache – Update Existing Key #54",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Amazon", "Uber", "Apple"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 55,
    "title": "K Most Frequent – Min Heap #55",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Flipkart"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 56,
    "title": "Climbing Stairs – Memoization #56",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Netflix", "Morgan Stanley"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 57,
    "title": "LRU Cache #57",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Morgan Stanley", "Meta", "Microsoft"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 58,
    "title": "Linked List Cycle – No Cycle #58",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Adobe"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 59,
    "title": "Maximum Water Container – Two Pointer #59",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Netflix", "Amazon"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 60,
    "title": "Longest No-Repeat Substring – Single Char #60",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Morgan Stanley", "Oracle", "SAP"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 61,
    "title": "Valid Brackets – Stack Approach #61",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Intuit"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 62,
    "title": "Reverse Linked List – Recursive #62",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Morgan Stanley", "Amazon"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 63,
    "title": "Valid Parentheses #63",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Flipkart", "Google", "Oracle"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 64,
    "title": "Bidirectional Word Ladder #64",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Walmart"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 65,
    "title": "Word Ladder #65",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "SAP", "Walmart"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 66,
    "title": "Two Sum – Duplicates Allowed #66",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "SAP", "Google", "Amazon"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 67,
    "title": "Islands – BFS #67",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Google"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 68,
    "title": "Inorder Traversal – Iterative #68",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Google", "Netflix"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 69,
    "title": "Two Sum #69",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Morgan Stanley", "Apple", "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 70,
    "title": "LRU Cache – HashMap + Doubly Linked List #70",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Walmart"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 71,
    "title": "Reverse Sublist #71",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Meta", "Goldman Sachs"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 72,
    "title": "Smallest Window Containing Pattern #72",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Oracle", "Intuit", "Uber"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 73,
    "title": "Word Ladder – No Path #73",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Meta"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 74,
    "title": "LRU Cache – Eviction Policy #74",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Netflix", "Flipkart"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 75,
    "title": "Valid Parentheses – Nested #75",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Intuit", "Flipkart", "Google"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 76,
    "title": "LRU Cache – Update Existing Key #76",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Apple"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 77,
    "title": "Inorder Traversal – Morris #77",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "SAP", "Morgan Stanley"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 78,
    "title": "Container Water – Brute Force vs Optimal #78",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Microsoft", "Google", "Goldman Sachs"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 79,
    "title": "Rotate Image – Transpose then Flip #79",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Morgan Stanley"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 80,
    "title": "Minimum Window – No Solution Case #80",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Apple", "Goldman Sachs"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 81,
    "title": "Kth Largest – Sorted Approach #81",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Adobe", "Intuit", "Meta"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 82,
    "title": "Word Ladder – BFS Approach #82",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Walmart"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 83,
    "title": "Kth Smallest Element #83",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Netflix", "Walmart"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 84,
    "title": "Climbing Stairs #84",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Intuit", "Meta", "Apple"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 85,
    "title": "Climbing Stairs – 3 Steps #85",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Flipkart"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 86,
    "title": "Bidirectional Word Ladder #86",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Goldman Sachs", "Flipkart"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 87,
    "title": "Maximum Subarray – Start and End Index #87",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Adobe", "Microsoft", "Morgan Stanley"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 88,
    "title": "Inorder Traversal – Empty Tree #88",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Morgan Stanley"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 89,
    "title": "Reverse Linked List in Groups #89",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Intuit", "Adobe"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Google", "Flipkart", "Goldman Sachs", "Uber"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 91,
    "title": "Longest Substring Without Repeating Characters #91",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Oracle"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 92,
    "title": "Word Ladder #92",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Oracle", "SAP"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 93,
    "title": "Reverse Linked List #93",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Netflix", "Google", "Adobe"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 94,
    "title": "Reverse Linked List – Recursive #94",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Microsoft"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 95,
    "title": "Word Ladder – No Path #95",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "SAP", "Flipkart"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 96,
    "title": "Kth Largest Element in an Array #96",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Uber", "Morgan Stanley", "Netflix"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 97,
    "title": "Islands – Union-Find #97",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Apple"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 98,
    "title": "LRU Cache #98",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "SAP", "Oracle"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 99,
    "title": "Two Sum – Negative Values #99",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Meta", "Amazon", "Oracle"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 100,
    "title": "Rotate Image #100",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Netflix"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 101,
    "title": "Islands – Single Row #101",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Goldman Sachs", "Intuit"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 102,
    "title": "LRU Cache – HashMap + Doubly Linked List #102",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Walmart", "Uber", "SAP"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 103,
    "title": "Binary Tree Inorder Traversal #103",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Walmart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 104,
    "title": "Coin Change – Number of Ways #104",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Netflix", "Apple"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 105,
    "title": "Minimum Window – Repeating Chars #105",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Microsoft", "Apple", "Morgan Stanley"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 106,
    "title": "Rotate Matrix 180° #106",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Goldman Sachs"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 107,
    "title": "Number of Islands #107",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Microsoft", "Morgan Stanley"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 108,
    "title": "Course Schedule – Order #108",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Microsoft", "Intuit", "Google"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 109,
    "title": "Smallest Window Containing Pattern #109",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Adobe"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 110,
    "title": "Valid Parentheses – Invalid Case #110",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Flipkart", "Netflix"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 111,
    "title": "LRU Cache – Eviction Policy #111",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Amazon", "Microsoft", "Flipkart"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 112,
    "title": "Cycle Start Node #112",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Apple"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 113,
    "title": "Top K Elements – HashMap + Sort #113",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Intuit", "Google"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 114,
    "title": "Two Sum – Unsorted Array #114",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Goldman Sachs", "Uber", "Oracle"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 115,
    "title": "Islands – BFS #115",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Goldman Sachs"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 116,
    "title": "Longest Unique Substring – All Unique #116",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Google", "Morgan Stanley"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 117,
    "title": "Water Container – Increasing Heights #117",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Netflix", "Flipkart", "Adobe"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 118,
    "title": "Reverse Sublist #118",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Walmart"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 119,
    "title": "Coin Change #119",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Oracle", "Morgan Stanley"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 120,
    "title": "Top K Frequent Elements #120",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Intuit", "Netflix", "Oracle"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 121,
    "title": "Product Except Self – With Zero #121",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Apple"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 122,
    "title": "Climbing Stairs – Fibonacci Pattern #122",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Apple", "Google"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 123,
    "title": "Coin Change – No Solution #123",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "SAP", "Google", "Flipkart"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 124,
    "title": "Single Node Cycle #124",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Meta"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 125,
    "title": "LRU Cache – Update Existing Key #125",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Adobe", "Oracle"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 126,
    "title": "Reverse Linked List in Groups #126",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Adobe", "Intuit", "Google"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 127,
    "title": "Coin Change – Unlimited Supply #127",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Uber"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 128,
    "title": "Longest No-Repeat Substring – Sliding Window #128",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Adobe", "Netflix"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 129,
    "title": "Product Array – O(1) Space #129",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Intuit", "SAP", "Flipkart"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 130,
    "title": "Climbing Stairs – Memoization #130",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Adobe"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 131,
    "title": "Reverse Linked List #131",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Netflix", "SAP"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 132,
    "title": "Container With Most Water #132",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Morgan Stanley", "Walmart", "Oracle"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 133,
    "title": "Rotate Image – Counter-Clockwise #133",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Flipkart"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 134,
    "title": "Left and Right Product Arrays #134",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Uber", "Amazon"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 135,
    "title": "Rotate Image – Transpose then Flip #135",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Apple", "Uber", "Netflix"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 136,
    "title": "Coin Change – Number of Ways #136",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Goldman Sachs"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 137,
    "title": "Two Sum – Duplicates Allowed #137",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Microsoft", "Walmart"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 138,
    "title": "Word Ladder – BFS Approach #138",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Goldman Sachs", "SAP", "Oracle"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 139,
    "title": "Course Schedule – Topological Sort #139",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Intuit"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 140,
    "title": "Merge Intervals – Adjacent #140",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Adobe", "Meta"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 141,
    "title": "Two Sum #141",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Meta", "Microsoft", "Adobe"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 142,
    "title": "Two Sum – Negative Values #142",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Amazon"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 143,
    "title": "Inorder Traversal – Iterative #143",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Amazon", "Meta"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 144,
    "title": "Climbing Stairs #144",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Walmart", "Morgan Stanley", "Adobe"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 145,
    "title": "Minimum Window – No Solution Case #145",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Oracle"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 146,
    "title": "Rotate Image #146",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Amazon", "Flipkart"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 147,
    "title": "Rotate Matrix 180° #147",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Uber", "Goldman Sachs", "Meta"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 148,
    "title": "Kth Largest – QuickSelect #148",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Google"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 149,
    "title": "Climbing Stairs – 3 Steps #149",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Goldman Sachs", "Morgan Stanley"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 150,
    "title": "LRU Cache #150",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Meta", "Netflix", "Adobe"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 151,
    "title": "Top K Frequent – Bucket Sort #151",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "SAP"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 152,
    "title": "Rotate Image – Counter-Clockwise #152",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Adobe", "Microsoft"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 153,
    "title": "Merge Overlapping Intervals #153",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Walmart", "Goldman Sachs", "Apple"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 154,
    "title": "Course Schedule #154",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Intuit"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 155,
    "title": "Maximum Water Container – Two Pointer #155",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Goldman Sachs", "Netflix"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 156,
    "title": "Coin Change #156",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Google", "Netflix", "Amazon"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 157,
    "title": "Inorder Traversal – Morris #157",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "SAP"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 158,
    "title": "Climbing Stairs – Fibonacci Pattern #158",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Oracle", "Intuit"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 159,
    "title": "Climbing Stairs – Memoization #159",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Intuit", "Oracle", "Apple"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 160,
    "title": "Two Sum – Unsorted Array #160",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Amazon"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 161,
    "title": "Minimum Window Substring #161",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Oracle", "Google"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 162,
    "title": "Bidirectional Word Ladder #162",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Intuit", "Walmart", "Apple"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 163,
    "title": "Product of Array Except Self #163",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "SAP"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 164,
    "title": "K Most Frequent – Min Heap #164",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "SAP", "Google"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 165,
    "title": "Valid Brackets – Stack Approach #165",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Oracle", "Microsoft", "Goldman Sachs"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 166,
    "title": "Inorder Traversal – Empty Tree #166",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Apple"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 167,
    "title": "Valid Parentheses #167",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Adobe", "Amazon"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 168,
    "title": "Longest No-Repeat Substring – Single Char #168",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Microsoft", "Adobe", "Goldman Sachs"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 169,
    "title": "Coin Change – No Solution #169",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Google"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 170,
    "title": "Minimum Window – Repeating Chars #170",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Google", "Adobe"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 171,
    "title": "Word Ladder #171",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Goldman Sachs", "Adobe", "SAP"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 172,
    "title": "Islands – Union-Find #172",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Apple"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 173,
    "title": "Coin Change – Unlimited Supply #173",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Microsoft", "Goldman Sachs"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 174,
    "title": "Product Except Self – With Zero #174",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Apple", "Uber", "Microsoft"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 175,
    "title": "Valid Parentheses – Nested #175",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Flipkart"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 176,
    "title": "Smallest Window Containing Pattern #176",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Netflix", "Amazon"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 177,
    "title": "Top K Elements – HashMap + Sort #177",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Flipkart", "Walmart", "Microsoft"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 178,
    "title": "Climbing Stairs #178",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Amazon"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 179,
    "title": "Coin Change – Number of Ways #179",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Morgan Stanley", "Microsoft"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 180,
    "title": "LRU Cache – HashMap + Doubly Linked List #180",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Uber", "Netflix", "Microsoft"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 181,
    "title": "Reverse Linked List – Recursive #181",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "SAP"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 182,
    "title": "Product Array – O(1) Space #182",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Oracle", "Adobe"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 183,
    "title": "Container Water – Brute Force vs Optimal #183",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "SAP", "Goldman Sachs", "Google"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 184,
    "title": "Left and Right Product Arrays #184",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Adobe"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 185,
    "title": "Insert and Merge Interval #185",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Amazon", "Goldman Sachs"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 186,
    "title": "Binary Tree Inorder Traversal #186",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley", "Google", "Walmart"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 187,
    "title": "Water Container – Increasing Heights #187",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Apple"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 188,
    "title": "Valid Parentheses – Invalid Case #188",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Apple", "Flipkart"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 189,
    "title": "Longest Substring Without Repeating Characters #189",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Flipkart", "Goldman Sachs", "Adobe"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 190,
    "title": "Minimum Window – No Solution Case #190",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Uber"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 191,
    "title": "Detect Cycle in Linked List #191",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Uber", "Oracle"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 192,
    "title": "Word Ladder – No Path #192",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Apple", "Morgan Stanley", "Google"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 193,
    "title": "Top K Frequent Elements #193",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Goldman Sachs"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 194,
    "title": "Course Schedule – Cycle Detected #194",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Uber", "Netflix"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 195,
    "title": "Coin Change #195",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Flipkart", "Intuit", "Adobe"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 196,
    "title": "Reverse Sublist #196",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "SAP"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 197,
    "title": "Reverse Linked List in Groups #197",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Morgan Stanley", "Apple"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 198,
    "title": "Maximum Subarray – Kadane's Algorithm #198",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "SAP", "Uber", "Adobe"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 199,
    "title": "Inorder Traversal – Iterative #199",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Uber"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 200,
    "title": "Course Schedule – Order #200",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Amazon", "Goldman Sachs"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 201,
    "title": "Islands – Single Row #201",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Morgan Stanley", "Goldman Sachs", "Adobe"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 202,
    "title": "Inorder Traversal – Morris #202",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "SAP"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 203,
    "title": "Reverse Linked List #203",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Amazon", "Walmart"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 204,
    "title": "Merge Intervals #204",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Uber", "Intuit", "Microsoft"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 205,
    "title": "Word Ladder – BFS Approach #205",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Netflix"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Netflix", "Microsoft", "Flipkart"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 207,
    "title": "Product of Array Except Self #207",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "SAP", "Intuit", "Uber"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 208,
    "title": "Two Sum – Duplicates Allowed #208",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Uber"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 209,
    "title": "Valid Brackets – Stack Approach #209",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Flipkart", "Amazon"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 210,
    "title": "Valid Parentheses #210",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Netflix", "Meta", "Oracle"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 211,
    "title": "Top K Frequent – Bucket Sort #211",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Adobe"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 212,
    "title": "LRU Cache – Eviction Policy #212",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Adobe", "Microsoft"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 213,
    "title": "LRU Cache – Update Existing Key #213",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Meta", "Goldman Sachs", "SAP"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 214,
    "title": "Valid Parentheses – Nested #214",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Adobe"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 215,
    "title": "Kth Largest – Sorted Approach #215",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Flipkart", "Intuit"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 216,
    "title": "Climbing Stairs – 3 Steps #216",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Uber", "Intuit", "Adobe"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 217,
    "title": "Linked List Cycle – No Cycle #217",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "SAP"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 218,
    "title": "Kth Smallest Element #218",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Google", "Walmart"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 219,
    "title": "Bidirectional Word Ladder #219",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Intuit", "Adobe", "Goldman Sachs"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 220,
    "title": "LRU Cache #220",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Adobe"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 221,
    "title": "Cycle Start Node #221",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Goldman Sachs", "Google"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 222,
    "title": "Maximum Subarray #222",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Intuit", "Walmart", "Google"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 223,
    "title": "Maximum Subarray – All Negative #223",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Microsoft"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 224,
    "title": "Merge Intervals – Adjacent #224",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Oracle", "Walmart"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 225,
    "title": "Merge Overlapping Intervals #225",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Uber", "Google", "Walmart"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 226,
    "title": "Two Sum #226",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Goldman Sachs"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 227,
    "title": "Coin Change – No Solution #227",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Amazon", "Netflix"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 228,
    "title": "Insert and Merge Interval #228",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Morgan Stanley", "Apple", "Microsoft"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 229,
    "title": "Single Node Cycle #229",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Microsoft"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 230,
    "title": "Valid Parentheses – Invalid Case #230",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Netflix", "Flipkart"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 231,
    "title": "Kth Largest Element in an Array #231",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Oracle", "Amazon", "Intuit"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 232,
    "title": "Course Schedule – Topological Sort #232",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Flipkart"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 233,
    "title": "K Most Frequent – Min Heap #233",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Adobe", "Netflix"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 234,
    "title": "Container With Most Water #234",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Netflix", "Apple", "Amazon"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 235,
    "title": "Kth Largest – QuickSelect #235",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Intuit"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 236,
    "title": "Product Except Self – With Zero #236",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "SAP", "Flipkart"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 237,
    "title": "Longest Unique Substring – All Unique #237",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Meta", "SAP", "Morgan Stanley"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 238,
    "title": "Maximum Subarray – Start and End Index #238",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Oracle"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 239,
    "title": "Maximum Subarray – Kadane's Algorithm #239",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Adobe", "Meta"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 240,
    "title": "Merge Intervals #240",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Netflix", "Morgan Stanley", "Goldman Sachs"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 241,
    "title": "Longest No-Repeat Substring – Sliding Window #241",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Meta"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 242,
    "title": "Top K Elements – HashMap + Sort #242",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Google", "Oracle"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 243,
    "title": "LRU Cache – HashMap + Doubly Linked List #243",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Meta", "Uber", "SAP"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 244,
    "title": "Coin Change – Unlimited Supply #244",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Walmart"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 245,
    "title": "Merge Intervals – Adjacent #245",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Meta", "Apple"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 246,
    "title": "Reverse Linked List – Recursive #246",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Oracle", "Meta", "Uber"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 247,
    "title": "Two Sum – Negative Values #247",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Flipkart"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 248,
    "title": "Word Ladder #248",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Goldman Sachs", "Uber"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 249,
    "title": "Course Schedule #249",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Google", "Goldman Sachs", "Morgan Stanley"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 250,
    "title": "Merge Overlapping Intervals #250",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Amazon"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 251,
    "title": "Coin Change – Number of Ways #251",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Apple", "Oracle"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 252,
    "title": "Number of Islands #252",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Apple", "Amazon", "Google"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 253,
    "title": "Reverse Sublist #253",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "SAP"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 254,
    "title": "Two Sum – Unsorted Array #254",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Walmart", "Netflix"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 255,
    "title": "Insert and Merge Interval #255",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Adobe", "Walmart", "Oracle"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 256,
    "title": "Maximum Water Container – Two Pointer #256",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Meta"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 257,
    "title": "Word Ladder – No Path #257",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Walmart", "Meta"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 258,
    "title": "Maximum Subarray #258",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "SAP", "Microsoft", "Adobe"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 259,
    "title": "Coin Change #259",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Adobe"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 260,
    "title": "LRU Cache – Eviction Policy #260",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Oracle", "Apple"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 261,
    "title": "Rotate Image – Transpose then Flip #261",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Intuit", "Oracle", "Flipkart"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Walmart", "Flipkart"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 263,
    "title": "Climbing Stairs – Fibonacci Pattern #263",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Apple", "Meta"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 264,
    "title": "Climbing Stairs – Memoization #264",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Goldman Sachs", "Adobe", "Google"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 265,
    "title": "Maximum Subarray – All Negative #265",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Walmart"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 266,
    "title": "Kth Largest – Sorted Approach #266",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Google", "Flipkart"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 267,
    "title": "Kth Smallest Element #267",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Microsoft", "Morgan Stanley", "Netflix"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 268,
    "title": "LRU Cache – Update Existing Key #268",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "SAP"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 269,
    "title": "Detect Cycle in Linked List #269",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Walmart", "Flipkart"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 270,
    "title": "Word Ladder – BFS Approach #270",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Uber", "Microsoft", "Intuit"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 271,
    "title": "Minimum Window – Repeating Chars #271",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Intuit"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 272,
    "title": "Container Water – Brute Force vs Optimal #272",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Amazon", "Apple"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 273,
    "title": "Valid Brackets – Stack Approach #273",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Goldman Sachs", "Google", "Microsoft"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 274,
    "title": "Longest No-Repeat Substring – Single Char #274",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Netflix"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 275,
    "title": "Coin Change – No Solution #275",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Morgan Stanley", "Goldman Sachs"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 276,
    "title": "Rotate Matrix 180° #276",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Meta", "Walmart", "Adobe"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 277,
    "title": "Climbing Stairs #277",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 278,
    "title": "Coin Change – Unlimited Supply #278",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley", "Netflix"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 279,
    "title": "Two Sum – Duplicates Allowed #279",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Microsoft", "Goldman Sachs", "Uber"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 280,
    "title": "Climbing Stairs – 3 Steps #280",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Meta"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 281,
    "title": "Inorder Traversal – Empty Tree #281",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Uber", "Microsoft"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 282,
    "title": "Bidirectional Word Ladder #282",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Netflix", "Morgan Stanley", "Microsoft"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 283,
    "title": "Longest Substring Without Repeating Characters #283",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Apple"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 284,
    "title": "Reverse Linked List in Groups #284",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Oracle", "Intuit"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 285,
    "title": "Linked List Cycle – No Cycle #285",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Morgan Stanley", "Goldman Sachs", "SAP"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 286,
    "title": "LRU Cache #286",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Intuit"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 287,
    "title": "Rotate Image – Counter-Clockwise #287",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Google", "SAP"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 288,
    "title": "Cycle Start Node #288",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Intuit", "SAP", "Walmart"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 289,
    "title": "Climbing Stairs – Fibonacci Pattern #289",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Amazon"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 290,
    "title": "Top K Frequent Elements #290",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Morgan Stanley", "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 291,
    "title": "Two Sum #291",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Amazon", "Oracle", "Uber"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 292,
    "title": "Merge Intervals #292",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Intuit"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 293,
    "title": "Single Node Cycle #293",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Uber", "Walmart"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 294,
    "title": "Binary Tree Inorder Traversal #294",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Netflix", "Google", "Oracle"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 295,
    "title": "Reverse Linked List #295",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Apple"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 296,
    "title": "Inorder Traversal – Iterative #296",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Meta", "Intuit"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 297,
    "title": "Course Schedule – Cycle Detected #297",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Oracle", "Meta", "Adobe"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 298,
    "title": "Maximum Subarray – Start and End Index #298",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Microsoft"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 299,
    "title": "Climbing Stairs – Memoization #299",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google", "Walmart"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 300,
    "title": "Product Array – O(1) Space #300",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Intuit", "Uber", "Flipkart"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 301,
    "title": "Detect Cycle in Linked List #301",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Meta"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 302,
    "title": "Climbing Stairs #302",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Oracle", "SAP"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 303,
    "title": "Kth Largest Element in an Array #303",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Intuit", "Netflix", "Flipkart"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 304,
    "title": "Two Sum – Negative Values #304",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Goldman Sachs"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 305,
    "title": "Rotate Image – Transpose then Flip #305",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Netflix", "Walmart"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 306,
    "title": "Merge Intervals – Adjacent #306",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Meta", "Google", "Amazon"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 307,
    "title": "Climbing Stairs – 3 Steps #307",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Adobe"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 308,
    "title": "Reverse Linked List – Recursive #308",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "SAP", "Morgan Stanley"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 309,
    "title": "Left and Right Product Arrays #309",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Google", "Amazon", "Morgan Stanley"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 310,
    "title": "Water Container – Increasing Heights #310",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "SAP"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 311,
    "title": "Valid Parentheses #311",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "SAP", "Google"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 312,
    "title": "Linked List Cycle – No Cycle #312",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Flipkart", "Netflix", "Meta"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 313,
    "title": "Merge Overlapping Intervals #313",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Morgan Stanley"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 314,
    "title": "Insert and Merge Interval #314",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Amazon", "Goldman Sachs"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 315,
    "title": "Course Schedule – Order #315",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Walmart", "Flipkart", "Netflix"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 316,
    "title": "Longest Unique Substring – All Unique #316",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Meta"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 317,
    "title": "Climbing Stairs – Fibonacci Pattern #317",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Apple", "Amazon"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 318,
    "title": "Coin Change – Number of Ways #318",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Apple", "Amazon", "Microsoft"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 319,
    "title": "Islands – BFS #319",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Intuit"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 320,
    "title": "Smallest Window Containing Pattern #320",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Meta", "Flipkart"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 321,
    "title": "Two Sum – Unsorted Array #321",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Apple", "Uber", "Morgan Stanley"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 322,
    "title": "Reverse Sublist #322",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Google"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 323,
    "title": "Top K Frequent – Bucket Sort #323",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Goldman Sachs", "Google"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 324,
    "title": "Reverse Linked List in Groups #324",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Goldman Sachs", "Intuit", "Flipkart"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 325,
    "title": "Valid Parentheses – Nested #325",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Meta"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 326,
    "title": "Valid Parentheses – Invalid Case #326",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Meta", "SAP"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 327,
    "title": "Climbing Stairs – Memoization #327",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Meta", "Walmart", "Flipkart"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 328,
    "title": "Longest No-Repeat Substring – Sliding Window #328",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Intuit"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 329,
    "title": "LRU Cache – HashMap + Doubly Linked List #329",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Apple", "Microsoft"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 330,
    "title": "Course Schedule – Topological Sort #330",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Walmart", "Microsoft", "Flipkart"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 331,
    "title": "Word Ladder #331",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Adobe"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 332,
    "title": "Word Ladder – No Path #332",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Morgan Stanley", "Uber"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 333,
    "title": "Two Sum – Duplicates Allowed #333",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Adobe", "Intuit", "Netflix"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 334,
    "title": "Cycle Start Node #334",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Google"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 335,
    "title": "K Most Frequent – Min Heap #335",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Apple", "Adobe"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 336,
    "title": "Islands – Union-Find #336",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "SAP", "Morgan Stanley", "Apple"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 337,
    "title": "Single Node Cycle #337",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "SAP"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 338,
    "title": "Kth Largest – QuickSelect #338",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Amazon", "Oracle"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 339,
    "title": "Valid Brackets – Stack Approach #339",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Goldman Sachs", "Flipkart", "Microsoft"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 340,
    "title": "Kth Largest – Sorted Approach #340",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Intuit"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 341,
    "title": "Top K Elements – HashMap + Sort #341",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Google", "Netflix"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 342,
    "title": "Word Ladder – BFS Approach #342",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Uber", "Amazon", "Meta"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 343,
    "title": "Detect Cycle in Linked List #343",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Goldman Sachs"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 344,
    "title": "Longest No-Repeat Substring – Single Char #344",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Uber", "Flipkart"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 345,
    "title": "Kth Smallest Element #345",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Intuit", "Morgan Stanley", "Adobe"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 346,
    "title": "LRU Cache – Eviction Policy #346",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Goldman Sachs"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 347,
    "title": "Container With Most Water #347",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Microsoft", "Uber"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 348,
    "title": "Linked List Cycle – No Cycle #348",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Google", "Oracle", "Amazon"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 349,
    "title": "Valid Parentheses #349",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Goldman Sachs"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 350,
    "title": "Course Schedule #350",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Flipkart", "Amazon"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 351,
    "title": "Valid Parentheses – Nested #351",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Google", "Walmart", "Meta"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 352,
    "title": "Minimum Window – No Solution Case #352",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Microsoft"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 353,
    "title": "Longest Substring Without Repeating Characters #353",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Netflix", "Uber"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 354,
    "title": "Cycle Start Node #354",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Microsoft", "Flipkart", "Meta"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 355,
    "title": "Inorder Traversal – Morris #355",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Goldman Sachs"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 356,
    "title": "Product of Array Except Self #356",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Flipkart", "Goldman Sachs"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 357,
    "title": "Bidirectional Word Ladder #357",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Netflix", "Goldman Sachs", "Meta"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 358,
    "title": "Valid Parentheses – Invalid Case #358",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Adobe"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 359,
    "title": "Single Node Cycle #359",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Microsoft", "Morgan Stanley"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 360,
    "title": "Product Except Self – With Zero #360",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Meta", "Microsoft", "Netflix"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 361,
    "title": "Coin Change #361",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Adobe"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 362,
    "title": "Coin Change – No Solution #362",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Oracle", "Intuit"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 363,
    "title": "Maximum Water Container – Two Pointer #363",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Walmart", "Amazon", "Adobe"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 364,
    "title": "Climbing Stairs #364",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Uber"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 365,
    "title": "Islands – Single Row #365",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Morgan Stanley", "Goldman Sachs"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 366,
    "title": "Inorder Traversal – Empty Tree #366",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Intuit", "Google", "Amazon"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 367,
    "title": "Coin Change – Unlimited Supply #367",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Apple"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 368,
    "title": "Product Array – O(1) Space #368",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Intuit", "Uber"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 369,
    "title": "Detect Cycle in Linked List #369",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Goldman Sachs", "Flipkart", "Microsoft"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 370,
    "title": "Word Ladder #370",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Uber"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 371,
    "title": "Rotate Image #371",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Google", "Uber"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 372,
    "title": "Linked List Cycle – No Cycle #372",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Goldman Sachs", "Microsoft", "SAP"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 373,
    "title": "LRU Cache – Update Existing Key #373",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Google"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 374,
    "title": "Reverse Linked List #374",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "SAP", "Intuit"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 375,
    "title": "Left and Right Product Arrays #375",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Amazon", "Apple", "SAP"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 376,
    "title": "Coin Change – Number of Ways #376",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Google"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 377,
    "title": "Minimum Window Substring #377",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Goldman Sachs", "Morgan Stanley"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 378,
    "title": "LRU Cache #378",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Netflix", "Apple", "Uber"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 379,
    "title": "Product of Array Except Self #379",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Netflix"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 380,
    "title": "Minimum Window – Repeating Chars #380",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Uber", "Amazon"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 381,
    "title": "Two Sum #381",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Walmart", "Flipkart", "Oracle"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 382,
    "title": "Product Except Self – With Zero #382",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Walmart"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 383,
    "title": "Course Schedule – Cycle Detected #383",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Intuit", "Adobe"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 384,
    "title": "Cycle Start Node #384",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Google", "Morgan Stanley", "Apple"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 385,
    "title": "Coin Change #385",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Microsoft"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 386,
    "title": "Valid Brackets – Stack Approach #386",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Flipkart", "Netflix"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 387,
    "title": "Longest Unique Substring – All Unique #387",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Netflix", "Flipkart", "Microsoft"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 388,
    "title": "Number of Islands #388",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Walmart"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 389,
    "title": "Top K Frequent Elements #389",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Google", "Meta"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 390,
    "title": "Word Ladder – No Path #390",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Google", "Apple", "Amazon"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 391,
    "title": "LRU Cache – HashMap + Doubly Linked List #391",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Uber"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 392,
    "title": "Islands – BFS #392",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Goldman Sachs", "Apple"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 393,
    "title": "Single Node Cycle #393",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Goldman Sachs", "Netflix", "Google"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 394,
    "title": "Course Schedule – Order #394",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Goldman Sachs"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 395,
    "title": "Islands – Union-Find #395",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Google", "Uber"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 396,
    "title": "Course Schedule – Topological Sort #396",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Goldman Sachs", "Apple", "Meta"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 397,
    "title": "LRU Cache – Eviction Policy #397",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Amazon"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 398,
    "title": "Coin Change – No Solution #398",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Goldman Sachs", "Oracle"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 399,
    "title": "Kth Largest Element in an Array #399",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Microsoft", "Intuit", "Apple"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 400,
    "title": "Rotate Matrix 180° #400",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Oracle"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 401,
    "title": "Reverse Linked List – Recursive #401",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Netflix", "Walmart"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 402,
    "title": "Smallest Window Containing Pattern #402",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Goldman Sachs", "Google", "Flipkart"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 403,
    "title": "Word Ladder – BFS Approach #403",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Google"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 404,
    "title": "Minimum Window – No Solution Case #404",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Walmart", "Amazon"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 405,
    "title": "Valid Parentheses #405",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Oracle", "Microsoft", "Apple"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 406,
    "title": "Rotate Image – Counter-Clockwise #406",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Uber"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 407,
    "title": "Two Sum – Negative Values #407",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Meta", "Netflix"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 408,
    "title": "Container Water – Brute Force vs Optimal #408",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Intuit", "Google", "Meta"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 409,
    "title": "Longest No-Repeat Substring – Sliding Window #409",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "SAP"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 410,
    "title": "Kth Largest – QuickSelect #410",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Apple", "Flipkart"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 411,
    "title": "Valid Parentheses – Nested #411",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "SAP", "Walmart", "Goldman Sachs"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 412,
    "title": "Bidirectional Word Ladder #412",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Uber"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 413,
    "title": "Islands – Single Row #413",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Intuit", "Netflix"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 414,
    "title": "Course Schedule #414",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "SAP", "Meta", "Uber"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 415,
    "title": "Course Schedule – Cycle Detected #415",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Flipkart"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 416,
    "title": "Word Ladder #416",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Adobe", "Oracle"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 417,
    "title": "LRU Cache – Update Existing Key #417",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Amazon", "Microsoft", "Intuit"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 418,
    "title": "Rotate Image – Transpose then Flip #418",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Flipkart"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 419,
    "title": "Longest No-Repeat Substring – Single Char #419",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Uber", "Morgan Stanley"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 420,
    "title": "Rotate Image #420",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Meta", "Uber", "Adobe"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 421,
    "title": "Minimum Window Substring #421",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Morgan Stanley"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 422,
    "title": "Top K Frequent – Bucket Sort #422",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Google", "Uber"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 423,
    "title": "Binary Tree Inorder Traversal #423",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Oracle", "Walmart", "SAP"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 424,
    "title": "Minimum Window – Repeating Chars #424",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "SAP"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 425,
    "title": "K Most Frequent – Min Heap #425",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Meta", "Walmart"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 426,
    "title": "Climbing Stairs – 3 Steps #426",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Flipkart", "SAP", "Intuit"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 427,
    "title": "Rotate Matrix 180° #427",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "Adobe"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 428,
    "title": "Word Ladder – No Path #428",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Oracle", "Intuit"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 429,
    "title": "Water Container – Increasing Heights #429",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Morgan Stanley", "Netflix", "Meta"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 430,
    "title": "Climbing Stairs – Fibonacci Pattern #430",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Goldman Sachs"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 431,
    "title": "Smallest Window Containing Pattern #431",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "SAP", "Morgan Stanley"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 432,
    "title": "Detect Cycle in Linked List #432",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Morgan Stanley", "Adobe", "Meta"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 433,
    "title": "Rotate Image – Counter-Clockwise #433",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Google"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 434,
    "title": "Number of Islands #434",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Morgan Stanley", "Microsoft"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 435,
    "title": "Linked List Cycle – No Cycle #435",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Flipkart", "Adobe", "Microsoft"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 436,
    "title": "Minimum Window – No Solution Case #436",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Intuit"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 437,
    "title": "Word Ladder – BFS Approach #437",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Walmart", "Oracle"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 438,
    "title": "Inorder Traversal – Iterative #438",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Intuit", "SAP", "Flipkart"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 439,
    "title": "Kth Largest – Sorted Approach #439",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Microsoft"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 440,
    "title": "Course Schedule – Order #440",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Amazon", "Google"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 441,
    "title": "Course Schedule – Topological Sort #441",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Adobe", "Netflix", "Oracle"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 442,
    "title": "Coin Change – Unlimited Supply #442",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Apple"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 443,
    "title": "Two Sum – Unsorted Array #443",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Microsoft", "Goldman Sachs"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 444,
    "title": "Bidirectional Word Ladder #444",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Meta", "Adobe", "Uber"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 445,
    "title": "Climbing Stairs – Memoization #445",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Uber"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 446,
    "title": "Cycle Start Node #446",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Adobe", "SAP"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 447,
    "title": "Rotate Image – Transpose then Flip #447",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Google", "Netflix", "Uber"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 448,
    "title": "LRU Cache #448",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Amazon"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 449,
    "title": "Single Node Cycle #449",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Uber", "Flipkart"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 450,
    "title": "Reverse Sublist #450",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Flipkart", "Apple", "Goldman Sachs"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 451,
    "title": "Course Schedule #451",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Apple"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 452,
    "title": "Word Ladder #452",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Apple", "Meta"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 453,
    "title": "Container With Most Water #453",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Morgan Stanley", "Uber", "Meta"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 454,
    "title": "Maximum Subarray – Kadane's Algorithm #454",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Walmart"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 455,
    "title": "Course Schedule – Cycle Detected #455",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Google", "Intuit"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 456,
    "title": "Islands – BFS #456",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Apple", "Intuit", "Netflix"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 457,
    "title": "Maximum Subarray #457",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Flipkart"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 458,
    "title": "Product Array – O(1) Space #458",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Meta", "Morgan Stanley"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 459,
    "title": "Inorder Traversal – Morris #459",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Uber", "Oracle", "Google"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 460,
    "title": "Course Schedule – Order #460",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Amazon"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 461,
    "title": "Left and Right Product Arrays #461",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Microsoft", "Amazon"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 462,
    "title": "Inorder Traversal – Empty Tree #462",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Microsoft", "Adobe", "Google"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 463,
    "title": "Binary Tree Inorder Traversal #463",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 464,
    "title": "Product of Array Except Self #464",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Netflix", "Google"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 465,
    "title": "Climbing Stairs #465",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Uber", "Amazon", "Walmart"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 466,
    "title": "Climbing Stairs – 3 Steps #466",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Netflix"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 467,
    "title": "LRU Cache – HashMap + Doubly Linked List #467",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Uber", "Netflix"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 468,
    "title": "Coin Change – Number of Ways #468",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Oracle", "Netflix", "Flipkart"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 469,
    "title": "Kth Smallest Element #469",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Flipkart"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 470,
    "title": "Climbing Stairs – Fibonacci Pattern #470",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Walmart", "Meta"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 471,
    "title": "Kth Largest Element in an Array #471",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Apple", "Morgan Stanley", "SAP"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 472,
    "title": "Merge Intervals #472",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Uber"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 473,
    "title": "Course Schedule – Topological Sort #473",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Netflix", "Uber", "Morgan Stanley"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 474,
    "title": "Top K Elements – HashMap + Sort #474",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Uber", "Flipkart", "Walmart"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 475,
    "title": "Longest Substring Without Repeating Characters #475",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Flipkart"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 476,
    "title": "Longest Unique Substring – All Unique #476",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Apple", "Uber"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 477,
    "title": "LRU Cache – Eviction Policy #477",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Microsoft", "Google", "Goldman Sachs"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 478,
    "title": "Maximum Subarray – All Negative #478",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Adobe"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 479,
    "title": "Climbing Stairs – Memoization #479",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Meta", "Walmart"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 480,
    "title": "Product Except Self – With Zero #480",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Adobe", "Google", "Netflix"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 481,
    "title": "LRU Cache – Update Existing Key #481",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Oracle"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 482,
    "title": "Top K Frequent Elements #482",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Morgan Stanley", "Netflix"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 483,
    "title": "LRU Cache #483",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Meta", "Google", "Microsoft"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 484,
    "title": "Climbing Stairs #484",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Uber"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 485,
    "title": "Course Schedule #485",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Goldman Sachs", "Apple"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 486,
    "title": "Merge Intervals – Adjacent #486",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Walmart", "Amazon", "Google"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 487,
    "title": "Climbing Stairs – 3 Steps #487",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Amazon"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 488,
    "title": "Product Array – O(1) Space #488",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Flipkart", "Meta"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 489,
    "title": "Top K Frequent – Bucket Sort #489",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "SAP", "Google", "Adobe"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 490,
    "title": "K Most Frequent – Min Heap #490",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Intuit"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 491,
    "title": "Course Schedule – Cycle Detected #491",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Microsoft", "Netflix"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 492,
    "title": "Top K Elements – HashMap + Sort #492",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Google", "Walmart", "Oracle"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 493,
    "title": "Maximum Subarray – Start and End Index #493",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Meta"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 494,
    "title": "Top K Frequent Elements #494",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Amazon", "Intuit"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Apple", "Goldman Sachs", "Amazon", "Netflix"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 496,
    "title": "LRU Cache – HashMap + Doubly Linked List #496",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Google"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 497,
    "title": "Rotate Image #497",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Morgan Stanley", "Oracle"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 498,
    "title": "Inorder Traversal – Iterative #498",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Intuit", "Amazon", "Goldman Sachs"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Amazon", "SAP"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 500,
    "title": "Top K Frequent – Bucket Sort #500",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Uber", "SAP"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 501,
    "title": "Linked List Cycle – No Cycle #501",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Walmart", "Flipkart", "Netflix"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 502,
    "title": "Word Ladder – No Path #502",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Intuit"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 503,
    "title": "Coin Change #503",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Amazon", "Apple"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 504,
    "title": "Left and Right Product Arrays #504",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Goldman Sachs", "Adobe", "Flipkart"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Intuit", "Uber"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 506,
    "title": "Minimum Window – Repeating Chars #506",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Uber", "SAP"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 507,
    "title": "Climbing Stairs – Fibonacci Pattern #507",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Meta", "Microsoft", "Netflix"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 508,
    "title": "Inorder Traversal – Morris #508",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Apple"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 509,
    "title": "Merge Overlapping Intervals #509",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "SAP", "Meta"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 510,
    "title": "Two Sum – Duplicates Allowed #510",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Google", "Goldman Sachs", "SAP"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 511,
    "title": "Valid Parentheses – Invalid Case #511",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Google"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 512,
    "title": "Maximum Subarray – Kadane's Algorithm #512",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Goldman Sachs", "Uber"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 513,
    "title": "Rotate Matrix 180° #513",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Walmart", "SAP", "Apple"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 514,
    "title": "Climbing Stairs – Memoization #514",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Goldman Sachs"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 515,
    "title": "Word Ladder – BFS Approach #515",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Oracle", "Apple"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 516,
    "title": "Course Schedule – Order #516",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Uber", "Meta", "Flipkart"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 517,
    "title": "Valid Brackets – Stack Approach #517",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Amazon"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 518,
    "title": "Product Except Self – With Zero #518",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Google", "Apple"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 519,
    "title": "Maximum Subarray #519",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Uber", "Google", "Meta"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 520,
    "title": "LRU Cache – Eviction Policy #520",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Walmart"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 521,
    "title": "K Most Frequent – Min Heap #521",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Netflix", "Oracle"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 522,
    "title": "Rotate Image – Counter-Clockwise #522",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Flipkart", "SAP", "Walmart"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 523,
    "title": "Cycle Start Node #523",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Intuit"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 524,
    "title": "Reverse Linked List in Groups #524",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Walmart", "Amazon"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 525,
    "title": "Valid Parentheses #525",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Microsoft", "SAP", "Flipkart"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 526,
    "title": "Single Node Cycle #526",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Uber"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 527,
    "title": "Rotate Image – Transpose then Flip #527",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Oracle", "Intuit"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Amazon", "Adobe", "Oracle", "Goldman Sachs"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 529,
    "title": "Coin Change – No Solution #529",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Meta"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 530,
    "title": "LRU Cache – Update Existing Key #530",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Oracle", "Google"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 531,
    "title": "Islands – Union-Find #531",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Microsoft", "Google", "Flipkart"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 532,
    "title": "Product Array – O(1) Space #532",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Meta"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 533,
    "title": "Maximum Water Container – Two Pointer #533",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Walmart", "SAP"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 534,
    "title": "Kth Largest – QuickSelect #534",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Intuit", "Goldman Sachs", "Meta"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 535,
    "title": "Valid Parentheses – Nested #535",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Morgan Stanley"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 536,
    "title": "Coin Change – Unlimited Supply #536",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Goldman Sachs", "Meta"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 537,
    "title": "Longest No-Repeat Substring – Sliding Window #537",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Amazon", "Morgan Stanley", "Apple"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 538,
    "title": "Left and Right Product Arrays #538",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Flipkart"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 539,
    "title": "Valid Parentheses – Invalid Case #539",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Adobe", "Meta"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 540,
    "title": "Climbing Stairs #540",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Walmart", "Adobe", "Morgan Stanley"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 541,
    "title": "Container Water – Brute Force vs Optimal #541",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Uber"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 542,
    "title": "Smallest Window Containing Pattern #542",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Intuit", "Walmart"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 543,
    "title": "Climbing Stairs – 3 Steps #543",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Flipkart", "Goldman Sachs", "Google"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 544,
    "title": "Longest No-Repeat Substring – Single Char #544",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Walmart"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 545,
    "title": "Climbing Stairs – Fibonacci Pattern #545",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Microsoft", "Walmart"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 546,
    "title": "Water Container – Increasing Heights #546",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Uber", "Netflix", "Apple"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 547,
    "title": "Insert and Merge Interval #547",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Oracle"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 548,
    "title": "LRU Cache #548",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "SAP", "Flipkart"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 549,
    "title": "Longest Substring Without Repeating Characters #549",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Apple", "Walmart", "Oracle"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 550,
    "title": "Maximum Subarray – All Negative #550",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Apple"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 551,
    "title": "Minimum Window – No Solution Case #551",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Microsoft", "Uber"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 552,
    "title": "LRU Cache – HashMap + Doubly Linked List #552",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Amazon", "Adobe", "Intuit"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 553,
    "title": "Valid Brackets – Stack Approach #553",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Oracle"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 554,
    "title": "Islands – Single Row #554",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Walmart", "Morgan Stanley"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 555,
    "title": "Merge Intervals #555",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Flipkart", "Adobe", "Apple"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 556,
    "title": "Course Schedule – Topological Sort #556",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Netflix"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 557,
    "title": "Course Schedule #557",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Netflix", "Microsoft"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 558,
    "title": "Kth Largest – Sorted Approach #558",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "SAP", "Uber", "Netflix"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 559,
    "title": "Valid Parentheses #559",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Netflix"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 560,
    "title": "Product of Array Except Self #560",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Intuit", "SAP"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 561,
    "title": "Longest Unique Substring – All Unique #561",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Oracle", "Apple", "Meta"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 562,
    "title": "Detect Cycle in Linked List #562",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Google"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 563,
    "title": "Product Except Self – With Zero #563",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Morgan Stanley", "Apple"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 564,
    "title": "Container With Most Water #564",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Oracle", "Morgan Stanley", "Meta"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 565,
    "title": "Product Array – O(1) Space #565",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Goldman Sachs"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 566,
    "title": "Valid Parentheses – Nested #566",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "SAP", "Meta"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 567,
    "title": "Two Sum #567",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Meta", "Oracle", "Netflix"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 568,
    "title": "Longest No-Repeat Substring – Sliding Window #568",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Flipkart", "SAP"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 569,
    "title": "Reverse Linked List #569",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Oracle", "Walmart"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 570,
    "title": "Top K Elements – HashMap + Sort #570",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Amazon", "Uber", "SAP"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 571,
    "title": "Left and Right Product Arrays #571",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Microsoft"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 572,
    "title": "Bidirectional Word Ladder #572",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Meta", "Adobe"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 573,
    "title": "Top K Frequent Elements #573",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "SAP", "Google", "Flipkart"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 574,
    "title": "Product of Array Except Self #574",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Netflix"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Walmart", "Flipkart", "Microsoft"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 576,
    "title": "Climbing Stairs – Memoization #576",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley", "Oracle", "Microsoft"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 577,
    "title": "Longest No-Repeat Substring – Single Char #577",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Walmart"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 578,
    "title": "Top K Frequent – Bucket Sort #578",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Morgan Stanley", "Google"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 579,
    "title": "Course Schedule – Cycle Detected #579",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Oracle", "Meta", "SAP"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 580,
    "title": "Rotate Matrix 180° #580",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Amazon"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 581,
    "title": "Rotate Image – Counter-Clockwise #581",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Netflix", "Meta"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 582,
    "title": "Word Ladder #582",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Adobe", "Amazon", "Goldman Sachs"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 583,
    "title": "Two Sum – Negative Values #583",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Oracle"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 584,
    "title": "Course Schedule – Order #584",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Oracle", "SAP"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 585,
    "title": "Course Schedule – Topological Sort #585",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Goldman Sachs", "Netflix", "Meta"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 586,
    "title": "Product Except Self – With Zero #586",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Uber"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 587,
    "title": "Course Schedule #587",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Flipkart", "Uber"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 588,
    "title": "Maximum Subarray – Start and End Index #588",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Morgan Stanley", "Microsoft", "Adobe"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 589,
    "title": "Word Ladder – No Path #589",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Adobe"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 590,
    "title": "Linked List Cycle – No Cycle #590",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "SAP", "Microsoft"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 591,
    "title": "Course Schedule – Cycle Detected #591",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Oracle", "Morgan Stanley", "Intuit"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 592,
    "title": "Kth Smallest Element #592",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Apple"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 593,
    "title": "Word Ladder – BFS Approach #593",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Intuit", "Oracle"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 594,
    "title": "Minimum Window – Repeating Chars #594",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Microsoft", "Apple", "Google"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 595,
    "title": "Merge Intervals – Adjacent #595",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "SAP"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 596,
    "title": "Course Schedule – Order #596",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Amazon", "Walmart"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 597,
    "title": "Reverse Linked List – Recursive #597",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Adobe", "Goldman Sachs", "Flipkart"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 598,
    "title": "Reverse Sublist #598",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Flipkart"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 599,
    "title": "Smallest Window Containing Pattern #599",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Morgan Stanley", "Google"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 600,
    "title": "Reverse Linked List in Groups #600",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Intuit", "Meta", "Adobe"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 601,
    "title": "Longest Substring Without Repeating Characters #601",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "SAP"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 602,
    "title": "K Most Frequent – Min Heap #602",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Walmart", "Intuit"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 603,
    "title": "Cycle Start Node #603",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Oracle", "Amazon", "Intuit"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 604,
    "title": "Two Sum – Unsorted Array #604",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Amazon"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 605,
    "title": "Reverse Linked List #605",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Adobe", "Google"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 606,
    "title": "Merge Overlapping Intervals #606",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Flipkart", "SAP", "Intuit"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 607,
    "title": "Course Schedule – Topological Sort #607",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Morgan Stanley"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 608,
    "title": "Product Array – O(1) Space #608",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Meta", "Uber"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 609,
    "title": "Inorder Traversal – Empty Tree #609",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Apple", "Google", "SAP"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 610,
    "title": "Climbing Stairs #610",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Amazon"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 611,
    "title": "Maximum Water Container – Two Pointer #611",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Microsoft", "Goldman Sachs"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 612,
    "title": "Minimum Window – No Solution Case #612",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Adobe", "Walmart", "Morgan Stanley"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 613,
    "title": "Binary Tree Inorder Traversal #613",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Apple"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 614,
    "title": "Single Node Cycle #614",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Oracle", "Walmart"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 615,
    "title": "Bidirectional Word Ladder #615",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Uber", "Microsoft", "SAP"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 616,
    "title": "Minimum Window Substring #616",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Intuit"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 617,
    "title": "Minimum Window – Repeating Chars #617",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Apple", "SAP"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 618,
    "title": "LRU Cache – Eviction Policy #618",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Intuit", "Goldman Sachs", "Morgan Stanley"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 619,
    "title": "Number of Islands #619",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Apple"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 620,
    "title": "Word Ladder #620",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Morgan Stanley", "Meta"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 621,
    "title": "LRU Cache – Update Existing Key #621",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Netflix", "Apple", "Oracle"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 622,
    "title": "Longest Unique Substring – All Unique #622",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Microsoft"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 623,
    "title": "Left and Right Product Arrays #623",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Morgan Stanley", "Netflix"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 624,
    "title": "Two Sum – Duplicates Allowed #624",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Flipkart", "Meta", "Apple"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 625,
    "title": "Rotate Image – Transpose then Flip #625",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Uber"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 626,
    "title": "Valid Parentheses – Invalid Case #626",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Goldman Sachs", "Adobe"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 627,
    "title": "Rotate Image #627",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Apple", "Morgan Stanley", "Adobe"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 628,
    "title": "Insert and Merge Interval #628",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Oracle"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 629,
    "title": "Valid Brackets – Stack Approach #629",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Flipkart", "Netflix"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 630,
    "title": "Word Ladder – No Path #630",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Intuit", "Oracle", "Microsoft"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 631,
    "title": "Product of Array Except Self #631",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Google"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 632,
    "title": "Product Except Self – With Zero #632",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Adobe", "Google"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 633,
    "title": "Reverse Linked List – Recursive #633",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Flipkart", "SAP", "Morgan Stanley"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 634,
    "title": "Valid Parentheses #634",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Goldman Sachs"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 635,
    "title": "Kth Largest Element in an Array #635",
    "category": "Heap",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Intuit", "Uber"
    ],
    "description": "Find the kth largest element in an unsorted array using a min-heap of size k.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 636,
    "title": "Detect Cycle in Linked List #636",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Meta", "Google", "Oracle"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 637,
    "title": "Two Sum #637",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Amazon"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 638,
    "title": "Reverse Sublist #638",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Intuit", "Walmart"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 639,
    "title": "Rotate Matrix 180° #639",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Apple", "Oracle", "SAP"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 640,
    "title": "Word Ladder – BFS Approach #640",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Meta"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 641,
    "title": "Inorder Traversal – Iterative #641",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Uber", "Amazon"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 642,
    "title": "Container Water – Brute Force vs Optimal #642",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Walmart", "Microsoft", "Apple"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 643,
    "title": "Linked List Cycle – No Cycle #643",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Walmart"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 644,
    "title": "Rotate Image – Counter-Clockwise #644",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Morgan Stanley", "Flipkart"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 645,
    "title": "Smallest Window Containing Pattern #645",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Intuit", "Apple", "Meta"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 646,
    "title": "Inorder Traversal – Morris #646",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Netflix"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 647,
    "title": "Valid Parentheses – Nested #647",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Amazon", "Google"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 648,
    "title": "Valid Parentheses – Invalid Case #648",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Apple", "Morgan Stanley", "Meta"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 649,
    "title": "Two Sum – Negative Values #649",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Google"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 650,
    "title": "Top K Elements – HashMap + Sort #650",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Goldman Sachs", "Uber"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 651,
    "title": "Bidirectional Word Ladder #651",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Apple", "Meta", "SAP"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 652,
    "title": "Course Schedule #652",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Adobe"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 653,
    "title": "Course Schedule – Cycle Detected #653",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Meta", "Uber"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 654,
    "title": "Product Array – O(1) Space #654",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google", "SAP", "Goldman Sachs"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 655,
    "title": "Kth Largest – QuickSelect #655",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Intuit"
    ],
    "description": "Use the QuickSelect algorithm to find the kth largest element in average O(n) time.",
    "input_format": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output_format": "4",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 656,
    "title": "Top K Frequent Elements #656",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Uber", "Goldman Sachs"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 657,
    "title": "Word Ladder #657",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Microsoft", "Meta", "Uber"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 658,
    "title": "Coin Change – Number of Ways #658",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Amazon"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 659,
    "title": "Climbing Stairs – 3 Steps #659",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Adobe", "Netflix"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 660,
    "title": "LRU Cache #660",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Uber", "Amazon", "Netflix"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 661,
    "title": "Course Schedule – Order #661",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Walmart"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 662,
    "title": "Minimum Window – No Solution Case #662",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Intuit", "Adobe"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 663,
    "title": "Minimum Window Substring #663",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Oracle", "Microsoft", "Walmart"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 664,
    "title": "Water Container – Increasing Heights #664",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Intuit"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 665,
    "title": "Left and Right Product Arrays #665",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Netflix", "Apple"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 666,
    "title": "Islands – BFS #666",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Apple", "Oracle", "Uber"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 667,
    "title": "Islands – Union-Find #667",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Walmart"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 668,
    "title": "Minimum Window – Repeating Chars #668",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Adobe", "Walmart"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 669,
    "title": "Islands – Single Row #669",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Netflix", "SAP", "Goldman Sachs"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 670,
    "title": "Rotate Image – Transpose then Flip #670",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Uber"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 671,
    "title": "Number of Islands #671",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Apple", "Google"
    ],
    "description": "Given an m×n grid of '1's (land) and '0's (water), count the number of islands (groups of connected '1's).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 672,
    "title": "Longest No-Repeat Substring – Sliding Window #672",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "SAP", "Amazon", "Apple"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 673,
    "title": "Rotate Image #673",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Morgan Stanley"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 674,
    "title": "Merge Intervals #674",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Flipkart", "Morgan Stanley"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 675,
    "title": "Longest No-Repeat Substring – Single Char #675",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Goldman Sachs", "Adobe", "Morgan Stanley", "Meta"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 676,
    "title": "Merge Intervals – Adjacent #676",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 677,
    "title": "Coin Change #677",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Apple", "Amazon"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 678,
    "title": "Maximum Subarray – Kadane's Algorithm #678",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Netflix", "Uber", "Walmart"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 679,
    "title": "LRU Cache – HashMap + Doubly Linked List #679",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Apple"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 680,
    "title": "Climbing Stairs – Fibonacci Pattern #680",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Intuit", "Oracle"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 681,
    "title": "Container With Most Water #681",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Google", "Amazon", "Walmart"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 682,
    "title": "Rotate Matrix 180° #682",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Apple"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 683,
    "title": "Reverse Linked List in Groups #683",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Flipkart", "SAP"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 684,
    "title": "Merge Overlapping Intervals #684",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Morgan Stanley", "Netflix", "Flipkart"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 685,
    "title": "Product of Array Except Self #685",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Intuit", "Google"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 686,
    "title": "Cycle Start Node #686",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Goldman Sachs", "Walmart"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 687,
    "title": "Single Node Cycle #687",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Google", "Flipkart", "Microsoft"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 688,
    "title": "Maximum Subarray #688",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "SAP"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 689,
    "title": "Word Ladder – No Path #689",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Morgan Stanley", "Oracle"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 690,
    "title": "Maximum Water Container – Two Pointer #690",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Oracle", "Meta", "Uber"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 691,
    "title": "Inorder Traversal – Empty Tree #691",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Goldman Sachs"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 692,
    "title": "Container Water – Brute Force vs Optimal #692",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "SAP", "Morgan Stanley"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 693,
    "title": "Smallest Window Containing Pattern #693",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Uber", "Morgan Stanley", "Apple"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 694,
    "title": "Longest Substring Without Repeating Characters #694",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Uber"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 695,
    "title": "Binary Tree Inorder Traversal #695",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Flipkart", "Meta"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 696,
    "title": "Two Sum – Unsorted Array #696",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Adobe", "Google", "Flipkart"
    ],
    "description": "Find two indices in an unsorted integer array such that the values at those indices sum to a given target value.",
    "input_format": "nums = [3,2,4], target = 6",
    "output_format": "[1,2]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,4], target = 6",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 697,
    "title": "Rotate Image – Counter-Clockwise #697",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Uber"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 698,
    "title": "Detect Cycle in Linked List #698",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Meta", "Walmart"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 699,
    "title": "Water Container – Increasing Heights #699",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Google", "SAP", "Flipkart"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 700,
    "title": "Maximum Subarray – All Negative #700",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Morgan Stanley"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 701,
    "title": "Valid Brackets – Stack Approach #701",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Flipkart", "Morgan Stanley"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 702,
    "title": "Rotate Image – Transpose then Flip #702",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Uber", "Flipkart", "Google"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 703,
    "title": "Container With Most Water #703",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Walmart"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 704,
    "title": "Two Sum – Duplicates Allowed #704",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Walmart", "Apple"
    ],
    "description": "Given an array with possible duplicate values and a target, return any pair of indices (i,j) where i≠j and nums[i]+nums[j]=target.",
    "input_format": "nums = [3,3], target = 6",
    "output_format": "[0,1]",
    "constraints": "2 ≤ n ≤ 10^4",
    "sample_input": "nums = [3,3], target = 6",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 705,
    "title": "Inorder Traversal – Iterative #705",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Flipkart", "Google", "Intuit"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 706,
    "title": "Maximum Subarray – Start and End Index #706",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Netflix"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 707,
    "title": "Linked List Cycle – No Cycle #707",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Amazon", "Uber"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 708,
    "title": "Cycle Start Node #708",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Amazon", "Oracle", "Microsoft"
    ],
    "description": "Find the node where the cycle begins in a linked list that contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "Node at index 1",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "Node at index 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 709,
    "title": "Course Schedule – Topological Sort #709",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "SAP"
    ],
    "description": "Use topological sort (Kahn's algorithm) to verify that the prerequisite DAG is acyclic.",
    "input_format": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 3, prerequisites = [[0,1],[0,2],[1,2]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 710,
    "title": "Two Sum #710",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Netflix", "Adobe"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
    "input_format": "nums = [2,7,11,15], target = 9",
    "output_format": "[0,1]",
    "constraints": "1 ≤ n ≤ 10^4, -10^9 ≤ nums[i] ≤ 10^9",
    "sample_input": "nums = [2,7,11,15], target = 9",
    "sample_output": "[0,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 711,
    "title": "Inorder Traversal – Morris #711",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Morgan Stanley", "Netflix", "Intuit"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 712,
    "title": "Minimum Window – No Solution Case #712",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Goldman Sachs"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 713,
    "title": "Top K Frequent – Bucket Sort #713",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Walmart", "SAP"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 714,
    "title": "Product Except Self – With Zero #714",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Walmart", "Morgan Stanley", "Google"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 715,
    "title": "Single Node Cycle #715",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Walmart"
    ],
    "description": "Detect whether a single-node linked list pointing to itself forms a cycle.",
    "input_format": "head = [1], pos = 0",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1], pos = 0",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 716,
    "title": "Coin Change – No Solution #716",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Morgan Stanley", "SAP"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 717,
    "title": "Kth Largest – Sorted Approach #717",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Goldman Sachs", "Google", "Netflix"
    ],
    "description": "Sort the array in descending order and return the element at index k-1.",
    "input_format": "nums = [7,6,5,4,3,2,1], k = 3",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,6,5,4,3,2,1], k = 3",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 718,
    "title": "LRU Cache – Eviction Policy #718",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Walmart"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 719,
    "title": "Coin Change – Unlimited Supply #719",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Oracle", "Amazon"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 720,
    "title": "Valid Parentheses #720",
    "category": "Stacks",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Intuit", "Morgan Stanley", "Adobe"
    ],
    "description": "Given a string s containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid (every open bracket closed in correct order).",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"()[]{}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 721,
    "title": "Valid Parentheses – Nested #721",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Netflix", "Goldman Sachs"
    ],
    "description": "Check whether a string of nested brackets is valid, where each bracket type must be closed in the correct order.",
    "input_format": "s = \"{[()]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[()]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 722,
    "title": "Insert and Merge Interval #722",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Meta", "Google"
    ],
    "description": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "[[1,5],[6,9]]",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "sample_output": "[[1,5],[6,9]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 723,
    "title": "K Most Frequent – Min Heap #723",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Adobe", "Meta", "Google", "Netflix"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 724,
    "title": "Reverse Linked List #724",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Netflix"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 725,
    "title": "Minimum Window Substring #725",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Goldman Sachs", "Netflix"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 726,
    "title": "Detect Cycle in Linked List #726",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Apple", "Meta", "Uber"
    ],
    "description": "Given a linked list, determine if it has a cycle using Floyd's slow-and-fast pointer algorithm.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 727,
    "title": "Longest Unique Substring – All Unique #727",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Morgan Stanley"
    ],
    "description": "Return the length of the string itself when all characters in the string are already distinct.",
    "input_format": "s = \"abcdef\"",
    "output_format": "6",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcdef\"",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 728,
    "title": "Valid Parentheses – Invalid Case #728",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Netflix", "Flipkart"
    ],
    "description": "Determine if a bracket string is invalid when a closing bracket does not match the most recent unmatched opening bracket.",
    "input_format": "s = \"([)]\"",
    "output_format": "false",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"([)]\"",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 729,
    "title": "Word Ladder – BFS Approach #729",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Apple", "Flipkart", "Uber"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 730,
    "title": "Product Array – O(1) Space #730",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Uber", "Microsoft"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 731,
    "title": "Top K Elements – HashMap + Sort #731",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Meta", "Walmart"
    ],
    "description": "Count element frequencies with a HashMap, then sort by frequency to return the top k elements.",
    "input_format": "nums = [1,2,3,1,2,1], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,1,2,1], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 732,
    "title": "Islands – BFS #732",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Flipkart", "Microsoft", "Meta"
    ],
    "description": "Use BFS to explore each unvisited land cell and mark the entire island before counting.",
    "input_format": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "output_format": "3",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 733,
    "title": "Inorder Traversal – Empty Tree #733",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Intuit"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 734,
    "title": "Coin Change – Number of Ways #734",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Meta", "Google"
    ],
    "description": "Count the number of distinct combinations of coins that sum to a given amount (coin combinations problem).",
    "input_format": "coins = [1,2,5], amount = 5",
    "output_format": "4",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 735,
    "title": "Coin Change #735",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Meta", "Morgan Stanley", "Uber"
    ],
    "description": "Given an array of coin denominations and an amount, return the fewest coins needed to make up that amount, or -1 if it is not possible.",
    "input_format": "coins = [1,5,6,9], amount = 11",
    "output_format": "2",
    "constraints": "1 ≤ coins.length ≤ 12, 0 ≤ amount ≤ 10^4",
    "sample_input": "coins = [1,5,6,9], amount = 11",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 736,
    "title": "Rotate Image #736",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Netflix"
    ],
    "description": "Rotate an n×n 2D matrix by 90 degrees clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[7,4,1],[8,5,2],[9,6,3]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[7,4,1],[8,5,2],[9,6,3]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 737,
    "title": "Reverse Linked List – Recursive #737",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Goldman Sachs", "Meta"
    ],
    "description": "Reverse a singly linked list using recursion and return the new head node.",
    "input_format": "head = [1,2,3]",
    "output_format": "[3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3]",
    "sample_output": "[3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 738,
    "title": "Left and Right Product Arrays #738",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Goldman Sachs", "Microsoft", "Walmart"
    ],
    "description": "Build a left-product array and a right-product array, then multiply them element-wise to get the result.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 739,
    "title": "Bidirectional Word Ladder #739",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Adobe"
    ],
    "description": "Apply bidirectional BFS from both beginWord and endWord simultaneously to find the shortest transformation length.",
    "input_format": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "output_format": "4",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"red\", endWord = \"tax\", wordList = [\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 740,
    "title": "Product of Array Except Self #740",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Apple", "Uber"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division.",
    "input_format": "nums = [1,2,3,4]",
    "output_format": "[24,12,8,6]",
    "constraints": "2 ≤ n ≤ 10^5, -30 ≤ nums[i] ≤ 30",
    "sample_input": "nums = [1,2,3,4]",
    "sample_output": "[24,12,8,6]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 741,
    "title": "Reverse Sublist #741",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Walmart", "Oracle", "SAP"
    ],
    "description": "Reverse a portion of a linked list from position left to right (1-indexed).",
    "input_format": "head = [1,2,3,4,5], left = 2, right = 4",
    "output_format": "[1,4,3,2,5]",
    "constraints": "1 ≤ n ≤ 500",
    "sample_input": "head = [1,2,3,4,5], left = 2, right = 4",
    "sample_output": "[1,4,3,2,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 742,
    "title": "Top K Frequent Elements #742",
    "category": "Hashing",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Intuit"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. Order of result does not matter.",
    "input_format": "nums = [1,1,1,2,2,3], k = 2",
    "output_format": "[1,2]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "sample_output": "[1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 743,
    "title": "Maximum Water Container – Two Pointer #743",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Adobe", "Netflix"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
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
      "Flipkart", "Goldman Sachs", "Meta", "Adobe"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 745,
    "title": "Container Water – Brute Force vs Optimal #745",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Morgan Stanley"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 746,
    "title": "LRU Cache – Update Existing Key #746",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Amazon", "Morgan Stanley"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 747,
    "title": "Minimum Window – Repeating Chars #747",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Flipkart", "Intuit", "Apple"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 748,
    "title": "Maximum Subarray – Kadane's Algorithm #748",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Microsoft", "Morgan Stanley"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 749,
    "title": "LRU Cache #749",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "SAP", "Flipkart"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 750,
    "title": "LRU Cache – HashMap + Doubly Linked List #750",
    "category": "DSA",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Amazon", "Morgan Stanley", "Meta"
    ],
    "description": "Implement LRU cache using a HashMap for O(1) lookup and a doubly linked list to track usage order.",
    "input_format": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "output_format": "[null,null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(3); put(1,1); put(2,2); put(3,3); get(1); put(4,4); get(2)",
    "sample_output": "[null,null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 751,
    "title": "Smallest Window Containing Pattern #751",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Oracle"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 752,
    "title": "Maximum Subarray #752",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Adobe", "Microsoft", "Meta"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 753,
    "title": "Inorder Traversal – Iterative #753",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Morgan Stanley", "Oracle", "Flipkart"
    ],
    "description": "Perform an iterative inorder traversal of a binary tree using an explicit stack instead of recursion.",
    "input_format": "root = [4,2,6,1,3,5,7]",
    "output_format": "[1,2,3,4,5,6,7]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [4,2,6,1,3,5,7]",
    "sample_output": "[1,2,3,4,5,6,7]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 754,
    "title": "Word Ladder #754",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Adobe"
    ],
    "description": "Given beginWord, endWord, and a word list, find the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output_format": "5",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 755,
    "title": "Rotate Matrix 180° #755",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Morgan Stanley", "Apple", "Meta"
    ],
    "description": "Rotate an n×n matrix 180 degrees in-place (equivalent to two 90° clockwise rotations).",
    "input_format": "matrix = [[1,2],[3,4]]",
    "output_format": "[[4,3],[2,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2],[3,4]]",
    "sample_output": "[[4,3],[2,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 756,
    "title": "LRU Cache – Eviction Policy #756",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "SAP", "Adobe", "Google"
    ],
    "description": "When the cache is full and a new key is inserted, the least recently used key must be evicted.",
    "input_format": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "output_format": "[null,null,1,null,-1,2]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(1); put(2,1); get(2); put(3,2); get(2); get(3)",
    "sample_output": "[null,null,1,null,-1,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 757,
    "title": "Maximum Subarray – All Negative #757",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Microsoft"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 758,
    "title": "Climbing Stairs – Memoization #758",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Google", "Netflix"
    ],
    "description": "Use top-down dynamic programming with memoization to count distinct ways to climb n steps taking 1 or 2 steps at a time.",
    "input_format": "n = 6",
    "output_format": "13",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 6",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 759,
    "title": "Climbing Stairs #759",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Uber", "Microsoft", "Oracle", "Google"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "input_format": "n = 5",
    "output_format": "8",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 760,
    "title": "Water Container – Increasing Heights #760",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Oracle"
    ],
    "description": "For an array of heights in strictly increasing order, identify the two lines that form the largest container.",
    "input_format": "height = [1,2,3,4,5]",
    "output_format": "6",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,3,4,5]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 761,
    "title": "Maximum Subarray – Start and End Index #761",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Walmart", "Morgan Stanley", "SAP"
    ],
    "description": "Find the subarray with maximum sum and return its sum along with the starting and ending indices.",
    "input_format": "nums = [1,-2,3,4,-1,2]",
    "output_format": "8, start=2, end=5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,-2,3,4,-1,2]",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 762,
    "title": "Valid Brackets – Stack Approach #762",
    "category": "Stacks",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Walmart", "Adobe", "Microsoft"
    ],
    "description": "Use a stack to validate that every opening bracket has a corresponding and correctly ordered closing bracket.",
    "input_format": "s = \"{[]}\"",
    "output_format": "true",
    "constraints": "1 ≤ s.length ≤ 10^4",
    "sample_input": "s = \"{[]}\"",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 763,
    "title": "Climbing Stairs – 3 Steps #763",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Apple"
    ],
    "description": "You can climb 1, 2, or 3 steps at a time. Return the number of distinct ways to reach the top of n stairs.",
    "input_format": "n = 4",
    "output_format": "7",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 4",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 764,
    "title": "Maximum Subarray – Kadane's Algorithm #764",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Meta", "Microsoft"
    ],
    "description": "Apply Kadane's algorithm to find the largest sum of any contiguous subarray in linear time.",
    "input_format": "nums = [5,4,-1,7,8]",
    "output_format": "23",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [5,4,-1,7,8]",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 765,
    "title": "Merge Intervals #765",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Netflix", "Adobe", "Morgan Stanley"
    ],
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "[[1,6],[8,10],[15,18]]",
    "constraints": "1 ≤ intervals.length ≤ 10^4",
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "sample_output": "[[1,6],[8,10],[15,18]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 766,
    "title": "Merge Intervals – Adjacent #766",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Oracle"
    ],
    "description": "Merge intervals that are adjacent (end of one equals start of next) in addition to overlapping intervals.",
    "input_format": "intervals = [[1,4],[4,5]]",
    "output_format": "[[1,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[4,5]]",
    "sample_output": "[[1,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 767,
    "title": "Kth Smallest Element #767",
    "category": "Heap",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Uber", "Amazon"
    ],
    "description": "Find the kth smallest element in an unsorted integer array.",
    "input_format": "nums = [7,10,4,3,20,15], k = 3",
    "output_format": "7",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [7,10,4,3,20,15], k = 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 768,
    "title": "Maximum Subarray #768",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Apple", "Netflix", "Goldman Sachs"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "input_format": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 769,
    "title": "Longest No-Repeat Substring – Sliding Window #769",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Flipkart"
    ],
    "description": "Apply the sliding window technique with a HashMap to solve the longest non-repeating substring in O(n).",
    "input_format": "s = \"pwwkew\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"pwwkew\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 770,
    "title": "Course Schedule #770",
    "category": "Graphs",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Adobe", "Oracle"
    ],
    "description": "Given numCourses and prerequisites list, determine if you can finish all courses (i.e., no circular dependency exists).",
    "input_format": "numCourses = 2, prerequisites = [[1,0]]",
    "output_format": "true",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0]]",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 771,
    "title": "Container With Most Water #771",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Walmart", "Flipkart", "Goldman Sachs", "Meta"
    ],
    "description": "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
    "input_format": "height = [1,8,6,2,5,4,8,3,7]",
    "output_format": "49",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,8,6,2,5,4,8,3,7]",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 772,
    "title": "Minimum Window – No Solution Case #772",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Google"
    ],
    "description": "Return an empty string when no window in s can contain all characters of t.",
    "input_format": "s = \"a\", t = \"aa\"",
    "output_format": "\"\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"a\", t = \"aa\"",
    "sample_output": "\"\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 773,
    "title": "Maximum Water Container – Two Pointer #773",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "SAP", "Apple", "Walmart"
    ],
    "description": "Use a two-pointer approach to find the pair of heights that maximizes the trapped water area.",
    "input_format": "height = [4,3,2,1,4]",
    "output_format": "16",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [4,3,2,1,4]",
    "sample_output": "16",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 774,
    "title": "Minimum Window Substring #774",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Meta", "Uber", "Google"
    ],
    "description": "Given strings s and t, return the minimum window in s that contains all characters of t. Return empty string if no such window exists.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "\"BANC\"",
    "constraints": "1 ≤ s.length, t.length ≤ 10^5",
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "sample_output": "\"BANC\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 775,
    "title": "Word Ladder – No Path #775",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Intuit", "Uber"
    ],
    "description": "Return 0 when there is no valid transformation sequence from beginWord to endWord using the given word list.",
    "input_format": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output_format": "0",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "sample_output": "0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 776,
    "title": "Rotate Image – Counter-Clockwise #776",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Meta", "Morgan Stanley", "Apple"
    ],
    "description": "Rotate an n×n matrix 90 degrees counter-clockwise in-place.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "[[3,6,9],[2,5,8],[1,4,7]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "sample_output": "[[3,6,9],[2,5,8],[1,4,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 777,
    "title": "Coin Change – No Solution #777",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Goldman Sachs", "Microsoft", "Netflix"
    ],
    "description": "Return -1 when the given coin denominations cannot make up the target amount.",
    "input_format": "coins = [2], amount = 3",
    "output_format": "-1",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [2], amount = 3",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 778,
    "title": "Top K Frequent – Bucket Sort #778",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Amazon"
    ],
    "description": "Use bucket sort to find the k most frequent elements in O(n) time.",
    "input_format": "nums = [1,2,2,3,3,3], k = 1",
    "output_format": "[3]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,2,3,3,3], k = 1",
    "sample_output": "[3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 779,
    "title": "Inorder Traversal – Morris #779",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Walmart", "Goldman Sachs"
    ],
    "description": "Use Morris traversal to perform an inorder traversal in O(1) extra space.",
    "input_format": "root = [3,1,4,null,2]",
    "output_format": "[1,2,3,4]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [3,1,4,null,2]",
    "sample_output": "[1,2,3,4]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 780,
    "title": "Merge Overlapping Intervals #780",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Netflix", "Apple", "Adobe"
    ],
    "description": "Sort and merge a list of integer intervals so that no two intervals overlap in the result.",
    "input_format": "intervals = [[1,4],[0,2],[3,5]]",
    "output_format": "[[0,5]]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "intervals = [[1,4],[0,2],[3,5]]",
    "sample_output": "[[0,5]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 781,
    "title": "Course Schedule – Cycle Detected #781",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Flipkart"
    ],
    "description": "Return false when the prerequisite graph contains a cycle making it impossible to complete all courses.",
    "input_format": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output_format": "false",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 782,
    "title": "Minimum Window – Repeating Chars #782",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Goldman Sachs", "Intuit"
    ],
    "description": "Find the smallest substring of s containing all characters of t, including duplicates.",
    "input_format": "s = \"aa\", t = \"aa\"",
    "output_format": "\"aa\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"aa\", t = \"aa\"",
    "sample_output": "\"aa\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 783,
    "title": "LRU Cache – Update Existing Key #783",
    "category": "DSA",
    "difficulty": "Easy",
    "company_tags": [
      "Meta", "Google", "Oracle", "Intuit"
    ],
    "description": "When an existing key is updated with put, it should be moved to the most-recently-used position.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "output_format": "10",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); put(1,10); get(1)",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 784,
    "title": "LRU Cache #784",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Flipkart"
    ],
    "description": "Design an LRU (Least Recently Used) cache with get and put operations, each in O(1) time.",
    "input_format": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "output_format": "[null,null,null,1,null,-1]",
    "constraints": "1 ≤ capacity ≤ 3000",
    "sample_input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
    "sample_output": "[null,null,null,1,null,-1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 785,
    "title": "Course Schedule – Order #785",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Intuit", "Amazon"
    ],
    "description": "Return one valid ordering in which all courses can be taken, or an empty array if it is impossible.",
    "input_format": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "output_format": "[0,1,2,3]",
    "constraints": "1 ≤ numCourses ≤ 2000",
    "sample_input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sample_output": "[0,1,2,3]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 786,
    "title": "Rotate Image – Transpose then Flip #786",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Flipkart", "Oracle", "Apple", "Netflix"
    ],
    "description": "Rotate a matrix 90° clockwise by first transposing it and then reversing each row.",
    "input_format": "matrix = [[5,1],[2,3]]",
    "output_format": "[[2,5],[3,1]]",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "matrix = [[5,1],[2,3]]",
    "sample_output": "[[2,5],[3,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 787,
    "title": "Climbing Stairs – Fibonacci Pattern #787",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "company_tags": [
      "Morgan Stanley", "Oracle"
    ],
    "description": "Observe that the number of ways to climb n stairs follows the Fibonacci sequence and compute the answer without extra array space.",
    "input_format": "n = 10",
    "output_format": "89",
    "constraints": "1 ≤ n ≤ 45",
    "sample_input": "n = 10",
    "sample_output": "89",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 788,
    "title": "Container Water – Brute Force vs Optimal #788",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Google", "Intuit"
    ],
    "description": "Find the maximum area of water that can be held between any two vertical lines in the array.",
    "input_format": "height = [1,2,1]",
    "output_format": "2",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "height = [1,2,1]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 789,
    "title": "Islands – Union-Find #789",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Apple", "Walmart", "Oracle", "Uber"
    ],
    "description": "Apply Union-Find (Disjoint Set Union) to count connected components of land cells.",
    "input_format": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 790,
    "title": "Product Except Self – With Zero #790",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Meta"
    ],
    "description": "Compute the product of all other elements for each index in an array that may contain zeros, without using division.",
    "input_format": "nums = [0,1,2,3]",
    "output_format": "[6,0,0,0]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [0,1,2,3]",
    "sample_output": "[6,0,0,0]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 791,
    "title": "Longest No-Repeat Substring – Single Char #791",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Netflix", "SAP"
    ],
    "description": "Return 1 when every character in the input string is identical.",
    "input_format": "s = \"bbbbb\"",
    "output_format": "1",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"bbbbb\"",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 792,
    "title": "Word Ladder – BFS Approach #792",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Netflix", "Amazon", "Goldman Sachs"
    ],
    "description": "Use BFS to explore all one-letter transformations level by level and find the shortest path to endWord.",
    "input_format": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "output_format": "2",
    "constraints": "1 ≤ wordList.length ≤ 5000",
    "sample_input": "beginWord = \"abc\", endWord = \"abd\", wordList = [\"abd\",\"acd\"]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 793,
    "title": "Smallest Window Containing Pattern #793",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "company_tags": [
      "SAP", "Meta"
    ],
    "description": "Use a sliding window with two pointers to find the shortest substring of s that is an anagram-superset of t.",
    "input_format": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "output_format": "\"cwae\"",
    "constraints": "1 ≤ s.length ≤ 10^5",
    "sample_input": "s = \"cabwefgewcwaefgcf\", t = \"cae\"",
    "sample_output": "\"cwae\"",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 794,
    "title": "Coin Change – Unlimited Supply #794",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "company_tags": [
      "Uber", "Netflix", "Oracle"
    ],
    "description": "With unlimited coins of each denomination, find the minimum number of coins to make a given amount.",
    "input_format": "coins = [1,2,5], amount = 11",
    "output_format": "3",
    "constraints": "1 ≤ coins.length ≤ 12",
    "sample_input": "coins = [1,2,5], amount = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 795,
    "title": "Inorder Traversal – Empty Tree #795",
    "category": "Trees",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Netflix", "Meta", "Adobe"
    ],
    "description": "Return an empty list for inorder traversal when the tree has no nodes.",
    "input_format": "root = []",
    "output_format": "[]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = []",
    "sample_output": "[]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 796,
    "title": "Reverse Linked List in Groups #796",
    "category": "Linked Lists",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Goldman Sachs"
    ],
    "description": "Reverse every k nodes of a linked list and return the modified list.",
    "input_format": "head = [1,2,3,4,5], k = 2",
    "output_format": "[2,1,4,3,5]",
    "constraints": "1 ≤ k ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5], k = 2",
    "sample_output": "[2,1,4,3,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 797,
    "title": "Longest Substring Without Repeating Characters #797",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Amazon", "Netflix"
    ],
    "description": "Given a string s, find the length of the longest substring without any repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "3",
    "constraints": "0 ≤ s.length ≤ 5×10^4",
    "sample_input": "s = \"abcabcbb\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 798,
    "title": "Product Array – O(1) Space #798",
    "category": "Arrays",
    "difficulty": "Hard",
    "company_tags": [
      "Apple", "Flipkart", "Goldman Sachs", "Meta"
    ],
    "description": "Return the product-except-self array using only O(1) extra space (the output array does not count).",
    "input_format": "nums = [2,3,4,5]",
    "output_format": "[60,40,30,24]",
    "constraints": "2 ≤ n ≤ 10^5",
    "sample_input": "nums = [2,3,4,5]",
    "sample_output": "[60,40,30,24]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 799,
    "title": "K Most Frequent – Min Heap #799",
    "category": "Hashing",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft"
    ],
    "description": "Use a min-heap of size k to efficiently track the top k most frequent elements.",
    "input_format": "nums = [4,4,4,5,5,6], k = 2",
    "output_format": "[4,5]",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "nums = [4,4,4,5,5,6], k = 2",
    "sample_output": "[4,5]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 800,
    "title": "Linked List Cycle – No Cycle #800",
    "category": "Linked Lists",
    "difficulty": "Hard",
    "company_tags": [
      "SAP", "Goldman Sachs", "Netflix"
    ],
    "description": "Return false when the linked list has no cycle (the tail's next pointer is null).",
    "input_format": "head = [1,2], pos = -1",
    "output_format": "false",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [1,2], pos = -1",
    "sample_output": "false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 801,
    "title": "Star Pyramid Pattern #801",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Apple", "Uber", "Microsoft", "Amazon"
    ],
    "description": "Print a pyramid of stars with N rows where row i has (2i-1) stars centred.",
    "input_format": "N = 4",
    "output_format": "    *\n   ***\n  *****\n *******",
    "constraints": "1 ≤ N ≤ 20",
    "sample_input": "N = 4",
    "sample_output": "Pyramid of 4 rows",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 802,
    "title": "Inverted Star Pyramid #802",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Google"
    ],
    "description": "Print inverted pyramid star pattern",
    "input_format": "n=4",
    "output_format": "*******\\\\n *****\\\\n  ***\\\\n   *",
    "constraints": "1 \\\\u2264 n \\\\u2264 10^5",
    "sample_input": "n=4",
    "sample_output": "*******\\\\n *****\\\\n  ***\\\\n   *",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 803,
    "title": "Diamond Pattern #803",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Amazon", "Intuit"
    ],
    "description": "Print a diamond pattern using stars",
    "input_format": "n=3",
    "output_format": "  *\\\\n ***\\\\n*****\\\\n ***\\\\n  *",
    "constraints": "1 \\\\u2264 n \\\\u2264 10^5",
    "sample_input": "n=3",
    "sample_output": "  *\\\\n ***\\\\n*****\\\\n ***\\\\n  *",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 804,
    "title": "Floyd Triangle #804",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Walmart", "Google", "Intuit", "Netflix"
    ],
    "description": "Print Floyd's triangle",
    "input_format": "n=4",
    "output_format": "1\\\\n2 3\\\\n4 5 6\\\\n7 8 9 10",
    "constraints": "1 \\\\u2264 n \\\\u2264 10^5",
    "sample_input": "n=4",
    "sample_output": "1\\\\n2 3\\\\n4 5 6\\\\n7 8 9 10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 805,
    "title": "Pascal Triangle #805",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Oracle"
    ],
    "description": "Print the first N rows of Pascal's Triangle where each element equals the sum of the two elements above it.",
    "input_format": "N = 5",
    "output_format": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1",
    "constraints": "1 ≤ N ≤ 15",
    "sample_input": "N = 5",
    "sample_output": "5 rows of Pascal's Triangle",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 806,
    "title": "Prime Number Check #806",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Intuit", "Oracle"
    ],
    "description": "Given a number N, determine whether it is a prime number.",
    "input_format": "N = 17",
    "output_format": "true",
    "constraints": "1 ≤ N ≤ 10^6",
    "sample_input": "N = 17",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 807,
    "title": "Armstrong Number #807",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Oracle", "Microsoft", "Walmart", "Intuit"
    ],
    "description": "An Armstrong number of n digits equals the sum of its digits each raised to the power n. Check if a given number is Armstrong.",
    "input_format": "N = 153",
    "output_format": "true",
    "constraints": "1 ≤ N ≤ 10^6",
    "sample_input": "N = 153",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 808,
    "title": "Palindrome Number #808",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Morgan Stanley", "Adobe"
    ],
    "description": "Determine if an integer is a palindrome (reads the same forwards and backwards). Negative numbers are never palindromes.",
    "input_format": "x = 121",
    "output_format": "true",
    "constraints": "−2^31 ≤ x ≤ 2^31−1",
    "sample_input": "x = 121",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 809,
    "title": "Fibonacci Series #809",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Intuit", "Morgan Stanley", "Google"
    ],
    "description": "Print the first N terms of the Fibonacci series (0, 1, 1, 2, 3, 5, ...).",
    "input_format": "N = 7",
    "output_format": "0 1 1 2 3 5 8",
    "constraints": "1 ≤ N ≤ 30",
    "sample_input": "N = 7",
    "sample_output": "0 1 1 2 3 5 8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 810,
    "title": "Factorial of Number #810",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Flipkart", "Oracle", "Goldman Sachs", "Amazon"
    ],
    "description": "Compute factorial of n",
    "input_format": "n=5",
    "output_format": "120",
    "constraints": "1 \\\\u2264 n \\\\u2264 10^5",
    "sample_input": "n=5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 811,
    "title": "Two Sum – Negative Values #811",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Intuit"
    ],
    "description": "Given an array that may contain negative integers and a target, return the indices of two elements that sum to the target.",
    "input_format": "nums = [-3,4,3,90], target = 0",
    "output_format": "[0,2]",
    "constraints": "1 ≤ n ≤ 10^4",
    "sample_input": "nums = [-3,4,3,90], target = 0",
    "sample_output": "[0,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 812,
    "title": "Reverse Linked List #812",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Netflix", "Walmart", "SAP"
    ],
    "description": "Reverse a singly linked list in-place and return the new head.",
    "input_format": "head = [1,2,3,4,5]",
    "output_format": "[5,4,3,2,1]",
    "constraints": "0 ≤ n ≤ 5000",
    "sample_input": "head = [1,2,3,4,5]",
    "sample_output": "[5,4,3,2,1]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 813,
    "title": "Maximum Subarray – All Negative #813",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Microsoft", "SAP", "Adobe"
    ],
    "description": "Find the maximum subarray sum in an array that may be entirely negative; return the single largest element in that case.",
    "input_format": "nums = [-3,-1,-4,-2]",
    "output_format": "-1",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [-3,-1,-4,-2]",
    "sample_output": "-1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 814,
    "title": "Binary Tree Inorder Traversal #814",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Meta", "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the inorder traversal of its node values.",
    "input_format": "root = [1,null,2,3]",
    "output_format": "[1,3,2]",
    "constraints": "0 ≤ n ≤ 100",
    "sample_input": "root = [1,null,2,3]",
    "sample_output": "[1,3,2]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 815,
    "title": "Islands – Single Row #815",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Goldman Sachs", "SAP"
    ],
    "description": "Count islands in a single-row grid where islands are maximal contiguous sequences of 1s.",
    "input_format": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "output_format": "2",
    "constraints": "1 ≤ m,n ≤ 300",
    "sample_input": "grid = [[\"0\",\"1\",\"0\",\"1\",\"1\"]]",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 816,
    "title": "Find HCF of 36 and 48 #816",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the Highest Common Factor (HCF) of two given numbers 36 and 48.",
    "input_format": "Two integers: 36 and 48",
    "output_format": "HCF of the two numbers",
    "constraints": "Numbers are positive integers less than 10^6",
    "sample_input": "36 48",
    "sample_output": "12",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 817,
    "title": "Find LCM of 12 and 18 #817",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Find the Least Common Multiple (LCM) of two given numbers.",
    "input_format": "Two integers: 12 and 18",
    "output_format": "LCM of the two numbers",
    "constraints": "Numbers are positive integers less than 10^4",
    "sample_input": "12 18",
    "sample_output": "36",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 818,
    "title": "Is the number prime? #818",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Given a number N, determine whether it is prime or not.",
    "input_format": "A single integer N",
    "output_format": "YES if prime, NO otherwise",
    "constraints": "2 <= N <= 10^6",
    "sample_input": "17",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 819,
    "title": "Sum of digits #819",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Wipro"
    ],
    "description": "Find the sum of all digits of a given number.",
    "input_format": "A single integer N",
    "output_format": "Sum of its digits",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "1234",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 820,
    "title": "Reverse a number #820",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Accenture"
    ],
    "description": "Reverse the digits of a given integer.",
    "input_format": "A single integer N",
    "output_format": "The reversed number",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "12345",
    "sample_output": "54321",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 821,
    "title": "Count digits #821",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Count the number of digits in a given integer.",
    "input_format": "A single integer N",
    "output_format": "Number of digits",
    "constraints": "1 <= N <= 10^18",
    "sample_input": "987654",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 822,
    "title": "Power of two check #822",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "TCS"
    ],
    "description": "Check if a given number is a power of 2.",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "16",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 823,
    "title": "Factorial of N #823",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "Infosys"
    ],
    "description": "Compute the factorial of a non-negative integer N (N! = 1 × 2 × … × N).",
    "input_format": "N = 5",
    "output_format": "120",
    "constraints": "0 ≤ N ≤ 12",
    "sample_input": "N = 5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 824,
    "title": "Fibonacci Nth term #824",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "CTS"
    ],
    "description": "Find the Nth term in the Fibonacci sequence (0-indexed).",
    "input_format": "A single integer N",
    "output_format": "Nth Fibonacci number",
    "constraints": "0 <= N <= 30",
    "sample_input": "7",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 825,
    "title": "Armstrong number check #825",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Check if a number is an Armstrong number (sum of cubes of digits equals number).",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^4",
    "sample_input": "153",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 826,
    "title": "Perfect number check #826",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "TCS"
    ],
    "description": "A perfect number equals the sum of its proper divisors. Check if given number is perfect.",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^5",
    "sample_input": "28",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 827,
    "title": "Palindrome number #827",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Accenture", "CTS"
    ],
    "description": "Check if a given number reads the same forwards and backwards.",
    "input_format": "A single integer N",
    "output_format": "YES or NO",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "121",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 828,
    "title": "GCD of array #828",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the GCD of all elements in an array.",
    "input_format": "First line: N (size). Second line: N integers",
    "output_format": "GCD of all elements",
    "constraints": "1 <= N <= 100, elements <= 10^6",
    "sample_input": "4\\n12 18 24 36",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 829,
    "title": "LCM of array #829",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "HCL"
    ],
    "description": "Find the LCM of all elements in an array.",
    "input_format": "First line: N. Second line: N integers",
    "output_format": "LCM of all elements",
    "constraints": "1 <= N <= 15, elements <= 100",
    "sample_input": "3\\n4 6 8",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 830,
    "title": "Count primes up to N #830",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "TCS"
    ],
    "description": "Count the number of prime numbers less than or equal to N.",
    "input_format": "A single integer N",
    "output_format": "Count of primes <= N",
    "constraints": "1 <= N <= 10^6",
    "sample_input": "20",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 831,
    "title": "Nth prime number #831",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "CTS"
    ],
    "description": "Find the Nth prime number (1-indexed).",
    "input_format": "A single integer N",
    "output_format": "Nth prime",
    "constraints": "1 <= N <= 1000",
    "sample_input": "5",
    "sample_output": "11",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 832,
    "title": "Sum of primes up to N #832",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "TCS"
    ],
    "description": "Find the sum of all prime numbers up to N.",
    "input_format": "A single integer N",
    "output_format": "Sum of primes",
    "constraints": "1 <= N <= 10^5",
    "sample_input": "10",
    "sample_output": "17",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 833,
    "title": "Digital root #833",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "HCL", "Accenture"
    ],
    "description": "Repeatedly sum digits until single digit (digital root).",
    "input_format": "A single integer N",
    "output_format": "Digital root of N",
    "constraints": "1 <= N <= 10^9",
    "sample_input": "9875",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 834,
    "title": "Smallest prime factor #834",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the smallest prime factor of a given number.",
    "input_format": "A single integer N",
    "output_format": "Smallest prime factor",
    "constraints": "2 <= N <= 10^6",
    "sample_input": "36",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 835,
    "title": "Number of divisors #835",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Count the total number of divisors of N.",
    "input_format": "A single integer N",
    "output_format": "Total divisors of N",
    "constraints": "1 <= N <= 10^6",
    "sample_input": "12",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 836,
    "title": "Simple percentage #836",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find what percentage X is of Y.",
    "input_format": "Two integers X and Y",
    "output_format": "Percentage (integer, floor)",
    "constraints": "1 <= X <= Y <= 10^6",
    "sample_input": "25 200",
    "sample_output": "12",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 837,
    "title": "Percentage increase #837",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "HCL"
    ],
    "description": "Find the percentage increase from old value to new value.",
    "input_format": "Two integers: old new",
    "output_format": "Percentage increase (integer)",
    "constraints": "1 <= old < new <= 10^6",
    "sample_input": "80 100",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 838,
    "title": "Percentage decrease #838",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "Accenture"
    ],
    "description": "Find the percentage decrease from old value to new value.",
    "input_format": "Two integers: old new",
    "output_format": "Percentage decrease (integer)",
    "constraints": "1 <= new < old <= 10^6",
    "sample_input": "100 80",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 839,
    "title": "Value after percentage increase #839",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Given original value and percentage, find value after increase.",
    "input_format": "Two integers: value percent",
    "output_format": "Result after increase",
    "constraints": "1 <= value <= 10^5, 1 <= percent <= 100",
    "sample_input": "200 25",
    "sample_output": "250",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 840,
    "title": "Value after percentage decrease #840",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Given original value and percentage, find value after decrease.",
    "input_format": "Two integers: value percent",
    "output_format": "Result after decrease",
    "constraints": "1 <= value <= 10^5, 1 <= percent <= 100",
    "sample_input": "200 25",
    "sample_output": "150",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 841,
    "title": "Successive percentage #841",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Amazon"
    ],
    "description": "Two successive discounts of p% and q% are applied. Find effective single discount percentage.",
    "input_format": "Two integers p q",
    "output_format": "Effective discount percentage (integer floor)",
    "constraints": "1 <= p,q <= 99",
    "sample_input": "20 10",
    "sample_output": "28",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 842,
    "title": "Profit Percentage #842",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A shopkeeper buys an item for ₹400 and sells it for ₹500. Find the profit percentage.",
    "input_format": "CP=400, SP=500",
    "output_format": "Profit% = 25%",
    "constraints": "Aptitude",
    "sample_input": "CP=400, SP=500",
    "sample_output": "25%",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 843,
    "title": "Selling price from profit% #843",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given cost price and profit percentage, find selling price.",
    "input_format": "Two integers: CP profit_percent",
    "output_format": "Selling Price",
    "constraints": "1 <= CP <= 10^5, 1 <= profit_percent <= 500",
    "sample_input": "100 20",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 844,
    "title": "Cost price from loss% #844",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "HCL", "Accenture"
    ],
    "description": "Given selling price and loss percentage, find cost price.",
    "input_format": "Two integers: SP loss_percent",
    "output_format": "Cost Price",
    "constraints": "1 <= SP <= 10^5, 1 <= loss_percent <= 99",
    "sample_input": "90 10",
    "sample_output": "100",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 845,
    "title": "Marked price discount #845",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Given marked price and discount percentage, find selling price.",
    "input_format": "Two integers: MP discount_percent",
    "output_format": "Selling Price",
    "constraints": "1 <= MP <= 10^5, 1 <= discount_percent <= 99",
    "sample_input": "500 20",
    "sample_output": "400",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 846,
    "title": "Simplify ratio #846",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Simplify a given ratio A:B to its lowest terms.",
    "input_format": "Two integers A and B",
    "output_format": "Simplified ratio as 'X:Y'",
    "constraints": "1 <= A,B <= 10^6",
    "sample_input": "24 36",
    "sample_output": "2:3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 847,
    "title": "Fourth proportional #847",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Find the fourth proportional to A, B, C (A:B = C:?)",
    "input_format": "Three integers A B C",
    "output_format": "Fourth proportional",
    "constraints": "1 <= A,B,C <= 10^4",
    "sample_input": "2 3 4",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 848,
    "title": "Mean proportional #848",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Find the mean proportional between A and B (sqrt(A*B)).",
    "input_format": "Two integers A B",
    "output_format": "Mean proportional (integer)",
    "constraints": "1 <= A,B <= 10^4, A*B is perfect square",
    "sample_input": "4 16",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 849,
    "title": "Ratio division #849",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Divide a total amount in ratio A:B. Print A's share.",
    "input_format": "Three integers: total A B",
    "output_format": "A's share (integer)",
    "constraints": "A+B divides total evenly",
    "sample_input": "100 2 3",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 850,
    "title": "Three-way ratio division #850",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Divide total in ratio A:B:C. Print all three shares.",
    "input_format": "Four integers: total A B C",
    "output_format": "Three shares space separated",
    "constraints": "Sum divides total evenly",
    "sample_input": "120 1 2 3",
    "sample_output": "20 40 60",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 851,
    "title": "Compare ratios #851",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Compare two ratios A:B and C:D. Print GREATER, LESS, or EQUAL.",
    "input_format": "Four integers A B C D",
    "output_format": "GREATER LESS or EQUAL (first ratio vs second)",
    "constraints": "1 <= A,B,C,D <= 10^4",
    "sample_input": "3 4 5 7",
    "sample_output": "GREATER",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 852,
    "title": "Partnership profit share #852",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Two partners invest P1 for T1 months and P2 for T2 months. Total profit is P. Find first partner's share.",
    "input_format": "Five integers: P1 T1 P2 T2 P",
    "output_format": "First partner's profit share",
    "constraints": "All values >= 1",
    "sample_input": "3000 12 4000 10 7000",
    "sample_output": "3000",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 853,
    "title": "Mixture ratio #853",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "Amazon"
    ],
    "description": "A mixture contains milk and water in ratio A:B. How much water to add to C litres to make ratio A:D?",
    "input_format": "Four integers A B C D",
    "output_format": "Litres of water to add",
    "constraints": "Valid ratio inputs",
    "sample_input": "3 1 40 3",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 854,
    "title": "Speed Distance Time – Basic #854",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "A car travels 240 km in 4 hours. Find the speed.",
    "input_format": "Distance=240 km, Time=4 hrs",
    "output_format": "Speed = 60 km/h",
    "constraints": "Aptitude",
    "sample_input": "D=240, T=4",
    "sample_output": "Speed=60 km/h",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 855,
    "title": "Relative speed same direction #855",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Two trains move in same direction at speeds A and B. Find relative speed.",
    "input_format": "Two integers A B",
    "output_format": "Relative speed (absolute difference)",
    "constraints": "1 <= A,B <= 500",
    "sample_input": "60 40",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 856,
    "title": "Relative speed opposite direction #856",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Two trains move in opposite directions at speeds A and B. Find relative speed.",
    "input_format": "Two integers A B",
    "output_format": "Sum of speeds",
    "constraints": "1 <= A,B <= 500",
    "sample_input": "60 40",
    "sample_output": "100",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 857,
    "title": "Train crossing pole #857",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "A train of length L metres runs at S km/h. Find time to cross a pole in seconds.",
    "input_format": "Two integers L S",
    "output_format": "Time in seconds (integer)",
    "constraints": "L and S give integer result",
    "sample_input": "100 36",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 858,
    "title": "Train crossing platform #858",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Train length L1, platform length L2, speed S km/h. Find time to cross in seconds.",
    "input_format": "Three integers L1 L2 S",
    "output_format": "Time in seconds (integer)",
    "constraints": "Result is integer",
    "sample_input": "200 300 90",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 859,
    "title": "Average speed #859",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "CTS"
    ],
    "description": "A person travels D1 km at S1 km/h and D2 km at S2 km/h. Find average speed.",
    "input_format": "Four integers D1 S1 D2 S2",
    "output_format": "Average speed (integer km/h)",
    "constraints": "Result is integer",
    "sample_input": "60 30 60 60",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 860,
    "title": "Boats and streams downstream #860",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Boat speed in still water is B km/h, stream speed is S km/h. Find downstream speed.",
    "input_format": "Two integers B S",
    "output_format": "Downstream speed",
    "constraints": "1 <= S < B <= 100",
    "sample_input": "10 3",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 861,
    "title": "Boats and streams upstream #861",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Boat speed in still water is B km/h, stream speed is S km/h. Find upstream speed.",
    "input_format": "Two integers B S",
    "output_format": "Upstream speed",
    "constraints": "1 <= S < B <= 100",
    "sample_input": "10 3",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 862,
    "title": "Time to meet #862",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Accenture"
    ],
    "description": "Two people start from same point in opposite directions at speeds A and B km/h. Total distance D. When do they meet?",
    "input_format": "Three integers A B D",
    "output_format": "Time in hours (integer)",
    "constraints": "D divisible by (A+B)",
    "sample_input": "60 40 200",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 863,
    "title": "Circular track meeting #863",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "Amazon"
    ],
    "description": "Two runners on circular track of length L. Speeds A and B. Same direction. Time to meet again?",
    "input_format": "Three integers L A B",
    "output_format": "Time in seconds (integer)",
    "constraints": "L divisible by |A-B|",
    "sample_input": "300 10 4",
    "sample_output": "50",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 864,
    "title": "Work Done in Days – Two Workers #864",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "A can complete a job in 10 days, B in 15 days. Working together, how many days to finish?",
    "input_format": "A:10 days, B:15 days",
    "output_format": "6 days",
    "constraints": "Aptitude",
    "sample_input": "A=10, B=15",
    "sample_output": "6 days",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 865,
    "title": "Work with efficiency #865",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A is twice as efficient as B. Together they finish in D days. How long does A alone take?",
    "input_format": "One integer D",
    "output_format": "Days A alone takes",
    "constraints": "1 <= D <= 100",
    "sample_input": "10",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 866,
    "title": "Pipes Filling a Tank #866",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Pipe A fills a tank in 6 hours, Pipe B in 8 hours. Both open together: how long to fill?",
    "input_format": "A:6 hrs, B:8 hrs",
    "output_format": "3 hrs 26 min (24/7 hrs)",
    "constraints": "Aptitude",
    "sample_input": "A=6, B=8",
    "sample_output": "24/7 ≈ 3.43 hrs",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 867,
    "title": "Pipe filling and emptying #867",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Inlet fills in A hours, outlet empties in B hours (B > A). Both open — in how many hours does tank fill?",
    "input_format": "Two integers A B",
    "output_format": "Hours to fill (integer)",
    "constraints": "B > A, result is integer",
    "sample_input": "3 6",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 868,
    "title": "Work left after N days #868",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "A does work in X days, B in Y days. A works alone for D days then B joins. Total days to finish?",
    "input_format": "Three integers X Y D",
    "output_format": "Total days (integer)",
    "constraints": "Valid integer result",
    "sample_input": "12 6 4",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 869,
    "title": "Wages distribution #869",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "A and B together earn W rupees in D days. A alone earns E per day. Find B's daily earning.",
    "input_format": "Three integers W D E",
    "output_format": "B's daily earning",
    "constraints": "Valid integer result",
    "sample_input": "400 10 30",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 870,
    "title": "Three workers #870",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "A, B, C can do work in X, Y, Z days. Working together, how many days to finish?",
    "input_format": "Three integers X Y Z",
    "output_format": "Days (integer, floor)",
    "constraints": "Valid integer result",
    "sample_input": "2 3 6",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 871,
    "title": "Alternate day work #871",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "TCS"
    ],
    "description": "A and B work alternately, A starting first. A finishes in X days, B in Y days. Total days to finish?",
    "input_format": "Two integers X Y",
    "output_format": "Total days",
    "constraints": "1 <= X,Y <= 50",
    "sample_input": "6 12",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 872,
    "title": "Simple Interest #872",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Calculate the simple interest for a principal of ₹5000 at 8% per annum for 3 years.",
    "input_format": "P=5000, R=8%, T=3 years",
    "output_format": "SI = ₹1200",
    "constraints": "Aptitude",
    "sample_input": "P=5000, R=8, T=3",
    "sample_output": "SI = 1200",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 873,
    "title": "Amount after SI #873",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Find total amount after simple interest.",
    "input_format": "Three integers P R T",
    "output_format": "Total Amount (P + SI)",
    "constraints": "1 <= P <= 10^6",
    "sample_input": "1000 5 2",
    "sample_output": "1100",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 874,
    "title": "Compound Interest – Annual #874",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Calculate the compound interest on ₹10000 at 10% per annum compounded annually for 2 years.",
    "input_format": "P=10000, R=10%, T=2",
    "output_format": "CI = ₹2100",
    "constraints": "Aptitude",
    "sample_input": "P=10000, R=10, T=2",
    "sample_output": "CI = 2100",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 875,
    "title": "Amount after CI #875",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "Find total amount after compound interest (annually).",
    "input_format": "Three integers P R T",
    "output_format": "Amount (integer, floor)",
    "constraints": "P<=10^5, R<=20, T<=5",
    "sample_input": "1000 10 2",
    "sample_output": "1210",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 876,
    "title": "SI find rate #876",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "TCS"
    ],
    "description": "Given P, SI, and T, find the rate of interest per annum.",
    "input_format": "Three integers P SI T",
    "output_format": "Rate (integer %)",
    "constraints": "Values give integer rate",
    "sample_input": "1000 200 4",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 877,
    "title": "SI find time #877",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Given P, SI, and R, find the time in years.",
    "input_format": "Three integers P SI R",
    "output_format": "Time in years (integer)",
    "constraints": "Values give integer time",
    "sample_input": "1000 200 5",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 878,
    "title": "Difference CI and SI #878",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the difference between CI and SI for 2 years with principal P and rate R%.",
    "input_format": "Two integers P R",
    "output_format": "CI - SI (integer, floor)",
    "constraints": "P<=10^5, R<=20",
    "sample_input": "1000 10",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 879,
    "title": "CI half yearly #879",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Wipro"
    ],
    "description": "CI compounded half-yearly. Rate R% per annum, principal P, time T years.",
    "input_format": "Three integers P R T",
    "output_format": "Amount (integer, floor)",
    "constraints": "T<=4, R even",
    "sample_input": "1000 10 1",
    "sample_output": "1102",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 880,
    "title": "Average of N numbers #880",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the average of N numbers.",
    "input_format": "First line N, second line N integers",
    "output_format": "Average (integer, floor)",
    "constraints": "1<=N<=100",
    "sample_input": "5\\n10 20 30 40 50",
    "sample_output": "30",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 881,
    "title": "Weighted average #881",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Find weighted average given values and their weights.",
    "input_format": "First line N. Then N pairs: value weight",
    "output_format": "Weighted average (integer, floor)",
    "constraints": "1<=N<=20",
    "sample_input": "3\\n10 2 20 3 30 5",
    "sample_output": "23",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 882,
    "title": "Average after removing element #882",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Average of N numbers is A. If one element X is removed, find new average.",
    "input_format": "Three integers N A X",
    "output_format": "New average (integer, floor)",
    "constraints": "N>=2, N*A-X divisible by N-1",
    "sample_input": "5 20 30",
    "sample_output": "17",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 883,
    "title": "New average after adding #883",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Average of N numbers is A. A new number X is added. Find new average.",
    "input_format": "Three integers N A X",
    "output_format": "New average (integer, floor)",
    "constraints": "N>=1",
    "sample_input": "4 20 40",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 884,
    "title": "Average speed problem #884",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "A person travels from A to B at speed S1 and returns at S2. Find average speed.",
    "input_format": "Two integers S1 S2",
    "output_format": "Average speed (integer, floor)",
    "constraints": "S1,S2>=1",
    "sample_input": "60 40",
    "sample_output": "48",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 885,
    "title": "Average Marks #885",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "A student scores 75, 82, 90, 68, and 85 in five subjects. Find the average.",
    "input_format": "Marks: 75, 82, 90, 68, 85",
    "output_format": "80",
    "constraints": "Aptitude",
    "sample_input": "75, 82, 90, 68, 85",
    "sample_output": "80",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 886,
    "title": "Moving average #886",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given N numbers, output average of every consecutive 3 numbers (floor).",
    "input_format": "First line N, second line N integers",
    "output_format": "Space-separated floor averages",
    "constraints": "N>=3",
    "sample_input": "6\\n1 2 3 4 5 6",
    "sample_output": "2 3 4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 887,
    "title": "nCr calculation #887",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Amazon"
    ],
    "description": "Calculate nCr (combinations).",
    "input_format": "Two integers n r",
    "output_format": "nCr value",
    "constraints": "0<=r<=n<=20",
    "sample_input": "5 2",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 888,
    "title": "nPr calculation #888",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "Infosys"
    ],
    "description": "Calculate nPr (permutations).",
    "input_format": "Two integers n r",
    "output_format": "nPr value",
    "constraints": "0<=r<=n<=12",
    "sample_input": "5 2",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 889,
    "title": "Arrangements in a row #889",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "CTS"
    ],
    "description": "In how many ways can N distinct people sit in a row?",
    "input_format": "One integer N",
    "output_format": "N! (factorial)",
    "constraints": "1<=N<=12",
    "sample_input": "5",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 890,
    "title": "Circular arrangements #890",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "HCL", "Infosys"
    ],
    "description": "In how many ways can N distinct people sit around a circular table?",
    "input_format": "One integer N",
    "output_format": "(N-1)!",
    "constraints": "2<=N<=12",
    "sample_input": "5",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 891,
    "title": "Arrangements with constraint #891",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "TCS", "Amazon"
    ],
    "description": "N people, M must always sit together. Arrangements in a row?",
    "input_format": "Two integers N M",
    "output_format": "Number of arrangements",
    "constraints": "2<=M<=N<=10",
    "sample_input": "5 2",
    "sample_output": "48",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 892,
    "title": "Selecting committee #892",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "TCS"
    ],
    "description": "From N men and M women, select a committee of P people with at least 1 woman.",
    "input_format": "Three integers N M P",
    "output_format": "Number of ways",
    "constraints": "N,M>=1, P<=N+M",
    "sample_input": "3 2 3",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 893,
    "title": "Dice outcomes #893",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Two dice thrown. How many outcomes have sum equal to S?",
    "input_format": "One integer S",
    "output_format": "Count of outcomes",
    "constraints": "2<=S<=12",
    "sample_input": "7",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 894,
    "title": "Coin toss probability #894",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "N fair coins tossed. Probability of exactly K heads? Output as fraction P/Q in lowest terms.",
    "input_format": "Two integers N K",
    "output_format": "Fraction P/Q",
    "constraints": "0<=K<=N<=10",
    "sample_input": "3 2",
    "sample_output": "3/8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 895,
    "title": "Cards probability #895",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "From a deck of 52 cards, find probability of drawing a card of given suit. Output as fraction.",
    "input_format": "One string: HEART/DIAMOND/CLUB/SPADE",
    "output_format": "Fraction P/Q in lowest terms",
    "constraints": "Valid suit name",
    "sample_input": "HEART",
    "sample_output": "1/4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 896,
    "title": "Word arrangements #896",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "TCS"
    ],
    "description": "How many distinct arrangements of the letters of a given word are possible?",
    "input_format": "One word (uppercase, no spaces)",
    "output_format": "Count of distinct arrangements",
    "constraints": "Length <= 10",
    "sample_input": "MISSISSIPPI",
    "sample_output": "34650",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 897,
    "title": "Age after N years #897",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Present age of A is X. Find A's age after N years.",
    "input_format": "Two integers X N",
    "output_format": "Age after N years",
    "constraints": "X,N>=0",
    "sample_input": "25 5",
    "sample_output": "30",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 898,
    "title": "Age ratio problem #898",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Ratio of A's age to B's age is P:Q. After N years ratio becomes R:S. Find present ages.",
    "input_format": "Six integers P Q R S N",
    "output_format": "A's age and B's age space-separated",
    "constraints": "Valid integer solution",
    "sample_input": "3 4 5 6 8",
    "sample_output": "16 20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 899,
    "title": "Father son age #899",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Father is F years old, son is S years old. After how many years will father be twice son's age?",
    "input_format": "Two integers F S",
    "output_format": "Years (integer)",
    "constraints": "F > 2*S initially may vary",
    "sample_input": "40 10",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 900,
    "title": "Average age change #900",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Average age of N people is A. One person of age X leaves and person of age Y joins. New average?",
    "input_format": "Four integers N A X Y",
    "output_format": "New average (integer, floor)",
    "constraints": "Valid inputs",
    "sample_input": "10 30 50 20",
    "sample_output": "29",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 901,
    "title": "Age before N years #901",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Present age is A. What was the age N years ago?",
    "input_format": "Two integers A N",
    "output_format": "Age N years ago",
    "constraints": "A>N",
    "sample_input": "30 5",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 902,
    "title": "Angle between hands #902",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the angle between the hour and minute hand at given time H:M.",
    "input_format": "Two integers H M",
    "output_format": "Angle in degrees (smaller angle, integer)",
    "constraints": "0<=H<=11, 0<=M<=59",
    "sample_input": "3 30",
    "sample_output": "75",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 903,
    "title": "Times hands coincide #903",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "How many times do clock hands coincide between 12:00 and 12:00 (24 hours)?",
    "input_format": "No input (use 24)",
    "output_format": "Count",
    "constraints": "Always 22",
    "sample_input": "0",
    "sample_output": "22",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 904,
    "title": "Clock gains time #904",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "A clock gains G minutes every H hours. If set correctly at 12:00 noon, what time does it show after T hours?",
    "input_format": "Three integers G H T",
    "output_format": "Time in HH:MM format",
    "constraints": "Valid integer result",
    "sample_input": "2 24 48",
    "sample_output": "12:04",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 905,
    "title": "Minutes to next coincidence #905",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "TCS"
    ],
    "description": "At 3:00, after how many minutes will the hands be together?",
    "input_format": "No input",
    "output_format": "Minutes (as fraction M/11, output numerator)",
    "constraints": "Always 180/11",
    "sample_input": "0",
    "sample_output": "180",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 906,
    "title": "Day of week #906",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given a date D/M/Y, find what day of the week it is.",
    "input_format": "Three integers D M Y",
    "output_format": "Day name (MONDAY etc.)",
    "constraints": "1<=D<=31, valid date, Y>=1900",
    "sample_input": "1 1 2024",
    "sample_output": "MONDAY",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 907,
    "title": "Odd days in century #907",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "How many odd days in N complete years? (Use standard odd-days method)",
    "input_format": "One integer N (0,100,200,400 only for this problem)",
    "output_format": "Odd days",
    "constraints": "N in {0,100,200,400}",
    "sample_input": "100",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 908,
    "title": "Leap year check #908",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Check if a given year is a leap year.",
    "input_format": "One integer Y",
    "output_format": "YES or NO",
    "constraints": "1<=Y<=9999",
    "sample_input": "2000",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 909,
    "title": "Days between dates #909",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Find number of days between two dates D1/M1/Y1 and D2/M2/Y2.",
    "input_format": "Six integers D1 M1 Y1 D2 M2 Y2",
    "output_format": "Number of days",
    "constraints": "Valid dates, same year for simplicity",
    "sample_input": "1 1 2024 31 12 2024",
    "sample_output": "365",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 910,
    "title": "Area of rectangle #910",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Find area of rectangle with length L and breadth B.",
    "input_format": "Two integers L B",
    "output_format": "Area",
    "constraints": "1<=L,B<=10^4",
    "sample_input": "12 5",
    "sample_output": "60",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 911,
    "title": "Perimeter of rectangle #911",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "CTS"
    ],
    "description": "Find perimeter of rectangle with length L and breadth B.",
    "input_format": "Two integers L B",
    "output_format": "Perimeter",
    "constraints": "1<=L,B<=10^4",
    "sample_input": "12 5",
    "sample_output": "34",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 912,
    "title": "Area of circle #912",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Find area of circle with radius R. Use pi=22/7. Output integer floor.",
    "input_format": "One integer R",
    "output_format": "Area (integer, floor)",
    "constraints": "1<=R<=1000",
    "sample_input": "7",
    "sample_output": "154",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 913,
    "title": "Circumference of circle #913",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "Accenture"
    ],
    "description": "Find circumference of circle with radius R. Use pi=22/7. Output integer floor.",
    "input_format": "One integer R",
    "output_format": "Circumference (integer, floor)",
    "constraints": "1<=R<=1000",
    "sample_input": "7",
    "sample_output": "44",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 914,
    "title": "Area of triangle #914",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find area of triangle with base B and height H.",
    "input_format": "Two integers B H",
    "output_format": "Area (integer, floor if odd)",
    "constraints": "1<=B,H<=10^4",
    "sample_input": "10 6",
    "sample_output": "30",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 915,
    "title": "Volume of cuboid #915",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Find volume of cuboid with L, B, H.",
    "input_format": "Three integers L B H",
    "output_format": "Volume",
    "constraints": "1<=L,B,H<=100",
    "sample_input": "4 5 6",
    "sample_output": "120",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 916,
    "title": "Volume of cylinder #916",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Find volume of cylinder with radius R and height H. Use pi=22/7, floor result.",
    "input_format": "Two integers R H",
    "output_format": "Volume (integer, floor)",
    "constraints": "1<=R,H<=100",
    "sample_input": "7 10",
    "sample_output": "1540",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 917,
    "title": "Surface area of cube #917",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "Find total surface area of cube with side S.",
    "input_format": "One integer S",
    "output_format": "Surface area",
    "constraints": "1<=S<=100",
    "sample_input": "5",
    "sample_output": "150",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 918,
    "title": "Diagonal of rectangle #918",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "CTS"
    ],
    "description": "Find diagonal of rectangle with L and B. Output integer if perfect square, else floor.",
    "input_format": "Two integers L B",
    "output_format": "Diagonal (integer, floor)",
    "constraints": "1<=L,B<=100",
    "sample_input": "3 4",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 919,
    "title": "Area of trapezium #919",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "HCL"
    ],
    "description": "Find area of trapezium: 0.5*(a+b)*h where a,b are parallel sides.",
    "input_format": "Three integers a b h",
    "output_format": "Area (integer, floor)",
    "constraints": "1<=a,b,h<=100",
    "sample_input": "6 4 5",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 920,
    "title": "Alligation rule #920",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find ratio to mix two ingredients at prices P1 and P2 to get mean price M.",
    "input_format": "Three integers P1 P2 M",
    "output_format": "Ratio as X:Y (P2-M : M-P1)",
    "constraints": "P1<M<P2",
    "sample_input": "20 30 25",
    "sample_output": "1:1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 921,
    "title": "Mixture replacement #921",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Vessel has M litres of liquid. X litres removed and replaced with water, done N times. Final amount of original liquid?",
    "input_format": "Three integers M X N",
    "output_format": "Final quantity (integer, floor)",
    "constraints": "Valid inputs",
    "sample_input": "100 10 3",
    "sample_output": "72",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 922,
    "title": "Milk water ratio after mixing #922",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Container A has a:b milk:water. Container B has c:d milk:water. Equal volumes mixed. Final milk:water ratio?",
    "input_format": "Four integers a b c d",
    "output_format": "Ratio as X:Y simplified",
    "constraints": "Valid inputs",
    "sample_input": "3 1 1 1",
    "sample_output": "1:1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 923,
    "title": "Number to words #923",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Convert a single digit number to its English word.",
    "input_format": "One integer N (0-9)",
    "output_format": "Word in uppercase",
    "constraints": "0<=N<=9",
    "sample_input": "5",
    "sample_output": "FIVE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 924,
    "title": "Binary to decimal #924",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Convert a binary number (given as string) to decimal.",
    "input_format": "A binary string",
    "output_format": "Decimal value",
    "constraints": "Length <= 20",
    "sample_input": "1010",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 925,
    "title": "Decimal to binary #925",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Convert a decimal number to binary string.",
    "input_format": "One integer N",
    "output_format": "Binary string",
    "constraints": "1<=N<=10^6",
    "sample_input": "10",
    "sample_output": "1010",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 926,
    "title": "Octal to decimal #926",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Convert an octal number to decimal.",
    "input_format": "One integer (octal)",
    "output_format": "Decimal value",
    "constraints": "Valid octal <= 10^6",
    "sample_input": "17",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 927,
    "title": "Hexadecimal to decimal #927",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Convert a hexadecimal string to decimal.",
    "input_format": "One hex string (uppercase)",
    "output_format": "Decimal value",
    "constraints": "Valid hex",
    "sample_input": "1F",
    "sample_output": "31",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 928,
    "title": "Next in AP #928",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given first three terms of an AP, find the next term.",
    "input_format": "Three integers",
    "output_format": "Next term",
    "constraints": "Valid AP",
    "sample_input": "2 5 8",
    "sample_output": "11",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 929,
    "title": "Next in GP #929",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Given first three terms of a GP, find the next term.",
    "input_format": "Three integers",
    "output_format": "Next term",
    "constraints": "Valid GP",
    "sample_input": "2 6 18",
    "sample_output": "54",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 930,
    "title": "Sum of AP #930",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Sum of AP with first term A, common difference D, N terms.",
    "input_format": "Three integers A D N",
    "output_format": "Sum of N terms",
    "constraints": "1<=N<=100",
    "sample_input": "1 2 5",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 931,
    "title": "Sum of GP #931",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "Sum of GP with first term A, ratio R, N terms.",
    "input_format": "Three integers A R N",
    "output_format": "Sum (integer)",
    "constraints": "1<=N<=10, R<=5",
    "sample_input": "1 2 5",
    "sample_output": "31",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 932,
    "title": "Missing number in series #932",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Find the missing number: given N-1 numbers from 1 to N, find the missing one.",
    "input_format": "First line N. Second line N-1 integers",
    "output_format": "Missing number",
    "constraints": "1<=N<=10^6",
    "sample_input": "5\\n1 2 4 5",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 933,
    "title": "Odd one out in series #933",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Given a series of 5 numbers where 4 follow a pattern and 1 is wrong, find the wrong one.",
    "input_format": "Five integers",
    "output_format": "The wrong number",
    "constraints": "Series has one outlier",
    "sample_input": "2 4 8 15 32",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 934,
    "title": "Linear equation solve #934",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Solve Ax + B = C for x.",
    "input_format": "Three integers A B C",
    "output_format": "Value of x (integer)",
    "constraints": "A!=0, (C-B) divisible by A",
    "sample_input": "3 2 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 935,
    "title": "Quadratic roots #935",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Given Ax^2 + Bx + C = 0, find roots. Print REAL or COMPLEX.",
    "input_format": "Three integers A B C",
    "output_format": "REAL or COMPLEX",
    "constraints": "A!=0",
    "sample_input": "1 -5 6",
    "sample_output": "REAL",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 936,
    "title": "Two equations #936",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Solve: A1x+B1y=C1 and A2x+B2y=C2. Find x and y.",
    "input_format": "Six integers A1 B1 C1 A2 B2 C2",
    "output_format": "x and y space-separated (integers)",
    "constraints": "Unique integer solution",
    "sample_input": "1 1 5 2 -1 1",
    "sample_output": "2 3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 937,
    "title": "Inequality solve #937",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Solve Ax + B > C. Find smallest integer x satisfying this.",
    "input_format": "Three integers A B C",
    "output_format": "Smallest integer x",
    "constraints": "A>0",
    "sample_input": "2 3 7",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 938,
    "title": "Pipes A B C #938",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Pipes A, B, C can fill tank in X, Y, Z hours. All open together, tank fills in?",
    "input_format": "Three integers X Y Z",
    "output_format": "Hours (integer, floor)",
    "constraints": "Valid integer result",
    "sample_input": "6 8 24",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 939,
    "title": "Boats meet middle #939",
    "category": "Aptitude",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "TCS"
    ],
    "description": "Two boats start from opposite ends of river D km wide. Speeds A and B km/h. Where do they first meet from side A?",
    "input_format": "Three integers D A B",
    "output_format": "Distance from A (integer, floor)",
    "constraints": "Valid integer",
    "sample_input": "100 20 30",
    "sample_output": "40",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 940,
    "title": "Number of handshakes #940",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "CTS"
    ],
    "description": "N people in a room each shake hands with everyone else exactly once. Total handshakes?",
    "input_format": "One integer N",
    "output_format": "Total handshakes = N*(N-1)/2",
    "constraints": "2<=N<=1000",
    "sample_input": "5",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 941,
    "title": "Staircase steps #941",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "A person can climb 1 or 2 stairs at a time. Ways to reach Nth stair?",
    "input_format": "One integer N",
    "output_format": "Number of ways",
    "constraints": "1<=N<=30",
    "sample_input": "5",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 942,
    "title": "Probability – Drawing a Ball #942",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "Infosys"
    ],
    "description": "A bag has 5 red and 3 blue balls. What is the probability of drawing a red ball?",
    "input_format": "Red=5, Blue=3",
    "output_format": "5/8",
    "constraints": "Aptitude",
    "sample_input": "Red=5, Blue=3",
    "sample_output": "5/8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 943,
    "title": "Compound ratio #943",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "CTS"
    ],
    "description": "Find compound ratio of A:B and C:D (= AC:BD simplified).",
    "input_format": "Four integers A B C D",
    "output_format": "Simplified ratio X:Y",
    "constraints": "Valid integers",
    "sample_input": "2 3 4 5",
    "sample_output": "8:15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 944,
    "title": "Population growth #944",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Population P grows at R% per year. Population after T years?",
    "input_format": "Three integers P R T",
    "output_format": "Population (integer, floor)",
    "constraints": "P<=10^6, R<=10, T<=10",
    "sample_input": "1000 10 2",
    "sample_output": "1210",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 945,
    "title": "Depreciation #945",
    "category": "Aptitude",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Value V depreciates at R% per year. Value after T years?",
    "input_format": "Three integers V R T",
    "output_format": "Value (integer, floor)",
    "constraints": "V<=10^6, R<=20, T<=5",
    "sample_input": "10000 10 2",
    "sample_output": "8100",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 946,
    "title": "Ratio to percentage #946",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "Accenture"
    ],
    "description": "Convert ratio A:B to percentage share of A (floor).",
    "input_format": "Two integers A B",
    "output_format": "Percentage of A (integer, floor)",
    "constraints": "A+B>0",
    "sample_input": "1 4",
    "sample_output": "20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 947,
    "title": "Tax calculation #947",
    "category": "Aptitude",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Income I, Tax rate R%. Find tax payable.",
    "input_format": "Two integers I R",
    "output_format": "Tax amount (integer, floor)",
    "constraints": "I,R>=1",
    "sample_input": "50000 20",
    "sample_output": "10000",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 948,
    "title": "Letter series next #948",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the next letter in the series: A C E G ?",
    "input_format": "A single letter series as space-separated letters",
    "output_format": "Next letter",
    "constraints": "Valid series",
    "sample_input": "A C E G",
    "sample_output": "I",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 949,
    "title": "Number Series – Find Next #949",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Find the next number in the arithmetic sequence: 2, 5, 8, 11, ...",
    "input_format": "2, 5, 8, 11, ?",
    "output_format": "14",
    "constraints": "Logical Reasoning",
    "sample_input": "2, 5, 8, 11, ?",
    "sample_output": "14",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 950,
    "title": "Alphanumeric series #950",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Find next: A1 B2 C3 D4 ?",
    "input_format": "Space-separated alphanumeric terms",
    "output_format": "Next term",
    "constraints": "Valid series",
    "sample_input": "A1 B2 C3 D4",
    "sample_output": "E5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 951,
    "title": "Missing in series #951",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Find the missing number: 2 4 _ 16 32",
    "input_format": "Five terms with one blank as 0",
    "output_format": "Missing number",
    "constraints": "Valid series",
    "sample_input": "2 4 0 16 32",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 952,
    "title": "Alternate series #952",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Two series interleaved: 1 2 3 4 5 6 7 8 _ What comes next?",
    "input_format": "Space-separated series",
    "output_format": "Next number",
    "constraints": "Interleaved pattern",
    "sample_input": "1 2 3 4 5 6 7 8",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 953,
    "title": "Difference series #953",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Differences: 1 2 4 7 11 16 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Differences increase by 1",
    "sample_input": "1 2 4 7 11 16",
    "sample_output": "22",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 954,
    "title": "Multiply series #954",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Series: 3 6 12 24 48 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Each term doubled",
    "sample_input": "3 6 12 24 48",
    "sample_output": "96",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 955,
    "title": "Square series #955",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Series: 1 4 9 16 25 36 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Squares",
    "sample_input": "1 4 9 16 25 36",
    "sample_output": "49",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 956,
    "title": "Cube series #956",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Series: 1 8 27 64 125 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Cubes",
    "sample_input": "1 8 27 64 125",
    "sample_output": "216",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 957,
    "title": "Mixed operation series #957",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "Series: 2 3 5 9 17 33 ?",
    "input_format": "Space-separated numbers",
    "output_format": "Next number",
    "constraints": "Double previous minus something",
    "sample_input": "2 3 5 9 17 33",
    "sample_output": "65",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 958,
    "title": "Caesar cipher decode #958",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "If APPLE is coded as DSSOH (shift+3), decode given word.",
    "input_format": "A coded word (uppercase)",
    "output_format": "Decoded word (uppercase)",
    "constraints": "Shift is always 3",
    "sample_input": "KHOOR",
    "sample_output": "HELLO",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 959,
    "title": "Reverse word code #959",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "If coding reverses each word, decode: OLLEH DLROW",
    "input_format": "Space-separated coded words",
    "output_format": "Original words space-separated",
    "constraints": "Each word reversed",
    "sample_input": "OLLEH DLROW",
    "sample_output": "HELLO WORLD",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 960,
    "title": "Letter shift by position #960",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Each letter shifted by its 1-indexed position. A(+1)=B, P(+2)=R... Encode given word.",
    "input_format": "A word (uppercase)",
    "output_format": "Encoded word",
    "constraints": "Standard alphabet shift",
    "sample_input": "ACE",
    "sample_output": "BEI",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 961,
    "title": "Number to letter code #961",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "A=1, B=2...Z=26. Decode space-separated numbers to word.",
    "input_format": "Space-separated integers",
    "output_format": "Decoded word (uppercase)",
    "constraints": "1<=each<=26",
    "sample_input": "8 5 12 12 15",
    "sample_output": "HELLO",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 962,
    "title": "Letter to number code #962",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Encode a word: replace each letter with its position (A=1, B=2...). Space-separated.",
    "input_format": "A word (uppercase)",
    "output_format": "Space-separated numbers",
    "constraints": "Valid word",
    "sample_input": "JAVA",
    "sample_output": "10 1 22 1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 963,
    "title": "Mirror alphabet #963",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Mirror alphabet: A=Z, B=Y... Encode given word.",
    "input_format": "A word (uppercase)",
    "output_format": "Encoded word",
    "constraints": "A<->Z, B<->Y etc.",
    "sample_input": "HELLO",
    "sample_output": "SVOOL",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 964,
    "title": "Even letters only #964",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Extract only letters at even positions (1-indexed: 2,4,6...) from word.",
    "input_format": "A word (uppercase)",
    "output_format": "Even-position letters",
    "constraints": "Length>=2",
    "sample_input": "ABCDEF",
    "sample_output": "BDF",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 965,
    "title": "Skip one letter #965",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "If A is coded as C (skip one), B as D... encode given word.",
    "input_format": "A word (uppercase)",
    "output_format": "Encoded word",
    "constraints": "Skip 2 letters",
    "sample_input": "HELLO",
    "sample_output": "JGNNQ",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 966,
    "title": "Interleave two words #966",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Interleave letters of two words: AB + CD = ACBD. Given result, find original two words of equal length.",
    "input_format": "One interleaved word (uppercase, even length)",
    "output_format": "Two words space-separated",
    "constraints": "Equal length halves",
    "sample_input": "ACBD",
    "sample_output": "AB CD",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 967,
    "title": "Number code pattern #967",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "If 123 = 6 (sum of digits), 456 = 15... what is 789?",
    "input_format": "One 3-digit number",
    "output_format": "Sum of its digits",
    "constraints": "Digit sum pattern",
    "sample_input": "789",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 968,
    "title": "Parent child #968",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "A is B's father. B is C's son. What is A to C?",
    "input_format": "Index 1",
    "output_format": "GRANDFATHER",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "GRANDFATHER",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 969,
    "title": "Sibling relation #969",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A is B's brother. B is C's sister. What is A to C?",
    "input_format": "Index 1",
    "output_format": "BROTHER",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "BROTHER",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 970,
    "title": "Mother's brother #970",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "What do you call your mother's brother?",
    "input_format": "Index 1",
    "output_format": "UNCLE",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "UNCLE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 971,
    "title": "Father's sister's son #971",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "What is your father's sister's son to you?",
    "input_format": "Index 1",
    "output_format": "COUSIN",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "COUSIN",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 972,
    "title": "Grandmother relation #972",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "A's mother is B's grandmother. What is A to B?",
    "input_format": "Index 1",
    "output_format": "PARENT",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "PARENT",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 973,
    "title": "Son's wife #973",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "What do you call your son's wife?",
    "input_format": "Index 1",
    "output_format": "DAUGHTER-IN-LAW",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "DAUGHTER-IN-LAW",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 974,
    "title": "Pointing relation #974",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "A says pointing to B: He is the son of my father's only son. Who is B to A?",
    "input_format": "Index 1",
    "output_format": "SON",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "SON",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 975,
    "title": "Sister's husband #975",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "What do you call your sister's husband?",
    "input_format": "Index 1",
    "output_format": "BROTHER-IN-LAW",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "BROTHER-IN-LAW",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 976,
    "title": "Final direction #976",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Person walks North 5km, turns right 3km, turns right 5km. Which direction facing?",
    "input_format": "Index 1",
    "output_format": "WEST",
    "constraints": "Fixed problem",
    "sample_input": "1",
    "sample_output": "WEST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 977,
    "title": "Distance from start #977",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Person walks East 3km, North 4km. Straight line distance from start?",
    "input_format": "Index 1",
    "output_format": "5 km",
    "constraints": "Pythagorean triple",
    "sample_input": "1",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 978,
    "title": "Opposite direction #978",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Facing South, turn left 90 degrees. Now facing?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 979,
    "title": "Shadow direction #979",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Morning (sun in East). Person faces North. Shadow falls in which direction?",
    "input_format": "Index 1",
    "output_format": "WEST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "WEST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 980,
    "title": "Sunset shadow #980",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Evening (sun in West). Person faces South. Shadow falls in which direction?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 981,
    "title": "Four turns #981",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Start facing North. Turn right, right, left. Final direction?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 982,
    "title": "Compass bearing #982",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Which direction is opposite to North-West?",
    "input_format": "Index 1",
    "output_format": "SOUTH-EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "SOUTH-EAST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 983,
    "title": "Return direction #983",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Walked West to reach B from A. To return from B to A, walk in which direction?",
    "input_format": "Index 1",
    "output_format": "EAST",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "EAST",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 984,
    "title": "Rank from top #984",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "In a class of N students, A ranks R from top. What is A's rank from bottom?",
    "input_format": "Two integers N R",
    "output_format": "Rank from bottom = N-R+1",
    "constraints": "N>=R>=1",
    "sample_input": "40 10",
    "sample_output": "31",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 985,
    "title": "Rank from bottom #985",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Total N students. Rank from bottom is B. Rank from top?",
    "input_format": "Two integers N B",
    "output_format": "Rank from top = N-B+1",
    "constraints": "N>=B>=1",
    "sample_input": "50 15",
    "sample_output": "36",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 986,
    "title": "Position between two #986",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "A is R1 from top, B is R2 from bottom in a row of N. How many are between them?",
    "input_format": "Three integers N R1 R2",
    "output_format": "People between them",
    "constraints": "Valid positions",
    "sample_input": "10 3 4",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 987,
    "title": "Tallest in row #987",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Given N heights, output rank (from tallest) of each person.",
    "input_format": "First line N, second line N heights",
    "output_format": "Space-separated ranks",
    "constraints": "N<=20",
    "sample_input": "5\\n170 165 180 175 160",
    "sample_output": "3 4 1 2 5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 988,
    "title": "Minimum rank #988",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Given N scores, find minimum possible rank if ties share the same rank.",
    "input_format": "First line N, second line N scores, third line target score X",
    "output_format": "Minimum rank of person with score X",
    "constraints": "N<=20",
    "sample_input": "5\\n85 90 85 70 90\\n85",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 989,
    "title": "All A are B #989",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Premises: All cats are animals. All animals are living. Conclusion: All cats are living?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Valid syllogism",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 990,
    "title": "Some A are B #990",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Premises: Some dogs are pets. All pets are friendly. Conclusion: Some dogs are friendly?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Valid syllogism",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 991,
    "title": "No A are B #991",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Premises: No cat is a dog. All dogs bark. Conclusion: No cat barks?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Invalid conclusion",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 992,
    "title": "Some not #992",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Premises: Some students are smart. Some smart people are rich. Conclusion: Some students are rich?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Not necessarily true",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 993,
    "title": "Universal affirmative #993",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "All roses are flowers. Some flowers fade. Some roses fade?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Not necessarily true",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 994,
    "title": "Seating arrangement circle #994",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "5 people A B C D E sit in circle. A is between B and C. D is to immediate right of C. Who is to immediate right of A?",
    "input_format": "Index 1",
    "output_format": "B",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "B",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 995,
    "title": "Who is tallest #995",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A>B, C>A, D<B, E>C. Who is tallest?",
    "input_format": "Index 1",
    "output_format": "E",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "E",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 996,
    "title": "Who is shortest #996",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "A>B, C>A, D<B, E>C. Who is shortest?",
    "input_format": "Index 1",
    "output_format": "D",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "D",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 997,
    "title": "Box stacking #997",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Box A on top of B. B on top of C. D is below C. Which box is at bottom?",
    "input_format": "Index 1",
    "output_format": "D",
    "constraints": "Fixed puzzle",
    "sample_input": "1",
    "sample_output": "D",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 998,
    "title": "Floor puzzle #998",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "6-floor building. A lives above B. B lives above C. C is on floor 2. A is on floor?",
    "input_format": "Index 1",
    "output_format": "4",
    "constraints": "Variable — use 4",
    "sample_input": "1",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 999,
    "title": "Age ordering #999",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Ram is older than Shyam. Shyam is older than Mohan. Who is youngest?",
    "input_format": "Index 1",
    "output_format": "MOHAN",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "MOHAN",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1000,
    "title": "Weight ordering #1000",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "P > Q > R. Q > S. Who is heaviest?",
    "input_format": "Index 1",
    "output_format": "P",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "P",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1001,
    "title": "Between in order #1001",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A B C D E stand in line. C is between A and E. B is between A and C. Who is second from left?",
    "input_format": "Index 1",
    "output_format": "B",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "B",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1002,
    "title": "Odd number out #1002",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Find the odd one out: 2 3 5 7 9 11",
    "input_format": "Space-separated numbers",
    "output_format": "The odd one out",
    "constraints": "One not prime",
    "sample_input": "2 3 5 7 9 11",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1003,
    "title": "Odd shape out #1003",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Odd one out: CIRCLE SQUARE TRIANGLE CUBE RECTANGLE",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "3D vs 2D",
    "sample_input": "CIRCLE SQUARE TRIANGLE CUBE RECTANGLE",
    "sample_output": "CUBE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1004,
    "title": "Odd fruit out #1004",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Odd one out: APPLE MANGO CARROT BANANA GRAPE",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Vegetable among fruits",
    "sample_input": "APPLE MANGO CARROT BANANA GRAPE",
    "sample_output": "CARROT",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1005,
    "title": "Odd mammal out #1005",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Odd one out: DOG CAT SNAKE LION TIGER",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Reptile among mammals",
    "sample_input": "DOG CAT SNAKE LION TIGER",
    "sample_output": "SNAKE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1006,
    "title": "Odd number pattern #1006",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Odd one out: 6 10 15 21 28",
    "input_format": "Space-separated numbers",
    "output_format": "The odd one out",
    "constraints": "One not triangular",
    "sample_input": "6 10 15 21 28",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1007,
    "title": "Odd instrument out #1007",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Odd one out: GUITAR VIOLIN FLUTE DRUMS SITAR",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Wind instrument",
    "sample_input": "GUITAR VIOLIN FLUTE DRUMS SITAR",
    "sample_output": "FLUTE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1008,
    "title": "Odd planet out #1008",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Odd one out: MARS VENUS MOON EARTH SATURN",
    "input_format": "Space-separated words",
    "output_format": "The odd one out",
    "constraints": "Not a planet",
    "sample_input": "MARS VENUS MOON EARTH SATURN",
    "sample_output": "MOON",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1009,
    "title": "Word analogy #1009",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Doctor : Hospital :: Teacher : ?",
    "input_format": "Index 1",
    "output_format": "SCHOOL",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "SCHOOL",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1010,
    "title": "Tool analogy #1010",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Pen : Write :: Knife : ?",
    "input_format": "Index 1",
    "output_format": "CUT",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "CUT",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1011,
    "title": "Animal sound analogy #1011",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Dog : Bark :: Cat : ?",
    "input_format": "Index 1",
    "output_format": "MEOW",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "MEOW",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1012,
    "title": "Young one analogy #1012",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Cow : Calf :: Horse : ?",
    "input_format": "Index 1",
    "output_format": "FOAL",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "FOAL",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1013,
    "title": "Capital analogy #1013",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "India : Delhi :: Japan : ?",
    "input_format": "Index 1",
    "output_format": "TOKYO",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "TOKYO",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1014,
    "title": "Number analogy #1014",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "4 : 16 :: 5 : ?",
    "input_format": "Index 1",
    "output_format": "25",
    "constraints": "Squares",
    "sample_input": "1",
    "sample_output": "25",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1015,
    "title": "Cube analogy #1015",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "2 : 8 :: 3 : ?",
    "input_format": "Index 1",
    "output_format": "27",
    "constraints": "Cubes",
    "sample_input": "1",
    "sample_output": "27",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1016,
    "title": "Opposite analogy #1016",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Hot : Cold :: Day : ?",
    "input_format": "Index 1",
    "output_format": "NIGHT",
    "constraints": "Opposites",
    "sample_input": "1",
    "sample_output": "NIGHT",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1017,
    "title": "Part to whole #1017",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Page : Book :: Brick : ?",
    "input_format": "Index 1",
    "output_format": "WALL",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "WALL",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1018,
    "title": "Worker place #1018",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "Farmer : Field :: Soldier : ?",
    "input_format": "Index 1",
    "output_format": "BATTLEFIELD",
    "constraints": "Fixed analogy",
    "sample_input": "1",
    "sample_output": "BATTLEFIELD",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1019,
    "title": "2x2 matrix pattern #1019",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Matrix: 1 2 / 3 ? Pattern: each row sum equals 5. Find ?.",
    "input_format": "Index 1",
    "output_format": "2",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1020,
    "title": "3x3 magic square check #1020",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Given a 3x3 matrix, check if it is a magic square (all rows, cols, diagonals equal sum).",
    "input_format": "9 integers (row by row)",
    "output_format": "YES or NO",
    "constraints": "Valid 3x3 matrix",
    "sample_input": "2 7 6 9 5 1 4 3 8",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1021,
    "title": "Row sum pattern #1021",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Each row of matrix sums to same value. Row1: 3 5 7, Row2: 4 ? 8. Find ?.",
    "input_format": "Index 1",
    "output_format": "3",
    "constraints": "Sum pattern",
    "sample_input": "1",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1022,
    "title": "Diagonal sum #1022",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Find sum of primary diagonal of NxN matrix.",
    "input_format": "First line N, then N*N integers row by row",
    "output_format": "Sum of primary diagonal",
    "constraints": "1<=N<=10",
    "sample_input": "3\\n1 2 3 4 5 6 7 8 9",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1023,
    "title": "Rotate matrix 90 #1023",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Rotate a 2x2 matrix 90 degrees clockwise. Print result row by row.",
    "input_format": "4 integers (2x2 row by row)",
    "output_format": "4 integers (rotated, row by row)",
    "constraints": "2x2 only",
    "sample_input": "1 2 3 4",
    "sample_output": "3 1 4 2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1024,
    "title": "Time forward #1024",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Current time is H:M. What time is it after X minutes?",
    "input_format": "Three integers H M X",
    "output_format": "Time as HH:MM",
    "constraints": "0<=H<=23, 0<=M<=59, X>=0",
    "sample_input": "10 45 30",
    "sample_output": "11:15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1025,
    "title": "Time backward #1025",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Current time is H:M. What was the time X minutes ago?",
    "input_format": "Three integers H M X",
    "output_format": "Time as HH:MM",
    "constraints": "0<=H<=23, 0<=M<=59",
    "sample_input": "10 15 30",
    "sample_output": "9:45",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1026,
    "title": "Hours between times #1026",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "From H1:M1 to H2:M2, how many minutes?",
    "input_format": "Four integers H1 M1 H2 M2",
    "output_format": "Minutes difference",
    "constraints": "H2>H1 or same hour M2>M1",
    "sample_input": "9 30 11 00",
    "sample_output": "90",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1027,
    "title": "Fast clock #1027",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Clock shows 10:00 but is 15 minutes fast. Actual time?",
    "input_format": "Index 1",
    "output_format": "9:45",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "9:45",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1028,
    "title": "Slow clock #1028",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Clock shows 3:00 but is 20 minutes slow. Actual time?",
    "input_format": "Index 1",
    "output_format": "3:20",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "3:20",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1029,
    "title": "Day after N days #1029",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "If today is MONDAY and N=10, what day is it after N days?",
    "input_format": "Two inputs: day name and N",
    "output_format": "Day name",
    "constraints": "Valid day and N>=0",
    "sample_input": "MONDAY 10",
    "sample_output": "THURSDAY",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1030,
    "title": "Day before N days #1030",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "If today is FRIDAY and N=3, what day was it N days ago?",
    "input_format": "Two inputs: day name and N",
    "output_format": "Day name",
    "constraints": "Valid",
    "sample_input": "FRIDAY 3",
    "sample_output": "TUESDAY",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1031,
    "title": "Day of week for date #1031",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Given 1 Jan 2024 is Monday, what day is 1 Feb 2024? (2024 is leap year)",
    "input_format": "Index 1",
    "output_format": "THURSDAY",
    "constraints": "Jan has 31 days, 31 mod 7 = 3",
    "sample_input": "1",
    "sample_output": "THURSDAY",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1032,
    "title": "Week number #1032",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Day D of a month falls on Wednesday. What day is D+7?",
    "input_format": "Index 1",
    "output_format": "WEDNESDAY",
    "constraints": "Same day +7",
    "sample_input": "1",
    "sample_output": "WEDNESDAY",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1033,
    "title": "Months with 31 days #1033",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "How many months in a year have exactly 31 days?",
    "input_format": "Index 1",
    "output_format": "7",
    "constraints": "Fixed fact",
    "sample_input": "1",
    "sample_output": "7",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1034,
    "title": "Leap year days #1034",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "How many days are in a leap year?",
    "input_format": "Index 1",
    "output_format": "366",
    "constraints": "Fixed fact",
    "sample_input": "1",
    "sample_output": "366",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1035,
    "title": "Century leap year #1035",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Is the year 1900 a leap year?",
    "input_format": "Index 1",
    "output_format": "NO",
    "constraints": "Divisible by 100 but not 400",
    "sample_input": "1",
    "sample_output": "NO",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1036,
    "title": "If-then logic #1036",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "If all cats are black and Tom is a cat, is Tom black?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Modus ponens",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1037,
    "title": "Negation logic #1037",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "If it rains, the ground is wet. The ground is not wet. Did it rain?",
    "input_format": "Index 1",
    "output_format": "NO",
    "constraints": "Modus tollens",
    "sample_input": "1",
    "sample_output": "NO",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1038,
    "title": "Contrapositive #1038",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "If P then Q is true. Q is false. What about P?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Contrapositive",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1039,
    "title": "And logic #1039",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "A=TRUE, B=FALSE. A AND B?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Boolean AND",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1040,
    "title": "Or logic #1040",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "A=TRUE, B=FALSE. A OR B?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Boolean OR",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1041,
    "title": "XOR logic #1041",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "A=TRUE, B=TRUE. A XOR B?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Boolean XOR",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1042,
    "title": "NOT logic #1042",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "A=FALSE. NOT A?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Boolean NOT",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1043,
    "title": "NAND logic #1043",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A=TRUE, B=TRUE. A NAND B?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "NAND gate",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1044,
    "title": "Odd or even #1044",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given N, output ODD or EVEN.",
    "input_format": "One integer N",
    "output_format": "ODD or EVEN",
    "constraints": "Any integer",
    "sample_input": "7",
    "sample_output": "ODD",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1045,
    "title": "Positive negative zero #1045",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Given N, output POSITIVE, NEGATIVE, or ZERO.",
    "input_format": "One integer N",
    "output_format": "Result",
    "constraints": "Any integer",
    "sample_input": "-5",
    "sample_output": "NEGATIVE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1046,
    "title": "Divisible by 3 #1046",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Is N divisible by 3?",
    "input_format": "One integer N",
    "output_format": "YES or NO",
    "constraints": "1<=N<=10^9",
    "sample_input": "123",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1047,
    "title": "Divisible by both 3 and 5 #1047",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Is N divisible by both 3 and 5?",
    "input_format": "One integer N",
    "output_format": "YES or NO",
    "constraints": "1<=N<=10^9",
    "sample_input": "15",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1048,
    "title": "Multiple of 7 #1048",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Is N a multiple of 7?",
    "input_format": "One integer N",
    "output_format": "YES or NO",
    "constraints": "1<=N<=10^6",
    "sample_input": "49",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1049,
    "title": "Sum odd or even #1049",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Sum of first N natural numbers — is it odd or even?",
    "input_format": "One integer N",
    "output_format": "ODD or EVEN",
    "constraints": "1<=N<=10^6",
    "sample_input": "3",
    "sample_output": "ODD",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1050,
    "title": "Product sign #1050",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given N integers, is their product positive, negative, or zero?",
    "input_format": "First line N, second line N integers",
    "output_format": "POSITIVE, NEGATIVE, or ZERO",
    "constraints": "N<=20",
    "sample_input": "4\\n2 -3 4 -1",
    "sample_output": "POSITIVE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1051,
    "title": "Largest of three #1051",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Find the largest of three given integers.",
    "input_format": "Three integers",
    "output_format": "Largest integer",
    "constraints": "Any integers",
    "sample_input": "5 3 8",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1052,
    "title": "Middle of three #1052",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Find the middle value of three distinct integers.",
    "input_format": "Three integers",
    "output_format": "Middle value",
    "constraints": "Distinct integers",
    "sample_input": "5 3 8",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1053,
    "title": "Count positives #1053",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Amazon"
    ],
    "description": "Count positive numbers in an array.",
    "input_format": "First line N, second line N integers",
    "output_format": "Count of positives",
    "constraints": "N<=100",
    "sample_input": "5\\n-1 2 -3 4 5",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1054,
    "title": "Synonym of HAPPY #1054",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Choose the word that is closest in meaning to HAPPY.",
    "input_format": "HAPPY",
    "output_format": "Joyful",
    "constraints": "Vocabulary",
    "sample_input": "HAPPY",
    "sample_output": "Joyful",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1055,
    "title": "Antonym of BRAVE #1055",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Choose the word that is opposite in meaning to BRAVE.",
    "input_format": "BRAVE",
    "output_format": "Cowardly",
    "constraints": "Vocabulary",
    "sample_input": "BRAVE",
    "sample_output": "Cowardly",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1056,
    "title": "Odd word out meaning #1056",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Odd one out by meaning: JOY HAPPINESS SORROW DELIGHT",
    "input_format": "Space-separated words",
    "output_format": "The odd word",
    "constraints": "Negative emotion",
    "sample_input": "JOY HAPPINESS SORROW DELIGHT",
    "sample_output": "SORROW",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1057,
    "title": "Complete the proverb #1057",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Complete: All that glitters is not _",
    "input_format": "Index 1",
    "output_format": "GOLD",
    "constraints": "Famous proverb",
    "sample_input": "1",
    "sample_output": "GOLD",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1058,
    "title": "Fill in blank #1058",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "A __ of lions is called a pride.",
    "input_format": "Index 1",
    "output_format": "GROUP",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "GROUP",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1059,
    "title": "Collective noun #1059",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Collective noun for fish?",
    "input_format": "Index 1",
    "output_format": "SCHOOL",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "SCHOOL",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1060,
    "title": "Plural of mouse #1060",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Plural of MOUSE?",
    "input_format": "Index 1",
    "output_format": "MICE",
    "constraints": "Irregular plural",
    "sample_input": "1",
    "sample_output": "MICE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1061,
    "title": "Feminine of actor #1061",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Feminine of ACTOR?",
    "input_format": "Index 1",
    "output_format": "ACTRESS",
    "constraints": "Fixed",
    "sample_input": "1",
    "sample_output": "ACTRESS",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1062,
    "title": "Implicit assumption #1062",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Statement: Please do not use lift in case of fire. Assumption: Lift is available in building. Valid?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Implicit",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1063,
    "title": "Cause and effect #1063",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "There was heavy rain. Streets were flooded. Which is cause?",
    "input_format": "Index 1",
    "output_format": "HEAVY RAIN",
    "constraints": "Cause-effect",
    "sample_input": "1",
    "sample_output": "HEAVY RAIN",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1064,
    "title": "Conclusion valid #1064",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Statement: Most students passed. Conclusion: Some students failed. Valid?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Most implies some failed",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1065,
    "title": "Strong argument #1065",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Should voting age be 18? Argument: Young people are responsible citizens. Strong?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Reasonable argument",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1066,
    "title": "Course of action #1066",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Problem: Roads are damaged. Action: Repair roads immediately. Appropriate?",
    "input_format": "Index 1",
    "output_format": "YES",
    "constraints": "Direct solution",
    "sample_input": "1",
    "sample_output": "YES",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1067,
    "title": "Handshake formula #1067",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "N people meet and each shakes hands with all others once. Total handshakes?",
    "input_format": "One integer N",
    "output_format": "N*(N-1)/2",
    "constraints": "N>=2",
    "sample_input": "6",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1068,
    "title": "Matches in knockout #1068",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "In a knockout tournament with N teams, how many matches?",
    "input_format": "One integer N",
    "output_format": "N-1",
    "constraints": "N>=2",
    "sample_input": "16",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1069,
    "title": "Diagonals of polygon #1069",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Number of diagonals of an N-sided polygon = N*(N-3)/2.",
    "input_format": "One integer N",
    "output_format": "Number of diagonals",
    "constraints": "N>=4",
    "sample_input": "6",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1070,
    "title": "Regions in circle #1070",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "N chords divide circle into max how many regions? Formula: (N^2+N+2)/2",
    "input_format": "One integer N",
    "output_format": "Max regions",
    "constraints": "N>=0",
    "sample_input": "4",
    "sample_output": "11",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1071,
    "title": "Handshake in circle #1071",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "N people sit in circle, each shakes with immediate neighbours only. Total handshakes?",
    "input_format": "One integer N",
    "output_format": "N handshakes",
    "constraints": "N>=3",
    "sample_input": "5",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1072,
    "title": "Squares on chessboard #1072",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "How many squares of all sizes on 8x8 chessboard?",
    "input_format": "Index 1",
    "output_format": "204",
    "constraints": "Sum 1^2+2^2+...+8^2",
    "sample_input": "1",
    "sample_output": "204",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1073,
    "title": "Rectangles on chessboard #1073",
    "category": "Logical Reasoning",
    "difficulty": "Hard",
    "company_tags": [
      "TCS", "Amazon"
    ],
    "description": "How many rectangles of all sizes on 8x8 chessboard?",
    "input_format": "Index 1",
    "output_format": "1296",
    "constraints": "C(9,2)*C(9,2)",
    "sample_input": "1",
    "sample_output": "1296",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1074,
    "title": "Triangles in figure #1074",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "Infosys"
    ],
    "description": "How many triangles in a figure with N=3 triangles pointing up and down in a row?",
    "input_format": "One integer N",
    "output_format": "Count (N=3 gives 13)",
    "constraints": "N=3",
    "sample_input": "3",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1075,
    "title": "Coin puzzle #1075",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "CTS"
    ],
    "description": "Make 5 rows with 4 coins each. Minimum coins needed?",
    "input_format": "Index 1",
    "output_format": "10",
    "constraints": "Star arrangement",
    "sample_input": "1",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1076,
    "title": "Water jug problem #1076",
    "category": "Logical Reasoning",
    "difficulty": "Medium",
    "company_tags": [
      "HCL", "Infosys"
    ],
    "description": "You have 3L and 5L jugs. Measure exactly 4L. How many steps minimum?",
    "input_format": "Index 1",
    "output_format": "6",
    "constraints": "Classic puzzle",
    "sample_input": "1",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1077,
    "title": "Double and add one #1077",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Machine rule: output = 2*input + 1. Input is 7. Output?",
    "input_format": "One integer input",
    "output_format": "Output",
    "constraints": "Any integer",
    "sample_input": "7",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1078,
    "title": "Square and subtract #1078",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Machine rule: output = input^2 - 1. Input is 5. Output?",
    "input_format": "One integer input",
    "output_format": "Output",
    "constraints": "Any integer",
    "sample_input": "5",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1079,
    "title": "Reverse and add #1079",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Machine rule: reverse the number then add original. Input=12. Output?",
    "input_format": "One integer input",
    "output_format": "Output",
    "constraints": "1<=input<=999",
    "sample_input": "12",
    "sample_output": "33",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1080,
    "title": "Sum of squares #1080",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Machine: sum of squares of digits. Input=13. Output?",
    "input_format": "One integer input",
    "output_format": "Sum of squares of digits",
    "constraints": "1<=input<=999",
    "sample_input": "13",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1081,
    "title": "Digit product #1081",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Machine: product of digits. Input=234. Output?",
    "input_format": "One integer input",
    "output_format": "Product of digits",
    "constraints": "1<=input<=9999",
    "sample_input": "234",
    "sample_output": "24",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1082,
    "title": "True false basic #1082",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "All squares are rectangles. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Geometry fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1083,
    "title": "Triangle angles #1083",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "Sum of angles of a triangle is 180 degrees. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Geometry fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1084,
    "title": "Prime definition #1084",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "1 is a prime number. True or False?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "1 is not prime",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1085,
    "title": "Even prime #1085",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "2 is the only even prime number. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Math fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1086,
    "title": "Zero is even #1086",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Zero is an even number. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Math fact",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1087,
    "title": "Negative prime #1087",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "CTS", "HCL"
    ],
    "description": "Negative numbers can be prime. True or False?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Primes are positive",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1088,
    "title": "Square root 2 #1088",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Square root of 2 is rational. True or False?",
    "input_format": "Index 1",
    "output_format": "FALSE",
    "constraints": "Irrational number",
    "sample_input": "1",
    "sample_output": "FALSE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1089,
    "title": "Divisibility rule 9 #1089",
    "category": "Logical Reasoning",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "CTS"
    ],
    "description": "A number is divisible by 9 if sum of its digits is divisible by 9. True or False?",
    "input_format": "Index 1",
    "output_format": "TRUE",
    "constraints": "Divisibility rule",
    "sample_input": "1",
    "sample_output": "TRUE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1090,
    "title": "Class and Object Basics #1090",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Wipro"
    ],
    "description": "Create a class 'Rectangle' with private fields 'length' and 'breadth'. Add a constructor to initialise them, and a method 'area()' that returns the area. In main(), create an object with length=5, breadth=3 and print the area.",
    "input_format": "No input required. Values are hardcoded.",
    "output_format": "A single integer: the area of the rectangle.",
    "constraints": "length, breadth > 0",
    "sample_input": "",
    "sample_output": "15",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1091,
    "title": "Inheritance – Animal & Dog #1091",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "Accenture", "CTS", "HCL"
    ],
    "description": "Create an Animal base class with a speak() method, then extend it with a Dog class that overrides speak() to print 'Woof'.",
    "input_format": "Dog d = new Dog(); d.speak();",
    "output_format": "Woof",
    "constraints": "OOP",
    "sample_input": "Dog d = new Dog(); d.speak();",
    "sample_output": "Woof",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1092,
    "title": "Polymorphism – Method Overloading #1092",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Create a Calculator class with overloaded add() methods for int, double, and three integers.",
    "input_format": "calc.add(1,2); calc.add(1.5,2.5); calc.add(1,2,3);",
    "output_format": "3; 4.0; 6",
    "constraints": "OOP",
    "sample_input": "calc.add(1,2); calc.add(1.5,2.5);",
    "sample_output": "3; 4.0",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1093,
    "title": "Encapsulation – Bank Account #1093",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley", "Infosys"
    ],
    "description": "Design a BankAccount class with private balance, and public deposit, withdraw, and getBalance methods.",
    "input_format": "BankAccount acc = new BankAccount(1000); acc.deposit(500); acc.getBalance();",
    "output_format": "1500",
    "constraints": "OOP",
    "sample_input": "BankAccount acc = new BankAccount(1000); acc.deposit(500); acc.getBalance();",
    "sample_output": "1500",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1094,
    "title": "Abstract Class – Shape Area #1094",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Adobe"
    ],
    "description": "Define an abstract Shape class with an abstract area() method, implemented by Circle and Rectangle.",
    "input_format": "Shape s = new Circle(5); s.area();",
    "output_format": "78.54",
    "constraints": "OOP",
    "sample_input": "new Circle(5).area();",
    "sample_output": "78.54",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1095,
    "title": "Interface – Flyable and Swimmable #1095",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Accenture", "CTS"
    ],
    "description": "Define Flyable and Swimmable interfaces and implement both in a Duck class.",
    "input_format": "Duck d = new Duck(); d.fly(); d.swim();",
    "output_format": "Flying; Swimming",
    "constraints": "OOP",
    "sample_input": "Duck d = new Duck(); d.fly(); d.swim();",
    "sample_output": "Flying; Swimming",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1096,
    "title": "Constructor Chaining #1096",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Wipro", "HCL", "Infosys"
    ],
    "description": "Use this() to chain constructors within the same class so each constructor reuses common logic.",
    "input_format": "new Person(); new Person(\"Alice\"); new Person(\"Alice\", 30);",
    "output_format": "All call common constructor",
    "constraints": "OOP",
    "sample_input": "new Person(\"Alice\", 30);",
    "sample_output": "Person created",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1097,
    "title": "Static Members – Counter #1097",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Cognizant"
    ],
    "description": "Use a static counter in a class to track how many instances have been created.",
    "input_format": "new Counter(); new Counter(); Counter.getCount();",
    "output_format": "2",
    "constraints": "OOP",
    "sample_input": "new Counter(); new Counter(); Counter.getCount();",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1098,
    "title": "Runtime Polymorphism – Upcasting #1098",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft"
    ],
    "description": "Create a base class 'Vehicle' with method move() printing 'Vehicle moves'. Subclasses 'Car' and 'Bike' override move() to print 'Car drives' and 'Bike rides' respectively. In main(), create an array of Vehicle references holding a Car and Bike object. Call move() on each using the loop.",
    "input_format": "No input required.",
    "output_format": "Car drives\\nBike rides",
    "constraints": "Use runtime polymorphism (upcasting), not instanceof checks.",
    "sample_input": "",
    "sample_output": "Car drives\\nBike rides",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1099,
    "title": "Exception Handling in OOP #1099",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Infosys", "Wipro", "Accenture"
    ],
    "description": "Use try-catch-finally to handle an ArithmeticException when dividing by zero.",
    "input_format": "int result = divide(10, 0);",
    "output_format": "Exception: / by zero; finally block runs",
    "constraints": "OOP",
    "sample_input": "divide(10, 0);",
    "sample_output": "ArithmeticException caught",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1100,
    "title": "Final Keyword – Immutable Class #1100",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "HCL"
    ],
    "description": "Create an immutable Point class using final fields that are set only in the constructor.",
    "input_format": "Point p = new Point(3,4); p.x = 5; // fails",
    "output_format": "Compilation error",
    "constraints": "OOP",
    "sample_input": "p.x = 5;",
    "sample_output": "Compilation error",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1101,
    "title": "toString() Override #1101",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "Cognizant", "Wipro"
    ],
    "description": "Create a class 'Book' with fields title, author, and price. Override the toString() method to return the format: 'Title: <title>, Author: <author>, Price: <price>'. In main(), create a Book and print the object directly.",
    "input_format": "No input required. Use: title='Clean Code', author='Robert Martin', price=499.",
    "output_format": "Title: Clean Code, Author: Robert Martin, Price: 499",
    "constraints": "Must use toString() override, not a custom print method.",
    "sample_input": "",
    "sample_output": "Title: Clean Code, Author: Robert Martin, Price: 499",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1102,
    "title": "equals() and hashCode() #1102",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google"
    ],
    "description": "Override equals() and hashCode() in a Point class so two points with same coordinates are considered equal.",
    "input_format": "new Point(1,2).equals(new Point(1,2));",
    "output_format": "true",
    "constraints": "OOP",
    "sample_input": "new Point(1,2).equals(new Point(1,2));",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1103,
    "title": "Composition vs Inheritance #1103",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Adobe", "SAP"
    ],
    "description": "Create a class 'Engine' with a method start() that prints 'Engine started'. Create a class 'Car' that uses composition (has-a Engine) not inheritance. Car's startCar() method calls engine.start() then prints 'Car is running'. In main(), start the car.",
    "input_format": "No input required.",
    "output_format": "Engine started\\nCar is running",
    "constraints": "Use composition (field of type Engine), not extends.",
    "sample_input": "",
    "sample_output": "Engine started\\nCar is running",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1104,
    "title": "Singleton Design Pattern #1104",
    "category": "OOP",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Implement the Singleton pattern so that only one instance of the class is ever created.",
    "input_format": "Singleton s1 = Singleton.getInstance(); Singleton s2 = Singleton.getInstance(); s1 == s2;",
    "output_format": "true",
    "constraints": "OOP",
    "sample_input": "Singleton.getInstance() == Singleton.getInstance();",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1105,
    "title": "Inner Class – Iterator Pattern #1105",
    "category": "OOP",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Amazon"
    ],
    "description": "Use a non-static inner class to implement an Iterator for a custom collection.",
    "input_format": "CustomList list = new CustomList(); list.add(1); list.add(2); Iterator it = list.iterator(); it.next();",
    "output_format": "1",
    "constraints": "OOP",
    "sample_input": "list.iterator().next();",
    "sample_output": "1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1106,
    "title": "Generics – Typed Box #1106",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro", "Infosys"
    ],
    "description": "Implement a generic Box<T> class with get and set methods that work for any type.",
    "input_format": "Box<Integer> box = new Box<>(); box.set(42); box.get();",
    "output_format": "42",
    "constraints": "OOP",
    "sample_input": "box.set(42); box.get();",
    "sample_output": "42",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1107,
    "title": "Comparable Interface – Sort Students #1107",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Flipkart"
    ],
    "description": "Create a class 'Student' implementing Comparable<Student> with fields name and marks. compareTo() should sort by marks in ascending order. In main(), create a list of 3 students, sort with Collections.sort(), and print their names in sorted order.",
    "input_format": "No input required. Use: Alice-85, Bob-72, Charlie-90.",
    "output_format": "Bob\\nAlice\\nCharlie",
    "constraints": "Must implement Comparable<Student>, not use a custom Comparator.",
    "sample_input": "",
    "sample_output": "Bob\\nAlice\\nCharlie",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1108,
    "title": "Anonymous Class – Runnable #1108",
    "category": "OOP",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Cognizant", "HCL"
    ],
    "description": "Create a Runnable using an anonymous class that prints 'Task running'. Pass it to a Thread and start it. Print 'Main thread done' after joining the thread.",
    "input_format": "No input required.",
    "output_format": "Task running\\nMain thread done",
    "constraints": "Use an anonymous class (not lambda) to implement Runnable.",
    "sample_input": "",
    "sample_output": "Task running\\nMain thread done",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1109,
    "title": "Multi-level Inheritance #1109",
    "category": "OOP",
    "difficulty": "Easy",
    "company_tags": [
      "Accenture", "Wipro", "CTS"
    ],
    "description": "Create class 'A' with method hello() printing 'Hello from A'. Class 'B' extends A and overrides hello() printing 'Hello from B'. Class 'C' extends B. In main(), create object of C, call hello(), then use super chain to call A's hello() from B.",
    "input_format": "No input required.",
    "output_format": "Hello from B",
    "constraints": "Three levels: A -> B -> C. C does not override hello().",
    "sample_input": "",
    "sample_output": "Hello from B",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1110,
    "title": "Write a SELECT with WHERE clause #1110",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Wipro"
    ],
    "description": "Write a SQL query to select all employees whose salary is greater than 50000.",
    "input_format": "SELECT * FROM Employee WHERE salary > 50000;",
    "output_format": "Rows with salary > 50000",
    "constraints": "SQL",
    "sample_input": "Employee table",
    "sample_output": "Filtered rows",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1111,
    "title": "INNER JOIN Query #1111",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Accenture", "CTS"
    ],
    "description": "Write a SQL INNER JOIN to retrieve employees with their department names.",
    "input_format": "SELECT e.name, d.name FROM Employee e INNER JOIN Department d ON e.dept_id = d.id;",
    "output_format": "Employee-Department pairs",
    "constraints": "SQL",
    "sample_input": "Employee & Department tables",
    "sample_output": "Joined result",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1112,
    "title": "GROUP BY and HAVING #1112",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley", "Oracle"
    ],
    "description": "Given table 'Sales(SalesID, Region, Amount)', write a Java program that prints the SQL to find all regions where total sales exceed 100000, grouped by region. Then simulate 2 result rows.",
    "input_format": "No input required.",
    "output_format": "SELECT Region, SUM(Amount) FROM Sales GROUP BY Region HAVING SUM(Amount)>100000;\\nNorth 150000\\nSouth 120000",
    "constraints": "Must use GROUP BY and HAVING, not WHERE.",
    "sample_input": "",
    "sample_output": "SELECT Region, SUM(Amount) FROM Sales GROUP BY Region HAVING SUM(Amount)>100000;\\nNorth 150000\\nSouth 120000",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1113,
    "title": "Find Second Highest Salary #1113",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "TCS", "Infosys"
    ],
    "description": "Write a SQL query to find the second highest salary from an Employee table.",
    "input_format": "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
    "output_format": "Second highest value",
    "constraints": "SQL",
    "sample_input": "Employee table with salaries",
    "sample_output": "Second highest salary",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1114,
    "title": "Normalization – 1NF Check #1114",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "HCL"
    ],
    "description": "Check if a table is in 1NF: all attributes must be atomic (no repeating groups or multi-valued fields).",
    "input_format": "Table has column 'phone' with '9876,5432'",
    "output_format": "Violates 1NF – multi-valued",
    "constraints": "DBMS",
    "sample_input": "Table with multi-valued column",
    "sample_output": "1NF violation identified",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1115,
    "title": "Primary Key vs Foreign Key #1115",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture", "Cognizant"
    ],
    "description": "Print the SQL CREATE TABLE statements for 'Department(DeptID PRIMARY KEY, DeptName)' and 'Employee(EmpID PRIMARY KEY, Name, DeptID FOREIGN KEY referencing Department)'. Then print one INSERT for each table.",
    "input_format": "No input required.",
    "output_format": "CREATE TABLE Department(DeptID INT PRIMARY KEY, DeptName VARCHAR(50));\\nCREATE TABLE Employee(EmpID INT PRIMARY KEY, Name VARCHAR(50), DeptID INT, FOREIGN KEY(DeptID) REFERENCES Department(DeptID));\\nINSERT INTO Department VALUES(1,'Engineering');\\nINSERT INTO Employee VALUES(101,'Alice',1);",
    "constraints": "Must define both PRIMARY KEY and FOREIGN KEY.",
    "sample_input": "",
    "sample_output": "CREATE TABLE Department(DeptID INT PRIMARY KEY, DeptName VARCHAR(50));\\nCREATE TABLE Employee(EmpID INT PRIMARY KEY, Name VARCHAR(50), DeptID INT, FOREIGN KEY(DeptID) REFERENCES Department(DeptID));\\nINSERT INTO Department VALUES(1,'Engineering');\\nINSERT INTO Employee VALUES(101,'Alice',1);",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1116,
    "title": "ACID Properties Explanation #1116",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Goldman Sachs", "Oracle"
    ],
    "description": "Write a Java program that prints the full form and one-line meaning of each ACID property (Atomicity, Consistency, Isolation, Durability).",
    "input_format": "No input required.",
    "output_format": "Atomicity: All operations in a transaction succeed or all are rolled back.\\nConsistency: Database remains in a valid state before and after transaction.\\nIsolation: Concurrent transactions do not interfere with each other.\\nDurability: Committed transactions are permanently saved even after failure.",
    "constraints": "Print exactly 4 lines, one per property.",
    "sample_input": "",
    "sample_output": "Atomicity: All operations in a transaction succeed or all are rolled back.\\nConsistency: Database remains in a valid state before and after transaction.\\nIsolation: Concurrent transactions do not interfere with each other.\\nDurability: Committed transactions are permanently saved even after failure.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1117,
    "title": "DELETE vs TRUNCATE vs DROP #1117",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "HCL", "Infosys"
    ],
    "description": "Write a Java program that prints the key difference between DELETE, TRUNCATE, and DROP commands in a table format: Command | Rollback Possible | Removes Structure | Speed.",
    "input_format": "No input required.",
    "output_format": "DELETE | Yes | No | Slow\\nTRUNCATE | No | No | Fast\\nDROP | No | Yes | Fast",
    "constraints": "Print exactly 3 rows of comparison.",
    "sample_input": "",
    "sample_output": "DELETE | Yes | No | Slow\\nTRUNCATE | No | No | Fast\\nDROP | No | Yes | Fast",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1118,
    "title": "Index and Query Optimisation #1118",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Oracle", "SAP"
    ],
    "description": "Print the SQL to create an index on the 'Email' column of an 'Users' table. Then print the query that benefits from this index. Then explain in one line why the index speeds up the query.",
    "input_format": "No input required.",
    "output_format": "CREATE INDEX idx_email ON Users(Email);\\nSELECT * FROM Users WHERE Email='alice@example.com';\\nReason: Index allows B-tree lookup instead of full table scan.",
    "constraints": "Print exactly 3 lines.",
    "sample_input": "",
    "sample_output": "CREATE INDEX idx_email ON Users(Email);\\nSELECT * FROM Users WHERE Email='alice@example.com';\\nReason: Index allows B-tree lookup instead of full table scan.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1119,
    "title": "LEFT JOIN vs INNER JOIN #1119",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Accenture", "Cognizant"
    ],
    "description": "Tables: 'Students(SID, Name)' and 'Results(SID, Marks)'. Some students have no results. Print both the INNER JOIN and LEFT JOIN queries, then simulate what the LEFT JOIN returns including a student with NULL marks.",
    "input_format": "No input required.",
    "output_format": "INNER JOIN: SELECT S.Name, R.Marks FROM Students S INNER JOIN Results R ON S.SID=R.SID;\\nLEFT JOIN: SELECT S.Name, R.Marks FROM Students S LEFT JOIN Results R ON S.SID=R.SID;\\nAlice 85\\nBob 90\\nCarol null",
    "constraints": "Print both queries and 3 simulated rows.",
    "sample_input": "",
    "sample_output": "INNER JOIN: SELECT S.Name, R.Marks FROM Students S INNER JOIN Results R ON S.SID=R.SID;\\nLEFT JOIN: SELECT S.Name, R.Marks FROM Students S LEFT JOIN Results R ON S.SID=R.SID;\\nAlice 85\\nBob 90\\nCarol null",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1120,
    "title": "Stored Procedure – Salary Hike #1120",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "SAP", "Goldman Sachs"
    ],
    "description": "Write a stored procedure that gives a 10% salary hike to all employees in a given department.",
    "input_format": "CALL giveHike('Engineering');",
    "output_format": "All Engineering salaries increased by 10%",
    "constraints": "SQL",
    "sample_input": "CALL giveHike('Engineering');",
    "sample_output": "10% hike applied",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1121,
    "title": "ER Diagram – Identify Entities #1121",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Infosys"
    ],
    "description": "Identify entities, attributes, and relationships in a university database (Students, Courses, Professors).",
    "input_format": "University scenario",
    "output_format": "Entities: Student, Course, Professor; Relations: Enrols, Teaches",
    "constraints": "DBMS",
    "sample_input": "University scenario",
    "sample_output": "ER model",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1122,
    "title": "View Creation and Usage #1122",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "Oracle", "Amazon", "Microsoft"
    ],
    "description": "Print the SQL to create a view 'HighEarners' showing employees with salary > 80000 from the Employees table. Then print a SELECT query on that view, and one simulated result row.",
    "input_format": "No input required.",
    "output_format": "CREATE VIEW HighEarners AS SELECT * FROM Employees WHERE Salary>80000;\\nSELECT * FROM HighEarners;\\n102 Bob 95000 Engineering",
    "constraints": "Print CREATE VIEW, SELECT, and one result row.",
    "sample_input": "",
    "sample_output": "CREATE VIEW HighEarners AS SELECT * FROM Employees WHERE Salary>80000;\\nSELECT * FROM HighEarners;\\n102 Bob 95000 Engineering",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1123,
    "title": "Transaction – COMMIT and ROLLBACK #1123",
    "category": "DBMS",
    "difficulty": "Medium",
    "company_tags": [
      "Goldman Sachs", "Morgan Stanley", "Oracle"
    ],
    "description": "Demonstrate a SQL transaction that commits on success and rolls back on failure.",
    "input_format": "BEGIN; UPDATE accounts SET balance=balance-500 WHERE id=1; UPDATE accounts SET balance=balance+500 WHERE id=2; COMMIT;",
    "output_format": "Both updates persist",
    "constraints": "SQL",
    "sample_input": "Transfer transaction",
    "sample_output": "Commit or rollback",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1124,
    "title": "3NF Normalisation #1124",
    "category": "DBMS",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Table: StudentCourse(StudentID, StudentName, CourseID, CourseName, InstructorID, InstructorName). Identify all functional dependencies, explain the 2NF and 3NF violations, and print the decomposed 3NF tables.",
    "input_format": "No input required.",
    "output_format": "2NF violation: StudentName depends only on StudentID (partial dependency).\\n3NF violation: InstructorName depends on InstructorID (transitive dependency).\\n3NF Tables: Student(StudentID,StudentName), Course(CourseID,CourseName,InstructorID), Instructor(InstructorID,InstructorName), Enrollment(StudentID,CourseID)",
    "constraints": "Must name 2NF and 3NF violations separately before giving solution.",
    "sample_input": "",
    "sample_output": "2NF violation: StudentName depends only on StudentID (partial dependency).\\n3NF violation: InstructorName depends on InstructorID (transitive dependency).\\n3NF Tables: Student(StudentID,StudentName), Course(CourseID,CourseName,InstructorID), Instructor(InstructorID,InstructorName), Enrollment(StudentID,CourseID)",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1125,
    "title": "Deadlock in DBMS #1125",
    "category": "DBMS",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Oracle", "SAP"
    ],
    "description": "Print a scenario description of a deadlock between two transactions T1 and T2, then list two common deadlock prevention strategies.",
    "input_format": "No input required.",
    "output_format": "T1 holds lock on A, waits for B.\\nT2 holds lock on B, waits for A.\\nDeadlock: circular wait.\\nPrevention 1: Wait-Die scheme - older transaction waits, younger rolls back.\\nPrevention 2: Wound-Wait scheme - older transaction wounds (aborts) younger.",
    "constraints": "Print exactly 5 lines.",
    "sample_input": "",
    "sample_output": "T1 holds lock on A, waits for B.\\nT2 holds lock on B, waits for A.\\nDeadlock: circular wait.\\nPrevention 1: Wait-Die scheme - older transaction waits, younger rolls back.\\nPrevention 2: Wound-Wait scheme - older transaction wounds (aborts) younger.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1126,
    "title": "Trigger – Auto Audit Log #1126",
    "category": "DBMS",
    "difficulty": "Hard",
    "company_tags": [
      "Oracle", "Goldman Sachs", "SAP"
    ],
    "description": "Print the SQL to create an AFTER UPDATE trigger on the 'Employees' table that inserts a row into 'AuditLog(EmpID, OldSalary, NewSalary, ChangedAt)' whenever a salary is updated.",
    "input_format": "No input required.",
    "output_format": "CREATE TRIGGER SalaryAudit AFTER UPDATE ON Employees FOR EACH ROW BEGIN INSERT INTO AuditLog(EmpID,OldSalary,NewSalary,ChangedAt) VALUES(OLD.EmpID,OLD.Salary,NEW.Salary,NOW()); END;",
    "constraints": "Use OLD and NEW keywords. Single-line output.",
    "sample_input": "",
    "sample_output": "CREATE TRIGGER SalaryAudit AFTER UPDATE ON Employees FOR EACH ROW BEGIN INSERT INTO AuditLog(EmpID,OldSalary,NewSalary,ChangedAt) VALUES(OLD.EmpID,OLD.Salary,NEW.Salary,NOW()); END;",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1127,
    "title": "Candidate Key vs Super Key #1127",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Wipro"
    ],
    "description": "Given table 'Employee(EmpID, Email, Phone, Name)', print all super keys, identify candidate keys, and state which one is the primary key and why.",
    "input_format": "No input required.",
    "output_format": "Super keys: {EmpID}, {Email}, {Phone}, {EmpID,Email}, {EmpID,Phone}, {Email,Phone}, etc.\\nCandidate keys: {EmpID}, {Email}, {Phone}\\nPrimary key: EmpID (chosen because it is numeric, shorter, and auto-incrementable)",
    "constraints": "List at least 5 super keys and all 3 candidate keys.",
    "sample_input": "",
    "sample_output": "Super keys: {EmpID}, {Email}, {Phone}, {EmpID,Email}, {EmpID,Phone}, {Email,Phone}, etc.\\nCandidate keys: {EmpID}, {Email}, {Phone}\\nPrimary key: EmpID (chosen because it is numeric, shorter, and auto-incrementable)",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1128,
    "title": "NoSQL vs SQL – When to Use #1128",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Print a comparison of SQL and NoSQL across 4 parameters: Schema, Scalability, Transactions, and Best Use Case.",
    "input_format": "No input required.",
    "output_format": "Schema: SQL=Fixed, NoSQL=Dynamic\\nScalability: SQL=Vertical, NoSQL=Horizontal\\nTransactions: SQL=ACID compliant, NoSQL=Eventual consistency\\nBest Use Case: SQL=Banking/ERP, NoSQL=Social media/IoT",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "Schema: SQL=Fixed, NoSQL=Dynamic\\nScalability: SQL=Vertical, NoSQL=Horizontal\\nTransactions: SQL=ACID compliant, NoSQL=Eventual consistency\\nBest Use Case: SQL=Banking/ERP, NoSQL=Social media/IoT",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1129,
    "title": "Aggregate Functions #1129",
    "category": "DBMS",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Cognizant"
    ],
    "description": "Given table 'Sales(SaleID, Product, Amount)', print SQL queries using COUNT, SUM, AVG, MIN, MAX on the Amount column. Then print one simulated result per query.",
    "input_format": "No input required.",
    "output_format": "SELECT COUNT(Amount) FROM Sales; => 5\\nSELECT SUM(Amount) FROM Sales; => 47500\\nSELECT AVG(Amount) FROM Sales; => 9500\\nSELECT MIN(Amount) FROM Sales; => 3000\\nSELECT MAX(Amount) FROM Sales; => 18000",
    "constraints": "Print all 5 queries with simulated results.",
    "sample_input": "",
    "sample_output": "SELECT COUNT(Amount) FROM Sales; => 5\\nSELECT SUM(Amount) FROM Sales; => 47500\\nSELECT AVG(Amount) FROM Sales; => 9500\\nSELECT MIN(Amount) FROM Sales; => 3000\\nSELECT MAX(Amount) FROM Sales; => 18000",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1130,
    "title": "Process vs Thread #1130",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Amazon"
    ],
    "description": "Explain the difference: processes have separate memory spaces; threads share memory within a process.",
    "input_format": "Fork vs Thread creation",
    "output_format": "Fork: new address space; Thread: shared heap",
    "constraints": "OS concepts",
    "sample_input": "fork() vs new Thread()",
    "sample_output": "Different memory model",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1131,
    "title": "FCFS CPU Scheduling #1131",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "HCL"
    ],
    "description": "Given process burst times and arrival times, compute average waiting time using FCFS scheduling.",
    "input_format": "processes=3, burst=[5,3,8], arrival=[0,0,0]",
    "output_format": "AWT = 5.33",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "burst=[5,3,8], arrival=[0,0,0]",
    "sample_output": "AWT = 5.33",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1132,
    "title": "SJF Scheduling – Non-Preemptive #1132",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Accenture", "CTS"
    ],
    "description": "Given processes P1(burst=6), P2(burst=2), P3(burst=8), P4(burst=3), all arriving at time 0, simulate non-preemptive SJF. Print the execution order, waiting time, and average waiting time.",
    "input_format": "No input required.",
    "output_format": "Order: P2 P4 P1 P3\\nP2: WT=0\\nP4: WT=2\\nP1: WT=5\\nP3: WT=11\\nAvg WT: 4.5",
    "constraints": "Shortest job first. No preemption.",
    "sample_input": "",
    "sample_output": "Order: P2 P4 P1 P3\\nP2: WT=0\\nP4: WT=2\\nP1: WT=5\\nP3: WT=11\\nAvg WT: 4.5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1133,
    "title": "Round Robin Scheduling #1133",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys", "Oracle"
    ],
    "description": "Simulate Round Robin scheduling with time quantum Q and compute average waiting time.",
    "input_format": "burst=[10,5,8], quantum=2",
    "output_format": "AWT = 12.67",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "burst=[10,5,8], quantum=2",
    "sample_output": "AWT = 12.67",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1134,
    "title": "Deadlock – Banker's Algorithm #1134",
    "category": "Operating Systems",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Given current allocation, max demand, and available resources, determine if the system is in a safe state.",
    "input_format": "allocation=[[0,1,0],[2,0,0],[3,0,2]], max=[[7,5,3],[3,2,2],[9,0,2]], available=[3,3,2]",
    "output_format": "Safe; sequence=[1,3,4,2,0]",
    "constraints": "1 ≤ processes ≤ 20",
    "sample_input": "allocation=[[0,1,0],[2,0,0],[3,0,2]], max=[[7,5,3],[3,2,2],[9,0,2]], available=[3,3,2]",
    "sample_output": "Safe",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1135,
    "title": "Page Replacement – FIFO #1135",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro", "HCL"
    ],
    "description": "Reference string: 1,3,0,3,5,6,3. Frames=3. Simulate FIFO page replacement. Print frame state after each reference and total page faults.",
    "input_format": "No input required.",
    "output_format": "1: [1] FAULT\\n3: [1,3] FAULT\\n0: [1,3,0] FAULT\\n3: [1,3,0] HIT\\n5: [5,3,0] FAULT\\n6: [5,6,0] FAULT\\n3: [5,6,3] FAULT\\nTotal Page Faults: 6",
    "constraints": "3 frames. FIFO eviction.",
    "sample_input": "",
    "sample_output": "1: [1] FAULT\\n3: [1,3] FAULT\\n0: [1,3,0] FAULT\\n3: [1,3,0] HIT\\n5: [5,3,0] FAULT\\n6: [5,6,0] FAULT\\n3: [5,6,3] FAULT\\nTotal Page Faults: 6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1136,
    "title": "LRU Page Replacement #1136",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Oracle"
    ],
    "description": "Simulate LRU page replacement and count the number of page faults for a given page reference string.",
    "input_format": "pages=[7,0,1,2,0,3,0,4,2,3,0,3,2], frames=4",
    "output_format": "8 page faults",
    "constraints": "1 ≤ frames ≤ 10",
    "sample_input": "pages=[7,0,1,2,0,3,0,4,2,3,0,3,2], frames=4",
    "sample_output": "8",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1137,
    "title": "Semaphore – Producer Consumer #1137",
    "category": "Operating Systems",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Use semaphores (mutex, empty, full) to synchronise a producer-consumer bounded buffer.",
    "input_format": "buffer_size=3, producers=2, consumers=2",
    "output_format": "No race condition; correct ordering",
    "constraints": "OS concepts",
    "sample_input": "buffer_size=3",
    "sample_output": "Synchronised",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1138,
    "title": "Memory Allocation – First Fit #1138",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys", "HCL"
    ],
    "description": "Memory blocks: [100, 500, 200, 300, 600] KB. Processes requesting: [212, 417, 112, 426] KB. Use First Fit algorithm. Print which block each process is allocated to (1-indexed), or 'Not Allocated'.",
    "input_format": "No input required.",
    "output_format": "Process 1 (212KB) -> Block 2 (500KB)\\nProcess 2 (417KB) -> Block 5 (600KB)\\nProcess 3 (112KB) -> Block 2 (288KB remaining)\\nProcess 4 (426KB) -> Not Allocated",
    "constraints": "First fit: allocate to first block that fits.",
    "sample_input": "",
    "sample_output": "Process 1 (212KB) -> Block 2 (500KB)\\nProcess 2 (417KB) -> Block 5 (600KB)\\nProcess 3 (112KB) -> Block 2 (288KB remaining)\\nProcess 4 (426KB) -> Not Allocated",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1139,
    "title": "Disk Scheduling – SSTF #1139",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Oracle", "SAP"
    ],
    "description": "Simulate SSTF (Shortest Seek Time First) disk scheduling and compute total head movement.",
    "input_format": "requests=[98,183,37,122,14,124,65,67], head=53",
    "output_format": "SSTF total = 236",
    "constraints": "1 ≤ n ≤ 20",
    "sample_input": "requests=[98,183,37,122,14,124,65,67], head=53",
    "sample_output": "236",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1140,
    "title": "Mutex vs Semaphore #1140",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Accenture"
    ],
    "description": "Print the key differences between Mutex and Semaphore across 4 parameters: Ownership, Count, Use case, and Release by.",
    "input_format": "No input required.",
    "output_format": "Ownership: Mutex=Owned by thread, Semaphore=No ownership\\nCount: Mutex=Binary(0/1), Semaphore=Any non-negative integer\\nUse case: Mutex=Mutual exclusion, Semaphore=Signaling/resource counting\\nRelease by: Mutex=Same thread only, Semaphore=Any thread",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "Ownership: Mutex=Owned by thread, Semaphore=No ownership\\nCount: Mutex=Binary(0/1), Semaphore=Any non-negative integer\\nUse case: Mutex=Mutual exclusion, Semaphore=Signaling/resource counting\\nRelease by: Mutex=Same thread only, Semaphore=Any thread",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1141,
    "title": "Virtual Memory and Paging #1141",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Explain how virtual memory uses paging to allow processes to use more memory than physically available.",
    "input_format": "Virtual address = 0x1234, page size = 4KB",
    "output_format": "page number = 1, offset = 0x234",
    "constraints": "OS concepts",
    "sample_input": "VA = 0x5234, page_size = 4096",
    "sample_output": "page=5, offset=0x234",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1142,
    "title": "Critical Section Problem #1142",
    "category": "Operating Systems",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Microsoft", "Oracle"
    ],
    "description": "Write a Java program where two threads increment a shared counter 1000 times each without synchronization, then again with synchronization. Print both final counter values to show the race condition vs correct result.",
    "input_format": "No input required.",
    "output_format": "Without sync: <some value less than 2000 usually>\\nWith sync: 2000",
    "constraints": "Use Thread class. Use synchronized keyword for the correct version.",
    "sample_input": "",
    "sample_output": "Without sync: 1873\\nWith sync: 2000",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1143,
    "title": "System Calls – Types #1143",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Wipro"
    ],
    "description": "Print the 5 types of system calls with one example each: Process Control, File Management, Device Management, Information Maintenance, Communication.",
    "input_format": "No input required.",
    "output_format": "Process Control: fork(), exit()\\nFile Management: open(), read(), write()\\nDevice Management: ioctl(), read()\\nInformation Maintenance: getpid(), alarm()\\nCommunication: pipe(), shmget()",
    "constraints": "One line per type with examples.",
    "sample_input": "",
    "sample_output": "Process Control: fork(), exit()\\nFile Management: open(), read(), write()\\nDevice Management: ioctl(), read()\\nInformation Maintenance: getpid(), alarm()\\nCommunication: pipe(), shmget()",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1144,
    "title": "Paging vs Segmentation #1144",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Accenture", "CTS"
    ],
    "description": "Compare Paging and Segmentation across 4 parameters: Division, Size, Fragmentation type, and User visibility.",
    "input_format": "No input required.",
    "output_format": "Division: Paging=Fixed-size pages, Segmentation=Variable-size segments\\nSize: Paging=Fixed, Segmentation=Variable\\nFragmentation: Paging=Internal, Segmentation=External\\nUser visibility: Paging=Transparent, Segmentation=Visible to programmer",
    "constraints": "Exactly 4 lines.",
    "sample_input": "",
    "sample_output": "Division: Paging=Fixed-size pages, Segmentation=Variable-size segments\\nSize: Paging=Fixed, Segmentation=Variable\\nFragmentation: Paging=Internal, Segmentation=External\\nUser visibility: Paging=Transparent, Segmentation=Visible to programmer",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1145,
    "title": "Context Switching #1145",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Infosys"
    ],
    "description": "Print the step-by-step sequence of events that happen during a context switch between Process P1 and Process P2.",
    "input_format": "No input required.",
    "output_format": "1. CPU saves P1 state (PC, registers) into P1's PCB\\n2. Scheduler selects P2\\n3. CPU loads P2 state from P2's PCB\\n4. P2 resumes execution from where it left off\\n5. P1 state is safely stored for later resumption",
    "constraints": "At least 5 steps.",
    "sample_input": "",
    "sample_output": "1. CPU saves P1 state (PC, registers) into P1's PCB\\n2. Scheduler selects P2\\n3. CPU loads P2 state from P2's PCB\\n4. P2 resumes execution from where it left off\\n5. P1 state is safely stored for later resumption",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1146,
    "title": "Thrashing in OS #1146",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Oracle"
    ],
    "description": "Explain thrashing: what causes it, its effect, and two solutions. Print as structured output.",
    "input_format": "No input required.",
    "output_format": "Thrashing: CPU spends more time swapping pages than executing processes.\\nCause: Too many processes competing for limited frames.\\nEffect: CPU utilisation drops drastically despite high activity.\\nSolution 1: Working Set Model - allocate frames based on working set size.\\nSolution 2: Page Fault Frequency - reduce multiprogramming when PFF is high.",
    "constraints": "Print exactly 5 lines.",
    "sample_input": "",
    "sample_output": "Thrashing: CPU spends more time swapping pages than executing processes.\\nCause: Too many processes competing for limited frames.\\nEffect: CPU utilisation drops drastically despite high activity.\\nSolution 1: Working Set Model - allocate frames based on working set size.\\nSolution 2: Page Fault Frequency - reduce multiprogramming when PFF is high.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1147,
    "title": "File System – Inode Structure #1147",
    "category": "Operating Systems",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Amazon", "Microsoft"
    ],
    "description": "Print the structure of a Unix inode with at least 8 fields and explain what each field stores.",
    "input_format": "No input required.",
    "output_format": "inode fields:\\n1. File type (regular, directory, symlink)\\n2. Permissions (rwxrwxrwx)\\n3. Link count (hard links)\\n4. Owner UID and GID\\n5. File size in bytes\\n6. Timestamps (access, modify, change)\\n7. Direct block pointers (12)\\n8. Indirect, double-indirect, triple-indirect pointers",
    "constraints": "At least 8 inode fields.",
    "sample_input": "",
    "sample_output": "inode fields:\\n1. File type (regular, directory, symlink)\\n2. Permissions (rwxrwxrwx)\\n3. Link count (hard links)\\n4. Owner UID and GID\\n5. File size in bytes\\n6. Timestamps (access, modify, change)\\n7. Direct block pointers (12)\\n8. Indirect, double-indirect, triple-indirect pointers",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1148,
    "title": "Monolithic vs Microkernel #1148",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Cognizant"
    ],
    "description": "Compare Monolithic and Microkernel architectures across 4 parameters and give one OS example each.",
    "input_format": "No input required.",
    "output_format": "Size: Monolithic=Large kernel, Microkernel=Small kernel\\nServices in kernel: Monolithic=All (FS, drivers, IPC), Microkernel=Minimal (IPC, scheduling)\\nPerformance: Monolithic=Faster (no context switch), Microkernel=Slower (message passing)\\nReliability: Monolithic=Less (crash affects all), Microkernel=More (isolated)\\nExamples: Monolithic=Linux, Microkernel=Minix/QNX",
    "constraints": "Exactly 5 lines.",
    "sample_input": "",
    "sample_output": "Size: Monolithic=Large kernel, Microkernel=Small kernel\\nServices in kernel: Monolithic=All (FS, drivers, IPC), Microkernel=Minimal (IPC, scheduling)\\nPerformance: Monolithic=Faster (no context switch), Microkernel=Slower (message passing)\\nReliability: Monolithic=Less (crash affects all), Microkernel=More (isolated)\\nExamples: Monolithic=Linux, Microkernel=Minix/QNX",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1149,
    "title": "Starvation and Aging #1149",
    "category": "Operating Systems",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Accenture"
    ],
    "description": "Explain starvation in OS scheduling, give a real scenario where it happens, and explain how aging solves it.",
    "input_format": "No input required.",
    "output_format": "Starvation: A low-priority process never gets CPU because high-priority processes keep arriving.\\nScenario: In priority scheduling, P_low(priority=10) waits while P_high(priority=1) processes keep entering.\\nAging fix: Gradually increase the priority of waiting processes over time.\\nExample: After waiting 5 units, priority 10 becomes 9, then 8, eventually gets scheduled.",
    "constraints": "Print exactly 4 lines.",
    "sample_input": "",
    "sample_output": "Starvation: A low-priority process never gets CPU because high-priority processes keep arriving.\\nScenario: In priority scheduling, P_low(priority=10) waits while P_high(priority=1) processes keep entering.\\nAging fix: Gradually increase the priority of waiting processes over time.\\nExample: After waiting 5 units, priority 10 becomes 9, then 8, eventually gets scheduled.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1150,
    "title": "OSI Model – 7 Layers #1150",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Wipro"
    ],
    "description": "Name and describe the seven layers of the OSI model and a protocol example for each.",
    "input_format": "Physical, Data Link, Network, Transport, Session, Presentation, Application",
    "output_format": "e.g. Ethernet, IP, TCP, HTTP",
    "constraints": "Networks",
    "sample_input": "OSI model",
    "sample_output": "7 layers with protocols",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1151,
    "title": "TCP vs UDP #1151",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Google", "TCS"
    ],
    "description": "Compare TCP and UDP across 5 parameters: Connection, Reliability, Speed, Order, and Use case.",
    "input_format": "No input required.",
    "output_format": "Connection: TCP=Connection-oriented, UDP=Connectionless\\nReliability: TCP=Reliable (ACK), UDP=Unreliable\\nSpeed: TCP=Slower, UDP=Faster\\nOrder: TCP=In-order delivery, UDP=No ordering\\nUse case: TCP=HTTP/Email/FTP, UDP=Video streaming/DNS/Gaming",
    "constraints": "Exactly 5 comparison lines.",
    "sample_input": "",
    "sample_output": "Connection: TCP=Connection-oriented, UDP=Connectionless\\nReliability: TCP=Reliable (ACK), UDP=Unreliable\\nSpeed: TCP=Slower, UDP=Faster\\nOrder: TCP=In-order delivery, UDP=No ordering\\nUse case: TCP=HTTP/Email/FTP, UDP=Video streaming/DNS/Gaming",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1152,
    "title": "IP Subnetting – CIDR #1152",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Oracle", "Cisco"
    ],
    "description": "Calculate the network address, broadcast address, and number of hosts for 192.168.1.0/26.",
    "input_format": "192.168.1.0/26",
    "output_format": "Network:192.168.1.0, Broadcast:192.168.1.63, Hosts:62",
    "constraints": "Networks",
    "sample_input": "192.168.1.0/26",
    "sample_output": "Network, Broadcast, Hosts",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1153,
    "title": "TCP Three-Way Handshake #1153",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Amazon", "Infosys"
    ],
    "description": "Describe the three steps (SYN, SYN-ACK, ACK) of TCP connection establishment.",
    "input_format": "Client → Server: SYN; Server → Client: SYN-ACK; Client → Server: ACK",
    "output_format": "Connection established",
    "constraints": "Networks",
    "sample_input": "TCP connection setup",
    "sample_output": "3 steps",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1154,
    "title": "DNS Resolution Process #1154",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Amazon", "Cloudflare"
    ],
    "description": "Print the step-by-step process of how www.example.com is resolved to an IP address by DNS.",
    "input_format": "No input required.",
    "output_format": "1. Browser checks local cache.\\n2. OS checks hosts file.\\n3. Query sent to Recursive Resolver (ISP).\\n4. Resolver queries Root DNS server -> .com TLD server.\\n5. TLD server returns authoritative NS for example.com.\\n6. Authoritative NS returns IP: 93.184.216.34.\\n7. Resolver caches and returns IP to browser.\\n8. Browser connects to 93.184.216.34.",
    "constraints": "At least 8 steps.",
    "sample_input": "",
    "sample_output": "1. Browser checks local cache.\\n2. OS checks hosts file.\\n3. Query sent to Recursive Resolver (ISP).\\n4. Resolver queries Root DNS server -> .com TLD server.\\n5. TLD server returns authoritative NS for example.com.\\n6. Authoritative NS returns IP: 93.184.216.34.\\n7. Resolver caches and returns IP to browser.\\n8. Browser connects to 93.184.216.34.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1155,
    "title": "HTTP Methods #1155",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Wipro"
    ],
    "description": "Print the 5 most common HTTP methods with their purpose and one real-world example each.",
    "input_format": "No input required.",
    "output_format": "GET: Retrieve resource – GET /users/1\\nPOST: Create resource – POST /users\\nPUT: Replace resource – PUT /users/1\\nPATCH: Partial update – PATCH /users/1\\nDELETE: Remove resource – DELETE /users/1",
    "constraints": "Exactly 5 lines.",
    "sample_input": "",
    "sample_output": "GET: Retrieve resource – GET /users/1\\nPOST: Create resource – POST /users\\nPUT: Replace resource – PUT /users/1\\nPATCH: Partial update – PATCH /users/1\\nDELETE: Remove resource – DELETE /users/1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1156,
    "title": "IPv4 vs IPv6 #1156",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Accenture", "Oracle"
    ],
    "description": "Compare IPv4 and IPv6 across 5 parameters: Address length, Total addresses, Header size, NAT needed, and Example address.",
    "input_format": "No input required.",
    "output_format": "Address length: IPv4=32-bit, IPv6=128-bit\\nTotal addresses: IPv4=~4.3 billion, IPv6=~340 undecillion\\nHeader size: IPv4=20 bytes min, IPv6=40 bytes fixed\\nNAT needed: IPv4=Yes, IPv6=No\\nExample: IPv4=192.168.1.1, IPv6=2001:0db8::1",
    "constraints": "Exactly 5 lines.",
    "sample_input": "",
    "sample_output": "Address length: IPv4=32-bit, IPv6=128-bit\\nTotal addresses: IPv4=~4.3 billion, IPv6=~340 undecillion\\nHeader size: IPv4=20 bytes min, IPv6=40 bytes fixed\\nNAT needed: IPv4=Yes, IPv6=No\\nExample: IPv4=192.168.1.1, IPv6=2001:0db8::1",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1157,
    "title": "Routing – Dijkstra's Algorithm #1157",
    "category": "Graphs",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Find the shortest path from source to all other vertices in a weighted graph using Dijkstra's algorithm.",
    "input_format": "V=5, edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], src=0",
    "output_format": "dist=[0,3,1,4,INF]",
    "constraints": "1 ≤ V ≤ 10^4",
    "sample_input": "V=5, edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], src=0",
    "sample_output": "[0,3,1,4,∞]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1158,
    "title": "ARP – Address Resolution Protocol #1158",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Cisco"
    ],
    "description": "Print the step-by-step process of how ARP resolves an IP address (192.168.1.10) to a MAC address in a LAN.",
    "input_format": "No input required.",
    "output_format": "1. Host A wants to send to 192.168.1.10 but doesn't know MAC.\\n2. A broadcasts ARP request: Who has 192.168.1.10?\\n3. All devices receive; only 192.168.1.10 (Host B) replies.\\n4. B sends ARP reply with its MAC: AA:BB:CC:DD:EE:FF.\\n5. A caches IP-MAC mapping in ARP table.\\n6. A sends data frame directly to MAC AA:BB:CC:DD:EE:FF.",
    "constraints": "Exactly 6 steps.",
    "sample_input": "",
    "sample_output": "1. Host A wants to send to 192.168.1.10 but doesn't know MAC.\\n2. A broadcasts ARP request: Who has 192.168.1.10?\\n3. All devices receive; only 192.168.1.10 (Host B) replies.\\n4. B sends ARP reply with its MAC: AA:BB:CC:DD:EE:FF.\\n5. A caches IP-MAC mapping in ARP table.\\n6. A sends data frame directly to MAC AA:BB:CC:DD:EE:FF.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1159,
    "title": "Sliding Window Protocol #1159",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Oracle", "TCS"
    ],
    "description": "Explain how the sliding window protocol allows multiple frames to be in transit simultaneously.",
    "input_format": "Window size = 4; send frames 0-3 before waiting for ACK 0",
    "output_format": "Throughput improved",
    "constraints": "Networks",
    "sample_input": "Window=4",
    "sample_output": "4 in-flight frames",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1160,
    "title": "HTTPS and SSL/TLS Handshake #1160",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Amazon", "Microsoft"
    ],
    "description": "Print the simplified TLS 1.3 handshake steps between a browser and a web server establishing an HTTPS connection.",
    "input_format": "No input required.",
    "output_format": "1. Client Hello: TLS version, cipher suites, random value.\\n2. Server Hello: Chosen cipher, server certificate, random value.\\n3. Client verifies certificate with CA.\\n4. Key exchange: Client and server derive session key.\\n5. Client Finished: Encrypted with session key.\\n6. Server Finished: Encrypted with session key.\\n7. Secure channel established for HTTP data.",
    "constraints": "Exactly 7 steps.",
    "sample_input": "",
    "sample_output": "1. Client Hello: TLS version, cipher suites, random value.\\n2. Server Hello: Chosen cipher, server certificate, random value.\\n3. Client verifies certificate with CA.\\n4. Key exchange: Client and server derive session key.\\n5. Client Finished: Encrypted with session key.\\n6. Server Finished: Encrypted with session key.\\n7. Secure channel established for HTTP data.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1161,
    "title": "NAT – Network Address Translation #1161",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Cisco"
    ],
    "description": "Explain how NAT works when a private IP (192.168.1.5) sends a request to a public server (8.8.8.8), step by step.",
    "input_format": "No input required.",
    "output_format": "1. Device 192.168.1.5 sends packet to 8.8.8.8.\\n2. Router (public IP: 203.0.113.1) intercepts packet.\\n3. Router replaces source 192.168.1.5 with 203.0.113.1 in NAT table.\\n4. Packet sent to 8.8.8.8 with source 203.0.113.1.\\n5. Reply arrives at 203.0.113.1.\\n6. Router looks up NAT table, forwards to 192.168.1.5.",
    "constraints": "Exactly 6 steps.",
    "sample_input": "",
    "sample_output": "1. Device 192.168.1.5 sends packet to 8.8.8.8.\\n2. Router (public IP: 203.0.113.1) intercepts packet.\\n3. Router replaces source 192.168.1.5 with 203.0.113.1 in NAT table.\\n4. Packet sent to 8.8.8.8 with source 203.0.113.1.\\n5. Reply arrives at 203.0.113.1.\\n6. Router looks up NAT table, forwards to 192.168.1.5.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1162,
    "title": "Error Detection – CRC #1162",
    "category": "Computer Networks",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Oracle", "TCS"
    ],
    "description": "Given data bits 1101011011 and divisor 10011, compute the CRC remainder using binary division. Print the appended message and remainder.",
    "input_format": "No input required.",
    "output_format": "Data: 1101011011\\nDivisor: 10011 (degree 4)\\nAppend 4 zeros: 11010110110000\\nXOR division steps yield remainder: 1110\\nTransmitted: 11010110111110",
    "constraints": "Show the appended message and final CRC.",
    "sample_input": "",
    "sample_output": "Data: 1101011011\\nDivisor: 10011 (degree 4)\\nAppend 4 zeros: 11010110110000\\nXOR division steps yield remainder: 1110\\nTransmitted: 11010110111110",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1163,
    "title": "DHCP Process #1163",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Cisco"
    ],
    "description": "Print the 4-step DORA process of DHCP IP assignment.",
    "input_format": "No input required.",
    "output_format": "1. Discover: Client broadcasts DHCPDISCOVER on 255.255.255.255.\\n2. Offer: Server responds with DHCPOFFER (IP: 192.168.1.100, lease 24h).\\n3. Request: Client broadcasts DHCPREQUEST to accept the offer.\\n4. Acknowledge: Server sends DHCPACK confirming the IP assignment.",
    "constraints": "Exactly 4 steps using DORA naming.",
    "sample_input": "",
    "sample_output": "1. Discover: Client broadcasts DHCPDISCOVER on 255.255.255.255.\\n2. Offer: Server responds with DHCPOFFER (IP: 192.168.1.100, lease 24h).\\n3. Request: Client broadcasts DHCPREQUEST to accept the offer.\\n4. Acknowledge: Server sends DHCPACK confirming the IP assignment.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1164,
    "title": "Congestion Control – TCP #1164",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google", "Oracle"
    ],
    "description": "Explain TCP congestion control phases: Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery. Print one line per phase with behaviour.",
    "input_format": "No input required.",
    "output_format": "Slow Start: cwnd doubles every RTT from 1 MSS until ssthresh.\\nCongestion Avoidance: cwnd increases by 1 MSS per RTT after ssthresh.\\nFast Retransmit: Retransmit lost segment on 3 duplicate ACKs without waiting for timeout.\\nFast Recovery: Set ssthresh=cwnd/2, cwnd=ssthresh, skip slow start.",
    "constraints": "Exactly 4 lines.",
    "sample_input": "",
    "sample_output": "Slow Start: cwnd doubles every RTT from 1 MSS until ssthresh.\\nCongestion Avoidance: cwnd increases by 1 MSS per RTT after ssthresh.\\nFast Retransmit: Retransmit lost segment on 3 duplicate ACKs without waiting for timeout.\\nFast Recovery: Set ssthresh=cwnd/2, cwnd=ssthresh, skip slow start.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1165,
    "title": "Hub vs Switch vs Router #1165",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Infosys"
    ],
    "description": "Compare Hub, Switch, and Router across 4 parameters: OSI Layer, Addressing, Collision Domain, and Use case.",
    "input_format": "No input required.",
    "output_format": "OSI Layer: Hub=Layer 1, Switch=Layer 2, Router=Layer 3\\nAddressing: Hub=None, Switch=MAC, Router=IP\\nCollision Domain: Hub=One shared, Switch=Per port, Router=Per interface\\nUse case: Hub=Legacy LAN, Switch=LAN segmentation, Router=Inter-network routing",
    "constraints": "Exactly 4 comparison lines.",
    "sample_input": "",
    "sample_output": "OSI Layer: Hub=Layer 1, Switch=Layer 2, Router=Layer 3\\nAddressing: Hub=None, Switch=MAC, Router=IP\\nCollision Domain: Hub=One shared, Switch=Per port, Router=Per interface\\nUse case: Hub=Legacy LAN, Switch=LAN segmentation, Router=Inter-network routing",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1166,
    "title": "Firewall Types #1166",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Oracle", "Cisco"
    ],
    "description": "Compare packet filtering, stateful inspection, and application-layer firewalls.",
    "input_format": "iptables (packet filter) vs pfSense (stateful) vs Squid (app-layer)",
    "output_format": "Different protection levels",
    "constraints": "Networks",
    "sample_input": "Firewall types",
    "sample_output": "3 types compared",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1167,
    "title": "RSA Encryption – Key Generation #1167",
    "category": "Computer Networks",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Amazon", "Microsoft"
    ],
    "description": "Using small primes p=3, q=11, demonstrate RSA key generation: compute n, φ(n), choose e, compute d. Then encrypt message M=4 and decrypt.",
    "input_format": "No input required.",
    "output_format": "p=3, q=11\\nn=33\\nφ(n)=20\\ne=3 (gcd(3,20)=1)\\nd=7 (3*7 mod 20=1)\\nPublic key: (3,33), Private key: (7,33)\\nEncrypt M=4: C=4^3 mod 33=31\\nDecrypt C=31: M=31^7 mod 33=4",
    "constraints": "Show all steps clearly.",
    "sample_input": "",
    "sample_output": "p=3, q=11\\nn=33\\nφ(n)=20\\ne=3 (gcd(3,20)=1)\\nd=7 (3*7 mod 20=1)\\nPublic key: (3,33), Private key: (7,33)\\nEncrypt M=4: C=4^3 mod 33=31\\nDecrypt C=31: M=31^7 mod 33=4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1168,
    "title": "Network Topologies #1168",
    "category": "Computer Networks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "HCL"
    ],
    "description": "Print 5 network topologies with their advantage and disadvantage.",
    "input_format": "No input required.",
    "output_format": "Bus: Simple+cheap | Single cable failure breaks network\\nStar: Easy fault isolation | Central hub failure breaks all\\nRing: Predictable performance | One node failure breaks ring\\nMesh: High redundancy | Expensive cabling\\nHybrid: Flexible | Complex to manage",
    "constraints": "Exactly 5 topologies.",
    "sample_input": "",
    "sample_output": "Bus: Simple+cheap | Single cable failure breaks network\\nStar: Easy fault isolation | Central hub failure breaks all\\nRing: Predictable performance | One node failure breaks ring\\nMesh: High redundancy | Expensive cabling\\nHybrid: Flexible | Complex to manage",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1169,
    "title": "SMTP Email Flow #1169",
    "category": "Computer Networks",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Google", "Microsoft"
    ],
    "description": "Print the step-by-step flow of sending an email from alice@gmail.com to bob@yahoo.com using SMTP, DNS, and POP3/IMAP.",
    "input_format": "No input required.",
    "output_format": "1. Alice's email client sends email to Gmail SMTP server (port 587).\\n2. Gmail SMTP queries DNS MX record for yahoo.com -> mail.yahoo.com.\\n3. Gmail SMTP connects to Yahoo SMTP (port 25) and transfers email.\\n4. Yahoo stores email in Bob's mailbox.\\n5. Bob's client connects via IMAP/POP3 to retrieve email.\\n6. Bob reads the email.",
    "constraints": "Exactly 6 steps.",
    "sample_input": "",
    "sample_output": "1. Alice's email client sends email to Gmail SMTP server (port 587).\\n2. Gmail SMTP queries DNS MX record for yahoo.com -> mail.yahoo.com.\\n3. Gmail SMTP connects to Yahoo SMTP (port 25) and transfers email.\\n4. Yahoo stores email in Bob's mailbox.\\n5. Bob's client connects via IMAP/POP3 to retrieve email.\\n6. Bob reads the email.",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1170,
    "title": "Time Complexity – Big O Identification #1170",
    "category": "Technical",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Amazon"
    ],
    "description": "Given 5 code snippets (described), identify the time complexity of each: (1) single loop 0 to n, (2) nested loop 0 to n twice, (3) binary search, (4) recursive Fibonacci, (5) merge sort.",
    "input_format": "No input required.",
    "output_format": "Single loop: O(n)\\nNested loop: O(n^2)\\nBinary search: O(log n)\\nRecursive Fibonacci: O(2^n)\\nMerge sort: O(n log n)",
    "constraints": "Exactly 5 answers.",
    "sample_input": "",
    "sample_output": "Single loop: O(n)\\nNested loop: O(n^2)\\nBinary search: O(log n)\\nRecursive Fibonacci: O(2^n)\\nMerge sort: O(n log n)",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1171,
    "title": "Stack Implementation Using Array #1171",
    "category": "Stacks",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Accenture"
    ],
    "description": "Implement a stack with push, pop, peek, and isEmpty operations using an array.",
    "input_format": "push(1); push(2); peek(); pop(); isEmpty()",
    "output_format": "2; 2; false",
    "constraints": "1 ≤ capacity ≤ 10^4",
    "sample_input": "push(1); push(2); peek(); pop(); isEmpty()",
    "sample_output": "2; 2; false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1172,
    "title": "Queue Using Two Stacks #1172",
    "category": "Queues",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Google"
    ],
    "description": "Implement a queue with enqueue and dequeue operations using two stacks.",
    "input_format": "enqueue(1); enqueue(2); dequeue(); enqueue(3); dequeue()",
    "output_format": "1; 2",
    "constraints": "1 ≤ ops ≤ 10^4",
    "sample_input": "enqueue(1); enqueue(2); dequeue(); enqueue(3); dequeue()",
    "sample_output": "1; 2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1173,
    "title": "Binary Search – Iterative #1173",
    "category": "Binary Search",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys", "Flipkart"
    ],
    "description": "Implement iterative binary search to find the index of a target in a sorted array, or -1 if not found.",
    "input_format": "arr = [1,3,5,7,9,11], target = 7",
    "output_format": "3",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "arr = [1,3,5,7,9,11], target = 7",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1174,
    "title": "Merge Sort Implementation #1174",
    "category": "Arrays",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Adobe"
    ],
    "description": "Implement the merge sort algorithm that divides the array in half, sorts each half, then merges them.",
    "input_format": "arr = [5,3,8,1,2,9]",
    "output_format": "[1,2,3,5,8,9]",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "arr = [5,3,8,1,2,9]",
    "sample_output": "[1,2,3,5,8,9]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1175,
    "title": "Linked List – Detect Cycle #1175",
    "category": "Linked Lists",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google", "Flipkart"
    ],
    "description": "Use Floyd's cycle-detection algorithm to determine if a linked list contains a cycle.",
    "input_format": "head = [3,2,0,-4], pos = 1",
    "output_format": "true",
    "constraints": "0 ≤ n ≤ 10^4",
    "sample_input": "head = [3,2,0,-4], pos = 1",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1176,
    "title": "HashMap – Frequency Count #1176",
    "category": "Hashing",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Amazon", "Flipkart"
    ],
    "description": "Use a HashMap to count the frequency of each element in an integer array.",
    "input_format": "arr = [1,2,2,3,3,3]",
    "output_format": "{1:1, 2:2, 3:3}",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "arr = [1,2,2,3,3,3]",
    "sample_output": "{1:1, 2:2, 3:3}",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1177,
    "title": "Tree – Level Order Traversal #1177",
    "category": "Trees",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Google"
    ],
    "description": "Return the level-order (BFS) traversal of a binary tree as a list of lists.",
    "input_format": "root = [3,9,20,null,null,15,7]",
    "output_format": "[[3],[9,20],[15,7]]",
    "constraints": "0 ≤ n ≤ 2000",
    "sample_input": "root = [3,9,20,null,null,15,7]",
    "sample_output": "[[3],[9,20],[15,7]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1178,
    "title": "0/1 Knapsack #1178",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Given weights and values of N items and a knapsack capacity W, find the maximum value achievable without exceeding W.",
    "input_format": "weights=[1,3,4,5], values=[1,4,5,7], W=7",
    "output_format": "9",
    "constraints": "1 ≤ N ≤ 1000, 1 ≤ W ≤ 1000",
    "sample_input": "weights=[1,3,4,5], values=[1,4,5,7], W=7",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1179,
    "title": "Graph – BFS Traversal #1179",
    "category": "Graphs",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Flipkart"
    ],
    "description": "Perform a Breadth-First Search starting from vertex 0 and return the traversal order.",
    "input_format": "V=5, E=[[0,1],[0,2],[1,3],[2,4]]",
    "output_format": "0 1 2 3 4",
    "constraints": "1 ≤ V ≤ 10^4",
    "sample_input": "V=5, E=[[0,1],[0,2],[1,3],[2,4]]",
    "sample_output": "0 1 2 3 4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1180,
    "title": "Recursion – Tower of Hanoi #1180",
    "category": "DSA",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys", "Accenture"
    ],
    "description": "Print the sequence of moves to transfer N disks from source peg to destination peg using an auxiliary peg.",
    "input_format": "N = 3",
    "output_format": "Move disk 1: A→C; Move disk 2: A→B; ... (7 moves total)",
    "constraints": "1 ≤ N ≤ 15",
    "sample_input": "N = 3",
    "sample_output": "7 moves",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1181,
    "title": "Longest Common Subsequence #1181",
    "category": "Strings",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Adobe"
    ],
    "description": "Find the length of the longest common subsequence of two strings.",
    "input_format": "text1 = \"abcde\", text2 = \"ace\"",
    "output_format": "3",
    "constraints": "1 ≤ text1.length, text2.length ≤ 1000",
    "sample_input": "text1 = \"abcde\", text2 = \"ace\"",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1182,
    "title": "Bit Manipulation – Count Set Bits #1182",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "TCS", "Microsoft"
    ],
    "description": "Count the number of 1-bits in the binary representation of a non-negative integer.",
    "input_format": "N = 11",
    "output_format": "3",
    "constraints": "0 ≤ N ≤ 2^31−1",
    "sample_input": "N = 11",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1183,
    "title": "Heap – Kth Largest Element #1183",
    "category": "Heap",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Flipkart", "Adobe"
    ],
    "description": "Use a min-heap of size k to efficiently find the kth largest element in a stream of numbers.",
    "input_format": "nums = [3,2,1,5,6,4], k = 2",
    "output_format": "5",
    "constraints": "1 ≤ k ≤ n ≤ 10^4",
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1184,
    "title": "Trie – Insert and Search #1184",
    "category": "Trees",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Amazon", "Microsoft"
    ],
    "description": "Implement a Trie with insert and search operations.",
    "input_format": "insert(\"apple\"); search(\"apple\"); search(\"app\")",
    "output_format": "true; false",
    "constraints": "1 ≤ word.length ≤ 2000",
    "sample_input": "insert(\"apple\"); search(\"apple\"); search(\"app\")",
    "sample_output": "true; false",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1185,
    "title": "3Sum #1185",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google", "Adobe"
    ],
    "description": "Given an integer array, find all unique triplets that sum to zero.",
    "input_format": "nums = [-1,0,1,2,-1,-4]",
    "output_format": "[[-1,-1,2],[-1,0,1]]",
    "constraints": "0 ≤ n ≤ 3000",
    "sample_input": "nums = [-1,0,1,2,-1,-4]",
    "sample_output": "[[-1,-1,2],[-1,0,1]]",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1186,
    "title": "Greedy – Activity Selection #1186",
    "category": "Greedy",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Microsoft", "Flipkart"
    ],
    "description": "Given start and end times of activities, select the maximum number of non-overlapping activities.",
    "input_format": "start=[1,3,0,5,8,5], end=[2,4,6,7,9,9]",
    "output_format": "4",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "start=[1,3,0,5,8,5], end=[2,4,6,7,9,9]",
    "sample_output": "4",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1187,
    "title": "Sliding Window – Max Sum Subarray of Size K #1187",
    "category": "Sliding Window",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "TCS", "Infosys"
    ],
    "description": "Find the maximum sum of any contiguous subarray of exactly K elements.",
    "input_format": "arr = [2,1,5,1,3,2], k = 3",
    "output_format": "9",
    "constraints": "1 ≤ k ≤ n ≤ 10^5",
    "sample_input": "arr = [2,1,5,1,3,2], k = 3",
    "sample_output": "9",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1188,
    "title": "Backtracking – N-Queens #1188",
    "category": "Backtracking",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Amazon", "Microsoft"
    ],
    "description": "Place N queens on an N×N chessboard so that no two queens attack each other. Return the count of solutions.",
    "input_format": "N = 4",
    "output_format": "2",
    "constraints": "1 ≤ N ≤ 10",
    "sample_input": "N = 4",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1189,
    "title": "Design Pattern – Observer #1189",
    "category": "OOP",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Implement the Observer design pattern. Create a 'NewsAgency' (Subject) and two observers 'NewsChannel' and 'NewsApp'. When the agency publishes news, both observers get notified and print the news.",
    "input_format": "No input required.",
    "output_format": "NewsChannel received: Stock market hits all-time high\\nNewsApp received: Stock market hits all-time high",
    "constraints": "Use Observer/Subject interfaces. Decouple subject from concrete observers.",
    "sample_input": "",
    "sample_output": "NewsChannel received: Stock market hits all-time high\\nNewsApp received: Stock market hits all-time high",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1190,
    "title": "Alphabet Pattern – Right Triangle (A B C…) #1190",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Print a right-angled triangle of alphabets where each row i contains alphabets A through the i-th letter.",
    "input_format": "n=5",
    "output_format": "A\\nAB\\nABC\\nABCD\\nABCDE",
    "constraints": "5 rows. Use nested loops.",
    "sample_input": "n=5",
    "sample_output": "A\\nAB\\nABC\\nABCD\\nABCDE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1191,
    "title": "Alphabet Pattern – Repeated Letter Per Row #1191",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Print a pattern where each row i contains the i-th letter repeated i times: row 1 has A, row 2 has BB, row 3 has CCC, and so on for 5 rows.",
    "input_format": "n=5",
    "output_format": "A\\nBB\\nCCC\\nDDDD\\nEEEEE",
    "constraints": "5 rows.",
    "sample_input": "n=5",
    "sample_output": "A\\nBB\\nCCC\\nDDDD\\nEEEEE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1192,
    "title": "Alphabet Pattern – Pyramid of Letters #1192",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Cognizant"
    ],
    "description": "Print a centred pyramid using alphabets. Row 1 has A at the tip, each row uses the next letter and is centred with leading spaces. 5 rows total.",
    "input_format": "n=5",
    "output_format": "    A\\n   BBB\\n  CCCCC\\n DDDDDDD\\nEEEEEEEEE",
    "constraints": "5 rows. Centre-align using spaces.",
    "sample_input": "n=5",
    "sample_output": "    A\\n   BBB\\n  CCCCC\\n DDDDDDD\\nEEEEEEEEE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1193,
    "title": "Alphabet Pattern – Diamond of Letters #1193",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Amazon"
    ],
    "description": "Print a diamond shape made of alphabets. Upper half is a pyramid expanding from A to E; lower half mirrors it back to A.",
    "input_format": "n=5",
    "output_format": "    A\\n   BBB\\n  CCCCC\\n DDDDDDD\\nEEEEEEEEE\\n DDDDDDD\\n  CCCCC\\n   BBB\\n    A",
    "constraints": "n=5. 9 rows total.",
    "sample_input": "n=5",
    "sample_output": "    A\\n   BBB\\n  CCCCC\\n DDDDDDD\\nEEEEEEEEE\\n DDDDDDD\\n  CCCCC\\n   BBB\\n    A",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1194,
    "title": "Alphabet Pattern – Hollow Rectangle Border #1194",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Wipro"
    ],
    "description": "Print a hollow rectangle of size 4 rows x 8 columns. The top and bottom rows are filled with letters A-H; left and right borders use the row letter; inside is spaces.",
    "input_format": "rows=4, cols=8",
    "output_format": "ABCDEFGH\\nA      H\\nA      H\\nABCDEFGH",
    "constraints": "4 rows, 8 columns. Border only.",
    "sample_input": "rows=4, cols=8",
    "sample_output": "ABCDEFGH\\nA      H\\nA      H\\nABCDEFGH",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1195,
    "title": "Alphabet Pattern – Zigzag Letters #1195",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Microsoft"
    ],
    "description": "Print 3 rows x 9 columns of a zigzag wave using letters A-I. Row 0 fills positions 0,2,4,6,8; row 1 fills 1,3,5,7; row 2 fills 2,4,6. Empty positions are spaces.",
    "input_format": "No input required.",
    "output_format": "A * * * * * * * I\\n* B * D * F * H *\\n* * C * E * G * *",
    "constraints": "3 rows, 9 cols.",
    "sample_input": "",
    "sample_output": "A * * * * * * * I\\n* B * D * F * H *\\n* * C * E * G * *",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1196,
    "title": "Alphabet Pattern – Reverse Right Triangle #1196",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Accenture"
    ],
    "description": "Print a right triangle of alphabets in reverse: row 1 has ABCDE, row 2 has ABCD, down to row 5 with just A.",
    "input_format": "n=5",
    "output_format": "ABCDE\\nABCD\\nABC\\nAB\\nA",
    "constraints": "5 rows decreasing.",
    "sample_input": "n=5",
    "sample_output": "ABCDE\\nABCD\\nABC\\nAB\\nA",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1197,
    "title": "Alphabet Pattern – Diagonal Letter Staircase #1197",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "Cognizant"
    ],
    "description": "Print a staircase where row i has (i-1) leading spaces followed by the i-th letter (A, B, C...) for 6 rows.",
    "input_format": "n=6",
    "output_format": "A\\n B\\n  C\\n   D\\n    E\\n     F",
    "constraints": "6 rows. One letter per row, shifted right by one each row.",
    "sample_input": "n=6",
    "sample_output": "A\\n B\\n  C\\n   D\\n    E\\n     F",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1198,
    "title": "Alphabet Pattern – Sandglass of Letters #1198",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Flipkart"
    ],
    "description": "Print a sandglass (inverted pyramid on top, pyramid on bottom) using alphabets. Top row starts with EEEEEEEEE and shrinks to A, then expands back to EEEEEEEEE.",
    "input_format": "n=5",
    "output_format": "EEEEEEEEE\\n DDDDDDD\\n  CCCCC\\n   BBB\\n    A\\n   BBB\\n  CCCCC\\n DDDDDDD\\nEEEEEEEEE",
    "constraints": "n=5. 9 rows total.",
    "sample_input": "n=5",
    "sample_output": "EEEEEEEEE\\n DDDDDDD\\n  CCCCC\\n   BBB\\n    A\\n   BBB\\n  CCCCC\\n DDDDDDD\\nEEEEEEEEE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1199,
    "title": "Alphabet Pattern – Continuous Letters Triangle #1199",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Print a triangle where letters are filled continuously row by row: row 1 gets A, row 2 gets BC, row 3 gets DEF, row 4 gets GHIJ, row 5 gets KLMNO.",
    "input_format": "n=5",
    "output_format": "A\\nBC\\nDEF\\nGHIJ\\nKLMNO",
    "constraints": "5 rows. Letters are continuous A through O.",
    "sample_input": "n=5",
    "sample_output": "A\\nBC\\nDEF\\nGHIJ\\nKLMNO",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1200,
    "title": "Alphabet Pattern – Right-Aligned Triangle #1200",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "HCL"
    ],
    "description": "Print a right-aligned triangle of alphabets. Row 1 has 4 leading spaces then A, row 5 has no leading spaces and prints ABCDE.",
    "input_format": "n=5",
    "output_format": "    A\\n   AB\\n  ABC\\n ABCD\\nABCDE",
    "constraints": "5 rows. Right-align using leading spaces.",
    "sample_input": "n=5",
    "sample_output": "    A\\n   AB\\n  ABC\\n ABCD\\nABCDE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1201,
    "title": "Alphabet Pattern – V Shape Letters #1201",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Google"
    ],
    "description": "Print a V-shape pattern using 5 rows. Each row has two letters at symmetric positions converging toward the centre bottom. Last row has only one letter at the tip.",
    "input_format": "n=5",
    "output_format": "A       A\\n B     B\\n  C   C\\n   D D\\n    E",
    "constraints": "n=5. Two letters per row except the last.",
    "sample_input": "n=5",
    "sample_output": "A       A\\n B     B\\n  C   C\\n   D D\\n    E",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1202,
    "title": "Alphabet Pattern – X Shape Letters #1202",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Microsoft"
    ],
    "description": "Print an X pattern in a 5x5 grid. Only positions on the main diagonal (j==i) and anti-diagonal (j==n-1-i) are filled with the row's letter; all other positions are spaces.",
    "input_format": "n=5",
    "output_format": "A   E\\n B C \\n  C  \\n D B \\nE   A",
    "constraints": "5x5 grid. Main diagonal + anti-diagonal only.",
    "sample_input": "n=5",
    "sample_output": "A   E\\n B C \\n  C  \\n D B \\nE   A",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1203,
    "title": "Alphabet Pattern – Butterfly Letters #1203",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Print a butterfly pattern using alphabets. Upper half: row i prints i letters (A to i-th), inner spaces, then i letters again. Lower half mirrors it. n=5, 9 rows total.",
    "input_format": "n=5",
    "output_format": "A        A\\nAB      AB\\nABC    ABC\\nABCD  ABCD\\nABCDEABCDE\\nABCD  ABCD\\nABC    ABC\\nAB      AB\\nA        A",
    "constraints": "n=5. 9 rows total.",
    "sample_input": "n=5",
    "sample_output": "A        A\\nAB      AB\\nABC    ABC\\nABCD  ABCD\\nABCDEABCDE\\nABCD  ABCD\\nABC    ABC\\nAB      AB\\nA        A",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1204,
    "title": "Alphabet Pattern – Square Border Letters #1204",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "Cognizant"
    ],
    "description": "Print a 4x4 hollow square where corners are A, top/bottom edge letters are B, left/right edge letters are C, and inside is spaces.",
    "input_format": "n=4",
    "output_format": "ABBA\\nC  C\\nC  C\\nABBA",
    "constraints": "4x4 grid. A corners, B top/bottom, C sides.",
    "sample_input": "n=4",
    "sample_output": "ABBA\\nC  C\\nC  C\\nABBA",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1205,
    "title": "Alphabet Pattern – Inverted V (Caret) Shape #1205",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Adobe"
    ],
    "description": "Print an inverted V (caret) using alphabets. Row 1 has 4 spaces then A at the tip; each subsequent row places the next letter one step left and one step right symmetrically until row 5.",
    "input_format": "n=5",
    "output_format": "    A\\n   B B\\n  C   C\\n D     D\\nE       E",
    "constraints": "5 rows. Symmetric spread.",
    "sample_input": "n=5",
    "sample_output": "    A\\n   B B\\n  C   C\\n D     D\\nE       E",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1206,
    "title": "Alphabet Pattern – Spiral Letters #1206",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Amazon", "Microsoft"
    ],
    "description": "Fill a 4x4 matrix with letters A-P in spiral order (clockwise from top-left) and print the matrix row by row with spaces between letters.",
    "input_format": "No input required.",
    "output_format": "A B C D\\nL M N E\\nK P O F\\nJ I H G",
    "constraints": "4x4 matrix. Spiral clockwise from (0,0).",
    "sample_input": "",
    "sample_output": "A B C D\\nL M N E\\nK P O F\\nJ I H G",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1207,
    "title": "Alphabet Pattern – Palindrome Rows #1207",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Flipkart"
    ],
    "description": "Print 5 rows where each row is a palindrome. Row 1: A, Row 2: ABA, Row 3: ABCBA, Row 4: ABCDCBA, Row 5: ABCDEDCBA.",
    "input_format": "n=5",
    "output_format": "A\\nABA\\nABCBA\\nABCDCBA\\nABCDEDCBA",
    "constraints": "5 rows. Each row is a palindrome of length 2*i-1.",
    "sample_input": "n=5",
    "sample_output": "A\\nABA\\nABCBA\\nABCDCBA\\nABCDEDCBA",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1208,
    "title": "Alphabet Pattern – Column-wise Letters #1208",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Print a 5x5 grid where each column j contains the letter at position j (A in col 0, B in col 1, …, E in col 4) repeated in every row.",
    "input_format": "n=5",
    "output_format": "ABCDE\\nABCDE\\nABCDE\\nABCDE\\nABCDE",
    "constraints": "5x5. Letter depends only on column index.",
    "sample_input": "n=5",
    "sample_output": "ABCDE\\nABCDE\\nABCDE\\nABCDE\\nABCDE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1209,
    "title": "Alphabet Pattern – Checkerboard AB #1209",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "TCS"
    ],
    "description": "Print a 5x5 checkerboard alternating A and B. If (i+j) is even print A, else print B.",
    "input_format": "n=5",
    "output_format": "ABABA\\nBABAB\\nABABA\\nBABAB\\nABABA",
    "constraints": "5x5. Alternate A and B based on (i+j)%2.",
    "sample_input": "n=5",
    "sample_output": "ABABA\\nBABAB\\nABABA\\nBABAB\\nABABA",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1210,
    "title": "Alphabet Pattern – Row Letter Triangle #1210",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Accenture", "TCS"
    ],
    "description": "Print a right triangle where all characters in row i are the i-th letter: row 1 prints A once, row 2 prints BB, row 3 prints CCC, up to row 5.",
    "input_format": "n=5",
    "output_format": "A\\nBB\\nCCC\\nDDDD\\nEEEEE",
    "constraints": "5 rows.",
    "sample_input": "n=5",
    "sample_output": "A\\nBB\\nCCC\\nDDDD\\nEEEEE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1211,
    "title": "Alphabet Pattern – K Shape Letters #1211",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": [
      "Google", "Morgan Stanley"
    ],
    "description": "Print the letter K shape in a 7-row grid. Column 0 of every row is always filled. The two diagonal arms branch from the middle row (row 3) outward.",
    "input_format": "No input required.",
    "output_format": "A   E\\nA  D\\nA C\\nAB\\nA C\\nA  D\\nA   E",
    "constraints": "7 rows. Column 0 always A; diagonal arm letter depends on distance from middle.",
    "sample_input": "",
    "sample_output": "A   E\\nA  D\\nA C\\nAB\\nA C\\nA  D\\nA   E",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1212,
    "title": "Alphabet Pattern – Decreasing Letter Triangle #1212",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Print a right triangle where row i contains letters from the i-th letter down to A: row 1 prints A, row 2 prints BA, row 3 prints CBA, and so on for 5 rows.",
    "input_format": "n=5",
    "output_format": "A\\nBA\\nCBA\\nDCBA\\nEDCBA",
    "constraints": "5 rows. Each row prints letters in reverse from (A+i-1) down to A.",
    "sample_input": "n=5",
    "sample_output": "A\\nBA\\nCBA\\nDCBA\\nEDCBA",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1213,
    "title": "Alphabet Pattern – Wave Pattern #1213",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Infosys"
    ],
    "description": "Print a 3-column wave pattern with 5 rows. Column 0 and 2 go A-B-C-D-E (forward); column 1 goes E-D-C-B-A (backward). Separate columns with a space.",
    "input_format": "n=5",
    "output_format": "A E A\\nB D B\\nC C C\\nD B D\\nE A E",
    "constraints": "5 rows, 3 columns. Col 0 and 2 forward, col 1 backward.",
    "sample_input": "n=5",
    "sample_output": "A E A\\nB D B\\nC C C\\nD B D\\nE A E",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1214,
    "title": "Alphabet Pattern – Cross (+) Shape #1214",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Adobe"
    ],
    "description": "Print a cross (+) shape in a 5x5 grid. The middle row (row 2) is filled with letters A-E; the middle column (col 2) is filled with letters A-E. All other positions are spaces.",
    "input_format": "n=5",
    "output_format": "  C  \\n  C  \\nABCDE\\n  C  \\n  C  ",
    "constraints": "5x5. Middle row index = n/2, middle col index = n/2.",
    "sample_input": "n=5",
    "sample_output": "  C  \\n  C  \\nABCDE\\n  C  \\n  C  ",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1215,
    "title": "Alphabet Pattern – Snake (Boustrophedon) #1215",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Microsoft", "Amazon"
    ],
    "description": "Fill a 4x4 matrix with letters A-P in boustrophedon (snake) order: left-to-right on even rows, right-to-left on odd rows. Print the matrix with spaces between letters.",
    "input_format": "No input required.",
    "output_format": "A B C D\\nH G F E\\nI J K L\\nP O N M",
    "constraints": "4x4. Even rows L to R, odd rows R to L.",
    "sample_input": "",
    "sample_output": "A B C D\\nH G F E\\nI J K L\\nP O N M",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1216,
    "title": "Alphabet Pattern – Z Shape Letters #1216",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Morgan Stanley"
    ],
    "description": "Print the letter Z in a 5x5 grid. Top row and bottom row are fully filled with letters A-E. The diagonal from top-right to bottom-left has one letter per row.",
    "input_format": "n=5",
    "output_format": "ABCDE\\n   D \\n  C  \\n B   \\nABCDE",
    "constraints": "5x5 grid. Z outline only.",
    "sample_input": "n=5",
    "sample_output": "ABCDE\\n   D \\n  C  \\n B   \\nABCDE",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1217,
    "title": "Alphabet Pattern – Mirrored Decreasing Triangle #1217",
    "category": "Patterns",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "Accenture"
    ],
    "description": "Print a right triangle where row i contains i letters starting from the i-th letter down to A in reverse. Row 1: A, Row 2: BA, Row 3: CBA, Row 4: DCBA, Row 5: EDCBA.",
    "input_format": "n=5",
    "output_format": "A\\nBA\\nCBA\\nDCBA\\nEDCBA",
    "constraints": "5 rows.",
    "sample_input": "n=5",
    "sample_output": "A\\nBA\\nCBA\\nDCBA\\nEDCBA",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1218,
    "title": "Alphabet Pattern – Hollow Diamond Letters #1218",
    "category": "Patterns",
    "difficulty": "Hard",
    "company_tags": [
      "Amazon", "Google", "Microsoft"
    ],
    "description": "Print a hollow diamond of alphabets with n=5. Only the outline of the diamond is printed using the row's letter; the interior is filled with spaces.",
    "input_format": "n=5",
    "output_format": "    A\\n   B B\\n  C   C\\n D     D\\nE       E\\n D     D\\n  C   C\\n   B B\\n    A",
    "constraints": "n=5. Hollow outline only. 9 rows.",
    "sample_input": "n=5",
    "sample_output": "    A\\n   B B\\n  C   C\\n D     D\\nE       E\\n D     D\\n  C   C\\n   B B\\n    A",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1219,
    "title": "Alphabet Pattern – Number-Letter Combo Triangle #1219",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Print a triangle where each cell shows the row number followed by the column letter. Row 1: 1A. Row 2: 2A 2B. Row 3: 3A 3B 3C. Row 4: 4A 4B 4C 4D.",
    "input_format": "n=4",
    "output_format": "1A\\n2A 2B\\n3A 3B 3C\\n4A 4B 4C 4D",
    "constraints": "4 rows. Format per cell: rowNumber + colLetter.",
    "sample_input": "n=4",
    "sample_output": "1A\\n2A 2B\\n3A 3B 3C\\n4A 4B 4C 4D",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1220,
    "title": "Alphabet Pattern – Left Arrow Letters #1220",
    "category": "Patterns",
    "difficulty": "Medium",
    "company_tags": [
      "Adobe", "Flipkart"
    ],
    "description": "Print a left-pointing arrow shape using 9 rows. The middle row (row 5) is longest: ABCDE. Rows above and below shrink by one letter each time, right-aligned.",
    "input_format": "n=5",
    "output_format": "    E\\n   DE\\n  CDE\\n BCDE\\nABCDE\\n BCDE\\n  CDE\\n   DE\\n    E",
    "constraints": "n=5. 9 rows total. Symmetric above and below middle.",
    "sample_input": "n=5",
    "sample_output": "    E\\n   DE\\n  CDE\\n BCDE\\nABCDE\\n BCDE\\n  CDE\\n   DE\\n    E",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1221,
    "title": "Check Armstrong Number #1221",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Infosys"
    ],
    "description": "Given a number n, determine whether it is an Armstrong number. A number is an Armstrong number if the sum of its digits each raised to the power of the number of digits equals the number itself. For example, 153 = 1³ + 5³ + 3³.",
    "input_format": "n = 153",
    "output_format": "true",
    "constraints": "1 ≤ n ≤ 10^6",
    "sample_input": "n = 153",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1222,
    "title": "Reverse a Number #1222",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Wipro", "Accenture"
    ],
    "description": "Reverse the digits of a given integer. If the reversed number overflows 32-bit int range, return 0.",
    "input_format": "x = 123",
    "output_format": "321",
    "constraints": "−2^31 ≤ x ≤ 2^31−1",
    "sample_input": "x = 123",
    "sample_output": "321",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1223,
    "title": "Count Digits in a Number #1223",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Cognizant"
    ],
    "description": "Count the number of digits in a given positive integer N.",
    "input_format": "N = 12345",
    "output_format": "5",
    "constraints": "1 ≤ N ≤ 10^9",
    "sample_input": "N = 12345",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1224,
    "title": "Sum of Digits #1224",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Given a non-negative integer, compute the sum of all its digits.",
    "input_format": "N = 1234",
    "output_format": "10",
    "constraints": "0 ≤ N ≤ 10^9",
    "sample_input": "N = 1234",
    "sample_output": "10",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1225,
    "title": "Check Palindrome Number #1225",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Flipkart"
    ],
    "description": "Given an integer n, return true if it reads the same forwards and backwards (palindrome). Negative numbers are never palindromes.",
    "input_format": "n = 121",
    "output_format": "true",
    "constraints": "-2^31 ≤ n ≤ 2^31 - 1",
    "sample_input": "n = 121",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1226,
    "title": "Find GCD and LCM #1226",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro"
    ],
    "description": "Given two integers A and B, compute their Greatest Common Divisor and Least Common Multiple.",
    "input_format": "A = 12, B = 18",
    "output_format": "GCD = 6, LCM = 36",
    "constraints": "1 ≤ A, B ≤ 10^6",
    "sample_input": "A = 12, B = 18",
    "sample_output": "GCD = 6, LCM = 36",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1227,
    "title": "Check Prime Number #1227",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Google", "Microsoft"
    ],
    "description": "Given a positive integer n, determine whether it is a prime number. A prime has exactly two divisors: 1 and itself.",
    "input_format": "n = 29",
    "output_format": "true",
    "constraints": "1 ≤ n ≤ 10^6",
    "sample_input": "n = 29",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1228,
    "title": "Prime Factors of a Number #1228",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Adobe"
    ],
    "description": "Given a positive integer n, print all its prime factors in ascending order. For example, 12 = 2 × 2 × 3.",
    "input_format": "n = 360",
    "output_format": "2 2 2 3 3 5",
    "constraints": "2 ≤ n ≤ 10^7",
    "sample_input": "n = 360",
    "sample_output": "2 2 2 3 3 5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1229,
    "title": "Power of a Number – Fast Exponentiation #1229",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Morgan Stanley"
    ],
    "description": "Compute x raised to the power n using binary exponentiation in O(log n) time.",
    "input_format": "x = 2.0, n = 10",
    "output_format": "1024.00000",
    "constraints": "−100 ≤ n ≤ 100",
    "sample_input": "x = 2.0, n = 10",
    "sample_output": "1024.00000",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1230,
    "title": "Count Set Bits in a Number #1230",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "company_tags": [
      "Microsoft", "Samsung"
    ],
    "description": "Count the number of 1 bits (set bits) in the binary representation of a given integer.",
    "input_format": "N = 13",
    "output_format": "3",
    "constraints": "0 ≤ N ≤ 2^31−1",
    "sample_input": "N = 13",
    "sample_output": "3",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1231,
    "title": "Fibonacci Number – Iterative #1231",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Cognizant", "Wipro"
    ],
    "description": "Compute the Nth Fibonacci number iteratively, where F(0)=0, F(1)=1.",
    "input_format": "N = 7",
    "output_format": "13",
    "constraints": "0 ≤ N ≤ 30",
    "sample_input": "N = 7",
    "sample_output": "13",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1232,
    "title": "Digital Root #1232",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Infosys", "HCL"
    ],
    "description": "Compute the digital root of N by repeatedly summing digits until a single digit remains.",
    "input_format": "N = 9875",
    "output_format": "2",
    "constraints": "0 ≤ N ≤ 10^9",
    "sample_input": "N = 9875",
    "sample_output": "2",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1233,
    "title": "Check Perfect Number #1233",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Accenture", "Capgemini"
    ],
    "description": "A perfect number equals the sum of its proper divisors (excluding itself). For example, 28 = 1+2+4+7+14. Given n, return true if it is a perfect number.",
    "input_format": "n = 28",
    "output_format": "true",
    "constraints": "1 ≤ n ≤ 10^6",
    "sample_input": "n = 28",
    "sample_output": "true",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1234,
    "title": "Number of Trailing Zeros in Factorial #1234",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Amazon", "Goldman Sachs"
    ],
    "description": "Find the number of trailing zeros in N! by counting the factors of 5 (since 5 is the limiting factor for 2×5=10).",
    "input_format": "N = 25",
    "output_format": "6",
    "constraints": "0 ≤ N ≤ 10^4",
    "sample_input": "N = 25",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1235,
    "title": "Sieve of Eratosthenes #1235",
    "category": "Numbers",
    "difficulty": "Medium",
    "company_tags": [
      "Google", "Microsoft", "Oracle"
    ],
    "description": "Use the Sieve of Eratosthenes to find all prime numbers up to N.",
    "input_format": "N = 30",
    "output_format": "2 3 5 7 11 13 17 19 23 29",
    "constraints": "2 ≤ N ≤ 10^6",
    "sample_input": "N = 30",
    "sample_output": "2 3 5 7 11 13 17 19 23 29",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1236,
    "title": "Convert Decimal to Binary #1236",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Infosys"
    ],
    "description": "Given a non-negative integer n in decimal, convert it to its binary representation and print it as a string (no leading zeros, except '0' for input 0).",
    "input_format": "n = 45",
    "output_format": "101101",
    "constraints": "0 ≤ n ≤ 10^9",
    "sample_input": "n = 45",
    "sample_output": "101101",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1237,
    "title": "Sum of First N Natural Numbers #1237",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Capgemini", "HCL"
    ],
    "description": "Given n, compute the sum of the first n natural numbers (1 + 2 + … + n) using the formula n*(n+1)/2 and verify it matches the iterative sum.",
    "input_format": "n = 100",
    "output_format": "5050",
    "constraints": "1 ≤ n ≤ 10^6",
    "sample_input": "n = 100",
    "sample_output": "5050",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1238,
    "title": "Find All Divisors of a Number #1238",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "Accenture", "Cognizant"
    ],
    "description": "Print all divisors of a given positive integer N in sorted order.",
    "input_format": "N = 36",
    "output_format": "1 2 3 4 6 9 12 18 36",
    "constraints": "1 ≤ N ≤ 10^6",
    "sample_input": "N = 36",
    "sample_output": "1 2 3 4 6 9 12 18 36",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1239,
    "title": "Missing Number in Range 1 to N #1239",
    "category": "Arrays",
    "difficulty": "Easy",
    "company_tags": [
      "Amazon", "Flipkart", "Adobe"
    ],
    "description": "Given an array containing n distinct numbers in the range [1, n+1], find the one missing number.",
    "input_format": "nums = [1,2,4,6,3,7,8], n = 7",
    "output_format": "5",
    "constraints": "1 ≤ n ≤ 10^5",
    "sample_input": "nums = [1,2,4,6,3,7,8], n = 7",
    "sample_output": "5",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  },
  {
    "id": 1240,
    "title": "Count Numbers Divisible by Both 3 and 5 #1240",
    "category": "Numbers",
    "difficulty": "Easy",
    "company_tags": [
      "TCS", "Wipro", "Cognizant"
    ],
    "description": "Given a range [1, n], count how many integers in that range are divisible by both 3 and 5 (i.e., divisible by 15).",
    "input_format": "n = 100",
    "output_format": "6",
    "constraints": "1 ≤ n ≤ 10^7",
    "sample_input": "n = 100",
    "sample_output": "6",
    "starter_code": {
      "java": `public class Main 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World");
    }
}`
    }
  }
];
// Add these functions to your problems.ts file

export function getCategories(): string[] {
  const categories = new Set<string>();
  problems.forEach(problem => {
    categories.add(problem.category);
  });
  return Array.from(categories).sort();
}

export function getCompanies(): string[] {
  const companies = new Set<string>();
  problems.forEach(problem => {
    problem.company_tags.forEach(tag => {
      companies.add(tag);
    });
  });
  return Array.from(companies).sort();
}

export function getProblemById(id: number): Problem | undefined {
  return problems.find(problem => problem.id === id);
}