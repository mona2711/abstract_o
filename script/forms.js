$(document).ready(function() {
    make_demographic_form()
    make_eng_form()
    make_empathy_form("empathy_form_list", "Pre_")
    make_empathy_form("empathy_postform_list", "Post_")
});

function make_demographic_form() {
    var age_options = ["18 - 25", "26 - 35", "36 - 45", "46 - 65", "66 or older", "Prefer not to answer"];
    var education_options = ["Undergraduate", "Masters", "PhD", "Postdoctoral", "Prefer not to answer"];
    var discipline_value = ["Humanities", "Social Sciences", "Natural Sciences", "Formal Sciences", "Applied Science", "Prefer not to answer"];
    var discipline_labels = [
        "Humanities (Arts, History, Languages and literature, Law, Music, Philosophy, Theater, Journalism..)",
        "Social Sciences (Anthropology, Economics, Geography, Political science, Psychology, Sociology..)",
        "Natural Sciences (Biology, physics, Chemistry, Space science, Earth science, Life sciences..)",
        "Formal Sciences (Computer Science, Mathematics, Statistics, Information science..)",
        "Applied Science (Business, Engineering & technology, Medicine & health, Architecture, Agriculture..)",
        "Prefer not to answer"
    ]

    $('#age_wrapper').append('<p>Age</p>')
    $('#education_wrapper').append('<p>Highest level of education completed</p>')
    $('#discipline_wrapper').append('<p>Discipline or field of study</p>')
    $("#age_wrapper").append('<div class="form-check-inline" id= "age_op_wrapper"></div>')
    $("#education_wrapper").append('<div class="form-check-inline" id= "education_op_wrapper"></div>')
    $("#discipline_wrapper").append('<div class="form-check-inline" id= "discipline_op_wrapper"></div>')

    for (var i = 1; i <= age_options.length; i++) {
        $("#age_op_wrapper").append(
            $('<input>').prop({
                type: 'radio',
                id: 'age_question1_option' + i,
                name: 'Age',
                value: age_options[i - 1],
                class: 'form-check-input',
                required: 'true'
            })
        ).append(
            $('<label>').prop({
                for: 'age_question1_option' + i
            }).html(age_options[i - 1])
        )
    }

    for (var i = 1; i <= education_options.length; i++) {
        $("#education_op_wrapper").append(
            $('<input>').prop({
                type: 'radio',
                id: 'education_question1_option' + i,
                name: 'Highest_education',
                value: education_options[i - 1],
                class: 'form-check-input',
                required: 'true'
            })
        ).append(
            $('<label>').prop({
                for: 'education_question1_option' + i
            }).html(education_options[i - 1])
        )
    }

    for (var i = 1; i <= discipline_value.length; i++) {
        $("#discipline_op_wrapper").append('<div id= "' + "discipline" + i + '"></div>')
        $("#discipline" + i).append(
            $('<input>').prop({
                type: 'radio',
                id: 'descipline_question1_option' + i,
                name: 'Academic_discipline',
                value: discipline_value[i - 1],
                class: 'form-check-input',
                required: 'true'
            })
        ).append(
            $('<label>').prop({
                for: 'descipline_question1_option' + i
            }).html(discipline_labels[i - 1])
        )
    }
}


