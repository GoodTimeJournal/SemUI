// Green sock animation

TweenMax.to(".container-center", 2, {rotation:360, scale:0.8});
TweenMax.to(".container-left", 2, {rotation:360, scale:0.8});
TweenMax.staggerFrom('.jumbotron', 0.5, {opactiy:0, y:200, delay:0.5}, 0.2);
TweenMax.staggerFrom('.bg-dark', 0.5, {opactiy:0, y:200, delay:0.5}, 0.2);