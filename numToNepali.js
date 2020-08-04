class ConvertToNepali {
    constructor(number) {
        this.number = number.toString();
    }
    figure() {
        let numSplit = this.number.split("")
        let nepaliNum = []
        for(let num of numSplit) {
            if(num === ".") {
            nepaliNum.push(".")
            } else {
            nepaliNum.push(this.nepaliNumber[parseInt(num)])
            }
        }
        return "रु " + nepaliNum.join("")
    }
    numberSeparate(num) {
        let arr = [];
        let n = num.toString().split("").reverse()
        let len = num.length;

        n.forEach((el , index) => {
            arr.push([Math.pow(10 , index) , parseInt(el)])

        })
        return arr.reverse();
    }
    word() {
        let wordList = {
            1: "एक",
            2: "दुई",
            3: "तीन",
            4: "चार",
            5: "पाँच",
            6: "छ",
            7: "सात",
            8: "आठ",
            9: "नौ",
            10: "दश",
            11: "एघार",
            12: "बाह्र",
            13: "तेह्र",
            14: "चौध",
            15: "पन्ध्र",
            16: "सोह्र",
            17: "सत्र",
            18: "अठार",
            19: "उन्नाइस",
            20: "विस",
            21: "एक्काइस",
            22: "बाईस",
            23: "तेईस",
            24: "चौबीस",
            25: "पच्चीस",
            26: "छब्बीस",
            27: "सत्ताईस",
            28: "अट्ठाईस",
            29: "उनन्तिस",
            30: "तिस",
            31: "एकत्तिस",
            32: "बत्तिस",
            33: "तेत्तिस",
            34: "चौँतिस",
            35: "पैँतिस",
            36: "छत्तिस",
            37: "सैँतीस",
            38: "अठतीस",
            39: "उनन्चालीस",
            40: "चालीस",
            41: "एकचालीस",
            42: "बयालीस",
            43: "त्रियालीस",
            44: "चवालीस",
            45: "पैँतालीस",
            46:"छयालीस",
            47:"सच्चालीस",
            48:"अठचालीस",
            49: "उनन्चास",
            50: "पचास",
            51:"एकाउन्न",
            52: "बाउन्न",
            53:"त्रिपन्न",
            54: "चउन्न",
            55: "पचपन्न",
            56: "छपन्न",
            57: "सन्ताउन्न",
            58: "अन्ठाउन्न",
            59: "उनन्साठी",
            60: "साठी",
            61: "एकसट्ठी",
            62: "बयसट्ठी",
            63: "त्रिसट्ठी",
            64: "चौंसट्ठी",
            65: "पैंसट्ठी",
            66: "छयसट्ठी",
            67: "सतसट्ठी",
            68: "अठसट्ठी",
            69: "उनन्सत्तरी",
            70: "सत्तरी",
            71: "एकहत्तर",
            72: "बहत्तर",
            73: "त्रिहत्तर",
            74: "चौहत्तर",
            75: "पचहत्तर",
            76:"छयहत्तर",
            77: "सतहत्तर",
            78: "अठहत्तर",
            79: "उनासी",
            80: "असी",
            81: "एकासी",
            82: "बयासी",
            83: "त्रियासी",
            84: "चौरासी",
            85: "पचासी",
            86: "छयासी",
            87: "सतासी",
            88: "अठासी",
            89: "उनान्नब्बे",
            90: "नब्बे",
            91: "एकान्नब्बे",
            92: "बयानब्बे",
            93: "त्रियान्नब्बे",
            94: "चौरान्नब्बे",
            95: "पन्चानब्बे",
            96: "छयान्नब्बे",
            97: "सन्तान्नब्बे",
            98: "अन्ठान्नब्बे",
            99: "उनान्सय",
            100: "सय",
            1e+3: "हजार",
            1e+5: "लाख" ,
            1e+7: "करोड", 
            1e+9: "अर्" ,  
            1e+11: "खब" ,  
            1e+13: "नील" , 
            1e+15: "पद्म", 
            1e+17: "शंख"

        }
        function toWord(num) {
            let n = num
            let w = ""
            let wl = wordList;
            n.forEach( ( i , ind ) => {
                let [a , b] = i;
               if (b)  {
                   if(ind < n.length - 2) {
                    w += wl[b] + " " + wl[a] + " "
                   }
               }

            })
            w += wl[n[n.length - 2][0] * n[n.length - 2][1] + n[n.length - 1][0] * n[n.length - 1][1]]
            return w;
        }
        let [number  , dec ] = this.withDecimal;
        let beforeDec = toWord(this.numberSeparate(number))
        let d = "";
        if(dec) {
            d = " " + toWord(this.numberSeparate(dec)) + " पैसा मात्र"
        }
        return "रु " + beforeDec + d;

    }
}
let toNepali = new ConvertToNepali(5015)
document.write(toNepali.figure())
document.write("</br>")
document.write(toNepali.word())
