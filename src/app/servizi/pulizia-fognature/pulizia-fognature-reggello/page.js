import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Reggello",
  canonical: links.servizi["pulizia-fognature"]["reggello"],
});
export default withBaseProps({
  title: "Pulizia fognature Reggello",
  locationNames: { label: "Reggello", href: "reggello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
