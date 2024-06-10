document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.querySelector('form').addEventListener('submit', validateForm);

const quotes = [
    "A healthy outside starts from the inside. - Robert Urich",
    "To enjoy the glow of good health, you must exercise. - Gene Tunney",
    "The greatest wealth is health. - Virgil",
    "Take care of your body. It's the only place you have to live. - Jim Rohn",
    "Healthy citizens are the greatest asset any country can have. - Winston Churchill",
    "Health is not valued till sickness comes. - Thomas Fuller",
    "An apple a day keeps the doctor away. - Proverb",
    "Early to bed and early to rise makes a man healthy, wealthy, and wise. - Benjamin Franklin",
    "Your body hears everything your mind says. - Naomi Judd",
    "The first wealth is health. - Ralph Waldo Emerson",
    "Happiness is the highest form of health. - Dalai Lama",
    "Health is the greatest gift. - Buddha",
    "Good health is not something we can buy. However, it can be an extremely valuable savings account. - Anne Wilson Schaef",
    "Healthy does NOT mean starving yourself EVER. Healthy means eating the right food in the right amount. - Karen Salmansohn",
    "It's never too early or too late to work towards being the healthiest you. - Anonymous",
    "A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned. - Naval Ravikant",
    "Health is a state of complete harmony of the body, mind, and spirit. - B.K.S. Iyengar",
    "Health is a relationship between you and your body. - Terri Guillemets",
    "Keeping your body healthy is an expression of gratitude to the whole cosmos – the trees, the clouds, everything. - Thich Nhat Hanh",
    "Your health is an investment, not an expense. - Unknown",
    "You can't enjoy wealth if you're not in good health. - Anonymous",
    "When health is absent, wisdom cannot reveal itself, art cannot manifest, strength cannot fight, wealth becomes useless, and intelligence cannot be applied. - Herophilus",
    "He who has health has hope; and he who has hope has everything. - Arabian Proverb",
    "A healthy outside starts from the inside. - Robert Urich",
    "Your body deserves the best. - Anonymous",
    "Take care of your body. It’s the only place you have to live. - Jim Rohn",
    "The best investment you can ever make is in your own health. - Anonymous",
    "A healthy mind in a healthy body. - Juvenal",
    "He who takes medicine and neglects diet wastes the skill of his doctors. - Chinese Proverb",
    "Those who think they have no time for exercise will sooner or later have to find time for illness. - Edward Stanley",
    "Health is a vehicle, not a destination. - Joshua Fields Millburn",
    "Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out. - Jack LaLanne",
    "Eat to live, not live to eat. - Socrates",
    "True health care reform starts in your kitchen, not in Washington. - Anonymous",
    "An ounce of prevention is worth a pound of cure. - Benjamin Franklin",
    "The groundwork of all happiness is health. - Leigh Hunt",
    "Health is a state of body. Wellness is a state of being. - J. Stanford",
    "Time and health are two precious assets that we don't recognize and appreciate until they have been depleted. - Denis Waitley",
    "When you have your health, you have everything. When you do not have your health, nothing else matters at all. - Augusten Burroughs",
    "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison. - Ann Wigmore",
    "The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years. - Deepak Chopra",
    "The body achieves what the mind believes. - Anonymous",
    "To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear. - Buddha",
    "A healthy lifestyle is something we refine over time – not overnight. - Anonymous",
    "Your health is your wealth. - Anonymous",
    "Health is the thing that makes you feel that now is the best time of the year. - Franklin P. Adams",
    "Health is the crown on the well person’s head that only the ill person can see. - Robin Sharma",
    "Good health and good sense are two of life’s greatest blessings. - Publilius Syrus",
    "Health requires healthy food. - Roger Williams",
    "Your body will be around a lot longer than that expensive handbag. Invest in yourself. - Anonymous",
    "If you don’t make time for your wellness, you will be forced to make time for your illness. - Anonymous",
    "Healthy habits are learned in the same way as unhealthy ones – through practice. - Wayne Dyer",
    "Health is like money, we never have a true idea of its value until we lose it. - Josh Billings",
    "If you think wellness is expensive, try illness. - Anonymous",
    "Your health is an investment, not an expense. - Anonymous",
    "You are what you eat. So don’t be fast, cheap, easy, or fake. - Anonymous",
    "The power of love to change bodies is legendary, built into folklore, common sense, and everyday experience. Love moves the flesh, it pushes matter around. Throughout history, tender loving care has uniformly been recognized as a valuable element in healing. - Larry Dossey",
    "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need. - Ayurvedic Proverb",
    "Healing is a matter of time, but it is sometimes also a matter of opportunity. - Hippocrates",
    "A good laugh and a long sleep are the best cures in the doctor’s book. - Irish Proverb",
    "Fresh air impoverishes the doctor. - Danish Proverb",
    "The more you eat, the less flavor; the less you eat, the more flavor. - Chinese Proverb",
    "A man too busy to take care of his health is like a mechanic too busy to take care of his tools. - Spanish Proverb",
    "Health and intellect are the two blessings of life. - Menander",
    "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear. - Buddha",
    "Your health is your greatest wealth. - Anonymous",
    "The higher your energy level, the more efficient your body. The more efficient your body, the better you feel and the more you will use your talent to produce outstanding results. - Tony Robbins",
    "Your body deserves the best. - Anonymous",
    "Take care of your body. It’s the only place you have to live. - Jim Rohn",
    "A man’s health can be judged by which he takes two at a time – pills or stairs. - Joan Welsh",
    "You can’t control what goes on outside, but you CAN control what goes on inside. - Anonymous",
    "Wellness is the complete integration of body, mind, and spirit – the realization that everything we do, think, feel, and believe has an effect on our state of well-being. - Greg Anderson",
    "Physical fitness is the first requisite of happiness. - Joseph Pilates",
    "Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom. - Jack LaLanne",
    "Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend. Non-being is the greatest joy. - Lao Tzu",
    "A sad soul can kill you quicker than a germ. - John Steinbeck",
    "To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear. - Buddha",
    "Your body will be around a lot longer than that expensive handbag. Invest in yourself. - Anonymous",
    "If you don’t make time for your wellness, you will be forced to make time for your illness. - Anonymous",
    "Healthy habits are learned in the same way as unhealthy ones – through practice. - Wayne Dyer",
    "Health is like money, we never have a true idea of its value until we lose it. - Josh Billings",
    "The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years. - Deepak Chopra",
    "The groundwork for all happiness is health. - Leigh Hunt",
    "Keeping your body healthy is an expression of gratitude to the whole cosmos – the trees, the clouds, everything. - Thich Nhat Hanh",
    "Your health is your wealth. - Anonymous",
    "Healthy citizens are the greatest asset any country can have. - Winston Churchill"
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').innerText = quotes[randomIndex];
}

document.getElementById('next-quote').addEventListener('click', showRandomQuote);

function updateContent() {
    const displayDiv = document.getElementById('display');
    displayDiv.innerText = 'The content has been dynamically updated!';
}