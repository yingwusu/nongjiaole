let fenshu = document.getElementById('fenshu')
let pipeizongjie = document.getElementById('pipeizongjie')
let tuijian = document.getElementById('tuijian')
document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                document.body.style.display = "block";
            } else {
                document.body.style.display = "none";
            };
        };

let pipeiyu = localStorage.pipeidu + '分！'

fenshu.innerHTML = pipeiyu

tuijian.innerHTML = localStorage.tuijian_final


gexing = function()
{
    if(parseInt(localStorage.pipeidu)>60)
    {
        pipeizongjie.innerHTML = "富平柿饼非常适合您呀!<br>可以试试看！"
    }
    else
    {
    pipeizongjie.innerHTML = "或许您可以试试寻乌脐橙！<br>相信您不会失望！"
    }
}
