let learnObjectives = ['Methods to making your biggest life decisions',
    'Get actionable tools to become unstuck regardless of age',
    'Create a more meaningful life regardless of income',
    'Get actionable tools to become unstuck regardless of stage in life',
    'Eliminate old ideas that are not working and test new approaches to life',
    'Learn how to ask the right questions',
    'Closely examine the “life story” that has brought you to where you are today',
    'Shift your thinking – Ditch society’s expectations of you',
    'Learn to make your life a journey to be experienced fully, NOT a means to an end',
    'It’s not about work life balance it’s aligning your ‘life’ views and ‘work’ views',
    'Fix dysfunctional attitudes by understanding the root of things that might be blocking you',
    'Understand what gives you energy and what sucks you dry and then change your life using this app'
];

// console.log(learnObjectives.length);
function learnObj() {
    let randomNumber = Math.floor(Math.random() * (learnObjectives.length));
    document.getElementById('learnObjDisplay').innerHTML = learnObjectives[randomNumber];
}

let learnObjButton = document.querySelector('.learnObjectives');
learnObjButton.addEventListener('click', learnObj);
