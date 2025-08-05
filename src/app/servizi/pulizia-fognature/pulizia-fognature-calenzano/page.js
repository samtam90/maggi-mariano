import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Calenzano",
  canonical: links.servizi["pulizia-fognature"]["calenzano"],
});
export default withBaseProps({
  title: "Pulizia fognature Calenzano",
  locationNames: { label: "Calenzano", href: "calenzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
