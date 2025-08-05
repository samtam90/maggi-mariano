import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ortignano Raggiolo",
  canonical: links.servizi["pulizia-fognature"]["ortignano-raggiolo"],
});
export default withBaseProps({
  title: "Pulizia fognature Ortignano Raggiolo",
  locationNames: { label: "Ortignano Raggiolo", href: "ortignano-raggiolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
