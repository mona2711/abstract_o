$(function() {
    // $('#part-A-container').hide()
    // $('#part-B-container').show()
    // $('#part-C-container').hide()

    function timestamp(timestamp_ID) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        $(timestamp_ID).val(dateTime)
    }

    timestamp('#timestamp_A_1_entry');

    //storing the value of prolofic id in all sheets
    $("#pid-form").submit(function(e) {
        var value = $("#input_name").val();
        $("#pid").val(value)
        $("#pid_B").val(value)
        $("#pid_feedback").val(value)
        $("#pid_C").val(value)
        e.preventDefault();
    });

    //variables needed to send data to respective sheet in spreadsheet
    const scriptURL_A = 'https://script.google.com/macros/s/AKfycbzc4mSocxIWcJ5cptgIAVA9AK7w-wh6uVJB8pyHaZ_TeEU_pWBApLYyws6-38bPoewT/exec'
    const scriptURL_B0 = 'https://script.google.com/macros/s/AKfycbz-6hTPVnqai-UBQWScVrJNyLQr2EjkT5qUItxKPqWDtr6gTgiVvdZm-Lxpuzn-2qW8/exec'
    const scriptURL_B1 = 'https://script.google.com/macros/s/AKfycbzPXRhAzJf6WX4-XzdC1HVr-Oy-gXM6npoizpDdgF56Ag6208gVmDUUBBuuk2cBCyrS/exec'
    const scriptURL_C = 'https://script.google.com/macros/s/AKfycbylKaOVywNLyhT19ZflFS_Pqmx5aTxNxUB3Q1_ZEXKYJ_0fyoYs6DTWXS196euULx3K/exec'

    const form_A = document.forms["submit-to-google-sheet_A"]
    const form_B0 = document.forms["submit-to-google-sheet_B0"]
    const form_B1 = document.forms["submit-to-google-sheet_B1"]
    const form_C = document.forms["submit-to-google-sheet_C"]

    //function to fill all user study data in spreadsheets
    function study_Data(scriptURL, form, SheetName, hide_Comp, show_Comp, timestamp_ID, error) {
        form.querySelector('button[type="submit"]').addEventListener('click', function(e) {
            // alert('clicked')
            e.preventDefault();
            var isFormValid = true;
            var form_id = form.id;
            $("#" + form_id + ' ' + "input:required").each(function() {
                if (($(this).attr('type') == "text") && ($(this).val().length == 0)) {
                    $(this).addClass('highlight')
                    $(error).show()
                    isFormValid = false;
                } else if (($(this).attr('type') == "radio")) {
                    var g_name = $(this).attr('name');
                    if ($("input:radio[name=" + g_name + "]:checked").length == 0) {
                        $(this).addClass('highlight')
                        isFormValid = false;
                        $(error).show()
                    } else {
                        $(this).removeClass("highlight");
                    }
                } else {
                    $(this).removeClass("highlight");
                }
            })

            if (SheetName == 'Study_Part_B_interactions') {
                var val = form.elements.viz_fact_learned.value;
                // if (/^\s*$/g.test(val) || val.indexOf('\n') != -1) {
                    if(val.trim().length < 1){
                    isFormValid = false;
                    $(error).show()
                }
            }
            if (isFormValid) {
                $(error).hide()
                var headers = {}
                timestamp(timestamp_ID);
                e.parameters = {
                    sheetName: SheetName
                }

                if (SheetName == 'Study_Part_B_interactions') { 
                    $('#timestamp_C_entry').val($(timestamp_ID).val());
                }

                if (SheetName == 'Study_Part_A') {
                    $("#overview-modal").modal();
                    $('#timestamp_B_0_entry').val($(timestamp_ID).val());
                }
                if (SheetName == 'Study_Part_B_Ques') {
                    d3.selectAll('.flower').style('opacity', 1)
                    $('#victim_status_clicks,#harasser_status_clicks,#h_gender_clicks,#itype_clicks,#discipline_clicks,#reset_clicks').val(0);
                    $('#no_story_clicked').val(0);
                    $('#no_story_clicked,#story_clicked_ids').val(" ");
                    $('#timestamp_B_1_entry').val($(timestamp_ID).val());
                    d3.selectAll("circle").classed('story_highlighted', false);
                    $("#viz_interaction-modal").modal();
                }
                // console.log(e)
                fetch(scriptURL, {
                        method: 'POST',
                        mode: 'cors',
                        headers: headers,
                        body: new FormData(form)
                    })
                    // .then(response => console.log('Success!', response))
                    // .catch(error => console.error('Error!', error.message))
                $(hide_Comp).hide()
                $(show_Comp).show()

            }
        });
    }

    study_Data(scriptURL_A, form_A, 'Study_Part_A', "#part-A-container", "#part-B-container", "#timestamp_A", "#error-msg_A")
    study_Data(scriptURL_B0, form_B0, 'Study_Part_B_Ques', "#viz_tasks,#instruction_part_B", "#viz_facts_byUser", "#timestamp_B_0", "#error-msg_B0")
    study_Data(scriptURL_B1, form_B1, 'Study_Part_B_interactions', "#part-B-container", "#part-C-container", "#timestamp_B_1_exit", "#error-msg_B1")
    study_Data(scriptURL_C, form_C, 'Study_Part_C', "#part-C-container", "#return_to_prolofic", "#timestamp_C", "#error-msg_C")
});