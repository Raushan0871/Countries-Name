// // let title = document.createElement('h2');
// // title.className='open';
// // title.id='top';
// // title.innerHTML=`raushan Kumar`;
// // title.style.fontSize='24px';
// // console.log(title);


// // let title
// // let arr = ['one','Two','Three','four','five']
// // let h1 =document.querySelector('h1')
// // // h1.remove(h1)

// // for(let j=0;j<arr.length;j++){
// // title =document.createElement('h2');
// // title.className='title';
// //     title.id=arr[j];
// //     title.style.fontSize='50px'
// //     title.textContent='I am a boy'
// //     document.body.appendChild(title)
// // //    document.body.removeChild(title)

// // console.log(title)
// // }


//  Excercise 1
// let title

// for(let i=1;i<=100;i++){
//     title=document.createElement('h2');
//     title.style.fontSize='20px';
//     title.textContent= i
//     document.body.appendChild(title)
//     title.style.display='flex';
//     title.style.justifyContent='center'
//     title.style.alignItems='center'
//     title.style.width='15px';
//     title.style.letterSpacing='4.5px'
//     title.style.border='2px solid green'
//     title.style.width='43px'
//     title.style.flexWrap='wrap'
//     if(i==0 || i==1){
//         title.style.backgroundColor='green'
//     }
//     else if(i==3 || i==5 || i==7){
//         title.style.backgroundColor='red'
//     }
//   else if(i%2==0){
//     title.style.backgroundColor='green'
//   }
//    else if(i%1 == 0 && i%i == 0 && i%2 != 0 && i%3 != 0 && i%4 != 0 && i%5 !=0 && i%6 !=0 && i%7 !=0 && i%8 !=0 ){
//         title.style.backgroundColor='red'
//     }
//     else{
//         title.style.backgroundColor='yellow'
//     }

// }



let country = [' Afghanistan', ' Albania', ' Algeria', ' Andorra', ' Angola', ' Antigua and Barbuda', ' Argentina', ' Armenia', '  Australia', ' Austria', ' Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Brazil', ' Brunei', ' Bulgaria', ' Burkina Faso', ' Burundi', 'Cabo Verde', ' Cambodia', 'Cameroon', ' Canada', ' Central African Republic (CAR)', ' Chad', ' Chile', ' China', 'Colombia', ' Comoros', ' Congo, Democratic Republic of the', ' Congo, Republic of the', ' Costa Rica', ' Cote dIvoire', 'Croatia', ' Cuba', ' Cyprus', ' Czechia',
    ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', '  Estonia', ' Eswatini', ' Ethiopia', ' Fiji', ' Finland', ' France', 'Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Greece', ' Grenada', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Honduras', ' Hungary', '  Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Kosovo', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Mauritania', ' Mauritius', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montenegro', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', '  North Korea', ' North Macedonia', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Palestine', 'Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Poland', ' Portugal', ' Qatar', ' Romania', ' Russia', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and the Grenadines', ' Samoa', ' San Marino', ' Sao Tome and Principe', ' Saudi Arabia', ' Senegal', ' Serbia', ' Seychelles', ' Sierra Leone', ' Singapore', ' Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', ' South Africa', ' South Korea', ' South Sudan', ' Spain', ' Sri Lanka', ' Sudan', ' Suriname', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Timor-Leste', ' Togo', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates (UAE)', ' United Kingdom (UK)', ' United States of America (USA)', ' Uruguay', ' Uzbekistan', ' Vanuatu', '  Vatican City (Holy See)', ' Venezuela', ' Vietnam', ' Yemen', ' Zambia', ' Zimbabwe']

console.log(country.length)
for (let i = 0; i <= country.length; i++) {
    let countries = document.createElement('h2')
    countries.innerHTML = country[i];
    document.querySelector('.container').appendChild(countries)
    countries.style.border = '3px dotted pink'
    countries.style.borderRadius='15px'
    countries.style.width = '250px'
    countries.style.height = '100px'
    countries.style.fontSize = '20px'
    countries.style.fontFamily = 'cursive'
    countries.style.display = 'flex'
    countries.style.justifyContent = 'center'
    countries.style.alignItems = 'center'
    countries.style.backgroundColor=`#${Math.floor(Math.random()*1000000)}`
    countries.style.boxShadow=`rgba(0, 0, 0, 0.35) 0px 5px 15px`;
}

