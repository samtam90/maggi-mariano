import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pontassieve",
  canonical: links.servizi["pulizia-fognature"]["pontassieve"],
});
export default withBaseProps({
  title: "Pulizia fognature Pontassieve",
  locationNames: { label: "Pontassieve", href: "pontassieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