function make_eng_form() {

    var eng_scale = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]

    var eng_questions = [
        "While using this interactive visualization, I found its look and feel to be pleasing.",
        "The layout of this interactive visualization is clear and balanced.",
        "While using this interactive visualization, I felt absorbed to the extent that I was not aware of my surroundings.",
        "While using this interactive visualization, time seemed to pass quickly.",
        "While using this interactive visualization, I enjoyed and accepted any challenges it presented.",
        "While using this interactive visualization, I had to think carefully, deeply, or reflectively.",
        "While using this interactive visualization, its functions and features worked as I expected.",
        "While using this interactive visualization, I felt in control.",
        "While using this interactive visualization, I learned something that I had not known before (a piece of information).",
        "While using this interactive visualization, I learned and figured out how to use it along the way.",
        "While using this interactive visualization, I felt as though I was moving in or through it to learn about its content or message.",
        "While using this interactive visualization, I was exploring its features and content in a gradual fashion.",
        "While using this interactive visualization, I found myself imagining things not directly related to what I was seeing in the visualization.",
        "While using this interactive visualization, I found myself generating new and original thoughts or ideas.",
        "While using this interactive visualization, I found myself concentrating on specific aspects or features of the visualization.",
        "While using this interactive visualization, I had to pay attention to multiple things at the same time.",
        "The content or message of this interactive visualization was interesting to me.",
        "The features or interactions provided in this interactive visualization were interesting to me.",
        "The look and feel of this interactive visualization were novel and fresh.",
        "The features or interactions provided in this interactive visualization were novel and fresh.",
        "While using this interactive visualization, I experienced a deeper understanding of the topic.",
        "I would want to use this interactive visualization if I saw it somewhere else and was not required or encouraged to use it.",
    ]

    for (var i = 1; i <= eng_questions.length; i++) {
        $("#eng_form_list").append('<li id= "' + "eng_li" + i + '"></li>')
        $("#eng_li" + i).append('<p class="eng_questions">' + eng_questions[i - 1] + '</p>')
        $("#eng_li" + i).append('<div class="form-check-inline eng_wrapper" id= "' + "eng_op_wrapper" + i + '"></div>')

        for (var j = 1; j <= eng_scale.length; j++) {
            $("#eng_op_wrapper" + i).append(
                $('<input>').prop({
                    type: 'radio',
                    id: i + 'eng_question1_option' + j,
                    name: 'eng_question' + i,
                    // value: eng_scale[j - 1],
                    value:j,
                    class: 'form-check-input',
                    // checked: 'true',
                    required: 'true'
                })
            ).append(
                $('<label>').prop({
                    for: i + 'eng_question1_option' + j
                }).html(eng_scale[j - 1])
            )
        }
    }
}

function make_empathy_form(form, type) {

    var empathy_scale = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    var empathy_questions = [
        "I feel like crying when watching a sad movie.",
        "Certain pieces of music can really move me.",
        "Seeing a hurt animal by the side of the road is very upsetting.",
        "I don't give others feelings much thought.",
        "It makes me happy when I see people being nice to each other.",
        "The suffering of others deeply disturbs me.",
        "I always try to tune in to the feelings of those around me.",
        "I get very upset when I see a young child who is being treated meanly.",
        "Too much is made of the suffering of pets or animals.",
        "If someone is upset, I get upset too.",
        "When I am with other people who are laughing, I join in.",
        "It makes me mad to see someone treated unjustly.",
        "I rarely notice when people treat each other warmly.",
        "I feel happy when I see people laughing and enjoying themselves.",
        "It is easy for me to get carried away by other people's emotions.",
        "My feelings are mine alone and are not a reflection of how others feel.",
        "If a crowd gets excited about something, so do I.",
        "I feel good when I help someone out or do something nice for someone.",
        "The feelings I feel for others are deep.",
        "I don't cry easily.",
        "I feel other people's pain.",
        "Seeing other people smile makes me smile.",
        "Being around happy people makes me feel happy too.",
        "TV or news stories about injured or sick children greatly upset me.",
        "I cry at sad parts of the books I read.",
        "Being around people who are depressed brings my mood down.",
        "I find it annoying when people cry in public.",
        "It hurts to see another person in pain.",
        "I get a warm feeling for someone if I see them helping another person.",
        "I feel other people's joy.",
    ]


    for (var i = 1; i <= empathy_questions.length; i++) {
        $("#" + form).append('<li id= "' + type + "emp_li" + i + '"></li>')
        $("#" + type + "emp_li" + i).append('<p class="emp_questions">' + empathy_questions[i - 1] + '</p>')
        $("#" + type + "emp_li" + i).append('<div class="form-check-inline emp_wrapper" id= "' + type + "emp_op_wrapper" + i + '"></div>')

        for (var j = 1; j <= empathy_scale.length; j++) {
            $("#" + type + "emp_op_wrapper" + i).append(
                $('<input>').prop({
                    type: 'radio',
                    id: type + i + 'empathy_question1_option' + j,
                    name: type + 'empathy_question' + i,
                    value:j,
                    // value: empathy_scale[j - 1],
                    class: 'form-check-input',
                    // checked: 'checked',
                    required: 'true'
                })
            ).append(
                $('<label>').prop({
                    for: type + i +  'empathy_question1_option' + j
                }).html(empathy_scale[j - 1])
            )
        }
    }
}