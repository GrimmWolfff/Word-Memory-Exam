const voc = {
    "tengible":"ხელით შეხებადი",
    "intengible":"ხელით შეუხებელი",
    "derive":"წარმოება",
    "derivetive":"ნაწარმოები",
    "ilk":"ტიპი",
    "means":"საშუალება",
    "merit":"ღირსება",
    "determined":"მტკიცე, მიზანდასახული",
    "convey":"გადმოცემა",
    "hypocrisy":"ფარისევლობა",
    "ploy":"ხრიკი",
    "dome":"გუმბათი",
    "deplore":"განკიცხვა",
    "disguise":"შენიღბვა",
    "comprehend":"აღქმა",
    "gruesome":"საზარელი",
    "remote":"მოშორებული",
    "grief":"მწუხარება",
    "latter":"ეს უკანასკნელი",
    "former":"წინა",
    "coward":"ლაჩარი, ჩმორი",
    "selfless":"თავდადებული",
    "pace":"სიჩქარე",
    "predicate":"შემასმენელი",
    "empathy":"თანაგრძნობა",
    "distinct":"განსხვავებული",
    "reckon":"გამოცხადება, ვაცხადებ",
    "eminent":"ცნობილი",
    "steep":"ჩაფლობა",
    "replete":"სავსე",
    "bright":"გონებაგახსნილი",
    "abound":"ბლომად",
    "wild dream":"გიჟური ოცნება",
    "appliance":"მოწყობილობა",
    "prognosticate":"წინასწარმეტყველება",
    "matron":"გათხოვილი ქალი",
    "domesticated":"მოშინაურებული",
    "contend":"თავის გართმევა",
    "scouring":"ხეხვა",
    "baked-on":"ჩამჯდარი",
    "grime":"ჭუჭყი",
    "disposed":"გადამუშავებული",
    "abode":"საცხოვრებელი ადგილი",
    "realm":"სამყარო ან სამეფო",
    "annal":"ქრონიკები",
    "compound":"გართულება",
    "tinge":"ძალიან ცოტა",
    "paradox":"ოქსიმორონი, ერთმანეთისგან გამომრიცხავი",
    "commute":"მგზავრი (შორი)",
    "resignation":"მორჩილება",
}

const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const q = document.querySelector('.q');
const res = document.querySelector('.result');
const correctScoreEl = document.querySelector('.correctScoreEl');
const wrongScoreEl = document.querySelector('.wrongScoreEl');

var c = 0, w = 0;
var keys = Object.keys(voc);
/*
voc[i] - ge
i - en
*/
input.value = input.value.toLowerCase()

const randomWord = obj => obj[keys[keys.length * Math.random() << 0]]
const CheckAnswer = ans => {
    var translated = voc[ans];
    console.log(translated)
    if(voc[ans] == q.textContent){
        c++;
    }else{
        w++;
    }
    correctScoreEl.textContent = c;
    wrongScoreEl.textContent = w;
}

window.addEventListener('load', () => {
    q.textContent = randomWord(voc);
})
submit.addEventListener('click', () => {
    CheckAnswer(input.value);
    input.value = "";
    q.textContent = randomWord(voc);
})
input.addEventListener('keyup', () => {
    input.value = input.value.toLowerCase()
})
input.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click();
    }
});