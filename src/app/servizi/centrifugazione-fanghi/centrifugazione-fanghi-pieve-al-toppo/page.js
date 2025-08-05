import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pieve al Toppo",
  canonical: links.servizi["centrifugazione-fanghi"]["pieve-al-toppo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pieve al Toppo",
  locationNames: { label: "Pieve al Toppo", href: "pieve-al-toppo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
