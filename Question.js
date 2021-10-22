class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
    this.prompt =  createElement("h3");
    this.prompt2 = createElement("h2"); 
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    //this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- A Kangaroo Rat Can Live How many Days Without Drinking Water? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1: 27 Years " );
    this.option1.position(150, 100);
    this.option2.html("2: 52 Years " );
    this.option2.position(150, 120);
    this.option3.html("3: 78 Years " );
    this.option3.position(150, 140);
    this.option4.html("4: 100 Years " );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    
    this.button.mousePressed(()=>{
      
      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(310);

       //this.message("Thank You, Your Answer Has Been Submitted");
       //this.message(350, 350);

       this.message.html("[Thank You,Your Answer Has Been Submitted.]");
       this.message.position(210,360);

       
      this.prompt.html(":- A Kangaroo Rat Can Live 100 Years Without Water Or SomeTimes They don't Need Water To Drink Because They Get It From Thier Meal.");
      this.prompt.position(30,330);

      var soy = this.input1.value();
      var soy2 = this.input2.value();

      //image(this.image,100,50);

      if(soy2=="4"){
        this.prompt2.html("YEAH!!!! " +soy+ " YOUR ANSWER IS CORRECT");
        this.prompt2.position(100,252);
      }


      if(soy2=="1"){
        this.prompt2.html("OOPS!! " +soy+ " YOUR ANSWER IS INCORRECT");
        this.prompt2.position(100,252);
      }

      if(soy2=="2"){
        this.prompt2.html("OOPS!! " +soy+ " YOUR ANSWER IS INCORRECT");
        this.prompt2.position(100,252);
      }

      if(soy2=="3"){
        this.prompt2.html("OOPS!! " +soy+ " YOUR ANSWER IS INCORRECT");
        this.prompt2.position(100,252);
      }

      
    });
   
  }
}
