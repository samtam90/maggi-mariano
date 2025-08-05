import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Genova",
  canonical: links.servizi["pulizia-fognature"]["genova"],
});
export default withBaseProps({
  title: "Pulizia fognature Genova",
  locationNames: { label: "Genova", href: "genova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
