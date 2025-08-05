import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montalcino",
  canonical: links.servizi["pulizia-fognature"]["montalcino"],
});
export default withBaseProps({
  title: "Pulizia fognature Montalcino",
  locationNames: { label: "Montalcino", href: "montalcino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
