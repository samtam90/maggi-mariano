import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Impruneta",
  canonical: links.servizi["pulizia-fognature"]["impruneta"],
});
export default withBaseProps({
  title: "Pulizia fognature Impruneta",
  locationNames: { label: "Impruneta", href: "impruneta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
