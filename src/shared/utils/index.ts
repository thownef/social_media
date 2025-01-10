import _ from "lodash";
import { PagePath } from "@/shared/core/enum";
import { Roles } from "@/shared/core/enum/role.enum";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/vi";
import "dayjs/locale/en";

dayjs.extend(relativeTime);

export const navigateWithRole = (role: Roles) => {
  switch (role) {
    case Roles.USER:
      return PagePath.HOME;
    default:
      return PagePath.HOME;
  }
};

export const transformQueryParams = (params: { [key: string]: any }) => {
  const filters: { [key: string]: any } = {};
  for (const property in params) {
    const value = params[property];
    if (value === undefined || value === null) {
      continue;
    }
    filters[`filter[${property}]`] = value;
  }
  return filters;
};

export const transformQueryString = (params: { [key: string]: any }) => {
  const filters: { [key: string]: any } = {};

  for (const property in params) {
    if (_.isArray(params[property])) {
      if (params[property].length) {
        filters[property] = params[property];
      }
    } else if (params[property]) {
      filters[property] = params[property];
    }
  }

  return new URLSearchParams(filters).toString();
};

export const getRelativeTime = (date: string | Date, locale: string = "en") => {
  const supportedLocales = ["vi", "en"];
  const currentLocale = supportedLocales.includes(locale) ? locale : "en";
  
  return dayjs(date).locale(currentLocale).fromNow();
};