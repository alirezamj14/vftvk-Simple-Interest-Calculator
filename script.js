function compute()
{
    let capital = document.getElementById("capital").value;
    if (capital <= 0) {
        alert("Please enter a positive value as an amount.");
        document.getElementById("capital").focus();
        return;
    }
    let r = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let totalInterest = Math.round(capital * ((r/100) * years));
    let targetYear = Number(years) + 2022;
    const para = document.createElement("p");
    para.setAttribute("id", "my_paragraph");
    const line1 = document.createTextNode("If you deposit " + capital);
    const line2 = document.createTextNode("at an interest rate of " + r +"%.");
    const line3 = document.createTextNode("You will receive an amount of " + totalInterest + ",");
    const line4 = document.createTextNode("in the year " + targetYear);
    para.appendChild(line1);
    para.appendChild(document.createElement("br"));
    para.appendChild(line2);
    para.appendChild(document.createElement("br"));
    para.appendChild(line3);
    para.appendChild(document.createElement("br"));
    para.appendChild(line4);

    const div1 = document.getElementById("div1");
    div1.replaceChild(para, div1.lastChild);
}
        