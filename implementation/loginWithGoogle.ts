import _, { max } from "lodash";
import { signJWT } from "../jwt";
import { T_loginWithGoogle } from "../types/api/loginWithGoogle";
import { verifyGoogleLogin } from "../verify-google-login";
import { Donatur } from "../types/model/table/Donatur";

export const loginWithGoogle: T_loginWithGoogle = async req => {
  const data = await verifyGoogleLogin(req.body.google_access_token);
  if (!data || !data?.email) {
    throw new Error(`user account doesnt have email`);
  }

  let user = await Donatur.findOneBy({ email: data.email });
  if (!user) {
    user = new Donatur();
    user.nama = data.name || '<google account>';
    user.email = data.email;
    user.google_user_id = data.sub;
    await user.save();
  }

  return {
    token: signJWT(user.id),
    user
  }
}
