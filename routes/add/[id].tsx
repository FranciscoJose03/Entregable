import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"
import { Books } from "../../types.ts";
import BookModel from "../../db/Books.ts";

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Books>) => {        
            const {id} = ctx.params;    
            const book = BookModel.findOne({id: id})
        
            return ctx.render()
    }
}
