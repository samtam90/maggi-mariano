import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sondrio",
  canonical: links.servizi["pulizia-fognature"]["sondrio"],
});
export default withBaseProps({
  title: "Pulizia fognature Sondrio",
  locationNames: { label: "Sondrio", href: "sondrio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["sondrio"],
      name: "Sondrio",
  }),
});
