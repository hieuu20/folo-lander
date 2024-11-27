import {
  BaseService,
  Ok,
  throwBadRequest,
  throwServerError,
} from "@/app/api/_utils";
import { STATUS_ENUM, validateEmail } from "@/utils";
import { CreateAgencyContactDto, CreateAgencyContactResponse } from "./dto";
import { AgencyContactModel } from "@/app/api/_entities";

export class AgencyContactService extends BaseService {
  public createAgencyContact = async (payload: CreateAgencyContactDto) => {
    try {
      const { email } = payload;

      if (!validateEmail(email)) {
        return throwBadRequest("EMAIL_NOT_VALID");
      }

      const result = await AgencyContactModel.create({
        ...payload,
        isContacted: false,
        createAt: Date.now().toString(),
        status: STATUS_ENUM.ENABLE,
      });

      return Ok<CreateAgencyContactResponse>({data: result});
    } catch (error) {
      console.log({ error });
      return throwServerError();
    }
  };
}
