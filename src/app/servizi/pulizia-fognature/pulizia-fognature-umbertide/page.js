import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Umbertide",
  canonical: links.servizi["pulizia-fognature"]["umbertide"],
});
export default withBaseProps({
  title: "Pulizia fognature Umbertide",
  locationNames: { label: "Umbertide", href: "umbertide" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
