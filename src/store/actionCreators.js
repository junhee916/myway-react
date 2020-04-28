import * as actionTypes from './actionTypes'

export const login_success = (name, age, secret_token, profile_url, nickName) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        secret_token : secret_token,
        name : name,
        age : age,
        profile_url: profile_url,
        nickName : nickName,
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}

export const update_content = (content) => {
    return {
        type: actionTypes.UPDATE_CONTENT,
        content: content,
    }
}

export const update_title = (title) => {
    return {
        type: actionTypes.UPDATE_TITLE,
        title: title,
    }
}

export const update_id = (id) => {
    return {
        type: actionTypes.UPDATE_ID,
        id: id,
    }
}

export const update_pw = (pw) => {
    return {
        type: actionTypes.UPDATE_PW,
        pw: pw,
    }
}

export const update_name = (name) => {
    return {
        type: actionTypes.UPDATE_NAME,
        name: name,
    }
}

export const update_birth = (birth) => {
    return {
        type: actionTypes.UPDATE_BIRTH,
        birth: birth,
    }
}

export const update_number = (number) => {
    return {
        type: actionTypes.UPDATE_NUMBER,
        number: number,
    }
}

export const update_profileurl = function(profile_url){
    return{
        type: actionTypes.UPDATE_PROFILEURL,
        profile_url: profile_url
    }
}

// MainPage

// export const update_buildname = function(buildname){
//     return{
//         type: actionTypes.UPDATE_BUILDNAME,
//         buildname : buildName
//     }
// }

export const update_address = function(address){
    return{
        type: actionTypes.UPDATE_ADDRESS,
        address:address
    }
}

export const update_addressEnd = function(addressEnd){
    return{
        type: actionTypes.UPDATE_ADDRESSEND,
        addressEnd:addressEnd
    }
}

export const update_nickName = function(nickName){
    return{
        type: actionTypes.UPDATE_NICKNAME,
        nickName : nickName
    }
}

export const update_startUrl = function(start_url){
    return{
        type: actionTypes.UPDATE_STARTURL,
        start_url: start_url
    }
}

export const update_endUrl = function(end_url){
    return{
        type: actionTypes.UPDATE_ENDURL,
        end_url: end_url
    }
}

export const update_profiledata = function(profile_data){
    return{
        type: actionTypes.UPDATE_PROFILEDATA,
        profile_data: profile_data
    }
}


export const update_msg = function(msg){
    return{
        type: actionTypes.UPDATE_MSG,
        msg:msg
    }
}

export const update_bookurl = function(book_url){
    return{
        type: actionTypes.UPDATE_BOOKURL,
        book_url:book_url
    }
}

export const update_bookname = function(book_name){
    return{
        type: actionTypes.UPDATE_BOOKNAME,
        book_name:book_name
    }
}

export const update_date = function(date){
    return{
        type: actionTypes.UPDATE_DATE,
        date:date
    }
}

export const update_tododate = function(todo_date){
    return{
        type: actionTypes.UPDATE_TODODATE,
        todo_date:todo_date
    }
}

export const update_todomemo = function(todo_memo){
    return{
        type: actionTypes.UPDATE_TODOMEMO,
        todo_memo:todo_memo
    }
}

export const update_startName = function(startName){
    return{
        type: actionTypes.UPDATE_STARTNAME,
        startName:startName
    }
}

export const update_endName = function(endName){
    return{
        type: actionTypes.UPDATE_ENDNAME,
        endName:endName
    }
}

export const update_totalName = function(totalName){
    return{
        type: actionTypes.UPDATE_TOTALNAME,
        totalName:totalName
    }
}

export const update_totalNameReverse = function(totalNameReverse){
    return{
        type: actionTypes.UPDATE_TOTALNAMEREVERSE,
        totalNameReverse:totalNameReverse
    }
}