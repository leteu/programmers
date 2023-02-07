import { solution  } from "./excel";

console.log( // ["EMPTY", "group"]
  solution(
    [
      "UPDATE 1 1 menu", 
      "UPDATE 1 2 category", 
      "UPDATE 2 1 bibimbap", 
      "UPDATE 2 2 korean", 
      "UPDATE 2 3 rice", 
      "UPDATE 3 1 ramyeon", 
      "UPDATE 3 2 korean", 
      "UPDATE 3 3 noodle", 
      "UPDATE 3 4 instant", 
      "UPDATE 4 1 pasta", 
      "UPDATE 4 2 italian", 
      "UPDATE 4 3 noodle", 
      "MERGE 1 2 1 3", 
      "MERGE 1 3 1 4", 
      "UPDATE korean hansik", 
      "UPDATE 1 3 group", 
      "UNMERGE 1 4", 
      "PRINT 1 3", 
      "PRINT 1 4"
    ]
  )
)
console.log( // ["d", "EMPTY"]
  solution(
    [
      "UPDATE 1 1 a", 
      "UPDATE 1 2 b", 
      "UPDATE 2 1 c", 
      "UPDATE 2 2 d", 
      "MERGE 1 1 1 2", 
      "MERGE 2 2 2 1", 
      "MERGE 2 1 1 1", 
      "PRINT 1 1", 
      "UNMERGE 2 2", 
      "PRINT 1 1"
    ]
  )
)
console.log( // ["EMPTY", "EMPTY", "A", "EMPTY"]
  solution(
    [
      "UPDATE 1 1 A",
      "UPDATE 2 2 B",
      "UPDATE 3 3 C",
      "UPDATE 4 4 D",
      "MERGE 1 1 2 2",
      "MERGE 3 3 4 4",
      "MERGE 1 1 4 4",
      "UNMERGE 3 3",
      "PRINT 1 1",
      "PRINT 2 2",
      "PRINT 3 3",
      "PRINT 4 4"
    ]
  )
)

console.log( // [ 'A', 'EMPTY', 'F', 'P', 'EMPTY', 'EMPTY', 'P' ]
  solution(
    [
      "UPDATE 1 1 A",
      "UPDATE 1 2 B",
      "UPDATE 1 3 C",
      "UPDATE 1 4 D",
      "UPDATE 2 1 E",
      "UPDATE 2 2 F",
      "UPDATE 2 3 G",
      "UPDATE 2 4 H",
      "UPDATE 3 1 I",
      "UPDATE 3 2 J",
      "UPDATE 3 3 K",
      "UPDATE 3 4 L",
      "UPDATE 4 1 M",
      "UPDATE 4 2 N",
      "UPDATE 4 3 O",
      "UPDATE 4 4 P",
      "MERGE 1 3 2 4",
      "MERGE 3 3 2 4",
      "MERGE 1 3 3 2",
      "UNMERGE 2 4",
      "MERGE 4 4 2 4",
      "PRINT 1 1",
      "PRINT 1 3",
      "PRINT 2 2",
      "PRINT 2 4",
      "PRINT 3 2",
      "PRINT 3 3",
      "PRINT 4 4"
    ]
  )
)

console.log( // [ 'EMPTY', 'EMPTY', 'FEMPTY', 'P', 'EMPTY', 'EMPTY', 'P' ]
  solution(
    [
      "UPDATE 1 2 B",
      "UPDATE 2 1 E",
      "UPDATE 2 3 G",
      "UPDATE 4 2 N",
      "UPDATE 4 3 O",
      "UPDATE 4 4 P",
      "MERGE 1 3 2 4",
      "MERGE 3 3 2 2",
      "UPDATE A B",
      "MERGE 1 3 3 2",
      "UNMERGE 2 4",
      "UPDATE N B",
      "MERGE 2 4 4 4",
      "PRINT 1 1",
      "PRINT 1 3",
      "PRINT 2 2",
      "PRINT 2 4",
      "PRINT 3 2",
      "PRINT 3 3",
      "PRINT 4 4"
    ]
  )
)
