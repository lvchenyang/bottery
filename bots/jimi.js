bot = {
    grammar: {
        noun: ["cat", "monkey","butter", "pants", "demon", "fluff", "taco", "mountain", "butt"],
        adj: ["fluffy", "fat", "puff", "tepid", "love", "unruly"],
        name: ["#noun.capitalize##noun#", "#adj.capitalize##noun#", "#noun.capitalize# the #adj.capitalize#"],
        catSpeak: ["mmrrr", "meow", "mmrrrrow", "meep", "#catSpeak# #catSpeak#"],
      },
    states: {
        origin: {
            onEnter: "'你好，我是JIMI，请输入您要充值的电话号码'",
            exits: "'*' ->step1 phone_num=INPUT"
        },
        step1: {
            onEnter: "'您输入的电话号码是：#/phone_num#'",
            exits: "->step2"
        },
        step2: {
            onEnter: "'请输入充值金额'",
            chips: ["10","20","30"],
            exits: "'*' ->step3 money=INPUT"
        },
        step3: {
            onEnter: "'您输入的金额是：#/money#，电话号码是#/phone_num#'"
        }
    },
    initialBlackboard: {
        name: "the jimi"
    }
}