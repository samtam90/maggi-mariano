import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sarteano",
  canonical: links.servizi["pulizia-fognature"]["sarteano"],
});
export default withBaseProps({
  title: "Pulizia fognature Sarteano",
  locationNames: { label: "Sarteano", href: "sarteano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
