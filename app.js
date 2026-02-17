// 恋爱投入度测试 - 主逻辑

// 问题库
const questionBank = {
    friend: [
        {
            question: "When you're in a group setting, how does he act around you?",
            options: [
                { text: "He often finds reasons to stand or sit near me", score: 4 },
                { text: "He makes eye contact and smiles at me frequently", score: 3 },
                { text: "He treats me the same as everyone else", score: 2 },
                { text: "He seems to avoid being near me", score: 1 }
            ]
        },
        {
            question: "How does he respond when you message him?",
            options: [
                { text: "He replies quickly and keeps the conversation going", score: 4 },
                { text: "He responds within a few hours with thoughtful answers", score: 3 },
                { text: "He replies eventually but keeps it brief", score: 2 },
                { text: "He often leaves me on read or takes days to respond", score: 1 }
            ]
        },
        {
            question: "Has he ever shown signs of jealousy or protectiveness?",
            options: [
                { text: "Yes, he subtly asks about other guys I mention", score: 4 },
                { text: "Sometimes he seems interested in my dating life", score: 3 },
                { text: "Not really, he seems supportive of me dating", score: 2 },
                { text: "No, he actively encourages me to date other people", score: 1 }
            ]
        },
        {
            question: "How well does he remember details about you?",
            options: [
                { text: "He remembers everything - my favorites, stories, important dates", score: 4 },
                { text: "He remembers most things I tell him", score: 3 },
                { text: "He remembers basic stuff but forgets details", score: 2 },
                { text: "He often forgets things I've told him multiple times", score: 1 }
            ]
        },
        {
            question: "Does he initiate spending time with you?",
            options: [
                { text: "Yes, he regularly suggests hanging out one-on-one", score: 4 },
                { text: "Sometimes he invites me to group things", score: 3 },
                { text: "He's usually responsive when I initiate", score: 2 },
                { text: "I almost always have to make the plans", score: 1 }
            ]
        },
        {
            question: "How does he act when you need help or support?",
            options: [
                { text: "He's the first to offer help and checks in on me", score: 4 },
                { text: "He's supportive when I ask for help", score: 3 },
                { text: "He's helpful but doesn't go out of his way", score: 2 },
                { text: "He seems distant or unavailable when I need support", score: 1 }
            ]
        },
        {
            question: "Have you noticed him trying to impress you?",
            options: [
                { text: "Yes, he shows off his skills and achievements around me", score: 4 },
                { text: "Sometimes he seems to want my approval", score: 3 },
                { text: "Not particularly, he's just himself", score: 2 },
                { text: "No, he doesn't seem concerned with my opinion", score: 1 }
            ]
        },
        {
            question: "What's his body language like around you?",
            options: [
                { text: "He faces me, mirrors my movements, finds excuses to touch", score: 4 },
                { text: "He maintains good eye contact and seems engaged", score: 3 },
                { text: "He's relaxed but doesn't show special attention", score: 2 },
                { text: "He seems closed off or distracted", score: 1 }
            ]
        }
    ],
    dating: [
        {
            question: "Who usually initiates plans to meet up?",
            options: [
                { text: "He initiates most of the time", score: 4 },
                { text: "It's about 50/50 between us", score: 3 },
                { text: "I initiate more often than he does", score: 2 },
                { text: "I almost always have to suggest meeting", score: 1 }
            ]
        },
        {
            question: "How does he communicate between dates?",
            options: [
                { text: "He texts/calls daily and keeps conversation flowing", score: 4 },
                { text: "He reaches out every few days consistently", score: 3 },
                { text: "Communication is sporadic between dates", score: 2 },
                { text: "I rarely hear from him unless we're making plans", score: 1 }
            ]
        },
        {
            question: "Has he introduced you to his friends or family?",
            options: [
                { text: "Yes, I've met important people in his life", score: 4 },
                { text: "He's mentioned wanting me to meet them", score: 3 },
                { text: "Not yet, but he talks about them", score: 2 },
                { text: "No, he keeps that part of his life separate", score: 1 }
            ]
        },
        {
            question: "How does he behave during your dates?",
            options: [
                { text: "Fully present, puts phone away, plans thoughtful activities", score: 4 },
                { text: "Engaged and seems to enjoy our time together", score: 3 },
                { text: "Nice but sometimes distracted or casual", score: 2 },
                { text: "Seems like he's just going through the motions", score: 1 }
            ]
        },
        {
            question: "Has he talked about the future or defined the relationship?",
            options: [
                { text: "Yes, we've discussed being exclusive or future plans", score: 4 },
                { text: "He's hinted at wanting something more serious", score: 3 },
                { text: "Not really, we live in the moment", score: 2 },
                { text: "He avoids those conversations", score: 1 }
            ]
        },
        {
            question: "How does he handle disagreements or your emotions?",
            options: [
                { text: "He's patient, listens, and tries to understand", score: 4 },
                { text: "He's generally supportive but sometimes defensive", score: 3 },
                { text: "He gets uncomfortable with heavy emotions", score: 2 },
                { text: "He pulls away or becomes distant", score: 1 }
            ]
        },
        {
            question: "Does he make an effort to know your world?",
            options: [
                { text: "He asks about my day, remembers details, supports my goals", score: 4 },
                { text: "He shows interest in my life and activities", score: 3 },
                { text: "He's polite but doesn't dig deep", score: 2 },
                { text: "He doesn't seem very curious about my life", score: 1 }
            ]
        },
        {
            question: "How does physical affection work between you?",
            options: [
                { text: "Natural, frequent, and mutually initiated", score: 4 },
                { text: "He initiates touch and seems comfortable with it", score: 3 },
                { text: "Some affection but mostly casual/light", score: 2 },
                { text: "Minimal physical connection", score: 1 }
            ]
        }
    ],
    exclusive: [
        {
            question: "How often does he prioritize spending time with you?",
            options: [
                { text: "He regularly chooses me over other activities/friends", score: 4 },
                { text: "He makes consistent time for us in his schedule", score: 3 },
                { text: "We see each other when it's convenient", score: 2 },
                { text: "I often feel like an afterthought", score: 1 }
            ]
        },
        {
            question: "How does he handle conflicts or difficult conversations?",
            options: [
                { text: "He communicates openly and works through issues with me", score: 4 },
                { text: "He's willing to talk but sometimes needs space first", score: 3 },
                { text: "He avoids deep conversations or shuts down", score: 2 },
                { text: "He becomes defensive or dismissive", score: 1 }
            ]
        },
        {
            question: "Does he include you in his future plans?",
            options: [
                { text: "Yes, we regularly talk about our future together", score: 4 },
                { text: "He mentions me in some future scenarios", score: 3 },
                { text: "Not really, his plans seem separate", score: 2 },
                { text: "No, he avoids commitment to future plans", score: 1 }
            ]
        },
        {
            question: "How does he support your personal growth and goals?",
            options: [
                { text: "He's my biggest cheerleader and actively helps", score: 4 },
                { text: "He's supportive of my ambitions", score: 3 },
                { text: "He's neutral, doesn't get involved", score: 2 },
                { text: "He seems threatened or dismissive", score: 1 }
            ]
        },
        {
            question: "How well does he know and respond to your needs?",
            options: [
                { text: "He anticipates my needs and goes above and beyond", score: 4 },
                { text: "He listens and tries to meet my needs", score: 3 },
                { text: "He's responsive when I tell him directly", score: 2 },
                { text: "He often seems oblivious to what I need", score: 1 }
            ]
        },
        {
            question: "How does he integrate you into his life?",
            options: [
                { text: "I'm part of his routine, friends, family, and decisions", score: 4 },
                { text: "I'm included in most areas of his life", score: 3 },
                { text: "We have our own separate worlds mostly", score: 2 },
                { text: "He keeps me compartmentalized", score: 1 }
            ]
        },
        {
            question: "Does he make you feel secure in the relationship?",
            options: [
                { text: "Yes, I feel completely secure and valued", score: 4 },
                { text: "Mostly, though I have occasional doubts", score: 3 },
                { text: "Sometimes I feel uncertain about us", score: 2 },
                { text: "I often feel anxious or insecure", score: 1 }
            ]
        },
        {
            question: "How does he show love and appreciation?",
            options: [
                { text: "Through words, actions, quality time, and thoughtfulness", score: 4 },
                { text: "He shows he cares in his own way", score: 3 },
                { text: "Occasional gestures but not consistent", score: 2 },
                { text: "I often feel unappreciated or taken for granted", score: 1 }
            ]
        }
    ],
    commitment: [
        {
            question: "How does he handle long-term planning with you?",
            options: [
                { text: "We actively plan our future together (career, home, life)", score: 4 },
                { text: "He includes me in major decisions and plans", score: 3 },
                { text: "We discuss the future but vaguely", score: 2 },
                { text: "He avoids concrete long-term commitments", score: 1 }
            ]
        },
        {
            question: "How does he handle stress or challenges in the relationship?",
            options: [
                { text: "We face challenges as a team and grow stronger", score: 4 },
                { text: "He works through difficulties with patience", score: 3 },
                { text: "He sometimes withdraws during tough times", score: 2 },
                { text: "He shuts down or becomes distant under stress", score: 1 }
            ]
        },
        {
            question: "Does he continue to invest in keeping the relationship vibrant?",
            options: [
                { text: "Yes, he plans dates, surprises me, keeps romance alive", score: 4 },
                { text: "He makes effort for special occasions", score: 3 },
                { text: "We have a comfortable routine", score: 2 },
                { text: "The relationship feels stagnant or neglected", score: 1 }
            ]
        },
        {
            question: "How deeply does he know and understand you?",
            options: [
                { text: "He truly sees me and accepts all parts of who I am", score: 4 },
                { text: "He knows me well and pays attention", score: 3 },
                { text: "He knows surface-level stuff", score: 2 },
                { text: "I feel like he doesn't really know me", score: 1 }
            ]
        },
        {
            question: "How does he balance independence with togetherness?",
            options: [
                { text: "Perfect balance - we have healthy space and quality time", score: 4 },
                { text: "Generally good balance with occasional adjustments", score: 3 },
                { text: "Sometimes one of us needs more/less space", score: 2 },
                { text: "We struggle with codependency or distance", score: 1 }
            ]
        },
        {
            question: "Does he take responsibility for his mistakes?",
            options: [
                { text: "Yes, he apologizes sincerely and works to improve", score: 4 },
                { text: "He usually acknowledges when he's wrong", score: 3 },
                { text: "Sometimes, but it's difficult for him", score: 2 },
                { text: "He rarely admits fault or apologizes", score: 1 }
            ]
        },
        {
            question: "How does he support your dreams and personal growth?",
            options: [
                { text: "He's fully invested in my growth and success", score: 4 },
                { text: "He encourages my goals and ambitions", score: 3 },
                { text: "He's supportive but not actively involved", score: 2 },
                { text: "He seems indifferent or unsupportive", score: 1 }
            ]
        },
        {
            question: "Do you feel this relationship has long-term potential?",
            options: [
                { text: "Absolutely, I see us building a life together", score: 4 },
                { text: "Yes, I believe we have a strong foundation", score: 3 },
                { text: "I'm unsure about our long-term compatibility", score: 2 },
                { text: "I have serious doubts about our future", score: 1 }
            ]
        }
    ]
};

