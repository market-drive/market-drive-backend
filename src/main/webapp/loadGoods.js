// window.onload = function () {
//     var request = XMLHttpRequest();
//
//     request.open('GET', 'goods.json', true);
//     request.responseType = 'json';
//     request.send();
//     request.onload = function () {
//         var goodsList = request.response;
//         showGoods(goodsList);
//     };
//     document.getElementById('milk');
//     milk.onclick = function showGoods(jsonObj) {
//         var goods = jsonObj['grocery'];
//
//         for (var i = 0; i < goods.length ; i++) {
//             var myImage = document.createElement('img');
//             var myArticle = document.createElement('article');
//             var myList = document.createElement('ul');
//             var myPar1 = document.createElement('p');
//             var myPar2 = document.createElement('p');
//             var myPar3 = document.createElement('p');
//
//             myPar1.textContent = goods[i].name;
//             myPar2.textContent = goods[i].brand;
//             myPar3.textContent = goods[i].price;
//             myImage.textContent = goods[i].imageUrl;
//
//             var list = goods[i].milk;
//             for (var j = 0; j < list.length; j++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = list[j];
//                 myList.appendChild(listItem);
//             }
//
//             myArticle.appendChild(myPar1);
//             myArticle.appendChild(myPar2);
//             myArticle.appendChild(myPar3);
//             myArticle.appendChild(myList);
//
//             section.appendChild(myArticle);
//         }
//     }; showGoods(jsonObj);
// };


