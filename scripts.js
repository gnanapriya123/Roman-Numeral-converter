document.getElementById('convert-btn').addEventListener('click',function(){
    const input=document.getElementById('number').value.trim();
    const result=document.getElementById('output');

    if(input=='')
    {
        result.textContent="Please enter a valid number";
        return;
    }

    const number = parseInt(input, 10);  // Convert input to a number

    if (isNaN(number)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if(number<1)
    {
        result.textContent="Please enter a number greater than or equal to 1";
        return;
    }

    if(number>=4000)
    {
        result.textContent="Please enter a number less than or equal to 4000";
        return;
    }

    result.textContent=convertToRoman(number);
});

function convertToRoman(num)
{
    const romanNumerals=[
        { value: 1000, numeral: "M" },
                { value: 900, numeral: "CM" },
                { value: 500, numeral: "D" },
                { value: 400, numeral: "CD" },
                { value: 100, numeral: "C" },
                { value: 90, numeral: "XC" },
                { value: 50, numeral: "L" },
                { value: 40, numeral: "XL" },
                { value: 10, numeral: "X" },
                { value: 9, numeral: "IX" },
                { value: 5, numeral: "V" },
                { value: 4, numeral: "IV" },
                { value: 1, numeral: "I" }
    ];

    let results="";
    for(const {value,numeral}of romanNumerals)
    {
        while(num>=value)
        {
            results+=numeral;
            num-=value;
        }
    }
    return results;
}
    