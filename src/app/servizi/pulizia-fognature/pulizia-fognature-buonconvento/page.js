import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Buonconvento",
  canonical: links.servizi["pulizia-fognature"]["buonconvento"],
});
export default withBaseProps({
  title: "Pulizia fognature Buonconvento",
  locationNames: { label: "Buonconvento", href: "buonconvento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
