import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Camucia",
  canonical: links.servizi["noleggio-bagni-chimici"]["camucia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Camucia",
  locationNames: { label: "Camucia", href: "camucia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
