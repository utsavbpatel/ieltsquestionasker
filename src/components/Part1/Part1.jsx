import React from 'react'
import { useState, useEffect } from 'react';

const part1questions = {
  question1: {
    questionTopic: "3. Home/Accommodation",
    questions: {
      ques1: "Do you live in a house or flat?",
      ques2: "Please describe it a little.",
      ques3: "What‟s your favorite room in your home?",
      ques4: "What have you done to your room to make it look nice?",
      ques5: "Who do you live with?",
      ques6: "Which room does your family spend most of the time in?",
      ques7: "How long have you lived there?",
      ques8: "Do you plan to live there a long time?",
      ques9: "What‟s the difference between where you are living now and where you have lived in the past?",
      ques10: "What do you usually do in your house/flat/room?",
      ques11: "Are the transport facilities to your hometown very good?",
      ques12: "Do you plan to move?",
      ques13: "Would you like to move to another place to live? (Why/why not?)",
      ques14: "Are you prepared to move?"
    }
  },
  question2: {
    questionTopic: "4. Hometown",
    questions: {
      ques1: "What‟s (the name of) your hometown?",
      ques2: "Is it a big city or a small place?",
      ques3: "Please describe your hometown a little.",
      ques4: "How long have you been living there?",
      ques5: "Do you like your hometown?",
      ques6: "Do you like living there?",
      ques7: "Would you say it‟s an interesting place?",
      ques8: "What do you like (most) about your hometown?",
      ques9: "What‟s your favorite part of your hometown?",
      ques10: "Is there anything you dislike about it?",
      ques11: "Do you think you will continue living there for a long time?",
      ques12: "Are there any tourist attractions in your hometown?",
      ques13: "Did your friends also grow up in the same place as you?",
      ques14: "Would you like to live there in the future?"
    }
  },
  question3: {
    questionTopic: "5. Making Friends",
    questions: {
      ques1: "What do you often talk about with your new friends?",
      ques2: "Have you made any new friends recently?",
      ques3: "Did you make a lot of friends when you were a child?",
      ques4: "Do you like making friends?"
    }
  },

  question4: {
    questionTopic: "6. Good View",
    questions: {
      ques1: "What is your favorite place? Why?",
      ques2: "Would you take photos when you see a good view?",
      ques3: "Have you seen an unforgettable and beautiful view or scenery?",
      ques4: "What is the view like around the place where you live?"
    }
  },
  question5: {
    questionTopic: "7. Laughing",
    questions: {
      ques1: "When was the last time you laughed?",
      ques2: "Do you always laugh at funny things?",
      ques3: "Are you a person who often makes others laugh?",
      ques4: "Do you think you are a funny person?",
      ques5: "Do you enjoy watching interesting and funny movies?"
    }
  },
  question6: {
    questionTopic: "8. Teamwork",
    questions: {
      ques1: "What do you dislike about teamwork?",
      ques2: "What do you learn from working in a team?",
      ques3: "Have you teamed up with someone else before?",
      ques4: "Do you like teamwork?"
    }
  },
  question7: {
    questionTopic: "9. Fishing",
    questions: {
      ques1: "Did you ever go fishing when you were a child?",
      ques2: "Do you like fishing?",
      ques3: "Do you like eating fish?",
      ques4: "Is fishing popular in your country?"
    }
  },
  question8: {
    questionTopic: "10. Perfume",
    questions: {
      ques1: "Do you spend a lot of money on buying perfume?",
      ques2: "Do you send perfume to others as a gift?",
      ques3: "Where do you spray perfume?",
      ques4: "Do you use perfume?",
      ques5: "Do you like perfume?"
    }
  },
  question9: {
    questionTopic: "11. Roads and Streets",
    questions: {
      ques1: "Do you think the roads in your city need improvement?",
      ques2: "What is the condition of the roads in your city like?",
      ques3: "How do people cross the road in the city where you live?",
      ques4: "Are the roads and streets in the area where you live busy?"
    }
  },
  question10: {
    questionTopic: "12. Coins",
    questions: {
      ques1: "Did you use coins as a child?",
      ques2: "Do you use coins in your daily life?",
      ques3: "Is it convenient to use coins?",
      ques4: "Have you ever collected coins?",
      ques5: "Do you often carry coins with you?"
    }
  },
  question11: {
    questionTopic: "13. Teachers",
    questions: {
      ques1: "Do you want to be a teacher in the future?",
      ques2: "Do you have a teacher from your past that you still remember?",
      ques3: "Are you still in contact with your primary school teachers?",
      ques4: "In what way have your favorite teacher helped you?",
      ques5: "Do you have a favorite teacher?"
    }
  },
  question12: {
    questionTopic: "14. Bikes",
    questions: {
      ques1: "Did you ride a bike when you were little?",
      ques2: "Are bikes popular in India?",
      ques3: "Do you often ride a bike now?",
      ques4: "Do you have a bike now?",
      ques5: "Did you have a bike when you were young?"
    }
  },
  question13: {
    questionTopic: "15. Transport",
    questions: {
      ques1: "What are the advantages of using public transportation?",
      ques2: "Do most young people prefer to take public transport to school or to work?",
      ques3: "Which means of transportation is expensive?",
      ques4: "Which means of transport is convenient?"
    }
  },
  question14: {
    questionTopic: "16. Challenges",
    questions: {
      ques1: "How do you usually deal with challenges in daily life?",
      ques2: "Do you like to live a life that has a lot of challenges?",
      ques3: "Do you like to challenge yourself?",
      ques4: "What subject do you think is the most challenging at school?"
    }
  },
  question15: {
    questionTopic: "17. Asking for Help",
    questions: {
      ques1: "When was the last time you asked for help?",
      ques2: "What kinds of help do you often ask for?",
      ques3: "Why are teachers always willing to help students?",
      ques4: "Do you ask for help when you have a problem?"
    }
  },
  question16: {
    questionTopic: "18. Childhood Memory",
    questions: {
      ques1: "Who did you like to play with as a child?",
      ques2: "Where did you go to play as a child?",
      ques3: "Do you think it is better for children to grow up in the city or in the countryside?",
      ques4: "What are your best childhood memories?",
      ques5: "Did you enjoy your childhood?",
      ques6: "What did you enjoy doing as a child?"
    }
  },
  question17: {
    questionTopic: "19. Internet",
    questions: {
      ques1: "Do you use the internet (very much)?",
      ques2: "When was the first time you used the internet?",
      ques3: "Is the internet very important (or useful) to you?",
      ques4: "Do you think you can (or could) live without the internet?"
    }
  },
  question18: {
    questionTopic: "20. Plants",
    questions: {
      ques1: "Do you keep plants at home?",
      ques2: "What plant did you grow when you were young?",
      ques3: "Do you know anything about growing a plant?",
      ques4: "Do Indian people give plants as gifts?"
    }
  },
  question19: {
    questionTopic: "21. Exciting activities",
    questions: {
      ques1: "Have you ever tried any exciting activities?",
      ques2: "What do you think were exciting activities when you were a child?",
      ques3: "Has anything exciting happened to you recently?",
      ques4: "Would you like to try scuba diving and bungee jumping?"
    }
  },
  question20: {
    questionTopic: "22. Staying at home",
    questions: {
      ques1: "Are you a person who likes to stay at home?",
      ques2: "What do you do when you stay at home?",
      ques3: "What is your favourite place at home?",
      ques4: "What did you often do at home as a child?",
      ques5: "Would you like to stay at home a lot in the future?"
    }
  },
  question21: {
    questionTopic: "23. Sharing",
    questions: {
      ques1: "Did you share anything with others recently?",
      ques2: "Did your parents teach you to share when you were a child?",
      ques3: "What kind of things do you like to share with others?",
      ques4: "What kind of things are not suitable for sharing?"
    }
  },
  question22: {
    questionTopic: "24. Morning Routine",
    questions: {
      ques1: "Do you often get up early in the morning?",
      ques2: "What do you usually do when you get up early?",
      ques3: "Do you get up early on weekends?",
      ques4: "Which morning do you like the best in a week?"
    }
  },
  question23: {
    questionTopic: "25. Art",
    questions: {
      ques1: "Do you like art?",
      ques2: "Do you think art classes are necessary? {Why?)",
      ques3: "How do you think art classes affect children‟s development?",
      ques4: "What kind of paintings do Indian people like?",
      ques5: "What can you learn from western paintings?",
      ques6: "What benefits can you get from painting as a hobby?"
    }
  },
  question24: {
    questionTopic: "26. Keys",
    questions: {
      ques1: "Do you always bring a lot of keys with you?",
      ques2: "Have you ever lost your keys?",
      ques3: "Do you often forget the keys and lock yourself out?",
      ques4: "Do you think it's a good idea to leave your keys with a neighbour?"
    }
  },
  question25: {
    questionTopic: "27. Numbers",
    questions: {
      ques1: "What is your favorite number?",
      ques2: "Are you good at remembering phone numbers?",
      ques3: "Are you good at math?",
      ques4: "Do you usually use numbers?"
    }
  },
  question26: {
    questionTopic: "28. Science",
    questions: {
      ques1: "Do you like science?",
      ques2: "When did you start to learn about science?",
      ques3: "Which science subject is interesting to you?",
      ques4: "What kinds of interesting things have you done with science?"
    }
  },
  question27: {
    questionTopic: "29. Outer space and stars",
    questions: {
      ques1: "Do you want to travel in outer space?",
      ques2: "What would you do if you had the opportunity?",
      ques3: "Do you think it’s necessary to see other planets?",
      ques4: "When was the last time you went traveling?",
      ques5: "Do you like to travel by air?",
      ques6: "Have you ever learnt about outer space and stars?",
      ques7: "Do you like science fiction movies? Why?"
    }
  },
  question28: {
    questionTopic: "30. News",
    questions: {
      ques1: "Are you interested in news?",
      ques2: "How do you usually find news?",
      ques3: "How do your friends get news?",
      ques4: "Have you read the news this morning?",
      ques5: "Do you often talk with your friends about the news?"
    }
  },
  question29: {
    questionTopic: "31. E-books and paper books",
    questions: {
      ques1: "Which do you prefer, e-books or paper books?",
      ques2: "When do you usually read online?",
      ques3: "Will you read more online in the future?",
      ques4: "Do you think paper books will disappear in the future?"
    }
  },
  question30: {
    questionTopic: "32. Holidays",
    questions: {
      ques1: "Where did you go for your last holiday?",
      ques2: "Do you like holidays? Why?",
      ques3: "Which public holiday do you like the best?",
      ques4: "What do you do on holidays?"
    }
  },
  question31: {
    questionTopic: "33. Staying Up",
    questions: {
      ques1: "Do you often stay up late?",
      ques2: "Did you stay up late when you were a kid?",
      ques3: "What do you do when you stay up late?",
      ques4: "What does it feel like the next morning if you stay up late?"
    }
  },
  question32: {
    questionTopic: "34. Small business",
    questions: {
      ques1: "Do you know many small businesses where you live?",
      ques2: "Do you prefer buying things in big companies or small businesses?",
      ques3: "Have you ever worked in small businesses?",
      ques4: "Have you ever thought about starting your own business?"
    }
  },
  question33: {
    questionTopic: "35. Jewelry",
    questions: {
      ques1: "Do you often wear jewelry?",
      ques2: "What type of jewelry do you like?",
      ques3: "Do you usually buy jewelry?",
      ques4: "Why do you think some people wear a piece of jewelry for a long time?"
    }
  },
  question34: {
    questionTopic: "36. Language",
    questions: {
      ques1: "What languages do you speak?",
      ques2: "When did you learn English?",
      ques3: "Do you think English is difficult to learn?",
      ques4: "Would you like to learn other languages?"
    }
  },
  question35: {
    questionTopic: "37. Chocolate",
    questions: {
      ques1: "How often do you eat chocolate?",
      ques2: "What’s your favorite flavor?",
      ques3: "Is chocolate expensive in India?",
      ques4: "When was the first time you ate chocolate?",
      ques5: "Is chocolate popular in India?"
    }
  },
  question36: {
    questionTopic: "38. Happy things",
    questions: {
      ques1: "Is there anything that has made you feel happy lately?",
      ques2: "What made you happy when you were little?",
      ques3: "What do you think will make you feel happy in the future?",
      ques4: "When do you feel happy at work? Why?",
      ques5: "Do you feel happy when buying new things?",
      ques6: "Do you think people are happy when buying new?"
    }
  },
  question37: {
    questionTopic: "39. Pen or Pencil",
    questions: {
      ques1: "Do you prefer to use pen or pencil?",
      ques2: "When was the last time you bought pen or pencil?",
      ques3: "How would you react if someone sent you a pen as a gift?"
    }
  },
  question38: {
    questionTopic: "40. Stages of life",
    questions: {
      ques1: "Do you enjoy your current stage of life?",
      ques2: "In what stage of your life were you the happiest?",
      ques3: "Which stage of your life do you think is the most important?",
      ques4: "What’s your plan for your next stage of life?"
    }
  },
  question39: {
    questionTopic: "41. Writing",
    questions: {
      ques1: "Do you write a lot?",
      ques2: "What do you like to write? Why?",
      ques3: "Do you think the things you write would change?",
      ques4: "Do you prefer typing or handwriting when you are writing?"
    }
  },
  question40: {
    questionTopic: "42. Weather",
    questions: {
      ques1: "What's the weather like where you live?",
      ques2: "Do you prefer cold or hot weather?",
      ques3: "Do you prefer dry or wet weather?",
      ques4: "Are you in the habit of checking the weather forecast? When/How often?",
      ques5: "What do you think are the effects of climate change in recent years?",
      ques6: "Would you like to visit other cities that have different climates from where you live?"
    }
  },
  question41: {
    questionTopic: "43. Library",
    questions: {
      ques1: "Do you often go to the library?",
      ques2: "What do you usually do in the library?",
      ques3: "Did you go to the library when you were a kid?",
      ques4: "Do Indian kids often go to the library?"
    }
  },
  question42: {
    questionTopic: "44. T-shirts",
    questions: {
      ques1: "Do you like wearing T-shirts?",
      ques2: "How often do you wear T-shirts?",
      ques3: "Do you like t-shirts with pictures or prints?",
      ques4: "Do you think older people who wear T-shirts are fashionable?",
      ques5: "Would you buy t-shirts as souvenirs on vacation?"
    }
  },
  question43: {
    questionTopic: "45. Weekends",
    questions: {
      ques1: "Do you like weekends?",
      ques2: "How do you usually spend your weekends? Do you study or work?",
      ques3: "In your country, do men and women usually do the same kind of things on weekends (or in their free time)?",
      ques4: "Do you plan for your weekends?",
      ques5: "When do you spend time with your family?",
      ques6: "What did you do last weekend?",
      ques7: "What do other people in your hometown (or in your country) usually do on weekends?",
      ques8: "What are you going to do next weekend?",
      ques9: "Is there anything new that you would like to do on weekends?",
      ques10: "Do you like working on weekends?",
      ques11: "Do you think employees should have to work on weekends?",
      ques12: "Do you think that weekends now are more important to you, than when you were a child?"
    }
  },

  question44: {
    questionTopic: "46. Breakfast",
    questions: {
      ques1: "What do you usually eat for breakfast?",
      ques2: "Do you think breakfast is important?",
      ques3: "Are there any differences between the mornings of your childhood and now?",
      ques4: "Would you like to change your morning routine?",
    }
  },
  question45: {
    questionTopic: "47. Video games",
    questions: {
      ques1: "Do you play video games?",
      ques2: "What kinds of video games do you play?",
      ques3: "Is it good for young people to play video games?"
    }
  },
  question46: {
    questionTopic: "48. Sunglasses",
    questions: {
      ques1: "Do you often wear sunglasses?",
      ques2: "Do you spend a lot of money on sunglasses?",
      ques3: "Do you give sunglasses as a gift?",
      ques4: "Why do you wear sunglasses?"
    }
  },
  question47: {
    questionTopic: "49. Social media",
    questions: {
      ques1: "When did you start using social media?",
      ques2: "Do you think you spend too much time on social media?",
      ques3: "Do your friends use social media?",
      ques4: "What do people often do on social media?"
    }
  },
  question48: {
    questionTopic: "50. Cake",
    questions: {
      ques1: "Do you like eating cakes?",
      ques2: "Do you know how to bake a cake?",
      ques3: "When do you usually eat cakes?",
      ques4: "What is your favorite kind of cake?"
    }
  },
  question49: {
    questionTopic: "51. Losing things",
    questions: {
      ques1: "Do you often lose things?",
      ques2: "What can we do to avoid losing things?",
      ques3: "Why do some people tend to lose things more often than others?",
      ques4: "What will you do if you find something lost by others?"
    }
  },
  question50: {
    questionTopic: "52. Colors",
    questions: {
      ques1: "What is your favorite color?",
      ques2: "Do you usually wear clothes in your favorite color?",
      ques3: "Are there any colors that have a special meaning in your country?",
      ques4: "Do you think different types of people like different colors?"
    }
  },
  question51: {
    questionTopic: "53. Memory",
    questions: {
      ques1: "Why do some people have a better memory while others just don’t?",
      ques2: "Why do more people rely on cell phones to remember things?",
      ques3: "Are you good at memorizing things?",
      ques4: "Have you ever forgotten something important?"
    }
  },
  question52: {
    questionTopic: "54. Feeling bored",
    questions: {
      ques1: "Do you often feel bored?",
      ques2: "When would you feel bored?",
      ques3: "What do you do when you feel bored?",
      ques4: "Do you think childhood is boring or adulthood is boring?"
    }
  },
  question53: {
    questionTopic: "55. Music",
    questions: {
      ques1: "Do a lot of people like music?",
      ques2: "What kind of music do you listen to?",
      ques3: "Is it easy to learn music?",
      ques4: "Did you have music lessons at school?"
    }
  },
  question54: {
    questionTopic: "56. Crowded place",
    questions: {
      ques1: "Is the city where you live crowded?",
      ques2: "Is there a crowded place near where you live?",
      ques3: "Do you like crowded places?",
      ques4: "Do most people like crowded places?",
      ques5: "When was the last time you were in a crowded place?"
    }
  },
  question55: {
    questionTopic: "57. Celebrity",
    questions: {
      ques1: "Who is your favourite celebrity in your country?",
      ques2: "What kind of famous people do you often see in the news?",
      ques3: "Do you pay attention to famous people in the news?",
      ques4: "Do you believe that the news about famous people in the media is true?",
      ques5: "Would you like to be a famous person in the news?"
    }
  },
  question56: {
    questionTopic: "58. Advertisement",
    questions: {
      ques1: "Is there an advertisement that made an impression on you when you were a child?",
      ques2: "Do you see a lot of advertising on trains or other transport?",
      ques3: "Do you like advertisements?",
      ques4: "What kind of advertising do you like?"
    }
  },
  question57: {
    questionTopic: "59. Running",
    questions: {
      ques1: "Do you go running a lot?",
      ques2: "Where do you usually go running?",
      ques3: "When was the last time you went running?",
      ques4: "What do you think of running as a sport?"
    }
  },
  question58: {
    questionTopic: "60. Chatting",
    questions: {
      ques1: "Do you like chatting with friends?",
      ques2: "What do you usually chat about with friends?",
      ques3: "Do you prefer to chat with a group of people or with only one friend?",
      ques4: "Do you prefer to communicate face-to-face or via social media?",
      ques5: "Do you argue with friends?"
    }
  },
  question59: {
    questionTopic: "61. Helping others",
    questions: {
      ques1: "Do you usually help people around you?",
      ques2: "How do you help people around you, such as neighbors, family, and friends?",
      ques3: "Do your parents teach you how to help others?",
      ques4: "Did your parents help you a lot when you were young?",
      ques5: "What have you done to help the elderly?"
    }
  },
  question60: {
    questionTopic: "62. Maps",
    questions: {
      ques1: "Do you often use maps?",
      ques2: "Do you use paper maps?",
      ques3: "How often do you use maps on your phone?",
      ques4: "Do you have maps at home?"
    }
  },
  question61: {
    questionTopic: "63. Clothing",
    questions: {
      ques1: "What kind of clothes do you like to wear?",
      ques2: "Do you prefer to wear comfortable and casual clothes or smart clothes?",
      ques3: "Do you like wearing T-shirts?",
      ques4: "Do you spend a lot of time choosing clothes?"
    }
  },
  question62: {
    questionTopic: "64. Musical Instruments",
    questions: {
      ques1: "Have you ever learned to play a musical instrument?",
      ques2: "What musical instruments do you enjoy listening to the most?",
      ques3: "Do you think children should learn to play an instrument at school?",
      ques4: "Do you think music education is important for children?"
    }
  },
  question63: {
    questionTopic: "65. Noise",
    questions: {
      ques1: "Do you like to stay in a place with a lot of noise?",
      ques2: "What kinds of noises are there in the area where you live?",
      ques3: "Do you want to move to a quieter place?",
      ques4: "Do you think there is too much noise in today's world?",
      ques5: "Is making noise one of people's rights?"
    }
  },
  question64: {
    questionTopic: "66. Tea and Coffee",
    questions: {
      ques1: "Do people like tea and coffee nowadays?",
      ques2: "Do you prefer to use tea or coffee to serve your guests?",
      ques3: "When was the last time you had a cup of coffee or tea?",
      ques4: "Do you usually buy your coffee in a coffee shop?"
    }
  },
  question65: {
    questionTopic: "67. Robots",
    questions: {
      ques1: "Are robots important?",
      ques2: "Do robots affect people’s lives?",
      ques3: "Have you ever watched a movie about robots?",
      ques4: "Should we let a robot drive for us for a long time?",
      ques5: "What can robots do for you at home?"
    }
  },
  question66: {
    questionTopic: "68. Gifts",
    questions: {
      ques1: "Have you ever sent handmade gifts to others?",
      ques2: "Have you ever received a great gift?",
      ques3: "What do you consider when choosing a gift?",
      ques4: "Do you think you are good at choosing gifts?"
    }
  },
  question67: {
    questionTopic: "69. Geography",
    questions: {
      ques1: "How do you like geography?",
      ques2: "Do you think geography is useful?",
      ques3: "Have you ever learned geography?",
      ques4: "Do you want to be a geography teacher?"
    }
  },
  question68: {
    questionTopic: "70. Films",
    questions: {
      ques1: "What films do you like?",
      ques2: "Did you often watch films when you were a child?",
      ques3: "Did you ever go to the cinema alone as a child?",
      ques4: "Do you often go to the cinema with your friends?",
      ques5: "Do you think going to the cinema is a good way to spend time with friends?"
    }
  },
  question69: {
    questionTopic: "71. Ice Cream",
    questions: {
      ques1: "Do you love ice cream?",
      ques2: "Did you often eat ice cream when you were younger",
      ques3: "Are there shops selling ice cream near the place where you live?",
      ques4: "Can you make ice cream yourself?",
    }
  },
  question70: {
    questionTopic: "72. Concentrate",
    questions: {
      ques1: "Can you concentrate for a long time?",
      ques2: "Could you concentrate for a long time when you were younger?",
      ques3: "Is it easy for you to concentrate in a noisy place?",
      ques4: "How do you stay focused?"
    }
  },
  question71: {
    questionTopic: "73. Fixing Things",
    questions: {
      ques1: "Do you often fix things?",
      ques2: "Did you learn to fix things when you were younger?",
      ques3: "What do you do when one thing is broken and cannot be fixed?",
      ques4: "Do you think it is necessary for people to learn to fix things?"
    }
  },
  question72: {
    questionTopic: "74. Health",
    questions: {
      ques1: "How do you keep healthy?",
      ques2: "What is your favourite sport?",
      ques3: "Are there health classes in your school?",
      ques4: "Is it easy for people to exercise in your country?"
    }
  },
  question73: {
    questionTopic: "75. Dream",
    questions: {
      ques1: "What was your childhood dream?",
      ques2: "Are you the kind of person who sticks to dreams?",
      ques3: "What is your dream job?",
      ques4: "Do you think you are an ambitious person?"
    }
  },
  question74: {
    questionTopic: "76. Friends",
    questions: {
      ques1: "How important are friends to you?",
      ques2: "Do you often go out with your friends?",
      ques3: "Where do you often meet each other?",
      ques4: "What do you usually do with your friends?"
    }
  },
  question75: {
    questionTopic: "77. Favourite Day",
    questions: {
      ques1: "When was the last time you had a few days off?",
      ques2: "What do you usually do when you have your days off?",
      ques3: "Do you usually spend your days off with your parents or with your friends?",
      ques4: "What would you like to do if you had a day off tomorrow?",
      ques5: "Which day is your favourite day?",
      ques6: "Which day is your least favourite day?",
      ques7: "How do you usually spend your time?"
    }
  },
  question76: {
    questionTopic: "78. Rain",
    questions: {
      ques1: "Do you like rainy days?",
      ques2: "Does it rain much in your city?",
      ques3: "Would you like to live in a place that is dry or wet?",
      ques4: "Would you change your plan if it rained?"
    }
  },
  question77: {
    questionTopic: "79. Day Off",
    questions: {
      ques1: "When was the last time you had a few days off?",
      ques2: "What do you usually do when you have your days off?",
      ques2: "Do you usually spend your days off with your parents or with your friends?",
      ques3: "What would you do if you had a day off tomorrow?"
    }
  },
  question78: {
    questionTopic: "80. Bags",
    questions: {
      ques1: "Do you like bags?",
      ques2: "What types of bags do you like?",
      ques3: "Do you usually carry a bag when you go out?",
      ques4: "What types of bags do you use in your everyday life?",
      ques5: "Do you have different bags for different occasions?",
      ques6: "What do you put in these bags?",
      ques7: "What sorts of bags do women like to buy?",
      ques8: "Is a bag an ideal gift?",
      ques9: "Did you use a backpack when you were a child?",
      ques10: "What kind of bags would you use when travelling?",
      ques11: "Do you change your bags often?"
    }
  },
  question79: {
    questionTopic: "81. Wild Animals",
    questions: {
      ques1: "Are there wild animals in your country?",
      ques2: "Have you ever been to a zoo or a safari park?",
      ques3: "What is the animal you would like to see in the wild?",
      ques4: "Are there TV programs about wild animals in your country?",
      ques5: "What's the most famous wild animal from your country?",
      ques6: "What's your favourite wild animal (from your country)?",
      ques7: "Do you like to watch TV programs about wild animals?",
      ques8: "Did you learn something about wild animals at school?",
      ques9: "Where can you see wild animals?",
      ques10: "In which country do you think you can see many wild animals?"
    }
  },
  question80: {
    questionTopic: "82. School",
    questions: {
      ques1: "Where do you go to school?",
      ques2: "Do you go to a good school?",
      ques3: "Do you like your teachers?",
      ques4: "Do you like your current learning atmosphere?",
      ques5: "What are the differences between your school and other schools?",
      ques6: "Is there anything you want to change about your school?"
    }
  },
  // question83: {
  //   questionTopic: "83. Outer Space and Stars",
  //   questions: {
  //     ques1: "Have you ever learnt about outer space and stars?",
  //     ques2: "Do you like science fiction movies? Why?",
  //     ques3: "Do you want to know more about outer space?",
  //     ques4: "Do you want to go into outer space in the future?"
  //   }
  // },
  question81: {
    questionTopic: "83. Music",
    questions: {
      ques1: "Do you often (like to) listen to music?",
      ques2: "When do you listen to music?",
      ques3: "How much time do you spend listening to music every day?",
      ques4: "What kinds of music do you like to listen to?",
      ques5: "What's your favorite kind of music?",
      ques6: "Have you ever been to a concert?",
      ques7: "Do you like to listen to live music?",
      ques8: "When did you start listening to this type of music?",
      ques9: "Where do you listen to it?",
      ques10: "How do you feel when you listen to this music?",
      ques11: "Have you ever learned to play a musical instrument?",
      ques12: "Is music an important subject at school in India?",
      ques13: "Did you often listen to music when you were a child? (If yes, give details.)",
      ques14: "What kinds of music are (most) popular in India?"
    }
  },
  question82: {
    questionTopic: "84. Technology",
    questions: {
      ques1: "What technology do you often use, computers or cellphones?",
      ques2: "What electronic devices have you bought lately?",
      ques3: "Is there any technology you want to buy?",
      ques4: "Is technology important in your life?",
      ques5: "Is there any technology you don't like?",
      ques6: "What do you think are the trends in technology today compared to when you were young?",
    }
  },
  question83: {
    questionTopic: "85. Social Media",
    questions: {
      ques1: "Do you or your friends like using social media?",
      ques2: "Do you think you or your friends use too much social media?",
      ques3: "Do you want to work in social media? Why?",
      ques4: "What's the most popular social media in India? Why?",
    }
  },
  question84: {
    questionTopic: "86. Snacks",
    questions: {
      ques1: "What snacks do you like to eat?",
      ques2: "Did you often eat snacks when you were young?",
      ques3: "When do you usually eat snacks now?",
      ques4: "Do you think it is healthy for you to eat snacks?"
    }
  },
  question85: {
    questionTopic: "87. Singing",
    questions: {
      ques1: "Do you like singing? Why?",
      ques2: "Have you ever learnt how to sing?",
      ques3: "Who do you want to sing for?",
      ques4: "Do you think singing can bring happiness to people?"
    }
  },
  question86: {
    questionTopic: "88. Puzzles",
    questions: {
      ques1: "Did you do puzzles in your childhood?",
      ques2: "When do you do puzzles, during your trip or when you feel bored?",
      ques3: "Do you like doing word puzzles or number puzzles? Which is more difficult for you?",
      ques4: "Do you think it is good for old people to do puzzles?"
    }
  },
  question87: {
    questionTopic: "89. Public transportation",
    questions: {
      ques1: "What kind of public transportation do you usually take?",
      ques2: "When do you usually take public transportation, in your everyday life, or when you are travelling?",
      ques3: "Do most people prefer public transportation in your country?",
      ques4: "Did you take public transportation when you were a kid?",
      ques5: "Will there be more people taking public transportation in the future?"
    }
  },
  question88: {
    questionTopic: "90. Names",
    questions: {
      ques1: "Does your name have any special meaning?",
      ques2: "How would you choose names for your next generation?",
      ques3: "Are there any differences between how Indians name their children now and in the past?",
      ques4: "Does anyone in your family have the same name as you?",
      ques5: "Are there any names that are more popular than others in India?"
    }
  },

  question89: {
    questionTopic: "91. Morning Time",
    questions: {
      ques1: "Do you like getting up early in the morning?",
      ques2: "What do you usually do in the morning?",
      ques3: "What did you do in the morning when you were little? Why?",
      ques4: "Are there any differences between what you do in the morning now and what you did in the past?",
      ques5: "Do you spend your mornings doing the same things on both weekends and weekdays? Why?"
    }
  },
  question90: {
    questionTopic: "92. Housework and cooking",
    questions: {
      ques1: "Do you do some cooking/help your family cook at home now?",
      ques2: "Do you think your home is clean and tidy?",
      ques3: "Did you do some house cleaning when you were young?",
      ques4: "Do you have breakfast at home every day?",
      ques5: "Do you want to learn how to cook well?",
      ques6: "What housework do you like or dislike doing?"
    }
  },
  question91: {
    questionTopic: "93. Geography",
    questions: {
      ques1: "Do you like geography?",
      ques2: "Have you ever studied geography at school?",
      ques3: "Are you good at reading a map?",
      ques4: "Would you visit a country because of its geographical location?"
    }
  },
  question92: {
    questionTopic: "94. Birthday",
    questions: {
      ques1: "What do you usually do on your birthday?",
      ques2: "What did you do on your birthday when you were young?",
      ques3: "Do you think it is important for you to celebrate your birthday?",
      ques4: "Whose birthday do you think is the most important to celebrate in India?"
    }
  },
  question93: {
    questionTopic: "95. Mirrors",
    questions: {
      ques1: "How often do you look at yourself in the mirror every day?",
      ques2: "Have you ever bought mirrors?",
      ques3: "Would you use mirrors to decorate rooms?",
      ques4: "Do you check yourself when you decide to buy a mirror?"
    }
  },
  question94: {
    questionTopic: "96. Watch",
    questions: {
      ques1: "Do you wear a watch?",
      ques2: "Have you ever got a watch as a gift?",
      ques3: "Why do some people wear expensive watches?",
      ques4: "Do you think it is important to wear a watch? Why?"
    }
  },
  question95: {
    questionTopic: "97. Talent",
    questions: {
      ques1: "Do you have a talent, or something you are good at?",
      ques2: "Was it mastered recently or when you were young?",
      ques3: "Do you think your talent can be useful for your future work? Why?",
      ques4: "Do you think anyone in your family has the same talent?"
    }
  },
  question96: {
    questionTopic: "98. Sports",
    questions: {
      ques1: "What sports do you like?",
      ques2: "Where did you learn to play?",
      ques3: "Did you do some sports when you were young?",
      ques4: "Do you think children need more exercise?"
    }
  },
  question97: {
    questionTopic: "99. Books",
    questions: {
      ques1: "Do you often read books? When?",
      ques2: "Are your reading habits different than in the past?",
      ques3: "Have you ever read a book that has been adapted into film?",
      ques4: "What do you prefer, reading books or watching movies?"
    }
  },
  question98: {
    questionTopic: "100. Sport Programs",
    questions: {
      ques1: "Do you like watching sports programs on TV?",
      ques2: "Do you like to watch live sports games?",
      ques3: "Who do you like to watch sports games with?",
      ques4: "What kinds of games do you expect to watch in the future?"
    }
  },
  question99: {
    questionTopic: "101. Sitting Down",
    questions: {
      ques1: "Where is your favorite place to sit?",
      ques2: "Do you always sit down for a long time?",
      ques3: "Do you feel sleepy when you are sitting down?",
      ques4: "When you were a kid, did you usually sit on the floor?"
    }
  },
  question100: {
    questionTopic: "102. Old Buildings",
    questions: {
      ques1: "Have you ever seen some old buildings in the city?",
      ques2: "Do you think we should preserve old buildings in cities?",
      ques3: "Do you prefer living in an old building or a modern house?",
      ques4: "Are there any old buildings you want to see in the future? Why?"
    }
  },
  question101: {
    questionTopic: "103. Meeting places",
    questions: {
      ques1: "Where is your favorite place to meet with your friends?",
      ques2: "Do you think there are some places more suitable for meeting with others?",
      ques3: "Are there any differences between your favorite meeting places in the present and in your childhood?",
      ques4: "Why are some meeting places better than others?"
    }
  },
  question102: {
    questionTopic: "104. Evening time",
    questions: {
      ques1: "Do you like the morning or evening?",
      ques2: "What do you usually do in the evening?",
      ques3: "What did you do in the evening when you were little? Why?",
      ques4: "Are there any differences between what you do in the evening now and what you did in the past?"
    }
  },
  question103: {
    questionTopic: "105. Computers",
    questions: {
      ques1: "In what conditions would you use a computer?",
      ques2: "When was the first time you used a computer?",
      ques3: "What would your life be like without computers?",
      ques4: "In what conditions would it be difficult for you to use a computer?"
    }
  },
  question104: {
    questionTopic: "106. Collecting things",
    questions: {
      ques1: "Do you collect things?",
      ques2: "Are there any things you keep from childhood?",
      ques3: "Would you keep old things for a long time? Why?",
      ques4: "Where do you usually keep things you need?"
    }
  },
  question105: {
    questionTopic: "107. Boring things",
    questions: {
      ques1: "What kinds of things are boring to you?",
      ques2: "What do you do when you feel bored?",
      ques3: "What was the most boring thing you did when you were young?",
      ques4: "Do you think school is boring?"
    }
  },
  question106: {
    questionTopic: "108. Advertisements",
    questions: {
      ques1: "Are you interested in watching TV advertisements or internet advertisements?",
      ques2: "What kinds of advertisements do you dislike?",
      ques3: "Do you share advertisements with others?",
      ques4: "Do you want to work in advertising in the future?"
    }
  },
  question107: {
    questionTopic: "109. Films/Cinema",
    questions: {
      ques1: "Do you like to watch films?",
      ques2: "Do you prefer foreign films or Indian films?",
      ques3: "How often do you go to cinema to watch a movie?",
      ques4: "Do Indian people like to go to cinema to watch a film?",
      ques5: "What kinds of movies do you like the best?",
      ques6: "What was the first film you watched?"
    }
  },
  question108: {
    questionTopic: "110. Spending time with others",
    questions: {
      ques1: "Do you like talking with people?",
      ques2: "How do you like spending time with your friends?",
      ques3: "Would you prefer to study alone or with others?",
      ques4: "Do you remember a time when you need to cooperate with others?"
    }
  },
  question109: {
    questionTopic: "111. Pets and Animals",
    questions: {
      ques1: "What’s your favorite animal? Why?",
      ques2: "What is the most popular animal in your country?",
      ques3: "Have you ever had a pet before?",
      ques4: "Where do you prefer to keep your pet, indoors or outdoors?"
    }
  },
  question110: {
    questionTopic: "112. Headphones",
    questions: {
      ques1: "Do you use headphones?",
      ques2: "What type of headphones do you use?",
      ques3: "When would you use headphones?",
      ques4: "In what conditions, you won’t use headphones?"
    }
  },
  question111: {
    questionTopic: "113. Shoes",
    questions: {
      ques1: "Do you like buying shoes? How often?",
      ques2: "Have you ever bought shoes online?",
      ques3: "How much money do you usually spend on shoes?",
      ques4: "Which do you prefer, fashionable shoes or comfortable shoes?"
    }
  },
  question112: {
    questionTopic: "114. Public gardens and parks",
    questions: {
      ques1: "Would you like to play in a public garden or park?",
      ques2: "What do you like to do when visiting a park?",
      ques3: "How have parks changed today compared to the time when you were a kid?",
      ques4: "Would you prefer to play in a personal garden or public garden?"
    }
  },
  question113: {
    questionTopic: "115. Apps",
    questions: {
      ques1: "What apps have you recently used?",
      ques2: "What kinds of apps are you usually interested in?",
      ques3: "What was the first app you used?",
      ques4: "What kinds of apps would you like to use in the future?"
    }
  },
  question114: {
    questionTopic: "116. Colours",
    questions: {
      ques1: "What’s your favorite colour?",
      ques2: "What’s the color you dislike? Why?",
      ques3: "What colors do your friends like most?",
      ques4: "What colour makes you uncomfortable in your room?",
      ques5: "What colours do you like?",
      ques6: "What is the most popular colour in India?",
      ques7: "Do you like to wear dark or bright colours?",
      ques8: "Do colours affect your mood?",
      ques9: "Did color matter to you when you were a child?",
      ques10: "Does color matter when you buy things?",
      ques11: "Which color you don’t like to have in your home?",
      ques12: "What is the difference between men’s and women’s preference on colours?",
      ques13: "Have you ever seen a rainbow?"
    }
  },
  question115: {
    questionTopic: "117. Getting lost",
    questions: {
      ques1: "Have you ever lost your way?",
      ques2: "How can you find your way when you are lost?",
      ques3: "Can you read a map when you get lost?",
      ques4: "Have you ever helped someone who got lost?"
    }
  },
  question116: {
    questionTopic: "118. Concentration",
    questions: {
      ques1: "Is it difficult for you to stay focused on something?",
      ques2: "What do you do to help you concentrate?",
      ques3: "What may distract you when you are trying to stay focused?",
      ques4: "When do you need to be focused?"
    }
  },
  question117: {
    questionTopic: "119. Flowers",
    questions: {
      ques1: "What kind of flowers do you know?",
      ques2: "Are there any flowers that have special meaning in India?",
      ques3: "Have you planted any flowers?",
      ques4: "Have you sent flowers to anyone?"
    }
  },
  question118: {
    questionTopic: "120. Barbecue",
    questions: {
      ques1: "Do Indian people like barbecue?",
      ques2: "What kind of food do you like to eat for barbeque?",
      ques3: "Would you like to have barbeque with your family or your friends?",
      ques4: "Did you have barbeque when you were a child?"
    }
  },
  question119: {
    questionTopic: "121. Car Trip",
    questions: {
      ques1: "Do you like to travel by car?",
      ques2: "When do you travel by car?",
      ques3: "Where is the farthest place you have traveled by car?",
      ques4: "Do you like to sit in the back or front when travelling by car?"
    }
  },
  question120: {
    questionTopic: "122. Relax",
    questions: {
      ques1: "What do you do to relax?",
      ques2: "Do you think doing sports is a good way to relax?",
      ques3: "Do you think vacation is a good time for you to relax?",
      ques4: "Do you think students need more relaxing time?"
    }
  },
  question121: {
    questionTopic: "123. Special Costumes",
    questions: {
      ques1: "Do you like to wear special costumes?",
      ques2: "Did you try any special costumes when you were young?",
      ques3: "When was the last time you wore special costumes?",
      ques4: "Did you ever buy special costumes?"
    }
  },
  question122: {
    questionTopic: "124. Wallet",
    questions: {
      ques1: "Do you use a wallet?",
      ques2: "Have you ever lost a wallet?",
      ques3: "Have you ever sent a wallet to someone as a gift?",
      ques4: "Do most of your friends use a wallet?"
    }
  },
  question123: {
    questionTopic: "125. Primary School",
    questions: {
      ques1: "What did you like to do the most when you were in primary school?",
      ques2: "How did you go to your primary school?",
      ques3: "How do you like your primary school?",
      ques4: "What did you do in your leisure time in primary school?"
    }
  },
  question124: {
    questionTopic: "126. Environmental protection",
    questions: {
      ques1: "Would you like to work in a company related to environmental protection?",
      ques2: "How can we protect the environment?",
      ques3: "Do you think you have done enough to protect the environment?",
      ques4: "Is there education about environmental protection at school?"
    }
  },
  question125: {
    questionTopic: "127. New Year",
    questions: {
      ques1: "How do you celebrate New Year?",
      ques2: "Do you still remember a New Year that you celebrated?",
      ques3: "Do you have any ceremonies to celebrate the New Year in your country?",
      ques4: "Why do people think New Year is a new beginning?"
    }
  },
  question126: {
    questionTopic: "128. Feel Happy",
    questions: {
      ques1: "Is there anything that makes you feel happy lately?",
      ques2: "What do you do to stay happy?",
      ques3: "Can you stay happy all the time?",
      ques4: "Is it important to be happy?"
    }
  },
  question127: {
    questionTopic: "129. Trees",
    questions: {
      ques1: "What kind of trees do people usually plant in your country? How about your hometown?",
      ques2: "Have you ever planted trees?",
      ques3: "What kind of trees do you plant?",
      ques4: "Do you like planting trees and why?"
    }
  },
  question128: {
    questionTopic: "130. Decoration",
    questions: {
      ques1: "What is the decoration like in your home?",
      ques2: "What kind of decoration do you prefer?",
      ques3: "Do Indian people like decorating their homes?",
      ques4: "What's your favorite color when decorating your home"
    }
  },
  question129: {
    questionTopic: "131. Farming",
    questions: {
      ques1: "Have you visited a farm?",
      ques2: "What kind of farm do you like?",
      ques3: "Do you think farming is important?",
      ques4: "Did you do farm work when you were young?"
    }
  },
  question130: {
    questionTopic: "132. Furniture",
    questions: {
      ques1: "Do you have a lot of furniture in your home?",
      ques2: "Is there anyone who bought furniture for you?",
      ques3: "What kind of furniture would you like to buy?",
      ques4: "Which furniture do you like best in your home?"
    }
  },
  question131: {
    questionTopic: "133. Stages of life",
    questions: {
      ques1: "Do you enjoy your current stage of life?",
      ques2: "In what stage of your life were you the happiest?",
      ques3: "Which stage of your life do you think is the most important?",
      ques4: "What’s your plan for your next stage of life?"
    }
  },
  question132: {
    questionTopic: "134. Taking rest",
    questions: {
      ques1: "How often do you take a rest?",
      ques2: "What do you usually do when you are resting?",
      ques3: "Do you take a nap when you are resting?",
      ques4: "How do you feel after taking a nap?"
    }
  },
  question133: {
    questionTopic: "135. Home country",
    questions: {
      ques1: "Which part of your country do you like to live in?",
      ques2: "What makes you feel proud of your country?",
      ques3: "Do you know the history of your country well?",
      ques4: "Will you stay in India in the future?"
    }
  },
  question134: {
    questionTopic: "136. Window View",
    questions: {
      ques1: "What scenery can you see from the window of your room?",
      ques2: "Do you like to watch the scenery from your window?",
      ques3: "Do you want to live in a house with beautiful window views?",
      ques4: "How do you feel when you can’t see any beautiful view from your window?"
    }
  },
  question135: {
    questionTopic: "137. Reading",
    questions: {
      ques1: "Do you like reading?",
      ques2: "Do you like to read at home or in other places?",
      ques3: "In what places do you think it is difficult to read?",
      ques4: "Do you like to read by yourself or with other people?"
    }
  },
  question136: {
    questionTopic: "138. Getting Up Early",
    questions: {
      ques1: "Do you often get up early in the morning?",
      ques2: "What do you usually do when you get up early?",
      ques3: "Do you get up early on weekends?",
      ques4: "Which morning do you like the best in a week?"
    }
  },
  question137: {
    questionTopic: "139. New Activities",
    questions: {
      ques1: "Do you like to try new activities? Why?",
      ques2: "What activities would you like to try?",
      ques3: "What activities did you do when you were a child?",
      ques4: "Do you like to try new activities alone or with friends?"
    }
  },
  question138: {
    questionTopic: "140. Clothes and Fashion",
    questions: {
      ques1: "Are you very interested in fashion and clothes?",
      ques2: "Do you have lot of nice clothes?",
      ques3: "What kind(s) of clothes do you usually wear?",
      ques4: "Would you say clothes are expensive in your country?",
      ques5: "Do you like to wear fashionable clothes?",
      ques6: "Is there anything that you used to wear in past that you don’t wear now?",
      ques7: "How often do you go for shopping for clothes?",
      ques8: "Do you like shopping for clothes?",
      ques9: "How often do you buy clothes online?",
      ques10: "Do you plan to buy any designer (or, name brand) clothes?"
    }
  },
  question139: {
    questionTopic: "141. Text Messaging",
    questions: {
      ques1: "Do you like texting?",
      ques2: "Do you prefer sending or receiving messages?",
      ques3: "Have you ever received a confusing text message?",
      ques4: "In what circumstances is making a phone call better than sending a text message?"
    }
  },
  question140: {
    questionTopic: "142. Recycle",
    questions: {
      ques1: "Do you recycle? Why?",
      ques2: "Did you recycle when you were a kid?",
      ques3: "Will you recycle in the future?",
      ques4: "What kind of things do you recycle?"
    }
  },
  question141: {
    questionTopic: "143. Picnic",
    questions: {
      ques1: "Did you go on a picnic when you were a child?",
      ques2: "How often do you go on a picnic now?",
      ques3: "Where do you go on a picnic?",
      ques4: "What is the difference between a picnic and cooking at home?"
    }
  },
  question142: {
    questionTopic: "144. List",
    questions: {
      ques1: "Do you make a list when you shop?",
      ques2: "Do you make a list for your work or study? (Does it work?)",
      ques3: "Why don’t some people like making lists?",
      ques4: "Do you prefer to make a list on paper or your phone?"
    }
  },
  question143: {
    questionTopic: "145. Meeting New People",
    questions: {
      ques1: "Do you like meeting new people?",
      ques2: "How do you feel when people welcome you?",
      ques3: "Do you often meet new people?",
      ques4: "Can you tell if you like someone when you meet them for the first time? Why?"
    }
  },
  question144: {
    questionTopic: "146. Discussion",
    questions: {
      ques1: "What do you like to talk about?",
      ques2: "Have your discussion topics changed since you were a child?",
      ques3: "Do you change your opinion frequently?",
      ques4: "Do you prefer to talk or listen?"
    }
  },
  question145: {
    questionTopic: "147. Tidiness",
    questions: {
      ques1: "Are you a tidy person?",
      ques2: "How do you keep things tidy?",
      ques3: "Do you think people should be tidy all the time?",
      ques4: "Are you tidier at work(school) or home?"
    }
  },
  question146: {
    questionTopic: "148. Jokes and Comedies",
    questions: {
      ques1: "Are you good at telling jokes?",
      ques2: "Do your friends like to tell jokes?",
      ques3: "Do you like to watch comedies?",
      ques4: "Have you ever watched a live show?"
    }
  },
  question147: {
    questionTopic: "149. Shopping",
    questions: {
      ques1: "Do you like shopping?",
      ques2: "Do you compare prices when you shop?",
      ques3: "Is it difficult for you to make choices when you shop?"
    }
  },
  question148: {
    questionTopic: "150. Newspaper & Magazine",
    questions: {
      ques1: "Do you prefer to read newspaper or magazine?",
      ques2: "Do you prefer to read the news online or on a printed newspaper?"
    }
  },
  question149: {
    questionTopic: "151. Insects",
    questions: {
      ques1: "Do you like insects?",
      ques2: "Are there many different insects where you live?",
      ques3: "Do you think insects are useful?"
    }
  },
  question150: {
    questionTopic: "152. Age",
    questions: {
      ques1: "What do you think is the best age to learn driving?",
      ques2: "How do you feel about getting older?",
      ques3: "Should we treat people of different ages in the same way?"
    }
  },
  question151: {
    questionTopic: "153. Market",
    questions: {
      ques1: "What do street markets sell?",
      ques2: "Are there many street markets in your country?",
      ques3: "What are the differences between street markets and supermarkets?",
      ques4: "Do you often go to the supermarket?"
    }
  },
  question152: {
    questionTopic: "154. History",
    questions: {
      ques1: "Have you ever been to museum to learn history?",
      ques2: "Do you think history is important?",
      ques3: "When was the last time you read a book about history?"
    }
  },
  question153: {
    questionTopic: "155. Mathematics",
    questions: {
      ques1: "When did you start learning math?",
      ques2: "Do you like math?",
      ques3: "Who taught you math?",
      ques4: "Who's your favorite teacher so far?",
      ques5: "Is math difficult for you to learn?",
      ques6: "Do you like to use a calculator?",
      ques7: "Do students learn math in secondary schools in India?",
      ques8: "Do you think math is difficult?",
      ques9: "What can people do with math in their daily life?",
      ques10: "Do you learn math now? Why or Why not?"
    }
  },
  question154: {
    questionTopic: "156. Water Sport",
    questions: {
      ques1: "Have you done water sports?",
      ques2: "What water sports you like doing?",
      ques3: "Are water sports popular in India?",
      ques4: "What kind of water sports do you want to try?"
    }
  },
  question155: {
    questionTopic: "157. Scenery",
    questions: {
      ques1: "Is there good scenery in your hometown or does your hometown have a lot of scenic views?",
      ques2: "When you travel, do you like to live in hotels with good scenic views?",
      ques3: "Do you like to take pictures of good scenic views with your smartphone? Why?",
      ques4: "Is there good scenery in cities?"
    }
  },
  question156: {
    questionTopic: "158. Break",
    questions: {
      ques1: "Do you prefer a long break or several short breaks?",
      ques2: "What do you usually do during a break?",
      ques3: "Why do you need to take a break?",
      ques4: "How often do you take a break?"
    }
  },
  question157: {
    questionTopic: "159. Haircut",
    questions: {
      ques1: "How often do you have a haircut?",
      ques2: "How long have you had your current haircut?",
      ques3: "Have you ever had an unhappy haircut experience?",
      ques4: "Do you like to have your hair cut?"
    }
  },
  question158: {
    questionTopic: "160. Area you live in",
    questions: {
      ques1: "Do you like the area you live in?",
      ques2: "What are some changes in the area recently?",
      ques3: "Do you know any famous people in your area?",
      ques4: "Where do you like to go in that area?"
    }
  },
  question159: {
    questionTopic: "161. Voice",
    questions: {
      ques1: "Has your voice ever changed?",
      ques2: "Is your voice similar to your parents?",
      ques3: "Do you like your voice?",
      ques4: "Is your voice different from when you were young?",
      ques5: "Do you like to record your voice?",
      ques6: "Does anyone in your family have a similar voice?"
    }
  },
  question160: {
    questionTopic: "162. Smile",
    questions: {
      ques1: "Do you always smile?",
      ques2: "Do you like smiling?",
      ques3: "Should people smile more?",
      ques4: "Do you smile while taking photos?",
      ques5: "When do people smile at others?",
      ques6: "Can you recognise a fake smile?"
    }
  },
  question161: {
    questionTopic: "163. Jeans",
    questions: {
      ques1: "Do you wear jeans?",
      ques2: "How often do you wear jeans?",
      ques3: "Do you like wearing jeans, why?",
      ques4: "Why do you think jeans are popular?"
    }
  },
  question162: {
    questionTopic: "164. Walking",
    questions: {
      ques1: "Do you walk a lot?",
      ques2: "Do you walk more than in the past?",
      ques3: "Where do you usually take a walk?",
      ques4: "Do you think people will walk more in the future?"
    }
  },
  question163: {
    questionTopic: "165. Plan",
    questions: {
      ques1: "Do you make plans everyday?",
      ques2: "Are you good at managing your time?",
      ques3: "What is the latest plan you made?",
      ques4: "What is the hardest part about making plans?"
    }
  },
  question164: {
    questionTopic: "166. Festival",
    questions: {
      ques1: "What is your favorite festival?",
      ques2: "How do you celebrate this festival?",
      ques3: "What is the most popular Indian festival?",
      ques4: "Do you like Western festivals?",
      ques5: "How do you celebrate festivals in your country?"
    }
  },
  question165: {
    questionTopic: "167. Island",
    questions: {
      ques1: "Have you ever been to any island?",
      ques2: "Are there any islands in your country?",
      ques3: "Do you want to live on an island?",
      ques4: "What would you like to do if you go to any island?"
    }
  },
  question166: {
    questionTopic: "168. Driving",
    questions: {
      ques1: "Do you drive often?",
      ques2: "Do you want your children to drive in future?",
      ques3: "Do you have a driver’s licence?",
      ques4: "At what age are people allowed to drive in your country?",
      ques5: "Do you think it's difficult to drive a car?"
    }
  },
  question167: {
    questionTopic: "169. Sky",
    questions: {
      ques1: "Do you like to see the sky?",
      ques2: "How about stars?",
      ques3: "Which is a good place to see the stars?",
      ques4: "Do you know something about stars?",
      ques5: "How often do you look at the sky?",
      ques6: "Do you prefer the sky in the morning or the sky at night?",
      ques7: "Can you see the moon and stars at night where you live?",
      ques8: "Is there a good place to look at the sky where you live?",
      ques9: "Do you want to live on other planets?"
    }
  },
  question168: {
    questionTopic: "170. Sharing",
    questions: {
      ques1: "Did you share anything with others recently?",
      ques2: "Did your parents teach you to share when you were a child?",
      ques3: "What kind of things do you like to share with others?",
      ques4: "What kind of things are not suitable for sharing?"
    }
  },
  question169: {
    questionTopic: "171. Patience",
    questions: {
      ques1: "Were you patient when you were young?",
      ques2: "How do you feel when other people are not patient?",
      ques3: "Are you less or more patient when you are angry?"
    }
  },
  question170: {
    questionTopic: "172. Sunglasses",
    questions: {
      ques1: "Do you have a pair of sunglasses?",
      ques2: "How often do you wear them?",
      ques3: "Have you ever lost sunglasses?",
      ques4: "Do people in your country wear sunglasses?"
    }
  },
  question171: {
    questionTopic: "173. Drinking water",
    questions: {
      ques1: "Do you think we should drink a lot of water?",
      ques2: "How often do you drink water?",
      ques3: "Do you drink bottled water or water from machines?",
      ques4: "What kind of water do you like to drink?"
    }
  },
  question172: {
    questionTopic: "174. Maps",
    questions: {
      ques1: "Do you often use maps?",
      ques2: "Who taught you how to use a map?",
      ques3: "Do you prefer electronic maps or paper maps?"
    }
  },
  question173: {
    questionTopic: "175. Foreign Food",
    questions: {
      ques1: "Have you ever tried foreign food?",
      ques2: "Do you like to try new food?",
      ques3: "What kind of new food have you tried recently?",
      ques4: "What kind of foreign foods are popular in your country?"
    }
  },
  question174: {
    questionTopic: "176. Saving Money",
    questions: {
      ques1: "Did you save money when you were young?",
      ques2: "Have you ever given money to other children?",
      ques3: "Do you think parents should teach children to save money?",
      ques4: "Do parents give pocket money to children in your country?"
    }
  },
  question175: {
    questionTopic: "177. Physical Exercise",
    questions: {
      ques1: "What kind of exercises do you do?",
      ques2: "Do you think children should play sports regularly?",
      ques3: "What was your favourite sport when you were young?",
      ques4: "Do you like extreme sports?",
      ques5: "What kind of exercises are popular in your country?"
    }
  },
  question176: {
    questionTopic: "178. Travel (Space Travel)",
    questions: {
      ques1: "Do you want to travel in outer space?",
      ques2: "What would you do if you had the opportunity?",
      ques3: "Do you think it’s necessary to see other planets?",
      ques4: "When was the last time you went traveling?",
      ques5: "Do you like to travel by air?"
    }
  },
  question177: {
    questionTopic: "179. Dream Job",
    questions: {
      ques1: "What was the dream job for you when you were young?",
      ques2: "Have you changed your mind on your dream job?",
      ques3: "What do you plan to do in the future?",
      ques4: "What kinds of jobs are popular in your country?",
      ques5: "Have you had a full-time or part-time job before?"
    }
  },
  question178: {
    questionTopic: "180. Animals",
    questions: {
      ques1: "Do you like animals?",
      ques2: "What's your favourite animal? (Why?)",
      ques3: "What's your favourite wild animal? (Why?)",
      ques4: "Are people in your country fond of animals?",
      ques5: "Do many people in your country keep animals at home (or, keep a pet)? OR Do people in your country like to raise animals?",
      ques6: "What kinds of animals do people in your country (or, hometown) keep? OR What kinds of pets do the people have in your hometown?",
      ques7: "Compared with the past, have there been any changes concerning pets in your country/hometown?",
      ques8: "Do you think pets are important?",
      ques9: "Do you think cities are suitable places for keeping a pet?",
      ques10: "What farm animals do you have in your country?",
      ques11: "Do you think farm animals are important?",
      ques12: "How are these animals used? OR In what ways are animals used in agriculture in your country?",
      ques13: "Do you think raising farm animals is important?"
    }
  },
  question179: {
    questionTopic: "181. Dictionary",
    questions: {
      ques1: "Do you often use a dictionary? If yes, how often and what for? If no, why not? If not very often, say how often and why not very often?",
      ques2: "Do you prefer to use an electronic dictionary or a dictionary made of paper?",
      ques3: "If someone gave you a dictionary as a gift, how would you feel?",
      ques4: "Do you think it would be interesting to write a dictionary? OR Do you think it would be interesting to be part of a team that is writing a dictionary?",
      ques5: "What kind of person do you think writes a dictionary?"
    }
  },
  question180: {
    questionTopic: "182. Mobile Apps",
    questions: {
      ques1: "Which mobile apps do you use?",
      ques2: "Which ones do you want to use?",
      ques3: "Which ones are popular in your country?",
      ques4: "Do you want to make an app?"
    }
  },
  question181: {
    questionTopic: "183. Sleep",
    questions: {
      ques1: "How many hours do you sleep everyday?",
      ques2: "Is it necessary to take a nap everyday?",
      ques3: "Do old people sleep a lot? Why?",
      ques4: "What time do you usually go to bed?",
      ques5: "Do you always have a good sleep?"
    }
  },
  question182: {
    questionTopic: "184. Handwriting",
    questions: {
      ques1: "Do you think handwriting is still important?",
      ques2: "Do you think computers might one day replace handwriting?",
      ques3: "Do you usually write by hand or write using a computer?",
      ques4: "When do children begin to write in your country?",
      ques5: "Do you think handwriting will die in the future?",
      ques6: "Do you write letters?",
      ques7: "Do you think children should be taught to write like in the old days?"
    }
  },
  question183: {
    questionTopic: "185. Visitors",
    questions: {
      ques1: "Do you often invite friends to visit your home?",
      ques2: "Do you like visitors coming to your home?",
      ques3: "Do people often visit you at your home?",
      ques4: "How often do visitors come to your home?",
      ques5: "When do visitors come to your home?",
      ques6: "Do you prefer to have friends visit you, or relatives?",
      ques7: "What do you usually do together with your visitors?",
      ques8: "When someone visits you, how do you usually show hospitality (or, entertain them)?"
    }
  },
  question184: {
    questionTopic: "186. Family",
    questions: {
      ques1: "How often do you meet with your family?",
      ques2: "How do you spend the time with your family?",
      ques3: "Do you want to live with your family in the future?",
      ques4: "Are you close to all of your family members?",
      ques5: "How has your family influenced you?"
    }
  },
  question185: {
    questionTopic: "187. Friends",
    questions: {
      ques1: "Do you have many friends?",
      ques2: "How often do you talk to your friends?",
      ques3: "How do you communicate with your friends?",
      ques4: "What do you think makes people have a long friendship?",
      ques5: "Does it make things easier in a friendship if you have similar interests?",
      ques6: "How do people make friends now?",
      ques7: "Do you think we meet new people differently now than in the past?",
      ques8: "Is friendship (= are friends) important to you? (Why?/Why not?)",
      ques9: "Do you prefer to spend time with friends or spend time alone? (Why?)",
      ques10: "What kind of people do you like to have as friends?",
      ques11: "Do you like to spend time with friends? (Why?)",
      ques12: "What do you and your friends do together?",
      ques13: "What do your friends think of you? (Do your friends think that you are a good friend? Why?)",
      ques14: "Are friends more important than family? (Why?)",
      ques15: "How do Indian people make friends? (= where, in what situations, e.g. at school & at work.)",
      ques16: "Do adults and children make friends in the same way?"
    }
  },
  question186: {
    questionTopic: "188. Books",
    questions: {
      ques1: "How often do you read?",
      ques2: "Do you have many books at home?",
      ques3: "Do Indian people do enough reading?",
      ques4: "Do Indian people like to read?",
      ques5: "What kind of people like reading and what kind of people don't like reading very much?",
      ques6: "What type of books children read nowadays?",
      ques7: "Do you think children have lost their interest in stories?",
      ques8: "Can story books be an ideal gift for children?",
      ques9: "What can be done to encourage the habit of reading among children?",
      ques10: "How does reading help a child?",
      ques11: "What sort of books can be suggested to children to read?",
      ques12: "How much should a child read everyday?",
      ques13: "What are the differences between the books sold in the past and the books sold nowadays?"
    }
  },
  question187: {
    questionTopic: "189. Photography",
    questions: {
      ques1: "Do you like to take photographs? (Why?)",
      ques2: "Do you prefer to take photos yourself or to have other people take photos? (Why?)",
      ques3: "How long have you liked taking photographs?",
      ques4: "How (why) did you become interested in photography?",
      ques5: "How often do you take photographs?",
      ques6: "In what situations do you take photographs?",
      ques7: "What kind of photos do you like to take? (Why?)",
      ques8: "Do you prefer to take pictures of people or of scenery?",
      ques9: "Who do you take photos of?",
      ques10: "How do you keep your photos?",
      ques11: "Do you keep your photographs on your computer?",
      ques12: "Are there any photos on the walls of your home?",
      ques13: "Do you frame (or have you framed) any of your photos? (If yes, which? & why?)",
      ques14: "Do you prefer to send postcards to people or to send photos that you took yourself? (Why?)"
    }
  },
  question188: {
    questionTopic: "190. Television and Radio",
    questions: {
      ques1: "What kind of entertainment do you prefer, TV or radio? (Why?)",
      ques2: "How are radio programs and television programs different?",
      ques3: "What programs do you like to watch/listen to?",
      ques4: "When do you watch TV/listen to the radio?",
      ques5: "In India, has television/radio changed much in recent years?",
      ques6: "How do you think TV/radio broadcasts in India could be improved?",
      ques7: "Do you prefer TV news or news on the radio? (Why?)",
      ques8: "Do you watch programs on the TV or your cell phone?",
      ques9: "Do you like watching the same kind of programs all the time?",
      ques10: "Do you talk with your friends about the program you watched?"
    }
  },
  question189: {
    questionTopic: "191. Newspapers",
    questions: {
      ques1: "Do you often read newspapers?",
      ques2: "Which do you prefer reading, magazines or newspapers?",
      ques3: "What kinds of (types of) newspapers (or magazines) do you usually read?",
      ques4: "How old were you when you first started to read newspapers?",
      ques5: "Do you think it's important to read newspapers? (Why?/Why not?)",
      ques6: "Why do (you think) people read newspapers?",
      ques7: "What different types of newspaper are there in India?",
      ques8: "Do you care about the news?",
      ques9: "Is the news important (to you)?",
      ques10: "What kinds of news do Indian people read in newspapers?",
      ques11: "Do you prefer to read about domestic (or local) news or international news? (Why?)",
      ques12: "What are some methods that newspapers use to attract readers?",
      ques13: "What influence do you think newspapers have on society?",
      ques14: "Do you think the Internet is a good way to get news?"
    }
  },
  question190: {
    questionTopic: "192. Robots",
    questions: {
      ques1: "Do you like robots?",
      ques2: "What kind of robot would you like to have?",
      ques3: "Will robots change society significantly?"
    }
  },
  question191: {
    questionTopic: "193. Shoes",
    questions: {
      ques1: "How often do you buy shoes?",
      ques2: "Have you ever bought shoes online?",
      ques3: "Do you know anyone who likes to buy a lot of shoes?",
      ques4: "What's your favourite type of shoes?"
    }
  },
  question192: {
    questionTopic: "194. Forget things",
    questions: {
      ques1: "What kinds of things do you have to bring when you go out?",
      ques2: "Did you ever forget to bring something?",
      ques3: "How do you remind yourself?",
      ques4: "Do you carry different things in the morning and in the evening?"
    }
  },
  question193: {
    questionTopic: "195. Indoor games",
    questions: {
      ques1: "Do you play any indoor games?",
      ques2: "Do you prefer to play indoor games or outdoor games?",
      ques3: "What indoor games did you play when you were a child?",
      ques4: "Is there any particular indoor game that you liked (when you were a child)?",
      ques5: "What sorts of indoor games do children play now?",
      ques6: "Do you play video games?",
      ques7: "What kinds of video games do you like to play?",
      ques8: "Is it good for young people to play video games"
    }
  },
  question194: {
    questionTopic: "196. City Life",
    questions: {
      ques1: "Do you live in the city or the countryside? (countryside = village)",
      ques2: "Is it good for young people to grow up in the city?",
      ques3: "Is your city/village a good place for young people to grow up?",
      ques4: "Have you ever been to the seaside?",
      ques5: "Do you often eat out (go to restaurants)?",
      ques6: "What food do you like?"
    }
  },
  question195: {
    questionTopic: "197. Foreign language",
    questions: {
      ques1: "Why do you think it is important to learn a foreign language?",
      ques2: "How is it helpful to you to speak a foreign language?",
      ques3: "What is the most difficult part of learning a foreign language for you?",
      ques4: "What is the best way to memorize new words?",
      ques5: "Is it better to learn a new word from translation or by definition?",
      ques6: "Why don’t some people know the language of the society they live in?",
      ques7: "What do you think of children learning a foreign language?",
      ques8: "Why are some language classes boring?",
      ques9: "Some students hate to learn foreign languages, what can teachers do to develop their interest?",
      ques10: "Some people travel for learning a foreign language, what do you think?",
      ques11: "What’s the best way to learn a foreign language?",
      ques12: "Why can some people learn languages fast white others learn slowly?",
      ques13: "Does one‟s age affect their language learning?"
    }
  },
  question196: {
    questionTopic: "198. Birds",
    questions: {
      ques1: "How do you feel about birds? (Why do you feel that way?)",
      ques2: "How do Indian people feel about birds?",
      ques3: "Are there many birds near your home?",
      ques4: "Have you seen many different kinds of birds? (near your home)",
      ques5: "Do any birds have any particular significance in India? For example, does India have a national bird?",
      ques6: "Do you think birds should be protected? (Why? / Why not? How can they be protected?)",
      ques7: "Do Indian people like raising (keeping) pet birds?",
      ques8: "Have you ever raised (kept) a pet bird?"
    }
  },
  question197: {
    questionTopic: "199. Boats",
    questions: {
      ques1: "Do you often travel by boat?",
      ques2: "Have you ever been on a boat while you were on holidays (on vacation)?",
      ques3: "Have you ever been on a boat tour while you were on holidays?",
      ques4: "Would you like to go on a boat tour? (Why?/Why not?)",
      ques5: "Would you like to have a holiday on a boat?",
      ques6: "Where in your country do people most often use boats? (or, travel by boat)",
      ques7: "Do many people in your country own their own boat?",
      ques8: "Would you like to buy a boat?",
      ques9: "If you had your own boat, what would you do with it?"
    }
  },
  question198: {
    questionTopic: "200. Relatives",
    questions: {
      ques1: "Do you often visit your relatives?",
      ques2: "What do you do when you visit them?",
      ques3: "Do you prefer to spend time with your relatives, or your friends?",
      ques4: "Do you prefer visiting your relatives, or your friends?",
      ques5: "Who is more important to you, your relatives/family, or your friends?"
    }
  },
  question199: {
    questionTopic: "201. Daily routine",
    questions: {
      ques1: "Do you like to plan what you will do each day? (Why?/Why not?)",
      ques2: "Please describe your typical daily routine.",
      ques3: "What's your favourite time of the day? (Why? What do you do at that time?)",
      ques4: "What do you usually do at this time of day?",
      ques5: "Do you usually do the same things at the same time each day?",
      ques6: "How do you plan (organize) your study time?",
      ques7: "Do you ever (or, do you often) change these plans?"
    }
  },
  question200: {
    questionTopic: "202. Punctuality",
    questions: {
      ques1: "Do you wear a watch? (Do you think everyone should wear a watch?)",
      ques2: "In your country is it important to be on time (= be punctual)? (e.g., for meetings, work, classes)",
      ques3: "Do you like to be on time? (Is being on time important to you?)",
      ques4: "How do you feel when others are late?",
      ques5: "How do you remind yourself to be on time?",
      ques6: "Why are some people always late?",
      ques7: "Do you think it’s important to be punctual?",
      ques8: "What will you do if you are waiting for someone?",
      ques9: "Do you think people these days are as punctual as they were in the past?"
    }
  },
  question201: {
    questionTopic: "203. Birthdays",
    questions: {
      ques1: "How do children celebrate birthdays in your country?",
      ques2: "How did you celebrate your last birthday?",
      ques3: "What kinds of birthday gifts do you like to receive?",
      ques4: "Is there a difference between the way you celebrated your birthday in the past and the present?"
    }
  },
  question202: {
    questionTopic: "204. Computer",
    questions: {
      ques1: "Do you use computer very much?",
      ques2: "When do you use a computer?",
      ques3: "What do you use computer for?",
      ques4: "What was your impression when you used a computer the first time?",
      ques5: "How did you learn to use a computer?",
      ques6: "Have computers changed your life in anyway (if yes, How?)",
      ques7: "Are computers used much in your country?",
      ques8: "Do you think computers are useful in everyday life (how)?",
      ques9: "Computers are now used a lot in education. What do you think of this?",
      ques10: "Do you play computer games?",
      ques11: "Do you think computers are perfect now or do they still need to be improved?"
    }
  },
  question203: {
    questionTopic: "205. Being in a hurry",
    questions: {
      ques1: "When was the last time you did something in a hurry?",
      ques2: "Do you like to finish things quickly?",
      ques3: "What kind of things you would never do in a hurry?",
      ques4: "Why do people make mistakes more easily when they are in a hurry?"
    }
  },
  question204: {
    questionTopic: "206. Museums",
    questions: {
      ques1: "Are there many (or any) museums in your hometown?",
      ques2: "Do you think museums are useful for visitors to your hometown/country?",
      ques3: "Do you often visit a museum?",
      ques4: "Did you go to any museums when you were a child?",
      ques5: "When was the last time you visited a museum?",
      ques6: "Do you think museums are important?",
      ques7: "Do you think it’s suitable for museums to sell things to visitors?"
    }
  },
  question205: {
    questionTopic: "207. Dance",
    questions: {
      ques1: "When was the last time you went to a place where people go to dance in your country?",
      ques2: "When was the last occasion when you danced a lot?",
      ques3: "Do you like dancing?",
      ques4: "Have you ever learnt dancing? Why? / Why not?",
      ques5: "Did you learn to dance? Why? / Why not?",
      ques6: "Why do you think people love to dance?",
      ques7: "Do you think children love to dance?",
      ques8: "Do you see dance on TV?"
    }
  },
  question206: {
    questionTopic: "208. Hats",
    questions: {
      ques1: "Do you like to wear hats?",
      ques2: "What kinds of hats do you have?",
      ques3: "Where do you like to buy hats?",
      ques4: "Is wearing hats popular in your country?"
    }
  },
  question207: {
    questionTopic: "209. Bus or Taxi",
    questions: {
      ques1: "How often do you take the bus?",
      ques2: "When was the first time you took a taxi?",
      ques3: "What are the advantages of taking a taxi compared with buses?",
      ques4: "Is it convenient to take the bus/taxi in your city?"
    }
  },
  question208: {
    questionTopic: "210. Mobile phones",
    questions: {
      ques1: "How often do you use your mobile phone?",
      ques2: "Can you describe your mobile phone?",
      ques3: "What was your first mobile phone?",
      ques4: "Would you buy a new one in the future?",
      ques5: "How has your mobile phone changed your life?"
    }
  },
  question209: {
    questionTopic: "211. HISTORY",
    questions: {
      ques1: "Do you like (to learn about) history?",
      ques2: "What historical event do you find most interesting?",
      ques3: "Do you think history is important?",
      ques4: "Do you like to watch programmes on TV about history?",
      ques5: "Do you think you can really learn history from films and TV programmes?",
      ques6: "Do you think the Internet is a good place to learn about history?",
      ques7: "Can you name a person from history whom you would like to learn more about?",
      ques8: "Why would you like to learn more about him/her?"
    }
  },
  question210: {
    questionTopic: "212. Magazine",
    questions: {
      ques1: "Do you read magazines?",
      ques2: "Who prefers to read magazines – younger or older people?",
      ques3: "Have you ever read online magazines?",
      ques4: "Did you read magazines when you were young?",
      ques5: "What kind of magazines are popular in your country?"
    }
  },
  question211: {
    questionTopic: "213. Neighbor",
    questions: {
      ques1: "Do you know your neighbors?",
      ques2: "Do you like your neighbors?",
      ques3: "Why are neighbors important?",
      ques4: "When do you meet your neighbors?",
      ques5: "How often do you meet your neighbors?"
    }
  },
  question212: {
    questionTopic: "214. Pop star",
    questions: {
      ques1: "Who’s your favorite pop star?",
      ques2: "Do you want to be a pop star?",
      ques3: "Do you like to go to concerts?",
      ques4: "Do you prefer live music or recorded music?"
    }
  },
  question213: {
    questionTopic: "215. Teenagers",
    questions: {
      ques1: "Do you like to spend time with teenagers?",
      ques2: "Do you know anything about the kind of fashion that teenagers like?",
      ques3: "What are the best things of being a teenager?",
      ques4: "How do teenagers entertain themselves?"
    }
  },
  question214: {
    questionTopic: "216. Social Network",
    questions: {
      ques1: "What kind of social networking websites do you like to use?",
      ques2: "Are you a social person?",
      ques3: "What kinds of people do you like to be friends with on those websites?",
      ques4: "Is it easy to find real friends on a social networking website?",
      ques5: "What kind of chatting app or software do Indian people like to use?"
    }
  },
  question215: {
    questionTopic: "217. POLITENESS",
    questions: {
      ques1: "Who teaches you to be polite?",
      ques2: "How do Indian people show politeness?",
      ques3: "Has the way people show politeness changed in India?",
      ques4: "Are you angry with people who are late?",
      ques5: "Do you think that people have less free time today than in the past? Why?",
      ques6: "Do you think that the quality of living is increasing? How?",
      ques7: "Today people use machinery to automate everything, is it good or bad?",
      ques8: "How does modern technology help to save time?",
      ques9: "Do you agree that people should let machinery do everything?"
    }
  },
  question216: {
    questionTopic: "218. TIME MANAGEMENT",
    questions: {
      ques1: "Are you ever late for anything?",
      ques2: "What excuses do you use when you are late?",
      ques3: "What excuses do people have when they are late?",
      ques4: "Are you good at organizing time?",
      ques5: "How do you usually organize time?",
      ques6: "Do you think planning is important for time management?",
      ques7: "Why do you think some people pay to learn time management?",
      ques8: "Do you think children should learn to manage time?",
      ques9: "Why do some people find it hard to follow their plans?",
      ques10: "How would you teach your children time management?",
      ques11: "Do old people and young people manage time in a similar way?"
    }
  },
  question217: {
    questionTopic: "219. FRUITS AND VEGETABLES",
    questions: {
      ques1: "Do you like fruits and vegetables? OR Do you like to eat fruit(s) and vegetables?",
      ques2: "How often do you eat fruits and vegetables? OR Do you often eat fruit(s) and vegetables?",
      ques3: "Why do you think fruits and vegetables are important for us?",
      ques4: "What kind of fruit do you prefer?",
      ques5: "What fruit(s) (and /or vegetables) do you especially like to eat?",
      ques6: "Do you like the same fruits and vegetables today as you did when you were a child?",
      ques7: "What fruit and vegetables did you like to eat when you were a child?",
      ques8: "Is it easy (or, convenient) to buy fruit and vegetables where you live?",
      ques9: "Do you think people should eat more fruits and vegetables?",
      ques10: "Do you think it's (really) necessary to eat fruits and vegetables? OR How important is it to eat fruit and vegetables? OR What are the benefits of eating fresh fruit (or, fresh fruits and vegetables)?",
      ques11: "How much fruit and vegetables do you think a person needs to stay healthy?"
    }
  },
  question218: {
    questionTopic: "220. High school",
    questions: {
      ques1: "Are you still in contact with your friends from high school?",
      ques2: "What is your high school like? (Give a brief description of your school – describe building(s), garden, playground and other facilities)",
      ques3: "What happened on the first day of high school?",
      ques4: "Did your parents choose your secondary school (= high school) for you?",
      ques5: "What subjects did you study in secondary school (= high school)?",
      ques6: "What was your favourite subject (= class) in secondary school? (= high school)",
      ques7: "And which class (= subject) did you like the least? (Why?)",
      ques8: "Which secondary school subject do you think is most useful for people in adult life?",
      ques9: "What part of your secondary school education did you enjoy most? OR Did (do) you like your secondary school life?",
      ques10: "How do you feel about your high school (secondary school)?",
      ques11: "Why did you choose to attend (= to go to) that particular school?",
      ques12: "Which class did (do) you enjoy the most? (Why?)"
    }
  },
  question219: {
    questionTopic: "221. Emails",
    questions: {
      ques1: "Do you often write (or, send) emails?",
      ques2: "What do you write about?",
      ques3: "Do you think emails are useful?",
      ques4: "What kinds of emails do you send and receive?",
      ques5: "Do you think it is a good thing that some companies send out letters/spam emails for the purpose of advertising?",
      ques6: "How often do you write letters?",
      ques7: "What do you write about?",
      ques8: "On what occasions do you write letters?",
      ques9: "Do you like writing letters to your relatives and friends? (why/why not?)",
      ques10: "Do you and your friend keep in touch by (handwritten) letter?",
      ques11: "How do you keep in touch with your friends and relatives (by email, letter, by phone or by any other way)?"
    }
  },
  question220: {
    questionTopic: "222. RAINY DAYS",
    questions: {
      ques1: "Does it rain much in India? (Where? When?)",
      ques2: "Does it rain much in your hometown? (Include how often)",
      ques3: "In what season does it rain the most? OR When (in what month/season) does it rain most in your hometown?",
      ques4: "What about the other parts of India? OR In which season does it rain most in other parts of India?",
      ques5: "Would you prefer to have, more rain or less rain (in your hometown)?",
      ques6: "Do you like rainy days? OR How do you feel on rainy days? OR Do you feel sad on rainy days?",
      ques7: "How does rain affect different people’s moods? OR How does rain affect people's lives?",
      ques8: "Do you prefer rainy days or sunny days?",
      ques9: "What do you do on rainy days (or, on a rainy day)?",
      ques10: "What do you usually do when it rains (or, when it starts to rain) and you are outside?",
      ques11: "Do you think rain is good? (Why?)",
      ques12: "How does rain affect (life in) your country?",
      ques13: "Is there any part of India where it doesn't rain much? (Where?) OR Is there an even distribution of rain throughout India?",
      ques14: "What effects can a shortage of rain (a drought) have on people's lives?",
      ques15: "Can you remember any time when it rained particularly heavily in your hometown? (When?)",
      ques16: "Does rain ever affect transportation in your hometown? (How?)",
      ques17: "Do you think the seasons have changed in recent years, compared to the past? (Why? How?)"
    }
  }
}



