import { Injectable } from '@angular/core';

export interface Question {
  id: number;
  description: string;
  isIndicativeOfMonotropism: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  QUESTIONS: Question[] = [
    {
      id: 1,
      description:
        'After a period of instability, I need a quiet and predictable environment.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 2,
      description:
        'I need a quiet and predictable environment for me to switch from one task to another easily.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 3,
      description:
        'I often struggle to concentrate in busy and/or unpredictable environments.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 4,
      description:
        'I find sudden unexpected disruptions to my attention startling.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 5,
      description:
        "It's distressing to be unexpectedly pulled away from something I'm engaged in.",
      isIndicativeOfMonotropism: true,
    },
    {
      id: 6,
      description:
        'I rarely find simultaneously holding eye contact and making a verbal conversation with another person uncomfortable.',
      isIndicativeOfMonotropism: false,
    },
    {
      id: 7,
      description: 'I often notice details that others do not.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 8,
      description:
        'Involvement in an activity of interest often reduces my anxiety level.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 9,
      description:
        'I find social interactions more comfortable if communicating about a topic of interest to me.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 10,
      description:
        'I am often totally focused on activities I am passionate about, to the point I am unaware of other events.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 11,
      description:
        "I can get quite good at something even if I'm not especially interested in it.",
      isIndicativeOfMonotropism: false,
    },
    {
      id: 12,
      description:
        'I often lose sense of time when engaging in activities I am passionate about.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 13,
      description:
        'I sometimes avoid talking because I cannot reliably predict how others will react, especially strangers.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 14,
      description:
        'I tend to do activities because I find them interesting, instead of due to societal expectations.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 15,
      description: 'I rarely find social situations chaotic.',
      isIndicativeOfMonotropism: false,
    },
    {
      id: 16,
      description:
        "I don't mind if someone interrupts me when I'm in the middle of an activity.",
      isIndicativeOfMonotropism: false,
    },
    {
      id: 17,
      description:
        "When I'm working on something, I'm open to helpful suggestions.",
      isIndicativeOfMonotropism: false,
    },
    {
      id: 18,
      description:
        'I often find it difficult to switch topics after engaging in an activity for a long time.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 19,
      description:
        'I often engage in activities I am passionate about to escape from anxiety.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 20,
      description:
        'Routines provide an important source of stability and safety.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 21,
      description: 'I manage uncertainty by creating routines.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 22,
      description:
        'I often experience anxiety over matters I have little certainty over.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 23,
      description:
        'I find it difficult to engage in a task of no interest to me even if it is important.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 24,
      description:
        'I often find engaging in stimming (e.g., fidgeting, rocking) to be relaxing.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 25,
      description:
        'I am usually passionate about a few topics at any one time in my life.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 26,
      description:
        "I have trouble filtering out sounds when I am not doing something I'm focused on.",
      isIndicativeOfMonotropism: true,
    },
    {
      id: 27,
      description: 'I usually mean what I say and no more than that.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 28,
      description:
        'I often engage in lengthy discussions on topics I find interesting even though my conversational partner(s) do not.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 29,
      description:
        'I sometimes accidentally say something others find offensive/ rude when I am focused on a task.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 30,
      description:
        'I can sometimes be very distressed by a topic that others think of as trivial.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 31,
      description:
        'I find it easy to keep up with group discussions where everyone is speaking.',
      isIndicativeOfMonotropism: false,
    },
    {
      id: 32,
      description:
        'Often when I am focused on activities, I do not notice I am thirsty or hungry.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 33,
      description:
        'Often when I am focused on activities, I do not notice I need the bathroom.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 34,
      description:
        'When there is a lot of information to consider, I often struggle to make a decision.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 35,
      description:
        'Sometimes making a decision is so hard I get physically stuck.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 36,
      description:
        'I sometimes focus on an incident for a substantial time (days) after the event.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 37,
      description:
        'I sometimes become highly anxious by focusing on the many possible situations that might occur at a future event.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 38,
      description:
        'Sometimes when I am focused on an activity, I do not recall all the information I might need to make good decisions.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 39,
      description: 'People tell me I get fixated on things.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 40,
      description:
        "I find a problem I can't solve distressing and/or hard to put down.",
      isIndicativeOfMonotropism: true,
    },
    {
      id: 41,
      description:
        "I tend to feel quite self-conscious unless I'm deeply absorbed in a task.",
      isIndicativeOfMonotropism: true,
    },
    {
      id: 42,
      description:
        'I often get stuck thinking about all the possibilities that might come out of a decision.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 43,
      description:
        'When I am interested in something, I tend to be passionate about it.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 44,
      description:
        'When I am interested in a topic, I like to learn everything I can about that topic.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 45,
      description:
        'I am still fascinated by many of the things I was interested in when I was much younger.',
      isIndicativeOfMonotropism: true,
    },
    {
      id: 46,
      description: 'I rarely find myself getting stuck in loops of thought.',
      isIndicativeOfMonotropism: false,
    },
    {
      id: 47,
      description: 'I often loop back to previous thoughts.',
      isIndicativeOfMonotropism: true,
    },
  ];

  getQuestions(): Question[] {
    return this.QUESTIONS;
  }
}
