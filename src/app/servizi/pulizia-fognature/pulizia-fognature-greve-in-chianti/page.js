import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Greve in Chianti",
  canonical: links.servizi["pulizia-fognature"]["greve-in-chianti"],
});
export default withBaseProps({
  title: "Pulizia fognature Greve in Chianti",
  locationNames: { label: "Greve in Chianti", href: "greve-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
