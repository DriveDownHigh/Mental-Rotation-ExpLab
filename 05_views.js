// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Mental Rotation Experiment',
  text: `Welcome to our Mental Rotation Experiment.
            <br />
            <br />
            Mental Rotation means that you rotate an object which is provided to you via a picture in your head (mentally).
            Don't be afraid there is nothing you could do wrong.
            <br />
            When you press the Button below the experiment will start.
            <br />
            <br />
            Thank you for participating in the experiment. `,
  buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `We will provide a picture for you with two figures in it which will look like the following.
            <br />
            <br />
            <img id="img_instructions" src="images/practice/13_50_different.jpg">
            <br />
            Your task is to judge wether the two figures are the same or different ones. To do so you will have to mentally rotate one of the images to compare them.
            When you think the figuress are the same you should press the button j on your keyboard, if they are different you should press f. 
            <br />
            Please try to be as fast and accurate as possible.
            <br />
            <br />
            Now press the button below to start some practice trials, after them the actual experiment will begin.`,
  buttonText: 'Go to practice trials'
});

const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions for Main',
  text: `Your task is the same as for the practice trials:
            <br />
            We will provide a picture for you with two figures in it which will look like the following.
            <br />
            <br />
            <img id="img_instructions" src="images/practice/13_50_different.jpg">
            <br />
            Your task is to judge wether the two figures are the same or different ones. To do so you will have to mentally rotate one of the images to compare them.
            When you think the figuress are the same you should press the button j on your keyboard, if they are different you should press f. 
            <br />
            Please try to be as fast and accurate as possible.
            <br />
            <br />
            Now press the button to begin with the actual experiment.`,
  buttonText: 'Go to main trials'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const practice = magpieViews.view_generator("key_press", {
  trials: practice_trials.key_press.length,
  // trials: 2,
  // question: "Are the figures the same or different ones?",
  name: 'practice',
  trial_type: 'practice',
  pause: 250,
  data: _.shuffle(practice_trials.key_press),
  // key1: "f",
  // key2: "j",
  // f: "same",
  // j: "different",
  hook: {
    after_response_enabled: check_response
  }
});


const main = magpieViews.view_generator("key_press", {
  trials: main_trials.key_press.length,
  // trials: 8,
  // question: "Are the figures the same or different ones?",
  name: 'main',
  trial_type: 'main',
  pause: 250,
  data: _.shuffle(main_trials.key_press),
  // key1: "f",
  // key2: "j",
  // f: "same",
  // j: "different",
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
