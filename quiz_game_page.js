function send()
{
    document.getElementById("NUMBER1").value;
    document.getElementById("NUMBER2").value;
    actual_answer = parseInt(NUMBER1) * parseInt(NUMBER2);

    question_number = "<h4>"+NUMBER1+"X"+NUMBER2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("NUMBER1").value = "";
    document.getElementById("NUMBER2").value = "";
}
