import {
  BaseService,
  Ok,
  throwBadRequest,
  throwServerError,
} from "@/app/api/_utils";
import { STATUS_ENUM, validateEmail } from "@/utils";
import { CreateBusinessContactDto, CreateBusinessContactResponse } from "./dto";
import { BusinessContactModel } from "@/app/api/_entities";

export class BusinessContactService extends BaseService {
  public createBusinessContact = async (payload: CreateBusinessContactDto) => {
    try {
      const { email } = payload;

      if (!validateEmail(email)) {
        return throwBadRequest("EMAIL_NOT_VALID");
      }

      const result = await BusinessContactModel.create({
        ...payload,
        isContacted: false,
        createAt: Date.now().toString(),
        status: STATUS_ENUM.ENABLE,
      });

      return Ok<CreateBusinessContactResponse>({ data: result });
    } catch (error) {
      console.log({ error });
      return throwServerError();
    }
  };
}
