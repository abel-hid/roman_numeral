document.getElementById('convert-btn').addEventListener('click', function()
{
    const input = document.getElementById('number').value;
    const output = document.getElementById('output');

    if (input === '') 
    {
        output.textContent = 'Please enter a valid number';
        return;
    }

    const number = parseInt(input);

    if (number < 1) 
        output.textContent = 'Please enter a number greater than or equal to 1';
    else if (number >= 4000)
        output.textContent = 'Please enter a number less than or equal to 3999';
    else
        output.textContent = convert_to_roman(number);
});

function convert_to_roman(num) 
{
    const nums = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let res = '';
    for (let i = 0; i < nums.length; i++)
    {
        const { value, symbol } = nums[i];
        res += symbol.repeat(Math.floor(num / value));
        num %= value;
    }
    return res;
}
