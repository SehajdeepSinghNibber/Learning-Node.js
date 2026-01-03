import * as fs  from 'fs/promises'

//Creating a Dirctory

try {
    await fs.mkdir('c:\\nodejs\\courses',{recursive:true})//even if nodejs diresctory is not present it will create it by force and inside it, it will create courses directory
    console.log("Folder Created...")
} catch (error) {
    console.log(error)
}
