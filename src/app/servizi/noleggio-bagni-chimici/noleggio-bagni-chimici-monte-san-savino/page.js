import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monte San Savino",
  canonical: links.servizi["noleggio-bagni-chimici"]["monte-san-savino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Monte San Savino",
  locationNames: { label: "Monte San Savino", href: "monte-san-savino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
