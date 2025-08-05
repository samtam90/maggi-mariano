import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castelnuovo Berardenga",
  canonical: links.servizi["pulizia-fognature"]["castelnuovo-berardenga"],
});
export default withBaseProps({
  title: "Pulizia fognature Castelnuovo Berardenga",
  locationNames: { label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
