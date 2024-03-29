export const HOBBIES_DICTIONARY = {
  0: {
    icon: {
      Light: "/icons/chess.svg",
    },
    name: "Chess",
  },
  1: {
    icon: {
      Light: "/icons/exercise.svg",
    },
    name: "Exercise",
  },
  2: {
    icon: {
      Light: "/icons/movies.svg",
    },
    name: "Movies",
  },
  3: {
    icon: {
      Light: "/icons/book.svg",
    },
    name: "Reading",
  },
  4: {
    icon: {
      Light: "/icons/walking.svg",
    },
    name: "Walking",
  },
};

export const SNIPPETS_DICTIONARY = {
  0: {
    title: "Main.Snippets.0.title",
    platform: "AlgoExpert",
    type: "Main.Snippets.0.type",
    description: "Main.Snippets.0.description",
    solution: "Main.Snippets.0.solution",
    complexityAnalysis: "O(n) time, O(1) space => n = array.length",
    code: `
      function searchForRange(array, target) {
        let range = [-1, -1]
        let i = 0
        let j = array.length - 1
        for(i; i <= array.length -1; i++){
          if(range[0] === -1 && array[i] === target){
            range[0] = i
          }
  
          if(range[1] === -1 && array[j] === target){
            range[1] = j
          }
  
          if(range[0] !== -1 && range[1] !== -1){
            return range
          }
          j--
        }
        return range
      }

    `,
  },
  1: {
    title: "Main.Snippets.1.title",
    platform: "AlgoExpert",
    type: "Main.Snippets.1.type",
    description: "Main.Snippets.1.description",
    solution: "Main.Snippets.1.solution",
    complexityAnalysis: "O(nlog(n)) time, O(n) space => n = tasks.length",
    code: `
      function tasksAssignment(k, tasks) {
        const indexedTasks = tasks.map((value, index) => ({ value, index }))
        indexedTasks.sort((a, b) => a.value - b.value)
        let minTimes = []

        for(let i = 0; i < tasks.length / 2; i++){
          const minIdx = indexedTasks[i].index
          const maxIdx = indexedTasks[indexedTasks.length - 1 - i].index
          minTimes.push([minIdx, maxIdx])
        }
        return minTimes
      }

    `,
  },
  2: {
    title: "Main.Snippets.2.title",
    platform: "AlgoExpert",
    type: "Main.Snippets.2.type",
    description: "Main.Snippets.2.description",
    solution: "Main.Snippets.2.solution",
    complexityAnalysis: "O(n) time, O(1) space => n = array.length",
    code: `
      function twoNumberSum(array, target) {
        const start = 0
        const end = array. length - 1

        while(start < end){
          if(array[start] + array[end] === target){
            return [array[start], array[end]]
          }else if(array[start] + array[end] > target){
            end--
          }else if(array[start] + array[end] < target){
            start++
          }
        }
        return []
      }

    `,
  },
  3: {
    title: "Main.Snippets.3.title",
    platform: "AlgoExpert",
    type: "Main.Snippets.3.type",
    description: "Main.Snippets.3.description",
    solution: "Main.Snippets.3.solution",
    complexityAnalysis: "O(n) time, O(1) space => n = string.length",
    code: `
      function palindromeChecker(string) {
        const start = 0
        const end = array. length - 1

        for(start; start < end; start++){
          if(string.charAt(start) !== string.charAt(end)){
            return false
          }
          end--
        }
        return true
      }

    `,
  },
};

export const STATS_CARD_DICTIONARY = {
  0: {
    mainValue: "+20 / 135",
    plainText: "About.StatsCards.0.text",
  },
  1: {
    mainValue: "+80",
    plainText: "About.StatsCards.1.text",
  },
  2: {
    mainValue: "+5",
    plainText: "About.StatsCards.2.text",
  },
  3: {
    mainValue: "+12",
    plainText: "About.StatsCards.3.text",
  },
};

export const SKILLS_DICTIONARY = {
  soft: {
    0: {
      name: "Skills.Skillset.soft.0.name",
      description: "Skills.Skillset.soft.0.description",
    },
    1: {
      name: "Skills.Skillset.soft.1.name",
      description: "Skills.Skillset.soft.1.description",
    },
    2: {
      name: "Skills.Skillset.soft.2.name",
      description: "Skills.Skillset.soft.2.description",
    },
    3: {
      name: "Skills.Skillset.soft.3.name",
      description: "Skills.Skillset.soft.3.description",
    },
    4: {
      name: "Skills.Skillset.soft.4.name",
      description: "Skills.Skillset.soft.4.description",
    },
    5: {
      name: "Skills.Skillset.soft.5.name",
      description: "Skills.Skillset.soft.5.description",
    },
  },
  technical: {
    0: {
      name: "Skills.Skillset.technical.0.name",
      description: "Skills.Skillset.technical.0.description",
    },
    1: {
      name: "Skills.Skillset.technical.1.name",
      description: "Skills.Skillset.technical.1.description",
    },
    2: {
      name: "Skills.Skillset.technical.2.name",
      description: "Skills.Skillset.technical.2.description",
    },
    3: {
      name: "Skills.Skillset.technical.3.name",
      description: "Skills.Skillset.technical.3.description",
    },
    4: {
      name: "Skills.Skillset.technical.4.name",
      description: "Skills.Skillset.technical.4.description",
    },
    5: {
      name: "Skills.Skillset.technical.5.name",
      description: "Skills.Skillset.technical.5.description",
    },
  },
};