// 状态
let currentStage = '';
let currentQuestion = 0;
let answers = [];
let questions = [];

// 页面切换
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// 选择阶段
function selectStage(stage) {
    currentStage = stage;
    questions = questionBank[stage];
    currentQuestion = 0;
    answers = [];
    showQuestion();
    showPage('quiz');
}

// 显示题目
function showQuestion() {
    const q = questions[currentQuestion];
    const progress = ((currentQuestion + 2) / 9) * 100;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('stepText').textContent = `Step ${currentQuestion + 2} of 9`;
    document.getElementById('questionText').textContent = q.question;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${opt.text}</span>
        `;
        btn.onclick = () => selectAnswer(opt.score);
        container.appendChild(btn);
    });
}

// 选择答案
function selectAnswer(score) {
    answers.push(score);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showCalculating();
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        answers.pop();
        showQuestion();
    } else {
        showPage('stage');
    }
}

// 显示计算中
function showCalculating() {
    showPage('calculating');
    
    const facts = [
        "Did you know? 68% of people misread romantic signals.",
        "Research shows: Consistent small actions matter more than grand gestures.",
        "Fun fact: The 'friend zone' is often just a lack of clear communication.",
        "Studies indicate: Emotional availability is the #1 predictor of relationship success.",
        "Psychology says: How someone treats you when stressed reveals their true feelings."
    ];
    
    let factIdx = 0;
    const factEl = document.getElementById('factText');
    
    const factInterval = setInterval(() => {
        factIdx = (factIdx + 1) % facts.length;
        factEl.style.opacity = 0;
        setTimeout(() => {
            factEl.textContent = facts[factIdx];
            factEl.style.opacity = 1;
        }, 300);
    }, 2500);
    
    setTimeout(() => {
        clearInterval(factInterval);
        showResult();
    }, 5000);
}

// 显示结果
function showResult() {
    const total = answers.reduce((a, b) => a + b, 0);
    const maxScore = 32;
    const percentage = Math.round((total / maxScore) * 100);
    
    showPage('result');
    
    // 动画显示分数
    setTimeout(() => {
        animateScore(percentage);
    }, 300);
    
    // 设置结果
    const badge = document.getElementById('resultBadge');
    const title = document.getElementById('resultTitle');
    const desc = document.getElementById('resultDesc');
    
    let resultData;
    
    if (percentage >= 80) {
        resultData = {
            badge: "He's definitely into you!",
            badgeClass: "very-high",
            title: "High Investment",
            desc: "His actions consistently show genuine care and interest. He's emotionally available, makes you a priority, and invests in your relationship. This level of engagement suggests strong romantic interest and commitment potential."
        };
    } else if (percentage >= 60) {
        resultData = {
            badge: "He's into you",
            badgeClass: "high",
            title: "Growing Interest",
            desc: "He's showing clear signs of interest and investment. While there may be room for deeper connection, his behavior indicates he values you and the relationship is progressing positively."
        };
    } else if (percentage >= 40) {
        resultData = {
            badge: "He might be forming a crush",
            badgeClass: "medium",
            title: "Early Interest",
            desc: "There are signs of potential interest, but it's still developing. He may be figuring out his feelings or taking time to open up. Consider having an open conversation about where things are heading."
        };
    } else {
        resultData = {
            badge: "He might not be that into you",
            badgeClass: "low",
            title: "Low Investment",
            desc: "His actions suggest limited romantic interest or emotional unavailability. This doesn't reflect your worth - it simply means he may not be the right match. Focus on relationships where your value is recognized."
        };
    }
    
    badge.textContent = resultData.badge;
    badge.className = 'result-badge ' + resultData.badgeClass;
    title.textContent = resultData.title;
    desc.textContent = resultData.desc;
    
    // 设置详情条
    document.getElementById('bar1').style.width = Math.min(100, percentage + Math.random() * 20 - 10) + '%';
    document.getElementById('bar2').style.width = Math.min(100, percentage + Math.random() * 20 - 10) + '%';
    document.getElementById('bar3').style.width = Math.min(100, percentage + Math.random() * 20 - 10) + '%';
}

// 分数动画
function animateScore(target) {
    const numberEl = document.getElementById('scoreNumber');
    const circleEl = document.getElementById('scoreCircle');
    
    // 数字动画
    let current = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        numberEl.textContent = Math.round(current);
    }, 16);
    
    // 圆圈动画
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (target / 100) * circumference;
    
    // 添加渐变定义
    const svg = circleEl.parentElement;
    if (!svg.querySelector('defs')) {
        svg.innerHTML = `
            <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#FF6B9D"/>
                    <stop offset="100%" style="stop-color:#C44569"/>
                </linearGradient>
            </defs>
        ` + svg.innerHTML;
    }
    
    setTimeout(() => {
        circleEl.style.strokeDashoffset = offset;
    }, 100);
}

// 显示解锁页面
function showUnlock() {
    showPage('unlock');
}

// 提交邮箱
function submitEmail() {
    const email = document.getElementById('emailInput').value;
    if (email && email.includes('@')) {
        alert('Thank you! We\'ll notify you when the full analysis is ready.');
        document.getElementById('emailInput').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// 重新开始
function restart() {
    currentStage = '';
    currentQuestion = 0;
    answers = [];
    questions = [];
    showPage('home');
}

// 初始化
window.onload = () => {
    // 预加载字体
    document.fonts.ready.then(() => {
        console.log('Fonts loaded');
    });
};
