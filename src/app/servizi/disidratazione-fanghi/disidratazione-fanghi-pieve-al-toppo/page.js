import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pieve al Toppo",
  canonical: links.servizi["disidratazione-fanghi"]["pieve-al-toppo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pieve al Toppo",
  locationNames: { label: "Pieve al Toppo", href: "pieve-al-toppo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
