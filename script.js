// 텍스트 작성과 삭제. 즉시 실행되는 함수
(function(){
    const spanE1 = document.querySelector("main h2 span");
    const txtArr = ['Web publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-END Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    console.log(currentTxt);

function writeTxt(){
    spanE1.textContent += currentTxt.shift();
    if(currentTxt.length !==0){setTimeout(writeTxt, Math.floor(Math.random()*100));
    }else{
        currentTxt = spanE1.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    currentTxt.pop();
    spanE1.textContent = currentTxt.join("");
    if(currentTxt.length !==0) {
        setTimeout(deleteTxt, Math.floor(Math.random()*100))
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
        console.log(index);
    }
}
writeTxt();
 
})();

// 수직 스크롤 발생 시 header 태그에 active 클래스 추가 및 삭제
(function(){
    const headerE1 = document.querySelector("header")
    window.addEventListener("scroll", function(){
        this.requestAnimationFrame(scrollCheck);
    });
    
    function scrollCheck(){
        const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        if(browserScrollY > 0){
            headerE1.classList.add('active');
        }else{
            headerE1.classList.remove('active');
        }
        console.log('scroll')
    }
})();

// 애니메이션 스크롤 

(function(){
    const animationMove = function(selector){
        const target = document.querySelector(selector);
        const browserScrollY = window.pageYOffset;
        const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({top: targetScrollY, behavior:'smooth'});
        
        console.log(target); 
    }
    
    const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
    console.log(scrollMoveE1)
    for(let i=0; i< scrollMoveE1.length; i++){
        scrollMoveE1[i].addEventListener("click", function(e){
        console.log(this.dataset.target);
        animationMove(this.dataset.target);
        });
    }     
})();



