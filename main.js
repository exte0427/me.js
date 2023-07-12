(()=>{

    const locateManager = (() => {
        let currentLocation = [];

        const set = (func) => {
            const now = currentLocation[currentLocation.length -1];
            if(now ==null || now.name !== func.name)
                currentLocation.push(func);
        }

        const unsetLast = () => {
            currentLocation.pop();
            return currentLocation[currentLocation.length -1];
        }

        const unsetTo = (func) => {
            while(true){
                var nowStr = currentLocation[currentLocation.length -1];

                if(nowStr.name == func.name)
                    break;

                currentLocation.pop();
            }

            return currentLocation[currentLocation.length -1];
        }

        const calculate = () => {
            return currentLocation.map(e=>e.name);
        }

        return {set, unsetLast,unsetTo, calculate}
    })();
    

    const logo=()=>{
        var css = 'font-size:30px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);';
        return '<css="' + css + '">catea</css>';
    }

    const path=()=>{
        return `  ${locateManager.calculate().map(e=>
            `<css="background-color:#ededed;color:black;padding:4px;border-radius:10px">${e}</css>`
        ).join(' <css="color:red">></css> ')}`;
    }

    const alert= (title,desc)=>{
        return `<css="background-color:#ffedba; padding:4px;border-radius:3px;color:#8a7f5f;font-weight:bolder">${title}()</css> <css="color:#a3a3a3; font-size:10px "> ${desc}</css>`;
    }

    const topbar = () =>{
        console.style(`${logo()}${path()}`);
        console.style(`${alert("back","to go back")} . ${alert("home","to go home")}`);
        console.style("");
    }

    const main= ()=>{
        locateManager.set(main);
        console.clear();
        topbar();
        console.style(`<css="font-size:20px;font-weight:bolder">HI! MY NAME IS</css> <css="font-size:20px;font-weight:bolder;color:red">catea</css>`);
        console.log("i'm a game developer, and artist");
        console.log("");
        console.style(`${alert("about_me","to see my further infos")}\n${alert("projects","to see my projects")}`);
    
    }

    about_me=()=>{
        locateManager.set(about_me);
        console.clear();
        topbar();
        console.log("game developer, and artist");
    }

    const projectshower=(title,desc,funcName)=>{
        return `<css="background-color:#9cb3ff; padding:4px;border-radius:3px;color:black;font-weight:bolder">${title}</css><css="color:#a3a3a3; font-size:10px;background-color:#f2f5ff;padding:6px; "> ${desc}</css>\n${alert(funcName,"to check!")}`;
    }

    projects=()=>{
        locateManager.set(projects);
        console.clear();
        topbar();
        console.style(`${projectshower("amedesktop","let your ame run in your desktop","amedesktop")}\n${projectshower("skydive to","some kind of tetris game","skydive_to")}`);
    }

    amedesktop=()=>{
        locateManager.set(amedesktop);
        console.clear();
        topbar();
        console.log("amedesktop is a game that you can play with your desktop. you can download it from itch.io");
        window.open("https://exmuh.itch.io/amedesktop");
    }

    skydive_to=()=>{
        locateManager.set(amedesktop);
        console.clear();
        topbar();
        console.log("skydive to is a game like tetrio. you can play it from itch.io");
        window.open("https://exmuh.itch.io/skydive-to");
    }

    back = () =>{
        locateManager.unsetLast()();
    }

    home = () =>{
        locateManager.unsetTo(main)();
    }

    main();
})();