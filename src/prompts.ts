import {CLIOptions, SelectedAnswers} from "../types/types";
import inquirer from "inquirer";
export default async function getUserChoice(opts: CLIOptions): Promise<SelectedAnswers> {
    const is_JS = opts.javaScript
    const  is_TS = opts.typeScript
    const skip_choice = opts.yes

    let lang:"typescript"|"javascript" = "javascript"   // JS is default ...
    let installDeps = opts.installDeps ?? false


    //skip choice / prompts if 'yes' is selected
    if(skip_choice){
        return {
            lang:is_JS ? "javascript" : "typescript",
            installDeps
        }
    }

    if(!is_JS && is_TS){
        const  langSelect = await inquirer.prompt([
            {
                type: "list",
                name: "language",
                message: "Which language do you want to use?",
                choices: [ "JavaScript" ,"TypeScript"],
                default: "JavaScript",
            },

        ])
        lang=  langSelect.language.toLowerCase()


    }

    else{
        lang = is_TS ? "typescript" : "javascript"
    }


    // ask the user if  they wants to install recommended dev dependencies...
    if (opts.installDeps === undefined) {
        const installAnswer = await inquirer.prompt([
            {
                type: "confirm",
                name: "installDeps",
                message: "Install recommended dev dependencies (tsc, eslint, jest, etc.)?",
                default: false,
            },
        ]);
        installDeps = installAnswer.installDeps;
    }

    return {
        lang,
        installDeps,
    };

}
