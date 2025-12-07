import { AxiosClient } from "@/api-client/AxiosClient";
import { UserSession } from "@/user-session";
import { Button } from "@heroui/react";
import { googleLogout, useGoogleLogin, type CodeResponse } from "@react-oauth/google";
import { useState } from "react";

interface GoogleLoginButtonProps {
  onSuccess?(): void
}

export interface GoogleInfoData {
  email: string
  family_name: string
  given_name: string
  hd: string
  id: string
  locale: string
  name: string
  picture: string
  verified_email: boolean
}


export function GoogleLoginButton(props: GoogleLoginButtonProps) {
  const [loading_login_google, setLoadingLoginGoogle] = useState<boolean>(false);

  const loginGoogle = useGoogleLogin({
    onSuccess: onGoogleSuccess,
    flow: "auth-code",
  });

  async function onGoogleSuccess(codeResponse: Omit<CodeResponse, "error" | "error_description" | "error_uri">) {
    googleLogout();
    setLoadingLoginGoogle(true);
    try {
      const res = await AxiosClient.loginWithGoogle({
        body: {
          google_access_token: codeResponse.code
        }
      });
      UserSession.setUser(res.token, res.user);
      if (props.onSuccess) {
        props.onSuccess();
      } else {
        window.location.reload();
      }
    } catch (err: any) {
      alert(err?.response?.data?.toString());
    } finally {
      setLoadingLoginGoogle(false);
    }
  }

  return (
    <Button 
      isLoading={loading_login_google}
      onPress={() => loginGoogle()}
      variant="bordered"
      className="!bg-white !border-zinc-400 !text-zinc-800">
      <GoogleIcon size={16} className="min-w-[16px]" />
      Login with Google
    </Button>
  );
}

interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const GoogleIcon: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    width={size || height}
    viewBox="0 0 533.5 544.3"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M533.5 278.4c0-18.6-1.5-37.3-4.7-55.3H272v104.8h147.1c-6.4 34.4-25.5 63.6-54.4 83.1v68h87.7c51.4-47.3 81.1-117 81.1-200.6z"
    />
    <path
      fill="#34A853"
      d="M272 544.3c73.6 0 135.4-24.5 180.5-66.6l-87.7-68c-24.3 16.2-55.4 25.7-92.8 25.7-71.3 0-131.8-48.1-153.5-112.7H28v70.9C73.2 477.1 166.9 544.3 272 544.3z"
    />
    <path
      fill="#FBBC05"
      d="M118.5 322.7c-10.4-30.4-10.4-63.3 0-93.7V158h-90.5C7.9 192.6 0 231.6 0 272s7.9 79.4 28 114l90.5-70.9z"
    />
    <path
      fill="#EA4335"
      d="M272 107.7c39.9 0 75.8 13.7 104.1 40.5l78-78C408.1 24.5 345.6 0 272 0 166.9 0 73.2 67.2 28 158l90.5 70.9C140.2 155.8 200.7 107.7 272 107.7z"
    />
  </svg>
);
