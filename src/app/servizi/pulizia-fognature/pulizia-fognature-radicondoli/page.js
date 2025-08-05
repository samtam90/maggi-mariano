import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Radicondoli",
  canonical: links.servizi["pulizia-fognature"]["radicondoli"],
});
export default withBaseProps({
  title: "Pulizia fognature Radicondoli",
  locationNames: { label: "Radicondoli", href: "radicondoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