function Part1() {

  const [questionTopic, setQuestionTopic] = useState("");
  const [questions, setQuestions] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [part1QuestionsArray, setPart1QuestionsArray] = useState([]);
  const [randomMode, setRandomMode] = useState(() => {
    const storedMode = localStorage.getItem("randomMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });
  const [showQuestions, setShowQuestions] = useState(() => {
    const storedQuestionsMode = localStorage.getItem("showQuestions");
    return storedQuestionsMode ? JSON.parse(storedQuestionsMode) : false;
  });
  const [questionNo, setQuestionNo] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [animationClass, setAnimationClass] = useState("");


  const allKeys = Object.keys(part1questions);


  const updateQuestion = (index) => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      let questionData = part1questions[allKeys[index]];
      setQuestionNo(index + 1);
      setQuestionTopic(questionData.questionTopic);
      setPart1QuestionsArray(Object.values(questionData.questions));
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

  const handleSearch = () => {
    const searchIndex = parseInt(searchQuery) - 3;
    if (!isNaN(searchIndex) && searchIndex >= 0 && searchIndex < allKeys.length) {
      updateQuestion(searchIndex);
    } else {
      alert("Please select from 3 to 222.");
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

  const handleRandomModeToggle = () => {
    setRandomMode((prevState) => !prevState);
  };

  const handleShowQuestionsModeToggle = () => {
    setShowQuestions((prevState) => !prevState);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
  };

  const showAlert = () => {
    alert("Questions are from Makkar Sep-Dec 2024 Final Version.\n\nSend your valuable feedback or suggestions to\ncontact.utsavbpatel@gmail.com\n\nIELTS Question Asker - A Project By Utsav B. Patel");
};
  const handleClick = (index) => {
    setActiveIndex(index);
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
              Random
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
          <div className={`question-container ${animationClass}`}>
            <div>
              <input
                type="checkbox"
                name="show-questions"
                checked={showQuestions}
                onChange={handleShowQuestionsModeToggle}
                className="checkbox-select"
              />
              Show Questions
            </div>
            <p className="bold-text2">{questionTopic}</p>
            <ul className="questions-list">
              {part1QuestionsArray.map((question, index) => (
                <li
                  key={index}
                  className={`question-list-box ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  <div className="question-data-box">
                    {index + 1}. {showQuestions && question}
                  </div>
                  <div
                    className="speak-icon-container"
                    onClick={() => speakText(`${question}`)}
                    style={{ pointerEvents: isSpeaking ? "none" : "auto" }}
                  >
                    <i className="fa-solid fa-volume-high"></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
        {randomMode && (
          <button onClick={randomQuestionGenerator}>
            Ask Me?
          </button>
        )}
      </div>
    </div>
  );
}

export default Part1;