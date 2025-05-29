var mongodb = {
    patterns: {
        useful: {
            creational: [
                {
                    id: 1,
                    name: "Factory Method",
                    description: "object to create objects, inherited classes may create other objects",
                    similarities: [13]
                }
            ],
            structural: [
                {
                    id: 2,
                    name: "Adapter",
                    description: "inherit from an object to add required methods to it or modify them",
                    similarities: [15, 17, 23]
                },
                {
                    id: 3,
                    name: "Bridge",
                    description: "inject different dependencies to the same class to manipulating them similarly from that class",
                    similarities: [21]
                },
                {
                    id: 4,
                    name: "Flyweight",
                    description: "replace fields with a reference to list of fields stored in a list of fields factory"
                },
                {
                    id: 5,
                    name: "Proxy",
                    description: "complex advanced pointer",
                    similarities: [20]
                }
            ],
            behavioral: [
                {
                    id: 6,
                    name: "Iterator",
                    description: "iterate a compound object with next, current, and done functions"
                },
                {
                    id: 7,
                    name: "Observer",
                    description: "event listener",
                    similarities: [18]
                },
                {
                    id: 8,
                    name: "Memento",
                    description: "separate class for object data dumps"
                },
                {
                    id: 9,
                    name: "Template method",
                    description: "constant sequence of functions modifiable by inheritance actions",
                    similarities: [13]
                },
                {
                    id: 10,
                    name: "Interpreter",
                    description: "do actions on a tree structure consists of words of a language defined by a grammar"
                }
            ]
        },
        useless: {
            creational: [
                {
                    id: 11,
                    name: "Abstract Factory",
                    description: "inherit factories from one factory for dynamic substitution",
                    reason: "too complex and often inapplicable due to very specific definition"
                },
                {
                    id: 12,
                    name: "Singleton",
                    description: "create a global object without possibility to recreate",
                    reason: "I don't know how to explain uselessness of useless things"
                },
                {
                    id: 13,
                    name: "Builder",
                    description: "same as factory, but with stages, same as template method, but oriented to object creation",
                    reason: "same as factory and template",
                    similarities: [1, 9]
                },
                {
                    id: 14,
                    name: "Prototype",
                    description: "functional cloner for a class",
                    reason: "it is obvious that you can write a function for making clones"
                }
            ],
            structural: [
                {
                    id: 15,
                    name: "Façade",
                    description: "same as adapter, but for complexity reduction",
                    reason: "it is adapter",
                    similarities: [2, 17, 23]
                },
                {
                    id: 16,
                    name: "Composite",
                    description: "class for storing trees: branches and leaves",
                    reason: "It is obvious that you can make a tree from a class"
                },
                {
                    id: 17,
                    name: "Decorator",
                    description: "same as adapter, but with different name",
                    similarities: [2, 15, 23]
                }
            ],
            behavioral: [
                {
                    id: 18,
                    name: "Chain of responsibility",
                    description: "query objects sequentially until find a right one",
                    reason: "obvious",
                    similarities: [7]
                },
                {
                    id: 19,
                    name: "Command",
                    description: "functional executor for a class represents any command",
                    reason: "cumbersome"
                },
                {
                    id: 20,
                    name: "Mediator",
                    description: "insert a class between two classes",
                    reason: "less classes less problems",
                    similarities: [5]
                },
                {
                    id: 21,
                    name: "Strategy",
                    description: "same as bridge, but for actions",
                    similarities: [3]
                },
                {
                    id: 22,
                    name: "State",
                    description: "same as strategy",
                    reason: "even the definition is strange, in fact, every FSA can be considered as the State pattern, that is just an if-cascade",
                    similarities: [21]
                },
                {
                    id: 23,
                    name: "Visitor",
                    description: "adapter, but implemented as functional acceptor of a visitor for an object to apply a visitor functional to it",
                    reason: "too complex, less interfaces less problems",
                    similarities: [2, 15, 17]
                }
            ]
        }
    }
}
