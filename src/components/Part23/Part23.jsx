import React, { useState, useEffect } from 'react';
import './Part23.css';

const cuecards = {
    question1: {
        question: "Describe a person you know who has chosen a career in the medical field (e.g. a doctor, a nurse)",
        cues: {
            ques1: "Who he/she is",
            ques2: "What he/she does",
            ques3: "Why he/she chose this career",
            ques4: "And explain how you feel about him/her"
        },
        followup: {
            followup1: "Can a hospital function effectively without nurses?",
            followup2: "What are the differences between the work of a doctor and a nurse?",
            followup3: "Do you think it is necessary to learn first aid skills?",
            followup4: "Do you think that doctors and nurses are not paid enough?",
            followup5: "Who plays a more important role, doctors or nurses?",
            followup6: "Do you think doctors and nurses are very important?"
        }
    },
    question2: {
        question: "Describe a person who likes to read a lot",
        cues: {
            ques1: "Who this person is",
            ques2: "How you knew him/her",
            ques3: "What he/she likes to read",
            ques4: "And explain why you think he/she likes to read a lot"
        },
        followup: {
            followup1: "Do you think people of all ages need to read?",
            followup2: "What are the differences between paper books and movies?",
            followup3: "What reading topics are popular in your country?",
            followup4: "Is reading for fun or for work?",
            followup5: "Do you think parents should help their children develop the reading habit from an early age?",
            followup6: "Why are many people so keen on reading?"
        }
    },
    question3: {
        question: "Describe a time when you lost an important and valuable item",
        cues: {
            ques1: "When and where it happened",
            ques2: "What it was",
            ques3: "How important and valuable it was",
            ques4: "How you lost it",
            ques5: "And explain how you felt about the experience"
        },
        followup: {
            followup1: "Is it important for students to be organized?",
            followup2: "Are there any good ways to remind us not to forget or lose things?",
            followup3: "What should parents do to teach their children not to lose things?",
            followup4: "What do people often do after losing things?",
            followup5: "What are the reasons why people often misplace or lose things?",
            followup6: "What are some common items that people tend to lose easily?"
        }
    },
    question4: {
        question: "Describe a time when you answered a phone call from someone you didn’t know in a public place",
        cues: {
            ques1: "When and where it happened",
            ques2: "Who called you",
            ques3: "What he/she said",
            ques4: "How you corresponded",
            ques5: "And explain how you felt about the experience"
        },
        followup: {
            followup1: "Should people be banned from talking loudly in public places?",
            followup2: "Is it acceptable to talk on the phone in public?",
            followup3: "Should parents teach their children to behave well in public?",
            followup4: "Why do some people not care about their actions in public?",
            followup5: "What are the differences between sitting next to someone who talks on the phone and sitting next to people who talk to each other while traveling by train?",
            followup6: "Do most people mind others talking on the phone in public places?"
        }
    },
    question5: {
        question: "Describe your favourite food at a traditional festival or a special event in your country",
        cues: {
            ques1: "What it is",
            ques2: "At which festival/event you eat it",
            ques3: "How it is made",
            ques4: "And explain why you like it"
        },
        followup: {
            followup1: "Is it bad behavior for people to look at their phones during a meal?",
            followup2: "Why do people like to have a big meal at traditional festivals or big events?",
            followup3: "Do most people prefer vegetables bought from the supermarket or grown at home?",
            followup4: "Are there any difficulties when people grow plants in cities?",
            followup5: "What plants can people grow in cities?",
            followup6: "Do people in your country grow plants at home?"
        }
    },
    question6: {
        question: "Describe a party that you enjoyed",
        cues: {
            ques1: "When and where the party was held",
            ques2: "Who attended the party",
            ques3: "What kind of party it was",
            ques4: "What you did in the party",
            ques5: "And explain why you enjoyed this party"
        },
        followup: {
            followup1: "What are the differences between holding a party at home and in a public place?",
            followup2: "What would you do if you were disturbed by a neighbor's party?",
            followup3: "Do you think music and dancing are a must at a party?",
            followup4: "Do you think those who tend to stay at home are less healthy than those who often attend parties?",
            followup5: "Why do some people not like going to parties?",
            followup6: "Why do people like parties?"
        }
    },
    question7: {
        question: "Describe a movie you watched recently",
        cues: {
            ques1: "When and where you watched it",
            ques2: "Who you watched it with",
            ques3: "What it was about",
            ques4: "And explain why you watched this movie"
        },
        followup: {
            followup1: "Why do people prefer to watch movies in the cinema?",
            followup2: "Do you think successful movies should have well-known actors or actresses in leading roles?",
            followup3: "Do you think only well-known directors can create the best movies?",
            followup4: "Do Indian people prefer to watch domestic movies or foreign movies?",
            followup5: "What are the factors that make a successful movie?",
            followup6: "What kinds of movies do you think are successful in your country?"
        }
    },
    question8: {
        question: "Describe an occasion when you helped a family member/relative with something",
        cues: {
            ques1: "When it happened",
            ques2: "Who you helped",
            ques3: "How you helped",
            ques4: "And explain how you felt about the experience"
        },
        followup: {
            followup1: "How do people know that their neighbours might need help?",
            followup2: "Do neighbours often help each other in your country?",
            followup3: "Should parents reward their children when they help others?",
            followup4: "What can children learn by helping others?",
            followup5: "Should parents always help their children with everything?",
            followup6: "How can children help their parents at home?"
        }
    },
    question9: {
        question: "Describe a person who likes to make things by hand",
        cues: {
            ques1: "Who this person is",
            ques2: "What he/she makes",
            ques3: "Why he/she likes to make things by hand",
            ques4: "And explain how you feel about the person"
        },
        followup: {
            followup1: "How does modern technology change the handicraft industry?",
            followup2: "Is it reasonable to charge a high price for handmade things?",
            followup3: "Are there any traditional handicrafts in your hometown?",
            followup4: "Why do many children like to make things by hand?",
            followup5: "What are the benefits for students to learn to make things by hand?",
            followup6: "Are traditional handicrafts important to tourism?"
        }
    },
    question10: {
        question: "Describe a time that you showed something new to others",
        cues: {
            ques1: "When it was",
            ques2: "What it was",
            ques3: "Who you showed it to",
            ques4: "How you showed it",
            ques5: "And explain how you felt about it"
        },
        followup: {
            followup1: "How can young people be motivated to learn new things?",
            followup2: "What skills do you think children should learn before going to school?",
            followup3: "Why are some people unwilling to ask for help from others while studying?",
            followup4: "What are the differences between the things adults learn and the things that children learn?",
            followup5: "What qualities should a good learner have?"
        }
    },
    question11: {
        question: "Describe an online video in which you learned something new",
        cues: {
            ques1: "When and where you watched it",
            ques2: "What it was",
            ques3: "Why you watched it",
            ques4: "And explain what you have learned from it"
        },
        followup: {
            followup1: "Do you think online learning will replace face-to-face learning?",
            followup2: "What are the advantages of online learning?",
            followup3: "Why are so many young people obsessed with short videos?",
            followup4: "Do you think people spend too much time watching short videos? Why?",
            followup5: "Are there many people who watch online videos a lot?",
            followup6: "What kinds of videos are most popular in your country?"
        }
    },
    question12: {
        question: "Describe a person who has strong opinions",
        cues: {
            ques1: "Who this person is",
            ques2: "How you know him/her",
            ques3: "Why you think he/she is a person who has strong opinions",
            ques4: "What kinds of strong opinions this person has",
            ques5: "And explain how you feel about his/her opinions"
        },
        followup: {
            followup1: "Do you think it is good to have strong opinions?",
            followup2: "Do you think we should only say something after thinking it through?",
            followup3: "Which is more important, listening to others or persuading others?",
            followup4: "Are there many young people who have strong opinions in our lives?",
            followup5: "What do old people have strong opinions about?",
            followup6: "What do young people have strong opinions about?"
        }
    },
    question13: {
        question: "Describe a prize you have received recently (e.g. money, something valuable, a medal)",
        cues: {
            ques1: "What it was",
            ques2: "When you received it",
            ques3: "What you did to receive it",
            ques4: "And explain how you felt about it"
        },
        followup: {
            followup1: "Why do some companies encourage employees to compete with each other?",
            followup2: "Why do many companies offer prizes to their customers?",
            followup3: "What criteria should be set for students to win a particular prize?",
            followup4: "What prizes should schools set for students?",
            followup5: "Why should we set prizes for competitions?",
            followup6: "Do you think competitions are all about the prize?"
        }
    },
    question14: {
        question: "Describe a crowded place you have visited",
        cues: {
            ques1: "When you went there",
            ques2: "With whom you went there",
            ques3: "And explain how you felt about being there?"
        },
        followup: {
            followup1: "Do you think it is a good trend to have more big cities?",
            followup2: "Do you think there are some people who enjoy crowded places?",
            followup3: "Why do people go to crowded places?",
            followup4: "Will people use bikes more or less in cities in the future?",
            followup5: "Will there be more or less green space in cities in the future?",
            followup6: "Which cities are overcrowded in your country?"
        }
    },
    question15: {
        question: "Describe a challenge you faced that you thought was rather difficult",
        cues: {
            ques1: "What it was",
            ques2: "When and where you faced it",
            ques3: "Why you thought it was a difficult challenge",
            ques4: "And explain how you felt at the time"
        },
        followup: {
            followup1: "Why do some people enjoy doing extreme sports?",
            followup2: "What challenges would people face when learning new sports?",
            followup3: "What activities do you think would make children feel challenged? Why?",
            followup4: "Do most people choose to face a challenge alone or with others?",
            followup5: "Is it easy for children to overcome a challenge?",
            followup6: "What do children often do when they face a challenge?"
        }
    },
    question16: {
        question: "Describe an ideal and perfect place where you would like to stay (e.g. a house, an apartment)",
        cues: {
            ques1: "Where it would be",
            ques2: "What it would look like",
            ques3: "What special features it would have",
            ques4: "Whether it would be big or small",
            ques5: "And explain why it would be an ideal place for you"
        },
        followup: {
            followup1: "What do you think buildings will be like in the future?",
            followup2: "Why do some people choose to live in the city centre?",
            followup3: "Do different people have different preferences for houses or apartments?",
            followup4: "What would people normally consider when they rent or buy a house or an apartment?",
            followup5: "Why are apartments popular in some places while not in other places?",
            followup6: "What are apartments like in your country?"
        }
    },
    question17: {
        question: "Describe an old friend you had lost touch with and got in contact with again",
        cues: {
            ques1: "Who he/she is",
            ques2: "How you knew each other",
            ques3: "Why you lost contact",
            ques4: "How you got in contact again",
            ques5: "And explain how you felt after getting in contact again"
        },
        followup: {
            followup1: "Why do we have to give up some old friends?",
            followup2: "Why do people need to make new friends?",
            followup3: "Why do old friends lose touch with each other?",
            followup4: "Do you think you are good at maintaining good relationships with others?",
            followup5: "Would having just a few friends limit your horizons?",
            followup6: "Is it better to have a lot of friends than just a few friends?"
        }
    },
    question18: {
        question: "Describe something you did in your study/work that has made you feel confident",
        cues: {
            ques1: "When and where it happened",
            ques2: "What you did",
            ques3: "Why it made you feel confident",
            ques4: "And explain how you felt about it"
        },
        followup: {
            followup1: "Why do so many people lack confidence these days?",
            followup2: "Do you think that children of confident parents are also confident?",
            followup3: "What can teachers do to make studying more interesting?",
            followup4: "How can teachers help their students become more confident by rewarding them for studying?",
            followup5: "What can teachers do to help their students become more confident?",
            followup6: "How can a person become more confident?"
        }
    },
    question19: {
        question: "Describe a time when you received good service in a shop/store",
        cues: {
            ques1: "Where the shop is",
            ques2: "When you went to the shop",
            ques3: "What service you received from the staff",
            ques4: "And explain how you felt about the service"
        },
        followup: {
            followup1: "Can consumption drive economic growth?",
            followup2: "What are the advantages and disadvantages of shopping online?",
            followup3: "What are the differences between online shopping and in-store shopping?",
            followup4: "Why do some people not like shopping in small shops?",
            followup5: "What are the advantages and disadvantages of shopping in small shops?",
            followup6: "Why are shopping malls so popular in India?"
        }
    },
    question20: {
        question: "Describe a place that you would like to learn the culture there (e.g. a library, museum, theatre)",
        cues: {
            ques1: "Where it is",
            ques2: "How you knew this place",
            ques3: "What it is like",
            ques4: "And explain how the place is related to culture"
        },
        followup: {
            followup1: "Does the culture of the past have an impact on today’s culture?",
            followup2: "Which is more important in terms of culture, literature or music?",
            followup3: "How do young people learn about different cultures?",
            followup4: "What kind of culture is popular among young people?",
            followup5: "How is a culture formed?"
        }
    },
    question21: {
        question: "Describe a public park or garden",
        cues: {
            ques1: "Where it is",
            ques2: "What it is like",
            ques3: "How often do you go there",
            ques4: "What you often do there",
            ques5: "Explain how you feel about it"
        },
        followup: {
            followup1: "How can we encourage young people to go to parks more often?",
            followup2: "What tourist attractions are popular in India?",
            followup3: "Why do people like to visit tourist attractions?",
            followup4: "What are the differences between a garden and a natural area?",
            followup5: "What facilities are needed in a park?",
            followup6: "Is it necessary to have public parks in cities?"
        }
    },
    question22: {
        question: "Describe a place in your hometown/city that is different from other places and that you enjoy visiting with your parents/friends",
        cues: {
            ques1: "Where it is",
            ques2: "What it is like",
            ques3: "What you often do there",
            ques4: "Who do you often go there with",
            ques5: "And explain why you think it is different"
        },
        followup: {
            followup1: "What factors attract people to go to visit other places other than their hometown?",
            followup2: "Do you think it is necessary to visit the same place many times?",
            followup3: "What do young people like to do in their leisure time?",
            followup4: "What are the differences between the places young people like to go and the places old people like to go?",
            followup5: "Where do people in your hometown like to go?",
            followup6: "What are the differences between big cities and small cities?"
        }
    },
    question23: {
        question: "Describe a person from whom others like to ask for advice",
        cues: {
            ques1: "Who this person is",
            ques2: "Why people like to ask for his/her advice",
            ques3: "What kind of advice he/she often gives",
            ques4: "And explain how you feel about the person"
        },
        followup: {
            followup1: "Are professional consultancy services expensive in your country?",
            followup2: "Do you think the advice parents give their children is always good?",
            followup3: "Why do some people like to ask others for advice on almost everything?",
            followup4: "Do people often ask for advice from professional people, like a lawyer?",
            followup5: "Who should people ask for advice from on big issues, family members or friends?",
            followup6: "Do you follow the advice of your family members?"
        }
    },
    question24: {
        question: "Describe a place in your city you have been to where you can see wildlife (e.g. animals, birds, insects, plants)",
        cues: {
            ques1: "Where it is",
            ques2: "When you went there",
            ques3: "What wildlife you can see there",
            ques4: "And explain how you feel about it"
        },
        followup: {
            followup1: "Which is the better way to see wildlife, watching documentaries or going into the wild?",
            followup2: "What impacts does only seeing wild animals in zoos have on children's understanding of these animals?",
            followup3: "Are there many wildlife documentaries produced in your country?",
            followup4: "Are wild animals easy to spot in your country?",
            followup5: "Should parents take their children to the zoo to see wild animals?",
            followup6: "Why are most children interested in wild animals?"
        }
    },
    question25: {
        question: "Describe someone else’s room you enjoy spending time in",
        cues: {
            ques1: "When do you visit there",
            ques2: "Whose room it is",
            ques3: "What it is like",
            ques4: "What you can do in it",
            ques5: "And explain why you enjoy spending time there"
        },
        followup: {
            followup1: "Do you think old people will be able to keep up with the pace of technology in 50 years?",
            followup2: "Who likes to stay at home more, young people or old people?",
            followup3: "What are the most enjoyable parts of having a meal together with your family?",
            followup4: "Why do people often take gifts with them when they visit others' homes?",
            followup5: "Do you like to invite your friends to your home?"
        }
    },
    question26: {
        question: "Describe a new development in your country or the area where you live (like shopping centre, park, etc.)",
        cues: {
            ques1: "What and where the development is",
            ques2: "What it was like before",
            ques3: "How long it took to complete it",
            ques4: "How people feel about it",
            ques5: "Explain how it has improved the area you live in"
        },
        followup: {
            followup1: "Is public transportation popular in India?",
            followup2: "What can be done to improve public transport services in your hometown?",
            followup3: "What leisure facilities could be used by people of all age groups?",
            followup4: "Do you think young people in your country like going to the cinema?",
            followup5: "How is the subway system developing in your country?",
            followup6: "What transportation do you use the most?"
        }
    },
    question27: {
        question: "Describe something you did that made you feel proud",
        cues: {
            ques1: "What it was",
            ques2: "How you did it",
            ques3: "What difficulty you had",
            ques4: "How you dealt with the difficulty",
            ques5: "And explain why you felt proud of it"
        },
        followup: {
            followup1: "Which one is more important, personal goals or work goals?",
            followup2: "Have your life goals changed since your childhood?",
            followup3: "Does everyone set goals for themselves?",
            followup4: "What kind of rewards are important at work?",
            followup5: "Do you think material rewards are more important than other rewards at work?",
            followup6: "What makes people proud of themselves?"
        }
    },
    question28: {
        question: "Describe a picture/photograph of you that you like",
        cues: {
            ques1: "Where it was taken/drawn",
            ques2: "When it was taken/drawn",
            ques3: "Who took/drew it",
            ques4: "And explain how you felt about it"
        },
        followup: {
            followup1: "Why do people take photos?",
            followup2: "What do people use to take photos these days, cameras or phones?",
            followup3: "Is it difficult for people to learn how to take good photos?",
            followup4: "How do people keep their photos?",
            followup5: "Do Indian people like to take photos of themselves?",
            followup6: "Why do some people like to delete photos?",
            followup7: "Why do some people like to keep photos?",
            followup8: "Has the way people take photos changed?"
        }
    },
    question29: {
        question: "Describe something that you did with someone/a group of people",
        cues: {
            ques1: "What it was",
            ques2: "Who you did it with",
            ques3: "How long it took you to do this",
            ques4: "And explain why you did it together"
        },
        followup: {
            followup1: "How do you get along with your neighbors?",
            followup2: "How do neighbors help each other?",
            followup3: "Do you think neighbors help each other more often in the countryside than in the city?",
            followup4: "How do children learn to cooperate with each other?",
            followup5: "Do you think parents should teach children how to cooperate with others? How?",
            followup6: "Do you think it's important for children to learn about cooperation?"
        }
    },
    question30: {
        question: "Describe someone (a famous person) that is a role model for young people",
        cues: {
            ques1: "Who he/she is",
            ques2: "How you knew him/her",
            ques3: "What he/she has done",
            ques4: "And explain why he/she can be a role model for young people"
        },
        followup: {
            followup1: "What kinds of people are likely to be the role models for teenagers?",
            followup2: "Is it important for children to have a role model?",
            followup3: "Are there any differences between today's famous people and those of the past?",
            followup4: "What qualities do famous people have?",
            followup5: "What kinds of people are likely to become famous?",
            followup6: "Do people tend to choose the best people as their role model?"
        }
    },

    question31: {
        question: "Describe a subject that you would like to learn in the future",
        cues: {
            ques1: "What it is",
            ques2: "Where and how you want to learn it",
            ques3: "Why you want to learn it",
            ques4: "And explain if it will be difficult to learn it"
        },
        followup: {
            followup1: "What are the differences between online learning and offline learning?",
            followup2: "Do you prefer to study alone or with a group of people?",
            followup3: "What are the advantages and disadvantages of learning in a group?",
            followup4: "What subjects do most young people prefer to learn? Why?",
            followup5: "What is more important when choosing a job, high salary or interest?",
            followup6: "What do you think about face-to-face learning with teachers?"
        }
    },
    question32: {
        question: "Describe a natural place (e.g. parks, mountains)",
        cues: {
            ques1: "Where this place is",
            ques2: "How you knew this place",
            ques3: "What it is like",
            ques4: "And explain why you like to visit it"
        },
        followup: {
            followup1: "What kind of people like to visit natural places?",
            followup2: "What are the differences between a natural place and a city?",
            followup3: "Do you think that going to the park is the only way to get close to nature?",
            followup4: "What can people gain from going to natural places?",
            followup5: "Are there any wild animals in the city?",
            followup6: "Do you think it is a good idea to let animals stay in local parks for people to see?"
        }
    },
    question33: {
        question: "Describe a risk you took that you thought would lead to a terrible result but ended up with a positive result",
        cues: {
            ques1: "When you took the risk",
            ques2: "Why you took the risk",
            ques3: "How it went",
            ques4: "And explain how you felt about it"
        },
        followup: {
            followup1: "How should parents teach their children what a risk is?",
            followup2: "What risks should parents tell their children to avoid?",
            followup3: "Why do some people like to watch risk-taking movies?",
            followup4: "What kinds of sports are dangerous but exciting?",
            followup5: "Why do some people enjoy extreme sports?",
            followup6: "Are action films popular in your country?",
            followup7: "Do you think it is a good thing if a leader likes to take risk?",
            followup8: "Do you think men and women will make a different choice about risk taking?",
            followup9: "What about the young and old?"
        }
    },
    question34: {
        question: "Describe someone you know who made a good decision recently",
        cues: {
            ques1: "Who he/she is",
            ques2: "When he/she made the decision",
            ques3: "What decision he/she made",
            ques4: "Why it was a good decision",
            ques5: "And explain how you felt about the decision"
        },
        followup: {
            followup1: "Should parents make decisions for their children?",
            followup2: "Do you think parents are the best people to make decisions about their children's education?",
            followup3: "At what age do you think children can be allowed to make decisions by themselves?",
            followup4: "Why do most children find it difficult to make decisions?",
            followup5: "Should parents interfere in children's decision-making?",
            followup6: "How should parents help their children make decisions?",
            followup7: "Should children make decisions on their own?",
            followup8: "How should parents help their children make decisions?",
            followup9: "Do parents in your country take decisions for their children?",
            followup10: "Do you think it is advisable listening to others advice when making decisions?"
        }
    },
    question35: {
        question: "Describe a place where you have taken photos more than once",
        cues: {
            ques1: "Where the place is",
            ques2: "When you took the photos",
            ques3: "What special features the photos taken there have",
            ques4: "And explain why you have been there more than once to take photos"
        },
        followup: {
            followup1: "Do you like to take photos?",
            followup2: "Where do people often like to take photos?",
            followup3: "Who would like to take photos more often, young people or older people?",
            followup4: "Would you pay a lot of money to hire a photographer?",
            followup5: "Do you think being a photographer is a good job?",
            followup6: "On what occasions do people need formal photos?"
        }
    },
    question36: {
        question: "Describe a tourist attraction that very few people visit but you think is interesting",
        cues: {
            ques1: "What the place is",
            ques2: "What people can see there",
            ques3: "Why only very few people visit there",
            ques4: "And explain why you think it is interesting"
        },
        followup: {
            followup1: "Why do people visit tourist attractions?",
            followup2: "What makes a tourist attraction famous?",
            followup3: "Do local people like to visit local tourist attractions?",
            followup4: "Do you think tourism causes environmental damage?",
            followup5: "How can people prevent the environmental damage caused by tourism?",
            followup6: "Should all tourist attractions be free to the public?",
            followup7: "What kinds of tourist sites are popular in your country?",
            followup8: "What can governments do to prevent pollution in tourist sites?",
            followup9: "What are the advantages of visiting less known places?",
            followup10: "What are the disadvantages when there are too many tourists in one site?"
        }
    },
    question37: {
        question: "Describe a person who encouraged you to achieve your goal",
        cues: {
            ques1: "Who the person is",
            ques2: "How he/she encouraged you",
            ques3: "What goal you achieved",
            ques4: "And explain how you feel about this person"
        },
        followup: {
            followup1: "Do you think children are more likely to achieve their goals if they are encouraged?",
            followup2: "What should parents do if their children don't want to study?",
            followup3: "Who do you think should set goals for children?",
            followup4: "Who plays a more important role in children's education, parents or teachers?",
            followup5: "Is money the only motivation for people to work hard?",
            followup6: "Which is more important, competition or cooperation?",
            followup7: "Why is it important for teenagers to set goals?",
            followup8: "What will encourage children to learn more?",
            followup9: "Do parents and teachers punish children nowadays?",
            followup10: "Who do you think has greater influence on the goal-setting of children? Teachers or parents?"
        }
    },
    question38: {
        question: "Describe an interesting place you have been to with a friend",
        cues: {
            ques1: "What and where the place is",
            ques2: "Who you went with",
            ques3: "When you went there",
            ques4: "What you did there",
            ques5: "And explain why you think it is interesting"
        },
        followup: {
            followup1: "Why do people need friends?",
            followup2: "How do you communicate with friends?",
            followup3: "Why don't some people like to socialise?",
            followup4: "Can talking with people improve social skills?",
            followup5: "Does technology help people communicate better with others?",
            followup6: "Do you prefer to go out with a group of friends or just with a few close friends?"
        }
    },
    question39: {
        question: "Describe a sport that you only have watched before but have not played yourself",
        cues: {
            ques1: "What it is",
            ques2: "When you watched it",
            ques3: "Where you watched it",
            ques4: "Who you watched it with",
            ques5: "And explain how you felt about it"
        },
        followup: {
            followup1: "What kinds of sports would you like to play in the future?",
            followup2: "Why are there many athletes in advertisements?",
            followup3: "What are the features of people who watch sports games online, such as gender or age?",
            followup4: "What's the most popular sport in your country?",
            followup5: "What kinds of sports are popular now but not popular 50 years ago?",
            followup6: "Do you think there are too many sorts of sports games on TV?",
            followup7: "Do you think sportsmen would use the sports gear promoted in the commercials?",
            followup8: "Many advertisers like to use sports stars endorsements. What do you think are the reasons?",
            followup9: "Do you think that international sports games are for money?",
            followup10: "Why do so many people like to watch sports games?",
            followup11: "What kinds of sports games do young and old people like to watch in your country?"
        }
    },
    question40: {
        question: "Describe a new law you would like to introduce in your country",
        cues: {
            ques1: "What law it is",
            ques2: "What changes this law brings",
            ques3: "Whether this new law will be popular",
            ques4: "How you came up with the new law",
            ques5: "And explain how you feel about this new law"
        },
        followup: {
            followup1: "What rules should students follow at school?",
            followup2: "Do people in your country usually obey the law?",
            followup3: "What kinds of behavior are considered as good behavior?",
            followup4: "Do you think children can learn about the law outside of school?",
            followup5: "What are the benefits for people to obey rules?",
            followup6: "How can parents teach children to obey rules?"
        }
    },
    question41: {
        question: "Describe a special meal that someone made for you",
        cues: {
            ques1: "Who did it",
            ques2: "When and how he/she cooked",
            ques3: "What and why he/she cooked for you",
            ques4: "And explain how you felt about the meal"
        },
        followup: {
            followup1: "Should students learn to cook at school?",
            followup2: "Do you think people's eating habits would change as they get older?",
            followup3: "Do people in your country like to learn to cook from TV programmes?",
            followup4: "What kinds of fast food are popular in India?",
            followup5: "Are there any people who wouldn't eat meat for their whole lives?",
            followup6: "What do you think about vegetarians?"
        }
    },
    question42: {
        question: "Describe a place you have been to where things are expensive",
        cues: {
            ques1: "Where the place is",
            ques2: "What the place is like",
            ques3: "Why you went there",
            ques4: "What you bought there",
            ques5: "And explain why you think things are expensive there"
        },
        followup: {
            followup1: "Why do some people still use cash?",
            followup2: "Will the payment be paperless in the future?",
            followup3: "What do you think of the view that time is as important as money?",
            followup4: "Is it more important to choose a job with a high-salary or with more time off?",
            followup5: "How important is it to have a variety of payment option?",
            followup6: "Why are things more expensive in some places than in others?"
        }
    },
    question43: {
        question: "Describe an indoor or outdoor place where it is easy for you to study",
        cues: {
            ques1: "Where it is",
            ques2: "What it is like",
            ques3: "When you go there",
            ques4: "What you study there",
            ques5: "And explain why you would like to study in this place"
        },
        followup: {
            followup1: "Do you like to learn on your own or with others?",
            followup2: "What's the difference between learning face-to-face with teachers and learning by yourself?",
            followup3: "Do you prefer to study at home or study in other places?",
            followup4: "What are the benefits of gaining work experience while studying?",
            followup5: "Do most people like to study in a noisy place?",
            followup6: "What are the advantages and disadvantages of studying with other people?"
        }
    },
    question44: {
        question: "Describe a person who thinks music is important and enjoys music",
        cues: {
            ques1: "Who this person is",
            ques2: "How you knew him/her",
            ques3: "What music he/she likes",
            ques4: "Why he/she thinks music is important",
            ques5: "And explain how you feel about him/her"
        },
        followup: {
            followup1: "What do you think about playing music for children in class?",
            followup2: "Why do many teachers incorporate music into the classroom?",
            followup3: "Do you think there are any advantages to a shop with music playing?",
            followup4: "Would people's shopping behaviour be affected in a shop with music?",
            followup5: "What do you think would be the effect of background music in a film?",
            followup6: "Why are musical movies so popular?"
        }
    },
    question45: {
        question: "Describe an important plant in your country",
        cues: {
            ques1: "What it is",
            ques2: "Where you see it",
            ques3: "What it looks like",
            ques4: "And explain why it is important"
        },
        followup: {
            followup1: "What are the features of living in the countryside?",
            followup2: "Should schools teach children how to grow plants?",
            followup3: "Why do some people prefer to live in the countryside?",
            followup4: "Have new kinds of plants been grown in your city recently?",
            followup5: "Why do some people like to keep plants at home?",
            followup6: "Are there many trees in your city?"
        }
    },
    question46: {
        question: "Describe a person who likes to buy goods with low prices",
        cues: {
            ques1: "Who this person is",
            ques2: "What this person likes to buy",
            ques3: "Where this person likes to buy things",
            ques4: "And explain why this person likes cheap goods"
        },
        followup: {
            followup1: "What are the differences between shopping in a shopping mall and in a street market?",
            followup2: "Which is more commonly visited in India, shopping malls or street markets?",
            followup3: "Is advertising important?",
            followup4: "What are the disadvantages of shopping in a street market?",
            followup5: "How do you buy cheap products?",
            followup6: "Do you think things are more expensive in big shopping malls?"
        }
    },
    question47: {
        question: "Describe a place (city/town) that is good for people to live in",
        cues: {
            ques1: "Where it is",
            ques2: "How you knew this place",
            ques3: "What it is like",
            ques4: "And explain why it is better than other places to live in"
        },
        followup: {
            followup1: "What are the differences between cities and towns?",
            followup2: "What has happened to towns and villages in recent years in your country?",
            followup3: "What are the differences between big cities and small ones?",
            followup4: "What factors will contribute to whether a place is good to live in or not?",
            followup5: "What are the major changes that have happened in your city?",
            followup6: "How different is life in the countryside to life in the city?"
        }
    },
    question48: {
        question: "Describe a time you taught something new to a younger person",
        cues: {
            ques1: "When it happened",
            ques2: "What you thought",
            ques3: "Who you taught",
            ques4: "Why you taught this person",
            ques5: "How you felt about teaching"
        },
        followup: {
            followup1: "What skills do adults need to have?",
            followup2: "How can people be motivated to learn new things?",
            followup3: "What can children learn from teachers and parents?",
            followup4: "What are the skills that you wanted to learn?",
            followup5: "What skills should children learn before entering school?",
            followup6: "How does a good learner learn something new?"
        }
    },
    question49: {
        question: "Describe an enjoyable journey by public transport",
        cues: {
            ques1: "Where you went",
            ques2: "Who you were with",
            ques3: "What you did",
            ques4: "How you felt about it"
        },
        followup: {
            followup1: "Why do people choose to travel by public transport?",
            followup2: "Why do more and more people like to travel by plane?",
            followup3: "Do you think offering free public transport will solve traffic problems in the city?",
            followup4: "What are the advantages of travelling by public transport?",
            followup5: "What do you think are the cheapest and most expensive means of transport?",
            followup6: "What are the difficulties that commuters face during rush hours?"
        }
    },
    question50: {
        question: "Describe something you own that you want to replace",
        cues: {
            ques1: "What it is",
            ques2: "Where it is",
            ques3: "How you got it",
            ques4: "Explain why you want to replace it"
        },
        followup: {
            followup1: "Does consumption have any impact on the environment?",
            followup2: "Why do people always want to buy new things to replace old ones?",
            followup3: "Why do you think some people replace things more often than others?",
            followup4: "Why do young people change things more often than old people?",
            followup5: "Why do some people like to buy expensive things?",
            followup6: "Why do some people prefer to buy things in the supermarket rather than online?"
        }
    },
    question51: {
        question: "Describe a time when you received money as a gift.",
        cues: {
            ques1: "When it happened?",
            ques2: "Who gave you the money?",
            ques3: "Why he/she gave you the money?",
            ques4: "And explain how you used the money"
        },
        followup: {
            followup1: "What kind of occasions require people to send money as gifts?",
            followup2: "Why do people rarely use cash now?",
            followup3: "When do children begin to comprehend the value of money?",
            followup4: "Is it good and necessary to teach children to save money?",
            followup5: "Should parents reward children with money?",
            followup6: "What are advantages and disadvantages of using credit cards?",
            followup7: "Do you think it’s a good thing that more people are using digital payments?"
        }
    },
    question52: {
        question: "Describe a person who you are happy to know",
        cues: {
            ques1: "Who this person is",
            ques2: "How do you know this person",
            ques3: "What he or she is like",
            ques4: "And explain why you are happy to know him or her"
        },
        followup: {
            followup1: "How can children feel happy?",
            followup2: "What is the difference between adult and children’s happiness?",
            followup3: "Do you think everyone shares a similar definition of happiness?",
            followup4: "Some people say that living in a happy city is boring. What do you think?"
        }
    },
    question53: {
        question: "Describe a piece of good news that you heard about someone you know well.",
        cues: {
            ques1: "What it was?",
            ques2: "When you heard it?",
            ques3: "How you knew it?",
            ques4: "Explain how you felt about it"
        },
        followup: {
            followup1: "Is it good to share something on social media?",
            followup2: "Should the media only publish good news?",
            followup3: "How does social media help people access information?",
            followup4: "What kind of good news do people often share in the community?",
            followup5: "Do most like to share good news with others?",
            followup6: "Do people like to hear good news from their friends?"
        }
    },
    question54: {
        question: "Describe a film character played by an actor or actress whom you admire",
        cues: {
            ques1: "Who this actor/actress is",
            ques2: "When did you watch the film",
            ques3: "What the character was like in this film",
            ques4: "Why you admire this actor/actress"
        },
        followup: {
            followup1: "Are actors or actresses very interested in their work? Why?",
            followup2: "Is being a professional actor or actress a good career?",
            followup3: "What can children learn from acting?",
            followup4: "Why do children like special costumes?",
            followup5: "What are the differences between the actors or actresses who earn much and those who earn little?",
            followup6: "What are the differences between acting in a theatre and that in a film?"
        }
    },
    question55: {
        question: "Describe a complaint that you made, and you were satisfied with the result.",
        cues: {
            ques1: "When it happened",
            ques2: "Who you complained to",
            ques3: "What did you complain about?",
            ques4: "Why were you satisfied with the result?"
        },
        followup: {
            followup1: "When are people more likely to make complaints?",
            followup2: "What do people often complain about?",
            followup3: "Which is better when making a complaint, by talking or by writing?",
            followup4: "How would you react if you received poor service at a restaurant?",
            followup5: "How do people often respond to poor customer service?"
        }
    },
    question56: {
        question: "Describe an activity you enjoyed in your free time when you were young.",
        cues: {
            ques1: "What it was?",
            ques2: "Where you did it?",
            ques3: "Who you did it with?",
            ques4: "Why you enjoyed it?"
        },
        followup: {
            followup1: "Is it important to have a break during work or study?",
            followup2: "What kind of sports do young people like to play nowadays?",
            followup3: "Are there more activities for young people now than 20 years ago?",
            followup4: "Do adults and children have enough time for leisure activities nowadays?",
            followup5: "Can most people achieve work-life balance in India?",
            followup6: "What activities do children and adults do nowadays?"
        }
    },
    question57: {
        question: "Describe something you would like to learn in the future",
        cues: {
            ques1: "What it is",
            ques2: "How would you like to learn it",
            ques3: "Where would you like to learn it",
            ques4: "Why would you like to learn it",
            ques4_explain: "Explain whether it's difficult to learn it"
        },
        followup: {
            followup1: "What’s the most popular thing to learn nowadays?",
            followup2: "At what age should children start making their own decisions? Why?",
            followup3: "What influences young people more when choosing a course, income, or interest?",
            followup4: "Do young people take their parents' advice when choosing a major?",
            followup5: "Besides parents, who else would people take advice from?",
            followup6: "Why do some people prefer to study alone?"
        }
    },
    question58: {
        question: "Describe a public facility( for example a museum or a library ) that been renovated and improved recently",
        cues: {
            ques1: "What the facility is",
            ques2: "When it was renovated and improved",
            ques3: "What has been renovated and improved",
            ques4: "And explain how you feel about it"
        },
        followup: {
            followup1: "What are the benefits of public facilities?",
            followup2: "Why are some public transport methods popular, such as the subway?",
            followup3: "Why are some public transport methods unpopular?",
            followup4: "What king of transport do young and old people prefer?",
            followup5: "Do you think people feel happier when they are in a park or in a coffee shop? Why?",
            followup6: "Is a public park necessary in every area? Why?"
        }
    },
    question59: {
        question: "Describe a daily routine that you enjoy",
        cues: {
            ques1: "What it is",
            ques2: "Where and when you do it",
            ques3: "Who do you do it with (optional)",
            ques4: "Explain why you enjoy it"
        },
        followup: {
            followup1: "Should children have learning routines?",
            followup2: "What are the advantages of children having a routine at school?",
            followup3: "Does having a routine make kids feel more secure at school?",
            followup4: "How do people’s routines differ on weekdays and weekends?",
            followup5: "What daily routines people have at home?",
            followup6: "What are the differences in people’s daily routines now and 15 years ago?"
        }
    },
    question60 : {
        question: "Describe a place you visited where the air was polluted",
        cues: {
            ques1: "Where the place is",
            ques2: "When you visited it",
            ques3: "Why the air was not good",
            ques4: "And explain how you felt about the place"
        },
        followup: {
            followup1: "Is there more pollution than the past?",
            followup2: "Do you think cities are cleaner or dirtier than the countryside areas? Why?",
            followup3: "What can factories and power plants do to reduce pollutants?",
            followup4: "Do you think wind has any effect on pollution? How?",
            followup5: "In what ways can air pollution be reduced effectively?",
            followup6: "Do you think many companies have been forced to reduce pollution?"
        }
    },
    question61 :{
        question: "Describe a historical building you have been to",
        cues: {
            ques1: "Where it is",
            ques2: "What it looks like",
            ques3: "What it is used for now",
            ques4: "What you learned there",
            ques5: "And how you felt about this historical building"
        },
        followup: {
            followup1: "Why do people visit historical places?",
            followup2: "Do Indian people like visiting historical places?",
            followup3: "Should government fund protection of historical places?",
            followup4: "Is it necessary to protect historical buildings?"
        }
    },
    question62 : {
        question: "Describe a person you met at a party and enjoyed a conversation with.",
        cues: {
            ques1: "Who was the person?",
            ques2: "What topics did you discuss?",
            ques3: "How did you feel?"
        },
        followup: {
            followup1: "Under what circumstances do you meet new people, and when do you communicate with people you don't know?",
            followup2: "Where do people go to meet new people?",
            followup3: "What topics do you discuss with new acquaintances?",
            followup4: "What topics are not suitable for discussion?",
            followup5: "What's the difference between chatting with friends and new people?",
            followup6: "How do people start a conversation?",
            followup7: "Is it difficult for Indian people to talk to foreigners?",
            followup8: "Why are some people unwilling to have conversations with strangers?"
        }
    },
    question63 : {
        question: "Describe your favourite place in your house where you can relax",
        cues: {
            ques1: "Where it is",
            ques2: "What it is like",
            ques3: "What you enjoy doing there",
            ques4: "And explain why you feel relaxed at this place"
        },
        followup: {
            followup1: "Why is it difficult for some people to relax?",
            followup2: "What are the benefits of doing exercise?",
            followup3: "Do people in your country exercise after work?",
            followup4: "What is the place where people spend most of their time at home?",
            followup5: "Do you think there should be classes for training young people and children how to relax?",
            followup6: "Which is more important, mental relaxation or physical relaxation?"
        }
    },
    question64 :{
        question: "Describe a time when you missed or were late for an important meeting/event",
        cues: {
            ques1: "When it happened",
            ques2: "What happened",
            ques3: "Why you missed/were late for it",
            ques4: "And explain how you felt about this experience"
        },
        followup: {
            followup1: "Are you a punctual person?",
            followup2: "Do you think it is important to be on time?",
            followup3: "Do you always avoid being late?",
            followup4: "Why are people often late for meetings or appointments?",
            followup5: "Are people in your country often late for meetings?",
            followup6: "Do you think people are born with time management skills or they can develop them?"
        }
    },
    question65 : {
        question: "Describe an occasion you wore your favourite clothes",
        cues: {
            ques1: "When it was",
            ques2: "What you wore",
            ques3: "Why you wore it",
            ques4: "And how you felt about it"
        },
        followup: {
            followup1: "Do you think people should dress up formally for the workplace?",
            followup2: "Why do some people like to wear traditional clothes?",
            followup3: "Will traditional clothes disappear in the future?",
            followup4: "Do old people change their style of dressing?",
            followup5: "Who would wear formal clothes more often, young people or old people?",
            followup6: "Why do some people like to wear expensive clothes?"
        }
    },
    question66: {
        question: "Describe a person you know who likes to talk a lot.",
        cues: {
            ques1: "Who this person is",
            ques2: "How do you know him/her",
            ques3: "What he/she likes to talk about",
            ques4: "And explain how you feel about this person"
        },
        followup: {
            followup1: "What communication skills does a talkative person have?",
            followup2: "Is it good to be talkative?",
            followup3: "How should parents encourage their children to talk more?",
            followup4: "How should people encourage children to express themselves when being asked questions that they are afraid to answer?",
            followup5: "On what occasion do you think a child should talk less than usual?",
            followup6: "What jobs need employees to be talkative?",
            followup7: "What communication skills are important?",
            followup8: "Are you talkative?",
            followup9: "Are most Indian people talkative?",
            followup10: "What jobs need employees to be talkative?",
            followup11: "Should children be encouraged to talk more?"
        }
    },
    question67 : {
        question: "Describe a place where you would like to go to relax.",
        cues: {
            ques1: "Where it is",
            ques2: "When you would like to go there",
            ques3: "What you would like to do there",
            ques4: "And explain why you would like to go to this place"
        },
        followup: {
            followup1: "Do people have enough places to relax in your country?",
            followup2: "What do people usually do when they are relaxed?",
            followup3: "Is physical activity good for relaxation?",
            followup4: "Do you think that spending time in front of a screen helps people relax?",
            followup5: "Do people have to spend a lot of money to relax?",
            followup6: "Do people nowadays have more ways to relax than in the past?",
            followup7: "How do students relax themselves?",
            followup8: "What activities do employers organise to help employees relax?",
            followup9: "Do people now have more ways to relax than in the past?",
            followup10: "Do you think natural sceneries are more helpful than indoor activities?",
            followup11: "Do you like to visit movie theatres?",
            followup12: "Where do Indian people like to go on weekends?",
            followup13: "What do old people do to relax?",
            followup14: "What is the importance of relaxation?",
            followup15: "What are the ways people relax themselves?"
        }
    },
     question68 : {
        question: "Describe a long-term goal you would like to achieve",
        cues: {
            ques1: "What the goal is",
            ques2: "How long have you had this goal",
            ques3: "How you would achieve it",
            ques4: "And explain why you set this goal"
        },
        followup: {
            followup1: "What goals should a society have?",
            followup2: "Do people need to have goals?",
            followup3: "What goals do people at your age have?",
            followup4: "Is it necessary to give advice to children?",
            followup5: "What goals do young people usually have?",
            followup6: "What should people do to achieve their goals?",
            followup7: "Should parents set goals for children?",
            followup8: "When do young children start to set goals for themselves?",
            followup9: "What kinds of goals are not realistic?",
            followup10: "Why do people set goals?",
            followup11: "What would you feel if you couldn’t achieve your goals?"
        }
    },
    question69: {
        question: "Describe a uniform you wear (at your school or company) or you wore at school",
        cues: {
            ques1: "When you wear it?",
            ques2: "Who bought it for you?",
            ques3: "What does it look like?",
            ques4: "How you feel about it?"
        },
        followup: {
            followup1: "Why should students wear uniforms?",
            followup2: "Why should people at work wear uniforms?",
            followup3: "What are the advantages and disadvantages of wearing a uniform?",
            followup4: "Can people tell a person's personality by his or her clothes?",
            followup5: "On what occasion should people wear uniforms?",
            followup6: "Should companies ask for employees' opinions about the design of uniforms?"
        }
    },
    question70 : {
        question: "Describe a sportsperson/athlete that you admire",
        cues: {
            ques1: "Who is the person?",
            ques2: "What he is like in real life",
            ques3: "What is his/her achievement",
            ques4: "Why do you admire him?"
        },
        followup: {
            followup1: "Should students have physical education and do sports at school?",
            followup2: "What qualities should an athlete have?",
            followup3: "Is talent important in sports?",
            followup4: "Is it easy to identify children’s talents?",
            followup5: "What is the most popular sport in your country?",
            followup6: "Why are there so few top athletes?",
            followup7: "Do teenagers like exercising in your country?",
            followup8: "Do you think physical education is necessary? Why?",
            followup9: "How do you think physical education classes affect children's development?",
            followup10: "What kind of exercises do Indian people like?"
        }
    },
    question71 : {
        question: "Describe a film you watched or Describe a film that impressed you a lot.",
        cues: {
            ques1: "When and where you watched it?",
            ques2: "What was the movie about?",
            ques3: "Why you chose to watch it?",
            ques4: "How you felt about it? And explain why it made you think a lot?"
        },
        followup: {
            followup1: "Do most people prefer to watch movies at home or in a cinema? Why?",
            followup2: "What are the advantages of going to the cinema with friends?",
            followup3: "Is going to the cinema still popular?",
            followup4: "What kind of movies do you think need to be seen in the cinema to be fully appreciated?",
            followup5: "What can cinemas do to attract more audiences?",
            followup6: "Do you think people can learn new cultures through movies?",
            followup7: "What kinds of films are popular in India?",
            followup8: "Do different age groups like the same kinds of films?",
            followup9: "What kinds of films do young people particularly like?",
            followup10: "Do fewer people choose to watch movies in cinemas than people did in the past?",
            followup11: "What are other ways to watch movies now?",
            followup12: "What's the difference between American movies and movies from your country?"
        }
    },
    question72: {
        question: "Describe a park or a garden in your city",
        cues: {
            ques1: "When you often go there",
            ques2: "Where it is",
            ques3: "Who you often go there with",
            ques4: "What it is like",
            ques5: "And explain why you like to visit it"
        },
        followup: {
            followup1: "Do young people like to go to parks?",
            followup2: "What do old people like to do in parks?",
            followup3: "What benefits can parks bring to a city?",
            followup4: "What are the benefits of going to the park for young people and old people?",
            followup5: "Why do some people like planting flowers?",
            followup6: "Would you say people should help maintain public parks and gardens?"
        }
    },
    question73 : {
        question: "Describe a beautiful city",
        cues: {
            ques1: "Where the city is",
            ques2: "How you knew the city",
            ques3: "What buildings the city has",
            ques4: "What it is famous for",
            ques5: "And explain why you think this city is beautiful"
        },
        followup: {
            followup1: "What are the differences between modern towns and modern cities?",
            followup2: "How can people preserve historical buildings?",
            followup3: "Why do some people like to visit historical places?",
            followup4: "Why do people go to modern cities?",
            followup5: "What are the problems caused in maintaining historical cities?",
            followup6: "Do you think having too many tourists is a positive thing for historical attractions?",
            followup7: "What can we do to stop visitors from damaging historical places?",
            followup8: "Do you think too many tourists is a positive thing for historical attractions?"
        }
    },
    question74: {
        question: "Describe a difficult task that you completed at work/study that you felt proud of",
        cues: {
            ques1: "What the task was",
            ques2: "How you completed it",
            ques3: "Why the task was difficult",
            ques4: "Why you were proud of the completion of the task"
        },
        followup: {
            followup1: "What are the things that make people feel proud?",
            followup2: "Do people often feel proud of themselves when they complete a difficult task?",
            followup3: "What challenges do young people face today?",
            followup4: "How do young people handle difficult or challenging tasks?",
            followup5: "What kinds of rewards do people receive from work?",
            followup6: "What are the most difficult jobs that people do?"
        }
    },
    question75 : {
        question: "Describe a time that something changed your life in good ways",
        cues: {
            ques1: "When and where it happened",
            ques2: "What happened",
            ques3: "How you felt about it",
            ques4: "And explain how it changed your life in good ways"
        },
        followup: {
            followup1: "Is your country changing rapidly?",
            followup2: "What can smart phones do these days?",
            followup3: "Since most people do work on their computers, why do they still need to go to the office?",
            followup4: "Do you think people's work in the future will be heavily affected by technology?",
            followup5: "Compare the pace of technological progress in the past and in the present?"
        }
    },
    question76: {
        question: "Describe an interesting person that you have not met in person and would like to know more about",
        cues: {
            ques1: "Who this person is",
            ques2: "How you knew him/her",
            ques3: "What interesting things he/she has done",
            ques4: "And explain what you would like to know more about him/her"
        },
        followup: {
            followup1: "Are there any differences in the relationship between you and your friends and between you and other people?",
            followup2: "Do people feel lonely in crowded cities?",
            followup3: "Where and how can people get to know new people?",
            followup4: "Can clothing tell and reveal a person's personality?",
            followup5: "Why do individuals from the same family have different personalities?",
            followup6: "How does society influence a person's personality?"
        }
    },
    question77: {
        question: "Describe a foreigner who speaks your native language (Hindi) very well",
        cues: {
            ques1: "Who this person is",
            ques2: "Where he/she is from",
            ques3: "How he/she learns Hindi",
            ques4: "And explain why he can speak Hindi well"
        },
        followup: {
            followup1: "What foreign languages do Indian children learn?",
            followup2: "Why do Indian children learn English?",
            followup3: "Why are so many people learning English?",
            followup4: "How can you help children learn English?",
            followup5: "Do you think the way people learn English today is the same as in the past?",
            followup6: "What are the benefits of the Internet for people's learning?"
        }
    },
    question78 : {
        question: "Describe a person who always has interesting ideas or opinions",
        cues: {
            ques1: "Who this person is",
            ques2: "What this person does",
            ques3: "How you knew him/her",
            ques4: "And explain why you think his/her ideas or opinions are interesting"
        },
        followup: {
            followup1: "When do you think children start to have their own opinions?",
            followup2: "Are children's opinions influenced by their parents?",
            followup3: "Who are smart children likely to be influenced by?",
            followup4: "How do inventors or philosophers come up with new ideas?",
            followup5: "Are there only old ideas from books or previous writers?",
            followup6: "What kind of people have lots of great ideas in your country?",
            followup7: "When do children begin to have their own ideas?",
            followup8: "Why are there more and more differences between children and their parents?",
            followup9: "What are the advantages and disadvantages of setting rules for children?",
            followup10: "Is there someone with good ideas that has changed many people’s lives?"
        }
    },
    question79 : {
        question: "Describe a successful businessperson you know",
        cues: {
            ques1: "Who this person is",
            ques2: "How you knew him/her",
            ques3: "What business he/she does",
            ques4: "And explain why he/she is successful"
        },
        followup: {
            followup1: "What factors lead to success?",
            followup2: "What do people need to sacrifice for success?",
            followup3: "Which is more likely to be successful, family businesses or large corporations?",
            followup4: "Is it easy for a business to be successful without affecting the environment?",
            followup5: "Can you provide some examples of family businesses in your country?",
            followup6: "What qualities should be considered when recruiting employees?",
            followup7: "What kinds of businesses are popular in your country?",
            followup8: "If you had the opportunity, what kind of business would you like to do?",
            followup9: "What age do people want to retire in your country?",
            followup10: "Would young people in your country like to open up their own business or find a job?",
            followup11: "Would you want people to do online business or run a company in real?"
        }
    },
    question80 :{
        question: "Describe an area of science (biology, robotics, etc.) that you are interested in and would like to learn more about",
        cues: {
            ques1: "Which area it is",
            ques2: "When and where you came to know this area",
            ques3: "How you get information about this area",
            ques4: "And explain why you are interested in this area"
        },
        followup: {
            followup1: "Why do some children not like learning science at school?",
            followup2: "Is it important to study science at school?",
            followup3: "Which science subject is the most important for children to learn?",
            followup4: "Should people continue to study science after graduating from school?",
            followup5: "How do you get to know about scientific news?",
            followup6: "Should scientists explain the research process to the public?",
            followup7: "What’s the best invention in the past hundred years?",
            followup8: "What’s the influence of science on human life?",
            followup9: "What can individuals do for scientific research?",
            followup10: "What influence can international cooperation in science bring about?"
        }
    },
    question81 : {
        question: "Describe a person you would like to study or work with",
        cues: {
            ques1: "Who is that person?",
            ques2: "Why would you like to study with him/her?",
            ques3: "What will you study?"
        },
        followup: {
            followup1: "What kind of people do you like to study or work with?",
            followup2: "Do you think managers can be friends with their subordinates?",
            followup3: "Which one is more important for you at work, development in work-related skills or the recognition from your supervisor?",
            followup4: "Should children be allowed to choose whom they want to sit with or should it be decided by the teacher? Should children be allowed to choose their classmates?",
            followup5: "Should children be involved in management activities of the school?",
            followup6: "How should one behave in the office to get along well with others?",
            followup7: "Is it important for children in school to get along well with others?",
            followup8: "What kind of people are popular at work?"
        }
    },
    question82 : {
        question: "Describe a time when you were late",
        cues: {
            ques1: "When it was",
            ques2: "Why you were late",
            ques3: "How you felt about being late"
        },
        followup: {
            followup1: "Are you ever late for anything? / Are you a punctual person?",
            followup2: "What excuses do you use when you are late?",
            followup3: "Why are people often late for appointments or meetings?",
            followup4: "Do you think people are born with time management skills or they can be taught?",
            followup5: "How would you teach your children time management?",
            followup6: "Do old people and young people manage time in a similar way?"
        }
    },
    question83: {
        question: "Describe an advertisement that you don’t like",
        cues: {
            ques1: "When did you see it?",
            ques2: "What is it about?",
            ques3: "Where you saw it/how you came to know about it?",
            ques4: "Why you didn’t like it"
        },
        followup: {
            followup1: "Why do some people hate advertisements?",
            followup2: "Do people usually buy stuff after watching advertisements?",
            followup3: "Is music useful in advertising?",
            followup4: "What are advantages of TV advertisements? How about internet advertisements?",
            followup5: "Where usually do we see adverts?",
            followup6: "Are there any advertisements at school?",
            followup7: "Are there some inappropriate adverts, like that of a condom?",
            followup8: "Why does the government allow such ads?",
            followup9: "Do you think it is bad for children?",
            followup10: "Do parents complain about it?",
            followup11: "What are the most advertised products in your country?",
            followup12: "Which one is often more effective, newspaper advertising or online advertising?",
            followup13: "What are the benefits of Advertisements?",
            followup14: "What do you think of celebrity endorsements in advertising?",
            followup15: "Does advertising encourage us to buy things we don’t need?",
            followup16: "What role does social media play in advertising?"
        }
    },
    question84 : {
        question: "Describe a person who inspired you to do something interesting",
        cues: {
            ques1: "Who is this person",
            ques2: "What they inspired you to do",
            ques3: "How they inspired you",
            ques4: "How you feel"
        },
        followup: {
            followup1: "Who motivates children the most?",
            followup2: "How can teachers motivate children?",
            followup3: "How is it different from teaching kids?",
            followup4: "What should teenagers have?"
        }
    },
    question85: {
        question: "Describe a website which helped you to do something / website you visit often/ use regularly",
        cues: {
            ques1: "Which site is it?",
            ques2: "How did you know about it?",
            ques3: "How it helped?",
            ques4: "Why do you visit it often?"
        },
        followup: {
            followup1: "What are the most popular and least popular apps in your country?",
            followup2: "What is the difference between the internet and the TV?",
            followup3: "Why do some people like to read news on the internet instead of getting it from TV?",
            followup4: "Are libraries still beneficial? Why or why not?",
            followup5: "What kinds of people still like to go to the library to study?",
            followup6: "What is the difference between the old and young in regards to internet use?",
            followup7: "Can the internet help children in their study?",
            followup8: "Will downloading music or movies for free cause a problem?",
            followup9: "Some people say that different age groups have different tastes on the internet content. What do you think?",
            followup10: "What influence can (or does) the internet have on children?",
            followup11: "What kind of people don't use the internet and what are the disadvantages that those people suffer because they don't use the internet?"
        }
    },
    question86 : {
        question: "Describe a piece of good news you heard from others",
        cues: {
            ques1: "What it was",
            ques2: "When you received this news",
            ques3: "How you received this news",
            ques4: "Why you feel it was a good news"
        },
        followup: {
            followup1: "How do people share good news?",
            followup2: "Why do people share news on social media and is it good to share news on social media?",
            followup3: "How does modern technology affect the delivery of information?",
            followup4: "Should the media only publish good news?",
            followup5: "When do people share good news?",
            followup6: "What kinds of good news have you received before?",
            followup7: "What kind of good news do people like to hear?",
            followup8: "Do most people like to share good news?",
            followup9: "Do people like to hear good news from their friends?"
        }
    },
    question87 : {
        question: "Describe a place where there was a lot of noise / Describe a noisy place you have been to",
        cues: {
            ques1: "When this happened?",
            ques2: "Where it was?",
            ques3: "Why there was a lot of noise",
            ques4: "Explain what you did when you heard the noise"
        },
        followup: {
            followup1: "Is noise pollution serious in India?",
            followup2: "Do you like to live in a noisy place?",
            followup3: "Do you like to go to noisy places?",
            followup4: "Where can you hear a loud noise?",
            followup5: "Do you think that there is more noise in people’s lives today than in the past?",
            followup6: "Do you think that cities will become noisier in the future?",
            followup7: "What is the noise in life?",
            followup8: "How is the noise level in your city?",
            followup9: "Where does noise in urban areas come from?",
            followup10: "Do you think it is important to be alone sometimes?",
            followup11: "What is the importance of belonging to a certain group?",
            followup12: "What are problems you could have if you go out together in a big group?",
            followup13: "Why do people like going to noisy places, like a restaurant or pub, even though they know these places are noisy?",
            followup14: "Shall we encourage children to make noises?",
            followup15: "Do you think it is good for children to make noise?",
            followup16: "What kind of noises are there in our life?",
            followup17: "Which area is exposed to noise more, the city or the countryside?",
            followup18: "How would people usually respond to noises in your country?",
            followup19: "How can people consider other’s feelings when chatting in public?"
        }
    },
    question88: {
        question: "Describe something you taught to your friend/relative",
        cues: {
            ques1: "What you taught him/her?",
            ques2: "When it was?",
            ques3: "How long it was for?",
            ques4: "And explain how you felt about it"
        },
        followup: {
            followup1: "What are things that young people can teach old people to do?",
            followup2: "What skills can young people teach the old besides technology?",
            followup3: "Why older people have problems in learning new things?",
            followup4: "Do you think showing is a better way than telling during education?",
            followup5: "Do you think constant training is important for people to study something?",
            followup6: "How can the young teach the old?"
        }
    },
    question89: {
        question: "Describe your experience when you changed your school/college or Describe an experience about moving to a new school or house/ Describe your first day at school",
        cues: {
            ques1: "Why did you change your school/college?",
            ques2: "When was it?",
            ques3: "Was that helpful?",
            ques4: "What were the consequences after that?"
        },
        followup: {
            followup1: "Are children better at solving problems than adults?",
            followup2: "If people move frequently, is it better to stay in one house all the time?",
            followup3: "What are the pros and cons of living in a high-rise building?",
            followup4: "What are the pros and cons of living in an old and new neighborhood?",
            followup5: "How do parents prepare their kids to go to school on the first day?",
            followup6: "How do children socialise with each other?",
            followup7: "Is socialisation important for children?",
            followup8: "What are the benefits of changing schools?",
            followup9: "What are the reasons for job change?"
        }
    },
    question90 : {
        question: "Describe a place/country in which you would like to live/work for a short period of time",
        cues: {
            ques1: "Where you would like to live/work",
            ques2: "What you want to do there",
            ques3: "When would you like to go there",
            ques4: "Why you want to live there"
        },
        followup: {
            followup1: "What kinds of jobs are easy to get in a foreign country?",
            followup2: "Should young adults work abroad?",
            followup3: "If they don’t work abroad, would it be helpful for them to travel in a foreign country?",
            followup4: "Do Indian parents encourage their children to work abroad?",
            followup5: "If you had an opportunity to live abroad, which country would you like to settle down in?",
            followup6: "Would you like to live in a developed city with a high salary but with polluted air?",
            followup7: "Would you like to live alone or share a room with others?",
            followup8: "What are the advantages and disadvantages of living alone?",
            followup9: "Do people prefer planned travel?",
            followup10: "Why are places with historical attractions more active in developing tourism?",
            followup11: "Why do you think people usually travel?",
            followup12: "Why do you experience more noise when living in a tourist city?",
            followup13: "Do you think tourists can experience bad things in other countries?"
        }
    },
    question91 : {
        question: "Talk about an interesting old person you met recently",
        cues: {
            ques1: "Who is this person?",
            ques2: "How you met him? How you know him",
            ques3: "What you do with this person (optional)",
            ques4: "Why you found him interesting?"
        },
        followup: {
            followup1: "Do you think old people and young people can share the same interest?",
            followup2: "What skills can the old teach the young?",
            followup3: "What skills can the young teach the old?",
            followup4: "Do you think the old people should live with their family?",
            followup5: "Do you think the old and the young can have the same interests?",
            followup6: "Do you think people are more selfish or self-centred than in the past?"
        }
    },
    question92 :{
        question: "Describe a piece of technology that you find difficult to use",
        cues: {
            ques1: "When did you get it?",
            ques2: "What did you get it for?",
            ques3: "How often do you use it?",
            ques4: "How do you feel about it?"
        },
        followup: {
            followup1: "What technology products or technologies are used by people now?",
            followup2: "Why do large companies often produce new products?",
            followup3: "Why are people so enthusiastic about buying newer iPhone models, even when nothing much changes?",
            followup4: "What changes has the development in technology brought in our life?",
            followup5: "Has technology affected the way we study? How?"
        }
    },
    question93 : {
        question: "Describe a historical period you would like to know more about",
        cues: {
            ques1: "What period do you want to know about",
            ques2: "Why do you want to know about it",
            ques3: "How do you think you can know about it"
        },
        followup: {
            followup1: "Do you think it is important to know about history? Should everyone learn about history?",
            followup2: "How can children learn about history?",
            followup3: "What is the difference between learning about history from books and from videos?",
            followup4: "Do you think it is difficult to protect and preserve historic buildings?",
            followup5: "Who should be responsible for protecting historic buildings?",
            followup6: "Who should pay for the preservation of historical buildings?",
            followup7: "How do you think famous historical figures can serve as models for young people today?",
            followup8: "Do people in your country like to visit museums?",
            followup9: "Who do you think likes to go to museums more – children or adults?",
            followup10: "Do you think museums should be free of cost to enter?",
            followup11: "Do you think local people and tourists should pay the same amount to enter a museum?",
            followup12: "How do you think the museums of the future might be different from the museums of today?",
            followup13: "How do you think the museums of the future might portray the 21st century?"
        }
    },
    question94: {
        question: "Describe an unusual meal that you had.",
        cues: {
            ques1: "When did you eat it?",
            ques2: "Where did you eat it?",
            ques3: "With whom you had the meal?",
            ques4: "Why do you think it was unusual?"
        },
        followup: {
            followup1: "Do you think having dinner at home is a good idea?",
            followup2: "Do young people like to spend time with their families or friends?",
            followup3: "What do you think are the benefits of having dinner together?",
            followup4: "Do you think people are less willing to cook meals by themselves these days, compared to the past?",
            followup5: "What are the advantages and disadvantages of eating in restaurants?",
            followup6: "What fast foods are there in your country?",
            followup7: "Do people eat fast food at home?",
            followup8: "Why do some people choose to eat out instead of ordering takeout?",
            followup9: "Do people in your country socialize in restaurants? Why?",
            followup10: "Do people in your country value food culture?"
        }
    },
    question95 : {
        question: "Describe an achievement/success you are proud of",
        cues: {
            ques1: "What you did",
            ques2: "When did you do it",
            ques3: "How did you feel about it",
            ques4: "Why did that achievement make you proud"
        },
        followup: {
            followup1: "How to measure a person’s success?",
            followup2: "Do you think the way people gain success has changed?",
            followup3: "How do you define success?",
            followup4: "How to reward successful people?",
            followup5: "What’s the most difficult thing you have ever done?",
            followup6: "What qualities does a person need to have, to be successful?",
            followup7: "Do you feel terrible when you fail to do something?",
            followup8: "Is failure a necessary thing in people’s life?",
            followup9: "Is it important for young people to have some achievement?",
            followup10: "Which one is more important, personal goals or work goals?",
            followup11: "Have your life goals changed since your childhood?",
            followup12: "Does everyone set goals for themselves?",
            followup13: "Do you think material rewards are more important than other rewards at work?",
            followup14: "What makes people feel proud of themselves?"
        }
    },
    question96 :{
        question: "Talk about a thing you complained about something (but finally got a good result)",
        cues: {
          ques1: "What did you complain about",
          ques2: "Who did you complain to",
          ques3: "When it happened",
          ques4: "What was the result and why you were satisfied with the result?"
        },
        followup: {
          followup1: "When do people usually complain?",
          followup2: "Can complaining help solve problems?",
          followup3: "What other measures you should take to solve problems rather than complain",
          followup4: "What kind of people complain?",
          followup5: "Do you usually get angry?",
          followup6: "Do you think customers’ complaints will improve product or services?",
          followup7: "Is it necessary for companies to set up customer service?",
          followup8: "Are there any disadvantages to set up customer service?",
          followup9: "Would you buy things in the shops in which you have made complaints before?",
          followup10: "What product or services do people in your country like to complain about?",
          followup11: "Do you think it is better to complain, by talking or in writing?",
          followup12: "Who are more likely to complain, young people or old people?"
        }
    },
    question97 : {
        question: "Describe when someone gave you something you really wanted /a gift your received",
        cues: {
          ques1: "Who gave it to you",
          ques2: "What was the thing",
          ques3: "When you received it",
          ques4: "Why you needed it?",
          ques5: "How you felt about it"
        },
        followup: {
          followup1: "What is the relationship between shopping and economy of your country?",
          followup2: "What are the things young people like to buy?",
          followup3: "How your friends influence your shopping choice?",
          followup4: "Is consumption important to a country?",
          followup5: "What should parents do when their children ask for things their friends have?",
          followup6: "Why do people buy things that are not necessary?",
          followup7: "Should employees have their own goals?",
          followup8: "How should bosses reward employees?",
          followup9: "What kinds of gifts do young people like to receive as gifts?",
          followup10: "How should children spend their allowance?",
          followup11: "Why do people like shopping more than in the past?",
          followup12: "Do you think shopping is a good for a country’s economy?"
        }
      },
      question98 : {
        question: "Describe a development in your country like shopping centre, park etcetera",
        cues: {
          ques1: "What is the development",
          ques2: "When you heard about it",
          ques3: "How did it influence you?"
        },
        followup: {
          followup1: "What transportation do you use the most?",
          followup2: "Is public transportation popular in India?",
          followup3: "What can be improved in public transport services?",
          followup4: "What leisure facilities can be used by people of all ages?",
          followup5: "Do you think young people in your country like to visit cinemas?",
          followup6: "How is the subway system developing in your country?"
        }
      }

};


