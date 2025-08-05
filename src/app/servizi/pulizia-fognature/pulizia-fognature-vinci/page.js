import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vinci",
  canonical: links.servizi["pulizia-fognature"]["vinci"],
});
export default withBaseProps({
  title: "Pulizia fognature Vinci",
  locationNames: { label: "Vinci", href: "vinci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
