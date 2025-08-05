import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monte San Savino",
  canonical: links.servizi["pulizia-fognature"]["monte-san-savino"],
});
export default withBaseProps({
  title: "Pulizia fognature Monte San Savino",
  locationNames: { label: "Monte San Savino", href: "monte-san-savino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
