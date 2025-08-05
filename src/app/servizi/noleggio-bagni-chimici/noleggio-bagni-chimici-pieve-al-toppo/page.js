import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pieve al Toppo",
  canonical: links.servizi["noleggio-bagni-chimici"]["pieve-al-toppo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pieve al Toppo",
  locationNames: { label: "Pieve al Toppo", href: "pieve-al-toppo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
