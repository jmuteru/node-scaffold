//cli options
export  interface CLIOptions  {
    typeScript?:boolean
    javaScript?:boolean
    installDeps?:boolean
    yes?:boolean
}

//selected cli choices

export  interface SelectedAnswers {
    lang:"typescript"|"javascript"
    installDeps:boolean
}