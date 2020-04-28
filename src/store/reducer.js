import *as actionTypes from './actionTypes'

const initialState = {
    name: localStorage.getItem("name"), 
    age: localStorage.getItem("age"),
    isLogin: Boolean(localStorage.getItem("isLogin")),
    secret_token: localStorage.getItem("secret_token"),
    title: null,
    content :null,
    nickName: localStorage.getItem("nickname"),
    buildname: null,
    id: null,
    pw: null,
    birth: null,
    number: null,
    profile_url: localStorage.getItem("profile_url"),
    profile_data: null,
    start_url:null,
    end_url:null,
    address: null,
    addressEnd:null,
    msg: null, 
    done: false,
    book_name:null,
    date:null,
    todo_date:null,
    todo_memo:null,
    todo_seq:null,
    startName: null,
    endName:null,
    totalName:null,
    totalNameReverse:null,
    book_url:localStorage.getItem("book_url"),
}

const reducer = function(state=initialState, action){
    if(action.type===actionTypes.LOGIN_SUCCESS){
        localStorage.setItem("name", action.name)
        localStorage.setItem("age", action.age)
        localStorage.setItem("secret_token", action.secret_token)
        localStorage.setItem("isLogin", true)      
        localStorage.setItem("profile_url", action.profile_url)       
        localStorage.setItem("nickname", action.nickName)   
        return{
            ...state,
            name: action.name,
            age: action.age,
            secret_token: action.secret_token,
            profile_url: action.profile_url,
            nickName: action.nickName,
            isLogin: true
        }
    }

    else if(action.type===actionTypes.LOGOUT){
        return{
            ...state,
            name: null,
            age: null,
            title:null,
            content:null,
            address: null,
            isLogin:false,
            nickName: "user"
        }
    } else if (action.type === actionTypes.UPDATE_CONTENT){
        return {
            ...state,
            content: action.content,
        }
    } else if (action.type === actionTypes.UPDATE_TITLE){
        return{
            ...state,
            title: action.title
        }
    }
    else if (action.type === actionTypes.UPDATE_ID){
        return{
            ...state,
            id: action.id
        }
    }
    else if (action.type === actionTypes.UPDATE_PW){
        return{
            ...state,
            pw: action.pw
        }
    }
    else if (action.type === actionTypes.UPDATE_NAME){
        return{
            ...state,
            name: action.name
        }
    }
    else if (action.type === actionTypes.UPDATE_BIRTH){
        return{
            ...state,
            birth: action.birth
        }
    }
    else if (action.type === actionTypes.UPDATE_NUMBER){
        return{
            ...state,
            number: action.number
        }
    }
    else if (action.type === actionTypes.UPDATE_PROFILEURL){
        return{
            ...state,
            profile_url: action.profile_url
        }
    }
    else if (action.type === actionTypes.UPDATE_NICKNAME){
        return{
            ...state,
           nickName : action.nickName
        }
    }
    else if (action.type === actionTypes.UPDATE_PROFILEDATA){
        return{
            ...state,
            profile_data: action.profile_data
        }
    }

    else if (action.type === actionTypes.UPDATE_BUILDNAME){
        return{
            ...state,
            buildname: action.buildname
        }
    }
    else if (action.type === actionTypes.UPDATE_ADDRESS){
        return{
            ...state,
            address: action.address
        }
    }
    else if (action.type === actionTypes.UPDATE_ADDRESSEND){
        return{
            ...state,
            addressEnd: action.addressEnd
        }
    }
    else if (action.type === actionTypes.UPDATE_MSG){
        return{
            ...state,
            msg: action.msg
        }
    }

    else if (action.type === actionTypes.UPDATE_BOOKURL){
        return{
            ...state,
            book_url: action.book_url
        }
    }

    else if (action.type === actionTypes.UPDATE_BOOKNAME){
        return{
            ...state,
            book_name: action.book_name
        }
    }

    else if (action.type === actionTypes.UPDATE_DATE){
        return{
            ...state,
            date: action.date
        }
    }

    else if (action.type === actionTypes.UPDATE_TODODATE){
        return{
            ...state,
            todo_date: action.todo_date
        }
    }

    else if (action.type === actionTypes.UPDATE_TODOMEMO){
        return{
            ...state,
            todo_memo: action.todo_memo
        }
    }

    else if (action.type === actionTypes.UPDATE_TODOSEQ){
        return{
            ...state,
            todo_seq: action.todo_seq
        }
    }

    else if (action.type === actionTypes.UPDATE_STARTURL){
        return{
            ...state,
            start_url: action.start_url
        }
    }

    else if (action.type === actionTypes.UPDATE_ENDURL){
        return{
            ...state,
            end_url: action.end_url
        }
    }

    else if (action.type === actionTypes.UPDATE_STARTNAME){
        return{
            ...state,
            startName: action.startName
        }
    }

    else if (action.type === actionTypes.UPDATE_ENDNAME){
        return{
            ...state,
            endName: action.endName
        }
    }

    else if (action.type === actionTypes.UPDATE_TOTALNAME){
        return{
            ...state,
            totalName: action.totalName
        }
    }

    else if (action.type === actionTypes.UPDATE_TOTALNAMEREVERSE){
        return{
            ...state,
            totalNameReverse: action.totalNameReverse
        }
    }

     else{
        return state;
    }
}

export default reducer