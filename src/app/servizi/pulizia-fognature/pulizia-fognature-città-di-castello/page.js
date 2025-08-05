import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Città di Castello",
  canonical: links.servizi["pulizia-fognature"]["città-di-castello"],
});
export default withBaseProps({
  title: "Pulizia fognature Città di Castello",
  locationNames: { label: "Città di Castello", href: "città-di-castello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
