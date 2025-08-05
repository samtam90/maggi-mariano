import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Belluno",
  canonical: links.servizi["pulizia-fognature"]["belluno"],
});
export default withBaseProps({
  title: "Pulizia fognature Belluno",
  locationNames: { label: "Belluno", href: "belluno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
