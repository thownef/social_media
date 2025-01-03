import { GenderEnum, GenderEnumUsingName } from "@/modules/auth/core/enum/gender.enum";
import { OptionSelect } from "@/shared/core/types";

export const GenderOption: OptionSelect[] = [
  { label: GenderEnumUsingName[GenderEnum.MALE], value: GenderEnum.MALE },
  { label: GenderEnumUsingName[GenderEnum.FEMALE], value: GenderEnum.FEMALE },
];
