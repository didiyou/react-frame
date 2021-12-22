interface Options{
    extra:string|undefined;
}

interface ClassToggles{
    [K:string]:boolean
}
function scopedClassMaker(prefix:string){
    return function (name:string | ClassToggles,options?:Options){
        const name2 = (typeof name === 'string' || name === undefined) ? 
        {[name]:name} : name
        const scoped = Object.entries(name2)
        .filter(kv=>kv[1] !== false)
        .map(kv=>kv[0])
        .map(name=>[prefix,name]
        .filter(Boolean).join('-')).join(' ')
        if(options&&options.extra){return [scoped,options.extra].filter(Boolean).join(' ')}
        else{
            return scoped
        }
    }
}
 
export {scopedClassMaker}