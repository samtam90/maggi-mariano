import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lastra a Signa",
  canonical: links.servizi["pulizia-fognature"]["lastra-a-signa"],
});
export default withBaseProps({
  title: "Pulizia fognature Lastra a Signa",
  locationNames: { label: "Lastra a Signa", href: "lastra-a-signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
