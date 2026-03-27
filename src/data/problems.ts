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
    python: string;
    cpp: string;
    c: string;
  };
}

// Categories with problem counts for generating 700 problems
const categories = [
  "Arrays", "Strings", "Linked Lists", "Stacks", "Queues",
  "Trees", "Graphs", "Hashing", "Heap", "Dynamic Programming",
  "Greedy", "Binary Search", "Backtracking", "Sliding Window",
  "Operating Systems", "DBMS", "Computer Networks", "OOP",
  "Aptitude", "Logical Reasoning"
];

const companies = [
  "Google", "Amazon", "Microsoft", "Meta", "Apple",
  "Netflix", "Uber", "Adobe", "Goldman Sachs", "Morgan Stanley",
  "Flipkart", "Walmart", "Intuit", "Oracle", "SAP"
];

const difficulties: Array<"Easy" | "Medium" | "Hard"> = ["Easy", "Medium", "Hard"];

// Problem templates per category
const problemTemplates: Record<string, Array<{ title: string; desc: string; input: string; output: string; constraints: string; sampleIn: string; sampleOut: string }>> = {
  "Arrays": [
    { title: "Two Sum", desc: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.", input: "An array of integers and a target integer", output: "Two indices", constraints: "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9", sampleIn: "nums = [2,7,11,15], target = 9", sampleOut: "[0,1]" },
    { title: "Best Time to Buy and Sell Stock", desc: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.", input: "An array of prices", output: "Maximum profit", constraints: "1 <= prices.length <= 10^5", sampleIn: "prices = [7,1,5,3,6,4]", sampleOut: "5" },
    { title: "Contains Duplicate", desc: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.", input: "An array of integers", output: "Boolean", constraints: "1 <= nums.length <= 10^5", sampleIn: "nums = [1,2,3,1]", sampleOut: "true" },
    { title: "Product of Array Except Self", desc: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].", input: "An array of integers", output: "Product array", constraints: "2 <= nums.length <= 10^5", sampleIn: "nums = [1,2,3,4]", sampleOut: "[24,12,8,6]" },
    { title: "Maximum Subarray", desc: "Given an integer array nums, find the subarray with the largest sum, and return its sum.", input: "An array of integers", output: "Maximum sum", constraints: "1 <= nums.length <= 10^5", sampleIn: "nums = [-2,1,-3,4,-1,2,1,-5,4]", sampleOut: "6" },
    { title: "Maximum Product Subarray", desc: "Given an integer array nums, find a subarray that has the largest product, and return the product.", input: "An array of integers", output: "Maximum product", constraints: "1 <= nums.length <= 2 * 10^4", sampleIn: "nums = [2,3,-2,4]", sampleOut: "6" },
    { title: "Find Minimum in Rotated Sorted Array", desc: "Given the sorted rotated array nums of unique elements, return the minimum element.", input: "Rotated sorted array", output: "Minimum element", constraints: "1 <= nums.length <= 5000", sampleIn: "nums = [3,4,5,1,2]", sampleOut: "1" },
    { title: "Search in Rotated Sorted Array", desc: "Given the array nums after rotation and an integer target, return the index of target, or -1 if not found.", input: "Rotated sorted array and target", output: "Index or -1", constraints: "1 <= nums.length <= 5000", sampleIn: "nums = [4,5,6,7,0,1,2], target = 0", sampleOut: "4" },
    { title: "3Sum", desc: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.", input: "Array of integers", output: "List of triplets", constraints: "3 <= nums.length <= 3000", sampleIn: "nums = [-1,0,1,2,-1,-4]", sampleOut: "[[-1,-1,2],[-1,0,1]]" },
    { title: "Container With Most Water", desc: "Given n non-negative integers where each represents a point at coordinate (i, ai). Find two lines that together with x-axis forms a container that holds the most water.", input: "Array of heights", output: "Maximum area", constraints: "2 <= height.length <= 10^5", sampleIn: "height = [1,8,6,2,5,4,8,3,7]", sampleOut: "49" },
  ],
  "Strings": [
    { title: "Valid Anagram", desc: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.", input: "Two strings", output: "Boolean", constraints: "1 <= s.length, t.length <= 5 * 10^4", sampleIn: 's = "anagram", t = "nagaram"', sampleOut: "true" },
    { title: "Valid Palindrome", desc: "A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.", input: "A string", output: "Boolean", constraints: "1 <= s.length <= 2 * 10^5", sampleIn: 's = "A man, a plan, a canal: Panama"', sampleOut: "true" },
    { title: "Longest Substring Without Repeating Characters", desc: "Given a string s, find the length of the longest substring without repeating characters.", input: "A string", output: "Length integer", constraints: "0 <= s.length <= 5 * 10^4", sampleIn: 's = "abcabcbb"', sampleOut: "3" },
    { title: "Longest Palindromic Substring", desc: "Given a string s, return the longest palindromic substring in s.", input: "A string", output: "Palindrome string", constraints: "1 <= s.length <= 1000", sampleIn: 's = "babad"', sampleOut: '"bab"' },
    { title: "Group Anagrams", desc: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.", input: "Array of strings", output: "Grouped anagrams", constraints: "1 <= strs.length <= 10^4", sampleIn: 'strs = ["eat","tea","tan","ate","nat","bat"]', sampleOut: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
  ],
  "Linked Lists": [
    { title: "Reverse Linked List", desc: "Given the head of a singly linked list, reverse the list, and return the reversed list.", input: "Head of linked list", output: "Head of reversed list", constraints: "0 <= Number of nodes <= 5000", sampleIn: "head = [1,2,3,4,5]", sampleOut: "[5,4,3,2,1]" },
    { title: "Merge Two Sorted Lists", desc: "Merge two sorted linked lists and return it as a sorted list.", input: "Two sorted linked lists", output: "Merged sorted list", constraints: "0 <= Number of nodes <= 50", sampleIn: "l1 = [1,2,4], l2 = [1,3,4]", sampleOut: "[1,1,2,3,4,4]" },
    { title: "Linked List Cycle", desc: "Given head, the head of a linked list, determine if the linked list has a cycle in it.", input: "Head of linked list", output: "Boolean", constraints: "0 <= Number of nodes <= 10^4", sampleIn: "head = [3,2,0,-4], pos = 1", sampleOut: "true" },
    { title: "Remove Nth Node From End of List", desc: "Given the head of a linked list, remove the nth node from the end of the list and return its head.", input: "Head and integer n", output: "Modified list head", constraints: "1 <= sz <= 30, 1 <= n <= sz", sampleIn: "head = [1,2,3,4,5], n = 2", sampleOut: "[1,2,3,5]" },
  ],
  "Dynamic Programming": [
    { title: "Climbing Stairs", desc: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?", input: "Integer n", output: "Number of ways", constraints: "1 <= n <= 45", sampleIn: "n = 3", sampleOut: "3" },
    { title: "Coin Change", desc: "Given an array of coins and an amount, return the fewest number of coins needed to make up that amount.", input: "Array of coins and amount", output: "Minimum coins", constraints: "1 <= coins.length <= 12", sampleIn: "coins = [1,5,11], amount = 11", sampleOut: "1" },
    { title: "Longest Increasing Subsequence", desc: "Given an integer array nums, return the length of the longest strictly increasing subsequence.", input: "Array of integers", output: "Length", constraints: "1 <= nums.length <= 2500", sampleIn: "nums = [10,9,2,5,3,7,101,18]", sampleOut: "4" },
    { title: "House Robber", desc: "Given an array representing money in each house, determine the maximum amount you can rob without robbing two adjacent houses.", input: "Array of integers", output: "Maximum amount", constraints: "1 <= nums.length <= 100", sampleIn: "nums = [1,2,3,1]", sampleOut: "4" },
    { title: "Word Break", desc: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.", input: "String and word dictionary", output: "Boolean", constraints: "1 <= s.length <= 300", sampleIn: 's = "leetcode", wordDict = ["leet","code"]', sampleOut: "true" },
  ],
  "Trees": [
    { title: "Maximum Depth of Binary Tree", desc: "Given the root of a binary tree, return its maximum depth.", input: "Root of binary tree", output: "Integer depth", constraints: "0 <= Number of nodes <= 10^4", sampleIn: "root = [3,9,20,null,null,15,7]", sampleOut: "3" },
    { title: "Invert Binary Tree", desc: "Given the root of a binary tree, invert the tree, and return its root.", input: "Root of binary tree", output: "Root of inverted tree", constraints: "0 <= Number of nodes <= 100", sampleIn: "root = [4,2,7,1,3,6,9]", sampleOut: "[4,7,2,9,6,3,1]" },
    { title: "Validate Binary Search Tree", desc: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).", input: "Root of binary tree", output: "Boolean", constraints: "1 <= Number of nodes <= 10^4", sampleIn: "root = [2,1,3]", sampleOut: "true" },
    { title: "Binary Tree Level Order Traversal", desc: "Given the root of a binary tree, return the level order traversal of its nodes' values.", input: "Root of binary tree", output: "2D array of values", constraints: "0 <= Number of nodes <= 2000", sampleIn: "root = [3,9,20,null,null,15,7]", sampleOut: "[[3],[9,20],[15,7]]" },
  ],
  "Graphs": [
    { title: "Number of Islands", desc: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.", input: "2D grid", output: "Number of islands", constraints: "1 <= m, n <= 300", sampleIn: 'grid = [["1","1","0"],["1","0","0"],["0","0","1"]]', sampleOut: "2" },
    { title: "Clone Graph", desc: "Given a reference of a node in a connected undirected graph, return a deep copy of the graph.", input: "Node reference", output: "Cloned graph", constraints: "1 <= Number of nodes <= 100", sampleIn: "adjList = [[2,4],[1,3],[2,4],[1,3]]", sampleOut: "[[2,4],[1,3],[2,4],[1,3]]" },
    { title: "Course Schedule", desc: "There are a total of numCourses courses. Given prerequisites, determine if you can finish all courses.", input: "numCourses and prerequisites", output: "Boolean", constraints: "1 <= numCourses <= 2000", sampleIn: "numCourses = 2, prerequisites = [[1,0]]", sampleOut: "true" },
  ],
  "Binary Search": [
    { title: "Binary Search", desc: "Given a sorted array of integers nums and a target, return the index if found, otherwise return -1.", input: "Sorted array and target", output: "Index or -1", constraints: "1 <= nums.length <= 10^4", sampleIn: "nums = [-1,0,3,5,9,12], target = 9", sampleOut: "4" },
    { title: "Search a 2D Matrix", desc: "Write an efficient algorithm to search for a value target in an m x n integer matrix.", input: "Matrix and target", output: "Boolean", constraints: "1 <= m, n <= 100", sampleIn: "matrix = [[1,3,5,7],[10,11,16,20]], target = 3", sampleOut: "true" },
    { title: "Koko Eating Bananas", desc: "Koko loves bananas. She can decide her eating speed k. Return the minimum k such that she can eat all bananas within h hours.", input: "Piles array and hours h", output: "Minimum speed k", constraints: "1 <= piles.length <= 10^4", sampleIn: "piles = [3,6,7,11], h = 8", sampleOut: "4" },
  ],
  "Stacks": [
    { title: "Valid Parentheses", desc: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.", input: "String of brackets", output: "Boolean", constraints: "1 <= s.length <= 10^4", sampleIn: 's = "([])"', sampleOut: "true" },
    { title: "Min Stack", desc: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.", input: "Stack operations", output: "Results of operations", constraints: "-2^31 <= val <= 2^31 - 1", sampleIn: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()", sampleOut: "-3, 0, -2" },
  ],
  "Hashing": [
    { title: "Top K Frequent Elements", desc: "Given an integer array nums and an integer k, return the k most frequent elements.", input: "Array and integer k", output: "Array of k elements", constraints: "1 <= nums.length <= 10^5", sampleIn: "nums = [1,1,1,2,2,3], k = 2", sampleOut: "[1,2]" },
    { title: "Longest Consecutive Sequence", desc: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.", input: "Array of integers", output: "Length", constraints: "0 <= nums.length <= 10^5", sampleIn: "nums = [100,4,200,1,3,2]", sampleOut: "4" },
  ],
  "Greedy": [
    { title: "Jump Game", desc: "Given an array of non-negative integers nums, determine if you can reach the last index.", input: "Array of integers", output: "Boolean", constraints: "1 <= nums.length <= 10^4", sampleIn: "nums = [2,3,1,1,4]", sampleOut: "true" },
    { title: "Gas Station", desc: "There are n gas stations along a circular route. Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.", input: "Gas and cost arrays", output: "Index or -1", constraints: "1 <= n <= 10^5", sampleIn: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", sampleOut: "3" },
  ],
  "Backtracking": [
    { title: "Subsets", desc: "Given an integer array nums of unique elements, return all possible subsets.", input: "Array of integers", output: "List of subsets", constraints: "1 <= nums.length <= 10", sampleIn: "nums = [1,2,3]", sampleOut: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
    { title: "Combination Sum", desc: "Given an array of distinct integers candidates and a target integer, return all unique combinations that sum to target.", input: "Array and target", output: "List of combinations", constraints: "1 <= candidates.length <= 30", sampleIn: "candidates = [2,3,6,7], target = 7", sampleOut: "[[2,2,3],[7]]" },
  ],
  "Sliding Window": [
    { title: "Minimum Window Substring", desc: "Given two strings s and t, return the minimum window substring of s such that every character in t is included.", input: "Two strings", output: "Substring", constraints: "1 <= s.length, t.length <= 10^5", sampleIn: 's = "ADOBECODEBANC", t = "ABC"', sampleOut: '"BANC"' },
    { title: "Longest Repeating Character Replacement", desc: "Given a string s and an integer k, find the length of the longest substring that contains the same letter after performing at most k replacements.", input: "String and integer k", output: "Length", constraints: "1 <= s.length <= 10^5", sampleIn: 's = "AABABBA", k = 1', sampleOut: "4" },
  ],
  "Heap": [
    { title: "Merge K Sorted Lists", desc: "Merge k sorted linked lists and return it as one sorted list.", input: "Array of sorted lists", output: "Single sorted list", constraints: "0 <= k <= 10^4", sampleIn: "lists = [[1,4,5],[1,3,4],[2,6]]", sampleOut: "[1,1,2,3,4,4,5,6]" },
    { title: "Find Median from Data Stream", desc: "Design a data structure that supports adding numbers and finding the median.", input: "Stream operations", output: "Median values", constraints: "-10^5 <= num <= 10^5", sampleIn: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()", sampleOut: "1.5, 2.0" },
  ],
  "Queues": [
    { title: "Implement Queue using Stacks", desc: "Implement a first in first out (FIFO) queue using only two stacks.", input: "Queue operations", output: "Operation results", constraints: "1 <= x <= 9", sampleIn: "push(1), push(2), peek(), pop(), empty()", sampleOut: "1, 1, false" },
  ],
  "Operating Systems": [
    { title: "Process Scheduling - FCFS", desc: "Implement First Come First Serve scheduling algorithm. Given arrival times and burst times of processes, calculate average waiting time and turnaround time.", input: "Arrival and burst times", output: "Average waiting and turnaround time", constraints: "1 <= n <= 100", sampleIn: "arrival = [0,1,2], burst = [4,3,1]", sampleOut: "Avg WT: 2.33, Avg TAT: 5.0" },
  ],
  "DBMS": [
    { title: "Normalize to 3NF", desc: "Given a relation with functional dependencies, normalize the relation to Third Normal Form (3NF). Identify candidate keys and decompose accordingly.", input: "Relation and FDs", output: "3NF decomposition", constraints: "Conceptual problem", sampleIn: "R(A,B,C,D), FDs: A->B, B->C", sampleOut: "R1(A,B), R2(B,C), R3(A,D)" },
  ],
  "Computer Networks": [
    { title: "Subnet Calculator", desc: "Given an IP address and subnet mask, calculate the network address, broadcast address, and the range of valid host addresses.", input: "IP address and subnet mask", output: "Network details", constraints: "Valid IPv4", sampleIn: "IP: 192.168.1.100, Mask: 255.255.255.0", sampleOut: "Network: 192.168.1.0, Broadcast: 192.168.1.255" },
  ],
  "OOP": [
    { title: "Design a Parking Lot", desc: "Design a parking lot system using object-oriented principles. Support multiple vehicle types, multiple floors, and tracking available spots.", input: "System design", output: "Class diagram and implementation", constraints: "Conceptual OOP design", sampleIn: "park(vehicle), unpark(vehicle), getAvailableSpots()", sampleOut: "Implemented parking system" },
  ],
  "Aptitude": [
    { title: "Profit and Loss Calculator", desc: "Given cost price and selling price, calculate profit percentage or loss percentage. Handle edge cases for zero cost price.", input: "Cost price and selling price", output: "Profit/Loss percentage", constraints: "0 <= CP, SP <= 10^6", sampleIn: "CP = 100, SP = 120", sampleOut: "Profit: 20%" },
  ],
  "Logical Reasoning": [
    { title: "Seating Arrangement", desc: "Given constraints about seating positions of people around a circular table, determine the final arrangement. Apply elimination logic.", input: "Constraints list", output: "Seating order", constraints: "3 <= people <= 8", sampleIn: "A is to the left of B, C is opposite to A, 4 people", sampleOut: "A B D C (clockwise)" },
  ],
};

function getStarterCode(title: string, category: string) {
  const fnName = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '');
  return {
    java: `class Solution {\n    public void ${fnName}() {\n        // Write your solution here\n    }\n}`,
    python: `class Solution:\n    def ${fnName}(self):\n        # Write your solution here\n        pass`,
    cpp: `class Solution {\npublic:\n    void ${fnName}() {\n        // Write your solution here\n    }\n};`,
    c: `#include <stdio.h>\n\nvoid ${fnName}() {\n    // Write your solution here\n}\n\nint main() {\n    ${fnName}();\n    return 0;\n}`,
  };
}

function generateProblems(): Problem[] {
  const problems: Problem[] = [];
  let id = 1;

  // First pass: add all template problems
  for (const [category, templates] of Object.entries(problemTemplates)) {
    for (const t of templates) {
      problems.push({
        id: id++,
        title: t.title,
        category,
        difficulty: difficulties[Math.floor(Math.random() * 3)],
        company_tags: companies.sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(Math.random() * 3)),
        description: t.desc,
        input_format: t.input,
        output_format: t.output,
        constraints: t.constraints,
        sample_input: t.sampleIn,
        sample_output: t.sampleOut,
        starter_code: getStarterCode(t.title, category),
      });
    }
  }

  // Generate remaining problems to reach 700
  const catKeys = Object.keys(problemTemplates);
  const variations = [
    "Find", "Count", "Check", "Maximum", "Minimum", "Longest", "Shortest",
    "Sum of", "Product of", "Reverse", "Rotate", "Sort", "Merge", "Split",
    "Delete", "Insert", "Update", "Transform", "Convert", "Validate",
    "Optimize", "Compress", "Decompress", "Encode", "Decode", "Serialize",
    "Flatten", "Group", "Partition", "Balance", "Traverse", "Search"
  ];
  const subjects = [
    "Elements", "Nodes", "Pairs", "Triplets", "Subsequence", "Subarray",
    "Substring", "Path", "Cycle", "Component", "Level", "Depth",
    "Interval", "Range", "Window", "Matrix", "Grid", "Sequence",
    "Characters", "Digits", "Brackets", "Parentheses", "Edges", "Vertices"
  ];

  while (problems.length < 700) {
    const cat = catKeys[problems.length % catKeys.length];
    const v = variations[problems.length % variations.length];
    const s = subjects[Math.floor(problems.length / catKeys.length) % subjects.length];
    const title = `${v} ${s} ${problems.length < 350 ? 'I' : 'II'}`;
    const diff = difficulties[problems.length % 3];

    problems.push({
      id: id++,
      title,
      category: cat,
      difficulty: diff,
      company_tags: companies.sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(Math.random() * 2)),
      description: `Given a data structure, ${v.toLowerCase()} the ${s.toLowerCase()} based on the specified conditions. Return the result in the required format.`,
      input_format: `Input data structure with ${s.toLowerCase()}`,
      output_format: `Resulting ${s.toLowerCase()} after operation`,
      constraints: `1 <= n <= 10^5`,
      sample_input: `n = 5, data = [1, 2, 3, 4, 5]`,
      sample_output: `[Result based on operation]`,
      starter_code: getStarterCode(`${v}_${s}`, cat),
    });
  }

  return problems;
}

export const problems: Problem[] = generateProblems();

export const getCategories = () => [...new Set(problems.map(p => p.category))];
export const getCompanies = () => [...new Set(problems.flatMap(p => p.company_tags))].sort();
export const getProblemById = (id: number) => problems.find(p => p.id === id);
export const getDailyChallenge = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return problems[dayOfYear % problems.length];
};
