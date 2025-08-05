import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Certaldo",
  canonical: links.servizi["pulizia-fognature"]["certaldo"],
});
export default withBaseProps({
  title: "Pulizia fognature Certaldo",
  locationNames: { label: "Certaldo", href: "certaldo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
