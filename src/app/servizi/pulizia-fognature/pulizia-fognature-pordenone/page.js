import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pordenone",
  canonical: links.servizi["pulizia-fognature"]["pordenone"],
});
export default withBaseProps({
  title: "Pulizia fognature Pordenone",
  locationNames: { label: "Pordenone", href: "pordenone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
