import axios from 'axios';
import { T_getSetting } from "./api/getSetting";
import { T_getSettingByKey } from "./api/getSettingByKey";
import { T_createOrUpdateSetting } from "./api/createOrUpdateSetting";
import { T_deleteSetting } from "./api/deleteSetting";
import { T_login } from "./api/login";
import { T_changeAdminPassword } from "./api/changeAdminPassword";
import { T_getAllValidDonasi } from "./api/getAllValidDonasi";
import { T_getTotalAllValidDonasi } from "./api/getTotalAllValidDonasi";
import { T_getMyDonasi } from "./api/getMyDonasi";
import { T_getMyDonasiByID } from "./api/getMyDonasiByID";
import { T_buatDonasi } from "./api/buatDonasi";
import { T_uploadBuktiDonasi } from "./api/uploadBuktiDonasi";
import { T_loginWithGoogle } from "./api/loginWithGoogle";

export namespace AxiosClient {

  function __build_path(base_url: string, url_path: string, path_param: { [key: string]: any }) {
    const build_path = url_path.replace(/:([a-zA-Z_]\w*)/g, (_, key) => {
      if (path_param[key] === undefined) {
        throw new Error(`Missing param: ${key}`);
      }
      return encodeURIComponent(String(path_param[key]));
    });
    const url = new URL((base_url.endsWith('/') ? base_url : base_url + '/') + build_path.replace(/^\/+/, ''));
    return url.toString();
  }
  export class BaseURL {
    public base_url: string = '';
    static _instance: BaseURL | undefined;
    public static get instance(): BaseURL {
      if (!BaseURL._instance) {
        BaseURL._instance = new BaseURL();
      }
      return BaseURL._instance;
    }
    private constructor(){}
    public set(_base_url: string) {
      this.base_url = _base_url;
    }
  }

  export const getSetting: T_getSetting = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/setting', {});
    return (await axios['get'](final_url, { headers: req.headers as any, })).data as any;
  }
  export const getSettingByKey: T_getSettingByKey = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/setting/:key', req.path);
    return (await axios['get'](final_url, { headers: req.headers as any, })).data as any;
  }
  export const createOrUpdateSetting: T_createOrUpdateSetting = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/setting', {});
    return (await axios['post'](final_url, req.body, { headers: req.headers as any, })).data as any;
  }
  export const deleteSetting: T_deleteSetting = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/setting/:key', req.path);
    return (await axios['delete'](final_url, { headers: req.headers as any, })).data as any;
  }
  export const login: T_login = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/login', {});
    return (await axios['post'](final_url, req.body, { })).data as any;
  }
  export const changeAdminPassword: T_changeAdminPassword = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/admin/change-password', {});
    return (await axios['post'](final_url, req.body, { })).data as any;
  }
  export const getAllValidDonasi: T_getAllValidDonasi = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/donasi', {});
    return (await axios['get'](final_url, { })).data as any;
  }
  export const getTotalAllValidDonasi: T_getTotalAllValidDonasi = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/total-donasi', {});
    return (await axios['get'](final_url, { })).data as any;
  }
  export const getMyDonasi: T_getMyDonasi = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/my-donasi', {});
    return (await axios['get'](final_url, { headers: req.headers as any, })).data as any;
  }
  export const getMyDonasiByID: T_getMyDonasiByID = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/my-donasi/:id', req.path);
    return (await axios['get'](final_url, { headers: req.headers as any, })).data as any;
  }
  export const buatDonasi: T_buatDonasi = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/my-donasi', {});
    return (await axios['post'](final_url, req.body, { headers: req.headers as any, })).data as any;
  }
  export const uploadBuktiDonasi: T_uploadBuktiDonasi = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/my-donasi/:id/upload-bukti', req.path);
    return (await axios['post'](final_url, req.body, { headers: req.headers as any, })).data as any;
  }
  export const loginWithGoogle: T_loginWithGoogle = async (req, base_url: string = BaseURL.instance.base_url) => {
    const final_url = __build_path(base_url, '/login-with-google', {});
    return (await axios['post'](final_url, req.body, { })).data as any;
  }
}