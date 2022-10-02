
function letterData(props) {
    let textarea = $('#textarea').val();
    let input = $('#input').val();
    let write = new Date();
    let newwrite = write.toLocaleDateString();
    let openornot = false;
    let letterData = { "desc": textarea, "fontcolor": fontcolor, "fontfamily": fontfamily, "icon": lettericon, "author": input, "write": newwrite, "openornot": openornot };
    console.log(letterData)
    console.log(textarea);
    console.log(fontcolor);
    console.log(fontfamily);

    console.log(lettericon);
    console.log(input);
    console.log(newwrite);
    console.log(openornot);

    if (confirm("textarea: " + textarea + ", fontcolor: " + fontcolor + ", fontfamily: " + fontfamily + ", lettericon: " + lettericon + ", input: " + input + ", newwrite: " + newwrite + ", openornot: " + openornot + "으로 정보를 전송할까요?")) {
        fetch('www.ourserver.com/' + props, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(letterData)
        })
            .then(res => {
                if (res.ok) {
                    console.log(res)
                    $('#senddata2').html('Success!');
                } else {
                    console.log(res)
                    $('#senddata2').html('Failed!');
                }
            });
    } else {
        alert("전송을 취소합니다.")
    }
};

function fontColor(props) {
    fontcolor = props;
};

function fontFamily(props) {
    fontfamily = props;
};

function letterIcon(props) {
    lettericon = props;
};

let userData = '';
let userid = '';
let fontcolor = '';
let fontfamily = '';
let lettericon = '';

async function requestUserData() {
    fetch('./userData.json')
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            userData = json;
            $('#useremail').html(userData.email);
            $('#nickname').html(userData.nickname);
            $('#userbirthday').html(userData.birthday);
            $('#usergender').html(userData.gender);
            console.log(userData);
        })
};

function deleteUserData() {
    userData = '';
    $('#useremail').html('');
    $('#nickname').html('');
    $('#userbirthday').html('');
    $('#usergender').html('');
};

function toServer(props) {
    console.log(props);
    fetch('www.ourserver.com', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
    })
        .then(res => {
            if (res.ok) {
                console.log(res)
                $('#senddata').html('Success!');
                $('#userid').html(String(res));
            } else {
                console.log(res)
                $('#senddata').html('Failed!');
                $('#userid').html(String(res));
            }
        });
};

function deleteUserId() {
    userid = '';
    $('#userid').html('');
};

async function getUserData(props) {
    fetch('www.ourserver.com/' + props)
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            console.log(json)
        });
};

async function getUserLetter(props) {
    fetch('www.ourserver.com/' + props)
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            console.log(json)
        })
};
