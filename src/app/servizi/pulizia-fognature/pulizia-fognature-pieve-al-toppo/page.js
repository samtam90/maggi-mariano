import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pieve al Toppo",
  canonical: links.servizi["pulizia-fognature"]["pieve-al-toppo"],
});
export default withBaseProps({
  title: "Pulizia fognature Pieve al Toppo",
  locationNames: { label: "Pieve al Toppo", href: "pieve-al-toppo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
