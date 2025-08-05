import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Camucia",
  canonical: links.servizi["pulizia-fognature"]["camucia"],
});
export default withBaseProps({
  title: "Pulizia fognature Camucia",
  locationNames: { label: "Camucia", href: "camucia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
