   let object = {params: Return()}
   fetch('/try.html',object.params)
    //console.log(object.params);

    function Return()
    {
        let value = window.location;
        return value;

    }

    function fetch(url, params)
    {
        try{
          fetch(url, {method: "GET", body:JSON.stringify(params)});
        } catch(e){
            console.error("Failed to fetch")
        }
    }