function Part23() {
    const [question, setQuestion] = useState("");
    const [questionNo, setQuestionNo] = useState(1);
    const [view, setView] = useState("cuecard");
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [cueQuestionsArray, setCueQuestionsArray] = useState([]);
    const [followupQuestionsArray, setFollowupQuestionsArray] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [animationClass, setAnimationClass] = useState("");

    const [showQuestions, setShowQuestions] = useState(() => {
        const storedQuestionsMode = localStorage.getItem("showQuestions");
        return storedQuestionsMode ? JSON.parse(storedQuestionsMode) : false;
    });

    const [randomMode, setRandomMode] = useState(() => {
        const storedMode = localStorage.getItem("randomMode");
        return storedMode ? JSON.parse(storedMode) : false;
    });

    const allKeys = Object.keys(cuecards);
    const updateQuestion = (index) => {

        setAnimationClass("fade-out");
        setTimeout(() => {
            let questionData = cuecards[allKeys[index]];
            setQuestionNo(index + 1);
            setQuestion(questionData.question);
            setCueQuestionsArray(Object.values(questionData.cues));
            setFollowupQuestionsArray(Object.values(questionData.followup));
            setAnimationClass("fade-in");
        }, 100);
    };

    const randomQuestionGenerator = () => {
        if (randomMode) {
            const randomNumber = Math.floor(Math.random() * allKeys.length);
            updateQuestion(randomNumber);
        } else {
            updateQuestion(0);
        }
    };

    const handlePrevious = () => {
        if (questionNo > 1) {
            updateQuestion(questionNo - 2);
        }
    };

    const handleNext = () => {
        if (questionNo < allKeys.length) {
            updateQuestion(questionNo);
        }
    };

    const handleSearch = () => {
        const searchIndex = parseInt(searchQuery) - 1;
        if (!isNaN(searchIndex) && searchIndex >= 0 && searchIndex < allKeys.length) {
            updateQuestion(searchIndex);
        } else {
            alert("Please select from 1 to 98.");
        }
    };

    const speakText = (text) => {
        const modifiedText = text.replace(/\//g, " or ");
        const utterance = new SpeechSynthesisUtterance(modifiedText);
        utterance.lang = "en-US";
        utterance.pitch = 1;
        utterance.rate = 1;
        setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
    };

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const showAlert = () => {
        alert("Questions are from Makkar Sep-Dec 2024 Final Version.\n\nSend your valuable feedback or suggestions to\ncontact.utsavbpatel@gmail.com\n\nIELTS Question Asker - A Project By Utsav B. Patel");
    };


    const handleRandomModeToggle = () => {
        setRandomMode((prevState) => !prevState);
    };

    const handleShowQuestionsModeToggle = () => {
        setShowQuestions((prevState) => !prevState);
    };

    const part1Clicked = () => {
        setView("cuecard");
        setActive1(true);
        setActive2(false);
    };

    const part2Clicked = () => {
        setView("followup");
        setActive2(true);
        setActive1(false);
    };

    useEffect(() => {
        randomQuestionGenerator();
    }, []);

    useEffect(() => {
        localStorage.setItem("randomMode", JSON.stringify(randomMode));
    }, [randomMode]);

    useEffect(() => {
        localStorage.setItem("showQuestions", JSON.stringify(showQuestions));
    }, [showQuestions]);


    return (
        <div className="part-main-container">
            <div className="parts-button-container">
                <div className="parts-button-box">
                    <button className={`${active1 ? "button-active1" : ""}`} onClick={part1Clicked}>
                        Cue Card - {questionNo}
                    </button>
                    <button className={`${active2 ? "button-active2" : ""}`} onClick={part2Clicked}>
                        Followup - {questionNo}
                    </button>
                </div>
            </div>

            <div className="box">
                <div className="clickable-button-container">
                    <div className="controls">
                        <div className="controls-box">
                            <input
                                type="checkbox"
                                name="random-mode"
                                checked={randomMode}
                                onChange={handleRandomModeToggle}
                                className="checkBox"

                            />
                            <p>Random</p>
                        </div>
                    </div>
                    {!randomMode && (
                        <div className="search-container">
                            <input
                                type="number"
                                placeholder="Enter question number"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="searchBox"
                            />
                            <button onClick={handleSearch}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    )}
                </div>

                <div className="card-container">
                    {view === "cuecard" && (
                        <div className={`question-container ${animationClass}`}
                            onAnimationEnd={() => setAnimationClass("")}>
                            <div className="question-box">
                                <div className="question-data-box-container">
                                    <div className="question-data-box">
                                        <p className="bold-text">{`${questionNo}. ${question}`}</p>
                                    </div>
                                    <div className="speak-icon-container">
                                        <i
                                            className="fa-solid fa-volume-high"
                                            onClick={() =>
                                                speakText(`${question}\n${cueQuestionsArray.join("\n")}`)
                                            }
                                            style={{ pointerEvents: isSpeaking ? "none" : "auto" }}
                                        ></i>
                                    </div>
                                </div>
                                <ul className="cues-list">
                                    {cueQuestionsArray.map((cue, index) => (
                                        <li key={index} style={{ fontWeight: "normal" }} className='cues-q'>{cue}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {view === "followup" && (
                        <div className={`question-container ${animationClass}`}>
                            <input
                                type="checkbox"
                                name="show-questions"
                                checked={showQuestions}
                                onChange={handleShowQuestionsModeToggle}
                                className="checkbox-select"
                            />
                            Show Questions
                            <ul className="questions-list">
                                {followupQuestionsArray.map((followup, index) => (
                                    <li
                                        key={index}
                                        className={`question-list-box ${activeIndex === index ? "active" : ""
                                            }`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <div className="question-data-box">
                                            {index + 1}. {showQuestions && followup}
                                        </div>
                                        <div
                                            className="speak-icon-container"
                                            onClick={() => speakText(`${followup}`)}
                                            style={{ pointerEvents: isSpeaking ? "none" : "auto" }}
                                        >
                                            <i className="fa-solid fa-volume-high"></i>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div className="icon-container">
                    <button onClick={showAlert}>
                        <i className="fa-solid fa-circle-info"></i>
                    </button>
                </div>
                <div >
                    <br></br>
                    <br></br>
                </div>
            </div>

            <div className="click-button-container">
                {!randomMode && (
                    <div className="navigation-buttons">
                        <button onClick={handlePrevious}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={handleNext}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                )}
                {randomMode && <button onClick={randomQuestionGenerator}>Ask Me?</button>}
            </div>
        </div>
    );
}

export default Part23;
