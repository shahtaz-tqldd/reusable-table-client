import {
  CrossCircledIcon,
  HeartIcon,
  LightningBoltIcon,
  MixIcon,
  MoonIcon,
  PersonIcon,
  TargetIcon,
} from "@radix-ui/react-icons"

export const genders = [
  {
    value: "Male",
    label: "Male",
    icon: PersonIcon,
  },
  {
    value: "Female",
    label: "Female",
    icon: HeartIcon,
  },
  {
    value: "Bigender",
    label: "Bigender",
    icon: MoonIcon,
  },
  {
    value: "Agender",
    label: "Agender",
    icon: TargetIcon,
  },
  {
    value: "Genderqueer",
    label: "Genderqueer",
    icon: CrossCircledIcon,
  },
  {
    value: "Non-binary",
    label: "Non-binary",
    icon: LightningBoltIcon,
  },
  {
    value: "Polygender",
    label: "Polygender",
    icon: MixIcon,
  },
]