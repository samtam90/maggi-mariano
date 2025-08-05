import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Capraia e Limite",
  canonical: links.servizi["pulizia-fognature"]["capraia-e-limite"],
});
export default withBaseProps({
  title: "Pulizia fognature Capraia e Limite",
  locationNames: { label: "Capraia e Limite", href: "capraia-e-limite" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
