import { Router } from "express";
import { CreateRoomsControllers } from "../modules/rooms/useCases/createRooms/CreateRoomsController";
import { ListRoomsController } from "../modules/rooms/useCases/listRooms/ListRoomsController";

const createRoomsController = new CreateRoomsControllers();
const listRoomsController = new ListRoomsController();

const roomRoutes = Router();

roomRoutes.post("/", createRoomsController.handle);
roomRoutes.get("/", listRoomsController.handle);

export { roomRoutes }; 