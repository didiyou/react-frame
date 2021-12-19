function scopedClassMaker(prefix:string){
    return function x(name?:string){
        return ['rui-dialog',name].filter(Boolean).join('-')
    }
}

export {scopedClassMaker}