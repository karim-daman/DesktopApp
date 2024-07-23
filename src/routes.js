import { ChunkGenerator } from 'svelte-spa-chunk'
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
const Chunk = ChunkGenerator(ChunkComponent)

/**
 * @description Client Side Render Index
 */
export default {
    '/':        Chunk(()=> import('./routes/Home.svelte')),
    '/NotFound':  Chunk(()=> import('./routes/NotFound.svelte')),

    '*':        Chunk(()=> import('./routes/NotFound.svelte')),
}