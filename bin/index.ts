import { Command } from "commander";
import prompts from "../src/prompts";
import scaffold from "../src/scaffold";



const main = async () =>{
    const toolOpts =  new Command()
    toolOpts.option("--typescript", "Use TypeScript")
    toolOpts.option("--javascript", "Use JavaScript")
    toolOpts.option("--install-deps", "Install recommended dev dependencies")
    toolOpts.option("--yes", "Skip all prompts and use defaults")

    toolOpts.parse(process.argv);
    const options = toolOpts.opts()
    
    
    try {
        const selectedChoice =await prompts(options);
        await scaffold.(selectedChoice)
    }
    catch (e) {
        console.error(`Error: ${e instanceof Error ? e.message : e}`);
        process.exit(1)
        
    }
    main()





}