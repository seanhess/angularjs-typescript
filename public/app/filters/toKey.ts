
// turns a name into a key can use for classes and such
export function main() {
    return toKey
}

export function toKey(name:string):string {
    return name.toString().replace(/\W/g,"_").toLowerCase()
}

