import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pieve al Toppo",
  canonical: links.servizi["frantoio-mobile-inerti"]["pieve-al-toppo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pieve al Toppo",
  locationNames: { label: "Pieve al Toppo", href: "pieve-al-toppo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
