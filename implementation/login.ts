import { signJWT } from "../jwt";
import { T_login } from "../types/api/login";
import { Admin } from "../types/model/table/Admin";
import bcrypt from 'bcrypt';

export const login: T_login = async req => {
  const admin = await Admin.findOneBy({ username: req.body.username });
  if (!admin) {
    throw new Error(`admin not found`);
  }

  if (!await bcrypt.compare(req.body.password, admin.password)) {
    throw new Error(`wrong password`);
  }

  return {
    token: signJWT(admin.id),
    user: admin
  };
}
