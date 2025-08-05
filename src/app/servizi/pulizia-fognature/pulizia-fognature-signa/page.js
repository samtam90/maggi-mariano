import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Signa",
  canonical: links.servizi["pulizia-fognature"]["signa"],
});
export default withBaseProps({
  title: "Pulizia fognature Signa",
  locationNames: { label: "Signa", href: "signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
