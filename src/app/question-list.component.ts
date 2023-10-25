import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  form!: FormGroup;
  isSubmitted: boolean = false;
  average: number = 0;
  score: number = 0;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionsService
  ) {}

  ngOnInit(): void {
    const questions = this.questionService.getQuestions();
    this.form = this.fb.group({
      questions: this.fb.array(
        questions.map((q) =>
          this.fb.group({
            questionId: q.id,
            description: q.description,
            response: ['0'],
          })
        )
      ),
    });
  }

  get questionsArray() {
    return this.form?.get('questions') as FormArray;
  }

  calculateScore(): void {
    const responses = this.questionsArray.value;
    for (const response of responses) {
      const questionId = response.questionId;
      const answerValue = Number(response.response);
      const question = this.questionService.QUESTIONS.find(
        (q) => q.id === questionId
      );

      if (question?.isIndicativeOfMonotropism) {
        this.score += answerValue;
      } else if (!question?.isIndicativeOfMonotropism && answerValue != 0) {
        this.score += 6 - answerValue;
      }
    }
  }

  calculateAverage(): void {
    let answerValueList = [];

    const responses = this.questionsArray.value;
    for (const response of responses) {
      const answerValue = Number(response.response);
      if (answerValue != 0) {
        answerValueList.push(answerValue);
      }
    }
    console.log(answerValueList);
    const sum = answerValueList.reduce((acc, num) => acc + num, 0);
    console.log(sum);
    this.average = sum / answerValueList.length;
    console.log(this.average);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.calculateScore();
    this.calculateAverage();
  }
}
