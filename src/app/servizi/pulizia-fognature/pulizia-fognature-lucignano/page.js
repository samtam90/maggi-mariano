import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lucignano",
  canonical: links.servizi["pulizia-fognature"]["lucignano"],
});
export default withBaseProps({
  title: "Pulizia fognature Lucignano",
  locationNames: { label: "Lucignano", href: "lucignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
