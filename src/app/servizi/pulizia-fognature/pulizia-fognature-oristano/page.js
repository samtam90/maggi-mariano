import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Oristano",
  canonical: links.servizi["pulizia-fognature"]["oristano"],
});
export default withBaseProps({
  title: "Pulizia fognature Oristano",
  locationNames: { label: "Oristano", href: "oristano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
