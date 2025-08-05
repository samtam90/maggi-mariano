import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Imperia",
  canonical: links.servizi["pulizia-fognature"]["imperia"],
});
export default withBaseProps({
  title: "Pulizia fognature Imperia",
  locationNames: { label: "Imperia", href: "imperia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
