import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const userAdmin = this.showUserProfileUseCase.execute({
        user_id: user_id.toString(),
      });
      return response.status(200).json(userAdmin);
    } catch (e) {
      return response.status(404).json({ error: e.message });
    }
  }
}

export { ShowUserProfileController };
