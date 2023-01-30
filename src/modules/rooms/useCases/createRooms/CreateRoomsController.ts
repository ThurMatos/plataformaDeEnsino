import { Request, Response } from "express";
import { CreateRoomsUseCase } from "./CreateRoomsUseCase";

interface IRequest{
    password: string;
}

export class CreateRoomsControllers {

    async handle(request: Request, response: Response): Promise<Response> {

        const { password } = request.body;

        const createRoomsUseCase = new CreateRoomsUseCase();

       
        const room = await createRoomsUseCase.execute({password});

        return response.status(201).json(room)

    }

}