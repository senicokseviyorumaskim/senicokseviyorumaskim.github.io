let quotes = [
    "çünkü seni çok seviyorum",
    "çünkü tanıdığım en iyi insansın",
    "çünkü bana en uygun kişisin",
    "çünkü çok güzelsin",
    "çünkü çok tatlısın",
    "çünkü çok sevimlisin",
    "ellerin",
    "ilk öpücüğümüz",
    "sarılışın",
    "gülümseyişin",
    "bakışların",
    "bana hissettirdiğin duygular çok farklı olması",
    "kokun",
    "davranışların",
    "zekan",
    "gözlerin",
    "yanındayken kalbimi fırlayacak gibi yapman",
    "çünkü mükemmel bir arkadaşsın",
    "çünkü en yakın arkadaşımsın",
    "çünkü en çok güvendiğim insansın",
    "alışkanlıkların",
    "22",
    "çünkü herkesten yakın hissettiğim tek insansın",
    "teneffüslerdeki yürüyüşlerimiz",
    "anlayışın",
    "müzik zevkin",
    "samimiyetin",
    "yakınlığın",
    "ufak niche zevklerin",
    "saçların",
    "mizah anlayışın",
    "hediyelerin",
    "gülüşün",
    "komikliğin",
    "enerjin",
    "yüzün",
    "vücudun",
    "vicdanın",
    "hayvanseverliğin",
    "her derste ders bitse de durunun yanına gitsem dedirtmen",
    "kültürlülüğün",
    "yardımseverliğin",
    "duyarlılığın",
    "normalde yapmayacağım şeyleri yaptırman",
    "sevmediğim şeyleri sevdirmen",
    "beni kendimle barıştırman",
    "seninle olan deneyimlerimiz",
    "mükemmel bir anne olacağına inanmam",
    "hayallerin",
    "seninle olan hayallerim",
    "bana olan aşkın",
    "sana olan aşkım",
    "patlıcanın (benimkinden büyük)"
]

let quoteNum = Math.floor(Math.random() * quotes.length)

if (quotes[quoteNum] != undefined){
    document.getElementById("quote").innerText = quotes[quoteNum];
}
