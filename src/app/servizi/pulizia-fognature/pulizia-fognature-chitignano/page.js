import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Chitignano",
  canonical: links.servizi["pulizia-fognature"]["chitignano"],
});
export default withBaseProps({
  title: "Pulizia fognature Chitignano",
  locationNames: { label: "Chitignano", href: "chitignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