window.onload = function () {

    var goods = {

        "milk": {
            "1": {
                "name": "Сир твердий Звенигородский 50%",
                "brand": "ТМ «Своя лінія» - 200 г",
                "price": " ціна 25 ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/c/c/3/3/acc33e4591fd70d2d3d39daf0d5b8324_295_235_f.jpg"

            },
            "2": {
                "name": "Сир твердий «Російський» 45%",
                "brand": "ТМ «Своя лінія» - 200 г",
                "price": " ціна 33.20 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/5/f/3/c/f5f3c55446ed6b338dfb6a92c8ec02da_295_235_f.jpg"

            },
            "3": {
                "name": "Сир Голландский,45%",
                "brand": "ТМ «Своя лінія» - 200 г",
                "price": " ціна 36 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/c/9/9/b/0/c99b07253190af6460ebba27c294044d_295_235_f.jpg"

            },
            "4": {
                "name": "Продукт молоковмісний сирний «Руський класичний»",
                "brand": "ТМ «Розумний вибір» - 180 г",
                "price": " ціна 29.25 ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/8/c/2/a/0/8c2a096015038b56be1d02db05f3b810_295_235_f.jpg"

            },
            "5": {
                "name": "Молоко згущене незбиране з цукром",
                "brand": "ТМ «Своя лінія» - 370 г",
                "price": " ціна 25.60 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/e/4/6/1/de461484eed5f52d860c53c718651019_295_235_f.jpg"

            },
            "6": {
                "name": "Молоко згущене варене «Іриска»",
                "brand": "ТМ «Своя лінія» - 370 г",
                "price": " ціна 36 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/3/2/7/6/93276186541af982701e7fa52a005da9_295_235_f.jpg"

            }
        },


        "grocery": [
            {
                "name": "Макаронні вироби Гребінці",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 0,5 кг",
                "price": 20.5 ,
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/2/9/b/9/a29b9cc3a039846fa4fdadd49758a6c6_295_235_f.jpg"
            },
            {
                "name": "Макаронні вироби Пера",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 0,5 кг",
                "price": "ціна 24.12 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/c/f/8/2/acf8268bed1169b96fd7e96127b65dfb_295_235_f.jpg"
            },
            {
                "name": "Макаронні вироби Спагеті",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 0,5 кг",
                "price": "ціна 25.14 грн",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/c/7/b/2/1c7b2246b48b2db698a88677aeb6873a_295_235_f.jpg"
            },
            {
                "name": "Рис шліфований «Басматі» вищий гатунок",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 1000 г",
                "price": "ціна 35.5 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/4/f/7/d/c/4f7dc8e6ceaa1fbc9070325220dec781_295_235_f.jpg"
            },
            {
                "name": "Рис шліфований довгий вищий гатунок",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 1000 г",
                "price": "ціна 37.8 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/e/c/2/e/7/ec2e71d1c26b94a6fff2377f2f732779_295_235_f.jpg"
            },
            {
                "name": "Крупа кукурудзяна",
                "brand": "ТМ «Розумний вибір» - 1 кг",
                "price": "ціна 10.75 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/8/9/e/c/a89ec5d068cf788b2d828b919441f50a_295_235_f.jpg"
            },
            {
                "name": "Крупа перлова",
                "brand": "ТМ «Розумний вибір» - 1 кг",
                "price": "ціна 16 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/6/f/7/7/a/6f77a7e40573df9d7a1c5f844bf149b9_295_235_f.jpg"
            },
            {
                "name": "Крупа гречана ядриця",
                "brand": "ТМ «Розумний вибір» - 1 кг",
                "price": "ціна 33.8 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/6/3/c/2/4/63c244f0d014cdfc005115da0d16aa85_295_235_f.jpg"
            },
            {
                "name": "Перець чорний мелений",
                "brand": "ТМ Розумний Вибір - 80 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/3/c/1/d/33c1d700b1251ea610e9d8142a3b4607_295_235_f.jpg"
            },
            {
                "name": "Перець червоний мелений",
                "brand": "ТМ «Розумний вибір» - 20 г м/уп",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/6/4/f/c/d64fc9c3764114a4e62e4c580dcbef0a_295_235_f.jpg"
            }

        ],

        "hotDrinks": [
            {
                "name": "Кава натуральна розчинна сублімована",
                "brand": "ТМ «Своя Лінія» - 50 г",
                "price": "ціна 12.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/8/5/3/7/9/85379e156690ee4795458680ccef369f_295_235_f.png"
            },
            {
                "name": "Кава Coffee Gold розчинна сублімована",
                "brand": "ТМ «Своя Лінія» – 140 г",
                "price": "ціна 32.4 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/f/3/4/0/ff3401dbe6387f9fcc1c21ffa743b77e_295_235_f.jpg"
            },
            {
                "name": "Напій з цикорію",
                "brand": "ТМ «Своя Лінія» - 90 г",
                "price": "ціна 19.9 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/c/3/3/0/4/c330455525d9099188df72e9254e59fc_295_235_f.png"
            },
            {
                "name": "Чай чорний цейлонський натуральний",
                "brand": "ТМ «Своя Лінія» - 25 ф/п х 1,5 г",
                "price": "ціна 24.8 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/3/f/0/e/73f0e17a956e8abfee84b1418b46bcb3_295_235_f.jpg"
            },
            {
                "name": "Чай зелений китайський натуральний",
                "brand": "ТМ «Своя Лінія» - 25 ф/п х 1,75 г",
                "price": "ціна 26.4 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/e/d/5/1/9ed51e0f833cd1a195e541ca569a9c6a_295_235_f.jpg"
            }
        ],
        "meat": [
            {
                "name": "Ковбаса Молочна",
                "brand": "ТМ «Своя Лінія» - 0,55 кг",
                "price": "ціна 38.5 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/0/d/1/8/70d18a9c8443f4e3321c37082be437eb_295_235_f.jpg"
            },
            {
                "name": "Ковбаса Любительська",
                "brand": "ТМ «Своя Лінія» - 0,55 кг",
                "price": "ціна 38.9 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/b/8/a/c/8/b8ac8ea8339ccb69a4b570a7a4bc0dd4_295_235_f.jpg"
            },
            {
                "name": "Ковбаса Лікарська",
                "brand": "ТМ «Своя Лінія» - 0,55 кг",
                "price": "ціна 35.6 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/a/1/1/3/2a113b30678abf29727a8eba57168a09_295_235_f.jpg"
            },
            {
                "name": "Паштет Домашній з грудинкою",
                "brand": "ТМ «Своя Лінія» - 125 г",
                "price": "ціна 18.15 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/e/2/d/7/f/e2d7f1b427cd30cae87019d47f751902_295_235_f.jpg"
            },
            {
                "name": "Паштет Печінковий",
                "brand": "ТМ «Своя Лінія» - 125 г",
                "price": "ціна 19 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/6/6/f/6/8/66f688df4b36a912b62a0c482177a8a4_295_235_f.jpg"
            },
            {
                "name": "Ковбаса Салямі Фінська",
                "brand": "ТМ «Своя Лінія» - 350 г",
                "price": "ціна 39.5 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/c/d/5/a/3cd5ad2e32de894a28df20a40d7fe99e_295_235_f.jpg"
            },
            {
                "name": "Ковбаса Краківська",
                "brand": "ТМ «Своя Лінія»",
                "price": "ціна 50.5 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/e/a/a/7/3eaa7a823cb44ff09e3e0ab7c0216f33_295_235_f.jpg"
            }
        ],
        "fish": [
            {
                "name": "Сьомга с / с нарізка",
                "brand": "ТМ «Своя Лінія» - 80 г",
                "price": "ціна 30.5 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/0/b/b/6/d/0bb6d8d81bd386c867cdf119453793f0_295_235_f.jpg"
            },
            {
                "name": "Сьомга с / с філе-шматок",
                "brand": "ТМ «Своя Лінія» - 180 г",
                "price": "ціна 50.8 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/8/5/c/0/a85c018c2d40424680a16588160ed60d_295_235_f.jpg"
            },
            {
                "name": "Крабові палички заморожені",
                "brand": "ТМ «Своя Лінія» - 0,5 кг",
                "price": "ціна 44.7 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/f/4/3/3/7f433406a8d7df68d79f48e9096db6a5_295_235_f.jpg"
            },
            {
                "name": "Крабові палички охолоджені",
                "brand": "ТМ «Своя Лінія» - 500 г",
                "price": "ціна 41.6 грн. ",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/f/8/c/1/9f8c138e539400f9a2f93558415c5b5d_295_235_f.jpg"
            },
            {
                "name": "Консерви рибні бички у томатному соусі, ж/б",
                "brand": "ТМ «Розумний вибір» - 230 г",
                "price": "ціна 17.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/6/7/8/0/d6780731e81cfc4e1343e23888005bb2_295_235_f.jpg"
            }
        ],
        "snacks": [
            {
                "name": "Анчоус сушений солоний/ставридка сушена солона/смугастик жовтий сушений солоний",
                "brand": "ТМ «Своя Лінія» - 36г",
                "price": "ціна 12.3 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/0/4/c/e/104ce62f7a17aacdbf3eb8dcda6c4aa6_295_235_f.jpg"
            },
            {
                "name": "Стружка кальмара сушена/півкільця кальмару копчені",
                "brand": "ТМ «Своя Лінія» - 36г",
                "price": "ціна 13.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/0/4/e/d/c/04edc14d3e22cea36963c731ff23e4cb_295_235_f.jpg"
            },
            {
                "name": "Путасу сушена солона/путасу сушена солона з перцем",
                "brand": "ТМ «Своя Лінія» - 36 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/b/8/c/2/c/b8c2c50e33001837d0702342eac2a540_295_235_f.jpg"
            },
            {
                "name": "Ставридка сушена солона/ путасу сушена солона",
                "brand": "ТМ «Своя Лінія» - 70г",
                "price": "ціна 19.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/d/4/f/0/5d4f05fcbc9a993c7c24fbc1424fe850_295_235_f.jpg"
            },
            {
                "name": "Чіпси картопляні зі смаком паприки",
                "brand": "ТМ «Своя Лінія» - 110 г",
                "price": "ціна 15.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/4/6/5/7/4/46574fc516ed31897612166bb9bf8c5d_295_235_f.jpg"
            },
            {
                "name": "Чіпси картопляні, зі смаком краба",
                "brand": "ТМ «Своя Лінія» - 110 г",
                "price": "ціна 15.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/9/8/2/d/2982d8398322534c8c37f050b18ec74b_295_235_f.jpg"
            },
            {
                "name": "Чіпси картопляні зі смаком сметани із зеленню",
                "brand": "ТМ «Своя Лінія» - 130 г",
                "price": "ціна 18.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/e/8/1/6/5e81664f52f58bb310a06e10542ca76b_295_235_f.jpg"
            },
            {
                "name": "Горішки арахісу солоні смажені",
                "brand": "ТМ «Своя Лінія» – 120 г",
                "price": "ціна 18.95 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/6/4/a/2/364a2c580249c66c7a2322afede5c1ff_295_235_f.png"
            },
            {
                "name": "Горішки арахісу солоні смажені / солоні смажені зі смаком бекону",
                "brand": "ТМ «Своя Лінія» – 90 г",
                "price": "ціна 15 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/0/0/7/d/d/007dd36f7a7fff623fcff912b44ee874_295_235_f.jpg"
            },
            {
                "name": "Попкорн для мікрохвильової печі з сіллю",
                "brand": "ТМ «Своя Лінія» - 100 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/3/5/e/9/735e99c20754781625f6d3da9e4cc075_295_235_f.jpg"
            },
            {
                "name": "Попкорн для мікрохвильової печі солодкий",
                "brand": "ТМ «Своя Лінія» - 100 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/8/d/3/e/5/8d3e5a133e260e59c04969babd3cbe94_295_235_f.jpg"
            },
            {

                "name": "Попкорн для мікрохвильової печі з ароматом сиру",
                "brand": "ТМ «Своя Лінія» - 100 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/6/d/f/2/26df272f8e2c13c18f4e2c87fe5c3855_295_235_f.jpg"
            },
            {

                "name": "Попкорн для мікрохвильової печі з ароматом карамелі",
                "brand": "ТМ «Своя Лінія» - 90 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/2/e/0/9/f2e098c411e890e3c13d804878415be9_295_235_f.jpg"
            },
            {

                "name": "Насіння соняшника підсолене обсмажене",
                "brand": "ТМ «Своя Лінія» – 90 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/4/c/7/a/4/4c7a456bd1d92d65cb42f06e13d6d434_295_235_f.jpg"
            },
            {

                "name": "Насіння соняшника неочищене смажене",
                "brand": "ТМ «Своя Лінія» - 300 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/c/d/0/1/a/cd01afc34a16458d6d5db38a0ecee7cb_295_235_f.jpg"
            },
            {

                "name": "Ядра волоського горіху сушені",
                "brand": "ТМ «Своя Лінія» - 150 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/4/1/9/5/7/41957f0ee2a519578130d0c3a1dd1c37_295_235_f.jpg"
            },
            {

                "name": "Виноград сушений кишмиш «Золотистий»",
                "brand": "ТМ «Своя Лінія» - 150 г",
                "price": "ціна 24.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/e/5/1/e/5e51ec20312ac60004e0d413e033fcfa_295_235_f.jpg"
            },
            {

                "name": "Ядра насіння гарбуза",
                "brand": "ТМ «Розумний вибір» - 75 г",
                "price": "ціна 10.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/f/b/1/9/dfb1962dab8d022217a7c7bc134ec94d_295_235_f.jpg"
            },
            {

                "name": "Ядра насіння соняшнику не смажені",
                "brand": "ТМ «Розумний вибір» - 300 г",
                "price": "ціна 18.9 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/8/0/d/0/f80d0f2af223bcbc81cccdb82191f16d_295_235_f.jpg"
            },
            {

                "name": "Крекер зі смаком зеленої цибулі",
                "brand": "ТМ «Своя лінія» - 180 г",
                "price": "ціна 21.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/a/d/6/2/dad62fb0170d2ce25deb42448323554a_295_235_f.jpg"
            }
        ],
        "drink": [
            {
                "name": "Холодний чай зелений з саусепом",
                "brand": "ТМ «Своя Лінія» - 0,5 л",
                "price": "ціна 18.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/f/2/5/1/2f2514cd9bd23ec7af0c4e3f8a780c48_295_235_f.jpg"
            },
            {
                "name": "Холодний чай чорний з лимоном",
                "brand": "ТМ «Своя Лінія» - 1 л",
                "price": "ціна 24.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/b/3/4/3/3/b343323cd8754eb9c834bc85ade0d4f5_295_235_f.jpg"
            },
            {
                "name": "Квас хлібний Старорусский",
                "brand": "ТМ «Своя Лінія» - 2 л.",
                "price": "ціна 22.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/0/1/e/2/701e268c086062ba3bd584bfccf37b3c_295_235_f.jpg"
            },
            {
                "name": "Напій Кола сильногазований ПЕТ",
                "brand": "ТМ «Розумний Вибір» - 2 л",
                "price": "ціна 27.2 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/8/c/4/c/28c4c53268a232129a04084f3b718098_295_235_f.jpg"
            },
            {
                "name": "Вода лікувально-столова «Поляна Купель»",
                "brand": "ТМ «Своя Лінія» - 1,5 л",
                "price": "ціна 20.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/8/4/d/f/984dfb388843006a6e9088d9dda89ece_295_235_f.jpg"
            },
            {
                "name": "Вода лікувально-столова «Поляна квасова»",
                "brand": "ТМ «Своя Лінія» - 0,5 л",
                "price": "ціна 16.9 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/d/9/3/c/3d93c309c0a322948f4cb409d1d8402b_295_235_f.jpg"
            },
            {
                "name": "Напій кавовий 3 в 1 розчинний м/уп;",
                "brand": "ТМ «Своя лінія» - 20 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/4/b/7/6/a4b76b2be93a12963b17dbe417ae0ef2_295_235_f.jpg"
            },
            {
                "name": "Напій кавовий 3 в 1 міцний розчинний м/уп.",
                "brand": "ТМ «Своя лінія» - 20 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/5/c/8/d/a5c8d4fb3c698b73b123a1778d935209_295_235_f.jpg"
            }
        ],
        "sauce": [
            {
                "name": "Олія рослинна льняна",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 230 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/b/c/5/4/dbc54da637a046c4e1b13b093cca27c3_295_235_f.jpg"
            },
            {
                "name": "Олія рослинна кунжутна",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 230 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/a/9/f/9/2a9f9e5dab4324d5c5673777b790bb86_295_235_f.jpg"
            },
            {
                "name": "Оливкова Extra Virgin",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 500 мл",
                "price": "ціна 36.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/9/1/8/6/3918648ac0c01252d841204dcc86257d_295_235_f.jpg"
            },
            {
                "name": "Олія соняшникова рафінова",
                "brand": "ТМ «Своя Лінія» - 1 л",
                "price": "ціна 24.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/2/4/7/4/7247443842a5cd5b7b937858935539a0_295_235_f.jpg"
            },
            {
                "name": "Майонез 67% «Справжній»",
                "brand": "ТМ «Своя Лінія» - 580 г м/уп",
                "price": "ціна 39.75 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/d/e/7/9/9de798df86fd1b1307632365cbc41646_295_235_f.jpg"
            },
            {
                "name": "Гірчиця",
                "brand": "Гірчиця «Українська міцна» не стерилізована ТМ «Своя Лінія» - 120 г",
                "price": "ціна 14.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/8/8/0/c/3880c4ddc667b37fe581fd200c39d180_295_235_f.jpg"
            },
            {
                "name": "Кетчуп до шашлику",
                "brand": "ТМ «Своя Лінія» - 300 г",
                "price": "ціна 25.25 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/e/b/7/b/feb7b480caa45d63f8d8d2c2143d7213_295_235_f.jpg"
            },
            {
                "name": "Кетчуп гострий",
                "brand": "ТМ «Своя Лінія» - 300 г",
                "price": "ціна 26.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/9/3/9/c/f939c7815666f5e16d94560630c081b1_295_235_f.jpg"
            },
            {
                "name": "Соус на майонезній основі «Тартар»",
                "brand": "ТМ «Своя Лінія» - 200 г",
                "price": "ціна 17.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/6/f/1/8/a6f184ad437b29cc1d1be5a9d4d2425b_295_235_f.jpg"
            },
            {
                "name": "Майонез столовий низькокалорійний Салатний 30%",
                "brand": "ТМ «Розумний вибір» - 400 г м/уп",
                "price": "ціна 23.4 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/4/f/1/2/1/4f121ac4bcff43a22d7fcd84cf15aad1_295_235_f.jpg"
            },
            {
                "name": "Майонез столовий висококалорійний Провансаль 67%",
                "brand": "ТМ «Розумний вибір» - 400 г м/уп",
                "price": "ціна 26.1 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/7/d/c/1/57dc17a85e9d5c7f210032605b8d07cd_295_235_f.jpg"
            }
        ],
        "frozen": [
            {
                "name": "Пельмені зі свининою та яловичиною",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 900 г",
                "price": "ціна 36.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/f/9/7/0/5/f9705d415b0a6745803342b657face6d_295_235_f.jpg"
            },
            {
                "name": "Пельмені з м'ясом індички",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 500 г",
                "price": "ціна 28.75 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/6/7/b/9/0/67b9082e5ca122287187d03ad7e8e3dc_295_235_f.jpg"
            },
            {
                "name": "Пельмені з курячім м'ясом",
                "brand": "ТМ «Своя Лінія» - 800 г",
                "price": "ціна 32.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/8/9/3/f/3/893f3ab6d9fed7364eee9efa06df652d_295_235_f.jpg"
            },
            {
                "name": "Пельмені Сибірські",
                "brand": "ТМ «Своя Лінія» - 800 г",
                "price": "ціна 32.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/b/7/9/b/ab79bb09f259c2bd4437a3217f915274_295_235_f.jpg"
            },
            {
                "name": "Хінкалі м’ясні, заморожені",
                "brand": "ТМ «Своя Лінія» - 800 г",
                "price": "ціна 35.75 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/6/c/c/7/6/6cc760f604408ab5546a0b3424bad994_295_235_f.jpg"
            },
            {
                "name": "Суміш овочі по-селянськи",
                "brand": "ТМ «Своя Лінія» - 400 г м/уп",
                "price": "ціна 20.4 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/b/d/7/e/abd7ed263ee9b0567245c7ed01f2fa52_295_235_f.jpg"
            },
            {
                "name": "Овочі для яєчні",
                "brand": "ТМ «Своя Лінія» - 400 г м/уп",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/c/6/9/e/9/c69e9df92df97ddbdf9a36035a26fc73_295_235_f.jpg"
            },
            {
                "name": "Рагу овочеве",
                "brand": "ТМ «Своя Лінія» - 400 г м/уп",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/c/4/6/f/5c46fb7503282329deecbf55d1088928_295_235_f.jpg"
            },
            {
                "name": "Вареники з картоплею",
                "brand": "ТМ «Розумний вибір» - 800 г",
                "price": "ціна 28 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/4/4/b/b/144bb68e405fd13b06cb8107a32d927c_295_235_f.jpg"
            },
            {
                "name": "Морозиво з вареним згущеним молоком",
                "brand": "ТМ «Розумний Вибір» - 1кг",
                "price": "ціна 29.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/b/d/d/8/e/bdd8e48283f76dc77236b4f7095226cb_295_235_f.jpg"
            },
            {
                "name": "Морозиво з ароматом ванілі",
                "brand": "ТМ «Розумний Вибір» - 1кг",
                "price": "ціна 29.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/0/8/d/4/5/08d451793cdba880bd159d25e4d10309_295_235_f.jpg"
            },
            {
                "name": "Морозиво з соусом карамельним 8% ваф/стакан м/уп",
                "brand": "ТМ «Розумний вибір» - 65 г",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/d/f/c/a/2dfcaab18c449a3dd39942bf0ea0dd57_295_235_f.jpg"
            },
            {
                "name": "Основа для піци дріжджова заморожена",
                "brand": "ТМ Своя Лінія - 2 шт.",
                "price": "ціна 30.9 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/8/6/8/c/2868c22ba76ce23d6ccefea536ad3775_295_235_f.jpg"
            }
        ],
        "sweets": [
            {
                "name": "Цукерки «Морські скарби» ",
                "brand": "ТМ «De Luxe Foods&Goods Selected» - 200 г",
                "price": "ціна 30.4 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/4/3/8/c/9438c902268d752411cf9d2e6a2ac34a_295_235_f.jpg"
            },
            {
                "name": "Карамель Молочний коктейль",
                "brand": "ТМ «Своя Лінія» - 200 г",
                "price": "ціна 24.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/1/c/8/d/51c8d1774b487ab288b4af7401bacd8d_295_235_f.jpg"
            },
            {
                "name": "Цукерки глазуровані «NUT3»",
                "brand": "ТМ «Своя Лінія» - 200 г",
                "price": "ціна 33.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/6/8/a/7/968a796c7756a1d619af8b111e5cd191_295_235_f.jpg"
            },
            {
                "name": "Цукерки Пташине молоко зі смаком вершків",
                "brand": "ТМ «Своя Лінія» - 320 г",
                "price": "ціна 36 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/0/d/6/c/0/0d6c07f52ebaa5115f4b97306702582c_295_235_f.jpg"
            },
            {
                "name": "Цукерки шоколадні Асорті Преміум",
                "brand": "ТМ «Своя Лінія» - 300 г",
                "price": "ціна 34.45 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/e/f/7/b/0/ef7b035eaaaf6cbfb2bba109072a77da_295_235_f.jpg"
            },
            {
                "name": "Шоколад молочний",
                "brand": "ТМ «Своя Лінія» - 85 г",
                "price": "ціна 14.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/c/1/b/a/7c1ba5597fb27de2203ad377c9e8c3a5_295_235_f.jpg"
            }
        ],
        "foodAnimals": [
            {
                "name": "Корм сухий з м'ясом «Cat&Go»",
                "brand": "ТМ «Своя Линия» - 400 г",
                "price": "ціна 50.2 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/6/b/9/5/76b95b169f1a2018d23530cb944e4211_295_235_f.jpg"
            },
            {
                "name": "Корм сухий з телятиною «Cat&Go»",
                "brand": "ТМ «Своя Линия» - 400 г",
                "price": "ціна 50.2 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/b/c/f/e/f/bcfefea30e21d3b31438e41e5277ce45_295_235_f.jpg"
            },
            {
                "name": "Корм «Cat&Go» з Куркою, для дорослих котів",
                "brand": "ТМ «Cвоя Лінія» - 100 г",
                "price": "ціна 20 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/b/5/f/0/7/b5f07d61b4ab6ddf0df8e2519059cd9f_295_235_f.jpg"
            },
            {
                "name": "Корм «Cat&Go» з Телятиною , для дорослих котів",
                "brand": "ТМ «Cвоя Лінія» - 100 г",
                "price": "ціна 20 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/7/0/5/8/a7058aa5b9838da1f7c97ce56ac7b003_295_235_f.jpg"
            }
        ],
        "toiletAnimals": [
            {
                "name": "Наповнювач гігієнічний з ароматом лаванди",
                "brand": "TM «Cat&Go» - 2,5 кг",
                "price": "ціна 32.7 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/e/0/3/d/8/e03d8f3ccff023404949d73578b32d10_295_235_f.jpg"
            },
            {
                "name": "Наповнювач гігієнічний деревний, 3 кг",
                "brand": "ТМ «Розумний вибір»",
                "price": "ціна 33.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/4/4/4/f/d444f4646eb5ca7c6f41fd33899fa58a_295_235_f.jpg"
            }
        ],
        "care": [
            {
                "name": "Хусточки паперові",
                "brand": "ТМ «Своя Лінія» - 10 шт.",
                "price": "ціна 2 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/7/4/d/2/a74d2c725ae72d1d493b12b364567695_295_235_f.jpg"
            },
            {
                "name": "Ватні палички",
                "brand": "ТМ «Своя Линия», 200 шт.",
                "price": "ціна 10.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/d/d/1/7/ddd17730fa36fa763c7a503568493490_295_235_f.jpg"
            },
            {
                "name": "Диски ватні косметичні",
                "brand": "ТМ «Своя Лінія» - 120 шт.",
                "price": "ціна 13.6 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/c/2/7/b/3c27bdead5971b75515107c160559635_295_235_f.jpg"
            },
            {
                "name": "Серветки вологі дитячі з екстрактом череди, ромашки, календули",
                "brand": "ТМ «Своя Лінія» - 70 шт.",
                "price": "ціна 25.4 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/5/d/a/d/25dad2e35b039e76edf26454e37fac35_295_235_f.jpg"
            },
            {
                "name": "Серветки вологі антибактеріальні",
                "brand": "ТМ «Своя Лінія» - 10 шт",
                "price": "ціна 3.9 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/f/d/1/7/2fd17be3c99be4e174c05770160a86be_295_235_f.jpg"
            },
            {
                "name": "Лак для волосся ультрасильної фіксації",
                "brand": "ТМ «Своя Линия» - 225 мл",
                "price": "ціна 26.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/0/9/d/b/309dbc642e4d48a3f1c1db3dcfcd7a4a_295_235_f.jpg"
            },
            {
                "name": "Губка банна у формі банта",
                "brand": "ТМ «Своя Линия»",
                "price": "ціна 12.3 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/8/f/0/d/6/8f0d6e65e8a3f872c78182d882049e61_295_235_f.jpg"
            },
            {
                "name": "Крем-мило рідке персик і жожоба",
                "brand": "ТМ «Своя Лінія» - 460 мл",
                "price": "ціна 35.4 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/3/b/5/3/5/3b535bfd719e47084e6e01bb68a5b661_295_235_f.png"
            },
            {
                "name": "Крем зволожуючий з екстрактом алое",
                "brand": "ТМ «Своя Лінія» - 80 мл",
                "price": "ціна 10.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/6/a/9/6/16a964696f28e4ef5c8be5e151a49854_295_235_f.jpg"
            },
            {
                "name": "Мило туалетне «Бузок»",
                "brand": "ТМ «Розумний Вибір» - 70 г",
                "price": "ціна 5.7 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/8/e/6/1/8/8e61892e907472e2919aeaa0781f91fd_295_235_f.jpg"
            },
            {
                "name": "Підгузки дитячі «MY BABY»",
                "brand": "ТМ «Своя Лінія»",
                "price": "ціна 216.9 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/d/9/4/0/9d940fb748d36b825b6f02ec48678717_295_235_f.jpg"
            }
        ],
        "goodsHome": [
            {
                "name": "Серветки паперові одношарові білі",
                "brand": "ТМ «Своя Лінія» - 60 шт",
                "price": "ціна 4.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/d/2/a/0/2d2a0c16a8e3a4de7ce9910e02716d4f_295_235_f.jpg"
            },
            {
                "name": "Серветки паперові кольорові",
                "brand": "ТМ «Своя Лінія» - 50 шт.",
                "price": "ціна 4.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/c/2/4/9/f/c249f5f4c20827aba82fb7751e061735_295_235_f.jpg"
            },
            {
                "name": "Туалетний папір",
                "brand": "ТМ «Своя Лінія», 4 шт.",
                "price": "ціна 24 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/d/9/8/1/0/d981019f67842eb838cd5672d95a408f_295_235_f.jpg"
            },
            {
                "name": "Губки металеві для очищення сильно забруднених поверхонь",
                "brand": "ТМ «Своя Лінія» - 2 шт.",
                "price": "ціна 12.4 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/7/3/3/b/f/733bf2738783d00357e2918e7f24bb3d_295_235_f.jpg"
            },
            {
                "name": "Освіжувач повітря Свіжість водоспаду «RIO»",
                "brand": "ТМ «Своя Лінія» - 300 мл",
                "price": "ціна 14.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/c/b/c/e/2/cbce2616d8b84dfd5f1ea2a008949c4c_295_235_f.jpg"
            },
            {
                "name": "Засіб для миття посуду «Бальзам з ароматом алое вера + гліцерин» «Rio»",
                "brand": "ТМ «Своя Лінія» - 500 г",
                "price": "ціна 19 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/f/f/d/2/1ffd26680beb8a1faf1742aaab270ea4_295_235_f.jpg"
            },
            {
                "name": "Рукавички господарські з бавовняним напиленням усередині (разм. S, M, L)",
                "brand": "ТМ «Своя Лінія» ",
                "price": "",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/2/c/d/f/d/2cdfd25351b9622b5189b14f962da65d_295_235_f.jpg"
            },
            {
                "name": "Таблетки для зливного бачка «Морська свіжість» «RIO»",
                "brand": "ТМ «Своя Лінія» - 4 шт.",
                "price": "ціна 24.95 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/5/b/8/8/b/5b88b4f64455d33a4cc26cb24c6fc4b6_295_235_f.jpg"
            }
        ],
        "clothes": [
            {
                "name": "Колготки жіночі Classic 40 ден бежеві/чорні",
                "brand": "ТМ «Своя Лінія» - розміри 2,3,4,5",
                "price": "ціна 42.5 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/9/6/2/e/2/962e258db289661ce430f1fb110e8dad_295_235_f.jpg"
            },
            {
                "name": "Шкарпетки чоловічі",
                "brand": "ТМ «Своя Лінія», 1 пара",
                "price": "ціна 22.8 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/b/8/d/6/1b8d67952cbe9aef98649ff700c45126_295_235_f.jpg"
            },
            {
                "name": "Шкарпетки чоловічі «PREMIUM QUALITY»",
                "brand": "ТМ «Своя Лінія», 1 пара",
                "price": "ціна 20.9 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/e/2/8/6/4/e2864050ce22f719272e25f10154b183_295_235_f.jpg"
            },
            {
                "name": "Шкарпетки жіночі спорт «PREMIUM QUALITY»",
                "brand": "ТМ «Своя Лінія», 1 пара",
                "price": "ціна 20 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/a/b/2/b/2/ab2b203b72a1dd9f64a6966fc710626e_295_235_f.jpg"
            },
            {
                "name": "Колготки жіночі, 40 DEN",
                "brand": "ТМ «Розумний вибір»",
                "price": "ціна 40.45 грн.",
                "imageUrl": "http://www.atbmarket.com/attachments/product_stm/1/a/1/c/c/1a1cc14861ecd64ffb7ea07ee111af09_295_235_f.jpg"
            }
        ]
    };



    var goodsList = JSON.stringify(goods);
    localStorage.setItem("goods", goodsList);

};









