import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE1MGM2MjdiNGQzMkY3ZkVGMjdhZjZjQkFENDYyNzFkZjVEOTU5ODYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MzIzNDc3MjQ1NywibmFtZSI6ImpwZXgifQ.ZKd2je5oiWkg8RRAbi7Ywc9f2EBD8m8tXJhz5mA4ewA'

async function storeNFT(imagePath, name, description) {
    // load the file from disk
    const image = await fileFromPath(imagePath)

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image,
        name,
        description,
    })
}

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}



async function main() {
    const result = await storeNFT("jpex.png", "Jpex", " Early bird NFT, get 20% off on trading fees").catch(err => {
        console.log(err);
        process.exit(1)
        
    })
    console.log(result);
}

main().catch(err => {
    console.log(err);
})